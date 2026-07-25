# Protein sources: density vs. cost

An interactive scatter plot for choosing vegetarian protein sources inside a fixed
calorie budget.

- **Horizontal axis — protein density**, grams of protein per 100 kcal. This is
  "how much of my calorie budget does this protein cost me." Further right is better.
- **Vertical axis — cost**, dollars per gram of protein, on a log scale. Lower is
  better. A toggle switches it to dollars per 100 kcal.

The bottom-right corner is cheap protein that barely touches your calorie budget.

Open `index.html` — no build step, no dependencies, no network calls. It works over
GitHub Pages and equally well by double-clicking the file.

## Why per calorie, and why cost per gram of protein

Per-calorie normalization is the one that matches the actual constraint: if the
calorie budget is roughly fixed, the question about any food is how much protein it
delivers before it fills that budget up.

Cost is deliberately *not* dollars per calorie. That metric rewards cheap calories —
olive oil would score brilliantly — which is backwards for someone trying to add
protein without adding calories. Dollars per gram of protein answers the question you
are actually asking at the shelf. The two are related (`$/g protein = ($/kcal) ÷
(g protein/kcal)`), so the per-calorie view is still one click away.

## Reading it honestly

Two traps the chart will happily walk you into if you only read the axes:

- **Protein quality.** Vital wheat gluten and seitan sit in the best corner of the
  chart and have a DIAAS around 0.25 — wheat protein is severely lysine-limited, so
  your body can use far less of it than the gram count implies. Rice protein has the
  same problem. Hover any point for its DIAAS and limiting amino acid. Below about
  0.75, treat the position as optimistic.
- **What rides along.** Cheddar and peanut butter look reasonable on protein density
  but bring a lot of saturated fat; parmesan's sodium is extreme at any real portion.
  The tooltip and the table carry the full macro breakdown.

## Editing the data

Two files, both plain JavaScript that assign a global. Neither requires touching
`index.html`.

### `data/prices.js` — the file worth maintaining

The seeded prices are **estimates**, not observed prices — plausible US supermarket
figures so the chart works out of the box. Replacing them with numbers off your own
receipts is the highest-value change you can make.

```js
{ id: "tofu-firm", store: "Trader Joe's", date: "2026-08-02",
  package: { grams: 396, price: 2.49 }, unitNote: "" }
```

Record the purchase, not a rate: `package` is the edible grams the price buys and
what you paid. `$/g` and `$/g protein` are derived at render time. Use `unitNote`
whenever `grams` isn't simply the label weight — drained weight for canned beans,
volume-to-mass for milk, dry-to-cooked yield for lentils.

### `data/foods.js` — nutrition

Macros per 100 g, since that is what both labels and package prices reduce to. To add
a food, add an entry here and a matching `id` in `data/prices.js`:

```js
{
  id: "my-food", name: "My food", category: "soy",
  serving: { grams: 85, label: "3 oz (85 g)" },
  per100g: { kcal: 144, protein: 17.3, fat: 8.7, satFat: 1.3,
             carbs: 2.8, fiber: 2.3, sugar: 0.6, sodium: 14 },
  quality: { diaas: 0.87, limiting: null },   // limiting: "lysine" if incomplete
  note: ""
}
```

Categories are `soy`, `legume`, `nut-seed`, `grain`, `dairy`, `egg`, `supplement`,
`packaged`. They drive the filter chips.

The page validates the data on load and reports problems to the browser console —
duplicate ids, prices with no matching food, foods with no price, and macros that
don't reconstruct the stated calorie count within 35%. Open the console after editing.

### A note on the colors

Points are colored by **three** groups (plant foods / dairy & eggs / supplements &
packaged), not by the eight categories. That is a deliberate accessibility
constraint, not an oversight: in a scatter plot any two points can end up adjacent,
so the palette has to survive an all-pairs colorblindness check, and no eight-hue
palette does. The eight categories still exist as filter chips, which don't need to
carry meaning through color. **Don't add a fourth series color** without re-validating.

## Scope

Lacto-ovo vegetarian: no meat, poultry, fish, or gelatin. Collagen peptides are
deliberately excluded — bovine- and marine-derived, so out of scope here even though
they're marketed alongside these products (and they're an incomplete protein anyway).

Nutrition figures come from USDA FoodData Central and manufacturer labels. Brand
items vary; treat them as typical rather than exact.

## Publishing

`index.html` is at the repo root, so GitHub Pages serves it directly. Enable it under
**Settings → Pages**, source: deploy from branch, folder `/ (root)`.
