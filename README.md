# School Myths Debunked 🎓

A React web application that separates fact from fiction in things we learned in school. Discover which "facts" you were taught were actually myths, with credible sources and personalized filtering based on your education era.

**🌐 Live Demo:** [https://www.rpherbig.com/school-myths/](https://www.rpherbig.com/school-myths/)

## Features

### 🧠 Educational Content
- **Many Common Myths** debunked with scientific explanations
- **Credible Sources** from Scientific American, NASA, Nature, NOAA, and other reputable publications
- **Detailed Explanations** of why each myth persists and what the truth actually is
- **Multiple Categories** including Biology, Physics, History, Astronomy, and Geography

### 🎯 Personal Experience
- **Birth Year Selector** to see myths you likely learned in school
- **Personal Myth Highlighting** with green borders and badges
- **Teaching Period Data** based on when myths were commonly taught in curricula

### 🔍 Smart Filtering
- **Category Filters** to browse by subject (Biology, Physics, History, etc.)
- **Personal Filter Toggle** to show only myths from your school era

### 🌙 Great User Experience
- **Responsive Design** that works on desktop, tablet, and mobile
- **Automatic Dark Mode** support based on system preferences
- **Accessible Design** with proper ARIA labels and keyboard navigation

## Examples of Myths Covered

- 🍭 **Tongue Taste Map** - Different parts of your tongue taste different flavors
- 🧠 **10% Brain Usage** - You only use 10% of your brain
- 🌍 **Flat Earth Medieval** - People in medieval times thought the Earth was flat
- 🌊 **Four Oceans** - There are four named oceans on Earth
- 🍎 **Food Pyramid** - The Food Guide Pyramid shows the healthiest way to eat

*...and more across Biology, Physics, History, Geography, and Astronomy*

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

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-myth`
3. Add your myth to `src/data/myths.js` following [CONTRIBUTING.md](CONTRIBUTING.md):
   - **⚠️ CRITICAL**: Verify all URLs work before adding them
   - Proper categorization with credible references
   - Teaching period estimates based on research
4. Validate URLs: `npm run validate-urls`
5. Test locally: `npm run dev`
6. Create a pull request

**See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on URL verification and source standards.**

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
