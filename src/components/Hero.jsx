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


  // <div className="hero-content">
  //         <h1>GOD GIVE US POWER TO BELIEVE</h1>
  //         <p>
  //           Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit
  //           class corporis nostra rem quos voluptatibus habitant? Fames, vivamus 
  //           minim nemo enim, gravida lobortis quasi, eum.
  //         </p>
  //         <div className="cta">
  //           <a className="btn primary" href="#">BUY NOW</a>
  //           <a
  //             className="btn outline"
  //             href="https://www.youtube.com/@sitaramachandradevalayam"
  //             target="_blank"
  //             rel="noreferrer"
  //           >
  //             LIVE STREAM
  //           </a>
  //         </div>
  //       </div>