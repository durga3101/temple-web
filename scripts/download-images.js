const https = require('https')
const fs = require('fs')
const path = require('path')

const queries = [
  'temple,festival',
  'prayer,ceremony',
  'hindu,temple',
  'devotion,people',
  'religion,ritual',
  'gods,statue',
  'culture,procession',
  'spiritual,ceremony',
  'worship,temple'
]

const outDir = path.join(__dirname, '..', 'public', 'assets', 'events')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

function fetchAndSave(url, dest, redirects = 0) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects < 5) {
        // follow redirect
        const next = res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).toString()
        res.resume()
        return resolve(fetchAndSave(next, dest, redirects + 1))
      }

      if (res.statusCode !== 200) return reject(new Error('Failed to fetch ' + url + ' status: ' + res.statusCode))

      const file = fs.createWriteStream(dest)
      res.pipe(file)
      file.on('finish', () => file.close(resolve))
      file.on('error', (err) => reject(err))
    }).on('error', reject)
  })
}

async function main() {
  console.log('Downloading Unsplash images into', outDir)
  for (let i = 0; i < queries.length; i++) {
    const q = queries[i]
    const src = `https://source.unsplash.com/800x600/?${encodeURIComponent(q)}`
    const dest = path.join(outDir, `event-${i + 1}.jpg`)
    try {
      await fetchAndSave(src, dest)
      console.log('Saved', dest)
    } catch (err) {
      console.error('Error saving', dest, err.message)
    }
  }
  console.log('Done')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
