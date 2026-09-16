"use client";

import { Suspense, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { submitQuote } from "@/lib/actions";
import { SERVICES, getService } from "@/lib/services";
import { SITE } from "@/lib/site";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const inputClass =
  "h-12 w-full rounded-lg border-2 border-forest/25 bg-white px-4 text-base text-ink placeholder:text-ink/40 focus:border-forest focus:outline-none";

const FREQUENCIES = [
  { value: "weekly", label: "Weekly" },
  { value: "biweekly", label: "Every 2 weeks" },
  { value: "one-time", label: "One-time / not sure" },
] as const;

/** Quote-first lead capture: minimal fields, single column, 48px targets. */
function QuoteFormInner({
  initialService = "",
  initialFrequency = "",
  initialPropertyType = "",
}: {
  initialService?: string;
  initialFrequency?: string;
  initialPropertyType?: string;
}) {
  const [pending, startTransition] = useTransition();
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);

    startTransition(async () => {
      const result = await submitQuote({
        name: String(fd.get("name") || ""),
        phone: String(fd.get("phone") || ""),
        address: String(fd.get("address") || ""),
        service: String(fd.get("service") || ""),
        frequency: String(fd.get("frequency") || "") || undefined,
        propertyType: String(fd.get("propertyType") || "") || undefined,
        smsConsent: fd.get("smsConsent") === "on",
        company: String(fd.get("company") || ""),
      });

      if (result.success) {
        setDone(true);
        if (result.gtmEvent) {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push(result.gtmEvent);
        }
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    });
  }

  const labelClass = `mb-1.5 block text-sm font-bold text-ink`;

  if (done) {
    return (
      <div className="rounded-2xl border-2 border-forest bg-white p-8 text-center text-ink">
        <p className="display text-2xl text-forest">Got it!</p>
        <p className="mt-3 text-base">
          Thanks — we&apos;ll call or text you shortly with your exact price
          and available times.
        </p>
        <p className="mt-4 text-sm opacity-80">
          Need us right now? Call{" "}
          <a
            href={`tel:${SITE.phoneTel}`}
            className="font-bold underline underline-offset-2"
          >
            {SITE.phoneDisplay}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot — hidden from real users, catches bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="q-name" className={labelClass}>
          Name
        </label>
        <input
          id="q-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="q-phone" className={labelClass}>
          Phone
        </label>
        <input
          id="q-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="(555) 555-5555"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="q-address" className={labelClass}>
          Address or ZIP code
        </label>
        <input
          id="q-address"
          name="address"
          type="text"
          required
          autoComplete="street-address"
          placeholder="Street address or ZIP"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="q-service" className={labelClass}>
          What do you need?
        </label>
        <select
          id="q-service"
          name="service"
          required
          defaultValue={initialService}
          className={`${inputClass} appearance-none`}
        >
          <option value="" disabled>
            Pick a service
          </option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.shortName}>
              {s.shortName}
            </option>
          ))}
          <option value="Not sure / something else">
            Not sure / something else
          </option>
        </select>
      </div>

      <fieldset>
        <legend className={labelClass}>How often?</legend>
        <div className="grid grid-cols-3 gap-2">
          {FREQUENCIES.map((f) => (
            <label
              key={f.value}
              className="flex min-h-12 cursor-pointer items-center justify-center rounded-lg border-2 border-forest/25 bg-white px-2 py-2.5 text-center text-sm font-bold text-ink transition-colors has-checked:border-forest has-checked:bg-forest has-checked:text-white"
            >
              <input
                type="radio"
                name="frequency"
                value={f.value}
                defaultChecked={initialFrequency === f.value}
                className="sr-only"
              />
              {f.label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className={labelClass}>Is this for a home or a business?</legend>
        <div className="grid grid-cols-2 gap-2">
          {[
            { value: "home", label: "Home" },
            { value: "business", label: "Business" },
          ].map((p) => (
            <label
              key={p.value}
              className="flex min-h-12 cursor-pointer items-center justify-center rounded-lg border-2 border-forest/25 bg-white px-2 py-2.5 text-center text-sm font-bold text-ink transition-colors has-checked:border-forest has-checked:bg-forest has-checked:text-white"
            >
              <input
                type="radio"
                name="propertyType"
                value={p.value}
                defaultChecked={initialPropertyType === p.value}
                className="sr-only"
              />
              {p.label}
            </label>
          ))}
        </div>
      </fieldset>

      {/* SMS consent — deliberately unchecked by default */}
      <label className="flex cursor-pointer items-start gap-3 rounded-lg border-2 border-forest/15 bg-white/60 p-3">
        <input
          type="checkbox"
          name="smsConsent"
          className="mt-1 h-5 w-5 shrink-0 accent-[#1874B8]"
        />
        <span className="text-xs leading-relaxed text-ink/70">
          Yes, Lowery Landworks can text me about my quote (quote details,
          scheduling, service updates). Message &amp; data rates may apply.
          Reply STOP to opt out anytime. Consent is not a condition of
          purchase.
        </span>
      </label>

      {error && (
        <p
          role="alert"
          className="rounded-lg border-2 border-red-700/40 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="h-12 w-full rounded-lg bg-lake text-base font-bold text-white transition-colors hover:bg-lake-deep disabled:opacity-60"
      >
        {pending ? "Sending…" : "Get My Free Quote"}
      </button>

      <p className="text-center text-xs text-ink/60">
        No spam, no pressure. We reply with an exact price — locally owned
        &amp; operated.
      </p>
    </form>
  );
}

/**
 * Reads ?service= (slug or name) and ?frequency= from the URL so the quiz
 * and service pages can hand off into a pre-filled quote form.
 */
function QuoteFormWithParams() {
  const params = useSearchParams();
  const rawService = params.get("service") || "";
  // Accept either a service slug (from the quiz) or a display name.
  const matched = getService(rawService) ?? SERVICES.find((s) => s.shortName === rawService);
  const frequency = params.get("frequency") || "";
  const property = params.get("property") || "";
  return (
    <QuoteFormInner
      initialService={matched ? matched.shortName : ""}
      initialFrequency={["weekly", "biweekly", "one-time"].includes(frequency) ? frequency : ""}
      initialPropertyType={["home", "business"].includes(property) ? property : ""}
    />
  );
}

export function QuoteForm() {
  return (
    <Suspense>
      <QuoteFormWithParams />
    </Suspense>
  );
}
