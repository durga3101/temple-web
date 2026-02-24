import React from 'react'
import PageHero from '../components/PageHero'
import SocialIcons from '../components/SocialIcons'
import { useEvents } from '../context/EventContext'

// Static temple contact info (same for all events)
const CONTACT = {
  title: 'Contact Information',
  description: 'For registration and more details, please contact the temple office.',
  email: 'sitaramachandradevalayam@gmail.com',
}

const DEFAULT_NOTES = [
  'Free Sparsha Darshan for all devotees',
  'Traditional attire preferred',
  'Prasadam will be distributed to all',
  'Please arrive 15 minutes before the scheduled time',
]

export default function EventDetail() {
  const { selectedEvent, loading, error } = useEvents()

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '4rem', color: '#888' }}>Loading…</div>
  }

  if (error) {
    return <div style={{ textAlign: 'center', padding: '4rem', color: '#d53f41' }}>⚠️ {error}</div>
  }

  if (!selectedEvent) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <p>No event selected.</p>
        <a className="btn primary" href="#/events">← Back to Events</a>
      </div>
    )
  }

  const d = selectedEvent.detail ?? {}
  const event = {
    id: selectedEvent.id,
    title: selectedEvent.title,
    description: selectedEvent.description,
    price: selectedEvent.price,
    local: selectedEvent.local,
    mainTitle: d.mainTitle || selectedEvent.title,
    highlightText: d.highlightText || selectedEvent.description,
    introText: d.introText || '',
    schedule: d.schedule ?? {
      icon: '📅',
      title: 'Date & Time',
      subtitle: selectedEvent.category,
      detail: `${selectedEvent.date}${selectedEvent.time ? ` at ${selectedEvent.time}` : ''}`,
    },
    location: d.location ?? {
      icon: '📍',
      title: 'Location',
      subtitle: 'Kakatiya Nagar, Ramachandrapuram',
      detail: 'Sangareddy District',
    },
    special: d.special ?? {
      icon: '🕉️',
      title: 'Special Programs',
      subtitle: 'Sacred Rituals',
      detail: 'Contact for Registration',
    },
    scheduleDays: d.scheduleDays ?? [],
    images: d.images ?? { local: selectedEvent.local, fallback: '' },
    registration: d.registration ?? [],
    notes: d.notes && d.notes.length > 0 ? d.notes : DEFAULT_NOTES,
    noteText: d.noteText || '',
    closingText: d.closingText || 'Jai Shri Ram 🚩🙏',
    contact: CONTACT,
  }

  return (
    <div className="event-detail-page">
      <PageHero
        title={event.title}
        description={event.description}
      />

      <section className="container event-detail-info">
        <article className="info-card accent">
          <div className="info-icon">{event.schedule.icon}</div>
          <div>
            <h4>{event.schedule.title}</h4>
            <p>{event.schedule.subtitle}</p>
            <span>{event.schedule.detail}</span>
          </div>
        </article>
        <article className="info-card dark">
          <div className="info-icon">{event.location.icon}</div>
          <div>
            <h4>{event.location.title}</h4>
            <p>{event.location.subtitle}</p>
            <span>{event.location.detail}</span>
          </div>
        </article>
        <article className="info-card light">
          <div className="info-icon">{event.special.icon}</div>
          <div>
            <h4>{event.special.title}</h4>
            <p>{event.special.subtitle}</p>
            <span className="phone">{event.special.detail}</span>
          </div>
        </article>
      </section>

      <section className="container event-detail-body">
        <div className="event-detail-content">
          <h2>{event.mainTitle}</h2>

          {event.highlightText && <p className="highlight">{event.highlightText}</p>}
          {event.introText && <p>{event.introText}</p>}

          {event.scheduleDays.length > 0 && (
            <>
              <h3>Event Schedule</h3>
              <div className="event-schedule">
                {event.scheduleDays.map((day, idx) => (
                  <div key={idx} className="schedule-day">
                    <h4>{day.title}</h4>
                    <ul>
                      {day.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          {item.time && <strong>{item.time}: </strong>}
                          {item.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}

          {(event.images.local || event.images.fallback) && (
            <div
              className="event-detail-image"
              style={{ backgroundImage: `url(${event.images.local}), url(${event.images.fallback})` }}
            />
          )}

          {event.registration.length > 0 && (
            <>
              <h3>Registration & Seva</h3>
              <div className="registration-info">
                <ul>
                  {event.registration.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.name}:</strong> {item.price > 0 ? `₹${item.price}/-` : 'FREE'}
                      {item.description ? ` — ${item.description}` : ''}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {event.noteText && (
            <>
              <h3>📌 Note</h3>
              <p>{event.noteText}</p>
            </>
          )}

          {event.closingText && (
            <p><strong>{event.closingText}</strong></p>
          )}

          <a className="btn primary" href="#/payment">Register Now</a>
        </div>

        <aside className="event-detail-sidebar">
          <div className="sidebar-card">
            <h4>{event.contact.title}</h4>
            <p>{event.contact.description}</p>
            <div className="phone">📧 {event.contact.email}</div>
            <div className="socials">
              <SocialIcons />
            </div>
          </div>

          {event.notes.length > 0 && (
            <div className="sidebar-card">
              <h4>Important Notes</h4>
              <ul className="sidebar-notes">
                {event.notes.map((note, idx) => (
                  <li key={idx}>{note}</li>
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
            <p>Stay updated with temple events, festivals, and spiritual programs. Receive timely notifications about upcoming celebrations.</p>
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
