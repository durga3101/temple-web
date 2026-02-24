import React from 'react'
import PageHero from '../components/PageHero'
import { useEvents } from '../context/EventContext'

// Data is loaded from Google Sheets via EventContext → src/data/eventsApi.js
// Sheet tabs: Events | EventDetails | EventSchedule

function EventCard({ e, onSelect }) {
  const handleCardClick = (evt) => {
    if (evt.target.tagName === 'A') return
    onSelect(e.id)
    window.location.hash = '/event-detail'
  }

  return (
    <article className="news-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="news-image-wrapper">
        <div className="news-image" style={{ backgroundImage: `url(${e.local}), url(${e.unsplash})` }}>
          <div className="news-overlay"></div>
        </div>
      </div>
      <div className="news-content">
        <h3 className="news-title">
          <a
            href="#/event-detail"
            onClick={(evt) => { evt.stopPropagation(); onSelect(e.id) }}
          >
            {e.title}
          </a>
        </h3>
        <p className="news-description">{e.description}</p>
        <div className="news-meta">
          <div className="news-author-section">
            <span className="author-label">By</span>
            <span className="author-name">{e.author}</span>
            <div className="author-avatar"></div>
          </div>
          <div className="news-info">
            <span className="news-category">{e.category}</span>
            <span className="news-divider">|</span>
            <span className="news-date">{e.date}</span>
            {e.time && (
              <>
                <span className="news-divider">|</span>
                <span className="news-time">⏰ {e.time}</span>
              </>
            )}
          </div>
        </div>
        <div className="event-action" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
          <div className="event-price" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#d53f41' }}>
            {e.price === 0 ? 'FREE' : `₹${e.price}`}
          </div>
          <button
            className="btn primary"
            style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
            onClick={(evt) => {
              evt.stopPropagation()
              if (e.price === 0) {
                alert('No registration required - this event is free!')
              } else {
                window.location.hash = '/payment'
              }
            }}
          >
            {e.price === 0 ? 'Free Entry' : 'Register'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Events() {
  const { events, loading, error, setSelectedEventId } = useEvents()

  return (
    <div className="events-page">
      <PageHero title="Temple Events" />

      <main className="container events-listing">
        {loading && (
          <p style={{ textAlign: 'center', padding: '4rem', color: '#888' }}>Loading…</p>
        )}
        {error && (
          <p style={{ textAlign: 'center', padding: '4rem', color: '#d53f41' }}>⚠️ {error}</p>
        )}
        {!loading && !error && (
          <div className="news-grid">
            {events.map((e) => (
              <EventCard key={e.id} e={e} onSelect={setSelectedEventId} />
            ))}
          </div>
        )}
      </main>

      <section className="newsletter">
        <div className="newsletter-inner">
          <div className="newsletter-text">
            <h3>Subscribe To Our Newsletter</h3>
            <p>Stay updated with temple events, festivals, and spiritual programs. Receive timely notifications about upcoming celebrations.</p>
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
