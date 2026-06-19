# First two weeks (v0 plan)

A disposable starting spine. **Expect to rewrite this at your first retro.** Everything above the
floor emerges from real work.

1. **Commit the context files** as the real output of this kickoff. Review them as a group first —
   the discussion is as valuable as the artifact.
2. **Stand up the enforcement checklist before real work** (`docs/enforcement-checklist.md`):
   - Add the **monthly scheduled `validate-urls` CI run** (#3) — the high-value, low-cost guardrail.
   - Optionally add the **path-filtered PR check** on `myths.js` (#4).
   - `dist` gitignore (#2) is already done.
3. **Fix the broken command block:** `validate-urls` currently fails — fix the real 404 (Rosa Parks →
   archives.gov) and decide how to handle 403 false positives (e.g. an allowlist or a header/user-agent
   tweak in `scripts/validate-urls.js`). Re-run until it's green, then mark it verified in `AGENTS.md`.
4. **Pick the simplest real slice** to validate the setup end-to-end — e.g. add one new myth with the
   AI following the full flow (verify sources → fill object → validate-urls → show diff). Not the
   hardest task, not a throwaway.
5. **Right after, capture what worked and prune what didn't.** Update the files immediately; cut any
   line that didn't change the agent's behavior for the better.
6. **Make reflection a habit:** end sessions by asking the agent "what one change to these instructions
   would make next time smoother?" Apply the worthwhile ones, watch for bloat, and close
   `## Open questions` deliberately rather than letting them ossify.
7. **Protect attention:** the time the agent frees up is for *observing* its output (catching bad
   sources, odd decisions, drift) — not for reflexively spinning up parallel work streams.
