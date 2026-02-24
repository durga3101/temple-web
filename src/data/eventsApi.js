import { parseCsv, toNumber, splitPipe } from '../utils/csv'

/**
 * Reuses the same VITE_SHEET_ID as poojasApi.js.
 *
 * Tab names expected in the spreadsheet:
 *   Events          – event list (one row per event)
 *   EventDetails    – extended info (one row per event)
 *   EventSchedule   – schedule items (multiple rows per event)
 */
function sheetCsvUrl(tabName) {
  const id = import.meta.env.VITE_SHEET_ID
  if (!id) throw new Error('Missing env var: VITE_SHEET_ID')
  return `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tabName)}`
}

async function fetchCsv(tabName) {
  const url = sheetCsvUrl(tabName)
  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) throw new Error(`Failed to fetch tab "${tabName}" (HTTP ${res.status})`)
  return parseCsv(await res.text())
}

// ---------------------------------------------------------------------------
// Tab 1 – Events
// ---------------------------------------------------------------------------
// Expected columns:
// id | title | description | category | date | time | price |
// image_local | image_unsplash | author

export async function fetchEvents() {
  const rows = await fetchCsv('Events')
  return rows
    .filter((r) => r.title)
    .map((r) => ({
      id: toNumber(r.id),
      title: r.title,
      description: r.description,
      category: r.category,
      date: r.date,
      time: r.time,
      price: toNumber(r.price),
      local: r.image_local,
      unsplash: r.image_unsplash ? `${r.image_unsplash}&t=${Date.now()}` : '',
      author: r.author || 'Temple Committee',
    }))
}

// ---------------------------------------------------------------------------
// Tab 2 – EventDetails
// ---------------------------------------------------------------------------
// Expected columns:
// event_id | main_title | highlight_text | intro_text |
// schedule_subtitle | schedule_detail |
// location_subtitle | location_detail |
// special_subtitle  | special_detail  |
// registration      – pipe-separated "Name:Price:Description"
//                     e.g. Seva Contribution:1116:Participate in Lingodbhava|Rudra Homam:2500:3 hours
// notes             – pipe-separated sidebar notes
// note_text         – single closing paragraph shown in main content
// closing_text      – bold closing line
// image_local | image_fallback

export async function fetchEventDetails() {
  const rows = await fetchCsv('EventDetails')
  return rows
    .filter((r) => r.event_id)
    .map((r) => ({
      eventId: toNumber(r.event_id),
      mainTitle: r.main_title,
      highlightText: r.highlight_text,
      introText: r.intro_text,
      schedule: {
        icon: '📅',
        title: 'Date & Time',
        subtitle: r.schedule_subtitle,
        detail: r.schedule_detail,
      },
      location: {
        icon: '📍',
        title: 'Location',
        subtitle: r.location_subtitle,
        detail: r.location_detail,
      },
      special: {
        icon: '🕉️',
        title: 'Special Programs',
        subtitle: r.special_subtitle,
        detail: r.special_detail,
      },
      registration: splitPipe(r.registration).map((item) => {
        const parts = item.split(':')
        return {
          name: parts[0]?.trim() ?? '',
          price: toNumber(parts[1]),
          description: parts.slice(2).join(':').trim(),
        }
      }),
      notes: splitPipe(r.notes),
      noteText: r.note_text,
      closingText: r.closing_text,
      images: {
        local: r.image_local,
        fallback: r.image_fallback,
      },
    }))
}

// ---------------------------------------------------------------------------
// Tab 3 – EventSchedule
// ---------------------------------------------------------------------------
// Expected columns:
// event_id | day_title | item_time | item_description
//
// Multiple rows per event. Rows with the same event_id + day_title are
// grouped under one schedule day section.

export async function fetchEventSchedule() {
  const rows = await fetchCsv('EventSchedule')
  const map = {}

  rows
    .filter((r) => r.event_id && r.day_title)
    .forEach((r) => {
      const eventId = toNumber(r.event_id)
      if (!map[eventId]) map[eventId] = {}
      const day = r.day_title.trim()
      if (!map[eventId][day]) map[eventId][day] = []
      map[eventId][day].push({
        time: r.item_time?.trim() ?? '',
        description: r.item_description?.trim() ?? '',
      })
    })

  return Object.entries(map).map(([eventId, days]) => ({
    eventId: Number(eventId),
    scheduleDays: Object.entries(days).map(([title, items]) => ({ title, items })),
  }))
}

// ---------------------------------------------------------------------------
// Convenience: load everything and merge into one list by id
// ---------------------------------------------------------------------------
export async function fetchAllEventData() {
  const [events, details, schedule] = await Promise.all([
    fetchEvents(),
    fetchEventDetails(),
    fetchEventSchedule(),
  ])

  const detailsById = Object.fromEntries(details.map((d) => [d.eventId, d]))
  const scheduleById = Object.fromEntries(schedule.map((s) => [s.eventId, s.scheduleDays]))

  return events.map((e) => ({
    ...e,
    detail: detailsById[e.id]
      ? { ...detailsById[e.id], scheduleDays: scheduleById[e.id] ?? [] }
      : null,
  }))
}
