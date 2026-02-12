import React from 'react'

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
            <a href="https://www.youtube.com/@sitaramachandradevalayam" target="_blank" rel="noreferrer" aria-label="Youtube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="5" fill="#FF0000"/>
                <path d="M9 8L16 12L9 16V8Z" fill="white"/>
              </svg>
            </a>
            <a href="https://wa.me/919849918520" target="_blank" rel="noreferrer" aria-label="Whatsapp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11" fill="#25D366"/>
                <path d="M17.5 14.5c-.3 0-1.8-.8-2-.9-.2-.1-.4-.1-.5.1-.2.2-.6.9-.8 1-.1.2-.3.2-.5.1-.3-.1-1-.4-2-1.2-.7-.7-1.2-1.5-1.4-1.8-.1-.3 0-.4.1-.5l.4-.5c.1-.1.1-.2.2-.4 0-.1 0-.3-.1-.4-.1-.1-.5-1.3-.7-1.7-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3 1 2.5c.1.2 1.6 2.5 4 3.5.5.2 1 .3 1.3.4.6.2 1.1.2 1.5.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3z" fill="white"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/kakatiyanagarramalayam/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="url(#ig-gradient)"/>
                <defs>
                  <linearGradient id="ig-gradient" x1="0" y1="24" x2="24" y2="0">
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
          </div>
        </div>
      </div>
    </footer>
  )
}
