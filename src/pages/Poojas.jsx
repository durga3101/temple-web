import React, { useState } from 'react'
import PageHero from '../components/PageHero'

const queries = [
  'temple,pooja',
  'prayer,ceremony',
  'hindu,worship',
  'devotion,ritual',
  'religion,offering',
  'gods,prayer',
  'spiritual,pooja',
  'worship,temple',
  'hindu,puja',
  'vedic,ritual'
]

const filterCategories = [
  { id: 'all', label: 'All Deities' },
  { id: 'sita-rama', label: 'Sri Sita Rama' },
  { id: 'shiva', label: 'Lord Shiva' },
  { id: 'hanuman', label: 'Lord Hanuman' },
  { id: 'ganesha', label: 'Lord Ganesha' },
  { id: 'goddess', label: 'Goddess' },
  { id: 'navagraha', label: 'Nava Grahas' },
]

// Sample Poojas
const samplePoojas = [
  {
    id: 1,
    title: '🙏 Satyanarayana Vratam',
    description: 'Satyanarayana Pooja is one of the most popular Hindu poojas performed to seek blessings of Lord Vishnu. This sacred ritual brings peace, prosperity, and fulfillment of wishes. Performed with devotion and followed by Prasadam distribution.',
    author: 'Temple Committee',
    category: 'Monthly Pooja',
    deity: 'sita-rama',
    date: 'Every Purnima',
    time: '10:00 AM',
    price: 1116,
    local: '/assets/photos/satya-narayana.jpg',
    unsplash: 'https://source.unsplash.com/900x600/?vishnu,prayer'
  },
  {
    id: 2,
    title: '🔱 Rudrabhishekam',
    description: 'Sacred bathing ceremony of Lord Shiva with milk, honey, ghee, and holy water while chanting Rudra mantras. This powerful ritual removes negativity and brings divine blessings for health, wealth, and spiritual growth.',
    author: 'Temple Committee',
    category: 'Weekly Pooja',
    deity: 'shiva',
    date: 'Every Monday',
    time: '7:00 AM',
    price: 316,
    local: '/assets/photos/siva.jpeg',
    unsplash: 'https://source.unsplash.com/800x600/?shiva,abhishekam'
  },
  {
    id: 3,
    title: '🙏 Hanuman Pooja',
    description: 'Devotional recitation of the sacred Hanuman pooja by experienced priests. Brings courage, strength, and divine protection. Especially beneficial for overcoming difficulties and gaining Lord Hanuman\'s blessings.',
    author: 'Temple Committee',
    category: 'Weekly Pooja',
    deity: 'hanuman',
    date: 'Every Tuesday & Saturday',
    time: '7:00 AM',
    price: 316,
    local: '/assets/photos/hanuman-1.jpeg',
    unsplash: 'https://source.unsplash.com/800x600/?hanuman,prayer'
  },
  {
    id: 4,
    title: '🐘 Ganapati Pooja',
    description: 'Powerful fire ceremony dedicated to Lord Ganesha to remove obstacles and bring new beginnings. Ideal for starting new ventures, education, and overcoming challenges in life. Performed with sacred fire and Vedic mantras.',
    author: 'Temple Committee',
    category: 'Weekly Pooja',
    deity: 'ganesha',
    date: 'Every Wednesday',
    time: 'Flexible',
    price: 316,
    local: '/assets/photos/ganesh-1.jpeg',
    unsplash: 'https://source.unsplash.com/800x600/?ganesha,homam'
  },
  {
    id: 5,
    title: '🪔 Ammavari Pooja',
    description: 'Invoke blessings of Goddess Lakshmi and Durga for wealth, prosperity, and abundance. This auspicious pooja is performed with traditional rituals and offerings to bring fortune and success to your family and business.',
    author: 'Temple Committee',
    category: 'Friday Special',
    deity: 'goddess',
    date: 'Every Friday',
    time: '7:00 PM',
    price: 316,
    local: '/assets/photos/maa-1.jpeg',
    unsplash: 'https://source.unsplash.com/800x600/?lakshmi,goddess'
  },
   {
    id: 6,
    title: '🕉️ Sita Rama Chandra Abhishekam',
    description: 'Invoke blessings of Goddess Lakshmi and Durga for wealth, prosperity, and abundance. This auspicious pooja is performed with traditional rituals and offerings to bring fortune and success to your family and business.',
    author: 'Temple Committee',
    category: 'Saturday Special',
    deity: 'sita-rama',
    date: 'Every Saturday',
    time: '7:00 AM',
    price: 516,
    local: '/assets/photos/sita-rama-1.jpeg',
    unsplash: 'https://source.unsplash.com/800x600/?sita,rama'
  },
  {
    id: 7,
    title: '🌸 Sani Graha Pooja',
    description: 'Comprehensive worship of Sani Graha deities to mitigate doshas and bring harmony in life. This powerful pooja helps overcome obstacles caused by Shani Graha and brings peace and prosperity.',
    author: 'Temple Committee',
    category: 'Remedial Pooja',
    deity: 'navagraha',
    date: 'Flexible',
    time: '8:00 AM',
    price: 516,
    local: '/assets/photos/navagraha-1.webp',
    unsplash: 'https://source.unsplash.com/800x600/?sani,shani'
  },
  {
    id: 8,
    title: '🌺 Ammavari Kukumarchna',
    description: 'Recitation of 700 verses from Devi Mahatmyam in praise of Goddess Durga. This powerful scripture reading invokes the divine mother\'s blessings for courage, strength, and victory over all obstacles and negativity.',
    author: 'Temple Committee',
    category: 'Goddess Worship',
    deity: 'goddess',
    date: 'Friday',
    time: '10:00 AM',
    price: 316,
    local: '/assets/photos/maa-3.jpeg',
    unsplash: 'https://source.unsplash.com/800x600/?durga,goddess'
  },
  {
    id: 9,
    title: '🕉️ Maha Mrityunjaya Japam',
    description: 'Chanting of the powerful Maha Mrityunjaya mantra 108/1008 times for health, longevity, and protection. This sacred ritual is performed by experienced priests to invoke Lord Shiva\'s grace for healing and well-being.',
    author: 'Temple Committee',
    category: 'Health & Healing',
    deity: 'shiva',
    date: 'On Request',
    time: 'Flexible',
    price: 2501,
    local: '/assets/photos/siva-3.jpeg',
    unsplash: 'https://source.unsplash.com/800x600/?shiva,meditation'
  },
   {
    id: 10,
    title: '🌸 Navagraha Pooja',
    description: 'Comprehensive worship of nine planetary deities to mitigate doshas and bring harmony in life. This powerful pooja helps overcome obstacles caused by unfavorable planetary positions and brings peace and prosperity.',
    author: 'Temple Committee',
    category: 'Remedial Pooja',
    deity: 'navagraha',
    date: 'Flexible',
    time: '8:00 AM',
    price: 516,
    local: '/assets/photos/navagraha-1.webp',
    unsplash: 'https://source.unsplash.com/800x600/?navagraha,temple'
  },
  {
    id: 11,
    title: '🌺 Archana Monthly (All Deities)',
    description: 'Daily archana performed for an entire month for all deities in the temple. This comprehensive worship service includes daily offerings, abhishekam, and prayers to all divine presences, bringing continuous blessings and divine grace to you and your family throughout the month.',
    author: 'Temple Committee',
    category: 'Monthly Archana',
    deity: 'all',
    date: 'Ongoing',
    time: 'Daily Prayers',
    price: 516,
    local: '/assets/photos/temple-1.jpg',
    unsplash: 'https://source.unsplash.com/900x600/?temple,worship'
  },
  {
    id: 12,
    title: '🌺 Archana Yearly (All Deities)',
    description: 'Daily archana performed for an entire year for all deities in the temple. This sacred annual service ensures continuous divine blessings, protection, and prosperity throughout the year. Perfect for devotees seeking sustained spiritual connection and divine grace for their family.',
    author: 'Temple Committee',
    category: 'Yearly Archana',
    deity: 'all',
    date: 'Annual Service',
    time: 'Daily Prayers',
    price: 3116,
    local: '/assets/photos/temple.jpg',
    unsplash: 'https://source.unsplash.com/900x600/?hindu,temple'
  },
].map((pooja) => ({
  ...pooja,
  unsplash: `${pooja.unsplash}&${Date.now()}`
}))

function PoojaCard({ pooja }) {
  const handleCardClick = (event) => {
    // Allow clicking on specific links to work normally
    if (event.target.tagName === 'A') return;
    window.location.hash = '/pooja-detail';
  };

  return (
    <article className="news-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="news-image-wrapper">
        <div className="news-image" style={{ backgroundImage: `url(${pooja.local}), url(${pooja.unsplash})` }}>
          <div className="news-overlay"></div>
        </div>
      </div>
      <div className="news-content">
        <h3 className="news-title">
          <a href="#/pooja-detail" onClick={(e) => e.stopPropagation()}>{pooja.title}</a>
        </h3>
        <p className="news-description">{pooja.description}</p>
        <div className="news-meta">
          <div className="news-author-section">
            <span className="author-label">By</span>
            <span className="author-name">{pooja.author}</span>
            <div className="author-avatar"></div>
          </div>
          <div className="news-info">
            <span className="news-category">{pooja.category}</span>
            <span className="news-divider">|</span>
            <span className="news-date">{pooja.date}</span>
            {pooja.time && (
              <>
                <span className="news-divider">|</span>
                <span className="news-time">⏰ {pooja.time}</span>
              </>
            )}
          </div>
        </div>
        <div className="event-action" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
          <div className="event-price" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#d53f41' }}>
            ₹{pooja.price}
          </div>
          <button 
            className="btn primary" 
            style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
            onClick={(event) => {
              event.stopPropagation();
              window.location.hash = '/payment';
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Poojas() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredPoojas = activeCategory === 'all' 
    ? samplePoojas 
    : samplePoojas.filter(pooja => pooja.deity === activeCategory)

  return (
    <div className="events-page">
      <PageHero 
        title="Temple Poojas & Rituals"
      />

      <main className="container events-listing">
        <div className="ministries-filter">
          {filterCategories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="news-grid">
          {filteredPoojas.map((pooja) => (
            <PoojaCard key={pooja.id} pooja={pooja} />
          ))}
        </div>

        <div className="pagination">
          <button className="page-btn">‹</button>
          <button className="page active">1</button>
          <button className="page">2</button>
          <button className="page">3</button>
          <button className="page-btn">›</button>
        </div>
      </main>

      <section className="newsletter">
        <div className="newsletter-inner">
          <div className="newsletter-text">
            <h3>Subscribe To Our Newsletter</h3>
            <p>Get updates about special poojas, temple events, and spiritual practices delivered to your inbox</p>
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
