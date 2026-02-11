import React from 'react'

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80" 
              alt="Temple" 
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?auto=format&fit=crop&w=800&q=80'
              }}
            />
          </div>
          <div className="about-content">
            <h2>We Are A Temple That Believes In God.</h2>
            <p className="about-intro">
              We are a Temple that belives in Krishna and the followers and We are 
              a Temple that belives in Krishna
            </p>
            <div className="about-features">
              <div className="about-feature-item">
                <div className="about-feature-icon">🤝</div>
                <div>
                  <h4>Helping Hand</h4>
                  <p>Vestibulum ac diam sit amet quam vehicula elementum sed.</p>
                </div>
              </div>
              <div className="about-feature-item">
                <div className="about-feature-icon">❤️</div>
                <div>
                  <h4>Open Hearts</h4>
                  <p>Vestibulum ac diam sit amet quam vehicula elementum sed.</p>
                </div>
              </div>
            </div>
            <a className="btn primary" href="#/contact">LEARN MORE</a>
          </div>
        </div>
        <div className="about-sidebar">
          <div className="about-hotline">
            <h4>Need Help, Call Our HOTLINE!</h4>
            <div className="hotline-number">+1 212-683-9756</div>
          </div>
          <div className="about-newsletter-cta">
            <h4>Join Our Temple Newsletter</h4>
            <button className="btn outline-dark">Subscribe</button>
            <span className="or-text">or</span>
            <div className="donate-cta">+ DONATE TO HELP +</div>
          </div>
        </div>
      </div>
    </section>
  )
}
