import Link from "next/link";
import { getCampaign } from "@/lib/seasons";
import { getService } from "@/lib/services";
import { CallAndQuoteButtons } from "@/components/Trust";

/**
 * Seasonal campaign band — honest North Texas agronomic framing,
 * switched automatically by month. No invented offers or deadlines.
 */
export function SeasonalBand() {
  const campaign = getCampaign(new Date().getMonth());
  return (
    <section className="bg-earth text-olive-pale">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-bronze">
          This season in North Texas · {campaign.months}
        </p>
        <h2 className="display mt-3 max-w-3xl text-3xl text-paper sm:text-4xl">
          {campaign.headline}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/80 md:text-lg">
          {campaign.body}
        </p>
        <ul className="mt-6 space-y-3">
          {campaign.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-base">
              <svg
                viewBox="0 0 20 20"
                className="mt-0.5 h-5 w-5 shrink-0 text-bronze"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0Zm4.7 7.3-5.4 5.4a1 1 0 0 1-1.4 0L5.3 10a1 1 0 1 1 1.4-1.4l1.9 1.9 4.7-4.7a1 1 0 0 1 1.4 1.5Z" />
              </svg>
              {b}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          {campaign.services.map((slug) => {
            const s = getService(slug);
            if (!s) return null;
            return (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="rounded-full border-2 border-bronze/60 px-5 py-2.5 text-sm font-bold text-bronze hover:bg-bronze hover:text-ink"
              >
                {s.shortName}
              </Link>
            );
          })}
        </div>
        <div className="mt-8 max-w-xl">
          <CallAndQuoteButtons dark />
        </div>
      </div>
    </section>
  );
}
