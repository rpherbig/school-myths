---
name: add-a-myth
description: Use when adding a new myth (or fixing its sources) to src/data/myths.js — research, verify-every-source, validate workflow.
---

# Add a myth

(Disposable v0 illustration — replace with your team's real flow once you've added a few.)

Conventions, decision rights, and the content model live in `AGENTS.md`, `docs/glossary.md`, and
`CONTRIBUTING.md`. This skill is just the order of operations and the teeth — don't restate those docs.

1. **The human supplies the myth and acceptance.** Don't invent which misconception to debunk or
   declare the fact — get the myth, the correction, and the rough teaching era from a person. Research
   *supports* their claim; it doesn't originate it.
2. **Verify every source yourself.** Actually fetch each URL before adding it — never construct or guess
   one. Minimum **2 credible sources** (government / academic / major science publications). No Wikipedia
   as primary, no paywalled URLs. (Full standard: `CONTRIBUTING.md`.)
3. **Fill the object completely.** `{ id, category, myth, fact, details, taughtDuring, references }` with
   a **sequential `id`** and a **mandatory `taughtDuring: {start, end}`** (omitting it silently breaks
   personalization). If it's a new category, update the exported categories array too.
4. **Validate.** Run `npm run validate-urls` (must pass for the new URLs) plus `npm run lint` and
   `npm run build`. Spot-check in `npm run dev` if the card renders anything unusual.
5. **Show the diff — don't commit.** Stage and present `git diff` for human review. "Done" = the
   AGENTS.md definition (lint + build + validate-urls pass and the diff is reviewed).
