# Contributing Guidelines

## URL Verification Requirements

**⚠️ CRITICAL RULE: Never include URLs that haven't been verified to work.**

### Before Adding Any URL Reference:

1. **Test the URL manually** - Visit it in a browser first
2. **Use WebFetch tool** - Verify the URL returns content (not 404/403/etc.)
3. **Check URL structure** - Ensure it looks legitimate and follows the site's pattern
4. **Prefer official sources** - Government agencies, academic institutions, major news outlets

### URL Testing Process:

```bash
# Always test URLs before adding them to myths.js
WebFetch(url="https://example.com/article", prompt="verify this works")
```

### Acceptable Sources (in order of preference):

1. **Government agencies**: NASA, NOAA, NIH, CDC, USDA
2. **Academic institutions**: Universities, research institutes
3. **Established science publications**: Nature, Science, Scientific American
4. **Major news outlets**: BBC, NPR, Associated Press
5. **Reputable encyclopedias**: Britannica, Wikipedia (for general topics)

### Red Flags - Do NOT Use:

- ❌ URLs that return 404, 403, or redirect errors
- ❌ URLs with suspicious domains or structures
- ❌ URLs from blogs or personal websites (unless expert-authored)
- ❌ URLs that require subscription/paywall (readers can't verify)
- ❌ URLs that were constructed/guessed rather than found

## Adding New Myths

### Required Fields:

```javascript
{
  id: number,              // Sequential ID
  category: string,        // Must exist in categories array
  myth: string,           // Clear statement of the misconception
  fact: string,           // Corrected fact (concise)
  details: string,        // Explanation of why myth exists + context
  taughtDuring: {         // When this was commonly taught
    start: year,
    end: year
  },
  references: [           // MINIMUM 2 verified sources
    {
      title: string,      // Exact title from source
      source: string,     // Publication/organization name
      url: string        // VERIFIED working URL
    }
  ]
}
```

### Reference Standards:

- **Minimum 2 sources** per myth
- **All URLs must be tested** before submission
- **Titles must match** the actual article title
- **Sources should be diverse** (don't use same publication twice)

### Teaching Period Guidelines:

Research when the myth was commonly taught by checking:
- Historical curriculum standards
- Textbook publication dates
- Official policy changes (like MyPlate replacing Food Pyramid)
- Scientific consensus shifts

### Quality Checklist:

- [ ] Myth is genuinely widespread/commonly taught
- [ ] Correction is factually accurate and current
- [ ] Both URLs tested and working
- [ ] Sources are credible and authoritative
- [ ] Teaching period is researched/reasonable
- [ ] Explanation shows why myth persists
- [ ] Category exists in categories array

## Code Standards

### URL Validation in Development:

When developing locally, always test references:

```javascript
// Good: URL has been verified via WebFetch
references: [
  {
    title: "Verified Article Title",
    source: "NOAA Ocean Service",
    url: "https://oceanservice.noaa.gov/facts/article.html"
  }
]

// Bad: URL not verified, potentially broken
references: [
  {
    title: "Guessed Article Title",
    source: "Some Website",
    url: "https://example.com/maybe-this-exists"
  }
]
```

### Testing New Myths:

```bash
# 1. Add myth to myths.js
# 2. Test locally
npm run dev

# 3. Verify all URLs work
# Visit each URL manually in browser

# 4. Build and test
npm run build
```

## Review Process

### Self-Review Checklist:

- [ ] I have personally visited every URL I'm adding
- [ ] All URLs return proper content (not 404/403/etc.)
- [ ] Sources are authoritative and credible
- [ ] Myth is genuinely widespread and commonly taught
- [ ] Facts are accurate and up-to-date
- [ ] Teaching period is based on research

### Automated Checks:

When possible, use the WebFetch tool to verify URLs:

```bash
WebFetch(url="your-url-here", prompt="verify this URL works and contains relevant content")
```

### Claude Code PR Reviews:

Tag `@claude` on PRs for automated review. Claude Code will check:
- Code syntax and structure
- Basic fact-checking against sources
- Adherence to data structure standards

## Why This Matters

**Credibility is everything** for an educational app. A single broken or fabricated URL can:
- ❌ Undermine trust in all content
- ❌ Make users question the research quality
- ❌ Damage the app's educational value
- ❌ Create embarrassment when shared

**Verified sources** ensure:
- ✅ Users can fact-check our claims
- ✅ Content remains credible over time
- ✅ Educational institutions might reference the app
- ✅ Social sharing includes working links

## URL Maintenance

### Periodic Checks:

URLs can break over time. Consider:
- Quarterly URL verification runs
- Automated link checking tools
- Community reports of broken links

### When URLs Break:

1. **Find replacement** from same or similar authoritative source
2. **Update URL and title** to match new source
3. **Never leave broken URLs** in the codebase
4. **Document URL changes** in commit messages

---

**Remember: Every URL is a promise to users that they can verify our claims. Keep that promise.**