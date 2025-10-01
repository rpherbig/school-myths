import { useState, useEffect } from 'react'
import { myths, categories } from './data/myths'
import MythCard from './components/MythCard'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [birthYear, setBirthYear] = useState(null)
  const [showPersonalOnly, setShowPersonalOnly] = useState(false)
  const [theme, setTheme] = useState(() => {
    // Load theme from localStorage or default to 'system'
    return localStorage.getItem('theme') || 'system'
  })

  // Apply theme to document root
  useEffect(() => {
    const root = document.documentElement
    
    // Remove existing theme classes
    root.classList.remove('light-theme', 'dark-theme')
    
    if (theme === 'light') {
      root.classList.add('light-theme')
    } else if (theme === 'dark') {
      root.classList.add('dark-theme')
    }
    // If theme is 'system', no class is added (uses media query)
    
    // Save to localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  // Calculate school years (ages 5-18)
  const getSchoolYears = (birthYear) => {
    if (!birthYear) return null
    return {
      start: birthYear + 5,
      end: birthYear + 18
    }
  }

  // Check if a myth was likely taught during someone's school years
  const wasLikelyTaught = (myth, schoolYears) => {
    if (!schoolYears || !myth.taughtDuring) return false

    // Check if there's overlap between when the myth was taught and school years
    return myth.taughtDuring.start <= schoolYears.end &&
           myth.taughtDuring.end >= schoolYears.start
  }

  const schoolYears = getSchoolYears(birthYear)

  // Filter myths based on selected category and personal filter
  const filteredMyths = () => {
    let filtered = myths

    // First filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(myth => myth.category === selectedCategory)
    }

    // Then filter by personal if enabled
    if (showPersonalOnly) {
      filtered = filtered.filter(myth => wasLikelyTaught(myth, schoolYears))
    }

    return filtered
  }

  const displayedMyths = filteredMyths()

  return (
    <div className="app">
      <header className="app-header">
        <div className="theme-toggle">
          <button
            className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
            onClick={() => setTheme('light')}
            title="Light mode"
          >
            ☀️
          </button>
          <button
            className={`theme-btn ${theme === 'system' ? 'active' : ''}`}
            onClick={() => setTheme('system')}
            title="System preference"
          >
            💻
          </button>
          <button
            className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => setTheme('dark')}
            title="Dark mode"
          >
            🌙
          </button>
        </div>
        <h1>School Myths Debunked</h1>
        <p>Separating fact from fiction in things we learned in school</p>
      </header>

      <div className="myth-count-banner">
        <p>
          <strong>{myths.length} myths</strong> debunked and counting! 
          Know a myth we should add?{' '}
          <a 
            href="https://github.com/rpherbig/school-myths" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contribute-link"
          >
            Contribute on GitHub
          </a>
        </p>
      </div>

      <div className="birth-year-selector">
        <label htmlFor="birth-year">
          When were you born? <span className="optional">(optional)</span>
        </label>
        <select
          id="birth-year"
          value={birthYear || ''}
          onChange={(e) => {
            const newBirthYear = e.target.value ? parseInt(e.target.value) : null
            setBirthYear(newBirthYear)
            // Reset personal filter if birth year is cleared
            if (!newBirthYear) {
              setShowPersonalOnly(false)
            }
          }}
          className="birth-year-select"
        >
          <option value="">Select your birth year</option>
          {Array.from({ length: 80 }, (_, i) => {
            const year = 2010 - i // From 2010 back to 1930
            return (
              <option key={year} value={year}>
                {year}
              </option>
            )
          })}
        </select>
        {birthYear && (
          <p className="school-years-info">
            You likely attended school from {schoolYears.start} to {schoolYears.end}
          </p>
        )}
      </div>

      <div className="filters-section">
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {birthYear && (
          <div className="personal-filter">
            <label className="personal-toggle">
              <input
                type="checkbox"
                checked={showPersonalOnly}
                onChange={(e) => setShowPersonalOnly(e.target.checked)}
              />
              <span className="toggle-text">🎓 Show only myths I learned in school</span>
            </label>
          </div>
        )}
      </div>

      <main className="myths-container">
        {displayedMyths.map(myth => (
          <MythCard
            key={myth.id}
            myth={myth}
            isPersonal={wasLikelyTaught(myth, schoolYears)}
            schoolYears={schoolYears}
          />
        ))}
      </main>

      <footer className="app-footer">
        <p>
          Found a problem or have a myth to suggest?{' '}
          <a 
            href="https://github.com/rpherbig/school-myths" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            Visit our GitHub repository
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
