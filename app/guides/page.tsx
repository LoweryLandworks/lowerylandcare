import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";
import { SITE } from "@/lib/site";
import { Sprig } from "@/components/LeafDeco";

export const metadata: Metadata = {
  title: "Lawn & Yard Guides",
  description:
    "Plain-English guides to lawn care costs, grass types, fertilizing schedules, and mowing frequency in North Texas — from Lowery Landworks, DFW.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <Sprig className="absolute -right-6 -top-6 h-44 w-44 rotate-12 text-bronze/10" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="display max-w-2xl text-4xl text-paper sm:text-5xl">
            Lawn & yard guides
          </h1>
          <p className="mt-4 max-w-xl text-lg text-paper/80">
            Straight answers about North Texas lawns — costs, grass types,
            schedules — in customer language, not industry jargon.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {GUIDES.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="group rounded-2xl border-2 border-forest/15 bg-white p-7 transition-colors hover:border-forest"
            >
              <h2 className="display text-2xl text-forest group-hover:underline group-hover:underline-offset-4">
                {g.title}
              </h2>
              <p className="mt-3 text-base text-ink/75">{g.description}</p>
              <span className="mt-4 inline-block text-sm font-bold text-lake">
                Read the guide →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-forest p-8 text-center text-olive-pale sm:p-10">
          <h2 className="display text-2xl text-olive sm:text-3xl">
            Rather skip the reading?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-olive-pale/85">
            Tell us about your yard and we&apos;ll handle it — exact price
            within 60 minutes.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-olive px-8 text-base font-bold text-forest hover:bg-olive-bright"
            >
              Get My Quote
            </Link>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-olive px-8 text-base font-bold text-olive"
            >
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
