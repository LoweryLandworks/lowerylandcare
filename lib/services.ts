/*
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  TODO — PLACEHOLDER PRICING — MUST BE REPLACED BEFORE LAUNCH          ║
 * ║                                                                        ║
 * ║  Every price in this file is an invented, realistic-sounding           ║
 * ║  placeholder. Lowery's has NOT confirmed any of these numbers.         ║
 * ║  The whole site promises "the price you see is the price you pay",     ║
 * ║  so shipping wrong prices here is worse than shipping none.            ║
 * ║                                                                        ║
 * ║  To update: edit the `pricing` object on each service below.           ║
 * ║  Nothing else in the codebase hardcodes a price.                       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

export interface ServicePricing {
  /** e.g. "Starting at" or "Per cubic yard" */
  label: string;
  /** Display price, e.g. "$45" */
  price: string;
  /** e.g. "per visit", "installed" */
  unit: string;
  /** Fine print shown under the price */
  note: string;
}

export interface Service {
  slug: string;
  name: string;
  /** Short label for cards/nav */
  shortName: string;
  /** One-liner for overview cards */
  blurb: string;
  /** Longer intro paragraph for the service page */
  description: string;
  included: string[];
  pricing: ServicePricing;
  faqs: { q: string; a: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: "lawn-mowing",
    name: "Lawn Mowing & Edging",
    shortName: "Lawn Mowing",
    blurb:
      "Weekly or biweekly mowing with crisp edges and a clean blow-off — the yard looks finished, every time.",
    description:
      "A mowed lawn isn't the same as a finished lawn. Every mowing visit from Lowery Landworks includes edging along your driveway and walkways, string trimming around fences and beds, and blowing off every hard surface before we leave. You pick weekly or biweekly — we show up on your schedule, same crew, same standard.",
    included: [
      "Mow all turf areas at the right height for the season",
      "Edge driveways, sidewalks, and curbs",
      "String-trim around fences, trees, and beds",
      "Blow clippings off all hard surfaces",
      "Gate closed and checked before we leave",
    ],
    // TODO: PLACEHOLDER PRICE — replace before launch
    pricing: {
      label: "Starting at",
      price: "$45",
      unit: "per visit",
      note: "Exact price depends on lot size — we confirm it before your first visit, and it never changes without telling you first.",
    },
    faqs: [
      {
        q: "Should I choose weekly or biweekly mowing?",
        a: "In the North Texas growing season (roughly April through October), weekly keeps the lawn at its best. Biweekly works fine in spring and fall. We'll recommend a schedule for your yard, and you can switch anytime.",
      },
      {
        q: "Do I have to sign a contract?",
        a: "No. Service is visit-to-visit — pause or cancel whenever you need to. We keep customers by doing good work, not with paperwork.",
      },
      {
        q: "What happens if it rains on my service day?",
        a: "We shift your visit to the next dry day and let you know. You're never charged for a visit that didn't happen.",
      },
    ],
  },
  {
    slug: "yard-cleanup",
    name: "Yard Cleanup",
    shortName: "Yard Cleanup",
    blurb:
      "One-time or seasonal cleanups — overgrowth, debris, and beds handled in a single visit.",
    description:
      "Whether the yard got away from you over a busy season or you're getting a property ready to sell or rent, a cleanup visit resets everything at once: overgrown turf, weedy beds, scattered branches and debris. We quote the whole job up front so there's no meter running.",
    included: [
      "Mow, edge, and trim overgrown turf",
      "Weed and tidy flower beds",
      "Pick up branches, litter, and yard debris",
      "Trim back overgrowth from walkways and fences",
      "Haul-away or curbside bagging of everything we collect",
    ],
    // TODO: PLACEHOLDER PRICE — replace before launch
    pricing: {
      label: "Starting at",
      price: "$150",
      unit: "per cleanup",
      note: "Priced by the job, not the hour. We confirm one flat number before we start — that's what you pay.",
    },
    faqs: [
      {
        q: "How do you price a cleanup?",
        a: "Send us your address and a couple of photos (or just describe it — we've seen it all). We give you one flat price for the whole job before we schedule anything.",
      },
      {
        q: "Do you haul everything away?",
        a: "Yes — haul-away or curbside bagging is included in your quote, whichever your city's pickup supports.",
      },
      {
        q: "How long does a cleanup take?",
        a: "Most residential cleanups are done in a single visit. If a yard needs more than that, we'll tell you up front, not halfway through.",
      },
    ],
  },
  {
    slug: "hedge-trimming",
    name: "Hedge & Shrub Trimming",
    shortName: "Hedge Trimming",
    blurb:
      "Clean, shaped hedges and shrubs — trimmed properly and cleaned up completely.",
    description:
      "Hedges and shrubs frame the whole yard — when they're shaggy, everything looks unkempt. We trim and shape hedges, shrubs, and small ornamental trees at the right time and to the right form, then clean up every clipping. No half-done shrubs, no green confetti left in your beds.",
    included: [
      "Trim and shape hedges, shrubs, and small ornamentals",
      "Remove dead or damaged branches",
      "Clean line-of-sight trimming along windows and walkways",
      "Full cleanup and haul-away of all clippings",
    ],
    // TODO: PLACEHOLDER PRICE — replace before launch
    pricing: {
      label: "Starting at",
      price: "$75",
      unit: "per visit",
      note: "Based on the number and size of shrubs. We count them with you and confirm the price before we cut anything.",
    },
    faqs: [
      {
        q: "How often should hedges be trimmed?",
        a: "Most North Texas hedges look their best trimmed 2–4 times a year. We can do it as a one-off or fold it into your regular lawn schedule.",
      },
      {
        q: "Can you trim tall hedges?",
        a: "We handle anything reachable with pole trimmers and ladders. For large tree work we'll tell you honestly that you need an arborist rather than doing a job halfway.",
      },
      {
        q: "Do you take the clippings with you?",
        a: "Always. Cleanup is part of the job, not an add-on.",
      },
    ],
  },
  {
    slug: "mulching",
    name: "Mulch Installation",
    shortName: "Mulching",
    blurb:
      "Fresh mulch, properly prepped beds, crisp edges — delivered and installed at one flat rate.",
    description:
      "Fresh mulch is the fastest way to make a yard look cared-for, and it protects your beds through the Texas summer. We prep the beds first — weeding and edging — then install mulch at the proper depth. You pick the mulch; we quote the whole job per cubic yard, installed, so the number you approve covers everything.",
    included: [
      "Weed and prep all beds before mulching",
      "Re-cut clean bed edges",
      "Mulch delivered and installed at proper 2–3\" depth",
      "Your choice of mulch color/type",
      "Full cleanup of paths and lawn after installation",
    ],
    // TODO: PLACEHOLDER PRICE — replace before launch
    pricing: {
      label: "From",
      price: "$85",
      unit: "per cubic yard, installed",
      note: "Includes the mulch, delivery, bed prep, and installation. We measure your beds and give you one total before any work starts.",
    },
    faqs: [
      {
        q: "How much mulch do I need?",
        a: "We measure your beds and calculate it for you — no guessing at the garden center. A typical front-yard refresh runs 2–4 cubic yards.",
      },
      {
        q: "When is the best time to mulch in North Texas?",
        a: "Spring (before the heat) and fall (before winter) are ideal, but beds can be refreshed any time of year.",
      },
      {
        q: "Do you remove the old mulch first?",
        a: "Usually old mulch is turned and topped, which is better for the soil. If a bed genuinely needs old material removed, we'll include that in your flat quote.",
      },
    ],
  },
  {
    slug: "fertilization-weed-control",
    name: "Fertilization & Weed Control",
    shortName: "Fertilization & Weed Control",
    blurb:
      "A season-long feeding and weed program built for North Texas turf.",
    description:
      "Thick, dark-green grass doesn't happen by accident in North Texas — it takes the right products at the right times. Our fertilization and weed control program feeds your lawn through the season and stays ahead of the weeds instead of chasing them. Flat per-application pricing, scheduled for you, no guesswork.",
    included: [
      "Seasonal fertilization matched to your grass type",
      "Pre-emergent weed control (stops weeds before they sprout)",
      "Post-emergent spot treatment of existing weeds",
      "Application schedule managed for you through the season",
      "Notification before every visit",
    ],
    // TODO: PLACEHOLDER PRICE — replace before launch
    pricing: {
      label: "Starting at",
      price: "$60",
      unit: "per application",
      note: "Priced by lawn size and locked in for the season. Most lawns need 6–8 applications per year.",
    },
    faqs: [
      {
        q: "How many applications does my lawn need?",
        a: "A full North Texas program is typically 6–8 applications across the year. We'll map out the schedule for your lawn and you'll see the whole season's pricing up front.",
      },
      {
        q: "Is it safe for kids and pets?",
        a: "We use professional products applied per label. We'll tell you the short re-entry window after each application — usually just until the product dries.",
      },
      {
        q: "Can you fix a lawn that's mostly weeds?",
        a: "Usually, yes — it takes a season of consistent treatment rather than one miracle visit. We'll give you an honest assessment before you spend anything.",
      },
    ],
  },
  {
    slug: "leaf-removal",
    name: "Leaf Removal",
    shortName: "Leaf Removal",
    blurb:
      "Leaves cleared from lawn, beds, and hard surfaces — gone before they smother your grass.",
    description:
      "A thick blanket of leaves left through winter smothers turf and invites mold and pests. We clear leaves from your lawn, beds, patios, and driveway, and haul them away or bag them curbside. One flat price per cleanup, quoted before we start.",
    included: [
      "Clear leaves from all turf areas",
      "Blow out beds, patios, porches, and driveway",
      "Clear leaves from fence lines and corners",
      "Haul-away or curbside bagging included",
    ],
    // TODO: PLACEHOLDER PRICE — replace before launch
    pricing: {
      label: "Starting at",
      price: "$120",
      unit: "per cleanup",
      note: "Depends on lot size and how deep the leaves are. One flat number, confirmed before we start.",
    },
    faqs: [
      {
        q: "How many leaf cleanups do I need per season?",
        a: "Most North Texas yards do best with 2–3 cleanups between November and January, depending on your trees. One big final cleanup also works if you'd rather wait.",
      },
      {
        q: "Do you clean gutters too?",
        a: "Ask when you request your quote — for single-story homes we can often include it. We'll only say yes if we can do it safely.",
      },
      {
        q: "What do you do with the leaves?",
        a: "Hauled away or bagged at the curb for city pickup, whichever your quote includes. Either way they're gone, not blown into the street.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
