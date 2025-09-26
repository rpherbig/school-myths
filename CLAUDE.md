# School Myths Debunked - Claude Code Setup

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

### GitHub Actions Limitations
- Use `./scripts/create-pr.sh "title" "body"` for PR creation
- Avoid complex shell patterns (heredocs blocked by security)
- All bash commands must be pre-approved in workflow

## Deployment
- Automatic deployment to GitHub Pages via `npm run deploy`
- Base path configured for `/school-myths/` subdirectory
- Uses `gh-pages` branch for hosting

## Contributing Guidelines
See `CONTRIBUTING.md` for detailed URL verification requirements and myth addition standards.