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
  'worship,temple',
  'shiva,shivaratri',
  'hindu,celebration'
]

// Events from Maha Shivaratri celebration poster (Feb 14-16, 2026)
const sampleEvents = [
  {
    id: 1,
    title: 'Sri Chakrarchana Snanam',
    description: 'Grand Sri Chakrarchana Snanam ceremony with participation of devotees. Special prayers and rituals will be conducted with traditional Vedic chanting. Over 2500 devotees expected to participate in this sacred event.',
    author: 'Temple Committee',
    category: 'Religious Ceremony',
    date: 'February 14, 2026',
    time: 'Morning',
    local: '/assets/events/event-1.jpg',
    unsplash: 'https://source.unsplash.com/800x600/?hindu,prayer'
  },
  {
    id: 2,
    title: 'Maha Shivaratri - Swamiji Visit',
    description: 'Special visit by revered Swamiji on Maha Shivaratri. Divine darshan starting at 3:00 PM followed by spiritual discourse at 4:00 PM. Devotees can receive blessings and participate in the sacred ceremonies.',
    author: 'Temple Committee',
    category: 'Maha Shivaratri',
    date: 'February 15, 2026',
    time: '3:00 PM - 4:00 PM',
    local: '/assets/events/event-2.jpg',
    unsplash: 'https://source.unsplash.com/800x600/?shiva,shivaratri'
  },
  {
    id: 3,
    title: 'Grama Yatram (Village Procession)',
    description: 'Traditional village procession for Maha Shivaratri starting at 3:00 PM. Join the grand procession with devotional music, bhajans, and kirtan. Three hours of divine celebration with community participation. Registration: ₹1100/-',
    author: 'Temple Committee',
    category: 'Maha Shivaratri',
    date: 'February 15, 2026',
    time: '3:00 PM',
    local: '/assets/events/event-3.jpg',
    unsplash: 'https://source.unsplash.com/800x600/?procession,festival'
  },
  {
    id: 4,
    title: 'Maha Shivaratri Evening Rituals',
    description: 'Evening special puja and abhishekam ceremonies at 5:00 PM. Participate in sacred offerings, Rudra Abhishekam, and receive divine blessings. Special prasadam will be distributed to all devotees.',
    author: 'Temple Committee',
    category: 'Maha Shivaratri',
    date: 'February 15, 2026',
    time: '5:00 PM',
    local: '/assets/events/event-4.jpg',
    unsplash: 'https://source.unsplash.com/800x600/?temple,ritual'
  },
  {
    id: 5,
    title: 'Maha Shivaratri Celebrations',
    description: 'Complete day of Maha Shivaratri celebrations with continuous bhajans, kirtans, and special pujas. Experience divine energy through night-long devotional programs. Donation: ₹350/- per family for participation.',
    author: 'Temple Committee',
    category: 'Maha Shivaratri',
    date: 'February 15, 2026',
    time: 'All Day',
    local: '/assets/events/event-5.jpg',
    unsplash: 'https://source.unsplash.com/800x600/?devotion,celebration'
  },
  {
    id: 6,
    title: 'Special Puja & Homam',
    description: 'Grand homam ceremony at 10:30 AM with Vedic rituals performed by learned priests. Sacred fire offerings with mantras for peace and prosperity. Special arrangements for 2500 devotees. Participation fee: ₹1100/-',
    author: 'Temple Committee',
    category: 'Religious Ceremony',
    date: 'February 16, 2026',
    time: '10:30 AM',
    local: '/assets/events/event-6.jpg',
    unsplash: 'https://source.unsplash.com/800x600/?fire,ritual'
  },
  {
    id: 7,
    title: 'Sansarga Bhajan Program',
    description: 'Community bhajan gathering with devotional singing and spiritual discourse. Join fellow devotees in collective prayer and meditation. Light refreshments will be provided. Registration: ₹1100/-',
    author: 'Temple Committee',
    category: 'Devotional Program',
    date: 'February 16, 2026',
    time: 'Evening',
    local: '/assets/events/event-7.jpg',
    unsplash: 'https://source.unsplash.com/800x600/?bhajan,devotional'
  },
  {
    id: 8,
    title: 'Shani Pradosham',
    description: 'Special Shani Pradosham prayers at 11:15 AM. Receive blessings and participate in the sacred rituals dedicated to Lord Shani. Special abhishekam and offerings will be performed.',
    author: 'Temple Committee',
    category: 'Religious Ceremony',
    date: 'February 16, 2026',
    time: '11:15 AM',
    local: '/assets/events/event-8.jpg',
    unsplash: 'https://source.unsplash.com/800x600/?temple,prayer'
  },
  {
    id: 9,
    title: 'Grand Maha Prasadam',
    description: 'Distribution of blessed prasadam to all devotees after the three-day Maha Shivaratri celebrations. Special arrangements for prasadam distribution with traditional offerings and sweets.',
    author: 'Temple Committee',
    category: 'Temple Event',
    date: 'February 16, 2026',
    time: 'After Ceremonies',
    local: '/assets/events/event-9.jpg',
    unsplash: 'https://source.unsplash.com/800x600/?prasadam,food'
  }
].map((event) => ({
  ...event,
  unsplash: `${event.unsplash}&${Date.now()}`
}))

function EventCard({ e }) {
  const handleCardClick = (event) => {
    // Allow clicking on specific links to work normally
    if (event.target.tagName === 'A') return;
    window.location.hash = '/event-detail';
  };

  return (
    <article className="news-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="news-image-wrapper">
        <div className="news-image" style={{ backgroundImage: `url(${e.local}), url(${e.unsplash})` }}>
          <div className="news-overlay"></div>
        </div>
      </div>
      <div className="news-content">
        <h3 className="news-title">
          <a href="#/event-detail" onClick={(e) => e.stopPropagation()}>{e.title}</a>
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
      </div>
    </article>
  )
}

export default function Events() {
  return (
    <div className="events-page">
      <PageHero 
        title="Mahasivarati Events"
        description="Join us in celebrating divine festivals and spiritual ceremonies throughout the year"
        // breadcrumbs={[
        //   { label: 'Home', path: '#/' },
        //   { label: 'Events' }
        // ]}
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
