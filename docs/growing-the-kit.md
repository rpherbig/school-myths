# Growing the kit (a guide for humans)

This file is for the team, not the agent — it's never loaded into agent context, so it can be wordier.
It explains how to extend the AI context files over time.

## The guiding metaphor: keep a notebook, not a manual
Treat these files like the notebook a new engineer keeps while onboarding. As you work, write down
what would **surprise** a newcomer (human or AI) and what you'd hate to re-learn — and nothing they'd
find obvious. The files start thin and grow from real surprises. The test for any line: *"would a new
teammate be surprised by this, and jot it down so they never re-learn it the hard way?"* If not, cut it.
Every line in `AGENTS.md` is obeyed by the agent on every task, so a non-load-bearing line is a tax,
not harmless clutter.

## How the kit is laid out
- **`AGENTS.md`** (root) — always-on shared context. The one file the agent reads on every action. Keep it lean.
- **`CLAUDE.md`** (root) — Claude Code shim; just imports `AGENTS.md`. Claude-specifics go here as they emerge.
- **`.github/copilot-instructions.md`** — points Copilot at `AGENTS.md` + the Copilot-only "stage, don't commit" rule.
- **`docs/glossary.md`** — domain terms + content-model rules; loaded on access, meant to grow.
- **`docs/enforcement-checklist.md`** — what's guaranteed by tooling (source of truth for guardrails).
- **`CONTRIBUTING.md`** — the deep human-facing sourcing standard; `AGENTS.md` routes to it.
- **`docs/first-two-weeks.md`** — the disposable v0 plan.

## Human-process bars (these live here, not in AGENTS.md — they govern people, not the agent)
- **Done = reviewed.** A change isn't done because the agent stopped or it compiles — it's done when
  `lint` + `build` + `validate-urls` pass *and* a human has reviewed the diff.
- **Keep changesets small.** AI makes huge PRs trivial; break work into reviewable chunks.
- **Watch for AI-specific failure modes** in review: cross-file naming/data-flow drift that's locally
  correct but globally incoherent, and plausible-but-wrong content/sources. Don't review AI PRs more
  lightly because "the AI helped" — the reflex should be the opposite.

## How to add things
- A new **convention** → add a concrete line to `AGENTS.md` "How to work in this repo" (only if it changes agent behavior).
- A new **domain term or rule** → add to `docs/glossary.md`.
- A new **companion doc** → create under `docs/` and add a routing line to `AGENTS.md` "Where to look".
- **Later, when real work justifies it:** your own Skills, hooks, subagents (the "rich layer"). Don't
  build these speculatively — let them emerge from a task you do twice.

## Skills emerge from real work — don't pre-build them
This kit ships **one disposable illustration** — `add-a-myth` (in both `.claude/skills/` and
`.github/skills/`) — to show the *shape* of a skill. It's marked provisional: **replace it** with your
real flow once you've added a few myths by hand and know the actual shape; don't preserve it. When you
find yourself doing any other multi-step task twice, that's the signal to write the next skill. Don't
build tech-specific skills, hooks, or subagents speculatively — let them earn their place from real work.

## What to do with these drafts right now
1. **Review and edit as a group.** These are drafts; your judgment is the point.
2. **Commit** (at least to a local branch) so this state is preserved.
3. **Open a fresh agent chat** (clean context), point it at the current Agent Skills best-practices guide
   (`https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices`), and tell it to
   **AUDIT** these files against that guidance and propose changes.
4. **Discuss and accept/decline** the suggestions like a code review.
5. **Pull in an in-house expert** for anything still open — or just try it and adjust.
