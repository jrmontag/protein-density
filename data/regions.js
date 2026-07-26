/**
 * Regional price overrides — layered on top of `prices.js`, not synthesized
 * from it.
 *
 * `prices.js` is the "US average" baseline: one seeded estimate per food.
 * Every other region starts as a COPY of that baseline and only departs from
 * it where you've actually recorded a real price — off a receipt, from a
 * store's site, wherever. There is no formula scaling the baseline by
 * region or category: a food you haven't priced in Denver just shows the
 * US-average number, clearly labeled as such, until you add it.
 *
 * This is deliberate. Per-category cost-of-living multipliers sound
 * plausible but mostly just shift a whole category's dots up or down
 * together without changing which foods actually win on $/g protein — and
 * maintaining invented numbers for cities nobody here shops in isn't worth
 * it. A region is only as useful as the receipts behind it.
 *
 * FIELDS (same shape as `prices.js`)
 *   id        must match a food id in foods.js
 *   store     where you actually bought it
 *   date      when you paid that price (ISO)
 *   package   grams — the EDIBLE weight the price buys, and price in USD
 *   unitNote  as in prices.js — how `grams` was arrived at, if not obvious
 *
 * TO ADD A REGION: add an entry to REGIONS, and an (initially empty) array
 * under REGION_PRICES with the same key. Fill it in over time as you shop —
 * nothing else needs to change.
 *
 * TO ADD A PRICE: append an entry to the region's array below. Only foods
 * you've actually priced need an entry; everything else keeps following the
 * US average automatically.
 */

window.REGIONS = [
  { key: "us-avg", label: "US average" },
  { key: "denver", label: "Denver" }
];

window.REGION_PRICES = {
  denver: [
    // { id: "tofu-firm", store: "King Soopers", date: "2026-07-25",
    //   package: { grams: 396, price: 2.99 }, unitNote: "" },
  ]
};
