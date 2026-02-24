import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { fetchAllEventData } from '../data/eventsApi'

const EventContext = createContext(null)

export function EventProvider({ children }) {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedEventId, setSelectedEventId] = useState(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        setLoading(true)
        setError('')
        const data = await fetchAllEventData()
        if (!cancelled) setEvents(data)
      } catch (e) {
        if (!cancelled) setError(e?.message || 'Failed to load events')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  const selectedEvent = useMemo(
    () => events.find((e) => e.id === selectedEventId) ?? null,
    [events, selectedEventId]
  )

  return (
    <EventContext.Provider value={{ events, loading, error, selectedEvent, setSelectedEventId }}>
      {children}
    </EventContext.Provider>
  )
}

export function useEvents() {
  const ctx = useContext(EventContext)
  if (!ctx) throw new Error('useEvents must be used inside <EventProvider>')
  return ctx
}
