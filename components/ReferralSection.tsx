import { SITE } from "@/lib/site";
import { CallAndQuoteButtons } from "@/components/Trust";

/**
 * Referral program section. OFF until SITE.referral.enabled is true with
 * owner-approved terms — do not publish credit amounts we made up.
 */
export function ReferralSection() {
  if (!SITE.referral.enabled) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="rounded-2xl bg-earth p-8 text-center text-olive-pale sm:p-12">
        <h2 className="display text-3xl text-bronze sm:text-4xl">
          Neighbors get neighbors
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-paper/80 md:text-lg">
          Refer a friend and you both get{" "}
          <strong className="text-bronze">{SITE.referral.referrerCredit}</strong>{" "}
          in service credit when they sign up. No limit — your credits can
          cover a whole season.
        </p>
        {SITE.referral.terms && (
          <p className="mx-auto mt-3 max-w-lg text-sm text-paper/60">
            {SITE.referral.terms}
          </p>
        )}
        <div className="mx-auto mt-8 w-fit">
          <CallAndQuoteButtons dark />
        </div>
      </div>
    </section>
  );
}
