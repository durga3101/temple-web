import React from 'react'

const queries = [
  'temple,festival',
  'prayer,ceremony',
  'hindu,temple',
  'devotion,people',
  'religion,ritual',
  'gods,statue',
  'culture,procession',
  'spiritual,ceremony',
  'worship,temple'
]

// Use Unsplash source API for royalty-free images; queries provide themed images.
const sampleEvents = new Array(9).fill(null).map((_, i) => {
  const unsplash = `https://source.unsplash.com/800x600/?${queries[i % queries.length]}`
  const local = `/assets/events/event-${i + 1}.jpg`
  return {
    id: i + 1,
    title: ['Pray for the world now', 'Lorem ipsum dolor sit', 'Sed augue nulla quis'][i % 3],
    location: ['London', 'Spain', 'India'][i % 3],
    time: ['8:00 pm', '9:00 pm', '8:10 pm'][i % 3],
    date: ['22 Oct', '23 Oct', '25 Oct'][i % 3],
    local,
    unsplash
  }
})

function EventCard({ e }) {
  return (
    <a className="event-card" href="#/event-detail" aria-label={`View details for ${e.title}`}>
      <div className="event-thumb" style={{ backgroundImage: `url(${e.local}), url(${e.unsplash})` }}>
        <div className="event-date">{e.date}</div>
      </div>
      <div className="event-body">
        <div className="meta">
          <span className="loc">{e.location}</span>
          <span className="dot">•</span>
          <span className="time">{e.time}</span>
        </div>
        <h4 className="event-title">{e.title}</h4>
      </div>
    </a>
  )
}

export default function Events() {
  return (
    <div className="events-page">
      <section className="events-hero">
        <div className="events-hero-inner">
          <h2>Events</h2>
          <p>We are a Temple that believes in God and the followers. We are a Temple that believes in Krishna.</p>
        </div>
      </section>

      <main className="container events-listing">
        <div className="grid">
          {sampleEvents.map((e) => (
            <EventCard key={e.id} e={e} />
          ))}
        </div>

        <div className="pagination">
          <button className="page-btn">‹</button>
          <button className="page active">1</button>
          <button className="page">2</button>
          <button className="page">3</button>
          <button className="page">4</button>
          <button className="page">›</button>
        </div>

        <section className="newsletter">
          <div className="newsletter-inner">
            <div className="newsletter-text">
              <h3>Subscribe To Our Newsletter</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            </div>
            <form className="newsletter-form" onSubmit={(ev) => ev.preventDefault()}>
              <input placeholder="Your Email" aria-label="Email" />
              <button className="btn primary">Subscribe</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
