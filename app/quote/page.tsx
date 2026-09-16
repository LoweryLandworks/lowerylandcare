import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { QuoteForm } from "@/components/QuoteForm";
import { Fern } from "@/components/LeafDeco";
import { TrustBadges, HowItWorks } from "@/components/Trust";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Get an exact outdoor property maintenance price in 30 seconds — no site-visit sales pitch. Serving Dallas, Fort Worth, Denton, Plano, Frisco and the whole DFW metroplex, TX.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <>
      <section
        id="quote"
        className="relative overflow-hidden bg-forest text-olive-pale"
      >
        <Fern className="absolute -right-10 -top-8 h-80 w-52 rotate-12 text-olive/10" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
          <div>
            <h1 className="display text-4xl text-olive sm:text-5xl">
              Get your free quote
            </h1>
            <p className="mt-4 max-w-md text-lg text-olive-pale/85">
              30 seconds, a few quick questions. We reply with an{" "}
              <strong className="text-olive-pale">exact price</strong> — and
              that&apos;s the price you pay. No surprise upcharges.
            </p>
            <p className="mt-5 text-base text-olive-pale/85">
              Rather talk to a person?
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="display mt-1 inline-block text-3xl text-olive underline-offset-4 hover:underline"
            >
              {SITE.phoneDisplay}
            </a>
            <div className="mt-6">
              <TrustBadges dark />
            </div>
          </div>
          <div className="rounded-2xl bg-olive-pale p-6 sm:p-8">
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="display text-3xl text-forest">
          What happens after you hit send
        </h2>
        <div className="mt-8">
          <HowItWorks />
        </div>
      </section>
    </>
  );
}
