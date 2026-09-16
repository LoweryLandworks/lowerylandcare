import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { GUIDES, getGuide } from "@/lib/guides";
import { SITE } from "@/lib/site";
import { CallAndQuoteButtons } from "@/components/Trust";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${slug}` },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-paper/60">
            <Link href="/guides" className="hover:underline">
              Guides
            </Link>{" "}
            / North Texas
          </p>
          <h1 className="display mt-2 text-4xl text-paper sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-paper/80">
            {guide.intro}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        {guide.sections.map((section) => (
          <section key={section.heading} className="mb-10">
            <h2 className="display text-2xl text-forest sm:text-3xl">
              {section.heading}
            </h2>
            {section.paragraphs.map((p, i) => (
              <p
                key={i}
                className="mt-4 text-base leading-relaxed text-ink/85"
              >
                {p}
              </p>
            ))}
          </section>
        ))}

        <div className="rounded-2xl border-2 border-bronze/40 bg-bronze/10 p-7">
          <h2 className="display text-xl text-forest">The bottom line</h2>
          <p className="mt-2 text-base leading-relaxed text-ink/85">
            {guide.takeaway}
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-forest px-8 text-base font-bold text-olive hover:brightness-110"
            >
              Get My Exact Price
            </Link>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-forest px-8 text-base font-bold text-forest"
            >
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>

        <h2 className="display mt-12 text-2xl text-forest">More guides</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {GUIDES.filter((g) => g.slug !== guide.slug).map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="rounded-full border-2 border-forest/20 bg-white px-5 py-2.5 text-sm font-bold text-forest hover:border-forest"
            >
              {g.title}
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-forest p-8 text-center text-olive-pale">
          <h2 className="display text-2xl text-olive">
            Ready when you are
          </h2>
          <p className="mx-auto mt-2 max-w-md text-base text-olive-pale/85">
            Exact price within 60 minutes. That&apos;s the price you pay.
          </p>
          <div className="mx-auto mt-5 w-fit">
            <CallAndQuoteButtons dark />
          </div>
        </div>
      </article>
    </>
  );
}
