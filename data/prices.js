/**
 * Price data — one entry per food id in foods.js.
 *
 * ⚠️  THESE ARE ESTIMATES, NOT OBSERVED PRICES.
 *
 * They are plausible mid-2026 US supermarket prices, seeded so the chart is
 * usable on day one. They are not a claim about any particular store, and
 * grocery prices vary enormously by region, chain, and week. The chart is only
 * as honest as this file — replacing these with prices off your own receipts is
 * the single highest-value thing you can do to it.
 *
 * The entry deliberately records the PURCHASE (what you paid for how much)
 * rather than a pre-computed rate, so every number here can be checked against
 * a receipt without doing arithmetic in reverse. The $/g and $/g-protein rates
 * are derived in index.html.
 *
 * FIELDS
 *   id        must match a food id in foods.js
 *   store     where the price is from; "US estimate" marks an unverified seed
 *   date      when the price was observed or estimated (ISO)
 *   package   grams — the EDIBLE weight the price buys, and price in USD
 *   unitNote  how `grams` was arrived at whenever it is not simply the label
 *             weight: drained weights, liquid volume→mass, dry→cooked yield
 *
 * TO UPDATE A PRICE: edit `package` and set `store` and `date`. Nothing else
 * needs to change, and the chart will pick it up on reload.
 */

window.PRICES = [
  // ---------------------------------------------------------------- soy ----
  { id: "tofu-firm",           store: "US estimate", date: "2026-07-25", package: { grams: 396,  price: 2.79 },  unitNote: "" },
  { id: "tofu-extra-firm",     store: "US estimate", date: "2026-07-25", package: { grams: 396,  price: 2.99 },  unitNote: "" },
  { id: "tofu-silken",         store: "US estimate", date: "2026-07-25", package: { grams: 340,  price: 2.49 },  unitNote: "" },
  { id: "tempeh",              store: "US estimate", date: "2026-07-25", package: { grams: 227,  price: 3.79 },  unitNote: "" },
  { id: "edamame",             store: "US estimate", date: "2026-07-25", package: { grams: 396,  price: 3.29 },  unitNote: "Frozen, shelled." },
  { id: "tvp",                 store: "US estimate", date: "2026-07-25", package: { grams: 340,  price: 4.99 },  unitNote: "" },
  { id: "soy-milk",            store: "US estimate", date: "2026-07-25", package: { grams: 1892, price: 3.99 },  unitNote: "Half gallon; 1 gal ≈ 3,785 g." },
  { id: "soy-curls",           store: "US estimate", date: "2026-07-25", package: { grams: 227,  price: 6.99 },  unitNote: "" },

  // ------------------------------------------------------------- legume ----
  { id: "lentils-cooked",      store: "US estimate", date: "2026-07-25", package: { grams: 1090, price: 2.49 },  unitNote: "Cost of a 454 g dry bag; dry lentils yield ~2.4x their weight cooked." },
  { id: "lentils-dry",         store: "US estimate", date: "2026-07-25", package: { grams: 454,  price: 2.49 },  unitNote: "" },
  { id: "chickpeas-canned",    store: "US estimate", date: "2026-07-25", package: { grams: 240,  price: 1.29 },  unitNote: "Drained weight of a 15.5 oz can, not net weight." },
  { id: "chickpeas-dry",       store: "US estimate", date: "2026-07-25", package: { grams: 454,  price: 2.29 },  unitNote: "" },
  { id: "black-beans-canned",  store: "US estimate", date: "2026-07-25", package: { grams: 240,  price: 1.19 },  unitNote: "Drained weight." },
  { id: "kidney-beans-canned", store: "US estimate", date: "2026-07-25", package: { grams: 240,  price: 1.19 },  unitNote: "Drained weight." },
  { id: "split-peas-dry",      store: "US estimate", date: "2026-07-25", package: { grams: 454,  price: 2.19 },  unitNote: "" },
  { id: "hummus",              store: "US estimate", date: "2026-07-25", package: { grams: 283,  price: 4.49 },  unitNote: "" },
  { id: "chickpea-pasta",      store: "US estimate", date: "2026-07-25", package: { grams: 227,  price: 3.99 },  unitNote: "" },
  { id: "red-lentil-pasta",    store: "US estimate", date: "2026-07-25", package: { grams: 227,  price: 3.49 },  unitNote: "" },

  // -------------------------------------------------------------- dairy ----
  { id: "milk-skim",           store: "US estimate", date: "2026-07-25", package: { grams: 3785, price: 4.29 },  unitNote: "1 gallon ≈ 3,785 g." },
  { id: "milk-2pct",           store: "US estimate", date: "2026-07-25", package: { grams: 3785, price: 4.39 },  unitNote: "1 gallon ≈ 3,785 g." },
  { id: "milk-whole",          store: "US estimate", date: "2026-07-25", package: { grams: 3785, price: 4.49 },  unitNote: "1 gallon ≈ 3,785 g." },
  { id: "greek-yogurt-0",      store: "US estimate", date: "2026-07-25", package: { grams: 907,  price: 6.49 },  unitNote: "32 oz tub." },
  { id: "greek-yogurt-2",      store: "US estimate", date: "2026-07-25", package: { grams: 907,  price: 6.79 },  unitNote: "32 oz tub." },
  { id: "greek-yogurt-5",      store: "US estimate", date: "2026-07-25", package: { grams: 907,  price: 7.29 },  unitNote: "32 oz tub." },
  { id: "skyr",                store: "US estimate", date: "2026-07-25", package: { grams: 680,  price: 6.99 },  unitNote: "24 oz tub." },
  { id: "cottage-cheese-2",    store: "US estimate", date: "2026-07-25", package: { grams: 680,  price: 4.29 },  unitNote: "24 oz tub." },
  { id: "cottage-cheese-1",    store: "US estimate", date: "2026-07-25", package: { grams: 680,  price: 4.19 },  unitNote: "24 oz tub." },
  { id: "kefir",               store: "US estimate", date: "2026-07-25", package: { grams: 946,  price: 4.99 },  unitNote: "1 quart ≈ 946 g." },
  { id: "cheddar",             store: "US estimate", date: "2026-07-25", package: { grams: 227,  price: 4.49 },  unitNote: "8 oz block." },
  { id: "mozzarella",          store: "US estimate", date: "2026-07-25", package: { grams: 227,  price: 3.99 },  unitNote: "8 oz block." },
  { id: "parmesan",            store: "US estimate", date: "2026-07-25", package: { grams: 170,  price: 7.99 },  unitNote: "6 oz wedge." },
  { id: "ricotta",             store: "US estimate", date: "2026-07-25", package: { grams: 425,  price: 4.29 },  unitNote: "15 oz tub." },
  { id: "string-cheese",       store: "US estimate", date: "2026-07-25", package: { grams: 336,  price: 5.49 },  unitNote: "12-stick pack." },

  // ---------------------------------------------------------------- egg ----
  { id: "eggs-whole",          store: "US estimate", date: "2026-07-25", package: { grams: 600,  price: 3.99 },  unitNote: "Dozen large; ~50 g edible egg each, shell excluded." },
  { id: "egg-whites",          store: "US estimate", date: "2026-07-25", package: { grams: 396,  price: 3.99 },  unitNote: "Whites separated from a dozen large eggs (~33 g each). You pay for the whole egg and discard the yolk, so this is the true cost of the whites." },
  { id: "egg-whites-carton",   store: "US estimate", date: "2026-07-25", package: { grams: 946,  price: 5.99 },  unitNote: "32 oz carton." },

  // ----------------------------------------------------------- nut-seed ----
  { id: "peanut-butter",       store: "US estimate", date: "2026-07-25", package: { grams: 454,  price: 3.49 },  unitNote: "" },
  { id: "almonds",             store: "US estimate", date: "2026-07-25", package: { grams: 454,  price: 6.99 },  unitNote: "" },
  { id: "almond-butter",       store: "US estimate", date: "2026-07-25", package: { grams: 454,  price: 8.99 },  unitNote: "" },
  { id: "pumpkin-seeds",       store: "US estimate", date: "2026-07-25", package: { grams: 340,  price: 6.49 },  unitNote: "" },
  { id: "hemp-hearts",         store: "US estimate", date: "2026-07-25", package: { grams: 454,  price: 12.99 }, unitNote: "" },
  { id: "chia",                store: "US estimate", date: "2026-07-25", package: { grams: 454,  price: 6.49 },  unitNote: "" },
  { id: "sunflower-seeds",     store: "US estimate", date: "2026-07-25", package: { grams: 454,  price: 3.99 },  unitNote: "" },
  { id: "tahini",              store: "US estimate", date: "2026-07-25", package: { grams: 454,  price: 7.99 },  unitNote: "" },

  // -------------------------------------------------------------- grain ----
  { id: "oats",                store: "US estimate", date: "2026-07-25", package: { grams: 1130, price: 4.49 },  unitNote: "40 oz canister." },
  { id: "quinoa-cooked",       store: "US estimate", date: "2026-07-25", package: { grams: 1362, price: 4.99 },  unitNote: "Cost of a 454 g dry bag; quinoa yields ~3x its dry weight cooked." },
  { id: "whole-wheat-bread",   store: "US estimate", date: "2026-07-25", package: { grams: 680,  price: 3.49 },  unitNote: "24 oz loaf." },
  { id: "high-protein-bread",  store: "US estimate", date: "2026-07-25", package: { grams: 765,  price: 5.99 },  unitNote: "27 oz loaf." },
  { id: "seitan",              store: "US estimate", date: "2026-07-25", package: { grams: 227,  price: 4.99 },  unitNote: "Prepared, refrigerated." },
  { id: "vital-wheat-gluten",  store: "US estimate", date: "2026-07-25", package: { grams: 624,  price: 7.49 },  unitNote: "22 oz bag." },
  { id: "whole-wheat-pasta",   store: "US estimate", date: "2026-07-25", package: { grams: 454,  price: 2.29 },  unitNote: "" },

  // --------------------------------------------------------- supplement ----
  { id: "whey-concentrate",    store: "US estimate", date: "2026-07-25", package: { grams: 2270, price: 54.99 }, unitNote: "5 lb tub." },
  { id: "whey-isolate",        store: "US estimate", date: "2026-07-25", package: { grams: 1360, price: 54.99 }, unitNote: "3 lb tub." },
  { id: "casein",              store: "US estimate", date: "2026-07-25", package: { grams: 1810, price: 59.99 }, unitNote: "4 lb tub." },
  { id: "pea-protein",         store: "US estimate", date: "2026-07-25", package: { grams: 907,  price: 24.99 }, unitNote: "2 lb bag." },
  { id: "soy-protein-isolate", store: "US estimate", date: "2026-07-25", package: { grams: 907,  price: 19.99 }, unitNote: "2 lb bag." },
  { id: "rice-protein",        store: "US estimate", date: "2026-07-25", package: { grams: 907,  price: 22.99 }, unitNote: "2 lb bag." },

  // ----------------------------------------------------------- packaged ----
  { id: "quest-bar",           store: "US estimate", date: "2026-07-25", package: { grams: 720,  price: 27.99 }, unitNote: "12-bar box (60 g each)." },
  { id: "rxbar",               store: "US estimate", date: "2026-07-25", package: { grams: 624,  price: 23.99 }, unitNote: "12-bar box (52 g each)." },
  { id: "clif-builders",       store: "US estimate", date: "2026-07-25", package: { grams: 816,  price: 21.99 }, unitNote: "12-bar box (68 g each)." },
  { id: "protein-chips",       store: "US estimate", date: "2026-07-25", package: { grams: 256,  price: 17.99 }, unitNote: "8-bag box (32 g each)." },
  { id: "core-power",          store: "US estimate", date: "2026-07-25", package: { grams: 4968, price: 32.99 }, unitNote: "12-pack of 14 fl oz bottles (~414 g each)." },
  { id: "premier-protein",     store: "US estimate", date: "2026-07-25", package: { grams: 3900, price: 25.99 }, unitNote: "12-pack of 11 fl oz bottles (~325 g each)." },
  { id: "orgain-shake",        store: "US estimate", date: "2026-07-25", package: { grams: 3960, price: 32.99 }, unitNote: "12-pack of 11 fl oz bottles (~330 g each)." },
  { id: "beyond-burger",       store: "US estimate", date: "2026-07-25", package: { grams: 226,  price: 5.99 },  unitNote: "2-patty pack." },
  { id: "impossible-burger",   store: "US estimate", date: "2026-07-25", package: { grams: 226,  price: 5.99 },  unitNote: "2-patty pack." },
  { id: "boca-patty",          store: "US estimate", date: "2026-07-25", package: { grams: 284,  price: 4.29 },  unitNote: "4-patty box." }
];
