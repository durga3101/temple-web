import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="contact">
          <span>+123) 123 4567 890</span>
          <span className="topbar-sep">•</span>
          <span>info@gmail.com</span>
        </div>
        <nav className="top-actions">
          <a href="#/events">EVENTS</a>
          <a href="#/">SERMONS</a>
          <a href="#/">MINISTRIES</a>
        </nav>
      </div>
      <div className="main-nav">
        <div className="brand">
          <span className="brand-icon">🕉️</span>
          KRISHNA <span className="sub">MEGA TEMPLE</span>
        </div>
        <nav className="menu">
          <a href="#/">HOME</a>
          <a href="#/events">EVENTS</a>
          <a href="#/contact">CONTACT US</a>
          <a href="#/" className="btn-donate">ONLINE</a>
        </nav>
      </div>
    </header>
  )
}
