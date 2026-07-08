import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Lowery's Landscaping.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="display text-4xl text-forest">Terms of Service</h1>
      <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/85">
        <p>
          These terms apply to your use of{" "}
          {SITE.domain.replace("https://", "")} and the services provided by{" "}
          {SITE.name}.
        </p>
        <h2 className="display pt-2 text-xl text-forest">Quotes</h2>
        <p>
          Quotes are provided free of charge and confirmed with you before any
          work is scheduled. The confirmed quote is the price you pay for the
          described work. If the scope of a job changes, we&apos;ll agree on
          any new price with you before doing additional work.
        </p>
        <h2 className="display pt-2 text-xl text-forest">Scheduling</h2>
        <p>
          Service dates may shift due to weather. If we need to move your
          visit, we&apos;ll let you know. You may cancel or reschedule a visit
          at no charge with reasonable notice.
        </p>
        <h2 className="display pt-2 text-xl text-forest">Payment</h2>
        <p>
          Payment is due after the work is completed unless we agree
          otherwise. We&apos;ll never bill you more than the quoted price for
          the quoted work.
        </p>
        <h2 className="display pt-2 text-xl text-forest">Property access</h2>
        <p>
          Please make sure gates are unlocked and pets are inside during your
          service window. We treat your property with care and will report any
          issue to you directly.
        </p>
        <h2 className="display pt-2 text-xl text-forest">Contact</h2>
        <p>
          Questions about these terms? Call us at {SITE.phoneDisplay}.
        </p>
      </div>
    </section>
  );
}
