import React from 'react'

// Hero supports a local image override. Place `hero.jpg` in `public/assets/` to use it.
// The browser will try the local image first; if absent the Unsplash image is used.
export default function Hero({ localPath = '/assets/photos/sita-rama-1.jpeg' }) {
  const unsplash = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=80'
  const bg = `url('${localPath}'), url('${unsplash}')`

  return (
    <section className="hero" style={{ backgroundImage: bg }}>
      <div className="hero-overlay">
      </div>
    </section>
  )
}
