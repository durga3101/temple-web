import React from 'react'
import PageHero from '../components/PageHero'

export default function EventDetail() {
  return (
    <div className="event-detail-page">
      <PageHero 
        title="Maha Shivaratri Grand Celebration"
        description="Join us for the grand three-day Maha Shivaratri celebration with special rituals, processions, and divine blessings."
        // backgroundImage="/assets/photos/siva.jpeg"
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

          <p>
            Join us in this divine three-day celebration of Maha Shivaratri. Experience the spiritual energy through 
            sacred fire ceremonies, divine Abhishekams, and the rare opportunity to witness Lingodbhava Kala. 
            Free Sparsha Darshan available for all devotees. Don't miss the grand Kalyana Mahotsavam on the final day.
          </p>

          <h3>Three Day Grand Celebration Schedule</h3>
          
          <div className="event-schedule">
            <div className="schedule-day">
              <h4>🗓️ Day 1 - March 14, 2026 (Friday)</h4>
              <ul>
                <li><strong>🔱 9:00 AM:</strong> Ganapati Puja & Punyahavachanam - Begin the sacred celebrations with Ganapati Puja and purification rituals</li>
                <li><strong>🔥 10:00 AM:</strong> Maha Shivaratri Rudra Homam - Powerful fire ceremony with Rudra mantras to invoke Lord Shiva's grace and blessings</li>
              </ul>
            </div>

            <div className="schedule-day">
              <h4>🗓️ Day 2 - March 15, 2026 (Saturday) - Maha Shivaratri</h4>
              <ul>
                <li><strong>🌅 3:30 AM – 4:30 AM:</strong> Ganapati Homam - Early morning homam during brahma muhurta invoking Lord Ganesha's grace</li>
                <li><strong>🪔 From 5:00 AM:</strong> Abhishekam & Special Pujas - Divine Abhishekam with milk, honey, ghee, and holy water accompanied by Vedic chants</li>
                <li><strong>🌟 Until 1:30 PM:</strong> Free Swarna Darshan - Continuous free darshan for all devotees</li>
                <li><strong>🌟 4:00 PM – 9:00 PM:</strong> Free Swarna Darshan - Evening darshan session with deity in golden attire</li>
                <li><strong>🌙 11:30 PM – 12:30 AM:</strong> Lingodbhava Kala Abhishekam - Sacred midnight Abhishekam during the most auspicious time when Lord Shiva manifests as cosmic pillar of light</li>
              </ul>
            </div>

            <div className="schedule-day">
              <h4>🗓️ Day 3 - March 16, 2026 (Sunday)</h4>
              <ul>
                <li><strong>🚩 From 10:30 AM:</strong> Ishanya Devatas Kalyana Mahotsavam - Grand celestial wedding ceremony with traditional music and offerings</li>
                <li>Distribution of blessed prasadam to all devotees</li>
              </ul>
            </div>
          </div>

          <div className="event-detail-image" style={{ backgroundImage: 'url(/assets/poster.jpeg), url(https://images.unsplash.com/photo-1604608672325-f41a9b5e7e2f?auto=format&fit=crop&w=1200&q=80)' }} />

          <h3>Featured Events Highlights</h3>
          <div className="registration-info">
            <ul>
              <li><strong>Seva Contribution:</strong> ₹1116/- Devotees who contribute can participate in the Lingodbhava Kalam and Shivaratri Kalyanam.</li>
              <li><strong>Rudra Homam:</strong> ₹2500/- (3 hours duration, includes all offerings)</li>
              <li><strong>Kalyana Mahotsavam:</strong> ₹2500/- (500 participants capacity)</li>
              <li><strong>Anna Prasada Seva:</strong> ₹5116/- Devotees who contribute can participate in the Lingodbhava Kalam and Shivaratri Kalyanam.</li>
            </ul>
          </div>

          <h3>📌 Note</h3>
          <p>
            On the day of Shivaratri and Kalyanotsavam, Anna Prasadam will be served to all devotees.
          </p>
          <p>
            For further details, please contact the temple priest.
          </p>
          <p>
            <strong>Jai Shri Ram 🚩🙏</strong>
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
              <a href="https://www.instagram.com/kakatiyanagarramalayam/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="6" fill="url(#ig-gradient-detail)"/>
                  <defs>
                    <linearGradient id="ig-gradient-detail" x1="0" y1="24" x2="24" y2="0">
                      <stop offset="0%" stopColor="#FD5949"/>
                      <stop offset="50%" stopColor="#D6249F"/>
                      <stop offset="100%" stopColor="#285AEB"/>
                    </linearGradient>
                  </defs>
                  <rect x="7" y="7" width="10" height="10" rx="2" stroke="white" strokeWidth="1.5" fill="none"/>
                  <circle cx="12" cy="12" r="2.5" stroke="white" strokeWidth="1.5" fill="none"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="white"/>
                </svg>
              </a>
              <a href="https://wa.me/919849918520" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="11" fill="#25D366"/>
                  <path d="M17.5 14.5c-.3 0-1.8-.8-2-.9-.2-.1-.4-.1-.5.1-.2.2-.6.9-.8 1-.1.2-.3.2-.5.1-.3-.1-1-.4-2-1.2-.7-.7-1.2-1.5-1.4-1.8-.1-.3 0-.4.1-.5l.4-.5c.1-.1.1-.2.2-.4 0-.1 0-.3-.1-.4-.1-.1-.5-1.3-.7-1.7-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3 1 2.5c.1.2 1.6 2.5 4 3.5.5.2 1 .3 1.3.4.6.2 1.1.2 1.5.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3z" fill="white"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@sitaramachandradevalayam" target="_blank" rel="noreferrer" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="5" fill="#FF0000"/>
                  <path d="M9 8L16 12L9 16V8Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="sidebar-card">
            <h4>Important Notes</h4>
            <ul className="sidebar-notes">
              <li>Free Swarna Darshan for all devotees</li>
              <li>Early morning programs start at 3:30 AM</li>
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
