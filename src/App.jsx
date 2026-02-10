import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Events from './pages/Events'

export default function App() {
  const [route, setRoute] = useState(() => (window.location.hash || '#/').replace('#', ''))

  useEffect(() => {
    const onHash = () => setRoute((window.location.hash || '#/').replace('#', ''))
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <div className="app-root">
      <Header />
      <main>
        {route === '/' && (
          <>
            <Hero />
            <div className="container">
              <Features />
            </div>
          </>
        )}

        {route === '/events' && <Events />}
      </main>
      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} Krishna Mega Temple</div>
      </footer>
    </div>
  )
}
