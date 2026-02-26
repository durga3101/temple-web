import React from 'react'
import PageHero from '../components/PageHero'
import SocialIcons from '../components/SocialIcons'

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
            <span>19-28 March, 2026</span>
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
          <h2> 🚩 Vasantha Navaratri Utsavam 2026 🕉️ </h2>
          
          <p>
            Join us in this divine celebration of Vasantha Navaratri. Experience the spiritual energy through 
            sacred fire ceremonies, divine Abhishekams, and the rare opportunity to witness the Darshan available for all devotees.
            Don't miss the grand Kalyana Mahotsavam.
          </p>

          <h3>Vasantha Navaratri Utsavam 2026 Celebration Schedule</h3>
          
          <div className="event-schedule">
             <div className="schedule-day">
              <h4>🗓️ Day 1 to 9 - March 19 to March 28, 2026 </h4>
              <ul>
                <li><strong>🌅 6:30 AM:</strong>🙏 Panchamruta Abhishekam - Devotees can register their Gotra and family names for special sankalpam during the festival.</li>
                <li><strong>🌅 6:30 AM:</strong> 🕉️ Vastra Alankara Seva - Offering new sacred garments to the deity as a mark of devotion.</li>
              </ul>
            </div>

            <div className="event-detail-image" style={{ backgroundImage: 'url(/assets/hero.jpeg), url(https://images.unsplash.com/photo-1604608672325-f41a9b5e7e2f?auto=format&fit=crop&w=1200&q=80)' }} />

            <div className="schedule-day">
              <h4>🗓️ Day 1 - March 19, 2026 (Thursday)</h4>
              <ul>
                <li><strong>6:00 PM:</strong> 📖 Panchanga Shravanam (Ugadi) - A sacred discourse explaining the yearly Panchangam (Hindu almanac).</li>
                <li><strong>7:00 PM:</strong> 🌸 Sahasra Silver Pushparchana -  A divine archana performed with silver flowers while chanting the 1000 holy names of the Lord.</li>
              </ul>
            </div>

            <div className="schedule-day">
              <h4>🗓️ Day 5 - March 23, 2026 (Monday) </h4>
              <ul>
                <li><strong>🌅 10:00 AM:</strong> 🌺 Kumkumarchana for Seetha Devi - All women are invited to seek blessings for family harmony and well-being.</li>
              </ul>
            </div>

            <div className="schedule-day">
              <h4>🗓️ Day 6 - March 25, 2026 (Wednesday)</h4>
              <ul>
                <li><strong>🌅 From 10:00 AM:</strong> 🔥 Sri Lakshmi Sudarshana Homam - A powerful homam invoking Sri Lakshmi and Sudarshana for protection and prosperity. </li>
              </ul>
            </div>
            
            <div className="schedule-day">
              <h4>🗓️ Day 7 - March 26, 2026 (Thursday)</h4>
              <ul>
                <li><strong>🌅 From 10:00 AM:</strong> 🎉 Swami Edurukolu - A ceremonial procession welcoming the deity with music, chants, and devotion.</li>
              </ul>
            </div>
            
            <div className="schedule-day">
              <h4>🗓️ Day 8 - March 27, 2026 (Friday)</h4>
              <ul>
                <li><strong>🌅 From 11:00 AM:</strong> 🚩 Sri Rama Kalyana Mahotsavam - The divine wedding ceremony of Lord Sri Rama and Goddess Sita.</li>
                <li><strong>🌅 From 07:00 PM:</strong> 🎉 Swami Dolostavam - The deity is gently placed on a decorated swing amidst devotional singing.</li>
              </ul>
            </div>
            
            <div className="schedule-day">
              <h4>🗓️ Day 9 - March 28, 2026 (Saturday)</h4>
              <ul>
                <li><strong>🚩 From 10:00 AM:</strong> 🌼 Pushpa Yagam – 54 Varieties - A special pooja offering 54 different types of flowers to the Lord.</li>
                <li><strong>🚩 From 06:00 PM:</strong> 🛕 Hanumad, Garuda & Ratha Utsavam - The deity is taken in a grand procession on sacred vahanas and chariot.</li>
              </ul>
            </div>
          </div>

          <h3>Featured Events Highlights</h3>
          <div className="registration-info">
            <ul>
              <li><strong>Seva Contribution:</strong> ₹516/- Devotees can participate by Gotra Nama registration for all 9 days.</li>
              <li><strong>🕉️ Vastra Alankara Seva:</strong> ₹3100/- (includes all offerings)</li>
              <li><strong>🔥 Sri Lakshmi Sudarshana Homam</strong> ₹2116/- (500 participants capacity)</li>
              <li><strong>🚩 Sri Rama Kalyana Mahotsavam</strong> ₹2500/- Devotees who contribute can participate Sri Rama Navami celestial wedding celebration.</li>
              <li><strong>🍛 Anna Prasada Seva:</strong> ₹5116/- Devotees who contribute can participate in the All Events.</li>
            </ul>
          </div>

          <h3>📌 Note</h3>
          <p>
            On the day of Kalyanotsavam, Anna Prasadam will be served to all devotees.
          </p>
          <p>
            For further details, please contact the temple priest.
          </p>
          <p>
            <strong>Jai Shri Ram 🚩🙏</strong>
          </p>

          <a className="btn primary" href="#/payment">Register Now</a>
        </div>

        <aside className="event-detail-sidebar">
          <div className="sidebar-card">
            <h4>🙏 Register &amp; Participate</h4>
            <p>Secure your spot for the sacred sevas and special programs. Limited participation slots available for Kalyana Mahotsavam and other events.</p>
            <a className="btn primary" href="#/payment" style={{ display: 'block', textAlign: 'center', marginTop: '0.75rem' }}>
              Register Now
            </a>
          </div>
          <div className="sidebar-card">
            <h4>Contact Information</h4>
            <p>For registration and more details, please contact the temple office.</p>
            {/* <div className="phone">📞 +123 123 4567 890</div> */}
            <div className="phone">📧 sitaramachandradevalayam@gmail.com</div>
            <div className="socials">
              <SocialIcons />
            </div>
          </div>
          <div className="sidebar-card">
            <h4>Important Notes</h4>
            <ul className="sidebar-notes">
              <li>Free Sparsha Darshan for all devotees</li>
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
