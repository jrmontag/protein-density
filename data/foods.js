/**
 * Nutrition data — one entry per food.
 *
 * All macros are per 100 g of the food AS PURCHASED / AS EATEN in the state
 * named by `name` (dry vs cooked matters — a dry lentil and a cooked lentil are
 * separate entries where both are useful). Per 100 g is the common base because
 * it is what both nutrition labels and package prices reduce to.
 *
 * Values come from USDA FoodData Central and manufacturer labels. Brand items
 * vary; treat these as typical rather than exact, and correct anything you can
 * read off a package in your own kitchen.
 *
 * Scope is lacto-ovo vegetarian: no meat, poultry, fish, or gelatin. Collagen
 * peptides are deliberately absent — they are bovine- or marine-derived, so they
 * are out of scope here even though they are marketed alongside these products.
 *
 * FIELDS
 *   id        unique slug; must have a matching entry in prices.js
 *   name      display name, including the state (dry / cooked / canned)
 *   category  soy | legume | dairy | egg | nut-seed | grain | supplement | packaged
 *   serving   a realistic portion, for the tooltip
 *   per100g   kcal, protein, fat, satFat, carbs, fiber, sugar (g); sodium (mg)
 *   quality   diaas   Digestible Indispensable Amino Acid Score, or null if unpublished
 *             limiting  the limiting amino acid, or null when the protein is complete
 *   note      optional caveat surfaced in the tooltip
 */

window.FOODS = [
  // ---------------------------------------------------------------- soy ----
  {
    id: "tofu-firm",
    name: "Tofu, firm",
    category: "soy",
    serving: { grams: 85, label: "3 oz (85 g)" },
    per100g: { kcal: 144, protein: 17.3, fat: 8.7, satFat: 1.3, carbs: 2.8, fiber: 2.3, sugar: 0.6, sodium: 14 },
    quality: { diaas: 0.87, limiting: null },
    note: ""
  },
  {
    id: "tofu-extra-firm",
    name: "Tofu, extra-firm",
    category: "soy",
    serving: { grams: 85, label: "3 oz (85 g)" },
    per100g: { kcal: 114, protein: 14.0, fat: 6.5, satFat: 1.0, carbs: 3.0, fiber: 1.5, sugar: 1.0, sodium: 10 },
    quality: { diaas: 0.87, limiting: null },
    note: ""
  },
  {
    id: "tofu-silken",
    name: "Tofu, silken",
    category: "soy",
    serving: { grams: 100, label: "1/3 block (100 g)" },
    per100g: { kcal: 55, protein: 4.8, fat: 2.7, satFat: 0.4, carbs: 2.0, fiber: 0.2, sugar: 1.0, sodium: 4 },
    quality: { diaas: 0.87, limiting: null },
    note: "Much wetter than firm tofu, so protein per gram is low."
  },
  {
    id: "tempeh",
    name: "Tempeh",
    category: "soy",
    serving: { grams: 85, label: "3 oz (85 g)" },
    per100g: { kcal: 192, protein: 20.3, fat: 10.8, satFat: 2.2, carbs: 7.6, fiber: 4.7, sugar: 0.0, sodium: 9 },
    quality: { diaas: 0.75, limiting: null },
    note: ""
  },
  {
    id: "edamame",
    name: "Edamame, shelled, cooked",
    category: "soy",
    serving: { grams: 155, label: "1 cup (155 g)" },
    per100g: { kcal: 121, protein: 11.9, fat: 5.2, satFat: 0.6, carbs: 8.9, fiber: 5.2, sugar: 2.2, sodium: 6 },
    quality: { diaas: 0.85, limiting: null },
    note: ""
  },
  {
    id: "tvp",
    name: "Textured vegetable protein, dry",
    category: "soy",
    serving: { grams: 25, label: "1/4 cup dry (25 g)" },
    per100g: { kcal: 360, protein: 48.0, fat: 0.0, satFat: 0.0, carbs: 28.0, fiber: 16.0, sugar: 8.0, sodium: 8 },
    quality: { diaas: 0.9, limiting: null },
    note: "Rehydrates to roughly 3x its dry weight."
  },
  {
    id: "soy-milk",
    name: "Soy milk, unsweetened",
    category: "soy",
    serving: { grams: 244, label: "1 cup (244 g)" },
    per100g: { kcal: 33, protein: 2.8, fat: 1.8, satFat: 0.2, carbs: 1.2, fiber: 0.4, sugar: 0.5, sodium: 38 },
    quality: { diaas: 0.9, limiting: null },
    note: ""
  },
  {
    id: "soy-curls",
    name: "Soy curls, dry",
    category: "soy",
    serving: { grams: 26, label: "1/3 cup dry (26 g)" },
    per100g: { kcal: 385, protein: 42.0, fat: 15.0, satFat: 2.5, carbs: 27.0, fiber: 15.0, sugar: 6.0, sodium: 15 },
    quality: { diaas: 0.9, limiting: null },
    note: ""
  },

  // ------------------------------------------------------------- legume ----
  {
    id: "lentils-cooked",
    name: "Lentils, cooked",
    category: "legume",
    serving: { grams: 198, label: "1 cup (198 g)" },
    per100g: { kcal: 116, protein: 9.0, fat: 0.4, satFat: 0.1, carbs: 20.1, fiber: 7.9, sugar: 1.8, sodium: 2 },
    quality: { diaas: 0.6, limiting: "methionine" },
    note: ""
  },
  {
    id: "lentils-dry",
    name: "Lentils, dry",
    category: "legume",
    serving: { grams: 50, label: "1/4 cup dry (50 g)" },
    per100g: { kcal: 352, protein: 24.6, fat: 1.1, satFat: 0.2, carbs: 63.4, fiber: 10.7, sugar: 2.0, sodium: 6 },
    quality: { diaas: 0.6, limiting: "methionine" },
    note: "Priced dry; absorbs ~2.5x its weight in water when cooked."
  },
  {
    id: "chickpeas-canned",
    name: "Chickpeas, canned",
    category: "legume",
    serving: { grams: 164, label: "1 cup (164 g)" },
    per100g: { kcal: 139, protein: 7.1, fat: 2.6, satFat: 0.3, carbs: 22.5, fiber: 6.4, sugar: 3.9, sodium: 246 },
    quality: { diaas: 0.83, limiting: "methionine" },
    note: ""
  },
  {
    id: "chickpeas-dry",
    name: "Chickpeas, dry",
    category: "legume",
    serving: { grams: 50, label: "1/4 cup dry (50 g)" },
    per100g: { kcal: 378, protein: 20.5, fat: 6.0, satFat: 0.6, carbs: 63.0, fiber: 12.2, sugar: 10.7, sodium: 24 },
    quality: { diaas: 0.83, limiting: "methionine" },
    note: ""
  },
  {
    id: "black-beans-canned",
    name: "Black beans, canned",
    category: "legume",
    serving: { grams: 170, label: "1 cup (170 g)" },
    per100g: { kcal: 91, protein: 6.0, fat: 0.3, satFat: 0.1, carbs: 16.6, fiber: 6.9, sugar: 0.3, sodium: 265 },
    quality: { diaas: 0.6, limiting: "methionine" },
    note: ""
  },
  {
    id: "kidney-beans-canned",
    name: "Kidney beans, canned",
    category: "legume",
    serving: { grams: 170, label: "1 cup (170 g)" },
    per100g: { kcal: 84, protein: 5.2, fat: 0.3, satFat: 0.1, carbs: 15.1, fiber: 6.2, sugar: 0.5, sodium: 224 },
    quality: { diaas: 0.6, limiting: "methionine" },
    note: ""
  },
  {
    id: "split-peas-dry",
    name: "Split peas, dry",
    category: "legume",
    serving: { grams: 50, label: "1/4 cup dry (50 g)" },
    per100g: { kcal: 341, protein: 24.6, fat: 1.2, satFat: 0.2, carbs: 60.4, fiber: 25.5, sugar: 8.0, sodium: 15 },
    quality: { diaas: 0.65, limiting: "methionine" },
    note: ""
  },
  {
    id: "hummus",
    name: "Hummus",
    category: "legume",
    serving: { grams: 60, label: "1/4 cup (60 g)" },
    per100g: { kcal: 229, protein: 7.4, fat: 17.1, satFat: 2.6, carbs: 14.3, fiber: 6.0, sugar: 0.3, sodium: 379 },
    quality: { diaas: 0.7, limiting: "methionine" },
    note: "Most of the calories are tahini oil, not chickpea."
  },
  {
    id: "chickpea-pasta",
    name: "Chickpea pasta, dry",
    category: "legume",
    serving: { grams: 57, label: "2 oz dry (57 g)" },
    per100g: { kcal: 333, protein: 19.3, fat: 6.1, satFat: 0.9, carbs: 56.0, fiber: 8.8, sugar: 3.5, sodium: 60 },
    quality: { diaas: 0.83, limiting: "methionine" },
    note: ""
  },
  {
    id: "red-lentil-pasta",
    name: "Red lentil pasta, dry",
    category: "legume",
    serving: { grams: 57, label: "2 oz dry (57 g)" },
    per100g: { kcal: 350, protein: 25.0, fat: 1.5, satFat: 0.3, carbs: 60.0, fiber: 11.0, sugar: 2.0, sodium: 15 },
    quality: { diaas: 0.6, limiting: "methionine" },
    note: ""
  },

  // -------------------------------------------------------------- dairy ----
  {
    id: "milk-skim",
    name: "Milk, skim",
    category: "dairy",
    serving: { grams: 244, label: "1 cup (244 g)" },
    per100g: { kcal: 34, protein: 3.4, fat: 0.2, satFat: 0.1, carbs: 5.0, fiber: 0.0, sugar: 5.0, sodium: 42 },
    quality: { diaas: 1.14, limiting: null },
    note: ""
  },
  {
    id: "milk-2pct",
    name: "Milk, 2%",
    category: "dairy",
    serving: { grams: 244, label: "1 cup (244 g)" },
    per100g: { kcal: 50, protein: 3.3, fat: 2.0, satFat: 1.2, carbs: 4.8, fiber: 0.0, sugar: 5.1, sodium: 47 },
    quality: { diaas: 1.14, limiting: null },
    note: ""
  },
  {
    id: "milk-whole",
    name: "Milk, whole",
    category: "dairy",
    serving: { grams: 244, label: "1 cup (244 g)" },
    per100g: { kcal: 61, protein: 3.2, fat: 3.3, satFat: 1.9, carbs: 4.8, fiber: 0.0, sugar: 5.1, sodium: 43 },
    quality: { diaas: 1.14, limiting: null },
    note: ""
  },
  {
    id: "greek-yogurt-0",
    name: "Greek yogurt, 0% fat",
    category: "dairy",
    serving: { grams: 170, label: "3/4 cup (170 g)" },
    per100g: { kcal: 59, protein: 10.3, fat: 0.4, satFat: 0.1, carbs: 3.6, fiber: 0.0, sugar: 3.2, sodium: 36 },
    quality: { diaas: 1.06, limiting: null },
    note: ""
  },
  {
    id: "greek-yogurt-2",
    name: "Greek yogurt, 2% fat",
    category: "dairy",
    serving: { grams: 170, label: "3/4 cup (170 g)" },
    per100g: { kcal: 73, protein: 9.9, fat: 1.9, satFat: 1.2, carbs: 4.0, fiber: 0.0, sugar: 4.0, sodium: 34 },
    quality: { diaas: 1.06, limiting: null },
    note: ""
  },
  {
    id: "greek-yogurt-5",
    name: "Greek yogurt, 5% fat",
    category: "dairy",
    serving: { grams: 170, label: "3/4 cup (170 g)" },
    per100g: { kcal: 97, protein: 9.0, fat: 5.0, satFat: 3.3, carbs: 3.9, fiber: 0.0, sugar: 3.6, sodium: 35 },
    quality: { diaas: 1.06, limiting: null },
    note: ""
  },
  {
    id: "skyr",
    name: "Skyr",
    category: "dairy",
    serving: { grams: 170, label: "3/4 cup (170 g)" },
    per100g: { kcal: 63, protein: 11.0, fat: 0.2, satFat: 0.1, carbs: 4.0, fiber: 0.0, sugar: 3.5, sodium: 45 },
    quality: { diaas: 1.06, limiting: null },
    note: ""
  },
  {
    id: "cottage-cheese-2",
    name: "Cottage cheese, 2%",
    category: "dairy",
    serving: { grams: 226, label: "1 cup (226 g)" },
    per100g: { kcal: 84, protein: 11.0, fat: 2.3, satFat: 1.0, carbs: 4.6, fiber: 0.0, sugar: 4.1, sodium: 330 },
    quality: { diaas: 1.09, limiting: null },
    note: ""
  },
  {
    id: "cottage-cheese-1",
    name: "Cottage cheese, 1%",
    category: "dairy",
    serving: { grams: 226, label: "1 cup (226 g)" },
    per100g: { kcal: 72, protein: 12.4, fat: 1.0, satFat: 0.6, carbs: 2.7, fiber: 0.0, sugar: 2.7, sodium: 406 },
    quality: { diaas: 1.09, limiting: null },
    note: "High sodium relative to its calories."
  },
  {
    id: "kefir",
    name: "Kefir, lowfat",
    category: "dairy",
    serving: { grams: 240, label: "1 cup (240 g)" },
    per100g: { kcal: 41, protein: 3.8, fat: 1.0, satFat: 0.6, carbs: 4.5, fiber: 0.0, sugar: 4.5, sodium: 40 },
    quality: { diaas: 1.06, limiting: null },
    note: ""
  },
  {
    id: "cheddar",
    name: "Cheddar cheese",
    category: "dairy",
    serving: { grams: 28, label: "1 oz (28 g)" },
    per100g: { kcal: 403, protein: 22.9, fat: 33.1, satFat: 18.9, carbs: 3.1, fiber: 0.0, sugar: 0.5, sodium: 653 },
    quality: { diaas: 1.0, limiting: null },
    note: "Very high saturated fat per gram of protein."
  },
  {
    id: "mozzarella",
    name: "Mozzarella, part-skim",
    category: "dairy",
    serving: { grams: 28, label: "1 oz (28 g)" },
    per100g: { kcal: 254, protein: 24.3, fat: 15.9, satFat: 10.1, carbs: 2.8, fiber: 0.0, sugar: 1.2, sodium: 619 },
    quality: { diaas: 1.0, limiting: null },
    note: ""
  },
  {
    id: "parmesan",
    name: "Parmesan cheese",
    category: "dairy",
    serving: { grams: 28, label: "1 oz (28 g)" },
    per100g: { kcal: 392, protein: 35.8, fat: 25.8, satFat: 16.4, carbs: 3.2, fiber: 0.0, sugar: 0.8, sodium: 1529 },
    quality: { diaas: 1.0, limiting: null },
    note: "Dense protein, but the sodium is extreme at any real portion."
  },
  {
    id: "ricotta",
    name: "Ricotta, part-skim",
    category: "dairy",
    serving: { grams: 124, label: "1/2 cup (124 g)" },
    per100g: { kcal: 138, protein: 11.4, fat: 7.9, satFat: 4.9, carbs: 5.1, fiber: 0.0, sugar: 0.3, sodium: 125 },
    quality: { diaas: 1.0, limiting: null },
    note: ""
  },
  {
    id: "string-cheese",
    name: "String cheese",
    category: "dairy",
    serving: { grams: 28, label: "1 stick (28 g)" },
    per100g: { kcal: 300, protein: 24.0, fat: 22.0, satFat: 13.0, carbs: 2.0, fiber: 0.0, sugar: 1.0, sodium: 600 },
    quality: { diaas: 1.0, limiting: null },
    note: ""
  },

  // ---------------------------------------------------------------- egg ----
  {
    id: "eggs-whole",
    name: "Eggs, whole",
    category: "egg",
    serving: { grams: 50, label: "1 large egg (50 g)" },
    per100g: { kcal: 143, protein: 12.6, fat: 9.5, satFat: 3.1, carbs: 0.7, fiber: 0.0, sugar: 0.4, sodium: 142 },
    quality: { diaas: 1.13, limiting: null },
    note: ""
  },
  {
    id: "egg-whites",
    name: "Egg whites, fresh",
    category: "egg",
    serving: { grams: 33, label: "1 large white (33 g)" },
    per100g: { kcal: 52, protein: 10.9, fat: 0.2, satFat: 0.0, carbs: 0.7, fiber: 0.0, sugar: 0.7, sodium: 166 },
    quality: { diaas: 1.1, limiting: null },
    note: "About as protein-dense per calorie as food gets."
  },
  {
    id: "egg-whites-carton",
    name: "Egg whites, carton",
    category: "egg",
    serving: { grams: 46, label: "3 tbsp (46 g)" },
    per100g: { kcal: 48, protein: 10.0, fat: 0.2, satFat: 0.0, carbs: 0.6, fiber: 0.0, sugar: 0.6, sodium: 160 },
    quality: { diaas: 1.1, limiting: null },
    note: ""
  },

  // ----------------------------------------------------------- nut-seed ----
  {
    id: "peanut-butter",
    name: "Peanut butter",
    category: "nut-seed",
    serving: { grams: 32, label: "2 tbsp (32 g)" },
    per100g: { kcal: 588, protein: 25.1, fat: 50.4, satFat: 10.3, carbs: 19.6, fiber: 6.0, sugar: 9.2, sodium: 429 },
    quality: { diaas: 0.43, limiting: "lysine" },
    note: "Reads as high-protein by weight, but it is mostly fat by calories."
  },
  {
    id: "almonds",
    name: "Almonds",
    category: "nut-seed",
    serving: { grams: 28, label: "1 oz (28 g)" },
    per100g: { kcal: 579, protein: 21.2, fat: 49.9, satFat: 3.8, carbs: 21.6, fiber: 12.5, sugar: 4.4, sodium: 1 },
    quality: { diaas: 0.4, limiting: "lysine" },
    note: ""
  },
  {
    id: "almond-butter",
    name: "Almond butter",
    category: "nut-seed",
    serving: { grams: 32, label: "2 tbsp (32 g)" },
    per100g: { kcal: 614, protein: 21.0, fat: 55.5, satFat: 4.2, carbs: 18.8, fiber: 10.3, sugar: 4.4, sodium: 7 },
    quality: { diaas: 0.4, limiting: "lysine" },
    note: ""
  },
  {
    id: "pumpkin-seeds",
    name: "Pumpkin seeds",
    category: "nut-seed",
    serving: { grams: 28, label: "1 oz (28 g)" },
    per100g: { kcal: 559, protein: 30.2, fat: 49.1, satFat: 8.7, carbs: 10.7, fiber: 6.0, sugar: 1.4, sodium: 7 },
    quality: { diaas: 0.5, limiting: "lysine" },
    note: ""
  },
  {
    id: "hemp-hearts",
    name: "Hemp hearts",
    category: "nut-seed",
    serving: { grams: 30, label: "3 tbsp (30 g)" },
    per100g: { kcal: 553, protein: 31.6, fat: 48.8, satFat: 4.6, carbs: 8.7, fiber: 4.0, sugar: 1.5, sodium: 5 },
    quality: { diaas: 0.63, limiting: null },
    note: ""
  },
  {
    id: "chia",
    name: "Chia seeds",
    category: "nut-seed",
    serving: { grams: 28, label: "1 oz (28 g)" },
    per100g: { kcal: 486, protein: 16.5, fat: 30.7, satFat: 3.3, carbs: 42.1, fiber: 34.4, sugar: 0.0, sodium: 16 },
    quality: { diaas: 0.6, limiting: null },
    note: ""
  },
  {
    id: "sunflower-seeds",
    name: "Sunflower seeds",
    category: "nut-seed",
    serving: { grams: 28, label: "1 oz (28 g)" },
    per100g: { kcal: 584, protein: 20.8, fat: 51.5, satFat: 4.5, carbs: 20.0, fiber: 8.6, sugar: 2.6, sodium: 9 },
    quality: { diaas: 0.45, limiting: "lysine" },
    note: ""
  },
  {
    id: "tahini",
    name: "Tahini",
    category: "nut-seed",
    serving: { grams: 30, label: "2 tbsp (30 g)" },
    per100g: { kcal: 595, protein: 17.0, fat: 53.8, satFat: 7.5, carbs: 21.2, fiber: 9.3, sugar: 0.5, sodium: 115 },
    quality: { diaas: 0.4, limiting: "lysine" },
    note: ""
  },

  // -------------------------------------------------------------- grain ----
  {
    id: "oats",
    name: "Rolled oats, dry",
    category: "grain",
    serving: { grams: 40, label: "1/2 cup dry (40 g)" },
    per100g: { kcal: 389, protein: 16.9, fat: 6.9, satFat: 1.2, carbs: 66.3, fiber: 10.6, sugar: 0.0, sodium: 2 },
    quality: { diaas: 0.54, limiting: "lysine" },
    note: ""
  },
  {
    id: "quinoa-cooked",
    name: "Quinoa, cooked",
    category: "grain",
    serving: { grams: 185, label: "1 cup (185 g)" },
    per100g: { kcal: 120, protein: 4.4, fat: 1.9, satFat: 0.2, carbs: 21.3, fiber: 2.8, sugar: 0.9, sodium: 7 },
    quality: { diaas: 0.64, limiting: null },
    note: ""
  },
  {
    id: "whole-wheat-bread",
    name: "Whole wheat bread",
    category: "grain",
    serving: { grams: 43, label: "1 slice (43 g)" },
    per100g: { kcal: 247, protein: 13.0, fat: 3.4, satFat: 0.7, carbs: 41.0, fiber: 7.0, sugar: 4.3, sodium: 450 },
    quality: { diaas: 0.45, limiting: "lysine" },
    note: ""
  },
  {
    id: "high-protein-bread",
    name: "High-protein bread",
    category: "grain",
    serving: { grams: 43, label: "1 slice (43 g)" },
    per100g: { kcal: 260, protein: 16.0, fat: 6.0, satFat: 1.0, carbs: 38.0, fiber: 10.0, sugar: 3.0, sodium: 400 },
    quality: { diaas: 0.45, limiting: "lysine" },
    note: ""
  },
  {
    id: "seitan",
    name: "Seitan, prepared",
    category: "grain",
    serving: { grams: 85, label: "3 oz (85 g)" },
    per100g: { kcal: 141, protein: 24.7, fat: 1.5, satFat: 0.2, carbs: 6.0, fiber: 1.0, sugar: 0.5, sodium: 320 },
    quality: { diaas: 0.25, limiting: "lysine" },
    note: "Looks superb on both axes, but wheat protein is severely lysine-limited. Pair it with legumes rather than leaning on it alone."
  },
  {
    id: "vital-wheat-gluten",
    name: "Vital wheat gluten, dry",
    category: "grain",
    serving: { grams: 30, label: "1/4 cup (30 g)" },
    per100g: { kcal: 370, protein: 75.2, fat: 1.9, satFat: 0.3, carbs: 13.8, fiber: 0.6, sugar: 0.0, sodium: 29 },
    quality: { diaas: 0.25, limiting: "lysine" },
    note: "The most protein-dense item here by a wide margin, and the lowest quality. Read both numbers together."
  },
  {
    id: "whole-wheat-pasta",
    name: "Whole wheat pasta, dry",
    category: "grain",
    serving: { grams: 57, label: "2 oz dry (57 g)" },
    per100g: { kcal: 348, protein: 14.6, fat: 1.4, satFat: 0.3, carbs: 74.7, fiber: 9.0, sugar: 3.0, sodium: 8 },
    quality: { diaas: 0.45, limiting: "lysine" },
    note: ""
  },

  // --------------------------------------------------------- supplement ----
  {
    id: "whey-concentrate",
    name: "Whey protein concentrate",
    category: "supplement",
    serving: { grams: 30, label: "1 scoop (30 g)" },
    per100g: { kcal: 400, protein: 80.0, fat: 5.0, satFat: 3.0, carbs: 8.0, fiber: 0.0, sugar: 4.0, sodium: 300 },
    quality: { diaas: 1.0, limiting: null },
    note: ""
  },
  {
    id: "whey-isolate",
    name: "Whey protein isolate",
    category: "supplement",
    serving: { grams: 30, label: "1 scoop (30 g)" },
    per100g: { kcal: 373, protein: 86.7, fat: 1.7, satFat: 0.7, carbs: 3.3, fiber: 0.0, sugar: 1.7, sodium: 250 },
    quality: { diaas: 1.09, limiting: null },
    note: ""
  },
  {
    id: "casein",
    name: "Casein protein",
    category: "supplement",
    serving: { grams: 33, label: "1 scoop (33 g)" },
    per100g: { kcal: 367, protein: 80.0, fat: 3.3, satFat: 1.7, carbs: 10.0, fiber: 0.0, sugar: 3.3, sodium: 550 },
    quality: { diaas: 1.09, limiting: null },
    note: ""
  },
  {
    id: "pea-protein",
    name: "Pea protein isolate",
    category: "supplement",
    serving: { grams: 30, label: "1 scoop (30 g)" },
    per100g: { kcal: 380, protein: 80.0, fat: 6.7, satFat: 0.7, carbs: 3.3, fiber: 3.3, sugar: 0.0, sodium: 800 },
    quality: { diaas: 0.82, limiting: "methionine" },
    note: ""
  },
  {
    id: "soy-protein-isolate",
    name: "Soy protein isolate",
    category: "supplement",
    serving: { grams: 30, label: "1 scoop (30 g)" },
    per100g: { kcal: 370, protein: 84.0, fat: 4.0, satFat: 0.5, carbs: 4.0, fiber: 2.0, sugar: 0.0, sodium: 1000 },
    quality: { diaas: 0.9, limiting: null },
    note: ""
  },
  {
    id: "rice-protein",
    name: "Rice protein",
    category: "supplement",
    serving: { grams: 30, label: "1 scoop (30 g)" },
    per100g: { kcal: 375, protein: 80.0, fat: 5.0, satFat: 1.0, carbs: 6.0, fiber: 2.0, sugar: 0.0, sodium: 300 },
    quality: { diaas: 0.37, limiting: "lysine" },
    note: "Cheap and dense, but the lowest-quality protein of any supplement here. Blends pair it with pea for a reason."
  },

  // ----------------------------------------------------------- packaged ----
  {
    id: "quest-bar",
    name: "Quest protein bar",
    category: "packaged",
    serving: { grams: 60, label: "1 bar (60 g)" },
    per100g: { kcal: 317, protein: 35.0, fat: 13.3, satFat: 4.2, carbs: 35.0, fiber: 23.3, sugar: 1.7, sodium: 383 },
    quality: { diaas: 1.0, limiting: null },
    note: ""
  },
  {
    id: "rxbar",
    name: "RXBAR",
    category: "packaged",
    serving: { grams: 52, label: "1 bar (52 g)" },
    per100g: { kcal: 404, protein: 23.1, fat: 17.3, satFat: 2.9, carbs: 46.2, fiber: 9.6, sugar: 25.0, sodium: 500 },
    quality: { diaas: 0.9, limiting: null },
    note: "Protein comes from egg white; dates make it high in sugar."
  },
  {
    id: "clif-builders",
    name: "Clif Builders bar",
    category: "packaged",
    serving: { grams: 68, label: "1 bar (68 g)" },
    per100g: { kcal: 426, protein: 29.4, fat: 11.8, satFat: 5.1, carbs: 44.1, fiber: 5.9, sugar: 25.0, sodium: 368 },
    quality: { diaas: 0.9, limiting: null },
    note: ""
  },
  {
    id: "protein-chips",
    name: "Protein chips",
    category: "packaged",
    serving: { grams: 32, label: "1 bag (32 g)" },
    per100g: { kcal: 437, protein: 59.4, fat: 14.1, satFat: 1.6, carbs: 15.6, fiber: 3.1, sugar: 0.0, sodium: 938 },
    quality: { diaas: 1.0, limiting: null },
    note: ""
  },
  {
    id: "core-power",
    name: "Fairlife Core Power shake",
    category: "packaged",
    serving: { grams: 414, label: "1 bottle (414 g)" },
    per100g: { kcal: 41, protein: 6.3, fat: 1.1, satFat: 0.7, carbs: 1.9, fiber: 0.0, sugar: 1.7, sodium: 56 },
    quality: { diaas: 1.09, limiting: null },
    note: ""
  },
  {
    id: "premier-protein",
    name: "Premier Protein shake",
    category: "packaged",
    serving: { grams: 325, label: "1 bottle (325 g)" },
    per100g: { kcal: 49, protein: 9.2, fat: 0.9, satFat: 0.3, carbs: 1.5, fiber: 0.9, sugar: 0.3, sodium: 65 },
    quality: { diaas: 1.05, limiting: null },
    note: ""
  },
  {
    id: "orgain-shake",
    name: "Orgain plant protein shake",
    category: "packaged",
    serving: { grams: 330, label: "1 bottle (330 g)" },
    per100g: { kcal: 76, protein: 4.8, fat: 2.1, satFat: 0.3, carbs: 9.7, fiber: 1.5, sugar: 4.5, sodium: 61 },
    quality: { diaas: 0.75, limiting: null },
    note: ""
  },
  {
    id: "beyond-burger",
    name: "Beyond Burger patty",
    category: "packaged",
    serving: { grams: 113, label: "1 patty (113 g)" },
    per100g: { kcal: 204, protein: 17.7, fat: 12.4, satFat: 4.4, carbs: 6.2, fiber: 1.8, sugar: 0.0, sodium: 345 },
    quality: { diaas: 0.83, limiting: null },
    note: ""
  },
  {
    id: "impossible-burger",
    name: "Impossible Burger patty",
    category: "packaged",
    serving: { grams: 113, label: "1 patty (113 g)" },
    per100g: { kcal: 212, protein: 16.8, fat: 12.4, satFat: 7.1, carbs: 8.0, fiber: 2.7, sugar: 0.9, sodium: 327 },
    quality: { diaas: 0.9, limiting: null },
    note: "Saturated fat is high for a plant product — coconut oil."
  },
  {
    id: "boca-patty",
    name: "Boca original patty",
    category: "packaged",
    serving: { grams: 71, label: "1 patty (71 g)" },
    per100g: { kcal: 99, protein: 18.3, fat: 1.4, satFat: 0.0, carbs: 8.5, fiber: 5.6, sugar: 0.0, sodium: 394 },
    quality: { diaas: 0.9, limiting: null },
    note: ""
  }
];

/**
 * Category metadata.
 *
 * `group` drives color. Only three colors are used because this is a scatter
 * plot: any two points can end up adjacent, so the palette has to survive an
 * all-pairs colorblindness check, and no eight-hue set does. The eight
 * categories still exist — they drive the filter chips, which are ordinary UI
 * and do not need to carry identity through color.
 */
window.CATEGORIES = {
  soy:          { label: "Soy",                 group: "plant" },
  legume:       { label: "Legumes",             group: "plant" },
  "nut-seed":   { label: "Nuts & seeds",        group: "plant" },
  grain:        { label: "Grains",              group: "plant" },
  dairy:        { label: "Dairy",               group: "animal" },
  egg:          { label: "Eggs",                group: "animal" },
  supplement:   { label: "Supplements",         group: "processed" },
  packaged:     { label: "Packaged & bars",     group: "processed" }
};

window.GROUPS = {
  plant:     { label: "Plant foods",             slot: 1 },
  animal:    { label: "Dairy & eggs",            slot: 2 },
  processed: { label: "Supplements & packaged",  slot: 3 }
};
