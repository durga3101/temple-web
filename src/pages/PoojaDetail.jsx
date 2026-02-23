import React from 'react'
import PageHero from '../components/PageHero'
import SocialIcons from '../components/SocialIcons'
import { usePoojas } from '../context/PoojaContext'

// Static temple contact info (same for all poojas)
const CONTACT = {
  title: 'Contact Information',
  description: 'For booking and more details, please contact the temple office.',
  email: 'sitaramachandradevalayam@gmail.com',
}

const importantNotes = [
  'Traditional attire preferred',
  'Prasadam will be distributed to all',
  'Please arrive 15 minutes before the time',
  'Bring Desired flowers, fruits etc.. (optional)',
];

const bookingInfo = {
    text: 'You can book your Pooja in advance by clicking the "Book Now" button below. Please provide your details including name, gotra (if known), and any specific sankalpa (wishes). Our priests will perform the ritual on your behalf at the sacred time.',
    closingText: 'Jai Shri Ram 🚩 Om Namah Shivaya 🔱'
  };

const benefits= [
    { title: 'Spiritual Growth', description: 'Enhances meditation, concentration, and spiritual awareness' },
    { title: 'Health & Healing', description: 'Promotes physical and mental well-being, reduces stress' },
    { title: 'Prosperity', description: 'Removes financial obstacles and brings material abundance' },
    { title: 'Peace of Mind', description: 'Calms the mind and removes negative emotions' },
    { title: 'Protection', description: 'Shields from negative energies and evil influences' },
    { title: 'Karma Cleansing', description: 'Helps resolve past karma and ancestral issues' },
    { title: 'Relationship Harmony', description: 'Brings peace and understanding in family relationships' },
    { title: 'Success', description: 'Removes obstacles in career and personal endeavors' }
  ];
  

export default function PoojaDetail() {
  const { selectedPooja, loading, error } = usePoojas()

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '4rem', color: '#888' }}>Loading…</div>
  }

  if (error) {
    return <div style={{ textAlign: 'center', padding: '4rem', color: '#d53f41' }}>⚠️ {error}</div>
  }

  if (!selectedPooja) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <p>No pooja selected.</p>
        <a className="btn primary" href="#/poojas">← Back to Poojas</a>
      </div>
    )
  }

  // Merge list fields + detail fields into one flat object for easy rendering
  const d = selectedPooja.detail ?? {}
  const pooja = {
    // From Poojas sheet (list)
    id: selectedPooja.id,
    title: selectedPooja.title,
    description: selectedPooja.description,
    price: selectedPooja.price,
    local: selectedPooja.local,
    // From PoojaDetails sheet (detail) — fall back to list fields where sensible
    mainTitle: d.mainTitle || selectedPooja.title,
    highlightText: d.highlightText || selectedPooja.description,
    introText: d.introText || '',
    schedule: d.schedule ?? { icon: '📅', title: 'Schedule', subtitle: selectedPooja.category, detail: `${selectedPooja.date} ${selectedPooja.time ? `at ${selectedPooja.time}` : ''}` },
    location: d.location ?? { icon: '📍', title: 'Location', subtitle: 'Kakatiya Nagar, Ramachandrapuram', detail: 'Sangareddy District' },
    pricing: d.pricing ?? { icon: '💰', title: 'Pooja Contribution', subtitle: `₹${selectedPooja.price}/-`, detail: 'Includes all offerings & Prasadam' },
    procedures: d.procedures ?? [],
    images: d.images ?? { local: selectedPooja.local, fallback: '' },
    benefits: d.benefits && d.benefits.length > 0 ? d.benefits : benefits,
    packages: d.packages ?? [],
    importantNotes: d.importantNotes && d.importantNotes.length > 0 ? d.importantNotes : importantNotes,
    mantra: d.mantra ?? null,
    bestDays: d.bestDays ?? null,
    bookingInfo: d.bookingInfo && d.bookingInfo.length > 0 ? d.bookingInfo : bookingInfo,
    contact: CONTACT,
  }

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

          {pooja.introText && <p>{pooja.introText}</p>}

          {pooja.procedures.length > 0 && (
            <>
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
            </>
          )}

          {(pooja.images.local || pooja.images.fallback) && (
            <div
              className="event-detail-image"
              style={{ backgroundImage: `url(${pooja.images.local}), url(${pooja.images.fallback})` }}
            />
          )}

          {pooja.benefits.length > 0 && (
            <>
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
            </>
          )}

          {pooja.packages.length > 0 && (
            <>
              <h3>Packages</h3>
              <div className="registration-info">
                <ul>
                  {pooja.packages.map((pkg, idx) => (
                    <li key={idx}>
                      <strong>{pkg.name}:</strong> ₹{pkg.price}/- ({pkg.description})
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {pooja.bookingInfo.text && (
            <>
              <h3>How to Book</h3>
              <p>{pooja.bookingInfo.text}</p>
            </>
          )}
          {pooja.bookingInfo.closingText && (
            <p><strong>{pooja.bookingInfo.closingText}</strong></p>
          )}

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

          {pooja.importantNotes.length > 0 && (
            <div className="sidebar-card">
              <h4>📌 Important Notes</h4>
              <ul className="sidebar-notes">
                {pooja.importantNotes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
          )}

          {pooja.mantra && (
            <div className="sidebar-card">
              <h4>{pooja.mantra.title}</h4>
              <p style={{ fontStyle: 'italic', color: '#d53f41', lineHeight: '1.8' }}>
                "{pooja.mantra.sanskrit}"<br />
                "{pooja.mantra.transliteration}"
              </p>
              <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
                {pooja.mantra.meaning}
              </p>
            </div>
          )}

          {pooja.bestDays && pooja.bestDays.days.length > 0 && (
            <div className="sidebar-card">
              <h4>{pooja.bestDays.title}</h4>
              <ul className="sidebar-notes">
                {pooja.bestDays.days.map((day, idx) => (
                  <li key={idx}>{day}</li>
                ))}
              </ul>
            </div>
          )}

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
