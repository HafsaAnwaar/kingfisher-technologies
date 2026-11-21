import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../../app/theme-context'
import { VOICES, hexA, ink } from './voices-config'
import './CustomerVoices.css'

export function CustomerVoices() {
  const { theme } = useTheme()
  const light = theme === 'light'
  const sectionRef = useRef<HTMLElement>(null)
  const lastAction = useRef(Date.now())
  const [seen, setSeen] = useState(false)
  const [inView, setInView] = useState(false)
  const [hover, setHover] = useState(false)
  const [vi, setVi] = useState(0)
  const [vpar, setVpar] = useState<'a' | 'b'>('a')

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    if (!('IntersectionObserver' in window)) {
      setSeen(true)
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const on = entries.some((entry) => entry.isIntersecting)
        if (on) {
          lastAction.current = Date.now()
          setSeen(true)
        }
        setInView(on)
      },
      { threshold: 0.25 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!inView || hover || calm) return
      if (Date.now() - lastAction.current <= 7000) return
      lastAction.current = Date.now()
      setVi((current) => (current + 1) % VOICES.length)
      setVpar((current) => (current === 'b' ? 'a' : 'b'))
    }, 1900)
    return () => window.clearInterval(timer)
  }, [hover, inView])

  function showVoice(index: number) {
    const n = VOICES.length
    lastAction.current = Date.now() + 6000
    setVi(((index % n) + n) % n)
    setVpar((current) => (current === 'b' ? 'a' : 'b'))
  }

  const voice = VOICES[vi]
  const text = ink(voice.accent, light)
  const bd = hexA(voice.accent, light ? 0.45 : 0.4)
  const tint = hexA(voice.accent, light ? 0.1 : 0.12)

  return (
    <section
      className={seen ? 'lf-voices lf-voices-in' : 'lf-voices'}
      id="customers"
      aria-labelledby="lf-voices-title"
      ref={sectionRef}
    >
      <div className="lf-voices-wrap">
        <header className="lf-sk-head">
          <div className="lf-sk-eyebrow lf-vr">Customer voices</div>
          <h2 className="lf-sk-h lf-vr" id="lf-voices-title" style={{ animationDelay: '80ms' }}>
            <span>Hear from the people</span>
            <em>who run freight.</em>
          </h2>
          <p className="lf-sk-sub lf-vr" style={{ animationDelay: '160ms' }}>
            See how freight teams use one connected platform to manage operations, visibility,
            documentation, and finance.
          </p>
        </header>

        <div
          className="lf-vcard lf-vr"
          style={{ animationDelay: '240ms' }}
          role="group"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => {
            lastAction.current = Date.now()
            setHover(false)
          }}
        >
          <div className="lf-vleft">
            <span className="lf-vglow" aria-hidden="true" style={{ backgroundColor: voice.accent }} />
            <div className={`lf-vid lf-tk-${vpar}`}>
              <span className="lf-vlogo" style={{ borderColor: bd, color: text }} aria-hidden="true">
                {voice.initials}
              </span>
              <span className="lf-vco">{voice.company}</span>
              <span className="lf-vind">{voice.industry}</span>
              <span className="lf-vph">Logo placeholder</span>
            </div>
          </div>
          <div className="lf-vright">
            <div className={`lf-vbody lf-tk-${vpar}`} aria-live="polite">
              <div className="lf-vtop">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: text }}
                  aria-hidden="true"
                >
                  <path d="M7.2 6C4.9 6 3 7.9 3 10.2c0 2.2 1.7 3.9 3.8 4.1-.3 1.4-1.2 2.6-2.6 3.4l.9 1.3C8.7 17.6 11 14.6 11 10.6 11 8 9.4 6 7.2 6zm10 0C14.9 6 13 7.9 13 10.2c0 2.2 1.7 3.9 3.8 4.1-.3 1.4-1.2 2.6-2.6 3.4l.9 1.3c3.6-1.4 5.9-4.4 5.9-8.4C21 8 19.4 6 17.2 6z" />
                </svg>
                <span className="lf-vdemo">
                  Placeholder · slot {vi + 1} of {VOICES.length}
                </span>
              </div>
              <p className="lf-vquote">{voice.quote}</p>
              <span
                className="lf-vcap"
                style={{ color: text, borderColor: bd, background: tint }}
              >
                {voice.capability}
              </span>
              <div className="lf-vwho">
                <b>{voice.name}</b>
                <span>
                  {voice.role} · {voice.company}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="lf-vctl lf-vr" style={{ animationDelay: '320ms' }}>
          <button
            type="button"
            className="lf-varrow"
            aria-label="Previous testimonial"
            onClick={() => showVoice(vi - 1)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <div className="lf-vdots">
            {VOICES.map((item, i) => (
              <button
                type="button"
                key={item.id}
                className={i === vi ? 'lf-vdot is-on' : 'lf-vdot'}
                style={{
                  backgroundColor: i === vi ? voice.accent : 'var(--lf-border-strong)',
                }}
                aria-label={`Show testimonial ${i + 1}: ${item.role}`}
                aria-pressed={i === vi}
                onClick={() => showVoice(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="lf-varrow"
            aria-label="Next testimonial"
            onClick={() => showVoice(vi + 1)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <div
          className="lf-vpills lf-vr"
          role="group"
          aria-label="Choose a customer"
          style={{ animationDelay: '400ms' }}
        >
          {VOICES.map((item, i) => {
            const active = i === vi
            return (
              <button
                type="button"
                key={item.id}
                className={active ? 'lf-vpill is-on' : 'lf-vpill'}
                aria-pressed={active}
                onClick={() => showVoice(i)}
                style={{
                  borderColor: active ? hexA(item.accent, 0.6) : 'var(--lf-border)',
                  background: active
                    ? `linear-gradient(160deg, ${hexA(item.accent, light ? 0.08 : 0.12)}, transparent 70%), var(--lf-surface)`
                    : 'var(--lf-surface)',
                  boxShadow: active ? `0 10px 26px -14px ${hexA(item.accent, 0.6)}` : 'none',
                }}
              >
                <span
                  className="lf-vav"
                  style={{
                    background: hexA(item.accent, light ? 0.16 : 0.2),
                    color: ink(item.accent, light),
                  }}
                >
                  {item.initials}
                </span>
                <span className="lf-vpt">
                  <b>{item.name}</b>
                  <span>{item.role}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
