import React from 'react'
import PageHero from '../components/PageHero'
import SocialIcons from '../components/SocialIcons'

export default function Contact() {
  return (
    <div className="contact-page">
      <PageHero 
        title="Contact US"
        // description="Get in touch with us for any inquiries, event registrations, or spiritual guidance. We are here to serve you."
        // breadcrumbs={[
        //   { label: 'Home', path: '#/' },
        //   { label: 'Contact Us' }
        // ]}
        // backgroundImage="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="container contact-main">
        <aside className="contact-cards">
          <div className="contact-card accent-card">
            <div className="card-icon">📍</div>
            <div>
              <h4>Temple Address</h4>
              <p>Sita Rama Chandra Swami Devalayam</p>
              <span>Kakatiya Nagar, Ramachandrapuram</span>
              <span>Sangareddya District, Telangana</span>
            </div>
          </div>
          <div className="contact-card dark-card">
            <div className="card-icon">📞</div>
            <div>
              <h4>Contact Number</h4>
              <p>For event registration and inquiries</p>
              <span className="contact-phone">+91 9849918520</span>
            </div>
          </div>
          <div className="contact-card light-card">
            <div className="card-icon">📧</div>
            <div>
              <h4>Email Address</h4>
              {/* <p>Send us your queries anytime</p> */}
              <span className="contact-email">sitaramachandradevalayam@gmail.com</span>
              <div className="socials" style={{ marginTop: '12px' }}>
                <SocialIcons />
              </div>
            </div>
          </div>
          <div className="contact-card info-card">
            <div className="card-icon">⏰</div>
            <div>
              <h4>Temple Timings</h4>
              <p>Morning: 6:00 AM - 12:00 PM</p>
              <span>Evening: 6:00 PM - 9:00 PM</span>
              <span className="timing-note">Daily Darshan & Puja</span>
            </div>
          </div>
        </aside>

        <div className="contact-form-card">
          <div className="contact-form-header">
            <h3>Send Us a Message</h3>
            <p>Fill out the form below and we'll get back to you as soon as possible</p>
          </div>
          <form className="contact-form" onSubmit={(ev) => ev.preventDefault()}>
            <div className="contact-grid">
              <label className="field">
                <span>Full Name *</span>
                <input placeholder="Enter your name" required />
              </label>
              <label className="field">
                <span>Email Address *</span>
                <input placeholder="Enter your email" type="email" required />
              </label>
              <label className="field">
                <span>Phone Number</span>
                <input placeholder="Enter your phone" type="tel" />
              </label>
              <label className="field">
                <span>Subject *</span>
                <select required>
                  <option value="">Select a subject</option>
                  <option>Pooja Registration</option>
                  <option>Donations</option>
                  <option>Volunteer Opportunities</option>
                  <option>General Inquiry</option>
                  <option>Spiritual Guidance</option>
                </select>
              </label>
            </div>
            <label className="field full">
              <span>Your Message *</span>
              <textarea rows="6" placeholder="Write your message here..." required />
            </label>
            <button className="btn primary submit-btn" type="submit">
              <span>Send Message</span>
              <span className="btn-icon">→</span>
            </button>
          </form>
        </div>
      </section>

      <section className="container contact-map">
        <div className="map-header">
          <h3>Find Us Here</h3>
          <p>Visit our temple for darshan, events, and spiritual programs</p>
        </div>
        <iframe
          title="Temple location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=78.0,17.0,78.5,17.5&amp;layer=mapnik"
          loading="lazy"
        />
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
