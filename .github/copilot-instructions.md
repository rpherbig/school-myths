# School Myths Debunked - GitHub Copilot Instructions

## Project Overview
A React web app that debunks common myths taught in schools, with personalized filtering based on birth year.

## Tech Stack
- **Frontend**: React 18 with Vite
- **Styling**: CSS with dark mode support
- **Deployment**: GitHub Pages
- **Data**: Static myths in `src/data/myths.js`

## Development Commands
```bash
cd school-myths-app
npm install      # Install dependencies
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run validate-urls  # Validate all reference URLs
```

## Project Structure
```
school-myths-app/
├── src/
│   ├── data/myths.js          # All myth data with references
│   ├── components/MythCard.jsx # Individual myth display
│   ├── App.jsx                # Main application
│   └── App.css                # Styling with dark mode
├── scripts/validate-urls.js   # URL verification tool
└── package.json
```

## Quality Standards

### Adding New Myths
1. **ALWAYS verify URLs work** before adding references
2. **Minimum 2 credible sources** per myth (Scientific American, NASA, universities, etc.)
3. **No Wikipedia as primary source** (acceptable as secondary)
4. **Include teaching periods** based on research
5. **Run URL validation**: `npm run validate-urls`

### Code Standards
- Follow existing React patterns and CSS conventions
- Maintain responsive design and dark mode support
- Use semantic HTML and accessibility features
- Test all changes with `npm run dev`

## Testing Strategy

This project does not have unit tests. Validate changes by:
1. **Building the application**: `npm run build` (must succeed without errors)
2. **Running the linter**: `npm run lint` (must pass with no errors)
3. **Validating URLs**: `npm run validate-urls` (if adding/modifying myths)
4. **Manual testing**: `npm run dev` to verify UI changes work correctly
5. **Check responsive design** at different screen sizes
6. **Test dark mode** functionality if styling changes are made

## Key Files to Know

- **`src/data/myths.js`**: Contains all myth data - CRITICAL for content accuracy
- **`CONTRIBUTING.md`**: URL verification requirements - READ BEFORE adding references
- **`src/components/MythCard.jsx`**: Displays individual myths with references
- **`src/App.jsx`**: Main application logic, filtering, and state management
- **`scripts/validate-urls.js`**: Automated URL validation tool
- **`.github/workflows/ci.yml`**: CI/CD pipeline configuration
- **`vite.config.js`**: Build configuration with GitHub Pages base path

## Common Pitfalls to Avoid

### URL References
- ❌ **NEVER add URLs without verifying they work** - breaks user trust
- ❌ Don't use paywalled sources - users can't verify claims
- ❌ Don't construct URLs - always test actual working links
- ✅ Always run `npm run validate-urls` after adding references

### Data Structure
- ❌ Don't modify the myth object structure without updating MythCard component
- ❌ Don't add categories without updating the categories array export
- ❌ Don't forget `taughtDuring` dates - they enable personal filtering
- ✅ Follow the exact structure shown in existing myths

### Build and Deployment
- ❌ Don't change `base: '/school-myths/'` in vite.config.js - breaks GitHub Pages
- ❌ Don't commit the `dist/` folder - it's auto-generated
- ✅ Always test with `npm run build` before committing

### Styling
- ❌ Don't break dark mode support - test both light and dark themes
- ❌ Don't use fixed widths that break mobile responsiveness
- ✅ Use existing CSS classes and patterns for consistency

## Deployment
- Automatic deployment to GitHub Pages via `npm run deploy`
- Base path configured for `/school-myths/` subdirectory
- Uses `gh-pages` branch for hosting

## Contributing Guidelines
See `CONTRIBUTING.md` for detailed URL verification requirements and myth addition standards.

## GitHub Copilot Specific Notes
- When suggesting code changes, always validate URLs before adding references
- Prefer minimal changes to existing working code
- Run tests and linting before committing changes
- Follow the existing code style and patterns in the repository
- **Working directory**: All npm commands run from `school-myths-app/` subdirectory
- Focus on educational accuracy - this is a learning resource, credibility matters
