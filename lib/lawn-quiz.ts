/*
 * "Find My Lawn Plan" quiz logic — customer language, not industry jargon.
 * The customer knows what situation they're seeing (overgrown, weeds,
 * brown patches), not service names. Each path resolves to a service slug
 * (and optional frequency) that the quote form preselects via ?service=.
 */

import { getService } from "./services";

export interface Situation {
  id: string;
  title: string;
  subtitle: string;
}

export interface FollowUp {
  question: string;
  options: { id: string; label: string; service: string; frequency?: string }[];
}

export const SITUATIONS: Situation[] = [
  {
    id: "overgrown",
    title: "It's overgrown",
    subtitle: "Tall grass, hasn't been cut in a while",
  },
  {
    id: "weeds",
    title: "Weeds are taking over",
    subtitle: "Weeds popping up in the lawn or beds",
  },
  {
    id: "patches",
    title: "Brown or thin spots",
    subtitle: "Patchy, brown, or bare areas",
  },
  {
    id: "routine",
    title: "Just needs regular mowing",
    subtitle: "Keep it cut, edged, and tidy",
  },
  {
    id: "mess",
    title: "It's a mess",
    subtitle: "Overgrowth, debris, beds — full reset needed",
  },
];

export const FOLLOW_UPS: Record<string, FollowUp> = {
  overgrown: {
    question: "How far behind is it?",
    options: [
      {
        id: "behind-weeks",
        label: "A few weeks — tall but manageable",
        service: "lawn-mowing",
      },
      {
        id: "behind-months",
        label: "Months — knee-high or worse",
        service: "yard-cleanup",
      },
      {
        id: "behind-unsure",
        label: "Not sure — just come look",
        service: "yard-cleanup",
      },
    ],
  },
  weeds: {
    question: "Where are the weeds worst?",
    options: [
      {
        id: "weeds-grass",
        label: "In the grass itself",
        service: "fertilization-weed-control",
      },
      {
        id: "weeds-beds",
        label: "In the flower beds",
        service: "yard-cleanup",
      },
      {
        id: "weeds-everywhere",
        label: "Honestly? Everywhere",
        service: "yard-cleanup",
      },
    ],
  },
  patches: {
    question: "How widespread are the bad spots?",
    options: [
      {
        id: "patches-small",
        label: "Small patches here and there",
        service: "fertilization-weed-control",
      },
      {
        id: "patches-big",
        label: "Half the lawn or more",
        service: "yard-cleanup",
      },
    ],
  },
  routine: {
    question: "How often do you want it cut?",
    options: [
      { id: "freq-weekly", label: "Weekly", service: "lawn-mowing", frequency: "weekly" },
      {
        id: "freq-biweekly",
        label: "Every 2 weeks",
        service: "lawn-mowing",
        frequency: "biweekly",
      },
      {
        id: "freq-unsure",
        label: "Not sure yet",
        service: "lawn-mowing",
      },
    ],
  },
  // "mess" goes straight to a result — no follow-up needed.
};

export interface QuizResult {
  service: string;
  frequency?: string;
  headline: string;
  reason: string;
}

/** Direct results for situations with no follow-up. */
const DIRECT_RESULTS: Record<string, QuizResult> = {
  mess: {
    service: "yard-cleanup",
    headline: "Your yard needs a full reset",
    reason:
      "When everything's gone at once — overgrowth, weeds, debris — the fix is a one-time cleanup that resets the whole yard in a single visit.",
  },
};

export function getResult(
  situationId: string,
  optionId?: string
): QuizResult | null {
  const direct = DIRECT_RESULTS[situationId];
  if (direct) return direct;
  const followUp = FOLLOW_UPS[situationId];
  if (!followUp) return null;
  const option = followUp.options.find((o) => o.id === optionId);
  if (!option) return null;
  const service = getService(option.service);
  if (!service) return null;
  return {
    service: option.service,
    frequency: option.frequency,
    headline: `Sounds like you need: ${service.shortName}`,
    reason: service.blurb,
  };
}

export function quoteUrl(result: QuizResult): string {
  const params = new URLSearchParams({ service: result.service });
  if (result.frequency) params.set("frequency", result.frequency);
  return `/quote?${params.toString()}`;
}
