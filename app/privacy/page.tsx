import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Lowery Landworks.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="display text-4xl text-forest">Privacy Policy</h1>
      <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/85">
        <p>
          This is the privacy policy for {SITE.name} (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;), operator of {SITE.domain.replace("https://", "")}.
        </p>
        <h2 className="display pt-2 text-xl text-forest">
          What we collect
        </h2>
        <p>
          When you request a quote, we collect the information you give us:
          your name, phone number, service address or ZIP code, and the
          service you&apos;re interested in. Our website may also collect
          standard analytics data (pages visited, device type) through
          Google Tag Manager if analytics are enabled.
        </p>
        <h2 className="display pt-2 text-xl text-forest">How we use it</h2>
        <p>
          We use your contact information for one thing: responding to your
          quote request and providing the lawn care services you ask for. We
          do not sell your information or share it with third parties for
          their marketing.
        </p>
        <h2 className="display pt-2 text-xl text-forest">Data storage</h2>
        <p>
          Quote requests are stored in a secure database and notification
          emails are sent to our team so we can respond. You can ask us to
          delete your information at any time by calling{" "}
          <a href={`tel:${SITE.phoneTel}`} className="font-bold underline">
            {SITE.phoneDisplay}
          </a>
          .
        </p>
        <h2 className="display pt-2 text-xl text-forest">Contact</h2>
        <p>
          Questions about this policy? Call us at {SITE.phoneDisplay}.
        </p>
      </div>
    </section>
  );
}
