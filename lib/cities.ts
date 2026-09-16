/*
 * City landing pages (app/locations/[city]).
 *
 * Each entry carries genuinely unique local copy — do not auto-generate or
 * duplicate paragraphs across cities. Nothing here invents reviews, ratings,
 * credentials, or prices.
 */

export interface City {
  slug: string;
  name: string;
  /** Real ZIP codes served in this city (spot-check against USPS if unsure). */
  zips: string[];
  /** Neighborhoods / landmarks customers recognize. */
  areas: string[];
  /** Unique 2-sentence intro for the hero. */
  intro: string;
  /** What we actually see on lawns in this city — keep general, not invented claims. */
  localNotes: string[];
  /** One honest scheduling/route note. */
  routeNote: string;
  faqs: { q: string; a: string }[];
}

export const CITIES: City[] = [
  {
    slug: "denton-tx",
    name: "Denton",
    zips: ["76201", "76205", "76207", "76208", "76209", "76210"],
    areas: ["Historic Denton", "North Lakes", "Robson Ranch", "Southridge", "UNT & TWU area"],
    intro:
      "Denton mixes historic neighborhoods with fast-growing new developments — and their lawns need different care. From the big old oaks near the square to new-builder sod out west, we keep Denton yards cut, edged, and weed-free.",
    localNotes: [
      "Older neighborhoods around the square have mature trees — we trim back what's reachable and mow around deep shade where grass grows thin.",
      "New builds on the west side often sit on compacted clay. Regular mowing and seasonal feeding keep new sod from thinning out.",
      "College rentals and family homes alike: if the yard got away from you over the semester or the season, a one-time cleanup resets it.",
    ],
    routeNote: "Denton is our home base — most quotes here turn into same-week service.",
    faqs: [
      {
        q: "Do you mow in the UNT and TWU areas?",
        a: "Yes — we serve the whole city, including the university neighborhoods, historic district, and everything out to Robson Ranch and the new west-side developments.",
      },
      {
        q: "Can you handle a yard that's gone months without mowing?",
        a: "Absolutely. That's a cleanup visit first — we bring it back under control in one visit, then regular mowing keeps it there.",
      },
    ],
  },
  {
    slug: "lewisville-tx",
    name: "Lewisville",
    zips: ["75056", "75057", "75067", "75077"],
    areas: ["Castle Hills", "Old Town Lewisville", "Lake Lewisville shoreline", "Vista Ridge"],
    intro:
      "Lewisville sits right on the lake, with everything from established Castle Hills lawns to older lots near Old Town. We mow, clean up, and treat lawns across Lewisville on weekly and biweekly routes.",
    localNotes: [
      "Lake-adjacent lawns deal with humidity and pests — consistent mowing height matters more here than in drier parts of DFW.",
      "Castle Hills HOAs keep standards high; our edging and bed work keeps those sharp lines the neighborhood expects.",
      "Fall leaf season hits hard around the older tree-lined streets — schedule leaf cleanups before they smother the turf.",
    ],
    routeNote: "We run Lewisville routes alongside Flower Mound and Highland Village, so scheduling stays tight.",
    faqs: [
      {
        q: "Do you service HOA neighborhoods like Castle Hills?",
        a: "Yes. We keep up with HOA expectations — crisp edges, trimmed shrubs, and a clean blow-off every visit, so you never get the letter.",
      },
      {
        q: "How often should I mow in Lewisville's growing season?",
        a: "Weekly from about April through October keeps St. Augustine and Bermuda at their best. Biweekly works in spring and fall.",
      },
    ],
  },
  {
    slug: "flower-mound-tx",
    name: "Flower Mound",
    zips: ["75022", "75028"],
    areas: ["Cross Timbers", "Wellington", "Bruton Orand", "Lakeside"],
    intro:
      "Flower Mound's Cross Timbers terrain means big post oaks, bigger lots, and lawns that fight for sunlight. We know the area's shade problems and the bigger properties — and we bring the equipment to match.",
    localNotes: [
      "Shade from mature oaks is the #1 lawn issue in Flower Mound. We'll be honest about what grass can and can't do under a full canopy.",
      "Larger lots (half-acre and up) are common — our mowing routes account for the extra turf, and pricing is confirmed up front by lot size.",
      "Hedge and shrub trimming is a big ask here — lots of foundation plantings that need shaping 2–4 times a year.",
    ],
    routeNote: "Flower Mound's lot sizes vary a lot, so we confirm pricing from your address before the first visit.",
    faqs: [
      {
        q: "My yard is mostly shade from oak trees. Can you still help?",
        a: "Yes — we'll tell you honestly what to expect. Shade-tolerant approaches and honest assessments beat promises that don't survive a Texas summer.",
      },
      {
        q: "Do you handle half-acre and larger lots?",
        a: "Yes. Bring us the address and we'll confirm an exact price for the full lot before we schedule anything.",
      },
    ],
  },
  {
    slug: "corinth-tx",
    name: "Corinth",
    zips: ["76208", "76210"],
    areas: ["Shady Shores Rd", "Lake Dallas border", "Oakmont", "Corinth Parkway corridor"],
    intro:
      "Corinth is growing fast — new construction next to established streets, all of it needing the same thing: a reliable crew that shows up on schedule. We serve the whole city with mowing, cleanups, and treatment programs.",
    localNotes: [
      "New-construction lawns need consistent early care — builder sod that gets neglected in year one costs a lot more to fix in year two.",
      "Many Corinth lots back to greenbelts, which means extra leaf and debris pressure in fall. Seasonal cleanups handle it.",
      "Between Denton and Lewisville, Corinth sits right in our core route — quick scheduling, same-week starts.",
    ],
    routeNote: "Corinth is on our core route between Denton and Lewisville — most requests start the same week.",
    faqs: [
      {
        q: "We just moved into a new build. What does the lawn need first?",
        a: "Consistent mowing at the right height and a feeding schedule for the first season. We'll assess the sod and lay out a simple plan — no upsell, just what the yard needs.",
      },
      {
        q: "Do you do one-time cleanups for move-ins?",
        a: "Yes. Builder debris, overgrown edges, weedy beds — one flat price, one visit, done.",
      },
    ],
  },
  {
    slug: "highland-village-tx",
    name: "Highland Village",
    zips: ["75077"],
    areas: ["The Shops at Highland Village", "Doubletree Ranch", "Lakeshore", "Castlewood"],
    intro:
      "Highland Village takes its lawns seriously — lakefront streets, manicured neighborhoods, and high standards. We keep Highland Village yards crisp with weekly routes, sharp edging, and shrub shaping.",
    localNotes: [
      "This is a detail town: crisp driveway edges and shaped shrubs are the baseline, not the upgrade.",
      "Lakefront humidity means lawns respond well to consistent feeding — our treatment program is built for it.",
      "HOA standards here are real. Our crews know the drill: clean lines, blown-off hard surfaces, nothing left behind.",
    ],
    routeNote: "We route Highland Village with Flower Mound and Lewisville for reliable weekly service.",
    faqs: [
      {
        q: "Will your work meet HOA standards?",
        a: "That's our baseline here — edged, trimmed, blown off, every visit. If your HOA has specific requirements, tell us and we'll match them.",
      },
      {
        q: "Do you offer a full-season treatment program?",
        a: "Yes — fertilization and weed control on a managed schedule through the season, so you never have to think about timing.",
      },
    ],
  },
  {
    slug: "argyle-tx",
    name: "Argyle",
    zips: ["76226"],
    areas: ["Harvest", "Canyon Falls", "Old Town Argyle", "Country-estate lots"],
    intro:
      "Argyle means acreage — big lots, long driveways, and lawns that take a crew, not a push mower. We bring commercial equipment and honest per-lot pricing to Argyle's larger properties.",
    localNotes: [
      "Half-acre to multi-acre lots are the norm. We price by the actual turf area, confirmed before the first visit.",
      "Many Argyle properties mix manicured lawn near the house with rougher acreage — we can maintain both, or just the part you care about.",
      "Rural-feeling lots collect debris fast after storms. One-call cleanups handle branches, limbs, and overgrowth.",
    ],
    routeNote: "Argyle's bigger lots get scheduled as dedicated stops — tell us the acreage and we'll confirm the price up front.",
    faqs: [
      {
        q: "Do you mow multi-acre properties?",
        a: "Yes — commercial mowers handle acreage efficiently. Send your address and we'll confirm one exact price for the full property.",
      },
      {
        q: "Can you just mow near the house and leave the back acreage?",
        a: "Absolutely. We'll price the maintained area only — no charge for turf we don't touch.",
      },
    ],
  },
  {
    slug: "aubrey-tx",
    name: "Aubrey",
    zips: ["76227"],
    areas: ["Providence Village", "Emerald Bend", "Wynnwood Creek", "Downtown Aubrey"],
    intro:
      "Aubrey's growth is all new — Providence Village, Wynnwood Creek, and new streets going up every month. New lawns need consistent early care, and we keep Aubrey yards on schedule from day one.",
    localNotes: [
      "New-builder sod in Aubrey sits on heavy clay. The first two seasons of consistent mowing and feeding decide how the lawn looks for the next ten years.",
      "Construction dust and debris settle in beds — a cleanup plus fresh mulch makes a new build look finished.",
      "Fast-growing neighborhoods mean fast-growing weeds in new topsoil. Pre-emergent timing matters here.",
    ],
    routeNote: "We run Aubrey alongside Little Elm and Denton — new-build routes welcome.",
    faqs: [
      {
        q: "Our builder just laid sod. What now?",
        a: "Don't let it go — consistent mowing at the right height and a feeding plan in the first season. We'll assess it free with your quote.",
      },
      {
        q: "There's construction debris everywhere. Do you clean that up?",
        a: "A cleanup visit handles builder debris, overgrown edges, and weedy beds — one flat price, quoted before we start.",
      },
    ],
  },
  {
    slug: "little-elm-tx",
    name: "Little Elm",
    zips: ["75068"],
    areas: ["Lighthouse", "Frisco Ranch", "Lakefront", "Hilltown"],
    intro:
      "Little Elm's lakefront growth brought thousands of new lawns — and new lawns need a crew from the start. We mow, edge, and treat Little Elm yards on routes built for the area's new developments.",
    localNotes: [
      "New developments mean new sod on clay — early, consistent care is everything.",
      "Lake winds dry lawns fast in summer. Proper mowing height shades the roots and holds moisture.",
      "Many Little Elm yards are smaller lots with big expectations — crisp edges make a small yard look twice its size.",
    ],
    routeNote: "Little Elm routes run with Frisco and Aubrey — easy scheduling, same-week starts.",
    faqs: [
      {
        q: "Do you service the lakefront neighborhoods?",
        a: "Yes — all of Little Elm, including Lighthouse, Frisco Ranch, and the lakefront streets.",
      },
      {
        q: "My yard is small. Is it worth hiring a crew?",
        a: "Smaller lots are our fastest, most affordable stops — and a sharp edge makes a small yard look great. Get a quote and see.",
      },
    ],
  },
  {
    slug: "dallas-tx",
    name: "Dallas",
    zips: ["75206", "75209", "75214", "75218", "75225", "75230", "75248", "75252", "75254"],
    areas: ["North Dallas", "Lake Highlands", "Oak Lawn", "Preston Hollow", "Far North Dallas"],
    intro:
      "From North Dallas to Lake Highlands, Dallas lawns range from established St. Augustine under big oaks to new-build Bermuda in the far north. We serve the Dallas neighborhoods where a reliable crew is worth more than a cheap one.",
    localNotes: [
      "North Dallas's mature tree canopy means shade management and honest expectations about thin spots.",
      "Far North Dallas new builds are classic builder-sod-on-clay — early consistent care decides the lawn's future.",
      "Busy professionals need a crew that doesn't need babysitting: gate closed, clippings gone, bill matches the quote.",
    ],
    routeNote: "Dallas routes run weekly — tell us your neighborhood and we'll fit you into the schedule.",
    faqs: [
      {
        q: "Which parts of Dallas do you serve?",
        a: "We focus on North Dallas, Lake Highlands, Oak Lawn, Preston Hollow, and Far North Dallas. Outside those areas? Ask — if it's in the metroplex, we can often make it work.",
      },
      {
        q: "I travel for work. Can I trust the crew without being home?",
        a: "That's most of our customers. Same crew, same standard, gate closed when we leave — and the price never changes without you approving it first.",
      },
    ],
  },
  {
    slug: "fort-worth-tx",
    name: "Fort Worth",
    zips: ["76107", "76109", "76116", "76132", "76148", "76244"],
    areas: ["Westside", "Alliance corridor", "Tanglewood", "Ridglea", "Southwest Fort Worth"],
    intro:
      "Fort Worth's west side and Alliance corridor keep growing, and the lawns keep coming with them. We bring the same deal to Fort Worth as everywhere else: one exact price up front, and that's what you pay.",
    localNotes: [
      "West Fort Worth's newer developments are heavy on builder sod — consistent early mowing pays off for years.",
      "Established neighborhoods like Ridglea and Tanglewood have mature landscaping that needs regular shaping, not just mowing.",
      "Wind and heat on the west side stress lawns in August — right mowing height is the cheapest insurance.",
    ],
    routeNote: "Fort Worth is our western reach — we schedule dedicated route days, so book ahead for the fastest start.",
    faqs: [
      {
        q: "Do you come all the way to Fort Worth?",
        a: "Yes — the whole DFW metroplex is our service area, Fort Worth included. We run dedicated route days on the west side.",
      },
      {
        q: "Can you do more than mowing — hedges, mulch, cleanups?",
        a: "All of it. Mowing, cleanups, hedge trimming, mulch, fertilization and weed control, leaf removal — one crew, one quote.",
      },
    ],
  },
  {
    slug: "plano-tx",
    name: "Plano",
    zips: ["75023", "75024", "75025", "75093", "75094"],
    areas: ["Legacy", "Willow Bend", "Hunters Glen", "Kings Ridge", "Park Forest"],
    intro:
      "Plano's established neighborhoods and strict HOAs mean lawns are judged — and we like it that way. Crisp edges, shaped shrubs, and a crew that shows up like clockwork across Plano.",
    localNotes: [
      "HOA standards in Plano are among the strictest in DFW. Our baseline — edged, trimmed, blown off — is built for them.",
      "Older Plano lawns (70s–90s builds) often have compacted soil and tired St. Augustine. Consistent care brings them back.",
      "Legacy-area commercial-adjacent homes want weekend-quiet, weekday service — we schedule around it.",
    ],
    routeNote: "Plano routes run with Frisco and North Dallas — weekly and biweekly slots available.",
    faqs: [
      {
        q: "My HOA is strict. Can you guarantee compliance?",
        a: "We maintain to HOA standards as our baseline: edged, trimmed, blown off, every single visit. Tell us your HOA's specific rules and we'll match them.",
      },
      {
        q: "Our lawn is old and tired. Is it too far gone?",
        a: "Usually not — a season of consistent mowing and feeding revives most established lawns. We'll give you an honest assessment with your quote, not a sales pitch.",
      },
    ],
  },
  {
    slug: "frisco-tx",
    name: "Frisco",
    zips: ["75034", "75035", "75036"],
    areas: ["Phillips Creek Ranch", "Newman Village", "Frisco Lakes", "Stonebriar"],
    intro:
      "Frisco is master-planned, HOA-driven, and growing by the day — and every new street needs a lawn crew. We keep Frisco yards sharp with weekly routes built for the area's neighborhoods.",
    localNotes: [
      "Master-planned HOAs here notice everything. Our crews work to a checklist: mow, edge, trim, blow — same standard, every visit.",
      "Newer Frisco builds sit on clay with fresh sod. The first seasons of care determine the lawn's long-term health.",
      "Phillips Creek Ranch, Newman Village, Frisco Lakes — we know the neighborhoods and their standards.",
    ],
    routeNote: "Frisco runs with Plano and Little Elm — weekly slots fill fast in the growing season, so book early.",
    faqs: [
      {
        q: "Do you work in master-planned communities with strict HOAs?",
        a: "Yes — that's most of our Frisco work. We maintain to HOA standards every visit, and we'll match any specific community requirements you share with us.",
      },
      {
        q: "How fast can you start?",
        a: "Frisco routes run weekly. Most quotes turn into a first visit within the week — call and we'll tell you the next open slot.",
      },
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
