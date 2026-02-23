import React, { useState, useEffect } from 'react'
import PageHero from '../components/PageHero'
import { filterCategories } from '../utils/filterCategories'
import { usePoojas } from '../context/PoojaContext'

// Data is now loaded from Google Sheets via PoojaContext → src/data/poojasApi.js
// Sheet tabs: Poojas | PoojaDetails | PoojaSteps

function PoojaCard({ pooja, onSelect }) {
  const handleCardClick = (event) => {
    if (event.target.tagName === 'A') return
    onSelect(pooja.id)
    window.location.hash = '/pooja-detail'
  }

  return (
    <article className="news-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="news-image-wrapper">
        <div className="news-image" style={{ backgroundImage: `url(${pooja.local}), url(${pooja.unsplash})` }}>
          <div className="news-overlay"></div>
        </div>
      </div>
      <div className="news-content">
        <h3 className="news-title">
          <a
            href="#/pooja-detail"
            onClick={(e) => { e.stopPropagation(); onSelect(pooja.id) }}
          >
            {pooja.title}
          </a>
        </h3>
        <p className="news-description">{pooja.description}</p>
        <div className="news-meta">
          <div className="news-author-section">
            <span className="author-label">By</span>
            <span className="author-name">{pooja.author}</span>
            <div className="author-avatar"></div>
          </div>
          <div className="news-info">
            <span className="news-category">{pooja.category}</span>
            <span className="news-divider">|</span>
            <span className="news-date">{pooja.date}</span>
            {pooja.time && (
              <>
                <span className="news-divider">|</span>
                <span className="news-time">⏰ {pooja.time}</span>
              </>
            )}
          </div>
        </div>
        <div className="event-action" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
          <div className="event-price" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#d53f41' }}>
            ₹{pooja.price}
          </div>
          <button
            className="btn primary"
            style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
            onClick={(e) => { e.stopPropagation(); window.location.hash = '/payment' }}
          >
            Book Now
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Poojas() {
  const { poojas, loading, error, setSelectedPoojaId } = usePoojas()
  const [activeCategory, setActiveCategory] = useState('all')

  // Sync active filter from URL query param
  useEffect(() => {
    const updateCategoryFromURL = () => {
      const hash = window.location.hash
      const urlParams = new URLSearchParams(hash.split('?')[1])
      const category = urlParams.get('category')

      if (category && filterCategories.some((cat) => cat.id === category)) {
        setActiveCategory(category)
      } else if (!category) {
        setActiveCategory('all')
      }
    }

    updateCategoryFromURL()
    window.addEventListener('hashchange', updateCategoryFromURL)
    return () => window.removeEventListener('hashchange', updateCategoryFromURL)
  }, [])

  const handleFilterClick = (categoryId) => {
    window.location.hash = categoryId === 'all' ? '/poojas' : `/poojas?category=${categoryId}`
  }

  const filteredPoojas = activeCategory === 'all'
    ? poojas
    : poojas.filter((p) => p.deity === activeCategory)

  return (
    <div className="events-page">
      <PageHero title="Temple Poojas & Rituals" />

      <main className="container events-listing">
        {/* Filter bar */}
        <div className="ministries-filter">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => handleFilterClick(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Loading / Error */}
        {loading && (
          <p style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>Loading poojas…</p>
        )}
        {error && (
          <p style={{ textAlign: 'center', padding: '2rem', color: '#d53f41' }}>⚠️ {error}</p>
        )}

        {/* Grid */}
        {!loading && !error && (
          <div className="news-grid">
            {filteredPoojas.map((pooja) => (
              <PoojaCard key={pooja.id} pooja={pooja} onSelect={setSelectedPoojaId} />
            ))}
            {filteredPoojas.length === 0 && (
              <p style={{ gridColumn: '1/-1', textAlign: 'center', color: '#888', padding: '2rem' }}>
                No poojas found for this deity.
              </p>
            )}
          </div>
        )}
      </main>

      <section className="newsletter">
        <div className="newsletter-inner">
          <div className="newsletter-text">
            <h3>Subscribe To Our Newsletter</h3>
            <p>Get updates about special poojas, temple events, and spiritual practices delivered to your inbox</p>
          </div>
          <form className="newsletter-form" onSubmit={(ev) => ev.preventDefault()}>
            <input placeholder="Your Email" aria-label="Email" />
            <button className="btn primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}
