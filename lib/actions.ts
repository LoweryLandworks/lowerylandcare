"use server";

import { z } from "zod";
import { Resend } from "resend";
import { getSupabaseAdmin } from "./supabase";
import { SITE } from "./site";

// Identifies Lowery Landworks rows in the shared `leads` table (separates
// them from Dallas Best leads, which use other `source` values).
const LEAD_SOURCE = "lowerys-landscaping";

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_HOURS = 1;

const QuoteSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number."),
  address: z
    .string()
    .trim()
    .min(3, "Please enter your address or ZIP code."),
  service: z.string().trim().min(1, "Please pick a service."),
  // "weekly" | "biweekly" | "one-time" — optional customer preference.
  frequency: z.string().trim().optional(),
  // "home" | "business" — residential vs commercial property.
  propertyType: z.string().trim().optional(),
  // Unchecked-by-default SMS consent checkbox on the quote form.
  smsConsent: z.boolean().optional(),
  // Honeypot — hidden from real users; any value means a bot filled the form.
  company: z.string().optional(),
});

export interface QuoteInput {
  name: string;
  phone: string;
  address: string;
  service: string;
  frequency?: string;
  propertyType?: string;
  smsConsent?: boolean;
  company?: string;
}

export interface QuoteResult {
  success: boolean;
  error?: string;
  /** Pushed to window.dataLayer by the client on success. */
  gtmEvent?: Record<string, unknown>;
}

async function notifyNewLead(params: {
  name: string;
  phone: string;
  address: string;
  service: string;
  frequency?: string;
  propertyType?: string;
  smsConsent?: boolean;
}) {
  // Notification failure must never lose the lead — it's already in the DB.
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.NOTIFICATION_EMAIL;
    if (!apiKey || !to) {
      console.warn("Lead notification skipped: RESEND_API_KEY or NOTIFICATION_EMAIL not set");
      return;
    }
    const resend = new Resend(apiKey);
    const from =
      process.env.RESEND_FROM_EMAIL ||
      "Lowery Landworks <onboarding@resend.dev>";

    const extraRows = [
      params.frequency
        ? `<tr><td style="padding: 8px 0; color: #6b7280;">Frequency</td><td style="padding: 8px 0; color: #111827; font-weight: bold;">${params.frequency}</td></tr>`
        : "",
      params.propertyType
        ? `<tr><td style="padding: 8px 0; color: #6b7280;">Property type</td><td style="padding: 8px 0; color: #111827; font-weight: bold;">${params.propertyType === "business" ? "Business / commercial" : "Home / residential"}</td></tr>`
        : "",
      `<tr><td style="padding: 8px 0; color: #6b7280;">SMS consent</td><td style="padding: 8px 0; color: #111827; font-weight: bold;">${params.smsConsent ? "Yes — can text about this quote" : "No"}</td></tr>`,
    ].join("");

    await resend.emails.send({
      from,
      to,
      subject: `New Lawn Care Lead — ${params.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; background: #eef0d8;">
          <div style="background: #ffffff; border-radius: 12px; padding: 28px; border: 2px solid #1e3315;">
            <h1 style="font-size: 20px; color: #1e3315; margin: 0 0 4px; text-transform: uppercase; letter-spacing: 1px;">New Lawn Care Lead</h1>
            <p style="color: #6b7280; font-size: 13px; margin: 0 0 20px;">Lowery Landworks — website quote form</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr><td style="padding: 8px 0; color: #6b7280; width: 110px;">Name</td><td style="padding: 8px 0; color: #111827; font-weight: bold;">${params.name}</td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;">Phone</td><td style="padding: 8px 0;"><a href="tel:${params.phone}" style="color: #1e3315; font-weight: bold;">${params.phone}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;">Address</td><td style="padding: 8px 0; color: #111827;">${params.address}</td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;">Service</td><td style="padding: 8px 0; color: #111827; font-weight: bold;">${params.service}</td></tr>
              ${extraRows}
            </table>
            <p style="margin: 20px 0 0; font-size: 13px; color: #6b7280;">Call or text back fast — quote-form leads go cold quickly.</p>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error(
      "Lead notification email failed:",
      err instanceof Error ? err.message : err
    );
  }
}

export async function submitQuote(input: QuoteInput): Promise<QuoteResult> {
  try {
    const parsed = QuoteSchema.safeParse(input);
    if (!parsed.success) {
      return {
        success: false,
        error:
          parsed.error.issues[0]?.message ||
          "Please check the form and try again.",
      };
    }

    const { name, phone, address, service, frequency, propertyType, smsConsent, company } =
      parsed.data;

    // Honeypot — pretend success so bots don't learn they were caught.
    if (company && company.trim().length > 0) {
      return { success: true };
    }

    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      return { success: false, error: "Please enter a valid phone number." };
    }

    const supabase = getSupabaseAdmin();

    // Basic rate limit — cap repeat submissions from the same phone number.
    const since = new Date(
      Date.now() - RATE_LIMIT_WINDOW_HOURS * 60 * 60 * 1000
    ).toISOString();
    const { count } = await supabase
      .from("leads")
      .select("id", { count: "exact", head: true })
      .eq("phone", cleanPhone)
      .eq("source", LEAD_SOURCE)
      .gte("created_at", since);

    if ((count ?? 0) >= RATE_LIMIT_MAX) {
      return {
        success: false,
        error: `You've already sent us a few requests recently. Call or text us directly at ${SITE.phoneDisplay} and we'll help right away.`,
      };
    }

    const { error: insertError } = await supabase.from("leads").insert({
      name,
      phone: cleanPhone,
      services: [service],
      service_address: address,
      status: "new",
      source: LEAD_SOURCE,
      // sms_consent column exists on the shared leads table (added 2026-09-15).
      sms_consent: smsConsent === true,
      notes: [
        frequency ? `Requested frequency: ${frequency}` : null,
        propertyType
          ? `Property type: ${propertyType === "business" ? "Business / commercial" : "Home / residential"}`
          : null,
      ]
        .filter(Boolean)
        .join(" · ") || null,
    });

    if (insertError) {
      throw new Error(`Lead DB error: ${insertError.message}`);
    }

    // Fire-and-forget: the lead is saved; email failure shouldn't fail the request.
    await notifyNewLead({
      name,
      phone: cleanPhone,
      address,
      service,
      frequency,
      smsConsent,
    });

    return {
      success: true,
      gtmEvent: {
        event: "lead_submitted",
        service,
      },
    };
  } catch (err) {
    console.error(
      "submitQuote error:",
      err instanceof Error ? err.message : err
    );
    return {
      success: false,
      error: `Something went wrong sending your request. Call or text us at ${SITE.phoneDisplay} instead.`,
    };
  }
}
