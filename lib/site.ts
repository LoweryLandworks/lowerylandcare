export const SITE = {
  name: "Lowery Landworks",
  legalName: "Lowery Landworks",
  domain: "https://loweryslandscape.com",
  phoneDisplay: "(469) 301-1977",
  phoneTel: "+14693011977",
  // Public business email — shown in footer and contact sections.
  email: "LoweryLandworks@gmail.com",
  areaLabel: "the DFW Metroplex, Texas",
  /** Core service towns + DFW hubs — each gets a /locations/[city] page. */
  cities: [
    "Denton",
    "Lewisville",
    "Flower Mound",
    "Corinth",
    "Highland Village",
    "Argyle",
    "Aubrey",
    "Little Elm",
    "Dallas",
    "Fort Worth",
    "Plano",
    "Frisco",
  ],
  /**
   * Referral program config.
   * OFF by default — do not enable or publish credit amounts until the
   * owner approves the exact terms (credit value, both-sides vs one-side).
   */
  referral: {
    enabled: false,
    referrerCredit: "",
    friendCredit: "",
    terms: "",
  },
} as const;
