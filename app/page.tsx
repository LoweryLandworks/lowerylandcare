import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { QuoteForm } from "@/components/QuoteForm";
import { Fern, Sprig } from "@/components/LeafDeco";
import {
  TrustBadges,
  HowItWorks,
  ReviewsComingSoon,
  CallAndQuoteButtons,
} from "@/components/Trust";
import { SeasonalBand } from "@/components/SeasonalBand";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { ReferralSection } from "@/components/ReferralSection";

export const metadata: Metadata = {
  title: "Lowery Landworks — Outdoor Property Maintenance in DFW, TX",
  description:
    "Outdoor property maintenance across the Dallas–Fort Worth metroplex: mowing, cleanups, hedge trimming, mulch and more. One exact price confirmed before work starts. Free quotes: (469) 301-1977.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* HERO — one clear promise */}
      <section className="relative overflow-hidden bg-ink">
        <Fern className="absolute -right-8 -top-10 h-80 w-52 rotate-12 text-bronze/10" />
        <Sprig className="absolute -left-6 bottom-4 h-40 w-40 -rotate-12 text-bronze/10" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-bronze">
            Outdoor property maintenance · DFW, TX
          </p>
          <h1 className="display mt-3 max-w-3xl text-5xl text-paper sm:text-6xl md:text-7xl">
            Outdoor property maintenance, handled.
          </h1>
          <p className="mt-5 max-w-xl text-lg font-medium text-paper/80 md:text-xl">
            Mowing, cleanups, hedges, mulch & more across the whole DFW
            metroplex — for homes and businesses, on your schedule. One
            exact price, confirmed before we schedule. We reply to every
            quote request within 60 minutes.
          </p>
          <div className="mt-8 max-w-xl">
            <CallAndQuoteButtons quoteHref="#quote" dark />
          </div>
          <div className="mt-6">
            <TrustBadges dark />
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="display text-3xl text-forest sm:text-4xl">
          What we maintain
        </h2>
        <p className="mt-2 max-w-xl text-base text-ink/75">
          Outdoor property maintenance for DFW homes — everything outside
          your four walls, from one local crew.
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
              <span className="mt-4 inline-block text-sm font-bold text-lake underline-offset-4 group-hover:underline">
                Details & pricing →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FIND MY LAWN PLAN QUIZ */}
      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="rounded-2xl bg-ink p-8 text-center sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-bronze">
            Not sure what your yard needs?
          </p>
          <h2 className="display mx-auto mt-3 max-w-xl text-3xl text-paper sm:text-4xl">
            Take the 30-second lawn quiz
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-paper/75">
            Answer three quick questions in plain language — we&apos;ll tell
            you exactly which service your yard needs.
          </p>
          <Link
            href="/find-my-lawn-plan"
            className="mt-6 inline-flex h-14 items-center rounded-lg bg-bronze px-10 text-lg font-bold text-ink transition-colors hover:bg-bronze-bright"
          >
            Find My Lawn Plan
          </Link>
        </div>
      </section>
      {/* TRANSPARENT PRICING — core trust pillar */}
      <section className="relative overflow-hidden bg-earth text-olive-pale">
        <Fern className="absolute -left-10 top-8 h-72 w-48 -rotate-6 text-olive/10" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <h2 className="display max-w-2xl text-3xl text-olive sm:text-4xl md:text-5xl">
            One number, up front.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border-2 border-olive/25 p-6">
              <h3 className="display text-lg text-olive">
                Your exact price first
              </h3>
              <p className="mt-2 text-base text-olive-pale/85">
                You get one exact price before we schedule anything — not an
                &ldquo;estimate&rdquo; that grows once we&apos;re in your yard.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-olive/25 p-6">
              <h3 className="display text-lg text-olive">
                No fine-print add-ons
              </h3>
              <p className="mt-2 text-base text-olive-pale/85">
                The quoted price is the whole price. If anything about your
                property would change the number, you&apos;ll know before
                you approve it — not after.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-olive/25 p-6">
              <h3 className="display text-lg text-olive">Look it over first</h3>
              <p className="mt-2 text-base text-olive-pale/85">
                Walk the yard when we&apos;re done. If something isn&apos;t
                finished properly, tell us before you pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOMES + BUSINESSES */}
      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-forest p-8 text-olive-pale">
            <h2 className="display text-2xl text-olive">For your home</h2>
            <p className="mt-2 text-base text-olive-pale/85">
              Weekly mowing, cleanups, hedges, mulch, and seasonal programs —
              the yard handled, every week, without you thinking about it.
            </p>
            <Link
              href="/quote?property=home"
              className="mt-5 inline-flex h-12 items-center rounded-lg bg-olive px-7 text-base font-bold text-forest hover:bg-olive-bright"
            >
              Get a Home Quote
            </Link>
          </div>
          <div className="rounded-2xl bg-ink p-8 text-paper">
            <h2 className="display text-2xl">For your business</h2>
            <p className="mt-2 text-base text-paper/75">
              Outdoor maintenance for DFW businesses — tell us about the
              property for a commercial quote.
            </p>
            <Link
              href="/commercial"
              className="mt-5 inline-flex h-12 items-center rounded-lg bg-bronze px-7 text-base font-bold text-ink hover:brightness-110"
            >
              Commercial Maintenance
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="display text-3xl text-forest sm:text-4xl">
          How it works
        </h2>
        <p className="mt-2 max-w-xl text-base text-ink/75">
          Three steps. No estimate range, no chasing us down.
        </p>
        <div className="mt-8">
          <HowItWorks />
        </div>
      </section>

      {/* REVIEWS — honest "on the way" card until real reviews exist */}
      <section className="bg-olive/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="display text-3xl text-forest sm:text-4xl">
            Neighbors who&apos;d recommend us
          </h2>
          <div className="mt-8">
            <ReviewsComingSoon />
          </div>
        </div>
      </section>

      {/* SEASONAL CAMPAIGN — switches automatically by month */}
      <SeasonalBand />

      {/* BEFORE/AFTER — renders only once real photos are added */}
      <BeforeAfterGallery />

      {/* REFERRALS — renders only when terms are owner-approved */}
      <ReferralSection />

      {/* SERVICE AREA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="display text-3xl text-forest sm:text-4xl">
          Serving the whole DFW metroplex
        </h2>
        <p className="mt-2 max-w-xl text-base text-ink/75">
          We&apos;re local — based in DFW, not dispatched from a call center.
          From Denton to Fort Worth, Dallas to Frisco: if you&apos;re in one
          of these towns, you&apos;re in our area.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
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
