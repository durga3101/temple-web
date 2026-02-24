import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import About from './components/About'
import Donations from './components/Donations'
import LiveBroadcast from './components/LiveBroadcast'
import Deities from './components/Deities'
import Pandits from './components/Pandits'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Events from './pages/Events'
import EventDetail from './pages/EventDetail'
import Contact from './pages/Contact'
import Payment from './pages/Payment'
import Poojas from './pages/Poojas'
import PoojaDetail from './pages/PoojaDetail'
import { PoojaProvider } from './context/PoojaContext'
import { EventProvider } from './context/EventContext'

export default function App() {
  const [route,   setRoute]   = useState('/')
  const [eventId, setEventId] = useState(null)

  useEffect(() => {
    const onHash = () => {
      const hash = (window.location.hash || '#/').replace('#', '')
      const base = hash.split('?')[0]

      // Dynamic event route: #/event/:id
      const eventMatch = base.match(/^\/event\/(.+)$/)
      if (eventMatch) {
        setEventId(eventMatch[1])
        setRoute('/event-detail')
        return
      }

      // Check if it's an anchor link (element ID on home page)
      if (hash && hash !== '/' && !hash.startsWith('/')) {
        setRoute('/')
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      } else {
        setEventId(null)
        setRoute(base || '/')
      }
    }
    
    onHash() // Handle initial load
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <EventProvider>
    <PoojaProvider>
    <div className="app-root">
      <Header />
      <main>
        {route === '/' && (
          <>
            <Hero />
            <div className="container">
              <Features />
            </div>
            {/* <Stats /> */}
            {/* <About /> */}
            {/* <Donations /> */}
            <LiveBroadcast />
            <Deities />
            <Pandits />
            {/* <Testimonials /> */}
          </>
        )}

        {route === '/events' && <Events />}
        {route === '/event-detail' && <EventDetail eventId={eventId} />}
        {route === '/poojas' && <Poojas />}
        {route === '/pooja-detail' && <PoojaDetail />}
        {route === '/contact' && <Contact />}
        {route === '/payment' && <Payment />}
      </main>
      <Footer />
    </div>
    </PoojaProvider>
    </EventProvider>
  )
}
