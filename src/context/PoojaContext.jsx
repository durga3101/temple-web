import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { fetchAllPoojaData } from '../data/poojasApi'

const PoojaContext = createContext(null)

export function PoojaProvider({ children }) {
  const [poojas, setPoojas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedPoojaId, setSelectedPoojaId] = useState(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        setLoading(true)
        setError('')
        const data = await fetchAllPoojaData()
        if (!cancelled) setPoojas(data)
      } catch (e) {
        if (!cancelled) setError(e?.message || 'Failed to load poojas')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  const selectedPooja = useMemo(
    () => poojas.find((p) => p.id === selectedPoojaId) ?? null,
    [poojas, selectedPoojaId]
  )

  return (
    <PoojaContext.Provider value={{ poojas, loading, error, selectedPooja, setSelectedPoojaId }}>
      {children}
    </PoojaContext.Provider>
  )
}

export function usePoojas() {
  const ctx = useContext(PoojaContext)
  if (!ctx) throw new Error('usePoojas must be used inside <PoojaProvider>')
  return ctx
}
