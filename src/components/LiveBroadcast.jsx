import React, { useEffect, useState, useCallback } from 'react'
import { fetchHomeData } from '../data/eventsApi'

const DEFAULT_MAIN = {
  url: '',
  title: 'Live Broadcast',
  date: '',
  description: ''
}

function getVideoId(url) {
  if (!url) return ''
  // watch?v=, v=, shorts/, youtu.be/, embed/
  const watchMatch = url.match(/[?&]v=([^&]+)/)
  if (watchMatch) return watchMatch[1]
  const shortsMatch = url.match(/shorts\/([^?&/]+)/)
  if (shortsMatch) return shortsMatch[1]
  const ytbShort = url.match(/youtu\.be\/([^?&/]+)/)
  if (ytbShort) return ytbShort[1]
  const embedMatch = url.match(/embed\/([^?&/]+)/)
  if (embedMatch) return embedMatch[1]
  // fallback: last path segment that looks like an id
  const pathMatch = url.match(/([A-Za-z0-9_-]{8,})$/)
  return pathMatch ? pathMatch[1] : ''
}

function getThumb(url) {
  const id = getVideoId(url)
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : ''
}

// Helpers for mapping sheet rows to video fields
const getUrlFromRow = (r) => (
  r?.url || ''
)
const getTitleFromRow = (r) => (
  r?.title || ''
)
const isMainRow = (r) => {
  if (!r) return false
  const v = String(r.main || '').toLowerCase()
  return ['1', 'true', 'yes', 'main', 'primary', 'featured'].some((tok) => v.includes(tok))
}

export default function LiveBroadcast() {
  const [mainVideo, setMainVideo] = useState(DEFAULT_MAIN)
  const [thumbVideos, setThumbVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const getUrl = useCallback((r) => getUrlFromRow(r), [])
  const getTitle = useCallback((r) => getTitleFromRow(r), [])
  const detectMain = useCallback((r) => isMainRow(r), [])

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError('')

    fetchHomeData()
      .then((rows) => {
        console.log('[LiveBroadcast] fetched rows:', rows)
        if (!mounted || !rows || !rows.length) return

        const mainRow = rows.find(detectMain) || rows[0]

        const main = {
          url: getUrl(mainRow) || DEFAULT_MAIN.url,
          title: getTitle(mainRow) || DEFAULT_MAIN.title,
          date: mainRow?.date || mainRow?.main_video_date || mainRow?.published_date || '',
          description: mainRow?.description || mainRow?.main_video_description || mainRow?.summary || '',
        }

        const thumbs = rows
          .filter((r) => getUrl(r) && r !== mainRow)
          .map((r) => ({ url: getUrl(r), title: getTitle(r) }))
          .slice(0, 8)

        if (mounted) {
          setMainVideo(main)
          setThumbVideos(thumbs)
        }
      })
      .catch((e) => {
        console.warn('Failed to load home sheet for live broadcast', e)
        if (mounted) setError(String(e?.message || e))
      })
      .finally(() => { if (mounted) setLoading(false) })

    return () => { mounted = false }
  }, [getUrl, getTitle, detectMain])

  if (loading) {
    return (
      <section id="live-broadcast" className="live-broadcast">
        <div className="container">Loading live broadcast…</div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="live-broadcast" className="live-broadcast">
        <div className="container">Failed to load live broadcasts: {error}</div>
      </section>
    )
  }

  if (!mainVideo.url && thumbVideos.length === 0) {
    return (
      <section id="live-broadcast" className="live-broadcast">
        <div className="container">No live broadcasts available.</div>
      </section>
    )
  }

  return (
    <section id="live-broadcast" className="live-broadcast">
      <div className="container">
        <h2>Our Live Broadcast</h2>
        <div className="live-feature">
          {mainVideo.url ? (
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
          ) : (
            <div className="live-video placeholder" aria-hidden="true" />
          )}

          <div className="live-content">
            <span className="live-date">{mainVideo.date}</span>
            <h3>{mainVideo.title}</h3>
            <p>{mainVideo.description}</p>
          </div>
        </div>

        {thumbVideos.length > 0 && (
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
        )}
      </div>
    </section>
  )
}
