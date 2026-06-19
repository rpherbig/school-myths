# Glossary & content-model rules

The "domain" here is the content model and sourcing rules. Routed from `AGENTS.md`.

## Terms
- **Myth** — the core content object: `{ id, category, myth, fact, details, taughtDuring, references }`. Lives in `src/data/myths.js`.
- **`taughtDuring: {start, end}`** — the year range a myth was commonly taught; drives personalization. Mandatory.
- **`wasLikelyTaught()`** — logic in `App.jsx` that matches a myth's teaching period against the user's school years (**ages 5–18**, derived from birth year).
- **Personal / "likely taught" myth** — one whose teaching period overlaps the user's school era; gets the green border/badge.
- **Category** — subject grouping (Biology, Physics, History, Astronomy, Geography), exported from `myths.js`.
- **Reference** — `{ title, source, url }`; minimum 2 credible, verified sources per myth.

## Rules that are easy to get subtly wrong
- References: **2+ credible sources**, **no Wikipedia as primary**, **no paywalled URLs**, every URL **verified** (actually fetched) before adding. See `CONTRIBUTING.md` for the full standard.
- **`taughtDuring` is mandatory** — omitting it silently breaks personal filtering (no error, just wrong behavior).
- **Adding a category** requires updating the exported categories array in `myths.js`, or filtering breaks.
- **Changing the myth object shape** requires updating `MythCard.jsx` to match.
- Myth `id`s are **sequential**.

<!-- add new terms and rules here -->
