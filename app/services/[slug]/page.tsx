import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES, getService } from "@/lib/services";
import { SITE } from "@/lib/site";
import { Sprig } from "@/components/LeafDeco";
import { TrustBadges, CallAndQuoteButtons } from "@/components/Trust";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} in DFW, TX`,
    description: `${service.blurb} Serving ${SITE.cities.slice(0, 4).join(", ")} and the whole DFW metroplex. Transparent flat pricing — call ${SITE.phoneDisplay}.`,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
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
            <Link href="/services" className="hover:underline">
              Services
            </Link>{" "}
            / DFW, TX
          </p>
          <h1 className="display mt-2 max-w-2xl text-4xl text-paper sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-paper/80">
            {service.blurb}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-bronze/20 px-4 py-2 text-sm font-bold text-bronze">
            {service.pricing.headline}{" "}
            <span className="font-medium text-paper/70">
              {service.pricing.sub}
            </span>
          </p>
          <div className="mt-6 max-w-xl">
            <CallAndQuoteButtons dark />
          </div>
          <div className="mt-5">
            <TrustBadges dark />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_360px]">
        <div>
          <p className="max-w-2xl text-lg leading-relaxed text-ink/85">
            {service.description}
          </p>

          {/* WHO IT'S FOR */}
          <h2 className="display mt-10 text-2xl text-forest">
            Who it&apos;s for
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/80">
            {service.whoFor}
          </p>

          {/* WHAT'S INCLUDED */}
          <h2 className="display mt-10 text-2xl text-forest">
            What&apos;s included
          </h2>
          <p className="mt-2 max-w-2xl text-base text-ink/70">
            Every {service.shortName.toLowerCase()} visit covers each of
            these — no tiers, no half-done visits.
          </p>
          <ul className="mt-4 space-y-3">
            {service.included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base">
                <svg
                  viewBox="0 0 20 20"
                  className="mt-0.5 h-5 w-5 shrink-0 text-lake"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0Zm4.7 7.3-5.4 5.4a1 1 0 0 1-1.4 0L5.3 10a1 1 0 1 1 1.4-1.4l1.9 1.9 4.7-4.7a1 1 0 0 1 1.4 1.5Z" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          {/* HONEST SCOPE */}
          <div className="mt-10 rounded-2xl border-2 border-bronze/40 bg-bronze/10 p-6">
            <h2 className="display text-xl text-forest">
              What it doesn&apos;t do
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink/80">
              {service.notIncluded}
            </p>
          </div>

          {/* HOW IT WORKS */}
          <h2 className="display mt-12 text-2xl text-forest">
            How it works
          </h2>
          <ol className="mt-5 space-y-5">
            {service.steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="display flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-lg text-olive">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-2xl text-base text-ink/75">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* PRICING EXPLAINER */}
          <h2 className="display mt-12 text-2xl text-forest">
            How pricing works
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/80">
            {service.pricingExplainer}
          </p>

          {/* CLIMATE NOTE */}
          <h2 className="display mt-12 text-2xl text-forest">
            Why it matters in North Texas
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/80">
            {service.climateNote}
          </p>

          {/* FAQS */}
          <h2 className="display mt-12 text-2xl text-forest">
            Common questions
          </h2>
          <div className="mt-4 space-y-4">
            {service.faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border-2 border-forest/15 bg-white p-5"
              >
                <summary className="cursor-pointer list-none text-base font-bold text-forest">
                  {f.q}
                </summary>
                <p className="mt-3 text-base text-ink/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* PRICING SIDEBAR — no published prices; quote within 60 minutes */}
        <aside className="h-fit rounded-2xl bg-forest p-7 text-olive-pale lg:sticky lg:top-6">
          <p className="text-sm font-bold uppercase tracking-widest text-olive-pale/70">
            {service.pricing.label}
          </p>
          <p className="display mt-1 text-3xl text-olive">
            {service.pricing.headline}
          </p>
          <p className="mt-1 text-base font-semibold">{service.pricing.sub}</p>
          <p className="mt-4 text-sm leading-relaxed text-olive-pale/80">
            {service.pricing.note}
          </p>
          <Link
            href={`/quote?service=${service.slug}`}
            className="mt-6 flex h-12 items-center justify-center rounded-lg bg-olive text-base font-bold text-forest hover:bg-olive-bright"
          >
            Get My Exact Price
          </Link>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="mt-3 flex h-12 items-center justify-center rounded-lg border-2 border-olive text-base font-bold text-olive"
          >
            Call {SITE.phoneDisplay}
          </a>
          <p className="mt-4 text-center text-sm font-semibold text-olive-pale/70">
            We respond to every quote request within 60 minutes.
          </p>
        </aside>
      </section>

      {/* COMMERCIAL STRIP */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="rounded-2xl bg-ink p-8 text-paper sm:p-10">
          <h2 className="display text-2xl sm:text-3xl">
            Need {service.shortName.toLowerCase()} for a commercial property?
          </h2>
          <p className="mt-3 max-w-2xl text-base text-paper/75">
            We maintain outdoor spaces for DFW businesses too — tell us
            about the property and get a commercial quote.
          </p>
          <Link
            href="/commercial"
            className="mt-6 inline-flex h-12 items-center rounded-lg bg-bronze px-8 text-base font-bold text-ink hover:brightness-110"
          >
            Commercial Property Maintenance
          </Link>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="display text-2xl text-forest">Other services</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-full border-2 border-forest/20 bg-white px-5 py-2.5 text-sm font-bold text-forest hover:border-forest"
            >
              {s.shortName}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
