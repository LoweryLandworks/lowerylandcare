/*
 * City landing pages (app/locations/[city]).
 *
 * Each entry carries genuinely unique local copy — do not auto-generate or
 * duplicate paragraphs across cities. Nothing here invents reviews, ratings,
 * credentials, or prices. Scheduling language is kept honest: no promised
 * start times, just how the routes run.
 */

export interface CityServiceBlurb {
  /** service slug from lib/services */
  service: string;
  blurb: string;
}

export interface City {
  slug: string;
  name: string;
  /** Real ZIP codes served in this city (spot-check against USPS if unsure). */
  zips: string[];
  /** Neighborhoods / landmarks customers recognize. */
  areas: string[];
  /** Unique 2-sentence intro for the hero. */
  intro: string;
  /** The local "yard enemy" — the specific problem lawns face in this city. */
  yardProblem: string;
  /** Why Lowery Landworks is a fit for this city — honest, no invented claims. */
  whyUs: string;
  /** 3 featured services with a local angle. */
  serviceBlurbs: CityServiceBlurb[];
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
    yardProblem:
      "Denton's double life is the challenge: historic neighborhoods with mature oaks that starve grass of sunlight, and new west-side builds where builder sod sits on compacted clay. Both need consistent care, but for opposite reasons — shade management on one side, establishment care on the other.",
    whyUs:
      "We're based right here. Denton yards are the ones we know best — the clay, the oaks, the rental turnover near campus — and the crew is local, not passing through.",
    serviceBlurbs: [
      {
        service: "lawn-mowing",
        blurb:
          "Weekly routes through the historic district, the university neighborhoods, and the west-side developments — edged and blown off, every visit.",
      },
      {
        service: "yard-cleanup",
        blurb:
          "Semester turnover near campus, seasonal resets for family homes — one flat price to bring an overgrown Denton yard back under control.",
      },
      {
        service: "fertilization-weed-control",
        blurb:
          "Denton's clay soil needs a real feeding program, not a bag of whatever was on sale. Season-long applications, timed right, priced by lawn size.",
      },
    ],
    localNotes: [
      "Older neighborhoods around the square have mature trees — we trim back what's reachable and mow around deep shade where grass grows thin.",
      "New builds on the west side often sit on compacted clay. Regular mowing and seasonal feeding keep new sod from thinning out.",
      "College rentals and family homes alike: if the yard got away from you over the semester or the season, a one-time cleanup resets it.",
    ],
    routeNote: "Denton is our home base — scheduling here is straightforward.",
    faqs: [
      {
        q: "Do you mow in the UNT and TWU areas?",
        a: "Yes — we serve the whole city, including the university neighborhoods, historic district, and everything out to Robson Ranch and the new west-side developments.",
      },
      {
        q: "Can you handle a yard that's gone months without mowing?",
        a: "Absolutely. That's a cleanup visit first — we bring it back under control in one visit, then regular mowing keeps it there.",
      },
      {
        q: "My yard is mostly shade from old oaks. What can you actually do?",
        a: "Be honest with you first: grass won't thrive where the sun never reaches. We'll tell you what the lawn can realistically do under your canopy and maintain it to that standard — no selling you a program that can't work.",
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
    yardProblem:
      "Lake humidity is the quiet enemy — it pushes fungus and weeds faster than in drier parts of DFW, and Castle Hills-style HOAs don't forgive a sloppy edge. Lewisville lawns need consistency more than intensity.",
    whyUs:
      "We route Lewisville with Flower Mound and Highland Village, so the crew is in your neighborhood every week — not passing through once a month.",
    serviceBlurbs: [
      {
        service: "lawn-mowing",
        blurb:
          "Weekly and biweekly routes across Castle Hills, Old Town, and the lake neighborhoods — consistent mowing height matters more here than anywhere.",
      },
      {
        service: "hedge-trimming",
        blurb:
          "Foundation plantings and privacy hedges shaped 2–4 times a year, with every clipping hauled away. The detail work HOA streets expect.",
      },
      {
        service: "leaf-removal",
        blurb:
          "Fall hits hard around the older tree-lined streets. Scheduled cleanups November through January, before leaves smother the turf.",
      },
    ],
    localNotes: [
      "Lake-adjacent lawns deal with humidity and pests — consistent mowing height matters more here than in drier parts of DFW.",
      "Castle Hills HOAs keep standards high; our edging and bed work keeps those sharp lines the neighborhood expects.",
      "Fall leaf season hits hard around the older tree-lined streets — schedule leaf cleanups before they smother the turf.",
    ],
    routeNote: "We run Lewisville routes alongside Flower Mound and Highland Village.",
    faqs: [
      {
        q: "Do you service HOA neighborhoods like Castle Hills?",
        a: "Yes. We keep up with HOA expectations — crisp edges, trimmed shrubs, and a clean blow-off every visit, so you never get the letter.",
      },
      {
        q: "How often should I mow in Lewisville's growing season?",
        a: "Weekly from about April through October keeps St. Augustine and Bermuda at their best. Biweekly works in spring and fall.",
      },
      {
        q: "The lake humidity gives us fungus problems. Can you help?",
        a: "Consistent mowing at the right height is the first defense — it keeps air moving through the turf. We'll also flag what we see and tell you honestly when a lawn needs more than maintenance.",
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
    yardProblem:
      "Post-oak shade. Half the lawns in Flower Mound are fighting a full canopy, and grass simply won't thrive where the sun never reaches — the fix is honest expectations and the right approach, not more fertilizer.",
    whyUs:
      "We tell Flower Mound customers the truth about shade instead of selling a program that can't work. The lawns we can help, we help well — and we bring commercial mowers for the bigger lots.",
    serviceBlurbs: [
      {
        service: "lawn-mowing",
        blurb:
          "Half-acre and larger lots are normal here. We price by actual turf area and bring the equipment to cut it efficiently.",
      },
      {
        service: "hedge-trimming",
        blurb:
          "Big foundation plantings need shaping 2–4 times a year. We trim to form and haul every clipping — no green confetti left in the beds.",
      },
      {
        service: "yard-cleanup",
        blurb:
          "Post-oak properties collect limbs and debris. One flat-price visit clears it all and resets the beds and edges.",
      },
    ],
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
      {
        q: "Will you be straight with me if my lawn can't be fixed?",
        a: "Always. If the shade is too deep for turf, we'll say so and talk about what actually works — rather than take your money for a season of disappointment.",
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
    yardProblem:
      "New construction everywhere — fresh sod on scraped clay, builder debris in the beds, weeds racing the grass in new topsoil. Year one decides the next ten for a Corinth lawn.",
    whyUs:
      "Corinth sits on our core Denton–Lewisville route, so the crew is nearby and scheduling is simple. New-build lawns are something we do every week.",
    serviceBlurbs: [
      {
        service: "lawn-mowing",
        blurb:
          "Weekly routes for new-construction streets and established blocks alike — consistent early mowing is what makes builder sod survive.",
      },
      {
        service: "yard-cleanup",
        blurb:
          "Builder debris, overgrown edges, weedy beds from a vacant stretch — one flat price, one visit, move-in ready.",
      },
      {
        service: "mulching",
        blurb:
          "Construction dust settles into everything. A cleanup plus fresh mulch makes a new Corinth build look finished.",
      },
    ],
    localNotes: [
      "New-construction lawns need consistent early care — builder sod that gets neglected in year one costs a lot more to fix in year two.",
      "Many Corinth lots back to greenbelts, which means extra leaf and debris pressure in fall. Seasonal cleanups handle it.",
      "Between Denton and Lewisville, Corinth sits right in our core route — easy scheduling.",
    ],
    routeNote: "Corinth is on our core route between Denton and Lewisville.",
    faqs: [
      {
        q: "We just moved into a new build. What does the lawn need first?",
        a: "Consistent mowing at the right height and a feeding schedule for the first season. We'll assess the sod and lay out a simple plan — no upsell, just what the yard needs.",
      },
      {
        q: "Do you do one-time cleanups for move-ins?",
        a: "Yes. Builder debris, overgrown edges, weedy beds — one flat price, one visit, done.",
      },
      {
        q: "Our street is still under construction. Is that a problem?",
        a: "No — we work around it. Dust and debris are part of life on a new street; we'll keep the yard and beds clear regardless.",
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
    yardProblem:
      "Standards. Lakefront streets and HOAs that notice everything — a missed edge or a shaggy shrub isn't a minor thing here, it's what the neighbors talk about.",
    whyUs:
      "Detail work is our baseline, not our upsell. Highland Village is where that matters most — every visit runs the same checklist: mow, edge, trim, blow.",
    serviceBlurbs: [
      {
        service: "lawn-mowing",
        blurb:
          "Weekly routes where the edge lines matter as much as the cut. Crisp driveways, clean curbs, blown-off hard surfaces — every time.",
      },
      {
        service: "hedge-trimming",
        blurb:
          "Shaped shrubs and clean sight lines along windows and walkways. The detail work that keeps a Highland Village front looking intentional.",
      },
      {
        service: "fertilization-weed-control",
        blurb:
          "Lakefront humidity responds well to consistent feeding. A managed season-long program, timed right, so the lawn stays deep green.",
      },
    ],
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
      {
        q: "Will we see familiar faces on our route?",
        a: "We run consistent routes, so you'll see familiar faces — and the same standard, every visit.",
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
    yardProblem:
      "Acreage. Half-acre to multi-acre lots that a push mower and a Saturday can't touch — and mixed properties where the front needs to look sharp while the back just needs to stay under control.",
    whyUs:
      "We bring commercial mowers and price by actual turf area, confirmed before the first visit. Big lots are a normal Tuesday for us, not a special event.",
    serviceBlurbs: [
      {
        service: "lawn-mowing",
        blurb:
          "Multi-acre mowing with commercial equipment, priced by the actual maintained area. Just the front? Just around the house? Your call.",
      },
      {
        service: "yard-cleanup",
        blurb:
          "Storm limbs, overgrown fence lines, acreage that's gotten away from you — one flat-price visit to bring the whole property back.",
      },
      {
        service: "hedge-trimming",
        blurb:
          "Long runs of hedges and ornamental beds around estate homes, shaped properly and cleaned up completely.",
      },
    ],
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
      {
        q: "Do you offer commercial or HOA common-area mowing?",
        a: "Yes — we do residential acreage and commercial properties. If it's outdoor maintenance in DFW, talk to us.",
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
    yardProblem:
      "Everything is new — new sod, new clay, new weeds in fresh topsoil. The first two seasons decide whether an Aubrey lawn becomes the neighborhood standout or the cautionary tale.",
    whyUs:
      "New-build routes are our bread and butter. We know what builder sod needs in year one because we do it every single week.",
    serviceBlurbs: [
      {
        service: "lawn-mowing",
        blurb:
          "Weekly mowing at the right height for young sod — the consistent early care that decides how the lawn looks for the next decade.",
      },
      {
        service: "fertilization-weed-control",
        blurb:
          "Fresh topsoil grows weeds fast. Pre-emergent timing and season-long feeding, managed for you from the start.",
      },
      {
        service: "yard-cleanup",
        blurb:
          "Builder debris, construction dust in the beds, overgrown edges — one flat-price visit makes a new build look finished.",
      },
    ],
    localNotes: [
      "New-builder sod in Aubrey sits on heavy clay. The first two seasons of consistent mowing and feeding decide how the lawn looks for the next ten years.",
      "Construction dust and debris settle in beds — a cleanup plus fresh mulch makes a new build look finished.",
      "Fast-growing neighborhoods mean fast-growing weeds in new topsoil. Pre-emergent timing matters here.",
    ],
    routeNote: "We run Aubrey alongside Little Elm and Denton.",
    faqs: [
      {
        q: "Our builder just laid sod. What now?",
        a: "Don't let it go — consistent mowing at the right height and a feeding plan in the first season. We'll assess it free with your quote.",
      },
      {
        q: "There's construction debris everywhere. Do you clean that up?",
        a: "A cleanup visit handles builder debris, overgrown edges, and weedy beds — one flat price, quoted before we start.",
      },
      {
        q: "How soon after the sod goes down should mowing start?",
        a: "Once it's rooted enough to handle the mower — usually a couple of weeks. We'll tell you honestly when we quote; cutting too early tears young sod.",
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
    yardProblem:
      "Lake wind and new sod — a rough combo. Wind dries young lawns fast in summer, and the clay underneath holds water just long enough to cause trouble. New Little Elm lawns need the right mowing height more than anything.",
    whyUs:
      "We run Little Elm with Frisco and Aubrey, so the crew is nearby and scheduling stays simple. Small lots, big expectations — that's our fastest, sharpest work.",
    serviceBlurbs: [
      {
        service: "lawn-mowing",
        blurb:
          "Smaller lots, weekly routes, crisp edges that make a compact yard look twice its size. Our most affordable stops — and some of our sharpest.",
      },
      {
        service: "fertilization-weed-control",
        blurb:
          "Young sod on clay needs feeding to establish deep roots. A season-long program, timed to North Texas, managed for you.",
      },
      {
        service: "mulching",
        blurb:
          "Fresh beds are the fastest upgrade for a new build. Measured, quoted per yard installed, done in a day.",
      },
    ],
    localNotes: [
      "New developments mean new sod on clay — early, consistent care is everything.",
      "Lake winds dry lawns fast in summer. Proper mowing height shades the roots and holds moisture.",
      "Many Little Elm yards are smaller lots with big expectations — crisp edges make a small yard look twice its size.",
    ],
    routeNote: "Little Elm routes run with Frisco and Aubrey.",
    faqs: [
      {
        q: "Do you service the lakefront neighborhoods?",
        a: "Yes — all of Little Elm, including Lighthouse, Frisco Ranch, and the lakefront streets.",
      },
      {
        q: "My yard is small. Is it worth hiring a crew?",
        a: "Smaller lots are our fastest, most affordable stops — and a sharp edge makes a small yard look great. Get a quote and see.",
      },
      {
        q: "The wind off the lake dries everything out. Any advice?",
        a: "Mowing higher shades the roots and holds moisture — it's the simplest fix and it's free. We'll cut your lawn at the right height for the conditions.",
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
    yardProblem:
      "Two kinds of Dallas lawn, two kinds of trouble: established North Dallas yards under mature oaks fighting shade and thin spots, and far-north new builds where builder sod meets clay. Both share one need — a crew that shows up without being chased.",
    whyUs:
      "Most of our Dallas customers travel and never see us. They stay because the yard is right every time they come home, the gate is closed, and the bill always matches the quote.",
    serviceBlurbs: [
      {
        service: "lawn-mowing",
        blurb:
          "Weekly routes for North Dallas, Lake Highlands, and Far North Dallas. You don't need to be home — most of our Dallas customers aren't.",
      },
      {
        service: "hedge-trimming",
        blurb:
          "Mature foundation plantings shaped properly, not sheared into submission. Big oaks, old shrubs — we know the established Dallas landscape.",
      },
      {
        service: "yard-cleanup",
        blurb:
          "Between travel schedules and Texas storms, Dallas yards get away from people. One flat-price visit resets the whole property.",
      },
    ],
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
      {
        q: "Do you do commercial properties in Dallas too?",
        a: "Yes — offices, retail, and rental properties. If it's outdoor maintenance in DFW, residential or commercial, talk to us.",
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
    yardProblem:
      "Distance and heat. Fort Worth's west side takes the full August blast, and too many companies treat the west side as an afterthought — long gaps between visits from crews that don't want the drive.",
    whyUs:
      "We run dedicated Fort Worth route days. You're not an afterthought squeezed between closer stops — you're a route, held to the same standard.",
    serviceBlurbs: [
      {
        service: "lawn-mowing",
        blurb:
          "Weekly and biweekly routes across the west side and Alliance corridor. Right mowing height is the cheapest insurance against an August lawn.",
      },
      {
        service: "yard-cleanup",
        blurb:
          "New-build debris, storm limbs, overgrown rentals — one flat price, one visit, done. Fort Worth cleanups are some of our most-booked jobs.",
      },
      {
        service: "fertilization-weed-control",
        blurb:
          "West-side heat and wind stress turf hard. A season-long feeding program keeps it thick enough to fight back.",
      },
    ],
    localNotes: [
      "West Fort Worth's newer developments are heavy on builder sod — consistent early mowing pays off for years.",
      "Established neighborhoods like Ridglea and Tanglewood have mature landscaping that needs regular shaping, not just mowing.",
      "Wind and heat on the west side stress lawns in August — right mowing height is the cheapest insurance.",
    ],
    routeNote: "Fort Worth is our western reach — we schedule dedicated route days.",
    faqs: [
      {
        q: "Do you come all the way to Fort Worth?",
        a: "Yes — the whole DFW metroplex is our service area, Fort Worth included. We run dedicated route days on the west side.",
      },
      {
        q: "Can you do more than mowing — hedges, mulch, cleanups?",
        a: "All of it. Mowing, cleanups, hedge trimming, mulch, fertilization and weed control, leaf removal — one crew, one quote.",
      },
      {
        q: "Our HOA is strict about the lawn. Can you keep up?",
        a: "That's the job — edged, trimmed, blown off, every visit. Tell us your HOA's requirements and we'll match them.",
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
    yardProblem:
      "HOAs with teeth. Plano's deed restrictions are among the strictest in DFW, and an overgrown week can mean a letter. The lawn has to be right every single visit — not most of them.",
    whyUs:
      "We work to a checklist every visit: mow, edge, trim, blow. No skipped steps, no 'we'll get it next time.' Plano is where checklists earn their keep.",
    serviceBlurbs: [
      {
        service: "lawn-mowing",
        blurb:
          "Weekly routes built for HOA streets — the same sharp standard every visit, so the lawn never gives the HOA a reason to write.",
      },
      {
        service: "hedge-trimming",
        blurb:
          "Foundation plantings and privacy hedges shaped 2–4 times a year. Plano's older neighborhoods have mature shrubs that need a careful hand.",
      },
      {
        service: "fertilization-weed-control",
        blurb:
          "Older Plano lawns often have tired, compacted turf. A season of consistent feeding brings most of them back — we'll assess honestly first.",
      },
    ],
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
      {
        q: "Can you work weekdays only? Our street is quiet on weekends.",
        a: "Yes — tell us your preference when you book and we'll schedule around it.",
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
    yardProblem:
      "Growth. New streets, new sod, construction dust settling into everything — Frisco lawns are young and need consistent early care, while the HOAs expect them to look established anyway.",
    whyUs:
      "We know the master-planned drill: the standards, the schedules, the gate codes. Frisco routes run weekly in the growing season with the same checklist every visit.",
    serviceBlurbs: [
      {
        service: "lawn-mowing",
        blurb:
          "Weekly routes through Phillips Creek Ranch, Newman Village, and Frisco Lakes. Young sod, right height, sharp edges — the combination that makes new lawns thrive.",
      },
      {
        service: "yard-cleanup",
        blurb:
          "Construction-phase yards and move-in resets — one flat price to take a dusty, debris-filled new build to finished.",
      },
      {
        service: "mulching",
        blurb:
          "Fresh beds are the fastest way to make a new Frisco build look established. Measured and quoted per yard, installed in a day.",
      },
    ],
    localNotes: [
      "Master-planned HOAs here notice everything. Our crews work to a checklist: mow, edge, trim, blow — same standard, every visit.",
      "Newer Frisco builds sit on clay with fresh sod. The first seasons of care determine the lawn's long-term health.",
      "Phillips Creek Ranch, Newman Village, Frisco Lakes — we know the neighborhoods and their standards.",
    ],
    routeNote: "Frisco runs with Plano and Little Elm — weekly routes in the growing season.",
    faqs: [
      {
        q: "Do you work in master-planned communities with strict HOAs?",
        a: "Yes — that's most of our Frisco work. We maintain to HOA standards every visit, and we'll match any specific community requirements you share with us.",
      },
      {
        q: "How fast can you start?",
        a: "Frisco routes run weekly. Call or send the quote form and we'll tell you the next open slot — no guessing.",
      },
      {
        q: "There's construction dust all over everything. Do you deal with that?",
        a: "Yes — it's part of life in a growing city. We'll keep the lawn, beds, and hard surfaces clear, and a cleanup plus mulch makes a dusty new build look finished.",
      },
    ],
  },
  {
    slug: "mckinney-tx",
    name: "McKinney",
    zips: ["75069", "75070", "75071"],
    areas: ["Stonebridge Ranch", "Craig Ranch", "Adriatica", "Historic Downtown McKinney"],
    intro:
      "McKinney pairs a historic downtown with some of DFW's biggest master-planned communities — Stonebridge Ranch, Craig Ranch — and lawns to match. We run McKinney routes for everything from downtown cottages to HOA-governed acreage.",
    yardProblem:
      "Scale and standards. Master-planned McKinney neighborhoods expect manicured lawns, and the lots are big — half-acre-plus is normal in places like Stonebridge Ranch. Small crews with small mowers can't keep up, and the HOAs notice.",
    whyUs:
      "We bring commercial mowers for the big lots and a checklist for the HOAs. McKinney's mix of downtown cottages and master-planned acreage is exactly the range we work in every week.",
    serviceBlurbs: [
      {
        service: "lawn-mowing",
        blurb:
          "Big-lot mowing priced by actual turf area — from Stonebridge Ranch acreage to downtown cottage yards, same sharp standard.",
      },
      {
        service: "hedge-trimming",
        blurb:
          "Long runs of hedges and foundation plantings around larger homes, shaped properly and cleaned up completely.",
      },
      {
        service: "yard-cleanup",
        blurb:
          "Got an HOA notice? Send it with photos — we'll tell you honestly what it takes to fix and when we can get there.",
      },
    ],
    localNotes: [
      "Stonebridge Ranch and Craig Ranch HOAs keep standards high — our checklist approach (mow, edge, trim, blow) is built for it.",
      "Larger lots are the norm here; we price by actual turf area, confirmed before the first visit.",
      "Historic downtown cottages need a different touch — smaller yards, older trees, careful edging around established beds.",
    ],
    routeNote: "McKinney routes run weekly in the growing season — tell us your neighborhood and we'll fit you in.",
    faqs: [
      {
        q: "Do you handle the big lots in Stonebridge Ranch?",
        a: "Yes — commercial mowers and per-lot pricing. Send your address and we'll confirm one exact price before the first visit.",
      },
      {
        q: "My HOA sent a violation notice. Can you fix it fast?",
        a: "Send us the notice and photos. We'll tell you honestly what it takes and when we can get there — most violation fixes are a single cleanup visit.",
      },
      {
        q: "Do you service the historic downtown area too?",
        a: "Yes — all of McKinney, from downtown cottages to the master-planned communities.",
      },
    ],
  },
  {
    slug: "allen-tx",
    name: "Allen",
    zips: ["75002", "75013"],
    areas: ["Twin Creeks", "Starcreek", "Waterford Parks", "Historic Downtown Allen"],
    intro:
      "Allen's family neighborhoods — Twin Creeks, Starcreek — run on youth sports schedules and HOA standards. We keep Allen lawns sharp on weekly routes that work around your life, not the other way around.",
    yardProblem:
      "Busy family schedules. Allen lawns need weekly care in the growing season, but nobody has time to manage a lawn crew — the crew has to manage itself: show up, do it right, gate closed, gone.",
    whyUs:
      "We're built for customers we never see. Most Allen families are at practice or work when we come — they stay because the yard is right every time and the bill never surprises them.",
    serviceBlurbs: [
      {
        service: "lawn-mowing",
        blurb:
          "Weekly routes that don't need you home. Kids, dogs, gates, trampolines — we work around all of it and close the gate behind us.",
      },
      {
        service: "fertilization-weed-control",
        blurb:
          "Family yards take a beating. A season-long feeding and weed program keeps the turf thick enough to handle cleats, pets, and play.",
      },
      {
        service: "leaf-removal",
        blurb:
          "Established Allen streets drop a lot of leaves. Scheduled fall cleanups so the weekends stay yours.",
      },
    ],
    localNotes: [
      "Family neighborhoods mean kids, pets, and gates — our crews close gates and work around all of it.",
      "HOA standards across Twin Creeks and Starcreek are consistent: edged, trimmed, blown off, every visit.",
      "Newer Allen builds on the east side are classic builder-sod-on-clay — early consistent care matters.",
    ],
    routeNote: "Allen runs with McKinney and Plano — weekly and biweekly slots available.",
    faqs: [
      {
        q: "We have kids and a dog. Is that a problem?",
        a: "Not at all — that's most of our customers. We close gates, work around pets and play equipment, and you never need to be home.",
      },
      {
        q: "Do you service Twin Creeks and Starcreek?",
        a: "Yes — all of Allen, including Twin Creeks, Starcreek, Waterford Parks, and the downtown area.",
      },
      {
        q: "Can you come on a day that works around our schedule?",
        a: "Tell us your preference when you book. You don't need to be home anyway — but we'll still work around what suits you.",
      },
    ],
  },
  {
    slug: "richardson-tx",
    name: "Richardson",
    zips: ["75080", "75081", "75082"],
    areas: ["Canyon Creek", "Breckinridge Park area", "Richardson Heights", "Telecom Corridor"],
    intro:
      "Richardson mixes established neighborhoods like Canyon Creek with the Telecom Corridor's commercial properties. We handle both — residential routes and commercial grounds, one crew, one standard.",
    yardProblem:
      "Aging lawns. Much of Richardson was built in the 70s–90s, and decades of compacted soil and tired St. Augustine need consistent revival — not a one-time miracle, a real routine.",
    whyUs:
      "We do both sides of Richardson: the residential streets with 40-year-old lawns, and the Telecom Corridor commercial properties that need reliable scheduled grounds care.",
    serviceBlurbs: [
      {
        service: "lawn-mowing",
        blurb:
          "Weekly residential routes plus scheduled commercial mowing — one vendor for the office park and the houses around it.",
      },
      {
        service: "fertilization-weed-control",
        blurb:
          "Tired, compacted St. Augustine responds to a season of consistent feeding. We'll assess honestly before you spend anything.",
      },
      {
        service: "hedge-trimming",
        blurb:
          "Decades-old shrubs need shaping, not shearing. We trim to form and clean up completely.",
      },
    ],
    localNotes: [
      "Older St. Augustine lawns respond well to a season of consistent mowing height and feeding — we've brought plenty back.",
      "Telecom Corridor offices need grounds that look intentional — we do commercial routes too.",
      "Established trees mean established shade — we'll be honest about what the grass can do under it.",
    ],
    routeNote: "Richardson routes run weekly — residential and commercial.",
    faqs: [
      {
        q: "Our lawn is 30 years old and tired. Can it be saved?",
        a: "Usually, yes — a season of consistent mowing at the right height plus feeding revives most established lawns. We'll give you an honest assessment with your quote.",
      },
      {
        q: "Do you do commercial properties near the Telecom Corridor?",
        a: "Yes. Mark “Business” on the quote form and tell us about the property — we'll put together a maintenance plan and one exact price.",
      },
      {
        q: "What about the big old shrubs — can they be shaped or do they need replacing?",
        a: "Most can be shaped back with careful trimming at the right time of year. We'll tell you honestly which ones are worth saving.",
      },
    ],
  },
  {
    slug: "arlington-tx",
    name: "Arlington",
    zips: ["76014", "76015", "76016"],
    areas: ["Viridian", "Interlochen", "Entertainment District", "Southwest Arlington"],
    intro:
      "Arlington sits between Dallas and Fort Worth with neighborhoods to match — Viridian's new builds, Interlochen's famous streets, and everything in between. We serve Arlington with the same deal as everywhere else: one exact price up front.",
    yardProblem:
      "Variety. Arlington has 70-year-old neighborhoods and brand-new developments within ten minutes of each other — old shade trees in one, fresh builder sod in the other. The crew has to read each yard, not run one playbook.",
    whyUs:
      "Arlington is our mid-metro stop between Dallas and Fort Worth route days — so the crew is here regularly, not making a special trip you'll pay extra for.",
    serviceBlurbs: [
      {
        service: "lawn-mowing",
        blurb:
          "From Interlochen's established lawns to Viridian's new sod — weekly routes priced by lot, confirmed before the first visit.",
      },
      {
        service: "hedge-trimming",
        blurb:
          "Interlochen's mature landscaping needs regular shaping to stay show-ready. We trim to form and haul every clipping.",
      },
      {
        service: "yard-cleanup",
        blurb:
          "Storm limbs, event aftermath, overgrown rentals — one flat-price visit to reset any Arlington property.",
      },
    ],
    localNotes: [
      "Interlochen's mature landscaping needs regular shaping to stay show-ready — hedges and shrubs are a big ask here.",
      "Viridian and new east-side builds are new-sod-on-clay — early care decides the lawn's future.",
      "Between the stadiums and the lake, Arlington yards take a beating from events and weather — cleanups handle the aftermath.",
    ],
    routeNote: "Arlington is our mid-metro stop between Dallas and Fort Worth route days.",
    faqs: [
      {
        q: "Do you come to Arlington from Denton?",
        a: "Yes — the whole DFW metroplex is our service area. Arlington sits between our Dallas and Fort Worth route days, so scheduling is easy.",
      },
      {
        q: "Can you handle both mowing and hedge shaping?",
        a: "All of it — mowing, hedges, mulch, cleanups, fertilization. One crew, one quote, one standard.",
      },
      {
        q: "Our street goes all-out for the holidays. Can you get the yard show-ready?",
        a: "Yes — a cleanup plus shaping visit gets the landscaping camera-ready. Book ahead of the season and we'll time it right.",
      },
    ],
  },
  {
    slug: "irving-tx",
    name: "Irving",
    zips: ["75038", "75061", "75063"],
    areas: ["Las Colinas", "Valley Ranch", "Hackberry Creek", "Irving Arts District"],
    intro:
      "Irving's Las Colinas and Valley Ranch mix corporate campuses with upscale neighborhoods — and both need grounds that look sharp. We do residential routes and commercial maintenance across Irving.",
    yardProblem:
      "Corporate expectations. Las Colinas doesn't do shaggy — commercial properties and the neighborhoods around them are judged daily. Consistency beats heroics: the grounds just have to be right, every time.",
    whyUs:
      "We run both sides of Irving: scheduled commercial routes for the campuses and offices, and weekly residential routes for Valley Ranch and Hackberry Creek. One company, one standard.",
    serviceBlurbs: [
      {
        service: "lawn-mowing",
        blurb:
          "Scheduled commercial mowing for Las Colinas properties plus weekly residential routes — reliable, documented, no chasing.",
      },
      {
        service: "hedge-trimming",
        blurb:
          "Corporate hedges and residential foundation plantings alike — shaped on schedule, cleaned up completely.",
      },
      {
        service: "mulching",
        blurb:
          "Bed refreshes that make a property entrance look intentional. Measured, quoted per yard installed, done without disrupting tenants.",
      },
    ],
    localNotes: [
      "Las Colinas commercial properties need reliable scheduled service — we run commercial routes.",
      "Valley Ranch HOAs keep residential standards high; our weekly checklist approach fits.",
      "Canal-adjacent and lakeside humidity pushes weeds — consistent edging and bed work keeps them down.",
    ],
    routeNote: "Irving runs on our Dallas-side routes — residential and commercial.",
    faqs: [
      {
        q: "Do you maintain commercial properties in Las Colinas?",
        a: "Yes. Mark “Business” on the quote form and tell us about the property — we'll put together a maintenance plan and one exact price.",
      },
      {
        q: "We need weekday-only service. Is that possible?",
        a: "Yes — tell us when you book and we'll schedule around your building's requirements.",
      },
      {
        q: "Do you service Valley Ranch homes too?",
        a: "Yes — all of Irving, residential and commercial, from Valley Ranch to Hackberry Creek.",
      },
    ],
  },
  {
    slug: "carrollton-tx",
    name: "Carrollton",
    zips: ["75006", "75007", "75010"],
    areas: ["Oak Hills", "Indian Creek", "Carrollton Highlands", "Historic Downtown Carrollton"],
    intro:
      "Carrollton's older neighborhoods — Oak Hills, Indian Creek — have mature trees and established lawns that need steady care, not experiments. We keep Carrollton yards maintained on reliable weekly routes.",
    yardProblem:
      "Mature everything. Big trees, old shrubs, established St. Augustine — Carrollton yards don't need reinventing. They need a crew that shows up and does the basics right, every single time.",
    whyUs:
      "We're a basics-done-right company, which is exactly what established neighborhoods need. No upsell theater — just a sharp yard, every visit.",
    serviceBlurbs: [
      {
        service: "lawn-mowing",
        blurb:
          "Weekly routes for Oak Hills, Indian Creek, and the Highlands. Mature lawns, right height, sharp edges — the unglamorous work done well.",
      },
      {
        service: "hedge-trimming",
        blurb:
          "Twenty-year-old shrubs need a careful hand, not a shearing. We shape overgrown plantings back into form.",
      },
      {
        service: "leaf-removal",
        blurb:
          "Mature trees mean serious fall leaf volume. Scheduled cleanups November through January.",
      },
    ],
    localNotes: [
      "Mature oaks mean shade and leaf pressure — honest shade assessments and fall cleanups.",
      "Older shrubs need shaping, not shearing — we trim to form.",
      "Established neighborhoods value a crew that doesn't need managing — gate closed, bill matches quote.",
    ],
    routeNote: "Carrollton routes run with Lewisville and North Dallas.",
    faqs: [
      {
        q: "Our shrubs are 20 years old and overgrown. Can they be saved?",
        a: "Often, yes — careful reshaping over a season or two brings most established shrubs back. We'll tell you honestly which ones are worth the effort.",
      },
      {
        q: "Do you service Oak Hills and Indian Creek?",
        a: "Yes — all of Carrollton, including Oak Hills, Indian Creek, the Highlands, and downtown.",
      },
      {
        q: "The leaves are out of control every fall. What do you recommend?",
        a: "Two to three scheduled cleanups between November and January, timed to when your trees drop. We'll space them right if you book the season.",
      },
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
