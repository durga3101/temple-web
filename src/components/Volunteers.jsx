import React from 'react'

const volunteers = [
  { 
    id: 1, 
    name: 'Lorem Amet', 
    role: 'TEAM MEMBER',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  { 
    id: 2, 
    name: 'Nulla Sed', 
    role: 'TEAM MEMBER',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
  },
  { 
    id: 3, 
    name: 'Ipsum Quis', 
    role: 'TEAM MEMBER',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  { 
    id: 4, 
    name: 'Dolor Porta', 
    role: 'TEAM MEMBER',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80'
  }
]

export default function Volunteers() {
  return (
    <section className="volunteers-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Volunteers</h2>
        </div>
        
        <div className="volunteers-grid">
          {volunteers.map(volunteer => (
            <article key={volunteer.id} className="volunteer-card">
              <div className="volunteer-image">
                <img src={volunteer.image} alt={volunteer.name} />
                <div className="volunteer-overlay">
                  <div className="volunteer-social">
                    <a href="#/" aria-label="Social link">+</a>
                  </div>
                </div>
              </div>
              <div className="volunteer-info">
                <span className="volunteer-role">{volunteer.role}</span>
                <h4>
                  <a href="#/volunteer">{volunteer.name}</a>
                </h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
