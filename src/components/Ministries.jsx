import React, { useState } from 'react'

const ministries = [
  { id: 1, title: "Lorem's Ministry", category: 'temple', image: 'https://images.unsplash.com/photo-1604608672325-f41a9b5e7e2f?auto=format&fit=crop&w=400&q=80' },
  { id: 2, title: "Ipsum's Ministry", category: 'campus', image: 'https://images.unsplash.com/photo-1604608672325-f41a9b5e7e2f?auto=format&fit=crop&w=400&q=80' },
  { id: 3, title: "Dolor's Ministry", category: 'temple', image: 'https://images.unsplash.com/photo-1604608672325-f41a9b5e7e2f?auto=format&fit=crop&w=400&q=80' },
  { id: 4, title: 'Web Ministry', category: 'relations', image: 'https://images.unsplash.com/photo-1604608672325-f41a9b5e7e2f?auto=format&fit=crop&w=400&q=80' },
  { id: 5, title: 'Help Ministry', category: 'religion', image: 'https://images.unsplash.com/photo-1604608672325-f41a9b5e7e2f?auto=format&fit=crop&w=400&q=80' },
  { id: 6, title: 'Event Ministry', category: 'campus', image: 'https://images.unsplash.com/photo-1604608672325-f41a9b5e7e2f?auto=format&fit=crop&w=400&q=80' },
  { id: 7, title: "Sed's Ministry", category: 'relations', image: 'https://images.unsplash.com/photo-1604608672325-f41a9b5e7e2f?auto=format&fit=crop&w=400&q=80' },
  { id: 8, title: "Amet's Ministry", category: 'religion', image: 'https://images.unsplash.com/photo-1604608672325-f41a9b5e7e2f?auto=format&fit=crop&w=400&q=80' },
  { id: 9, title: 'Temple Ministry', category: 'temple', image: 'https://images.unsplash.com/photo-1604608672325-f41a9b5e7e2f?auto=format&fit=crop&w=400&q=80' }
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'temple', label: 'Temple' },
  { id: 'campus', label: 'Campus' },
  { id: 'relations', label: 'Relations' },
  { id: 'religion', label: 'Religion' }
]

export default function Ministries() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredMinistries = activeCategory === 'all' 
    ? ministries 
    : ministries.filter(m => m.category === activeCategory)

  return (
    <section className="ministries-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Ministries</h2>
        </div>
        
        <div className="ministries-filter">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="ministries-grid">
          {filteredMinistries.map(ministry => (
            <article key={ministry.id} className="ministry-card">
              <div className="ministry-image">
                <img src={ministry.image} alt={ministry.title} />
                <div className="ministry-overlay">
                  <a href="#/ministry" className="ministry-icon">+</a>
                </div>
              </div>
              <h4>
                <a href="#/ministry">{ministry.title}</a>
              </h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
