import { Link } from 'react-router-dom'
import '../../styles/buttons.css'

const ACCENT = '#FF751F'

export function HeroCopy() {
  return (
    <div className="lf-copy">
      <h1 className="lf-h1 lf-rise lf-d2">
        <span className="lf-grad">Move Freight.</span>
        <span>
          Move <em>Business.</em>
        </span>
      </h1>
      <p className="lf-lede lf-rise lf-d3">
        One intelligent platform to plan, procure, track, and optimize every shipment, from first
        mile to final delivery.
      </p>
      <div className="lf-ctas lf-rise lf-d4">
        <Link
          className="lf-btn lf-btn-primary lf-btn-lg"
          to={{ pathname: '/', hash: 'get-started' }}
          style={{ background: ACCENT }}
        >
          Get Started <Arrow />
        </Link>
        <Link className="lf-btn lf-btn-ghost lf-btn-lg" to={{ pathname: '/', hash: 'sales' }}>
          Talk to Sales
        </Link>
      </div>
      <div className="lf-caps lf-rise lf-d5">
        <span>Plan</span>
        <span className="lf-sep" />
        <span>Procure</span>
        <span className="lf-sep" />
        <span>Track</span>
        <span className="lf-sep" />
        <span>Optimize</span>
      </div>
    </div>
  )
}

function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
