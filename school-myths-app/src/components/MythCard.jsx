import { useState } from 'react'

function MythCard({ myth }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="myth-card">
      <div className="myth-header">
        <span className="category-badge">{myth.category}</span>
      </div>

      <div className="myth-content">
        <div className="myth-section myth-false">
          <h3>❌ Myth</h3>
          <p>{myth.myth}</p>
        </div>

        <div className="myth-section myth-true">
          <h3>✅ Fact</h3>
          <p>{myth.fact}</p>
        </div>

        {showDetails && (
          <div className="myth-section myth-details">
            <h4>More Details</h4>
            <p>{myth.details}</p>
          </div>
        )}
      </div>

      <button
        className="details-toggle"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Show Less' : 'Learn More'}
      </button>
    </div>
  )
}

export default MythCard