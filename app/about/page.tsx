import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { Sprig } from "@/components/LeafDeco";
import { TrustBadges, CallAndQuoteButtons } from "@/components/Trust";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Lowery Landworks is a locally owned lawn care company serving Dallas, Fort Worth, and the whole DFW metroplex, Texas. Straight pricing, reliable crews, yards we're proud of.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <Sprig className="absolute -right-6 -top-6 h-44 w-44 rotate-12 text-bronze/10" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="display text-4xl text-paper sm:text-5xl">
            Local. For real.
          </h1>
          <p className="mt-3 max-w-xl text-lg text-paper/80">
            Lowery Landworks is a locally owned lawn care company
            based in {SITE.areaLabel.split(",")[0]}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        {/*
          PLACEHOLDER OWNER STORY — replace with the real one before launch.
          Do not invent years-in-business, crew size, or credentials.
        */}
        <div className="space-y-5 text-lg leading-relaxed text-ink/85">
          <p>
            I&apos;m Mike Lowery — owner, crew, and customer service
            department. Lowery Landworks started the way most good outdoor
            companies do — with one truck, one trailer, and neighbors asking
            &ldquo;can you do mine too?&rdquo;
          </p>
          <p>
            We built the business on a simple frustration: too many companies
            quote one price and charge another, show up when it suits them,
            and treat your yard like a route number. We do the opposite. The
            price we quote is the price you pay, we come on your schedule, and
            we treat every property like it&apos;s on our own street — because
            around here, it usually is.
          </p>
          <p>
            If you&apos;re in {SITE.cities.slice(0, 3).join(", ")} or anywhere
            in the DFW metroplex, we&apos;d love to earn your yard.
          </p>
        </div>

        <div className="mt-8">
          <TrustBadges />
        </div>

        <div className="mt-10 rounded-2xl bg-forest p-8 text-center">
          <h2 className="display text-2xl text-olive">
            Let&apos;s talk about your yard
          </h2>
          <div className="mx-auto mt-6 w-fit">
            <CallAndQuoteButtons dark />
          </div>
        </div>
      </section>
    </>
  );
}
