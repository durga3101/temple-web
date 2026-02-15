import React from 'react'

const mainVideo = {
  url: 'https://www.youtube.com/watch?v=_mH1kFbLjKg',
  title: 'Maha Mrityunjaya Sahitha Rudra Homam',
  date: 'February 14, 2026',
  description:
    'A highly powerful and sacred Vedic ritual dedicated to Lord Shiva in his forms as Mrityunjaya (the conqueror of death) and Rudra (the destroyer of evil/negativity)'
}

const thumbVideos = [
  {
    url: 'https://www.youtube.com/shorts/qpq4-LYcTnQ',
    title: 'Maha Shivaratri Events'
  },
  {
    url: 'https://www.youtube.com/shorts/cw7nIbASZWU',
    title: 'A historic moment! 🛕'
  },
  {
    url: 'https://www.youtube.com/shorts/YJOG99jTMYQ',
    title: 'Rudra Homam Highlights'
  },
  {
    url: 'https://www.youtube.com/shorts/_2eI9QOsaU8',
    title: 'Maha Shivaratri Events - 2026'
  }
]

function getVideoId(url) {
  const watchMatch = url.match(/[?&]v=([^&]+)/)
  if (watchMatch) return watchMatch[1]
  const shortsMatch = url.match(/shorts\/([^?&/]+)/)
  if (shortsMatch) return shortsMatch[1]
  return ''
}

function getThumb(url) {
  const id = getVideoId(url)
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : ''
}

export default function LiveBroadcast() {
  return (
    <section id="live-broadcast" className="live-broadcast">
      <div className="container">
        <h2>Our Live Broadcast</h2>
        <div className="live-feature">
          <a
            className="live-video"
            href={mainVideo.url}
            target="_blank"
            rel="noreferrer"
            style={{ backgroundImage: `url(${getThumb(mainVideo.url)})` }}
            aria-label="Watch live broadcast"
          >
            <span className="play" />
          </a>
          <div className="live-content">
            <span className="live-date">{mainVideo.date}</span>
            <h3>{mainVideo.title}</h3>
            <p>{mainVideo.description}</p>
          </div>
        </div>

        <div className="live-thumbs">
          {thumbVideos.map((video) => (
            <a
              key={video.url}
              className="live-thumb"
              href={video.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="thumb-image" style={{ backgroundImage: `url(${getThumb(video.url)})` }}>
                <span className="play small" />
              </div>
              <div className="thumb-title">{video.title}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
