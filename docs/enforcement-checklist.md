# Enforcement checklist

Concrete setup tasks — the things that must be **guaranteed by tooling**, not just instructed.
This is the source of truth; the "Guardrails" section of `AGENTS.md` only mirrors it.

| # | Item | Mechanism | Status |
|---|------|-----------|--------|
| 1 | Secrets / keys / PII | None in play — static public app, no backend; deploy auth is local git only | ✅ N/A |
| 2 | `dist/` never committed | `dist` entry in `school-myths-app/.gitignore` | ✅ done |
| 3 | Reference-URL link rot | **Scheduled monthly CI run** of `npm run validate-urls` (GitHub Actions cron) | ⬜ TODO |
| 4 | New reference URLs valid | *(optional)* path-filtered PR check running `validate-urls` only when `src/data/myths.js` changes, plus the 📄 rule "AI fetches/verifies each URL itself" (in AGENTS.md) | ⬜ TODO |
| 5 | Accessibility + dark/light theme | Instructed + manual test (not gated). Must stay maintained, but accepted as not-enforced for v0 | ✅ accepted |

## Notes / blockers
- **#3 is the high-value one.** Link rot happens on a clock, independent of commits, so a monthly
  scheduled run catches it cheaply (~12×/year) without taxing every push.
- **Do not gate every push** on `validate-urls`: it fires a live request per URL and is flaky —
  reputable sources (Britannica, genome.gov, JHU Press, Mount Vernon) return 403 to the script while
  working fine in a browser. A blanket gate would cry wolf. #4 (path-filtered) is the targeted version.
- **Known real break to fix:** Rosa Parks reference → `archives.gov` returns a genuine 404.
