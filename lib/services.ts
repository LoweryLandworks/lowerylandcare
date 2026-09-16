/*
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  PRICING POLICY — NO PUBLISHED PRICES                                  ║
 * ║                                                                        ║
 * ║  This site deliberately publishes NO dollar figures. Mike has not       ║
 * ║  confirmed any prices, and the site promises "the price you see is     ║
 * ║  the price you pay" — so publishing invented numbers would be worse    ║
 * ║  than publishing none. Every pricing object below frames the quote     ║
 * ║  process instead: one exact price, confirmed within 60 minutes.         ║
 * ║                                                                        ║
 * ║  If Mike ever supplies real starting prices, add a `price` field       ║
 * ║  back to ServicePricing and render it in app/services/[slug]/page.tsx. ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

export interface ServicePricing {
  /** Small eyebrow, e.g. "Flat pricing" */
  label: string;
  /** Headline promise — never a dollar figure */
  headline: string;
  /** Supporting line under the headline */
  sub: string;
  /** Fine print shown under the price card */
  note: string;
}

export interface ServiceStep {
  title: string;
  text: string;
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
  /** Who this service is for — customer-language, residential + commercial */
  whoFor: string;
  /** Honest scope boundary: what this service does NOT do */
  notIncluded: string;
  /** 3-step "how it works" for the service page */
  steps: ServiceStep[];
  /** Plain-English pricing explainer */
  pricingExplainer: string;
  /** Why this service matters in the North Texas climate */
  climateNote: string;
  /** One-line commercial angle, used on the /commercial page */
  commercial: string;
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
      "A mowed lawn isn't the same as a finished lawn. Every mowing visit from Lowery Landworks includes edging along your driveway and walkways, string trimming around fences and beds, and blowing off every hard surface before we leave. You pick weekly or biweekly — we show up on your schedule, same standard, every visit.",
    whoFor:
      "For homeowners who want the yard handled every week without thinking about it — and for landlords, property managers, and small commercial properties that need the grounds consistently sharp. If you'd rather spend your Saturday anywhere but behind a mower, this is the service.",
    notIncluded:
      "Mowing doesn't include fertilization, weed control, or hedge trimming — those are separate services because they need different equipment, products, and timing. And we won't mow a soaked lawn: we'd rather shift your visit a day than rut up wet turf.",
    steps: [
      {
        title: "Get a firm price within 60 minutes",
        text: "Send your address through the quote form. We confirm one flat price per visit before your first service — and it never changes without telling you first.",
      },
      {
        title: "Pick your schedule",
        text: "Weekly or biweekly, on a day that works for you. Same standard, every visit. You never need to be home — a gate code is enough.",
      },
      {
        title: "Never think about it again",
        text: "We mow, edge, trim, and blow off. Gate closed and checked before we leave. Pause or change your schedule anytime — just let us know.",
      },
    ],
    pricingExplainer:
      "Mowing is priced by lot size, not by the hour — so the number we confirm up front is the number on every visit. Weekly clients get the best per-visit rate because the grass stays manageable. One exact price, confirmed before your first service.",
    climateNote:
      "North Texas grass grows like it has somewhere to be from April through October — Bermuda and St. Augustine can need cutting every 5–7 days in peak summer. Weekly service in growing season keeps the lawn thick and healthy; skipping weeks lets weeds seed and the turf thin out. In winter, growth slows to a crawl, so most customers drop to every other week or pause entirely.",
    commercial:
      "Mowing for commercial properties on a regular schedule — the grounds always look intentional.",
    included: [
      "Mow all turf areas at the right height for the season",
      "Edge driveways, sidewalks, and curbs",
      "String-trim around fences, trees, and beds",
      "Blow clippings off all hard surfaces",
      "Gate closed and checked before we leave",
    ],
    pricing: {
      label: "Flat pricing",
      headline: "Your exact price in 60 minutes",
      sub: "per visit, confirmed before your first service",
      note: "Priced by lot size — we confirm one number up front, and it never changes without telling you first.",
    },
    faqs: [
      {
        q: "Should I choose weekly or biweekly mowing?",
        a: "In the North Texas growing season (roughly April through October), weekly keeps the lawn at its best. Biweekly works fine in spring and fall. We'll recommend a schedule for your yard, and you can switch anytime.",
      },
      {
        q: "Can I pause or change my schedule?",
        a: "Yes — switch between weekly and biweekly, pause for a trip or the slow season, and restart whenever. Just let us know and we'll adjust.",
      },
      {
        q: "What happens if it rains on my service day?",
        a: "We shift your visit to the next dry day and let you know — we'd rather wait a day than rut up wet turf.",
      },
      {
        q: "Do I need to be home for mowing day?",
        a: "No. A gate code or an unlocked gate is all we need — you can just come home to a finished yard.",
      },
      {
        q: "Do you bag the clippings or leave them?",
        a: "We mulch clippings back into the lawn by default — it's free fertilizer and keeps the turf fed. Prefer bagging? Just tell us and we'll bag.",
      },
      {
        q: "What mowing height do you cut at?",
        a: "The right height for your grass type and the season — higher for St. Augustine, lower for Bermuda — and we never scalp. Cutting too short is the fastest way to stress a Texas lawn.",
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
    whoFor:
      "For anyone staring at a yard that's gotten away from them — new homeowners, landlords turning a rental between tenants, folks prepping a house for sale, or anyone who just had a busy few months. One visit resets the whole property so regular maintenance can take over.",
    notIncluded:
      "A cleanup isn't a fix for everything: it doesn't include hauling construction debris, removing large trees or stumps, or fixing drainage problems. If your yard needs those, we'll tell you straight and point you toward the right kind of contractor instead of doing it halfway.",
    steps: [
      {
        title: "Send photos, get one flat price",
        text: "Send your address and a couple of photos — or just describe it, we've seen it all. We give you one flat price for the whole job before anything is scheduled.",
      },
      {
        title: "We reset the whole yard in one visit",
        text: "Overgrown turf cut down, beds weeded, branches and debris picked up, everything hauled away or bagged curbside. We aim to finish every cleanup in a single visit — and if a yard genuinely needs more than that, you'll know before we start.",
      },
      {
        title: "Keep it that way (optional)",
        text: "After the reset, most customers roll straight into weekly or biweekly mowing so it never gets away from them again. No pressure — it's your call.",
      },
    ],
    pricingExplainer:
      "Cleanups are priced by the job, never by the hour — so there's no incentive to stretch the work. Your quote covers labor, cleanup, and haul-away in one number. If a yard genuinely needs more than one visit, you'll know before we start, not halfway through.",
    climateNote:
      "In North Texas, spring cleanups (March–April) clear winter damage before the growing season starts, and fall cleanups (October–November) get leaves and dead growth out before winter. Storm season can drop branches any time of year — that's exactly what one-off cleanups are for.",
    commercial:
      "Property turnovers and seasonal resets for commercial properties — quoted flat, done without the meter running.",
    included: [
      "Mow, edge, and trim overgrown turf",
      "Weed and tidy flower beds",
      "Pick up branches, litter, and yard debris",
      "Trim back overgrowth from walkways and fences",
      "Haul-away or curbside bagging of everything we collect",
    ],
    pricing: {
      label: "Flat pricing",
      headline: "One flat price, confirmed first",
      sub: "per job, never per hour",
      note: "We confirm one number before we start — that's what you pay.",
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
        a: "We aim to finish every cleanup in a single visit. If a yard needs more than that, we'll tell you up front, not halfway through.",
      },
      {
        q: "I'm selling my house — is a cleanup worth it?",
        a: "Curb appeal is the cheapest marketing a listing gets. A one-day cleanup can make the difference between 'needs work' and 'move-in ready' in listing photos.",
      },
      {
        q: "Do I need to be home during the cleanup?",
        a: "No. As long as we can access the yard, we'll handle everything.",
      },
      {
        q: "My yard is really bad — like, really bad. Will you judge?",
        a: "No. Overgrown yards are literally the job. The worse it looks now, the better the after photos.",
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
    whoFor:
      "For homeowners whose hedges have outgrown their shape, landlords keeping curb appeal sharp between tenants, and small offices or storefronts where the landscaping is the first thing customers see.",
    notIncluded:
      "We trim hedges, shrubs, and small ornamentals — not large trees, and nothing near power lines. Big tree work belongs to an arborist with the right equipment and insurance, and we'll say so honestly rather than do it halfway.",
    steps: [
      {
        title: "We count, you approve the price",
        text: "We walk the shrubs with you — or from your photos — and confirm one flat price before a single branch is cut.",
      },
      {
        title: "Trimmed to shape, at the right time",
        text: "Hedges get shaped, not just hacked back. We cut at the right point in the season so plants stay healthy and hold their form.",
      },
      {
        title: "Every clipping gone",
        text: "Full cleanup and haul-away is part of the job, not an add-on. Your beds and lawn look like we were never there — except the hedges.",
      },
    ],
    pricingExplainer:
      "Priced by the number and size of shrubs — we count them with you and confirm one flat price before cutting. No hourly meter, no surprise add-ons for cleanup.",
    climateNote:
      "Most North Texas hedges — ligustrum, boxwood, holly, Indian hawthorn — do best trimmed in late winter before spring growth, then again in summer to hold their shape. Cutting at the wrong time, especially in peak heat, stresses the plant. We time trims to the plant, not just the calendar.",
    commercial:
      "Hedges and shrubs kept shaped on a schedule for commercial properties — the landscaping always looks intentional.",
    included: [
      "Trim and shape hedges, shrubs, and small ornamentals",
      "Remove dead or damaged branches",
      "Clean line-of-sight trimming along windows and walkways",
      "Full cleanup and haul-away of all clippings",
    ],
    pricing: {
      label: "Flat pricing",
      headline: "Counted with you, quoted flat",
      sub: "by the shrub, confirmed before cutting",
      note: "We count your shrubs and confirm one price before a single branch is cut.",
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
      {
        q: "Will you shape them, or just cut them back?",
        a: "Shape them. There's a difference between shearing a hedge into a box and hacking it down — we do the first one, and we cut so the plant fills back in evenly.",
      },
      {
        q: "Can hedge trimming happen on my regular mowing day?",
        a: "Yes — most customers fold trimming into their mowing schedule a few times a year. One visit, one crew, everything handled.",
      },
      {
        q: "My hedges are blocking my windows — can you cut them way back?",
        a: "Usually, yes — most established hedges recover well from a hard cutback done at the right time of year. We'll tell you honestly what to expect before we cut.",
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
    whoFor:
      "For anyone who wants finished-looking beds without a weekend of wheelbarrow runs — homeowners refreshing curb appeal before listing or hosting, landlords, and commercial properties where the beds are the first thing visitors notice.",
    notIncluded:
      "Mulch installation covers prepping and mulching your existing beds — it doesn't include new plants, bed redesign, or irrigation work. If you want the beds themselves redesigned, that's a separate conversation we'll have honestly.",
    steps: [
      {
        title: "We measure, you get one total",
        text: "We measure your beds, calculate the cubic yards, and give you one total price — mulch, delivery, prep, and installation all in.",
      },
      {
        title: "Beds prepped properly",
        text: "Weeds pulled, old edges re-cut clean. Mulch over weeds is just expensive weed cover — prep is what makes it last.",
      },
      {
        title: "Installed at the right depth",
        text: "2–3 inches, even and clean, with a full cleanup of paths and lawn afterward. You pick the mulch color and type.",
      },
    ],
    pricingExplainer:
      "Quoted per cubic yard, installed — and that single number includes the mulch itself, delivery, bed prep, edging, and installation. No separate delivery fee, no materials surprise.",
    climateNote:
      "Mulch does real work in Texas: it holds soil moisture through 100° summers, keeps roots cooler, and blocks weeds from sprouting. Two to three inches is the sweet spot — more than that suffocates roots, less doesn't do the job. Spring (before the heat) and fall (before winter) are the ideal windows.",
    commercial:
      "Bed refreshes for commercial properties — measured and quoted per yard installed, done without disrupting your tenants or customers.",
    included: [
      "Weed and prep all beds before mulching",
      "Re-cut clean bed edges",
      "Mulch delivered and installed at proper 2–3\" depth",
      "Your choice of mulch color/type",
      "Full cleanup of paths and lawn after installation",
    ],
    pricing: {
      label: "Flat pricing",
      headline: "Quoted per cubic yard, installed",
      sub: "one total — mulch, delivery, prep, install",
      note: "We measure your beds and give you one total before any work starts.",
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
      {
        q: "What kind of mulch can I choose from?",
        a: "Shredded hardwood, cedar, pine bark, dyed mulch in black or brown — your call. We'll recommend what holds its color longest under the Texas sun if you ask.",
      },
      {
        q: "How long does mulch last before it needs refreshing?",
        a: "About a year before it fades and compacts. Most beds get a fresh top layer annually — usually in spring.",
      },
      {
        q: "Will mulch really help with weeds?",
        a: "Yes — 2–3 inches of mulch blocks sunlight from weed seeds, which stops most of them from sprouting. It's not a force field, but it cuts weeding dramatically.",
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
    whoFor:
      "For homeowners tired of a thin, weedy lawn — and for anyone who wants a real program instead of guessing at the garden center. Also for commercial properties and HOAs where the turf has to look consistently presentable.",
    notIncluded:
      "This program feeds and protects your existing lawn — it doesn't include seeding, sodding, or fixing irrigation. If your lawn is more dirt than grass, we'll tell you honestly whether treatment or new sod is the smarter spend before you pay for either.",
    steps: [
      {
        title: "We map your season up front",
        text: "We look at your grass type, size, and weed pressure, then lay out the full season's schedule and cost up front — so you know the whole plan before the first visit.",
      },
      {
        title: "Applications happen on schedule",
        text: "Treatments across the year, timed to the North Texas season. Pre-emergent before weeds sprout, feeding when the grass needs it.",
      },
      {
        title: "Clear instructions after every visit",
        text: "You'll get simple after-visit instructions each time — watering, wait times for kids and pets, gates. We work around all of it.",
      },
    ],
    pricingExplainer:
      "Priced per application by lawn size — and you see the full season's schedule and total cost before the first visit. No per-visit surprises.",
    climateNote:
      "North Texas turf lives on a calendar: pre-emergent in late winter stops crabgrass before it starts, spring feeding pushes growth, summer applications hold color through the heat, and fall feeding builds roots for winter. Skip the timing and you spend all summer fighting weeds that never should have sprouted.",
    commercial:
      "Season-long turf programs for commercial properties — scheduled applications through the season, turf that stays presentable year-round.",
    included: [
      "Seasonal fertilization matched to your grass type",
      "Pre-emergent weed control (stops weeds before they sprout)",
      "Post-emergent spot treatment of existing weeds",
      "Application schedule managed for you through the season",
      "Clear after-visit instructions every time",
    ],
    pricing: {
      label: "Season program",
      headline: "Whole season mapped up front",
      sub: "per application, scheduled through the season",
      note: "Priced by lawn size. You see the full season's schedule and cost before the first visit.",
    },
    faqs: [
      {
        q: "How many applications does my lawn need?",
        a: "It depends on your lawn — we'll map out a season schedule for your turf and show you the full plan and cost up front, before the first visit.",
      },
      {
        q: "Is it safe for kids and pets?",
        a: "We use professional products applied per label, and we leave clear after-visit instructions — including how long to keep kids and pets off the treated area.",
      },
      {
        q: "Can you fix a lawn that's mostly weeds?",
        a: "Usually, yes — it takes a season of consistent treatment rather than one miracle visit. We'll give you an honest assessment before you spend anything.",
      },
      {
        q: "Will this kill the weeds I already have?",
        a: "Pre-emergent stops new weeds from sprouting; existing weeds get post-emergent spot treatment. It takes consistency — one application won't undo a year of weeds, but a season of them will.",
      },
      {
        q: "Do I need to water after an application?",
        a: "We'll leave simple instructions after each visit. Usually a light watering helps granular products activate — nothing complicated.",
      },
      {
        q: "Can I combine this with mowing service?",
        a: "Yes — most of our program customers are also on a mowing schedule. One company handling both means the lawn plan actually stays coordinated.",
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
    whoFor:
      "For homeowners with big oaks or pecans burying the yard every fall, rental owners keeping properties clear, and anyone who'd rather not spend their November weekends raking.",
    notIncluded:
      "Leaf removal clears leaves — it doesn't include gutter cleaning as standard (ask when you quote; single-story homes are often doable), branch removal beyond small debris, or storm-damage cleanup.",
    steps: [
      {
        title: "One flat price, confirmed first",
        text: "Based on lot size and how deep the leaves are. You approve the number before we start — haul-away included.",
      },
      {
        title: "Everything cleared, not just the lawn",
        text: "Turf, beds, patios, porches, driveway, fence lines, and corners — leaves hide everywhere, and we get all of it.",
      },
      {
        title: "Gone, not relocated",
        text: "Hauled away or bagged at the curb for city pickup. Never blown into the street or into your neighbor's yard.",
      },
    ],
    pricingExplainer:
      "One flat price per cleanup based on lot size and leaf depth — confirmed before we start, with haul-away or curbside bagging included. No hourly rate, no per-bag charges.",
    climateNote:
      "North Texas leaf season runs November through January — live oaks drop late and all at once. Leaves left matted through winter smother turf and invite fungus and pests. Two to three cleanups through the season, or one big final clear in January, keeps the lawn breathing.",
    commercial:
      "Scheduled leaf clearings through the fall for commercial properties — so the grounds never look neglected.",
    included: [
      "Clear leaves from all turf areas",
      "Blow out beds, patios, porches, and driveway",
      "Clear leaves from fence lines and corners",
      "Haul-away or curbside bagging included",
    ],
    pricing: {
      label: "Flat pricing",
      headline: "One flat price per cleanup",
      sub: "confirmed before we start",
      note: "Based on lot size and leaf depth — haul-away included in your quote.",
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
      {
        q: "Can you come on a schedule through the fall?",
        a: "Yes — a lot of customers book 2–3 visits across November to January. We'll space them around when your trees actually drop.",
      },
      {
        q: "Do you blow leaves into the street or storm drains?",
        a: "No. Everything is hauled away or bagged curbside. Blowing leaves into the street just moves the problem — and most cities prohibit it.",
      },
      {
        q: "Will leaves really hurt my lawn if I leave them?",
        a: "A light scattering is fine — it breaks down and feeds the soil. A thick matted layer is what smothers turf, blocks sunlight, and invites fungus over winter.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
