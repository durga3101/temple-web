import { parseCsv, toNumber, splitPipe } from '../utils/csv'

/**
 * Builds the published-CSV URL for a given sheet tab.
 *
 * Environment variables needed (add to .env):
 *   VITE_SHEET_ID       – the long ID from your Google Sheets URL
 *
 * Tab names expected in that spreadsheet:
 *   Poojas        – pooja list (one row per pooja)
 *   PoojaDetails  – extended info (one row per pooja)
 *   PoojaSteps    – procedure steps (multiple rows per pooja)
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
// Tab 1 – Poojas
// ---------------------------------------------------------------------------
// Expected columns:
// id | title | description | deity | category | date | time | price |
// image_local | image_unsplash | author
//
// deity values: sita-rama | shiva | hanuman | ganesha | goddess | grahas | all

export async function fetchPoojas() {
  const rows = await fetchCsv('Poojas')
  return rows
    .filter((r) => r.title)
    .map((r) => ({
      id: toNumber(r.id),
      title: r.title,
      description: r.description,
      deity: r.deity || 'all',
      category: r.category,
      date: r.date,
      time: r.time,
      price: toNumber(r.price),
      local: r.image_local,
      unsplash: r.image_unsplash
        ? `${r.image_unsplash}&t=${Date.now()}`
        : '',
      author: r.author || 'Temple Committee',
    }))
}

// ---------------------------------------------------------------------------
// Tab 2 – PoojaDetails
// ---------------------------------------------------------------------------
// Expected columns:
// pooja_id | main_title | highlight_text | intro_text |
// schedule_subtitle | schedule_detail |
// location_subtitle | location_detail |
// pricing_subtitle | pricing_detail |
// benefits        – pipe-separated "Title:Description" e.g.  Health:Promotes healing|Peace:Calms mind
// packages        – pipe-separated "Name:Price:Description"  e.g.  Regular:1116:Single family|Maha:2116:11 Brahmins
// notes           – pipe-separated plain notes
// mantra_sanskrit | mantra_transliteration | mantra_meaning |
// best_days       – pipe-separated day names
// image_local | image_fallback |
// booking_text | closing_text

export async function fetchPoojaDetails() {
  const rows = await fetchCsv('PoojaDetails')
  return rows
    .filter((r) => r.pooja_id)
    .map((r) => ({
      poojaId: toNumber(r.pooja_id),
      mainTitle: r.main_title,
      highlightText: r.highlight_text,
      introText: r.intro_text,
      schedule: {
        icon: '📅',
        title: 'Schedule',
        subtitle: r.schedule_subtitle,
        detail: r.schedule_detail,
      },
      location: {
        icon: '📍',
        title: 'Location',
        subtitle: r.location_subtitle,
        detail: r.location_detail,
      },
      pricing: {
        icon: '💰',
        title: 'Pooja Contribution',
        subtitle: r.pricing_subtitle,
        detail: r.pricing_detail,
      },
      benefits: splitPipe(r.benefits).map((item) => {
        const [title, ...rest] = item.split(':')
        return { title: title.trim(), description: rest.join(':').trim() }
      }),
      packages: splitPipe(r.packages).map((item) => {
        const parts = item.split(':')
        return {
          name: parts[0]?.trim() ?? '',
          price: toNumber(parts[1]),
          description: parts[2]?.trim() ?? '',
        }
      }),
      importantNotes: splitPipe(r.notes),
      mantra: {
        title: '🕉️ Mantra',
        sanskrit: r.mantra_sanskrit,
        transliteration: r.mantra_transliteration,
        meaning: r.mantra_meaning,
      },
      bestDays: {
        title: 'Best Days',
        days: splitPipe(r.best_days),
      },
      images: {
        local: r.image_local,
        fallback: r.image_fallback,
      },
      bookingInfo: {
        text: r.booking_text,
        closingText: r.closing_text,
      },
    }))
}

// ---------------------------------------------------------------------------
// Tab 3 – PoojaSteps
// ---------------------------------------------------------------------------
// Expected columns:
// pooja_id | section_title | step_label | step_description
//
// Multiple rows per pooja. Rows with the same pooja_id + section_title are
// grouped under one procedure section.

export async function fetchPoojaSteps() {
  const rows = await fetchCsv('PoojaSteps')
  const map = {}

  rows
    .filter((r) => r.pooja_id && r.section_title)
    .forEach((r) => {
      const poojaId = toNumber(r.pooja_id)
      if (!map[poojaId]) map[poojaId] = {}
      const sec = r.section_title.trim()
      if (!map[poojaId][sec]) map[poojaId][sec] = []
      map[poojaId][sec].push({
        label: r.step_label?.trim() ?? '',
        description: r.step_description?.trim() ?? '',
      })
    })

  // Convert to the shape PoojaDetail expects: { poojaId, procedures: [{title, items}] }
  return Object.entries(map).map(([poojaId, sections]) => ({
    poojaId: Number(poojaId),
    procedures: Object.entries(sections).map(([title, items]) => ({ title, items })),
  }))
}

// ---------------------------------------------------------------------------
// Convenience: load everything and merge into one list by id
// ---------------------------------------------------------------------------
export async function fetchAllPoojaData() {
  const [poojas, details, steps] = await Promise.all([
    fetchPoojas(),
    fetchPoojaDetails(),
    fetchPoojaSteps(),
  ])

  const detailsById = Object.fromEntries(details.map((d) => [d.poojaId, d]))
  const stepsById = Object.fromEntries(steps.map((s) => [s.poojaId, s.procedures]))

  return poojas.map((p) => ({
    ...p,
    detail: detailsById[p.id]
      ? { ...detailsById[p.id], procedures: stepsById[p.id] ?? [] }
      : null,
  }))
}
