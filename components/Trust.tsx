import { SITE } from "@/lib/site";

// Small trust-signal row placed near CTAs.
export function TrustBadges({ dark = false }: { dark?: boolean }) {
  const items = ["Locally owned", "Insured", "Serving Denton County"];
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
      body: "You get one exact number and a service window that fits your schedule. No visit needed for most quotes.",
    },
    {
      title: "We show up, you pay after",
      body: `The crew does the work, you look it over, then you pay exactly what we quoted. That's it.`,
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
 * ═══════════════════════════════════════════════════════════════
 * PLACEHOLDER TESTIMONIALS — replace with real customer reviews
 * before launch. Names, cities, and quotes below are invented.
 * ═══════════════════════════════════════════════════════════════
 */
const PLACEHOLDER_REVIEWS = [
  {
    name: "Maria G.",
    city: "Denton",
    quote:
      "They quoted me a price over text, showed up when they said they would, and charged exactly that. Yard looks great every single week.",
  },
  {
    name: "James R.",
    city: "Lewisville",
    quote:
      "Had a full spring cleanup done. One flat price up front, no 'we found more work' phone call halfway through. Refreshing.",
  },
  {
    name: "Kelsey T.",
    city: "Flower Mound",
    quote:
      "Easy to reach, easy to schedule, and the edging is the sharpest on the street. My neighbors have already asked who does our lawn.",
  },
  {
    name: "Dan W.",
    city: "Little Elm",
    quote:
      "I travel for work and needed a crew I don't have to babysit. They just handle it — gate closed, clippings gone, no surprises on the bill.",
  },
];

export function Reviews() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {PLACEHOLDER_REVIEWS.map((r) => (
        <figure
          key={r.name}
          className="rounded-2xl border-2 border-forest/15 bg-white p-6"
        >
          <div className="flex gap-1 text-olive" aria-label="5 star review">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 16 16"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 0 10 5.5 16 6l-4.5 3.8L13 16 8 12.8 3 16l1.5-6.2L0 6l6-.5Z" />
              </svg>
            ))}
          </div>
          <blockquote className="mt-3 text-base text-ink/85">
            &ldquo;{r.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-3 text-sm font-bold text-ink">
            {r.name} · {r.city}, TX
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function CallAndQuoteButtons({
  quoteHref = "/quote",
  dark = false,
}: {
  quoteHref?: string;
  /** Set when rendered on a forest-green background. */
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={`tel:${SITE.phoneTel}`}
        className={`flex h-14 items-center justify-center rounded-lg px-8 text-lg font-bold transition-colors ${
          dark
            ? "bg-olive text-forest hover:bg-olive-bright"
            : "bg-forest text-olive hover:bg-forest-deep"
        }`}
      >
        Call Now · {SITE.phoneDisplay}
      </a>
      <a
        href={quoteHref}
        className={`flex h-14 items-center justify-center rounded-lg border-[3px] px-8 text-lg font-bold transition-colors ${
          dark
            ? "border-olive text-olive hover:bg-olive hover:text-forest"
            : "border-forest text-forest hover:bg-forest hover:text-olive"
        }`}
      >
        Get a Free Quote
      </a>
    </div>
  );
}
