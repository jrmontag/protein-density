# Price data methodology (2026-07-26 refresh)

This replaces the seeded placeholder prices in `prices.js` with estimates
built from real, current sources instead of invented numbers. It covers all
67 line items across all 8 categories (soy, legume, dairy, egg, nut-seed,
grain, supplement, packaged).

## Sources, by tier

**1. Government price series (highest confidence, used for staple dairy/egg/bread anchors)**
- BLS CPI Average Price Data ("U.S. city average"), accessed via basketreport.com,
  which cites the specific BLS series IDs (e.g. `APU0000709112` for whole milk,
  `APU0000708111` for eggs, `APU0000710212` for cheddar, `APU0000FJ4101` for yogurt).
  Values are current as of May–June 2026.
- USDA ERS Food Price Outlook (July 2026 release) for category-level context
  (egg prices down ~44–52% YoY after the 2025 avian-flu spike; beef up double
  digits; dairy roughly flat).

**2. Direct retailer prices (high confidence, used for most branded/packaged goods)**
- Live Walmart.com product pages and category listings for ~30 items where
  both a store brand (Great Value) and one or more name brands were visible
  side by side — canned/dry legumes, tofu, Greek yogurt, cottage cheese,
  mozzarella/parmesan/ricotta/string cheese, kefir, protein bars, protein
  shakes, plant-based burgers, whey/casein protein tubs.
- One Target listing (Siggi's skyr, the effectively single national brand for
  that product).

**3. Calibrated inference (flagged Medium/Low confidence — no direct current
price point found for these specific SKUs in this session)**
- Niche items with thin public price-tracking: tempeh, soy curls, TVP,
  vital wheat gluten, seitan, tahini, hemp hearts, and a handful of others.
  These were priced by pattern-matching against the store-brand/name-brand
  spread observed everywhere else in the dataset, not invented from nothing.

## Confidence levels

`prices_sourcing.csv` (alongside this file) tags every one of the 67 items
High / Medium / Low and gives a one-line source note per item:

- **High** (37 items): anchored to a live BLS series or a directly-observed
  2026 retail price for this exact or near-exact package size.
- **Medium** (27 items): a solid category anchor exists (a dominant brand's
  typical price range) but I did not pull today's exact listing for this
  specific pack size.
- **Low** (3 items): thin market — tahini, soy curls, and a couple of other
  specialty items where pricing is inferred mostly from general category
  knowledge rather than a source pulled this session.

## What changed most from the original seed data

- **Eggs dropped from $3.99 → $2.99/doz.** The seed data's price looks like
  it was set during (or shortly after) the 2025 avian-flu price spike; BLS
  shows large-grade-A eggs at $2.14–2.19/doz as of May–June 2026, down
  43–52% YoY. I set the final number a bit above the bare commodity figure
  to reflect that a real chunk of shoppers buy cage-free/brown eggs, which
  still run $3.50+.
- **Cheese/dairy tubs mostly came down** (mozzarella $3.99→$2.99, ricotta
  $4.29→$3.49, string cheese $5.49→$4.29, parmesan $7.99→$5.49) — the
  original numbers were closer to name-brand-only pricing; blending in the
  store-brand option (which a large share of shoppers actually buy) pulls
  the average down.
- **High-protein bread went up** ($5.99→$6.99) — Dave's Killer Bread, a
  realistic anchor for this category, runs to about $7.60 once scaled to
  the 27 oz package size already used in the dataset.
- Legumes, tofu, protein powders, and protein bars were already close to
  observed real prices and needed only small adjustments.

## Caveats

- These are still estimates, not receipts — the file's own header comment
  says as much, and that's still true here. What's changed is that every
  number now traces to a cited source or a clearly labeled inference, not
  an unlabeled guess.
- Prices are volatile in a few categories right now (eggs, beef, coffee,
  cheddar) per the July 2026 USDA outlook — treat this as a mid-2026
  snapshot, not a permanently stable baseline.
