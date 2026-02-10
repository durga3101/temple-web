import React from 'react'

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <div className="contact-hero-inner">
            <div>
              <h1>Contact Us</h1>
              <p>We are a Temple that believes in God and the followers. We are a Temple that believes in Krishna.</p>
            </div>
            <div className="contact-crumb">
              <span>Home</span>
              <span className="sep">/</span>
              <span className="active">Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container contact-main">
        <aside className="contact-cards">
          <div className="contact-card">
            <div className="card-icon">A</div>
            <div>
              <h4>Office address</h4>
              <p>Semper Agency Network 30</p>
              <span>Westbourne Nulla West Bengal 23</span>
              <span>GMH</span>
            </div>
          </div>
          <div className="contact-card">
            <div className="card-icon">T</div>
            <div>
              <h4>Telephone number</h4>
              <p>(123) 456-7890</p>
              <span>(123) 456-7890</span>
            </div>
          </div>
          <div className="contact-card">
            <div className="card-icon">M</div>
            <div>
              <h4>Mail address</h4>
              <p>info@gmail.com</p>
              <span>info@gmail.com</span>
            </div>
          </div>
        </aside>

        <div className="contact-form-card">
          <form className="contact-form" onSubmit={(ev) => ev.preventDefault()}>
            <div className="contact-grid">
              <label className="field">
                <span>Name (required)</span>
                <input placeholder="Your Name" required />
              </label>
              <label className="field">
                <span>Email address (required)</span>
                <input placeholder="Mail" type="email" required />
              </label>
              <label className="field">
                <span>Phone (optional)</span>
                <input placeholder="Your Phone" />
              </label>
              <label className="field">
                <span>Services (required)</span>
                <select required>
                  <option value="">Select Services</option>
                  <option>Events</option>
                  <option>Donations</option>
                  <option>Volunteer</option>
                </select>
              </label>
            </div>
            <label className="field full">
              <span>Your message</span>
              <textarea rows="5" placeholder="Type Message" />
            </label>
            <button className="btn primary" type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <section className="container contact-map">
        <iframe
          title="Temple location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-80.405%2C25.711%2C-80.119%2C25.882&amp;layer=mapnik"
          loading="lazy"
        />
      </section>

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
