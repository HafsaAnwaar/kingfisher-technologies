import { Link } from 'react-router-dom'
import logo from '../../assets/logo.webp'
import { PLATFORM_MODULES, modulePath } from '../../content/platform-modules'
import { PUBLIC_CONTACT_EMAIL, PUBLIC_CONTACT_MAILTO } from '../../content/site-contact'
import { SOLUTIONS, solutionPath } from '../../content/solutions'
import './Footer.css'

const COMPANY = [
  { to: '/about', label: 'About Us' },
  { to: '/customers', label: 'Customers' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
  { to: '/security', label: 'Security & Privacy' },
] as const

const RESOURCES = [
  { to: '/resources', label: 'Resources hub' },
  { to: '/resources/faq', label: 'FAQ' },
  { to: '/resources/guides', label: 'Guides' },
  { to: '/features', label: 'Features' },
  { to: '/portals', label: 'Portals' },
  { to: '/platform', label: 'Platform' },
  { to: '/solutions', label: 'Solutions' },
] as const

function MailIcon() {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="lf-foot">
      <div className="lf-foot-wrap">
        <div className="lf-foot-grid">
          <div className="lf-foot-brand">
            <Link className="lf-brand" to="/" aria-label="Kingfisher Wings Technologies home">
              <img className="lf-brand-logo" src={logo} alt="Kingfisher Wings Technologies" width={160} height={52} />
            </Link>
            <p className="lf-foot-tag">
              The freight-forwarding ERP for modern logistics teams — from quotation to invoice.
            </p>
            <ul className="lf-foot-contact">
              <li>
                <MailIcon />
                <a href={PUBLIC_CONTACT_MAILTO}>{PUBLIC_CONTACT_EMAIL}</a>
              </li>
            </ul>
            <div className="lf-socials">
              <a href="/#" aria-label="LinkedIn">
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="/#" aria-label="X">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4l16 16" />
                  <path d="M20 4 4 20" />
                </svg>
              </a>
              <a href="/#" aria-label="YouTube">
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
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
              <a href="/#" aria-label="Instagram">
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
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </a>
            </div>
          </div>

          <nav className="lf-foot-col" aria-label="Platform">
            <h3>Platform</h3>
            <ul>
              {PLATFORM_MODULES.map((item) => (
                <li key={item.slug}>
                  <Link to={modulePath(item.slug)}>{item.footerLabel || item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lf-foot-col" aria-label="Solutions">
            <h3>Solutions</h3>
            <ul>
              {SOLUTIONS.map((item) => (
                <li key={item.slug}>
                  <Link to={solutionPath(item.slug)}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lf-foot-col" aria-label="Company">
            <h3>Company</h3>
            <ul>
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lf-foot-col" aria-label="Resources">
            <h3>Resources</h3>
            <ul>
              {RESOURCES.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="lf-foot-bottom">
          <span>© 2026 Kingfisher. All rights reserved.</span>
          <nav className="lf-foot-legal" aria-label="Legal">
            <Link to="/legal/terms">Terms</Link>
            <Link to="/legal/privacy-policy">Privacy</Link>
            <Link to="/legal/cookie-policy">Cookies</Link>
            <Link to="/legal/data-protection">Data Protection</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
