import React from 'react'

const pandits = [
  { 
    id: 1, 
    name: 'Pandit Chandra Shekhar', 
    role: 'HEAD PRIEST',
    local: '/assets/pandits/pandit_shekar.jpeg',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  { 
    id: 2, 
    name: 'Pandit Chidvilas', 
    role: 'VEDIC SCHOLAR',
    local: '/assets/pandits/pandit_vilas.jpeg',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
  },
  { 
    id: 3, 
    name: 'Pandit Thrived', 
    role: 'TEMPLE PRIEST',
    local: '/assets/pandits/pandit_thrived.jpeg',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  { 
    id: 4, 
    name: 'Pandit Raghavendra', 
    role: 'PUJA ACHARYA',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80'
  }
]

export default function Volunteers() {
  return (
    <section className="volunteers-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Pandits</h2>
        </div>
        
        <div className="volunteers-grid">
          {pandits.map(pandit => (
            <article key={pandit.id} className="volunteer-card">
              <div className="volunteer-image">
                <img src={pandit.local || pandit.image} alt={pandit.name} onError={(e) => { e.target.src = pandit.image }} />
                <div className="volunteer-overlay">
                  <div className="volunteer-social">
                    <a href="#/" aria-label="Social link">+</a>
                  </div>
                </div>
              </div>
              <div className="volunteer-info">
                <span className="volunteer-role">{pandit.role}</span>
                <h4>
                  <a href="#/volunteer">{pandit.name}</a>
                </h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
