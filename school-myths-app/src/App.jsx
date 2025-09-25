import { useState } from 'react'
import { myths, categories } from './data/myths'
import MythCard from './components/MythCard'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [birthYear, setBirthYear] = useState(null)
  const [showPersonalOnly, setShowPersonalOnly] = useState(false)

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

  const mythsToShow = filteredMyths()

  return (
    <div className="app">
      <header className="app-header">
        <h1>School Myths Debunked</h1>
        <p>Separating fact from fiction in things we learned in school</p>
      </header>

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
        {mythsToShow.map(myth => (
          <MythCard
            key={myth.id}
            myth={myth}
            isPersonal={wasLikelyTaught(myth, schoolYears)}
            schoolYears={schoolYears}
          />
        ))}
      </main>
    </div>
  )
}

export default App
