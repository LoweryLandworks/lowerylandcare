import type { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "@/lib/cities";
import { Fern } from "@/components/LeafDeco";
import { TrustBadges, CallAndQuoteButtons } from "@/components/Trust";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Lowery Landworks serves the whole Dallas–Fort Worth metroplex: Denton, Lewisville, Flower Mound, Dallas, Fort Worth, Plano, Frisco and more.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <Fern className="absolute -right-8 -top-12 h-72 w-48 rotate-12 text-bronze/10" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="display text-4xl text-paper sm:text-5xl">
            Serving the whole DFW metroplex
          </h1>
          <p className="mt-3 max-w-xl text-lg text-paper/80">
            From Denton to Fort Worth, Dallas to Frisco — pick your town for
            local details, or just request a quote. If you&apos;re in the
            metroplex, you&apos;re in our area.
          </p>
          <div className="mt-5">
            <TrustBadges dark />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((c) => (
            <Link
              key={c.slug}
              href={`/locations/${c.slug}`}
              className="group rounded-2xl border-2 border-forest/15 bg-white p-6 transition-colors hover:border-forest"
            >
              <h2 className="display text-xl text-forest">{c.name}, TX</h2>
              <p className="mt-2 text-sm text-ink/70">
                {c.areas.slice(0, 3).join(" · ")}
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-lake underline-offset-4 group-hover:underline">
                Lawn care in {c.name} →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-forest p-8 text-center">
          <h2 className="display text-2xl text-olive sm:text-3xl">
            Don&apos;t see your town?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-base text-olive-pale/85">
            If you&apos;re anywhere in the DFW metroplex, ask — we can often
            make it work.
          </p>
          <div className="mx-auto mt-6 w-fit">
            <CallAndQuoteButtons dark />
          </div>
        </div>
      </section>
    </>
  );
}
