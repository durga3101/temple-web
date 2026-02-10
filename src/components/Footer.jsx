import React from 'react'

const infoLinks = ['Ministries', 'Services', 'Sermons', 'Donations', 'Volunteers', 'Events']
const otherLinks = ['Shop', 'Cart', 'Checkout', 'Blog', 'Contact Us', 'Policy']

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-col">
            <h4>About Us</h4>
            <p>Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in.</p>
            <ul className="footer-contact">
              <li><span className="dot">P</span> +123 123 4567 890</li>
              <li><span className="dot">E</span> info@gmail.com</li>
              <li><span className="dot">A</span> 13/D, Amet Street City Tower, New York USA</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Information</h4>
            <ul>
              {infoLinks.map((item) => (
                <li key={item}><a href="#/">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Others</h4>
            <ul>
              {otherLinks.map((item) => (
                <li key={item}><a href="#/">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div className="footer-copy">
            © 2013 Your Website Name. All Rights Reserved | Design by <span>TemplateOnWeb</span>
          </div>
          <div className="footer-brand">
            KRISHNA
            <span>MEGA TEMPLE</span>
          </div>
          <div className="footer-socials">
            <a href="#/">Fb</a>
            <a href="#/">Tw</a>
            <a href="#/">Pi</a>
            <a href="#/">In</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
