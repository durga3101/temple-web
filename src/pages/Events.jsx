import React from 'react'
import PageHero from '../components/PageHero'

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
const sampleEvents = new Array(6).fill(null).map((_, i) => {
  const unsplash = `https://source.unsplash.com/800x600/?${queries[i % queries.length]}`
  const local = `/assets/events/event-${i + 1}.jpg`
  return {
    id: i + 1,
    title: [
      'Expecting New Issued Cases',
      'All We\'ve Discovered By Now',
      'We Who Believe In God',
      'Morning Prayer Service',
      'Community Gathering',
      'Spiritual Meditation'
    ][i % 6],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    author: ['Lorem Porta', 'Dolor Amet', 'Ipsum Quis', 'Sem Nulla', 'Ved Sharma', 'Krishna Das'][i % 6],
    category: 'Temple, Pastor',
    date: ['May 26, 2024', 'May 30, 2024', 'May 29, 2024', 'June 1, 2024', 'June 5, 2024', 'June 10, 2024'][i % 6],
    local,
    unsplash
  }
})

function EventCard({ e }) {
  return (
    <article className="news-card">
      <div className="news-image-wrapper">
        <a href="#/event-detail" className="news-image" style={{ backgroundImage: `url(${e.local}), url(${e.unsplash})` }}>
          <div className="news-overlay"></div>
        </a>
      </div>
      <div className="news-content">
        <h3 className="news-title">
          <a href="#/event-detail">{e.title}</a>
        </h3>
        <p className="news-description">{e.description}</p>
        <div className="news-meta">
          <div className="news-author-section">
            <span className="author-label">By</span>
            <a href="#/author" className="author-name">{e.author}</a>
            <div className="author-avatar"></div>
          </div>
          <div className="news-info">
            <span className="news-category">{e.category}</span>
            <span className="news-divider">|</span>
            <span className="news-date">{e.date}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Events() {
  return (
    <div className="events-page">
      <PageHero 
        title="News Feed"
        breadcrumbs={[
          { label: 'Home', path: '#/' },
          { label: 'News Feed' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1526481280698-4caa9a3b5d33?auto=format&fit=crop&w=1400&q=80"
      />

      <main className="container events-listing">
        <div className="news-grid">
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
          <button className="page-btn">›</button>
        </div>
      </main>

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
    </div>
  )
}
