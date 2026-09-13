# Weekly Meal Plan — project notes

Static HTML/CSS/JS meal planner (no build step, no backend). See README.md
for the feature overview and Vercel deploy instructions.

## Adding a new recipe to the meal library

The meal library lives in `DEFAULT_MEALS` in `app.js` (each entry is
`{name, ingredients: [...], shellfish?: true}`). When asked to add a new
recipe there — or to review one a user adds through the in-app "Add a new
meal" form — apply these household rules:

- **Include a carb, a vegetable, and a protein** among the ingredients.
  Flag it if a new recipe is missing one of these (e.g. a protein-only
  dish with no veg or starch side).
- **No shellfish.** If a recipe contains shrimp, crab, lobster, scallops,
  etc., set `shellfish: true` on it so it's flagged in the UI — don't add
  it silently, and check whether shellfish is a hard exclusion or just
  needs the tag before including it.
- **Keep the week varied.** Avoid adding a recipe that's a near-duplicate
  of one already in the library (same core protein + starch + prep), and
  when suggesting meals for a given week, don't repeat a main ingredient
  or cuisine too many times.

## Meal icons

Each meal renders a small illustration from `images/meals/*.svg` (flat,
on-brand icons — no photos, no external network calls). `MEAL_META` in
`app.js` maps a meal's exact `name` to one of the icon categories in
`ICON_CATEGORIES`. When adding a new meal:

- Prefer reusing an existing icon category if the dish fits one (e.g. a
  new pasta dish → `"pasta"`).
- If none fit well, either add a `MEAL_META` entry pointing at the
  closest existing category, or extend `guessIconCategory()`'s keyword
  rules so meals with similar names/ingredients auto-match going forward.
- Only create a brand-new SVG under `images/meals/` for a genuinely new
  dish category, matching the existing icons' style (plate + shadow
  base, flat shapes, the app's warm palette — see the `:root` variables
  in `styles.css`).
