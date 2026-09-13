# Weekly Meal Plan

A single-page app for picking meals for the week, scheduling them on a
drag-and-drop calendar, and generating a shopping list.

- **Browse Meals** (default view): grid of your meal library. Click a card
  (or its `+`) to add it to this week's plan — the "My Plan" tab shows a
  running count.
- **My Plan**: drag meal cards from "Unscheduled" onto a day of the week
  (or use the dropdown on each card, for touch devices). Ingredients from
  every planned meal are aggregated into a categorized shopping list, with
  a one-click Walmart search link per item and a "Copy list" button.

No build step, no dependencies, no backend — plain HTML/CSS/JS. Data
(your meal library, current plan, and day assignments) is stored in the
browser's `localStorage`.

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
