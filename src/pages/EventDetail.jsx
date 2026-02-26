import React, { useEffect, useState } from 'react'
import PageHero from '../components/PageHero'
import SocialIcons from '../components/SocialIcons'
import { fetchEventPageData } from '../data/eventsApi'

const EVENT_ID = 'Vasantha Navaratri Utsavam 2026'

export default function EventDetail() {
  const [rows, setRows]       = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState('')

  useEffect(() => {
    fetchEventPageData(EVENT_ID)
      .then((data) => { console.log('[EventDetail] rows:', data); setRows(data) })
      .catch((e) => setError(e?.message || 'Failed to load'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>Loading event details…</div>
  if (error)   return <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>Error: {error}</div>
  if (!rows.length) return <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>No event data found for "{EVENT_ID}"</div>

  const main = rows[0]

  // Group rows by date for schedule sections. Split each date into daily and scheduled items
  const byDateMap = {}
  rows.forEach((r) => {
    const key = r.date || 'Date TBA'
    if (!byDateMap[key]) byDateMap[key] = []
    byDateMap[key].push(r)
  })

  const isDaily = (item) => (item.category || '').toLowerCase().includes('daily')
  const groupedByDate = Object.entries(byDateMap).map(([date, items]) => ({
    date,
    items,
    dailyItems: items.filter(isDaily),
    scheduledItems: items.filter((it) => !isDaily(it)),
  }))

  // Sections that contain at least one daily item
  const dailySections = groupedByDate.filter((g) => g.dailyItems.length > 0)
  // Sections that contain at least one non-daily (scheduled/featured) item
  const scheduledSections = groupedByDate.filter((g) => g.scheduledItems.length > 0)

  // Rows with a price → registration/featured events list
  const registrationItems = rows.filter((r) => r.price > 0)

  // First row that has an image
  const imageRow = rows.find((r) => r.imageLocal || r.imageRemote)
  const imageBg = imageRow
    ? [
        imageRow.imageLocal  ? `url(${imageRow.imageLocal})`  : '',
        imageRow.imageRemote ? `url(${imageRow.imageRemote})` : '',
      ].filter(Boolean).join(', ')
    : ''

  return (
    <div className="event-detail-page">
      <PageHero
        title={main.event_id}
        description={main.description}
      />

      <section className="container event-detail-info">
        <article className="info-card accent">
          <div className="info-icon">📅</div>
          <div>
            <h4>Date &amp; Time</h4>
            <p>{main.subtitle}</p>
            <span>{main.date}{main.time ? ` · ${main.time}` : ''}</span>
          </div>
        </article>
        <article className="info-card dark">
          <div className="info-icon">📍</div>
          <div>
            <h4>Location</h4>
            <p>Kakatiya Nagar, Ramachandrapuram</p>
            <span>Sangareddy District</span>
          </div>
        </article>
        <article className="info-card light">
          <div className="info-icon">🕉️</div>
          <div>
            <h4>Special Programs</h4>
            <p>{main.category}</p>
            <span className="phone">Contact for Registration</span>
          </div>
        </article>
      </section>

      <section className="container event-detail-body">
        <div className="event-detail-content">
          <h2>{main.event_id}</h2>

          <p>{main.description}</p>

          <h3>{main.event_id} Celebration Schedule</h3>

          <div className="event-schedule">
            {dailySections.map((day, di) => (
              <div className="schedule-day" key={`daily-${di}`}>
                <h4>Daily Prayers  🙏 </h4>
                <ul>
                  {day.dailyItems.map((item, ii) => (
                    <li key={`daily-${di}-${ii}`}>
                      {item.time && <strong>{item.time}:</strong>} {item.title}{item.description ? ` - ${item.description}` : ''}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {scheduledSections.map((day, di) => (
              <React.Fragment key={`sched-${di}`}>
                {di === 0 && imageBg && (
                  <div className="event-detail-image" style={{ backgroundImage: imageBg }} />
                )}
                <div className="schedule-day">
                  <h4>{day.date}</h4>
                  <ul>
                    {day.scheduledItems.map((item, ii) => (
                      <li key={`sched-${di}-${ii}`}>
                        {item.time && <strong>{item.time}:</strong>} {item.title}{item.description ? ` - ${item.description}` : ''}
                      </li>
                    ))}
                  </ul>
                </div>
              </React.Fragment>
            ))}
          </div>

          {registrationItems.length > 0 && (
            <>
              <h3>Featured Events Highlights</h3>
              <div className="registration-info">
                <ul>
                  {registrationItems.map((r, i) => (
                    <li key={i}>
                      <strong>{r.title}:</strong> ₹{r.price}/- {r.description}
                    </li>
                  ))}
                  <li key={'annaprasadam'}>
                      <strong>🍛 Annaprasadam Seva:  </strong> ₹5116/- Donors can particicpate in all the above events.
                  </li>
                </ul>
              </div>
            </>
          )}

          <h3>📌 Note</h3>
          <p>{main.benefits}</p>
          <p>For further details, please contact the temple priest.</p>

          <a className="btn primary" href="#/payment">Register Now</a>
        </div>

        <aside className="event-detail-sidebar">
          <div className="sidebar-card">
            <h4>🙏 Register &amp; Participate</h4>
            <p>{main.benefits}</p>
            <a className="btn primary" href="#/payment" style={{ display: 'block', textAlign: 'center', marginTop: '0.75rem' }}>
              Register Now
            </a>
          </div>
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
              {rows.slice(0, 4).map((r, i) => r.benefits && <li key={i}>{r.benefits}</li>)}
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
