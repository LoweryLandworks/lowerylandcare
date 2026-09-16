import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { Fern } from "@/components/LeafDeco";
import { TrustBadges, CallAndQuoteButtons } from "@/components/Trust";

export const metadata: Metadata = {
  title: "Lawn Care Services",
  description:
    "Lawn mowing, yard cleanup, hedge trimming, mulching, fertilization & weed control, and leaf removal across the DFW metroplex, TX. Transparent flat pricing on every job.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <Fern className="absolute -right-8 -top-12 h-72 w-48 rotate-12 text-bronze/10" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="display text-4xl text-paper sm:text-5xl">
            Our services
          </h1>
          <p className="mt-3 max-w-xl text-lg text-paper/80">
            Every service comes with the same deal: one exact price up front,
            and that&apos;s what you pay.
          </p>
          <div className="mt-5">
            <TrustBadges dark />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-2xl border-2 border-forest/15 bg-white p-7 transition-colors hover:border-forest"
            >
              <h2 className="display text-2xl text-forest">{s.name}</h2>
              <p className="mt-2 text-base text-ink/75">{s.blurb}</p>
              <p className="mt-4 text-sm font-bold text-forest">
                {s.pricing.label} {s.pricing.price} {s.pricing.unit}
              </p>
              <span className="mt-2 inline-block text-sm font-bold text-lake underline-offset-4 group-hover:underline">
                See what&apos;s included →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-forest p-8 text-center">
          <h2 className="display text-2xl text-olive sm:text-3xl">
            Not sure what your yard needs?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-base text-olive-pale/85">
            Tell us what&apos;s bugging you about it and we&apos;ll recommend
            the right fix — with a price attached.
          </p>
          <div className="mx-auto mt-6 w-fit">
            <CallAndQuoteButtons dark />
          </div>
        </div>
      </section>
    </>
  );
}
