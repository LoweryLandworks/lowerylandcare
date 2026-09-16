import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { Sprig } from "@/components/LeafDeco";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Straight answers about Lowery Landworks pricing, scheduling, contracts, service area, and more. Outdoor property maintenance across DFW, TX.",
  alternates: { canonical: "/faq" },
};

const GROUPS: { heading: string; faqs: { q: string; a: string }[] }[] = [
  {
    heading: "Pricing & quotes",
    faqs: [
      {
        q: "How much does lawn care cost in DFW?",
        a: "It depends on lot size, frequency, and condition — which is why we quote exact prices instead of publishing a one-size-fits-all number. Send your address and we'll confirm your exact price within 60 minutes. Mowing is priced by lot size and frequency, cleanups and mulch by the job, hedge trimming by the shrub, treatments per application.",
      },
      {
        q: "Is the quote really free?",
        a: "Yes — really free, no catch. Most quotes are done from your address and a few details. If the price isn't right for you, no hard feelings.",
      },
      {
        q: "The price you quote — is that really what I pay?",
        a: "Yes. The number we confirm before scheduling is the number you pay — we don't add surprise charges after the fact.",
      },
      {
        q: "Are there any hidden fees?",
        a: "The quoted price is the whole price — no fine-print add-ons. If anything about your property would change the number, you'll know before you approve it, not after.",
      },
    ],
  },
  {
    heading: "Scheduling & service",
    faqs: [
      {
        q: "How fast do you respond to quote requests?",
        a: "Within 60 minutes. We review your request and reply with your exact price — not an auto-responder.",
      },
      {
        q: "Do I need to be home for the service?",
        a: "No. A gate code or unlocked gate is enough for mowing and most other visits — you can just come home to a finished yard.",
      },
      {
        q: "What happens if it rains on my service day?",
        a: "We shift your visit to the next dry day and let you know — we'd rather wait a day than rut up wet turf.",
      },
      {
        q: "Should I choose weekly or biweekly mowing?",
        a: "In the North Texas growing season (roughly April through October), weekly keeps the lawn at its best. Biweekly works fine in spring and fall. We'll recommend a schedule for your yard, and you can switch anytime.",
      },
      {
        q: "Do you work in the winter?",
        a: "Yes — leaf cleanups run November through January, and winter is the ideal time for hedge shaping and bed prep. Mowing slows down when the grass does; most customers drop to every other week or pause.",
      },
    ],
  },
  {
    heading: "Contracts & trust",
    faqs: [
      {
        q: "Can I pause or change my schedule?",
        a: "Yes — switch frequencies, pause for a trip or the slow season, and restart whenever. Just let us know and we'll adjust.",
      },
      {
        q: "Who's actually coming to my yard?",
        a: "The Lowery Landworks crew — we run consistent routes, so you'll see familiar faces.",
      },
      {
        q: "What if I'm not happy with the work?",
        a: "Tell us and we'll make it right. Look the yard over after every visit — if something isn't finished properly, say so before you pay.",
      },
    ],
  },
  {
    heading: "Service area & properties",
    faqs: [
      {
        q: "Where do you work?",
        a: "The whole DFW metroplex — Denton, Lewisville, Flower Mound, Dallas, Fort Worth, Plano, Frisco, McKinney, Allen, Richardson, Arlington, Irving, Carrollton, and everywhere in between. If you're in the metroplex, ask.",
      },
      {
        q: "Do you handle commercial properties?",
        a: "Yes. Mark “Business” on the quote form and tell us about the property — we'll put together a maintenance plan and one exact price.",
      },
      {
        q: "My yard is a disaster. Will you still take the job?",
        a: "That's a cleanup visit — one of our most-booked services. Send photos or just describe it; we'll quote one flat price to bring it back under control, then regular service keeps it there.",
      },
      {
        q: "I have kids and pets. Is that a problem?",
        a: "Not at all — that's most of our customers. We close gates, work around pets and play equipment, and we leave clear after-visit instructions for any lawn treatment.",
      },
    ],
  },
];

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: GROUPS.flatMap((g) =>
      g.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="relative overflow-hidden bg-ink">
        <Sprig className="absolute -right-6 -top-6 h-44 w-44 rotate-12 text-bronze/10" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h1 className="display max-w-2xl text-4xl text-paper sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-4 max-w-xl text-lg text-paper/80">
            Straight answers — no fluff. Still wondering something?{" "}
            <a
              href={`tel:${SITE.phoneTel}`}
              className="font-bold text-bronze hover:underline"
            >
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        {GROUPS.map((group) => (
          <div key={group.heading} className="mb-12">
            <h2 className="display text-2xl text-forest sm:text-3xl">
              {group.heading}
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {group.faqs.map((f) => (
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
        ))}

        <div className="rounded-2xl bg-forest p-8 text-center text-olive-pale sm:p-10">
          <h2 className="display text-2xl text-olive sm:text-3xl">
            Didn&apos;t find your answer?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-olive-pale/85">
            Ask us directly — we reply within 60 minutes with a straight
            answer and, if you want one, an exact price.
          </p>
          <div className="mx-auto mt-6 flex w-fit flex-col gap-3 sm:flex-row">
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
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
