import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CITIES, getCity } from "@/lib/cities";
import { SERVICES, getService } from "@/lib/services";
import { SITE } from "@/lib/site";
import { Sprig } from "@/components/LeafDeco";
import {
  TrustBadges,
  CallAndQuoteButtons,
} from "@/components/Trust";

interface Props {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return {};
  return {
    title: `Lawn Care in ${c.name}, TX`,
    description: `Lawn mowing, cleanups, hedge trimming & more in ${c.name}, Texas. ${c.intro.slice(0, 120)}… The price we quote is the price you pay — call ${SITE.phoneDisplay}.`,
    alternates: { canonical: `/locations/${c.slug}` },
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
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
            <Link href="/locations" className="hover:underline">
              Service Areas
            </Link>{" "}
            / {c.name}, TX
          </p>
          <h1 className="display mt-2 max-w-2xl text-4xl text-paper sm:text-5xl">
            Lawn Care in {c.name}, TX
          </h1>
          <p className="mt-4 max-w-xl text-lg text-paper/80">{c.intro}</p>
          <div className="mt-6 max-w-xl">
            <CallAndQuoteButtons dark />
          </div>
          <div className="mt-5">
            <TrustBadges dark />
          </div>
        </div>
      </section>

      {/* THE LOCAL PROBLEM */}
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <div className="max-w-3xl rounded-2xl border-2 border-bronze/40 bg-bronze/10 p-7 sm:p-8">
          <h2 className="display text-2xl text-forest sm:text-3xl">
            The {c.name} yard problem
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/85">
            {c.yardProblem}
          </p>
        </div>
      </section>

      {/* WHY US IN THIS CITY */}
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <h2 className="display text-2xl text-forest sm:text-3xl">
          Why {c.name} chooses Lowery Landworks
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink/85">
          {c.whyUs}
        </p>
        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {c.localNotes.map((note) => (
            <li
              key={note.slice(0, 32)}
              className="rounded-2xl border-2 border-forest/15 bg-white p-6 text-base text-ink/85"
            >
              {note}
            </li>
          ))}
        </ul>
      </section>

      {/* FEATURED SERVICES WITH LOCAL ANGLE */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl text-forest sm:text-4xl">
            What {c.name} books most
          </h2>
          <p className="mt-2 max-w-2xl text-base text-ink/70">
            Every service comes to your door in {c.name} — no drop-off, no
            waiting around.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {c.serviceBlurbs.map((b) => {
              const s = getService(b.service);
              if (!s) return null;
              return (
                <Link
                  key={b.service}
                  href={`/services/${s.slug}`}
                  className="group rounded-2xl border-2 border-forest/15 bg-white p-6 transition-colors hover:border-forest"
                >
                  <h3 className="display text-xl text-forest">
                    {s.shortName} in {c.name}
                  </h3>
                  <p className="mt-2 text-base text-ink/75">{b.blurb}</p>
                  <span className="mt-4 inline-block text-sm font-bold text-lake underline-offset-4 group-hover:underline">
                    Details & pricing →
                  </span>
                </Link>
              );
            })}
          </div>

          <h3 className="display mt-10 text-xl text-forest">
            Every service we offer in {c.name}
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-full border-2 border-forest/20 bg-white px-5 py-2.5 text-sm font-bold text-forest hover:border-forest"
              >
                {s.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ROUTE NOTE + CTA */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="rounded-2xl bg-forest p-8 text-center text-olive-pale sm:p-10">
          <h2 className="display text-2xl text-olive sm:text-3xl">
            Ready when you are, {c.name}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-olive-pale/85">
            {c.routeNote} One exact price up front — that&apos;s what you
            pay. We respond to every quote request within 60 minutes.
          </p>
          <div className="mx-auto mt-6 w-fit">
            <CallAndQuoteButtons dark />
          </div>
        </div>
      </section>

      {/* AREAS + ZIPS + FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <h2 className="display text-2xl text-forest">
          Neighborhoods we serve in {c.name}
        </h2>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {c.areas.map((a) => (
            <span
              key={a}
              className="rounded-full border-2 border-forest/15 bg-white px-4 py-2 text-sm font-bold text-forest"
            >
              {a}
            </span>
          ))}
        </div>
        <p className="mt-5 text-sm text-ink/60">
          ZIP codes: {c.zips.join(", ")}
        </p>

        <h2 className="display mt-10 text-2xl text-forest">
          {c.name} lawn care FAQ
        </h2>
        <div className="mt-4 max-w-3xl space-y-4">
          {c.faqs.map((f) => (
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

        <h2 className="display mt-10 text-2xl text-forest">
          Other DFW service areas
        </h2>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {CITIES.filter((x) => x.slug !== c.slug).map((x) => (
            <Link
              key={x.slug}
              href={`/locations/${x.slug}`}
              className="rounded-full border-2 border-forest/20 bg-white px-4 py-2 text-sm font-bold text-forest hover:border-forest"
            >
              {x.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
