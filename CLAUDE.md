# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React web app that debunks common myths taught in schools, with personalized filtering based on birth year. Deployed to GitHub Pages at `/school-myths/`. All content is static (no backend/database).

## Commands

All commands run from `school-myths-app/`:

```bash
cd school-myths-app
npm install              # Install dependencies
npm run dev              # Start dev server (Vite with HMR)
npm run build            # Production build to dist/
npm run lint             # ESLint
npm run validate-urls    # Check all reference URLs return 200-399
npm run preview          # Preview production build locally
npm run deploy           # Build + deploy to GitHub Pages
```

There are no unit tests. Validation is: lint + build + URL validation + manual testing via `npm run dev`.

## Architecture

- **App.jsx** — Root component. Manages state (selectedCategory, birthYear, showPersonalOnly, theme). Contains `wasLikelyTaught()` which matches a myth's teaching period against the user's school years (ages 5-18).
- **MythCard.jsx** — Presentational component for individual myths. Expandable details, category badge, personal badge.
- **data/myths.js** — Single source of truth for all myth content. Array of objects with: `id`, `category`, `myth`, `fact`, `details`, `taughtDuring: {start, end}`, `references: [{title, source, url}]`. Categories are also exported from this file.
- **scripts/validate-urls.js** — Node.js script that checks every reference URL (10s timeout per request).
- **App.css** — All styling. CSS variables for theming (light/dark/system). Responsive with flexbox/grid.

## Critical Rules

- **URL verification is mandatory.** Never add reference URLs without verifying they work. Run `npm run validate-urls` after any content changes. See CONTRIBUTING.md for source standards.
- **Minimum 2 credible sources per myth.** Prefer government agencies, academic institutions, and major science publications. No paywalled or unverified URLs.
- **Don't change `base: '/school-myths/'`** in vite.config.js — it's required for GitHub Pages routing.
- **Don't modify the myth object structure** without updating MythCard.jsx accordingly.
- **Don't add categories** without updating the categories array export in myths.js.
- **Test both light and dark themes** when making styling changes.
