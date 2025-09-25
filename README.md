# School Myths Debunked 🎓

A React web application that separates fact from fiction in things we learned in school. Discover which "facts" you were taught were actually myths, with credible sources and personalized filtering based on your education era.

**🌐 Live Demo:** [https://www.rpherbig.com/school-myths/](https://www.rpherbig.com/school-myths/)

## Features

### 🧠 Educational Content
- **8+ Common Myths** debunked with scientific explanations
- **Credible Sources** from Scientific American, NASA, Nature, and other reputable publications
- **Detailed Explanations** of why each myth persists and what the truth actually is
- **Multiple Categories** including Biology, Physics, History, and Astronomy

### 🎯 Personal Experience
- **Birth Year Selector** to see myths you likely learned in school
- **Personal Myth Highlighting** with green borders and badges
- **School Years Calculator** (ages 5-18) to determine your education period
- **Teaching Period Data** based on when myths were commonly taught in curricula

### 🔍 Smart Filtering
- **Category Filters** to browse by subject (Biology, Physics, History, etc.)
- **Personal Filter Toggle** to show only myths from your school era
- **Combinable Filters** - view personal Biology myths, personal History myths, etc.
- **Responsive Design** that works on desktop, tablet, and mobile

### 🌙 Great User Experience
- **Automatic Dark Mode** support based on system preferences
- **Expandable Cards** with "Learn More" details and references
- **Hover Effects** and smooth animations
- **Accessible Design** with proper ARIA labels and keyboard navigation

## Examples of Myths Covered

- 🍭 **Tongue Taste Map** - Different parts of your tongue taste different flavors
- ⚡ **Lightning Strikes** - Lightning never strikes the same place twice
- 🌍 **Flat Earth Medieval** - People in medieval times thought the Earth was flat
- 🧠 **10% Brain Usage** - You only use 10% of your brain
- 🔥 **Flame Colors** - Different colored flames are always hotter or cooler
- 💀 **Hair Growth After Death** - Hair and fingernails continue growing after death
- 🏛️ **Great Wall Visibility** - You can see the Great Wall of China from space
- 👑 **Napoleon's Height** - Napoleon was unusually short for his time

## Technical Implementation

### Data Structure
Each myth includes:
```javascript
{
  id: 1,
  category: "Biology",
  myth: "Different parts of your tongue taste different flavors",
  fact: "Taste buds are distributed all over your tongue...",
  details: "The 'tongue map' was based on a mistranslation...",
  taughtDuring: { start: 1950, end: 2005 },
  references: [
    {
      title: "Taste Maps",
      source: "Scientific American",
      url: "https://www.scientificamerican.com/..."
    }
  ]
}
```

## Development

### Getting Started
```bash
# Clone the repository
git clone https://github.com/rpherbig/school-myths.git
cd school-myths/school-myths-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

### GitHub Pages (Current)
The app is automatically deployed to GitHub Pages:

```bash
# Build and deploy
npm run build
npx gh-pages -d dist
```

## GitHub Actions & CI/CD

### Claude Code Integration
The repository includes GitHub Actions integration with Claude Code for automated PR reviews:

- **Triggers**: Comment `@claude` on issues or PRs
- **Capabilities**: Code review, suggestions, and analysis
- **Configuration**: `.github/workflows/claude.yml`

### Dependabot
Automated dependency updates configured for the npm project:
- **Schedule**: Weekly updates
- **Scope**: `school-myths-app/` directory
- **Configuration**: `.github/dependabot.yml`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-myth`
3. Add your myth to `src/data/myths.js` with:
   - Proper categorization
   - Credible references
   - Teaching period estimates
4. Test locally: `npm run dev`
5. Create a pull request
6. Tag `@claude` for automated review

### Adding New Myths
When adding myths, include:
- **Clear myth statement** (what people commonly believe)
- **Factual correction** (what's actually true)
- **Detailed explanation** (why the myth exists, context)
- **2+ credible sources** with URLs
- **Teaching period** (when was this commonly taught)
- **Appropriate category** (Biology, Physics, History, etc.)

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Myth Research**: Based on scientific literature and educational studies
- **Sources**: Scientific American, NASA, Nature, National Weather Service, and other credible institutions
- **Inspiration**: Common misconceptions found in traditional educational curricula
- **Built with**: React, Vite, and modern web technologies
