# School Myths Debunked — Copilot instructions

The shared, harness-agnostic context for this repo lives in **[`AGENTS.md`](../AGENTS.md)** (repo root):
project overview, commands, repo map, decision rights, content/sourcing rules, and open questions.
Read it first — it is the source of truth.

## Copilot-specific notes
- **Never commit or push.** Stage changes with `git add`, then show `git status` and
  `git diff --staged` for the user to review. The user commits and pushes manually.
- Always explain what changed and why.
- Prefer minimal changes to existing working code.
