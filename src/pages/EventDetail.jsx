import React from 'react'
import PageHero from '../components/PageHero'

export default function EventDetail() {
  return (
    <div className="event-detail-page">
      <PageHero 
        title="Maha Shivaratri Grand Celebration"
        description="Join us for the grand three-day Maha Shivaratri celebration with special rituals, processions, and divine blessings."
        breadcrumbs={[
          { label: 'Home', path: '#/' },
          { label: 'Events', path: '#/events' },
          { label: 'Maha Shivaratri' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1500930288181-cd58fbc6b2cc?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="container event-detail-info">
        <article className="info-card accent">
          <div className="info-icon">📅</div>
          <div>
            <h4>Date &amp; Time</h4>
            <p>Three Day Celebration</p>
            <span>14-16 February, 2026</span>
          </div>
        </article>
        <article className="info-card dark">
          <div className="info-icon">📍</div>
          <div>
            <h4>Location</h4>
            <p>Kaakutiya Nagar, Ramachandrapuram</p>
            <span>Sangareddya District</span>
          </div>
        </article>
        <article className="info-card light">
          <div className="info-icon">🕉️</div>
          <div>
            <h4>Special Programs</h4>
            <p>Swamiji Darshan, Grama Yatram, Sacred Rituals</p>
            <span className="phone">Contact for Registration</span>
          </div>
        </article>
      </section>

      <section className="container event-detail-body">
        <div className="event-detail-content">
          <h2>శ్రీ సీతా రామచంద్ర స్వామి దేవాలయం - 🔱 మహాశివరాత్రి ఉత్సవములు 🔱 </h2>
          
          {/* <p className="highlight">
            జై శ్రీ రామ్ 🚩 🔱 మహాశివరాత్రి ఉత్సవములు  🔱 
          </p> */}

          <h3>Three Day Grand Celebration Schedule</h3>
          
          <div className="event-schedule">
            <div className="schedule-day">
              <h4>🗓️ Day 1 - February 14, 2026 (Saturday)</h4>
              <ul>
                <li><strong>Muhurat Snanam:</strong> Maha Muhurat Abhishekam with 2500+ devotees participation</li>
                <li>Traditional Vedic ceremonies and sacred rituals</li>
              </ul>
            </div>

            <div className="schedule-day">
              <h4>🗓️ Day 2 - February 15, 2026 (Sunday) - Maha Shivaratri</h4>
              <ul>
                <li><strong>3:00 PM:</strong> Swamiji Arrival and Divine Darshan</li>
                <li><strong>4:00 PM:</strong> Special Satsang and Blessings</li>
                <li><strong>3:00 PM onwards:</strong> Grama Yatram (Village Procession) - 3 Hours Duration</li>
                <li><strong>5:00 PM:</strong> Evening Special Puja and Abhishekam</li>
                <li><strong>All Day:</strong> Continuous Bhajans and Kirtans</li>
              </ul>
            </div>

            <div className="schedule-day">
              <h4>🗓️ Day 3 - February 16, 2026 (Monday)</h4>
              <ul>
                <li><strong>10:30 AM:</strong> Grand Homam with Vedic Rituals</li>
                <li><strong>11:15 AM:</strong> Shani Pradosham Special Prayers</li>
                <li><strong>Evening:</strong> Sansarga Bhajan Program and Prasadam Distribution</li>
              </ul>
            </div>
          </div>

          <div className="event-detail-image" style={{ backgroundImage: 'url(/assets/poster.jpeg), url(https://images.unsplash.com/photo-1604608672325-f41a9b5e7e2f?auto=format&fit=crop&w=1200&q=80)' }} />

          <h3>Registration Details</h3>
          <div className="registration-info">
            <ul>
              <li><strong>Muhurat Snanam:</strong> 2500 slots available - First come, first served</li>
              <li><strong>Grama Yatram:</strong> ₹1100/- (3 hours duration, includes all offerings)</li>
              <li><strong>Family Participation:</strong> ₹350/- for day-long celebrations</li>
              <li><strong>Homam & Special Puja:</strong> ₹1100/- (2500 participants capacity)</li>
              <li><strong>Sansarga Bhajan:</strong> ₹1100/- per person</li>
            </ul>
          </div>

          {/* <p>
            మీ కుటుంబ సభ్యులతో  కలిసి ఆలయానికి విచ్చేసి, పవిత్ర మహాశివరాత్రి కార్యక్రమాలలో పాల్గొని శివ కృపను పొందండి.
          </p> */}

          <p>
            Join us in this divine celebration and receive blessings from our revered Swamiji. Experience the spiritual 
            fervor of Maha Shivaratri with traditional rituals, sacred ceremonies, and community participation. Limited 
            slots available for special programs - register early to secure your place.
          </p>

          <a className="btn primary" href="#/contact">Register Now</a>
        </div>

        <aside className="event-detail-sidebar">
          <div className="sidebar-card">
            <h4>Contact Information</h4>
            <p>For registration and more details, please contact the temple office.</p>
            {/* <div className="phone">📞 +123 123 4567 890</div> */}
            <div className="phone">📧 sitaramachandradevalayam@gmail.com</div>
            <div className="socials">
              <a href="#/" aria-label="WhatsApp">WA</a>
              <a href="#/" aria-label="Instagram">In</a>
              <a href="#/" aria-label="YouTube">Yt</a>
            </div>
          </div>
          <div className="sidebar-card">
            <h4>Important Notes</h4>
            <ul className="sidebar-notes">
              <li>Limited slots for Muhurat Snanam</li>
              <li>Pre-registration recommended</li>
              <li>Traditional attire preferred</li>
              <li>Prasadam will be distributed to all</li>
            </ul>
          </div>
          <div className="sidebar-map">
            <iframe
              title="Event location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-80.405%2C25.711%2C-80.119%2C25.882&amp;layer=mapnik"
              loading="lazy"
            />
          </div>
        </aside>
      </section>

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
