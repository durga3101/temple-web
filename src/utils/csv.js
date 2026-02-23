/**
 * Parses a CSV text string into an array of objects.
 * Handles comma-separated values with quoted fields (including commas inside quotes).
 * Row 1 is treated as headers.
 */
export function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter(Boolean)
  if (lines.length === 0) return []

  const parseLine = (line) => {
    const out = []
    let cur = ''
    let inQuotes = false

    for (let i = 0; i < line.length; i++) {
      const ch = line[i]

      // Escaped quote ""
      if (ch === '"' && line[i + 1] === '"') {
        cur += '"'
        i++
        continue
      }

      if (ch === '"') {
        inQuotes = !inQuotes
        continue
      }

      if (ch === ',' && !inQuotes) {
        out.push(cur)
        cur = ''
        continue
      }

      cur += ch
    }

    out.push(cur)
    return out.map((s) => s.trim())
  }

  const headers = parseLine(lines[0]).map((h) => h.trim())

  return lines.slice(1).map((line) => {
    const cols = parseLine(line)
    const row = {}
    headers.forEach((h, idx) => {
      row[h] = cols[idx] ?? ''
    })
    return row
  })
}

/**
 * Safely convert to number, return 0 if invalid.
 */
export function toNumber(v) {
  const n = Number(String(v ?? '').replace(/[^\d.-]/g, ''))
  return Number.isFinite(n) ? n : 0
}

/**
 * Split a pipe-separated string into trimmed, non-empty items.
 * e.g. "Foo | Bar | Baz" → ["Foo", "Bar", "Baz"]
 */
export function splitPipe(str) {
  if (!str) return []
  return str.split('|').map((s) => s.trim()).filter(Boolean)
}
