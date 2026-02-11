import React from 'react'

const pandits = [
  { 
    id: 1, 
    name: 'Pandit Shri Krishna Sharma', 
    role: 'HEAD PRIEST',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  { 
    id: 2, 
    name: 'Pandit Shri Ram Acharya', 
    role: 'VEDIC SCHOLAR',
     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
  },
  { 
    id: 3, 
    name: 'Pandit Shiva Sastry', 
    role: 'TEMPLE PRIEST',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  { 
    id: 4, 
    name: 'Pandit Ganesh Bhatt', 
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
                <img src={pandit.image} alt={pandit.name} />
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
