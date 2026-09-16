import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";
import { Sprig } from "@/components/LeafDeco";
import { TrustBadges, CallAndQuoteButtons } from "@/components/Trust";

export const metadata: Metadata = {
  title: "Commercial Property Maintenance in DFW, TX",
  description:
    "Outdoor property maintenance for DFW businesses — mowing, cleanups, hedges, mulch and more. One exact price confirmed before work starts, response within 60 minutes.",
  alternates: { canonical: "/commercial" },
};

const WHO_WE_SERVE = [
  {
    title: "Businesses with outdoor space",
    body: "Storefronts, office lots, and any property where the outside is the first thing customers see. Mowing, edges, beds, and hedges kept sharp on a schedule.",
  },
  {
    title: "Rental properties",
    body: "Turnover cleanups and recurring mowing between tenants — one vendor for the outside of every property, so the grounds are never the reason a unit sits empty.",
  },
  {
    title: "Recurring schedules",
    body: "Weekly, biweekly, or seasonal visits — the same maintenance plan, every time, so the property looks cared-for without anyone having to manage it.",
  },
  {
    title: "One-time commercial cleanups",
    body: "Overgrown lots, post-storm debris, pre-listing resets. One flat price for the whole job, confirmed before we start.",
  },
];

const PROCESS = [
  {
    title: "Tell us about the property",
    body: "Use the quote form (mark “Business”) or call. Address, what needs maintaining, how often — that's enough to start.",
  },
  {
    title: "We reply within 60 minutes",
    body: "We review it and reply with next steps — questions, or an exact price. For larger properties we'll walk it with you before quoting so the number matches reality.",
  },
  {
    title: "One exact price, on a schedule",
    body: "You approve one number for the scope before any work starts. Then it just happens — on schedule, to the standard you approved.",
  },
];

const FAQS = [
  {
    q: "Do you work with property managers?",
    a: "Yes. If you manage one property or several, mark “Business” on the quote form, list the addresses, and tell us what each one needs. We'll quote them together and keep the service consistent across all of them.",
  },
  {
    q: "Can you work around our business hours?",
    a: "Tell us your timing requirements when you book — we'll work out a schedule that fits the property.",
  },
  {
    q: "How does commercial scheduling work?",
    a: "We agree on a scope and schedule together — what's included, how often, and what it costs — and put it in writing before any work starts. If the arrangement isn't working, tell us and we'll adjust it.",
  },
  {
    q: "What if something needs attention between visits?",
    a: "Call or text. Storm debris, a hedge blocking signage, beds that need a touch-up — we'll tell you honestly whether it's a quick fix we can handle or something for a specialist.",
  },
  {
    q: "How is commercial pricing handled?",
    a: "One exact price for the agreed scope, confirmed before work starts — same as residential. Larger properties may need a walkthrough first so the quote matches reality.",
  },
];

export default function CommercialPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink">
        <Sprig className="absolute -right-6 -top-6 h-44 w-44 rotate-12 text-bronze/10" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-paper/60">
            Commercial / DFW, TX
          </p>
          <h1 className="display mt-2 max-w-2xl text-4xl text-paper sm:text-5xl">
            Commercial property maintenance, handled.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-paper/80">
            Outdoor property maintenance for DFW businesses — mowing,
            cleanups, hedges, mulch, and more. One exact price, confirmed
            before work starts.
          </p>
          <div className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <Link
              href="/quote?property=business"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-bronze px-8 text-base font-bold text-ink hover:brightness-110"
            >
              Request a Commercial Quote
            </Link>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-paper/40 px-8 text-base font-bold text-paper hover:border-paper"
            >
              {SITE.phoneDisplay}
            </a>
          </div>
          <div className="mt-5">
            <TrustBadges dark />
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="display text-3xl text-forest sm:text-4xl">
          Who we maintain
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {WHO_WE_SERVE.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl border-2 border-forest/15 bg-white p-6"
            >
              <h3 className="display text-xl text-forest">{w.title}</h3>
              <p className="mt-2 text-base text-ink/75">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S COVERED */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl text-forest sm:text-4xl">
            What&apos;s covered
          </h2>
          <p className="mt-2 max-w-2xl text-base text-ink/70">
            Every service we offer for homes, sized for commercial properties.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.slug}
                className="rounded-2xl border-2 border-forest/15 bg-white p-6"
              >
                <h3 className="display text-xl text-forest">{s.shortName}</h3>
                <p className="mt-2 text-base text-ink/75">{s.commercial}</p>
                <Link
                  href={`/services/${s.slug}`}
                  className="mt-3 inline-block text-sm font-bold text-lake underline-offset-4 hover:underline"
                >
                  Service details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="display text-3xl text-forest sm:text-4xl">
          How commercial booking works
        </h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {PROCESS.map((p, i) => (
            <li
              key={p.title}
              className="rounded-2xl border-2 border-forest/15 bg-white p-6"
            >
              <span className="display block text-4xl text-olive">
                {i + 1}
              </span>
              <h3 className="display mt-3 text-xl text-forest">{p.title}</h3>
              <p className="mt-2 text-base text-ink/75">{p.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl text-forest sm:text-4xl">
            Commercial questions
          </h2>
          <div className="mt-6 grid max-w-5xl gap-5 md:grid-cols-2">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="rounded-xl border-2 border-forest/15 bg-white p-5"
              >
                <summary className="cursor-pointer list-none text-base font-bold text-forest">
                  {f.q}
                </summary>
                <p className="mt-3 text-base text-ink/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="rounded-2xl bg-forest p-8 text-center text-olive-pale sm:p-10">
          <h2 className="display text-2xl text-olive sm:text-3xl">
            Get your commercial quote
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-olive-pale/85">
            Tell us about the property. We reply within 60 minutes with
            next steps.
          </p>
          <div className="mx-auto mt-6 w-fit">
            <CallAndQuoteButtons dark />
          </div>
        </div>
      </section>
    </>
  );
}
