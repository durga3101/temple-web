import React from 'react'

export default function EventDetail() {
  return (
    <div className="event-detail-page">
      <section className="event-detail-hero">
        <div className="event-detail-hero-overlay">
          <div className="event-detail-hero-inner">
            <div>
              <h1>Event Detail</h1>
              <p>We are a Temple that believes in God and the followers. We are a Temple that believes in Lord Krishna.</p>
            </div>
            <div className="event-detail-crumb">
              <span>Home</span>
              <span className="sep">/</span>
              <span className="active">Event Detail</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container event-detail-info">
        <article className="info-card accent">
          <div className="info-icon">D</div>
          <div>
            <h4>Date &amp; Time</h4>
            <p>8:00 am to 12:30 pm</p>
            <span>22 March, 2024</span>
          </div>
        </article>
        <article className="info-card dark">
          <div className="info-icon">L</div>
          <div>
            <h4>Location</h4>
            <p>13/D, Amet Street City Tower,</p>
            <span>New York USA</span>
          </div>
        </article>
        <article className="info-card light">
          <div className="info-icon">S</div>
          <div>
            <h4>Semper Porta</h4>
            <p>Vestibulum quis odio ut dui malesuada ornare ut id tellus.</p>
            <span className="phone">+123 123 4567 890</span>
          </div>
        </article>
      </section>

      <section className="container event-detail-body">
        <div className="event-detail-content">
          <h2>Pray for the world</h2>
          <p>
            Vestibulum quis odio ut dui malesuada ornare ut id tellus. Curabitur viverra at magna ac bibendum. Aliquam erat volutpat.
            Proin rhoncus est ac ipsum varius fermentum. Integer a odio ornare mauris pharetra suscipit. Integer vulputate elit erat.
          </p>
          <p className="highlight">
            Nunced dolor mi, accumsan quis ante id, eleifend suscipit purus. Praesent augue eros, consectetur eu eleifend in, eget condimentum auctor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="event-detail-image" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <a className="btn primary" href="#/event-detail">Register Now</a>
        </div>

        <aside className="event-detail-sidebar">
          <div className="sidebar-card">
            <h4>Semper Porta</h4>
            <p>Vestibulum quis odio ut dui malesuada ornare ut id tellus. Curabitur viverra at magna ac bibendum.</p>
            <div className="phone">+123 123 4567 890</div>
            <div className="socials">
              <a href="#/">Fb</a>
              <a href="#/">Tw</a>
              <a href="#/">In</a>
              <a href="#/">Yt</a>
            </div>
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
