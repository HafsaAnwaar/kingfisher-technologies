import { useState, type CSSProperties, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { submitDemoRequest } from '../../lib/api'
import type { Faq, Feature, Step } from '../../content/platform-modules'
import { PUBLIC_CONTACT_EMAIL, PUBLIC_CONTACT_MAILTO } from '../../content/site-contact'
import './marketing.css'
import './live-hud.css'
import '../../styles/buttons.css'
import './inner/inner.css'
import { HeroFx, splitWords } from './inner/HeroFx'

export function MkWrap({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`lf-mk-wrap ${className}`.trim()}>{children}</div>
}

export function Arrow({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
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

/** Homepage-style section header: glass badge, big serif title with orange italic accent. */
export function SectionHead({
  eyebrow,
  title,
  sub,
  align = 'center',
  className = '',
}: {
  eyebrow: string
  title: ReactNode
  sub?: ReactNode
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <header className={`lf-x-head is-${align} ${className}`.trim()}>
      <span className="lf-x-badge">
        <span className="lf-x-badge-dot" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="lf-mk-h2">{title}</h2>
      {sub ? <p className="lf-mk-sub">{sub}</p> : null}
    </header>
  )
}

export function PageHero({
  eyebrow,
  title,
  lede,
  sub,
  primaryTo = '/contact',
  primaryLabel = 'Book a Demo',
  secondaryTo,
  secondaryLabel,
  stage,
  caps,
  compact = false,
}: {
  eyebrow: string
  title: ReactNode
  lede: string
  sub?: string
  primaryTo?: string
  primaryLabel?: string
  secondaryTo?: string
  secondaryLabel?: string
  stage?: ReactNode
  /** Mono capability line under the CTAs (homepage "Plan · Procure · Track"). */
  caps?: string[]
  /** Shorter hero for reading pages (legal, updates). */
  compact?: boolean
}) {
  return (
    <section className={compact ? 'lf-mk-hero lf-xh is-compact' : 'lf-mk-hero lf-xh'}>
      <HeroFx />
      <MkWrap className="lf-xh-wrap">
        <div className="lf-xh-copy">
          <span className="lf-xh-badge lf-xh-in">
            <span className="lf-xh-dot" aria-hidden="true" />
            {eyebrow}
          </span>
          <h1 className="lf-mk-h1 lf-xh-title">{splitWords(title)}</h1>
          <p className="lf-mk-lede lf-xh-in d1">{lede}</p>
          {sub ? <p className="lf-mk-sub lf-xh-in d2">{sub}</p> : null}
          <div className="lf-mk-ctas lf-xh-in d3">
            <Link className="lf-btn lf-btn-primary lf-btn-lg lf-x-btn-accent" to={primaryTo}>
              {primaryLabel} <Arrow />
            </Link>
            {secondaryTo && secondaryLabel ? (
              <Link className="lf-btn lf-btn-ghost lf-btn-lg" to={secondaryTo}>
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
          {caps?.length ? (
            <div className="lf-xh-caps lf-xh-in d4">
              {caps.map((cap, i) => (
                <span className="lf-xh-cap" key={cap}>
                  {i > 0 ? <span className="lf-xh-sep" aria-hidden="true" /> : null}
                  {cap}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        {stage ? <div className="lf-xh-stage lf-xh-in d4">{stage}</div> : null}
      </MkWrap>
      <div className="lf-xh-scroll" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}

export function ProductStage({
  title,
  sub,
  pills,
}: {
  title: string
  sub: string
  pills?: string[]
}) {
  return (
    <div className="lf-mk-stage">
      <div className="lf-mk-stage-top">
        <b>{title}</b>
        <span>{sub}</span>
      </div>
      {pills?.length ? (
        <div className="lf-mk-pills">
          {pills.map((pill, index) => (
            <span className={index === 0 ? 'lf-mk-pill on' : 'lf-mk-pill'} key={pill}>
              {pill}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}

/** Homepage-style dual-tone: last word(s) in italic orange gradient. */
export function accentName(name: string) {
  const parts = name.trim().split(/\s+/)
  if (parts.length <= 1) return <em>{name}</em>
  const last = parts.pop()!
  return (
    <>
      {parts.join(' ')} <em>{last}</em>
    </>
  )
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
      <path d="M5 5l6 6M11 5l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
      <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function BeforeAfter({
  eyebrow = 'Before & after',
  title,
  beforeTitle,
  afterTitle,
  before,
  after,
}: {
  eyebrow?: string
  title: ReactNode
  beforeTitle: string
  afterTitle: string
  before: string[]
  after: string[]
}) {
  return (
    <section className="lf-mk-section">
      <MkWrap>
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className="lf-mk-ba lf-x-ba">
          <article className="bad">
            <div className="lf-x-ba-top">
              <span className="lf-x-ba-tag">{beforeTitle}</span>
              <span className="lf-x-ba-state">Scattered</span>
            </div>
            <ul>
              {before.map((item, i) => (
                <li key={item} style={{ '--li': i } as CSSProperties}>
                  <span className="lf-x-ba-ico">
                    <CrossIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <div className="lf-x-ba-arrow" aria-hidden="true">
            <span>
              <Arrow size={20} />
            </span>
          </div>
          <article className="good">
            <div className="lf-x-ba-top">
              <span className="lf-x-ba-tag">{afterTitle}</span>
              <span className="lf-x-ba-state">Connected</span>
            </div>
            <ul>
              {after.map((item, i) => (
                <li key={item} style={{ '--li': i } as CSSProperties}>
                  <span className="lf-x-ba-ico">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </MkWrap>
    </section>
  )
}

export function Steps3({
  eyebrow,
  title,
  steps,
  labelPrefix = '0',
}: {
  eyebrow: string
  title: ReactNode
  steps: Step[]
  labelPrefix?: string
}) {
  return (
    <section className="lf-mk-section">
      <MkWrap>
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className="lf-mk-steps lf-x-steps">
          <span className="lf-x-steps-rail" aria-hidden="true" />
          {steps.map(([heading, body], index) => (
            <div className="lf-mk-step" key={heading}>
              <span className="lf-x-step-n">
                {labelPrefix === 'Stage' ? `Stage ${index + 1}` : `${labelPrefix}${index + 1}`}
              </span>
              <h3>{heading}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </MkWrap>
    </section>
  )
}

export function FeatureGrid({
  eyebrow,
  title,
  features,
}: {
  eyebrow: string
  title: ReactNode
  features: Feature[]
}) {
  return (
    <section className="lf-mk-section">
      <MkWrap>
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className={`lf-mk-feats lf-x-feats n-${Math.min(features.length, 6)}`}>
          {features.map(([heading, body], index) => (
            <div className="lf-mk-feat" key={heading}>
              <span className="lf-x-feat-n">{String(index + 1).padStart(2, '0')}</span>
              <h3>{heading}</h3>
              <p>{body}</p>
              <span className="lf-x-feat-line" aria-hidden="true" />
            </div>
          ))}
        </div>
      </MkWrap>
    </section>
  )
}

export function ProofQuote({
  metric,
  metricSub,
  quote,
  quoteBy,
}: {
  metric: string
  metricSub: string
  quote: string
  quoteBy: string
}) {
  return (
    <section className="lf-mk-section">
      <MkWrap>
        <div className="lf-mk-proof lf-x-proof">
          <div className="lf-x-proof-metric">
            <b>{metric}</b>
            <small>{metricSub}</small>
          </div>
          <div className="lf-x-proof-quote">
            <span className="lf-x-proof-mark" aria-hidden="true">
              “
            </span>
            <blockquote>{quote}</blockquote>
            <cite>{quoteBy}</cite>
          </div>
        </div>
      </MkWrap>
    </section>
  )
}

export function RelatedLinks({
  eyebrow,
  title,
  links,
}: {
  eyebrow: string
  title: ReactNode
  links: { to: string; label: string }[]
}) {
  return (
    <section className="lf-mk-section">
      <MkWrap>
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className="lf-mk-related lf-x-related">
          {links.map((link, i) => (
            <Link key={link.to} to={link.to}>
              <span className="lf-x-rel-n">{String(i + 1).padStart(2, '0')}</span>
              <span className="lf-x-rel-label">{link.label}</span>
              <span className="lf-x-rel-go">
                <Arrow size={16} />
              </span>
            </Link>
          ))}
        </div>
      </MkWrap>
    </section>
  )
}

export function FaqList({
  eyebrow = 'FAQ',
  title,
  faqs,
}: {
  eyebrow?: string
  title: ReactNode
  faqs: Faq[]
}) {
  return (
    <section className="lf-mk-section">
      <MkWrap className="lf-x-faq-grid">
        <div className="lf-x-faq-side">
          <SectionHead
            eyebrow={eyebrow}
            title={title}
            align="left"
            sub={
              <>
                Can’t find what you need?{' '}
                <Link to="/contact">Talk to our team</Link>.
              </>
            }
          />
        </div>
        <div className="lf-mk-faq lf-x-faq">
          {faqs.map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary>
                <span>{q}</span>
                <i className="lf-x-faq-ico" aria-hidden="true" />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </MkWrap>
    </section>
  )
}

export function DemoCtaBand({
  title = (
    <>
      Talk to a freight <em>expert.</em>
    </>
  ),
  sub = 'Tell us about your freight operation. We will map your modes and walk you through Kingfisher.',
}: {
  title?: ReactNode
  sub?: string
}) {
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [name, setName] = useState('')
  const [mode, setMode] = useState('Air Freight')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setError('')
    try {
      await submitDemoRequest({
        email: email.trim(),
        company: company.trim(),
        name: name.trim(),
        modes: [mode],
      })
      setDone(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Could not send your request. Please try again.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="lf-mk-cta lf-x-cta" id="demo">
      <MkWrap>
        <div className="lf-mk-cta-panel">
          <div className="lf-x-cta-fx" aria-hidden="true">
            <span className="lf-x-cta-orb a" />
            <span className="lf-x-cta-orb b" />
            <span className="lf-x-cta-grid" />
          </div>
          <div className="lf-mk-cta-grid">
            <div className="lf-x-cta-copy">
              <span className="lf-x-badge">
                <span className="lf-x-badge-dot" aria-hidden="true" />
                Get started
              </span>
              <h2 className="lf-mk-h2">{title}</h2>
              <p className="lf-mk-sub">{sub}</p>
              <ul className="lf-mk-list lf-x-checks">
                <li>Guided demo tailored to your freight modes</li>
                <li>Onboarding plan for your team and modules</li>
                <li>Direct line to our solutions team</li>
              </ul>
              <p className="lf-mk-sub lf-x-cta-mail">
                Prefer email? Write to <a href={PUBLIC_CONTACT_MAILTO}>{PUBLIC_CONTACT_EMAIL}</a>
              </p>
            </div>
            <form className="lf-mk-form" aria-label="Request a demo" onSubmit={onSubmit} noValidate>
              <h3 className="lf-mk-h2 lf-x-form-h">
                {done ? (
                  <>
                    Request <em>sent</em>
                  </>
                ) : (
                  <>
                    Request a <em>demo</em>
                  </>
                )}
              </h3>
              {done ? (
                <p className="lf-mk-sub">Thanks — our solutions team will reach out at {email}.</p>
              ) : (
                <>
                  <div className="lf-x-form-row">
                    <label>
                      Company email
                      <input
                        type="email"
                        placeholder="you@yourcompany.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                    <label>
                      Company name
                      <input
                        type="text"
                        placeholder="Your freight company"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="lf-x-form-row">
                    <label>
                      Full name
                      <input
                        type="text"
                        placeholder="Your name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>
                    <label>
                      Freight modes
                      <select value={mode} onChange={(e) => setMode(e.target.value)}>
                        <option>Air Freight</option>
                        <option>Sea FCL / LCL</option>
                        <option>NVOCC</option>
                        <option>Land / Courier</option>
                        <option>Multi-modal</option>
                      </select>
                    </label>
                  </div>
                  {error ? (
                    <p className="lf-mk-form-error" role="alert">
                      {error}
                    </p>
                  ) : null}
                  <button className="lf-btn lf-btn-primary lf-btn-lg lf-x-btn-accent lf-x-submit" type="submit" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Request demo'} {submitting ? null : <Arrow />}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </MkWrap>
    </section>
  )
}

/** Grid of short statements with a check (or cross) badge — used for lists on inner pages. */
export function CheckGrid({
  items,
  tone = 'good',
  columns = 2,
}: {
  items: readonly ReactNode[]
  tone?: 'good' | 'bad'
  columns?: 1 | 2 | 3
}) {
  return (
    <div className={`lf-x-checkgrid cols-${columns} tone-${tone}`}>
      {items.map((item, i) => (
        <div className="lf-x-check lf-x-spot" key={i}>
          <span className="lf-x-check-ico">{tone === 'good' ? <CheckIcon /> : <CrossIcon />}</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}
