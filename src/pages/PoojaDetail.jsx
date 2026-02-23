import React from 'react'
import PageHero from '../components/PageHero'
import SocialIcons from '../components/SocialIcons'

// This data structure can be easily replaced with API response
// TODO: Fetch from API - GET /api/poojas/:id
const poojaDetailData = {
  id: 1,
  title: 'Rudrabhishekam - Sacred Shiva Worship',
  description: 'Experience the divine grace of Lord Shiva through this powerful Abhishekam ritual performed with sacred offerings and Vedic mantras.',
  
  // Info cards section
  schedule: {
    icon: '📅',
    title: 'Schedule',
    subtitle: 'Daily Pooja',
    detail: 'Every Day, 7:00 AM'
  },
  location: {
    icon: '📍',
    title: 'Location',
    subtitle: 'Kakatiya Nagar, Ramachandrapuram',
    detail: 'Sangareddya District'
  },
  pricing: {
    icon: '💰',
    title: 'Pooja Contribution',
    subtitle: '516/-',
    detail: 'Includes all offerings & Prasadam'
  },
  
  // Main content
  mainTitle: '🔱 Rudrabhishekam - Divine Bathing Ceremony of Lord Shiva 🔱',
  highlightText: 'Rudrabhishekam is one of the most sacred and powerful rituals dedicated to Lord Shiva. This divine ceremony involves bathing the Shiva Lingam with various sacred offerings while chanting the powerful Rudra mantras.',
  introText: 'According to ancient scriptures, performing Rudrabhishekam on Mondays, especially during the early morning hours, brings immense spiritual benefits. It helps devotees overcome negativity, removes obstacles, and invokes divine blessings for health, wealth, prosperity, and spiritual growth.',
  
  // Procedure sections
  procedures: [
    {
      title: '🪔 Preparation & Invocation',
      items: [
        { label: 'Sankalpa', description: 'Taking the sacred vow with your name, gotra, and specific wishes' },
        { label: 'Ganapati Pooja', description: 'Initial prayers to Lord Ganesha for removing obstacles' },
        { label: 'Kalasha Sthapana', description: 'Establishment of sacred water pot with holy items' }
      ]
    },
    {
      title: '🔱 Abhishekam Offerings',
      items: [
        { label: 'Water Abhishekam', description: 'Sacred Ganga water or purified water with Rudra mantra chanting' },
        { label: 'Milk Abhishekam', description: 'Pure cow\'s milk representing purity and prosperity' },
        { label: 'Curd Abhishekam', description: 'Fresh yogurt for fulfillment of desires' },
        { label: 'Ghee Abhishekam', description: 'Clarified butter for spiritual illumination' },
        { label: 'Honey Abhishekam', description: 'Pure honey for sweetness in life' },
        { label: 'Sugar/Jaggery Water', description: 'For removing bitterness and negativity' },
        { label: 'Panchamrit Abhishekam', description: 'Sacred mixture of five nectars' },
        { label: 'Coconut Water', description: 'For cooling and purification' },
        { label: 'Fruit Juice', description: 'Representing nature\'s bounty' },
        { label: 'Final Water Abhishekam', description: 'Purification with sacred water' }
      ]
    },
    {
      title: '🌺 Alankaram & Archana',
      items: [
        { label: 'Bilva Patra Archana', description: 'Offering sacred Bilva leaves to Lord Shiva' },
        { label: 'Flowers Decoration', description: 'Adorning with fresh flowers' },
        { label: 'Rudra Namam Archana', description: 'Chanting 108 names of Lord Shiva' },
        { label: 'Sacred Ash Application', description: 'Applying Vibhuti (sacred ash)' }
      ]
    },
    {
      title: '🔥 Completion Rituals',
      items: [
        { label: 'Arati', description: 'Waving of sacred lamps with devotional songs' },
        { label: 'Mantra Pushpam', description: 'Vedic hymns and flower offerings' },
        { label: 'Pradakshina', description: 'Circumambulation of the deity' },
        { label: 'Prasadam Distribution', description: 'Blessed food offerings to devotees' }
      ]
    }
  ],
  
  // Images
  images: {
    local: '/assets/photos/siva.jpeg',
    fallback: 'https://images.unsplash.com/photo-1582632208099-e0fff18f7d0d?auto=format&fit=crop&w=1200&q=80'
  },
  
  // Benefits
  benefits: [
    { title: 'Spiritual Growth', description: 'Enhances meditation, concentration, and spiritual awareness' },
    { title: 'Health & Healing', description: 'Promotes physical and mental well-being, reduces stress' },
    { title: 'Prosperity', description: 'Removes financial obstacles and brings material abundance' },
    { title: 'Peace of Mind', description: 'Calms the mind and removes negative emotions' },
    { title: 'Protection', description: 'Shields from negative energies and evil influences' },
    { title: 'Karma Cleansing', description: 'Helps resolve past karma and ancestral issues' },
    { title: 'Relationship Harmony', description: 'Brings peace and understanding in family relationships' },
    { title: 'Success', description: 'Removes obstacles in career and personal endeavors' }
  ],
  
  // Packages
  packages: [
    { name: 'Regular Rudrabhishekam', price: 1116, description: 'Single devotee/family' },
    { name: 'Maha Rudrabhishekam', price: 2116, description: '11 Brahmins chanting Rudram' },
    { name: 'Ati Rudrabhishekam', price: 5116, description: 'Special ceremony with multiple rounds' },
    { name: 'Laghu Rudram', price: 501, description: 'Simplified version for regular practice' }
  ],
  
  // Important notes
  importantNotes: [
    'Please arrive 15 minutes before the scheduled time',
    'Traditional attire is preferred (dhoti for men, saree for women)',
    'Observe fasting or light diet before the pooja if possible',
    'Bring flowers, fruits, or special offerings if desired (optional)',
    'Prasadam will be provided to all participants',
    'Photography during main rituals is not permitted'
  ],
  
  // Booking info
  bookingInfo: {
    text: 'You can book your Rudrabhishekam in advance by clicking the "Book Now" button below. Please provide your details including name, gotra (if known), and any specific sankalpa (wishes). Our priests will perform the ritual on your behalf at the sacred time.',
    closingText: 'Jai Shri Ram 🚩 Om Namah Shivaya 🔱'
  },
  
  // Sidebar data
  contact: {
    title: 'Contact Information',
    description: 'For booking and more details, please contact the temple office.',
    email: 'sitaramachandradevalayam@gmail.com'
  },
  mantra: {
    title: '🕉️ Mantra',
    sanskrit: 'ॐ नमः शिवाय',
    transliteration: 'Om Namah Shivaya',
    meaning: 'This five-syllable mantra is the most powerful Shiva mantra for meditation and peace.'
  },
  bestDays: {
    title: 'Best Days for Rudrabhishekam',
    days: [
      'Every Monday (Regular)',
      'Pradosh days (Special)',
      'Maha Shivaratri (Most Auspicious)',
      'Solar/Lunar Eclipse days',
      'Shravan month Mondays'
    ]
  }
}

export default function PoojaDetail() {
  // TODO: Replace with API call
  // const [poojaData, setPoojaData] = useState(null)
  // useEffect(() => {
  //   fetch(`/api/poojas/${poojaId}`)
  //     .then(res => res.json())
  //     .then(data => setPoojaData(data))
  // }, [poojaId])
  
  const pooja = poojaDetailData // Replace with API data when available

  return (
    <div className="event-detail-page">
      <PageHero 
        title={pooja.title}
        description={pooja.description}
      />

      <section className="container event-detail-info">
        <article className="info-card accent">
          <div className="info-icon">{pooja.schedule.icon}</div>
          <div>
            <h4>{pooja.schedule.title}</h4>
            <p>{pooja.schedule.subtitle}</p>
            <span>{pooja.schedule.detail}</span>
          </div>
        </article>
        <article className="info-card dark">
          <div className="info-icon">{pooja.location.icon}</div>
          <div>
            <h4>{pooja.location.title}</h4>
            <p>{pooja.location.subtitle}</p>
            <span>{pooja.location.detail}</span>
          </div>
        </article>
        <article className="info-card light">
          <div className="info-icon">{pooja.pricing.icon}</div>
          <div>
            <h4>{pooja.pricing.title}</h4>
            <p>{pooja.pricing.subtitle}</p>
            <span className="phone">{pooja.pricing.detail}</span>
          </div>
        </article>
      </section>

      <section className="container event-detail-body">
        <div className="event-detail-content">
          <h2>{pooja.mainTitle}</h2>
          
          <p className="highlight">{pooja.highlightText}</p>

          <p>{pooja.introText}</p>

          <h3>Pooja Procedure & Offerings</h3>
          
          <div className="event-schedule">
            {pooja.procedures.map((procedure, idx) => (
              <div key={idx} className="schedule-day">
                <h4>{procedure.title}</h4>
                <ul>
                  {procedure.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <strong>{item.label}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="event-detail-image" style={{ backgroundImage: `url(${pooja.images.local}), url(${pooja.images.fallback})` }} />

          <h3>Benefits of {pooja.title.split(' - ')[0]}</h3>
          <div className="registration-info">
            <ul>
              {pooja.benefits.map((benefit, idx) => (
                <li key={idx}>
                  <strong>{benefit.title}:</strong> {benefit.description}
                </li>
              ))}
            </ul>
          </div>

          <h3>Special {pooja.title.split(' - ')[0]} Packages</h3>
          <div className="registration-info">
            <ul>
              {pooja.packages.map((pkg, idx) => (
                <li key={idx}>
                  <strong>{pkg.name}:</strong> ₹{pkg.price}/- ({pkg.description})
                </li>
              ))}
            </ul>
          </div>

          <h3>📌 Important Notes</h3>
          <ul>
            {pooja.importantNotes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>

          <h3>How to Book</h3>
          <p>{pooja.bookingInfo.text}</p>
          <p><strong>{pooja.bookingInfo.closingText}</strong></p>

          <a className="btn primary" href="#/payment">Book Now</a>
        </div>

        <aside className="event-detail-sidebar">
          <div className="sidebar-card">
            <h4>{pooja.contact.title}</h4>
            <p>{pooja.contact.description}</p>
            <div className="phone">📧 {pooja.contact.email}</div>
            <div className="socials">
              <SocialIcons />
            </div>
          </div>
          <div className="sidebar-card">
            <h4>{pooja.mantra.title}</h4>
            <p style={{ fontStyle: 'italic', color: '#d53f41', lineHeight: '1.8' }}>
              "{pooja.mantra.sanskrit}"<br/>
              "{pooja.mantra.transliteration}"
            </p>
            <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
              {pooja.mantra.meaning}
            </p>
          </div>
          <div className="sidebar-card">
            <h4>{pooja.bestDays.title}</h4>
            <ul className="sidebar-notes">
              {pooja.bestDays.days.map((day, idx) => (
                <li key={idx}>{day}</li>
              ))}
            </ul>
          </div>
          <div className="sidebar-map">
            <iframe
              title="Temple location"
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
