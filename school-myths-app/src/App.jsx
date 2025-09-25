import { useState } from 'react'
import { myths, categories } from './data/myths'
import MythCard from './components/MythCard'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredMyths = selectedCategory === 'All'
    ? myths
    : myths.filter(myth => myth.category === selectedCategory)

  return (
    <div className="app">
      <header className="app-header">
        <h1>School Myths Debunked</h1>
        <p>Separating fact from fiction in things we learned in school</p>
      </header>

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

      <main className="myths-container">
        {filteredMyths.map(myth => (
          <MythCard key={myth.id} myth={myth} />
        ))}
      </main>
    </div>
  )
}

export default App
