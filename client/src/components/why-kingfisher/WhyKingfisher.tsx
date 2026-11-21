import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { TRUST_LABELS, WHY_CELLS } from './why-config'
import './WhyKingfisher.css'

export function WhyKingfisher() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        setInView(true)
      },
      { threshold: 0.12 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className={inView ? 'lf-why lf-why-in' : 'lf-why'}
      id="why-kingfisher"
      aria-labelledby="lf-why-title"
      ref={sectionRef}
    >
      <div className="lf-why-wrap">
        <div className="lf-trustband">
          <div className="lf-trust-k">Built for logistics operating teams</div>
          <ul className="lf-trust-labels" aria-label="Teams that use Kingfisher">
            {TRUST_LABELS.map((label, index) => (
              <li key={label} style={{ transitionDelay: `${index * 40}ms` }}>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="lf-why-main">
          <div className="lf-why-eyebrow lf-wr">Why Kingfisher</div>
          <h2 className="lf-why-h lf-wr" id="lf-why-title" style={{ animationDelay: '80ms' }}>
            <span>Why modern logistics teams</span>
            <span>
              choose <em>Kingfisher.</em>
            </span>
          </h2>
          <div className="lf-why-grid">
            {WHY_CELLS.map((cell) => (
              <article
                key={cell.title}
                className={cell.highlight ? 'lf-why-cell lf-wr is-hi' : 'lf-why-cell lf-wr'}
                style={{ animationDelay: cell.delay }}
              >
                <h3 className="lf-why-t">{cell.title}</h3>
                <p className="lf-why-d">{cell.desc}</p>
              </article>
            ))}
          </div>
          <p className="lf-why-d lf-wr" style={{ marginTop: 28, animationDelay: '680ms' }}>
            <Link to="/security">Security &amp; Privacy</Link>
            {' · '}
            <Link to="/portals">Customer &amp; vendor portals</Link>
            {' · '}
            <Link to="/features">Features</Link>
            {' · '}
            <Link to="/resources/faq">FAQ</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
