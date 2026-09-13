# Weekly Meal Plan

A single-page app for picking meals for the week, scheduling them on a
drag-and-drop calendar, and generating a shopping list.

- **Browse Meals** (default view): grid of your meal library, each with a
  small local icon illustration (`images/meals/*.svg` — no external image
  requests). Click a card (or its `+`) to add it to this week's plan — the
  "My Plan" tab shows a running count and a one-click "Clear plan".
- **My Plan**: a vertical Sunday–Saturday schedule. Drag meal cards from
  "Unscheduled" onto a day (or use the dropdown on each card, for touch
  devices). A day with no meal can just get a text note instead — "eating
  out," "soccer game," etc. "Copy plan as image" renders the week to a
  shareable PNG (copied to your clipboard, or downloaded as a fallback) so
  you can send it to family. Ingredients from every planned meal are
  aggregated into a categorized shopping list, with a one-click Walmart
  search link per item and a "Copy list" button.

No build step, no dependencies, no backend — plain HTML/CSS/JS. Data
(your meal library, current plan, day assignments, and day notes) is
stored entirely in the browser's `localStorage` — no login or account.

See `CLAUDE.md` for the household rules (carb/veg/protein, no shellfish,
keep the week varied) applied when adding new recipes to the library.

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```sh
npx serve .
```

## Deploy to Vercel

This is a static site, so no build configuration is required.

```sh
npm i -g vercel
vercel
```

Or connect the repo in the Vercel dashboard and deploy with the default
"Other" framework preset — it will serve `index.html` as-is.
