"use client";

import { useState } from "react";
import Link from "next/link";
import {
  SITUATIONS,
  FOLLOW_UPS,
  getResult,
  quoteUrl,
  type QuizResult,
} from "@/lib/lawn-quiz";
import { getService } from "@/lib/services";
import { SITE } from "@/lib/site";
import { CallAndQuoteButtons, TrustBadges } from "@/components/Trust";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function gtm(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}

const cardClass =
  "w-full rounded-2xl border-2 border-forest/15 bg-white p-5 text-left transition-colors hover:border-forest active:border-forest sm:p-6";

export function FindMyLawnPlan() {
  const [step, setStep] = useState(0);
  const [situationId, setSituationId] = useState<string | null>(null);
  const [result, setResult] = useState<QuizResult | null>(null);

  function pickSituation(id: string) {
    setSituationId(id);
    gtm("quiz_step", { step: 1, situation: id });
    const direct = getResult(id);
    if (direct) {
      setResult(direct);
      setStep(2);
      gtm("quiz_complete", { service: direct.service, path: "direct" });
    } else {
      setStep(1);
    }
  }

  function pickOption(optionId: string) {
    if (!situationId) return;
    const r = getResult(situationId, optionId);
    if (!r) return;
    setResult(r);
    setStep(2);
    gtm("quiz_complete", {
      service: r.service,
      situation: situationId,
      option: optionId,
    });
  }

  function restart() {
    setStep(0);
    setSituationId(null);
    setResult(null);
    gtm("quiz_restart");
  }

  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-bronze">
            Find My Lawn Plan
          </p>
          <h1 className="display mt-3 text-4xl text-paper sm:text-5xl">
            What&apos;s going on with your yard?
          </h1>
          <p className="mt-3 max-w-xl text-lg text-paper/80">
            Answer two quick questions in plain language — we&apos;ll match
            you to the right service with upfront pricing. No jargon, no
            wrong answers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        {/* Progress */}
        <div className="mb-8 flex gap-2" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full ${
                step >= i ? "bg-bronze" : "bg-forest/15"
              }`}
            />
          ))}
        </div>

        {step === 0 && (
          <div>
            <h2 className="display text-2xl text-forest">
              Pick what fits best
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {SITUATIONS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => pickSituation(s.id)}
                  className={`${cardClass} min-h-24`}
                >
                  <span className="display block text-lg text-forest">
                    {s.title}
                  </span>
                  <span className="mt-1 block text-sm text-ink/65">
                    {s.subtitle}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && situationId && FOLLOW_UPS[situationId] && (
          <div>
            <button
              type="button"
              onClick={restart}
              className="mb-4 text-sm font-bold text-lake underline-offset-4 hover:underline"
            >
              ← Start over
            </button>
            <h2 className="display text-2xl text-forest">
              {FOLLOW_UPS[situationId].question}
            </h2>
            <div className="mt-5 grid gap-3">
              {FOLLOW_UPS[situationId].options.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => pickOption(o.id)}
                  className={`${cardClass} min-h-16`}
                >
                  <span className="block text-base font-bold text-ink">
                    {o.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && result && (
          <QuizResultScreen result={result} onRestart={restart} />
        )}
      </section>
    </>
  );
}

function QuizResultScreen({
  result,
  onRestart,
}: {
  result: QuizResult;
  onRestart: () => void;
}) {
  const service = getService(result.service);
  if (!service) return null;
  return (
    <div className="rounded-2xl border-2 border-forest/20 bg-white p-6 sm:p-8">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-lake">
        Your lawn plan
      </p>
      <h2 className="display mt-2 text-3xl text-forest">{result.headline}</h2>
      <p className="mt-3 text-base leading-relaxed text-ink/80">
        {result.reason}
      </p>

      <div className="mt-6 rounded-xl bg-paper p-5">
        <p className="text-sm font-bold uppercase tracking-widest text-ink/60">
          {service.pricing.label}
        </p>
        <p className="display mt-1 text-4xl text-forest">
          {service.pricing.price}{" "}
          <span className="text-lg">{service.pricing.unit}</span>
        </p>
        <p className="mt-2 text-sm text-ink/65">{service.pricing.note}</p>
      </div>

      <ul className="mt-6 space-y-2.5">
        {service.included.slice(0, 4).map((item) => (
          <li key={item} className="flex items-start gap-3 text-base">
            <svg
              viewBox="0 0 20 20"
              className="mt-0.5 h-5 w-5 shrink-0 text-lake"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0Zm4.7 7.3-5.4 5.4a1 1 0 0 1-1.4 0L5.3 10a1 1 0 1 1 1.4-1.4l1.9 1.9 4.7-4.7a1 1 0 0 1 1.4 1.5Z" />
            </svg>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <Link
          href={quoteUrl(result)}
          className="flex h-14 items-center justify-center rounded-lg bg-lake px-8 text-lg font-bold text-white transition-colors hover:bg-lake-deep"
        >
          Get My Exact Quote
        </Link>
        <a
          href={`tel:${SITE.phoneTel}`}
          className="mt-3 flex h-14 items-center justify-center rounded-lg border-2 border-forest text-lg font-bold text-forest"
        >
          Call {SITE.phoneDisplay}
        </a>
      </div>

      <div className="mt-6">
        <TrustBadges />
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="mt-5 w-full text-center text-sm font-bold text-ink/60 underline-offset-4 hover:underline"
      >
        Not quite right? Take the quiz again
      </button>
    </div>
  );
}
