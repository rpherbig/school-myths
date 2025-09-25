import { useState } from 'react'

function MythCard({ myth, isPersonal, schoolYears }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className={`myth-card ${isPersonal ? 'personal-myth' : ''}`}>
      <div className="myth-header">
        <span className="category-badge">{myth.category}</span>
        {isPersonal && (
          <span className="personal-badge" title="You likely learned this in school">
            🎓 Personal
          </span>
        )}
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
          <>
            <div className="myth-section myth-details">
              <h4>More Details</h4>
              <p>{myth.details}</p>
            </div>

            {myth.references && myth.references.length > 0 && (
              <div className="myth-section myth-references">
                <h4>📚 References</h4>
                <ul className="references-list">
                  {myth.references.map((ref, index) => (
                    <li key={index} className="reference-item">
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="reference-link"
                      >
                        {ref.title}
                      </a>
                      <span className="reference-source"> - {ref.source}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
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