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

// Featured Events - Maha Shivaratri Celebration (March 14-16, 2026)
const sampleEvents = [
  {
    id: 1,
    title: '🔱 Ganapati Pooja',
    description: 'Begin the sacred celebrations with Ganapati Puja and purification rituals. This auspicious ceremony marks the beginning of Maha Shivaratri festivities with traditional Vedic chanting and offerings to Lord Ganesha',
    author: 'Temple Committee',
    category: 'Maha Shivaratri',
    date: 'Feb 14, 2026',
    time: '9:00 AM',
    price: 0,
    local: '/assets/photos/ganesh-1.jpeg',
    unsplash: 'https://source.unsplash.com/800x600/?ganesha,prayer'
  },
  {
    id: 2,
    title: '🔥 Maha Mruthyunjaya Homam',
    description: 'Seek divine blessings through the powerful Rudra Homam on Maha Shivaratri. Sacred fire ceremony performed with Rudra mantras to invoke Lord Shiva\'s grace and blessings for peace, prosperity, and spiritual upliftment.',
    author: 'Temple Committee',
    category: 'Maha Shivaratri',
    date: 'Feb 14, 2026',
    time: '10:00 AM',
    price: 2500,
    local: '/assets/photos/siva.jpeg',
    unsplash: 'https://source.unsplash.com/800x600/?fire,ritual,shiva'
  },
  {
    id: 3,
    title: '🌅 Ganapati Homam',
    description: 'Early morning homam invoking Lord Ganesha\'s grace. This sacred ritual performed during the auspicious brahma muhurta brings divine blessings and removes obstacles from the spiritual path.',
    author: 'Temple Committee',
    category: 'Maha Shivaratri',
    date: 'Feb 14, 2026',
    time: '9:00 AM',
    price: 1116,
    local: '/assets/photos/Ganeshji.jpeg',
    unsplash: 'https://source.unsplash.com/800x600/?ganesha,homam'
  },
  {
    id: 4,
    title: '🪔 Abhishekam & Special Pujas',
    description: 'Divine Abhishekam and special worship ceremonies throughout the day. Experience the divine energy as Lord Shiva is bathed with sacred offerings including milk, honey, ghee, and holy water accompanied by Vedic chants.',
    author: 'Temple Committee',
    category: 'Maha Shivaratri',
    date: 'Feb 15, 2026',
    time: 'From 5:00 AM',
    price: 1116,
    local: '/assets/photos/siva2.jpeg',
    unsplash: 'https://source.unsplash.com/800x600/?abhishekam,shiva'
  },
  {
    id: 5,
    title: '🌟 Free Sparsha Darshan',
    description: 'Continuous free darshan for all devotees throughout the day. Special timing: Until 1:30 PM and from 4:00 PM to 9:00 PM. All devotees are welcome to have blessed darshan of the deity adorned in golden attire without any charges.',
    author: 'Temple Committee',
    category: 'Maha Shivaratri',
    date: 'Feb 15, 2026',
    time: 'Until 1:30 PM | 4:00 PM – 9:00 PM',
    price: 0,
    local: '/assets/photos/siva-3.jpeg',
    unsplash: 'https://source.unsplash.com/800x600/?temple,darshan'
  },
  {
    id: 6,
    title: '🌙 Lingodbhava Kala Abhishekam',
    description: 'Sacred midnight Abhishekam during Lingodbhava Kalam, the most auspicious time of Maha Shivaratri when Lord Shiva is believed to manifest in the form of a cosmic pillar of light. Experience this divine moment with special rituals.',
    author: 'Temple Committee',
    category: 'Maha Shivaratri',
    date: 'Feb 15, 2026',
    time: 'Until 11:30 PM',
    price: 1116,
    local: '/assets/photos/siva-4.jpeg',
    unsplash: 'https://source.unsplash.com/800x600/?shivalingam,night'
  },
  {
    id: 7,
    title: '🚩 Ishanya Devatas Kalyana Mahotsavam',
    description: 'Grand celestial wedding ceremony of Ishanya Devatas. Witness the divine celebration as we perform the sacred marriage rituals with traditional ceremonies, music, and offerings. A blessed occasion for all devotees to participate in this auspicious event.',
    author: 'Temple Committee',
    category: 'Special Ceremony',
    date: 'Feb 16, 2026',
    time: 'From 10:30 AM',
    price: 2500,
    local: '/assets/photos/siva-5.jpeg',
    unsplash: 'https://source.unsplash.com/800x600/?temple,marriage,ceremony'
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
        <div className="event-action" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
          <div className="event-price" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#d53f41' }}>
            {e.price === 0 ? 'FREE' : `₹${e.price}`}
          </div>
          <button 
            className="btn primary" 
            style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
            onClick={(event) => {
              event.stopPropagation();
              if (e.price === 0) {
                alert('No registration required - this event is free!');
              } else {
                window.location.hash = '/payment';
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
  return (
    <div className="events-page">
      <PageHero 
        title="Mahasivarati Events"
        // description="Join us in celebrating divine festivals and spiritual ceremonies throughout the year"
        // breadcrumbs={[
        //   { label: 'Home', path: '#/' },
        //   { label: 'Events' }
        // ]}
        // backgroundImage="https://images.unsplash.com/photo-1526481280698-4caa9a3b5d33?auto=format&fit=crop&w=1400&q=80"
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
