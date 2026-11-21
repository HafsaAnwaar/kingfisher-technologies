import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../app/theme-context'
import { FEATURES, featurePath } from '../../content/features'
import { PLATFORM_MODULES, modulePath } from '../../content/platform-modules'
import { SOLUTIONS, solutionPath } from '../../content/solutions'
import '../../styles/buttons.css'
import { Logo } from './Logo'
import './Navbar.css'

const ACCENT = '#FF751F'

const OPS = PLATFORM_MODULES.filter((m) => m.cat === 'Operations')
const BIZ = PLATFORM_MODULES.filter((m) => m.cat === 'Business')

type Mega = 'platform' | 'solutions' | 'features' | 'company' | null

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [mega, setMega] = useState<Mega>(null)
  const wrapRef = useRef<HTMLElement>(null)
  const isDark = theme === 'dark'

  function closeAll() {
    setMenuOpen(false)
    setMega(null)
  }

  useEffect(() => {
    function onDocClick(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setMega(null)
      }
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  function toggleMega(next: Exclude<Mega, null>) {
    setMenuOpen(false)
    setMega((current) => (current === next ? null : next))
  }

  return (
    <header className="lf-navwrap" ref={wrapRef}>
      <nav className="lf-nav" aria-label="Primary">
        <Logo />
        <div className="lf-links">
          <button
            type="button"
            className="lf-link"
            aria-expanded={mega === 'platform'}
            onClick={() => toggleMega('platform')}
          >
            Platform <Caret />
          </button>
          <button
            type="button"
            className="lf-link"
            aria-expanded={mega === 'solutions'}
            onClick={() => toggleMega('solutions')}
          >
            Solutions <Caret />
          </button>
          <button
            type="button"
            className="lf-link"
            aria-expanded={mega === 'features'}
            onClick={() => toggleMega('features')}
          >
            Features <Caret />
          </button>
          <Link className="lf-link" to="/security" onClick={closeAll}>
            Security
          </Link>
          <button
            type="button"
            className="lf-link"
            aria-expanded={mega === 'company'}
            onClick={() => toggleMega('company')}
          >
            Company <Caret />
          </button>
        </div>
        <div className="lf-actions">
          <button
            className="lf-theme-btn"
            type="button"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={toggleTheme}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <Link className="lf-link lf-login" to="/contact" onClick={closeAll}>
            Login
          </Link>
          <Link
            className="lf-btn lf-btn-primary lf-btn-sm lf-navcta"
            to="/contact"
            style={{ background: ACCENT }}
            onClick={closeAll}
          >
            Book a Demo
          </Link>
          <button
            className="lf-menu-btn"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => {
              setMega(null)
              setMenuOpen((open) => !open)
            }}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {mega === 'platform' ? (
          <div className="lf-mega is-open" id="mega-platform">
            <div className="lf-mega-grid">
              <div>
                <h4>Operations</h4>
                {OPS.map((m) => (
                  <Link key={m.slug} to={modulePath(m.slug)} onClick={closeAll}>
                    {m.name}
                    <small>{m.tagline.slice(0, 64)}…</small>
                  </Link>
                ))}
              </div>
              <div>
                <h4>Business</h4>
                {BIZ.map((m) => (
                  <Link key={m.slug} to={modulePath(m.slug)} onClick={closeAll}>
                    {m.name}
                    <small>{m.tagline.slice(0, 64)}…</small>
                  </Link>
                ))}
                <Link to="/platform" onClick={closeAll}>
                  <strong>All platform modules</strong>
                  <small>Browse the full stack</small>
                </Link>
              </div>
            </div>
          </div>
        ) : null}

        {mega === 'solutions' ? (
          <div className="lf-mega is-open" id="mega-solutions">
            <div className="lf-mega-grid">
              {SOLUTIONS.map((s) => (
                <Link key={s.slug} to={solutionPath(s.slug)} onClick={closeAll}>
                  {s.name}
                  <small>{s.tagline.slice(0, 72)}…</small>
                </Link>
              ))}
              <Link to="/solutions" onClick={closeAll}>
                <strong>All solutions</strong>
                <small>Find your operator profile</small>
              </Link>
            </div>
          </div>
        ) : null}

        {mega === 'features' ? (
          <div className="lf-mega is-open" id="mega-features">
            <div className="lf-mega-grid">
              <div>
                <h4>Capabilities</h4>
                {FEATURES.slice(0, 5).map((f) => (
                  <Link key={f.slug} to={featurePath(f.slug)} onClick={closeAll}>
                    {f.name}
                    <small>{f.tagline.slice(0, 64)}…</small>
                  </Link>
                ))}
              </div>
              <div>
                <h4>More</h4>
                {FEATURES.slice(5).map((f) => (
                  <Link key={f.slug} to={featurePath(f.slug)} onClick={closeAll}>
                    {f.name}
                    <small>{f.tagline.slice(0, 64)}…</small>
                  </Link>
                ))}
                <Link to="/portals" onClick={closeAll}>
                  <strong>Customer & vendor portals</strong>
                  <small>Controlled collaboration</small>
                </Link>
                <Link to="/features" onClick={closeAll}>
                  <strong>All features</strong>
                  <small>Capability map</small>
                </Link>
              </div>
            </div>
          </div>
        ) : null}

        {mega === 'company' ? (
          <div className="lf-mega is-open" id="mega-company">
            <div className="lf-mega-grid">
              <div>
                <h4>Company</h4>
                <Link to="/about" onClick={closeAll}>
                  About Us
                  <small>Vision, mission, and values</small>
                </Link>
                <Link to="/customers" onClick={closeAll}>
                  Customers
                  <small>Operator outcomes</small>
                </Link>
                <Link to="/pricing" onClick={closeAll}>
                  Pricing
                  <small>Plans and packaging</small>
                </Link>
                <Link to="/careers" onClick={closeAll}>
                  Careers
                  <small>Join the team</small>
                </Link>
              </div>
              <div>
                <h4>Resources</h4>
                <Link to="/resources" onClick={closeAll}>
                  Resources hub
                  <small>Guides, insights, updates</small>
                </Link>
                <Link to="/resources/faq" onClick={closeAll}>
                  FAQ
                  <small>Straight product answers</small>
                </Link>
                <Link to="/contact" onClick={closeAll}>
                  Contact
                  <small>Demo, sales, support</small>
                </Link>
              </div>
            </div>
          </div>
        ) : null}

        {menuOpen ? (
          <div className="lf-mpanel">
            <Link className="lf-mlink" to="/platform" onClick={closeAll}>
              Platform
            </Link>
            <Link className="lf-mlink" to="/solutions" onClick={closeAll}>
              Solutions
            </Link>
            <Link className="lf-mlink" to="/features" onClick={closeAll}>
              Features
            </Link>
            <Link className="lf-mlink" to="/portals" onClick={closeAll}>
              Portals
            </Link>
            <Link className="lf-mlink" to="/security" onClick={closeAll}>
              Security
            </Link>
            <Link className="lf-mlink" to="/customers" onClick={closeAll}>
              Customers
            </Link>
            <Link className="lf-mlink" to="/pricing" onClick={closeAll}>
              Pricing
            </Link>
            <Link className="lf-mlink" to="/about" onClick={closeAll}>
              About
            </Link>
            <Link className="lf-mlink" to="/resources" onClick={closeAll}>
              Resources
            </Link>
            <Link className="lf-mlink" to="/careers" onClick={closeAll}>
              Careers
            </Link>
            <div className="lf-mrule" />
            <Link className="lf-mlink" to="/contact" onClick={closeAll}>
              Login
            </Link>
            <Link
              className="lf-btn lf-btn-primary"
              to="/contact"
              onClick={closeAll}
              style={{ background: ACCENT }}
            >
              Book a Demo
            </Link>
          </div>
        ) : null}
      </nav>
    </header>
  )
}

function Caret() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" />
    </svg>
  )
}
