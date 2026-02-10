const https = require('https')
const fs = require('fs')
const path = require('path')

const staticUrls = [
  'https://images.unsplash.com/photo-1554554497-0095c34db3ec?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1601815264039-67c8ba1a7f98?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573352763925-82bd5dfc31d1?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573457046516-b4e3b5dd50dd?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1597133541155-8f2f9da143a6?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1764426381847-0649ce4ffc17?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1764426382181-3f0763825ea0?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1641414024459-7eaa69b15eff?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1696239110980-3346523824e7?q=80&w=1400&auto=format&fit=crop'
]

const heroUrl = 'https://images.unsplash.com/photo-1554554497-0095c34db3ec?q=80&w=1800&auto=format&fit=crop'

const outDir = path.join(__dirname, '..', 'public', 'assets', 'events')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

function fetchAndSave(url, dest, redirects = 0) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects < 5) {
          const next = res.headers.location.startsWith('http')
            ? res.headers.location
            : new URL(res.headers.location, url).toString()
          res.resume()
          return resolve(fetchAndSave(next, dest, redirects + 1))
        }

        if (res.statusCode !== 200) return reject(new Error('Failed to fetch ' + url + ' status: ' + res.statusCode))

        const file = fs.createWriteStream(dest)
        res.pipe(file)
        file.on('finish', () => file.close(resolve))
        file.on('error', (err) => reject(err))
      })
      .on('error', reject)
  })
}

async function main() {
  console.log('Downloading Unsplash images into', outDir)
  for (let i = 0; i < staticUrls.length; i++) {
    const src = staticUrls[i]
    const dest = path.join(outDir, `event-${i + 1}.jpg`)
    try {
      await fetchAndSave(src, dest)
      console.log('Saved', dest)
    } catch (err) {
      console.error('Error saving', dest, err.message)
    }
  }
  try {
    const heroDest = path.join(__dirname, '..', 'public', 'assets', 'hero.jpg')
    await fetchAndSave(heroUrl, heroDest)
    console.log('Saved', heroDest)
  } catch (err) {
    console.error('Error saving hero.jpg', err.message)
  }
  console.log('Done')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
