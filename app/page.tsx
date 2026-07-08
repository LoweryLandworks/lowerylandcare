import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { QuoteForm } from "@/components/QuoteForm";
import { Fern, Sprig } from "@/components/LeafDeco";
import {
  TrustBadges,
  HowItWorks,
  Reviews,
  CallAndQuoteButtons,
} from "@/components/Trust";

export const metadata: Metadata = {
  title: "Lowery's Landscaping — Lawn Care in Denton County, TX",
  description:
    "Mowing, cleanups, hedge trimming, mulch and more across Denton County. The price we quote is the price you pay — no surprise upcharges. Free quotes: (682) 390-5608.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* HERO — one clear promise */}
      <section className="relative overflow-hidden bg-olive">
        <Fern className="absolute -right-8 -top-10 h-80 w-52 rotate-12 text-forest/10" />
        <Sprig className="absolute -left-6 bottom-4 h-40 w-40 -rotate-12 text-forest/10" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <h1 className="display max-w-3xl text-5xl text-forest sm:text-6xl md:text-7xl">
            Your lawn, handled.
          </h1>
          <p className="mt-5 max-w-xl text-lg font-medium text-forest/90 md:text-xl">
            Mowing, cleanups & more across Denton County — on your schedule.
            The price we quote is the price you pay.{" "}
            <strong>No surprise upcharges, ever.</strong>
          </p>
          <div className="mt-8 max-w-xl">
            <CallAndQuoteButtons quoteHref="#quote" />
          </div>
          <div className="mt-6">
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="display text-3xl text-forest sm:text-4xl">
          What we do
        </h2>
        <p className="mt-2 max-w-xl text-base text-ink/75">
          Everything a Denton County yard needs, from one local crew you can
          actually get on the phone.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-2xl border-2 border-forest/15 bg-white p-6 transition-colors hover:border-forest"
            >
              <h3 className="display text-xl text-forest">{s.shortName}</h3>
              <p className="mt-2 text-base text-ink/75">{s.blurb}</p>
              <span className="mt-4 inline-block text-sm font-bold text-forest underline-offset-4 group-hover:underline">
                Details & pricing →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* TRANSPARENT PRICING — core trust pillar */}
      <section className="relative overflow-hidden bg-forest text-olive-pale">
        <Fern className="absolute -left-10 top-8 h-72 w-48 -rotate-6 text-olive/10" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <h2 className="display max-w-2xl text-3xl text-olive sm:text-4xl md:text-5xl">
            The price you see is the price you pay.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border-2 border-olive/25 p-6">
              <h3 className="display text-lg text-olive">
                One number, up front
              </h3>
              <p className="mt-2 text-base text-olive-pale/85">
                You get your exact price before we schedule anything — not an
                &ldquo;estimate&rdquo; that grows once we&apos;re in your yard.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-olive/25 p-6">
              <h3 className="display text-lg text-olive">
                No surprise upcharges
              </h3>
              <p className="mt-2 text-base text-olive-pale/85">
                If a job turns out to be more than we quoted, that&apos;s on
                us. We&apos;ll never hand you a bigger bill than the one you
                agreed to.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-olive/25 p-6">
              <h3 className="display text-lg text-olive">Pay after the work</h3>
              <p className="mt-2 text-base text-olive-pale/85">
                Look the yard over first. You pay when the work is done and
                you&apos;re happy with it — not before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="display text-3xl text-forest sm:text-4xl">
          How it works
        </h2>
        <p className="mt-2 max-w-xl text-base text-ink/75">
          Three steps. No site-visit sales pitch, no contract to sign.
        </p>
        <div className="mt-8">
          <HowItWorks />
        </div>
      </section>

      {/* REVIEWS — placeholder testimonials, see components/Trust.tsx */}
      <section className="bg-olive/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="display text-3xl text-forest sm:text-4xl">
            Neighbors who&apos;d recommend us
          </h2>
          <div className="mt-8">
            <Reviews />
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="display text-3xl text-forest sm:text-4xl">
          Proudly serving Denton County
        </h2>
        <p className="mt-2 max-w-xl text-base text-ink/75">
          We&apos;re local — based in Denton County, not dispatched from a call
          center. If you&apos;re near one of these towns, you&apos;re in our
          area:
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {SITE.cities.map((city) => (
            <li
              key={city}
              className="rounded-xl border-2 border-forest/15 bg-white px-4 py-3 text-center text-base font-bold text-forest"
            >
              {city}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-ink/60">
          Just outside these towns? Ask — we can often make it work.
        </p>
      </section>

      {/* FINAL CTA + QUOTE FORM */}
      <section
        id="quote"
        className="relative overflow-hidden bg-forest text-olive-pale"
      >
        <Sprig className="absolute -right-8 top-6 h-48 w-48 rotate-45 text-olive/10" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="display text-3xl text-olive sm:text-4xl md:text-5xl">
              Get your free quote
            </h2>
            <p className="mt-4 max-w-md text-base text-olive-pale/85 md:text-lg">
              Tell us what you need and we&apos;ll reply with an exact price —
              usually the same day. Prefer to talk?
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="display mt-4 inline-block text-3xl text-olive underline-offset-4 hover:underline"
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
    </>
  );
}
