/*
 * Lawn & yard guides — educational SEO content in plain customer language.
 * Nothing here invents prices: the site publishes no dollar figures, and
 * every guide points to the quote form for an exact price within 60 minutes.
 */

export interface GuideSection {
  heading: string;
  paragraphs: string[];
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: GuideSection[];
  takeaway: string;
}

export const GUIDES: Guide[] = [
  {
    slug: "lawn-care-cost-dfw",
    title: "How Much Does Lawn Care Cost in DFW?",
    description:
      "What lawn mowing, cleanups, mulch, and treatment programs actually cost in the Dallas–Fort Worth metroplex — and what makes the price go up or down.",
    intro:
      "Nobody likes the 'it depends' answer, but for lawn care it genuinely does — a quarter-acre in Plano and two acres in Argyle aren't the same job. Here's how pricing actually works in DFW, what our services start at, and the factors that move your number up or down.",
    sections: [
      {
        heading: "How our pricing works",
        paragraphs: [
          "We don't publish one-size-fits-all prices, because a quarter-acre in Plano and two acres in Argyle aren't the same job — quoting one flat number for both would be dishonest. Instead, your exact price is confirmed before we schedule anything, and that's the price you pay.",
          "Send your address and we'll confirm your exact price within 60 minutes. Mowing is priced by lot size and frequency, cleanups and mulch by the job, hedge trimming by the shrub, treatments per application — one number, up front, every time.",
        ],
      },
      {
        heading: "What moves the price up or down",
        paragraphs: [
          "Lot size is the biggest factor — more turf, more time. Condition matters too: a lawn that's been mowed weekly costs less per visit than one that's been growing wild for two months (that's a cleanup first, then regular service).",
          "Frequency works in your favor. Weekly mowing is cheaper per visit than biweekly because the grass stays manageable — tall, thick grass takes longer to cut, edge, and blow off. Add-ons like hedge trimming or bed work are quoted separately, always up front.",
          "What shouldn't move the price after you approve it: the number we confirm is the number you pay. No fine-print add-ons, no bill that's bigger than the quote you agreed to.",
        ],
      },
      {
        heading: "Beware the too-cheap quote",
        paragraphs: [
          "If someone quotes you $25 to mow in DFW, ask what's included. The usual answer: a quick pass with the mower, no edging, no trimming, no blow-off — and a different person every time. You end up paying twice: once for the cheap cut, once for someone to fix the edges.",
          "A finished lawn means mow, edge, trim, and blow-off, every visit. That's the baseline you should compare against — not just the number.",
        ],
      },
    ],
    takeaway:
      "The fastest way to know your price: send your address through our quote form. We'll reply within 60 minutes with one exact number.",
  },
  {
    slug: "best-grass-north-texas",
    title: "St. Augustine vs Bermuda vs Zoysia in North Texas",
    description:
      "The three grasses you'll see across DFW lawns — what each one needs, where each one struggles, and how to tell what you have.",
    intro:
      "Walk any DFW neighborhood and you'll see three grasses doing 95% of the work: St. Augustine, Bermuda, and Zoysia. They look different, behave differently, and need different care. Here's the plain-English breakdown.",
    sections: [
      {
        heading: "St. Augustine — the shade-tolerant favorite",
        paragraphs: [
          "Broad, dark-green blades and the best shade tolerance of the three — which is why it dominates older DFW neighborhoods with mature trees. It likes to be cut high (3–4 inches) and hates being scalped.",
          "Its weakness: it needs consistent water in summer and it's the most disease-prone of the three in humid stretches. If your St. Augustine is thinning, the usual culprits are cutting too short, too much shade, or compacted soil — not a lack of fertilizer.",
        ],
      },
      {
        heading: "Bermuda — the sun-lover",
        paragraphs: [
          "Fine-bladed, dense, and aggressive — Bermuda loves full sun and heat, which is why builders plant it on new DFW developments. It wants to be cut short (1–2 inches) and mowed often; let it get tall and it gets stemmy and brown underneath.",
          "Its weakness: shade. Bermuda in heavy shade just gives up, and no amount of feeding fixes that. It's also the thirstiest-looking of the three when it goes dormant — brown in winter is normal, not dead.",
        ],
      },
      {
        heading: "Zoysia — the slow, dense luxury pick",
        paragraphs: [
          "Thick, carpet-like, and weed-resistant once established — Zoysia is the premium choice and the slowest to establish. It handles partial shade better than Bermuda and needs less water than St. Augustine once rooted.",
          "Its weakness: patience. It establishes slowly from sod and recovers slowly from damage. It also wants consistent mowing — let it get shaggy and it thatches.",
        ],
      },
      {
        heading: "How to tell what you have",
        paragraphs: [
          "Broad flat blades that feel soft underfoot: St. Augustine. Fine, dense blades that feel almost prickly: Bermuda. Thick, carpet-dense turf that's slow to show footprints: Zoysia. Still not sure? Send us a photo with your quote request and we'll identify it.",
        ],
      },
    ],
    takeaway:
      "Whatever grass you have, the fundamentals are the same: right mowing height, consistent schedule, seasonal feeding. We handle all three across DFW — tell us what you've got and we'll take it from there.",
  },
  {
    slug: "when-to-fertilize-dfw",
    title: "When to Fertilize Your Lawn in DFW (Season Calendar)",
    description:
      "The North Texas lawn feeding calendar — what to apply and when, from pre-emergent in late winter through winterizer in fall.",
    intro:
      "Timing is everything with lawn treatments in North Texas. The right product at the wrong time is wasted money; the right product at the right time is what makes lawns thick and dark green. Here's the calendar.",
    sections: [
      {
        heading: "Late winter (February–March): pre-emergent",
        paragraphs: [
          "This is the most important application of the year. Pre-emergent goes down before soil temperatures rise and stops crabgrass and other summer weeds before they sprout. Miss this window and you'll fight weeds all summer.",
          "This is also when the lawn wakes up — a light feeding as it greens up sets the tone for spring.",
        ],
      },
      {
        heading: "Spring (April–May): feeding + spot treatment",
        paragraphs: [
          "The grass is growing fast now. Balanced fertilization pushes healthy growth, and any weeds that slipped past the pre-emergent get spot-treated before they seed.",
        ],
      },
      {
        heading: "Summer (June–August): sustain, don't push",
        paragraphs: [
          "Texas summer is survival mode. The goal isn't explosive growth — it's keeping color and density through the heat without stressing the turf. Lighter applications, timed around rain and watering, plus continued weed control.",
        ],
      },
      {
        heading: "Fall (September–November): the money months",
        paragraphs: [
          "Fall feeding builds roots for winter — this is what determines how fast your lawn greens up next spring. A second pre-emergent in fall stops winter weeds like henbit and chickweed before they start.",
        ],
      },
      {
        heading: "Why a program beats guessing",
        paragraphs: [
          "A real program means applications timed to the season — each one doing its job at the right moment — instead of guessing. The alternative is standing in a garden center aisle trying to decode bags, which is how most people end up over-fertilizing in July and wondering why the lawn looks worse.",
          "Our fertilization and weed control program runs the whole calendar for you: scheduled applications timed to North Texas seasons, with the full season's plan and cost laid out before the first visit.",
        ],
      },
    ],
    takeaway:
      "Don't guess at the garden center. Get a season-long program — we'll map the whole year's schedule and cost for your lawn up front.",
  },
  {
    slug: "how-often-mow-north-texas",
    title: "How Often Should You Mow in North Texas?",
    description:
      "Weekly vs biweekly mowing in DFW — what the growing season actually demands, and why skipping weeks costs more than it saves.",
    intro:
      "The single most common question we get: how often? The honest answer depends on the season — North Texas grass in July and North Texas grass in January are barely the same plant.",
    sections: [
      {
        heading: "Growing season (April–October): weekly",
        paragraphs: [
          "Bermuda and St. Augustine can grow an inch or more per week in peak summer. Weekly mowing keeps the lawn at its best — thick, even, and healthy. It also keeps weeds from seeding, which is half the battle.",
          "Here's what most people don't realize: weekly is cheaper per visit than biweekly. Tall, overgrown grass takes longer to cut, edge, and clean up — so the 'savings' of skipping a week mostly evaporate in the extra labor.",
        ],
      },
      {
        heading: "Shoulder seasons (March, November): biweekly works",
        paragraphs: [
          "Growth is slower in early spring and late fall. Biweekly keeps things tidy without paying for cuts the lawn doesn't need yet.",
        ],
      },
      {
        heading: "Winter (December–February): as needed",
        paragraphs: [
          "Dormant grass barely grows. Most customers pause mowing entirely or keep a light every-other-week tidy-up. Leaf cleanups matter more than mowing in winter — matted leaves smother turf and invite fungus.",
        ],
      },
      {
        heading: "The one-third rule",
        paragraphs: [
          "Lawn science has one golden rule: never cut more than one-third of the blade at once. Scalping stresses the grass, opens it to weeds, and turns it brown. That's why consistency beats intensity — regular cuts at the right height always win over occasional buzz-cuts.",
        ],
      },
    ],
    takeaway:
      "Weekly in the growing season, biweekly in the shoulders, rest in winter. We'll recommend a schedule for your yard — and you can switch or pause anytime.",
  },
  {
    slug: "overgrown-yard-fix",
    title: "Overgrown Yard? Here's the Fix (Without the HOA Letter)",
    description:
      "What to do when the yard's gotten away from you — the cleanup process, what it costs, and how to keep it from happening again.",
    intro:
      "It happens: a busy season, a new house, a rental turnover, a mower that died in June. Now the grass is knee-high, the beds are a jungle, and there's a letter from the HOA on the counter. Here's exactly how to fix it.",
    sections: [
      {
        heading: "Step 1: Don't mow it yourself (yet)",
        paragraphs: [
          "Knee-high grass will choke a residential mower, and cutting it all at once scalps whatever's underneath. An overgrown yard needs a staged cut-down — high first, then to proper height — plus edging, trimming, and a full debris cleanup. That's a cleanup visit, not a mowing visit.",
        ],
      },
      {
        heading: "Step 2: Get one flat price for the whole reset",
        paragraphs: [
          "Send photos or just describe it — we've seen it all, and there's no judgment. We'll quote one flat price for the entire cleanup: cut-down, edging, bed weeding, branch and debris pickup, haul-away. You'll approve the number before we schedule anything.",
          "If you got an HOA notice, send it with the photos. We'll tell you honestly what it takes to satisfy it and when we can get there.",
        ],
      },
      {
        heading: "Step 3: Keep it from happening again",
        paragraphs: [
          "After the reset, the math is simple: regular mowing costs a fraction of repeated cleanups. Most customers roll straight into weekly or biweekly service — same standard, every visit, and the yard never gets away from them again.",
          "It's your call — just a schedule that keeps the HOA quiet and the weekends yours.",
        ],
      },
    ],
    takeaway:
      "One flat price, one visit, yard reset. Send photos through our quote form — we'll reply within 60 minutes with your exact cleanup price.",
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
