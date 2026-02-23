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

export default function App() {
  const [route, setRoute] = useState(() => {
    const hash = (window.location.hash || '#/').replace('#', '')
    return hash.split('?')[0] // Extract base route without query params
  })

  useEffect(() => {
    const onHash = () => {
      const hash = (window.location.hash || '#/').replace('#', '')
      
      // Check if it's an anchor link (element ID on home page)
      if (hash && hash !== '/' && !hash.startsWith('/')) {
        // This is an anchor link, set route to home and scroll to element
        setRoute('/')
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      } else {
        // Normal route - extract base route without query params
        const baseRoute = hash.split('?')[0]
        setRoute(baseRoute)
      }
    }
    
    onHash() // Handle initial load
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
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
        {route === '/event-detail' && <EventDetail />}
        {route === '/poojas' && <Poojas />}
        {route === '/pooja-detail' && <PoojaDetail />}
        {route === '/contact' && <Contact />}
        {route === '/payment' && <Payment />}
      </main>
      <Footer />
    </div>
    </PoojaProvider>
  )
}
