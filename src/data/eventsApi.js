import { parseCsv, toNumber } from '../utils/csv'

const SHEET_ID = import.meta.env.VITE_SHEET_ID

async function fetchCsv(tabName) {
  if (!SHEET_ID) throw new Error('Missing env var: VITE_SHEET_ID')
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tabName)}`
  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) throw new Error(`Failed to fetch tab "${tabName}" (HTTP ${res.status})`)
  return parseCsv(await res.text())
}

function mapRow(r) {
  return {
    id:          toNumber(r.id),
    event_id:    r.event_id        ?? '',
    title:       r.title           ?? '',
    subtitle:    r.sub_title       ?? '',
    description: r.description     ?? '',
    benefits:    r.benefits        ?? '',
    category:    r.category        ?? '',
    date:        r.date            ?? '',
    time:        r.time            ?? '',
    price:       toNumber(r.price),
    author:      r.author          || 'Temple Committee',
    imageLocal:  r.image_local?.trim() ?? '',
    imageRemote: r.image_unsplash?.trim() ?? '',
  }
}

// All events – used by EventContext / Events listing page
export async function fetchEvents() {
  const rows = await fetchCsv('Events')
  return rows.filter((r) => r.title).map(mapRow)
}

// All rows for a given event_id – used by EventDetail page
export async function fetchEventPageData(eventId) {
  const events = await fetchEvents()
  console.log('[eventsApi] total rows fetched:', events.length)
  console.log('[eventsApi] event_ids found:', events.map((e) => e.event_id))
  const id = eventId.trim().toLowerCase()
  const matched = events.filter((e) => e.event_id.trim().toLowerCase() === id)
  console.log('[eventsApi] matched rows for', JSON.stringify(eventId), ':', matched.length)
  return matched.length ? matched : events
}

// Alias kept for EventContext compatibility
export const fetchAllEventData = fetchEvents

// Fetch data from the 'Home' sheet (used by homepage components)
export async function fetchHomeData() {
  const rows = await fetchCsv('Live_Broadcast')
  console.log('[eventsApi] home rows fetched:', rows.length)
  return rows
}
