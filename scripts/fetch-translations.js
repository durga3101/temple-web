// Script: fetch-translations.js
// Usage: node scripts/fetch-translations.js
// Description: Fetches translations from a Google Sheet and outputs en.json, hi.json, te.json in src/locales/

const fs = require('fs')
const path = require('path')
const https = require('https')
const { parse } = require('csv-parse/sync')

// CONFIGURE THESE:
const SHEET_ID = process.env.SHEET_ID || 'YOUR_SHEET_ID_HERE'
const SHEET_GID = process.env.SHEET_GID || '0' // Use the correct GID for your translation tab
const OUT_DIR = path.join(__dirname, '..', 'src', 'locales')
const LANGS = ['en', 'hi', 'te']

const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${SHEET_GID}`

function fetchCsv(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => resolve(data))
      res.on('error', reject)
    }).on('error', reject)
  })
}

async function main() {
  if (!SHEET_ID || SHEET_ID === 'YOUR_SHEET_ID_HERE') {
    console.error('Set SHEET_ID env variable or edit the script.')
    process.exit(1)
  }
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })
  const csv = await fetchCsv(CSV_URL)
  const records = parse(csv, { columns: true, skip_empty_lines: true })

  const translations = {}
  LANGS.forEach(lang => translations[lang] = {})

  for (const row of records) {
    const key = row['Key']
    LANGS.forEach(lang => {
      translations[lang][key] = row[lang === 'en' ? 'English (en)' : lang === 'hi' ? 'Hindi (hi)' : 'Telugu (te)'] || ''
    })
  }

  LANGS.forEach(lang => {
    fs.writeFileSync(path.join(OUT_DIR, `${lang}.json`), JSON.stringify(translations[lang], null, 2), 'utf8')
    console.log(`Wrote ${lang}.json`)
  })
}

main().catch(err => { console.error(err); process.exit(1) })
