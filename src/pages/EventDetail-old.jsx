import React, { useEffect, useState } from 'react'
import PageHero from '../components/PageHero'
import SocialIcons from '../components/SocialIcons'
import { fetchAllEventData } from '../data/eventsApi'

const DEFAULT_NOTES = [
  'Free Sparsha Darshan for all devotees',
  'Traditional attire preferred',
  'Prasadam will be distributed to all',
  'Please arrive 15 minutes before the scheduled time',
]

export default function EventDetail({ eventId = 'Vasantha Navaratri Utsavam 2026' }) {
  const [events,  setEvents]  = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState('')

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError('')
    fetchAllEventData()
      .then((data) => { if (!cancelled) setEvents(data) })
      .catch((e)   => { if (!cancelled) setError(e?.message || 'Failed to load event') })
      .finally(()  => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [])

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '4rem', color: '#888' }}>Loading…</div>
  }
  if (error) {
    return <div style={{ textAlign: 'center', padding: '4rem', color: '#d53f41' }}>⚠️ {error}</div>
  }

  // Group all sub-events sharing the same event_id
  let subEvents = []
  if (eventId) {
    const needle = String(eventId).toLowerCase()
    subEvents = events.filter((e) =>
      (e.event_id && String(e.event_id).toLowerCase() === needle) ||
      (e.id       && String(e.id).toLowerCase()       === needle) ||
      (e.title    && String(e.title).toLowerCase()    === needle)
    )
  } else {
    const firstEventId = events[0]?.event_id
    subEvents = firstEventId
      ? events.filter((e) => e.event_id === firstEventId)
      : events.slice(0, 1)
  }

  // Primary event — drives the hero, info cards, and shared intro
  const ev = subEvents[0] ?? null

  if (!ev) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <p>Event not found.</p>
        <a className="btn primary" href="#/events">← Back to Events</a>
      </div>
    )
  }

  const d = ev.detail ?? {}

  // 3-card info strip (EventDetails sheet, with sensible fallbacks)
  const scheduleCard = d.schedule ?? {
    icon: '📅', title: 'Date & Time',
    subtitle: ev.category || 'Multi-Day Celebration',
    detail: `${ev.date}${ev.time ? ` at ${ev.time}` : ''}`,
  }
  const locationCard = d.location ?? {
    icon: '📍', title: 'Location',
    subtitle: 'Kakatiya Nagar, Ramachandrapuram',
    detail: 'Sangareddy District',
  }
  const specialCard = d.special ?? {
    icon: '🕉️', title: 'Special Programs',
    subtitle: 'Sacred Rituals',
    detail: 'Contact for Registration',
  }

  // Shared heading + intro (from primary event's EventDetails)
  const mainTitle     = d.mainTitle     || ev.event_id || ev.title
  const highlightText = d.highlightText || ev.subtitle || ''
  const introText     = d.introText     || ev.description || ''
  const sidebarNotes  = d.notes?.length > 0 ? d.notes : DEFAULT_NOTES

  // Single banner image — from primary event's EventDetails, falling back to Events sheet
  const bannerLocal    = d.images?.local    || ev.local    || ''
  const bannerFallback = d.images?.fallback || ev.unsplash || ''

  // Note and closing from primary event's EventDetails
  const noteText    = d.noteText    || ''
  const closingText = d.closingText || 'Jai Shri Ram 🚩🙏'

  // Collect registration from ALL sub-events, tagged with sub-event title
  const allRegistration = subEvents.flatMap((sev) =>
    (sev.detail?.registration ?? []).map((item) => ({
      ...item,
      subEventTitle: subEvents.length > 1 ? sev.title : null,
    }))
  )

  // Flatten all schedule days across every sub-event, grouped under that sub-event's name
  // Each entry: { groupTitle, items: [{ time, description }] }
  const allScheduleGroups = subEvents.flatMap((sev) => {
    const days = sev.detail?.scheduleDays ?? []
    if (days.length === 0) return []
    // When multiple sub-events, prefix day titles with the sub-event name
    return days.map((day) => ({
      groupTitle: subEvents.length > 1 ? sev.title : null,
      dayTitle:   day.title,
      items:      day.items,
    }))
  })

  return (
    <div className="event-detail-page">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        title={ev.event_id || ev.title}
        description={ev.subtitle || ev.description}
      />

      {/* ── 3-card info strip ────────────────────────────────── */}
      <section className="container event-detail-info">
        <article className="info-card accent">
          <div className="info-icon">{scheduleCard.icon}</div>
          <div>
            <h4>{scheduleCard.title}</h4>
            <p>{scheduleCard.subtitle}</p>
            <span>{scheduleCard.detail}</span>
          </div>
        </article>
        <article className="info-card dark">
          <div className="info-icon">{locationCard.icon}</div>
          <div>
            <h4>{locationCard.title}</h4>
            <p>{locationCard.subtitle}</p>
            <span>{locationCard.detail}</span>
          </div>
        </article>
        <article className="info-card light">
          <div className="info-icon">{specialCard.icon}</div>
          <div>
            <h4>{specialCard.title}</h4>
            <p>{specialCard.subtitle}</p>
            <span className="phone">{specialCard.detail}</span>
          </div>
        </article>
      </section>

      {/* ── Body + Sidebar ───────────────────────────────────── */}
      <section className="container event-detail-body">
        <div className="event-detail-content">

          {/* Shared heading + intro */}
          <h2>{mainTitle}</h2>
          {highlightText && <p className="highlight">{highlightText}</p>}
          {introText     && <p>{introText}</p>}

          {/* ── Grouped schedule for all sub-events ─────────── */}
          {allScheduleGroups.length > 0 && (
            <>
              <h3>{subEvents.length > 1 ? 'Grand Celebration Schedule' : 'Event Schedule'}</h3>
              <div className="event-schedule">
                {allScheduleGroups.map((group, i) => {
                  const isNewGroup = group.groupTitle &&
                    (i === 0 || allScheduleGroups[i - 1].groupTitle !== group.groupTitle)
                  return (
                    <React.Fragment key={i}>
                      {/* Sub-event group header — standalone row, rendered once per group */}
                      {isNewGroup && (
                        <div className="schedule-day" style={{ background: '#fff3f0', borderLeft: '4px solid #d53f41', paddingTop: '0.6rem', paddingBottom: '0.6rem' }}>
                          <h4 style={{ color: '#d53f41', margin: 0 }}>🔹 {group.groupTitle}</h4>
                        </div>
                      )}
                      <div className="schedule-day">
                        <h4>{group.dayTitle}</h4>
                        <ul>
                          {group.items.map((item, j) => (
                            <li key={j}>
                              {item.time
                                ? <><strong>{item.time}:</strong> {item.description}</>
                                : item.description
                              }
                            </li>
                          ))}
                        </ul>
                      </div>
                    </React.Fragment>
                  )
                })}
              </div>
            </>
          )}

          {/* ── Single banner image (primary event) ─────────── */}
          {(bannerLocal || bannerFallback) && (
            <div
              className="event-detail-image"
              style={{ backgroundImage: `url(${bannerLocal}), url(${bannerFallback})` }}
            />
          )}

          {/* ── Registration / seva ──────────────────────────── */}
          {allRegistration.length > 0 && (
            <>
              <h3>Featured Events Highlights</h3>
              <div className="registration-info">
                <ul>
                  {allRegistration.map((item, i) => (
                    <li key={i}>
                      <strong>
                        {item.subEventTitle ? `[${item.subEventTitle}] ` : ''}{item.name}:
                      </strong>{' '}
                      {item.price > 0 ? `₹${item.price}/-` : 'FREE'}
                      {item.description ? ` ${item.description}` : ''}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* ── Note + closing ───────────────────────────────── */}
          {noteText && (
            <>
              <h3>📌 Note</h3>
              <p>{noteText}</p>
            </>
          )}
          {closingText && <p><strong>{closingText}</strong></p>}

          {/* ── CTA ──────────────────────────────────────────── */}
          <a className="btn primary" href="#/payment">Register Now</a>
        </div>

        {/* ── Sidebar ──────────────────────────────────────────── */}
        <aside className="event-detail-sidebar">
          <div className="sidebar-card">
            <h4>Contact Information</h4>
            <p>For registration and more details, please contact the temple office.</p>
            <div className="phone">📧 sitaramachandradevalayam@gmail.com</div>
            <div className="socials">
              <SocialIcons />
            </div>
          </div>

          <div className="sidebar-card">
            <h4>Important Notes</h4>
            <ul className="sidebar-notes">
              {sidebarNotes.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </div>

          <div className="sidebar-map">
            <iframe
              title="Event location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-80.405%2C25.711%2C-80.119%2C25.882&amp;layer=mapnik"
              loading="lazy"
            />
          </div>
        </aside>
      </section>

      {/* ── Newsletter ───────────────────────────────────────── */}
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
