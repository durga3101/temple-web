import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      {/* <div className="topbar">
        <div className="contact">+123 123 4567 890 &nbsp; info@gmail.com</div>
        <nav className="top-actions">
          <a href="#">Events</a>
          <a href="#">Sermons</a>
          <a href="#">Ministries</a>
        </nav>
      </div> */}
      <div className="main-nav">
        <div className="brand">KRISHNA <span className="sub">MEGA TEMPLE</span></div>
        <nav className="menu">
          <a href="#/">Home</a>
          {/* <a href="#/about">About</a> */}
          <a href="#/events">Events</a>
          {/* <a href="#/donation">Donation</a> */}
          <a href="#/contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
