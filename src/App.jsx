import { useCallback, useEffect, useState } from 'react'
import Envelope from './components/Envelope.jsx'
import Invitation from './components/Invitation.jsx'

const OPEN_DELAY_MS = 2400
const OPEN_DELAY_REDUCED_MS = 250

export default function App() {
  const [phase, setPhase] = useState('closed')

  const open = useCallback(() => {
    setPhase((current) => (current === 'closed' ? 'opening' : current))
  }, [])

  useEffect(() => {
    if (phase !== 'opening') return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const delay = reduceMotion ? OPEN_DELAY_REDUCED_MS : OPEN_DELAY_MS
    const timer = window.setTimeout(() => setPhase('open'), delay)
    return () => window.clearTimeout(timer)
  }, [phase])

  useEffect(() => {
    document.documentElement.classList.toggle('is-locked', phase !== 'open')
  }, [phase])

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Envelope phase={phase} onOpen={open} />
      {phase !== 'closed' && <Invitation visible={phase === 'open'} />}
    </>
  )
}
