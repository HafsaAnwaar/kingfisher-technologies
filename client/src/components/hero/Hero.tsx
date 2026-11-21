import { useEffect, useRef, useState, type MouseEvent } from 'react'
import './Hero.css'
import { HeroBackdrop } from './HeroBackdrop'
import { HeroCopy } from './HeroCopy'
import { HeroStage } from './HeroStage'

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduced(query.matches)
    apply()
    query.addEventListener('change', apply)
    return () => query.removeEventListener('change', apply)
  }, [])

  return reduced
}

export function Hero() {
  const reduced = useReducedMotion()
  const frame = useRef(0)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => () => cancelAnimationFrame(frame.current), [])

  function onMove(event: MouseEvent<HTMLElement>) {
    if (reduced) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => setOffset({ x, y }))
  }

  return (
    <section
      className="lf-hero"
      id="top"
      aria-label="KINGFISHER — AI-powered logistics platform"
      onMouseMove={onMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
    >
      <HeroBackdrop />
      <div className="lf-shell">
        <div className="lf-nav-spacer" aria-hidden="true" />
        <div className="lf-main">
          <HeroCopy />
          <HeroStage offset={reduced ? { x: 0, y: 0 } : offset} />
        </div>
      </div>
    </section>
  )
}
