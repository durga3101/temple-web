import React from 'react'
import SocialIcons from './SocialIcons'

const infoLinks = [
  { label: 'Deities', path: '#/' },
  { label: 'Live Stream', path: 'https://www.youtube.com/@sitaramachandradevalayam' },
  { label: 'Poojas', path: '#/events' },
  { label: 'Pandits', path: '#/' }
]
const otherLinks = [
  { label: 'Events', path: '#/events' },
  { label: 'Contact Us', path: '#/contact' },
  { label: 'Policy', path: '#/' }
]

const recentPosts = [
  { id: 1, title: "All we've discovered by now", date: 'October 26, 2020' },
  { id: 2, title: 'We Who Believe In God', date: 'October 28, 2020' },
  { id: 3, title: 'Expecting new issued cases', date: 'October 29, 2020' }
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-col">
            <h4>About Us</h4>
            <p>Where faith meets peace and hearts connect with the divine</p>
            <ul className="footer-contact">
              {/* <li><span className="dot">P</span> +123) 123 4567 890</li> */}
              <li><span className="dot">E</span>sitaramachandradevalayam@gmail.com</li>
              <li><span className="dot">A</span> Road No-2, Kakatiya Nagar, Ramachandhrapuram, Telangana, India</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Information</h4>
            <ul>
              {infoLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.path} target={item.path.startsWith('http') ? '_blank' : undefined} rel={item.path.startsWith('http') ? 'noreferrer' : undefined}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Others</h4>
            <ul>
              {otherLinks.map((item) => (
                <li key={item.label}><a href={item.path}>{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Recent Posts</h4>
            <ul className="recent-posts">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <div className="post-icon">📄</div>
                  <div className="post-content">
                    <span className="post-date">{post.date}</span>
                    <a href="#/events">{post.title}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div className="footer-copy">
            © 2025 All Rights Reserved | Design by <span>Tech Varidhi</span>
          </div>
          <div className="footer-brand">
            🚩 🔱 SRI SITA RAMA CHANDRA SWAMI DEVALAYAM 🔱 🚩
            {/* <span>Sita Rama Chandra Swami</span> */}
          </div>
          <div className="footer-socials">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  )
}
