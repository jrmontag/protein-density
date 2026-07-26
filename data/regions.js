/**
 * Regional price data — layered on top of `prices.js`, not a replacement for it.
 *
 * `prices.js` remains the "US average" baseline: one blended estimate per food,
 * sampled across metro and rural supermarkets nationwide. Every other region is
 * DERIVED from that baseline at render time (see `buildRegionRows` in
 * index.html), not hand-priced item by item — 58 foods times a growing list of
 * metros makes hand-pricing every cell both unmaintainable and less honest than
 * it looks. Instead each region carries:
 *
 *   - a per-category multiplier, researched from regional grocery cost
 *     differentials (BLS regional CPI food-at-home series, Numbeo's Groceries
 *     Index, and the C2ER/MERIC cost-of-living groceries component), applied to
 *     the baseline package price; and
 *   - a small number of item-level overrides where a specific, better-grounded
 *     number was available (e.g. reported dozen-egg prices), or where a food's
 *     regional supply chain is genuinely different (Impossible and Beyond are
 *     both California-headquartered, which narrows their Bay Area markup).
 *
 * TO ADD A METRO: add an entry to REGIONS, a full 8-category table to
 * REGION_CATEGORY_MULTIPLIER (soy, legume, "nut-seed", grain, dairy, egg,
 * supplement, packaged), and optionally a few REGION_ITEM_OVERRIDES. Nothing
 * else needs to change — the selector, the chart, and the table all pick new
 * regions up automatically.
 */

window.REGIONS = [
  {
    key: "us-avg",
    label: "US average",
    store: "US average",
    date: "2026-07-25",
    blurb: "A blended sample across metro and rural US supermarkets.",
    methodNote: "The baseline estimate: a blend of metro and rural supermarket prices nationwide."
  },
  {
    key: "denver",
    label: "Denver",
    store: "King Soopers & Safeway (Denver)",
    date: "2026-07-25",
    blurb: "King Soopers and Safeway prices around the Denver metro.",
    methodNote: "Denver runs close to the US average overall — mildly above it on fresh dairy, mildly below on eggs, per recent regional reporting."
  },
  {
    key: "nyc",
    label: "New York City",
    store: "Whole Foods & Key Food (NYC)",
    date: "2026-07-25",
    blurb: "Whole Foods and Key Food prices across the five boroughs.",
    methodNote: "NYC carries one of the country's highest grocery premiums, heaviest on fresh dairy and eggs, lighter on mail-order supplements."
  },
  {
    key: "sf",
    label: "San Francisco",
    store: "Trader Joe's & Safeway (SF Bay Area)",
    date: "2026-07-25",
    blurb: "Trader Joe's and Safeway prices around the Bay Area.",
    methodNote: "The Bay Area's overall cost of living is the country's highest, but California's own nut and produce farms soften the premium on nuts and seeds specifically."
  }
];

// Per-category multiplier applied to the US-average package price. 1.00 = parity.
window.REGION_CATEGORY_MULTIPLIER = {
  denver: {
    soy: 1.02, legume: 1.02, "nut-seed": 1.03, grain: 1.02,
    dairy: 1.04, egg: 0.97, supplement: 1.00, packaged: 1.02
  },
  nyc: {
    soy: 1.18, legume: 1.16, "nut-seed": 1.15, grain: 1.14,
    dairy: 1.30, egg: 1.18, supplement: 1.08, packaged: 1.16
  },
  sf: {
    soy: 1.15, legume: 1.14, "nut-seed": 1.06, grain: 1.13,
    dairy: 1.27, egg: 1.14, supplement: 1.10, packaged: 1.15
  }
};

// Item-level overrides: either a direct `price` (replaces the category
// multiplier entirely) or a `multiplier` (replaces just this item's factor).
// `note` is appended to that item's unitNote for the region, so the tooltip
// explains the deviation rather than leaving it looking arbitrary.
window.REGION_ITEM_OVERRIDES = {
  denver: {
    "eggs-whole": { price: 4.29, note: "Denver-market dozen-egg price, mid-2026." }
  },
  nyc: {
    "eggs-whole": { price: 5.23, note: "Brooklyn-market dozen-egg price, mid-2026." }
  },
  sf: {
    "eggs-whole": { price: 5.79, note: "California's cage-free (Prop 12) mandate keeps Bay Area egg prices among the nation's highest." },
    "impossible-burger": { multiplier: 1.02, note: "Impossible Foods is Bay Area-headquartered; local distribution narrows the regional markup." },
    "beyond-burger": { multiplier: 1.08, note: "Beyond Meat is California-based, softening the regional markup somewhat." }
  }
};
