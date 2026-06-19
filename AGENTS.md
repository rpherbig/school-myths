# Project: School Myths Debunked

## What this is
A live, static React + Vite web app that debunks myths commonly taught in schools, with
birth-year personalization so users see the myths they were likely taught (school ages 5–18).
All content is static — no backend, no database. Deployed to GitHub Pages at `/school-myths/`.
Current phase: **established and maintaining**; near-term goal is **growth/promotion**. Day-to-day
work is **mostly content** (adding/maintaining myths and their sources); features are demand-driven.

## Commands
Run all from `school-myths-app/`. Prerequisite: `npm install`.
- Build:         `npm run build`          (verified ✓)
- Lint:          `npm run lint`           (verified ✓)
- Run (dev):     `npm run dev`            (Vite dev server with HMR)
- Preview build: `npm run preview`
- Validate URLs: `npm run validate-urls`  (checks every reference URL; **currently failing — see Open questions**)
- Deploy:        `npm run deploy`         (build + push to gh-pages — only run when asked)

There are no unit tests. Validation = lint + build + validate-urls + manual testing via `npm run dev`
(check responsive sizes and dark/light themes for any styling change).

## Repo map
- `school-myths-app/` — the app (all npm commands run here)
  - `src/App.jsx` — root component; state (category, birthYear, showPersonalOnly, theme); `wasLikelyTaught()`
  - `src/components/MythCard.jsx` — presentational card for one myth (must track the myth object shape)
  - `src/data/myths.js` — **single source of truth for all content**; also exports the categories array
  - `src/App.css` — all styling; CSS variables for light/dark/system theming
  - `scripts/validate-urls.js` — reference-URL checker (10s timeout per request)
  - `vite.config.js` — build config; `base: '/school-myths/'` is required for GitHub Pages
- `CONTRIBUTING.md` (root) — the detailed sourcing standard
- `docs/` — companion docs (glossary, enforcement checklist, growing-the-kit, first-two-weeks)

## Where to look (routing)
- Adding/editing a myth or its sources → `CONTRIBUTING.md` (sourcing rules) + `src/data/myths.js` (examples)
- Domain terms & content-model rules → `docs/glossary.md`
- What must be enforced by tooling (not instructions) → `docs/enforcement-checklist.md`
- How to extend these files / human-process bars → `docs/growing-the-kit.md`

## Decision rights (v0 floor — revise at a retro)
Stop and ask before:
- committing or pushing (stage changes and show the diff for review — never commit/push on your own)
- changing `base: '/school-myths/'` in `vite.config.js`
- changing the myth object structure (`{ id, category, myth, fact, details, taughtDuring, references }`)
- adding a category
- deploying
- deleting content

Proceed without asking when the change is reversible, confined to the current task's files, and the
diff will be reviewed.

## How to work in this repo
- **Content/sourcing rules that gate every content change** (the conventions that matter here):
  - Every reference URL must be **verified by you** (actually fetch it) before adding it.
  - **Minimum 2 credible sources** per myth; prefer government/academic/major science publications.
  - **No Wikipedia as a primary source** (acceptable as secondary). **No paywalled URLs.**
  - **`taughtDuring: {start, end}` is mandatory** — omitting it silently breaks personalization.
  - Adding a category requires updating the exported categories array in `myths.js`.
  - Changing the myth object shape requires updating `MythCard.jsx`.
  - Myth `id`s are sequential.
- Preserve dark/light theme support and mobile responsiveness; no fixed widths that break mobile.
- Changesets: keep changes small and reviewable.
- Done means: `lint` + `build` + `validate-urls` all pass **and** the diff has been reviewed by a human.
- Keep this current: when a command or rule here changes, update `AGENTS.md` in the same change so the
  context files stop drifting.
- Stack note: React 19 + Vite 8 are both recent — if you find yourself emitting React 18 patterns or
  stale Vite config, fetch current docs rather than trusting memory.

## Guardrails (mirror — not the enforcement)
The source of truth for what's actually enforced is `docs/enforcement-checklist.md`. This is a reminder:
- `dist/` is never committed — enforced by `school-myths-app/.gitignore`.
- Reference-URL validity is meant to be guaranteed by a CI run of `validate-urls` (see checklist — TODO).

## Open questions
- `npm run validate-urls` currently **fails**. At least one link is genuinely broken
  (Rosa Parks → archives.gov returns 404); several others return 403 to the script but work in a
  browser (Britannica, JHU Press, genome.gov, Mount Vernon — bot-blocking, likely false positives).
  Fix the real break and decide how to handle 403 false positives before relying on this as a gate.
- Search / additional growth features are not built — add only if traffic justifies them.
- When you hit one of these, ask or propose an option — don't assume.
