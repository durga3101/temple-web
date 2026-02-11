import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import About from './components/About'
import Donations from './components/Donations'
import LiveBroadcast from './components/LiveBroadcast'
import Ministries from './components/Ministries'
import Volunteers from './components/Volunteers'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Events from './pages/Events'
import EventDetail from './pages/EventDetail'
import Contact from './pages/Contact'

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
            <Stats />
            <About />
            <Donations />
            <LiveBroadcast />
            <Ministries />
            <Volunteers />
            <Testimonials />
          </>
        )}

        {route === '/events' && <Events />}
        {route === '/event-detail' && <EventDetail />}
        {route === '/contact' && <Contact />}
      </main>
      <Footer />
    </div>
  )
}
