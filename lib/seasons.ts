/*
 * North Texas seasonal lawn campaigns.
 *
 * Picks the current campaign by calendar month. Copy is honest agronomic
 * framing — no invented discounts or deadlines. Point it at real services
 * only; do not add offers the owner hasn't approved.
 */

export interface SeasonCampaign {
  /** e.g. "Fall" */
  season: string;
  /** Months this campaign covers, e.g. "September – November" */
  months: string;
  headline: string;
  body: string;
  bullets: string[];
  /** Service slugs to feature */
  services: string[];
}

const CAMPAIGNS: SeasonCampaign[] = [
  {
    season: "Fall",
    months: "September – November",
    headline: "Fall pre-emergent: the most important weed treatment of the year",
    body: "Once soil temperatures start dropping, winter weeds like annual bluegrass and lawn burweed germinate. A fall pre-emergent application — timed right, before germination — stops them before they ever sprout. Skip it and you're fighting weeds all winter and spring.",
    bullets: [
      "Blocks winter weeds before they germinate",
      "Timed to North Texas soil temperatures, not a calendar guess",
      "One visit now saves months of weed pressure later",
    ],
    services: ["fertilization-weed-control", "leaf-removal", "yard-cleanup"],
  },
  {
    season: "Winter",
    months: "December – February",
    headline: "Winter is reset season for your yard",
    body: "The grass is dormant but the yard doesn't take a vacation — leaves pile up, beds go weedy, and debris collects. Winter cleanups and leaf removal keep your lawn from suffocating under a wet blanket, so it's ready when the warm-up comes.",
    bullets: [
      "Leaf removal before matted leaves smother turf",
      "Bed cleanups while the yard is easy to work",
      "Get on the books ahead of the spring rush",
    ],
    services: ["leaf-removal", "yard-cleanup", "hedge-trimming"],
  },
  {
    season: "Spring",
    months: "March – May",
    headline: "Spring cleanup + pre-emergent: start the season right",
    body: "Late-winter and early-spring is when the lawn wakes up — and when early weeds get their head start. A spring cleanup clears the winter debris, and a timely pre-emergent application stops spring weeds before they establish.",
    bullets: [
      "Full cleanup after winter — beds, debris, overgrowth",
      "Pre-emergent timed for spring germination",
      "Set your mowing schedule before the growth surge",
    ],
    services: ["yard-cleanup", "fertilization-weed-control", "lawn-mowing"],
  },
  {
    season: "Summer",
    months: "June – August",
    headline: "Summer in Texas is when lawns live or die",
    body: "Triple-digit heat, drought stress, and a mowing schedule that can't slip. Weekly mowing at the right height keeps the roots shaded and the lawn thick — and a sharp edge makes the whole street notice.",
    bullets: [
      "Weekly mowing that keeps up with summer growth",
      "Cut at the right height to protect roots from heat",
      "Mulch to hold moisture and cool the soil",
    ],
    services: ["lawn-mowing", "mulching", "hedge-trimming"],
  },
];

/** Returns the campaign for the given month (0 = January). */
export function getCampaign(month: number): SeasonCampaign {
  if (month >= 8 && month <= 10) return CAMPAIGNS[0]; // Sep–Nov → Fall
  if (month === 11 || month <= 1) return CAMPAIGNS[1]; // Dec–Feb → Winter
  if (month >= 2 && month <= 4) return CAMPAIGNS[2]; // Mar–May → Spring
  return CAMPAIGNS[3]; // Jun–Aug → Summer
}
