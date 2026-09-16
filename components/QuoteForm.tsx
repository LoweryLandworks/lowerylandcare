"use client";

import { useState, useTransition } from "react";
import { submitQuote } from "@/lib/actions";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const inputClass =
  "h-12 w-full rounded-lg border-2 border-forest/25 bg-white px-4 text-base text-ink placeholder:text-ink/40 focus:border-forest focus:outline-none";

// Quote-first lead capture: minimal fields, single column, 48px targets.
export function QuoteForm({ dark = false }: { dark?: boolean }) {
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

  const labelClass = `mb-1.5 block text-sm font-bold ${
    dark ? "text-olive-pale" : "text-ink"
  }`;

  if (done) {
    return (
      <div
        className={`rounded-2xl border-2 p-8 text-center ${
          dark
            ? "border-olive bg-forest text-olive-pale"
            : "border-forest bg-white text-ink"
        }`}
      >
        <p className="display text-2xl text-olive">Got it!</p>
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
          defaultValue=""
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

      {error && (
        <p
          role="alert"
          className={`rounded-lg border-2 border-red-700/40 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800`}
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

      <p
        className={`text-center text-xs ${
          dark ? "text-olive-pale/70" : "text-ink/60"
        }`}
      >
        No spam, no pressure. We reply with a real price — locally owned &
        insured.
      </p>
    </form>
  );
}
