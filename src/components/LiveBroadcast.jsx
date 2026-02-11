import React from 'react'

const mainVideo = {
  url: 'https://www.youtube.com/watch?v=B0wnk4aBj7s',
  title: 'A historic moment! 🛕',
  date: 'February 11, 2026',
  description:
    'A Divine foundation laying ceremony (Sankusthapana). The first stone is laid for the new Temple shrine 🙏. Experience the sacred energy of the Sankusthapana ceremony. '
}

const thumbVideos = [
  {
    url: 'https://www.youtube.com/shorts/qpq4-LYcTnQ',
    title: 'Maha Shivaratri Events'
  },
  {
    url: 'https://www.youtube.com/shorts/52wCqHJf8FQ',
    title: 'Sacred Sparsha Darshan'
  },
  {
    url: 'https://www.youtube.com/shorts/YJOG99jTMYQ',
    title: 'Rudra Homam Highlights'
  },
  {
    url: 'https://www.youtube.com/shorts/_9U28mDn7pk',
    title: 'Deepotsavam Celebration'
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
    <section className="live-broadcast">
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
