import React, { useState } from 'react'

const deities = [
  { 
    id: 1, 
    title: 'Sri Sita Rama', 
    description: 'The embodiment of dharma, devotion, and divine grace.',
    category: 'sita-rama', 
    image: '/assets/photos/sita-rama-1.jpeg' 
  },
  { 
    id: 2, 
    title: 'Lord Shiva', 
    description: 'The supreme protector and destroyer of negativity.',
    category: 'shiva', 
    image: '/assets/photos/siva.jpeg' 
  },
  { 
    id: 3, 
    title: 'Goddess Durga', 
    description: 'The divine mother, symbol of strength and protection.',
    category: 'goddesses', 
    image: '/assets/photos/maa-1.jpeg' 
  },
  { 
    id: 4, 
    title: 'Lord Hanuman', 
    description: 'The eternal devotee, representing courage and unwavering bhakti.',
    category: 'hanuman', 
    image: '/assets/photos/hanuman-1.jpeg' 
  },
  { 
    id: 5, 
    title: 'Lord Ganesha', 
    description: 'The remover of obstacles and bestower of wisdom and prosperity.',
    category: 'ganesha', 
    image: '/assets/photos/Ganeshji.jpeg' 
  },
  { 
    id: 6, 
    title: 'Nava Grahas', 
    description: 'The Nava Grahas are the nine celestial deities who influence human life and cosmic balance, worshipped for harmony, prosperity, and protection.',
    category: 'grahas', 
    image: '/assets/photos/navagraha-1.webp' 
  },
//   { 
//     id: 7, 
//     title: 'Shani Graha', 
//     description: 'Shani Graha – The divine dispenser of justice who guides us through karma and discipline..',
//     category: 'grahas', 
//     image: '/assets/photos/navagraha-1.webp' 
//   }
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'sita-rama', label: 'Sri Sita Rama' },
  { id: 'shiva', label: 'Lord Shiva' },
  { id: 'hanuman', label: 'Lord Hanuman' },
  { id: 'ganesha', label: 'Lord Ganesha' },
  { id: 'grahas', label: 'Nava Grahas' },
  { id: 'grahas', label: 'Shani Graha' },
]

export default function Deities() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredDeities = activeCategory === 'all' 
    ? deities 
    : deities.filter(d => d.category === activeCategory)

  return (
    <section className="ministries-section">
      <div className="container">
        <div className="section-header">
          <h2>🕉️ Our Deities</h2>
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
          {filteredDeities.map(deity => (
            <article key={deity.id} className="ministry-card">
              <div className="ministry-image">
                <img src={deity.image} alt={deity.title} />
                <div className="ministry-overlay">
                  <a href="#/deity" className="ministry-icon">+</a>
                </div>
              </div>
              <h4>
                <a href="#/deity">{deity.title}</a>
              </h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
