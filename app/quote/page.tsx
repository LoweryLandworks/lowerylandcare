import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { QuoteForm } from "@/components/QuoteForm";
import { Fern } from "@/components/LeafDeco";
import { TrustBadges } from "@/components/Trust";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Get an exact outdoor property maintenance price — we respond within 60 minutes. Serving Dallas, Fort Worth, Denton, Plano, Frisco and the whole DFW metroplex, TX.",
  alternates: { canonical: "/quote" },
};

const STEPS = [
  {
    title: "Send it in 30 seconds",
    body: "Name, phone, address, what you need, how often. Or just call — a person picks up.",
  },
  {
    title: "We reply within 60 minutes",
    body: "We review your request and reply with one exact price. The number we quote is the number you pay.",
  },
  {
    title: "Pick your day",
    body: "We find a service window that fits your schedule. Your address and a few details are enough for most quotes.",
  },
  {
    title: "We show up, you pay after",
    body: "The crew does the work, you look it over — if something isn't finished properly, say so before you pay. Gate closed, clippings gone. That's it.",
  },
];

const EXPECT_FAQS = [
  {
    q: "Do I need to be home for the quote or the service?",
    a: "No. Most quotes are done from your address and a few details. And for the service itself, a gate code or unlocked gate is enough — you can just come home to a finished yard.",
  },
  {
    q: "Is the quote really free? What's the catch?",
    a: "Really free, no catch. We quote one flat price per job — if it isn't right for you, no hard feelings.",
  },
  {
    q: "What if my yard is a mess?",
    a: "Then you're our favorite kind of customer. Send a couple of photos with the form (or just describe it) and we'll quote a one-time cleanup at one flat price — then regular service keeps it from getting that way again.",
  },
  {
    q: "Do you work with businesses and rental properties?",
    a: "Yes. Mark 'Business' on the form and tell us about the property in your message.",
  },
];

export default function QuotePage() {
  return (
    <>
      <section
        id="quote"
        className="relative overflow-hidden bg-forest text-olive-pale"
      >
        <Fern className="absolute -right-10 -top-8 h-80 w-52 rotate-12 text-olive/10" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
          <div>
            <h1 className="display text-4xl text-olive sm:text-5xl">
              Get your free quote
            </h1>
            <p className="mt-4 max-w-md text-lg text-olive-pale/85">
              30 seconds, a few quick questions. We reply with an{" "}
              <strong className="text-olive-pale">exact price</strong> — and
              that&apos;s the price you pay. No surprise upcharges.
            </p>
            <div className="mt-6 max-w-md rounded-2xl border-2 border-olive/30 bg-forest/60 p-5">
              <p className="display text-xl text-olive">
                Our promise: a reply within 60 minutes.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-olive-pale/80">
                Not an auto-responder — we review your request and reply
                with your exact price.
              </p>
            </div>
            <p className="mt-5 text-base text-olive-pale/85">
              Rather talk to a person?
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="display mt-1 inline-block text-3xl text-olive underline-offset-4 hover:underline"
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

      {/* BOOKING PROCESS */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="display text-3xl text-forest sm:text-4xl">
          How booking works, start to finish
        </h2>
        <p className="mt-2 max-w-2xl text-base text-ink/70">
          No estimate range, no chasing us down. Here&apos;s
          exactly what happens after you hit send.
        </p>
        <ol className="mt-8 grid gap-5 md:grid-cols-2">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl border-2 border-forest/15 bg-white p-6"
            >
              <span className="display block text-4xl text-olive">
                {i + 1}
              </span>
              <h3 className="display mt-3 text-xl text-forest">
                {step.title}
              </h3>
              <p className="mt-2 text-base text-ink/75">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="display text-3xl text-forest sm:text-4xl">
            What to expect
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {EXPECT_FAQS.map((f) => (
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
          <div className="mt-10 rounded-2xl bg-ink p-8 text-paper">
            <h3 className="display text-2xl">
              Booking for a business or rental property?
            </h3>
            <p className="mt-2 max-w-2xl text-base text-paper/75">
              Outdoor maintenance for DFW businesses — tell us about the
              property for a commercial quote.
            </p>
            <Link
              href="/commercial"
              className="mt-5 inline-flex h-12 items-center rounded-lg bg-bronze px-8 text-base font-bold text-ink hover:brightness-110"
            >
              Commercial Property Maintenance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
