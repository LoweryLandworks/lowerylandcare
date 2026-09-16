import { SITE } from "@/lib/site";

// Small trust-signal row placed near CTAs.
export function TrustBadges({ dark = false }: { dark?: boolean }) {
  const items = ["Locally owned", "60-minute quote response", "Serving the whole DFW"];
  return (
    <ul
      className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold ${
        dark ? "text-olive-pale/85" : "text-ink/75"
      }`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-center gap-1.5">
          <svg
            viewBox="0 0 16 16"
            className={`h-4 w-4 ${dark ? "text-olive" : "text-forest"}`}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 0 10 5.5 16 6l-4.5 3.8L13 16 8 12.8 3 16l1.5-6.2L0 6l6-.5Z" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function HowItWorks({ dark = false }: { dark?: boolean }) {
  const steps = [
    {
      title: "Request your quote",
      body: "30 seconds — name, phone, address, what you need. Or just call us.",
    },
    {
      title: "We confirm price & time",
      body: "You get one exact number and a service window that fits your schedule.",
    },
    {
      title: "We show up, you pay after",
      body: `The crew does the work, you look it over — if something isn't finished properly, say so before you pay. That's it.`,
    },
  ];
  return (
    <ol className="grid gap-6 md:grid-cols-3">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className={`rounded-2xl border-2 p-6 ${
            dark
              ? "border-olive/25 bg-forest text-olive-pale"
              : "border-forest/15 bg-white text-ink"
          }`}
        >
          <span className="display block text-4xl text-olive">{i + 1}</span>
          <h3 className="display mt-3 text-xl">{step.title}</h3>
          <p className={`mt-2 text-base ${dark ? "text-olive-pale/80" : "text-ink/75"}`}>
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  );
}

/*
 * REVIEWS — no fake reviews here. This section renders an honest
 * "reviews are on the way" card until real Google reviews exist.
 * When the owner has genuine reviews, replace ReviewsComingSoon with a
 * real Reviews list (names, suburbs, quotes — all verifiable).
 */
export function ReviewsComingSoon() {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl border-2 border-forest/15 bg-white p-8 text-center">
      <div
        className="flex justify-center gap-1 text-olive/30"
        aria-hidden="true"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 16 16"
            className="h-6 w-6"
            fill="currentColor"
          >
            <path d="M8 0 10 5.5 16 6l-4.5 3.8L13 16 8 12.8 3 16l1.5-6.2L0 6l6-.5Z" />
          </svg>
        ))}
      </div>
      <h3 className="display mt-4 text-2xl text-forest">
        Our reviews are on the way
      </h3>
      <p className="mx-auto mt-3 max-w-md text-base text-ink/75">
        We&apos;re a local crew building our name one yard at a time — every
        real review we earn goes right here. Had work done? Ask us for the
        Google review link after your visit.
      </p>
      <div className="mt-6 flex justify-center">
        <CallAndQuoteButtons />
      </div>
    </div>
  );
}

export function CallAndQuoteButtons({
  quoteHref = "/quote",
  dark = false,
}: {
  quoteHref?: string;
  /** Set when rendered on a dark background. */
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={`tel:${SITE.phoneTel}`}
        className="flex h-14 items-center justify-center rounded-lg bg-lake px-8 text-lg font-bold text-white transition-colors hover:bg-lake-deep"
      >
        Call Now · {SITE.phoneDisplay}
      </a>
      <a
        href={quoteHref}
        className={`flex h-14 items-center justify-center rounded-lg border-[3px] px-8 text-lg font-bold transition-colors ${
          dark
            ? "border-bronze text-bronze hover:bg-bronze hover:text-ink"
            : "border-ink text-ink hover:bg-ink hover:text-paper"
        }`}
      >
        Get a Free Quote
      </a>
    </div>
  );
}
