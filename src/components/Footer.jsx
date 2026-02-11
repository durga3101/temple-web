import React from 'react'

const infoLinks = ['Deities', 'Services', 'Poojas', 'Volunteers']
const otherLinks = ['Events', 'Contact Us', 'Policy']

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
            <p>Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in</p>
            <ul className="footer-contact">
              {/* <li><span className="dot">P</span> +123) 123 4567 890</li> */}
              <li><span className="dot">E</span> sitaramachandradevalayam@gmail.com</li>
              <li><span className="dot">A</span> Road No-2, Kakatiya Nagar, Beeramguda, Telangana, India</li>
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
            SRI SITA RAMA CHANDRA SWAMI DEVALAYAM
            {/* <span>Sita Rama Chandra Swami</span> */}
          </div>
          <div className="footer-socials">
            <a href="#/" aria-label="Youtube">YT</a>
            <a href="#/" aria-label="Whatsapp">WA</a>
            <a href="#/" aria-label="Instagram">In</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
