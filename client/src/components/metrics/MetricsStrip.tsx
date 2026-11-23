import { useEffect, useRef, useState } from 'react'
import './MetricsStrip.css'

const COUNT_MS = 1800
const STAGGER_MS = 140
const TOTAL_MS = COUNT_MS + 4 * STAGGER_MS

function ease(progress: number) {
  return progress >= 1 ? 1 : 1 - 2 ** (-10 * progress)
}

function progressAt(index: number, elapsed: number, seen: boolean, done: boolean) {
  if (done) return 1
  if (!seen) return 0
  return ease(Math.max(0, Math.min(1, (elapsed - index * STAGGER_MS) / COUNT_MS)))
}

const METRICS = [
  {
    sr: '₹250M+',
    delay: '0ms',
    label: 'Freight processed / month',
    value: (progress: number) => (
      <>
        <span className="lf-acc">₹</span>
        {Math.round(250 * progress)}
        <span className="lf-acc">M+</span>
      </>
    ),
  },
  {
    sr: '480K+',
    delay: '120ms',
    label: 'Shipments / month',
    value: (progress: number) => (
      <>
        {Math.round(480 * progress)}
        <span className="lf-acc">K+</span>
      </>
    ),
  },
  {
    sr: '98.6%',
    delay: '240ms',
    label: 'On-time delivery',
    value: (progress: number) => (
      <>
        {(98.6 * progress).toFixed(1)}
        <span className="lf-acc">%</span>
      </>
    ),
  },
  {
    sr: '180+',
    delay: '360ms',
    label: 'Carriers connected',
    value: (progress: number) => (
      <>
        {Math.round(180 * progress)}
        <span className="lf-acc">+</span>
      </>
    ),
  },
  {
    sr: '24/7',
    delay: '480ms',
    label: 'AI monitoring',
    value: (progress: number) => (
      <>
        {Math.round(24 * progress)}
        <span className="lf-acc">/7</span>
      </>
    ),
  },
] as const

export function MetricsStrip() {
  const metricsRef = useRef<HTMLDivElement>(null)
  const [seen, setSeen] = useState(false)
  const [done, setDone] = useState(false)
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const target = metricsRef.current
    if (!target) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      setSeen(true)
      setDone(true)
      setElapsed(TOTAL_MS)
      return
    }

    let frame = 0
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        const started = performance.now()
        setSeen(true)
        const tick = (now: number) => {
          const ms = now - started
          if (ms >= TOTAL_MS) {
            setElapsed(TOTAL_MS)
            setDone(true)
            return
          }
          setElapsed(ms)
          frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.35 },
    )

    observer.observe(target)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="lf-trust lf-trust-metrics" aria-label="Network scale">
      <div className="lf-trust-glow" aria-hidden="true" />
      <div className="lf-trust-grain" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg">
          <filter id="lf-noise-metrics">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#lf-noise-metrics)" />
        </svg>
      </div>
      <div className="lf-wrap">
        <div className="lf-livebar">
          <span className="lf-livetag">Live Network</span>
          <span className="lf-livesep" />
          <span>Freight moving across 18 regions · 24/7 visibility</span>
        </div>
        <div className="lf-hr" />
        <div className="lf-metrics" ref={metricsRef}>
          {METRICS.map((metric, index) => (
            <div
              key={metric.sr}
              className={seen ? 'lf-mc lf-on' : 'lf-mc'}
              style={{ transitionDelay: metric.delay }}
            >
              <div className="lf-num">
                <span className="lf-sr">{metric.sr}</span>
                <span aria-hidden="true">{metric.value(progressAt(index, elapsed, seen, done))}</span>
              </div>
              <div className="lf-mlabel">{metric.label}</div>
            </div>
          ))}
        </div>
        <div className="lf-hr lf-hr-b" />
      </div>
    </section>
  )
}
