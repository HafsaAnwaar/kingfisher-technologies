import { useState, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { submitDemoRequest } from '../../lib/api'
import type { Faq, Feature, Step } from '../../content/platform-modules'
import './marketing.css'
import './live-hud.css'

export function MkWrap({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`lf-mk-wrap ${className}`.trim()}>{children}</div>
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
}) {
  return (
    <section className="lf-mk-hero">
      <MkWrap>
        <div className="lf-mk-eyebrow">{eyebrow}</div>
        <h1 className="lf-mk-h1">{title}</h1>
        <p className="lf-mk-lede">{lede}</p>
        {sub ? <p className="lf-mk-sub">{sub}</p> : null}
        <div className="lf-mk-ctas">
          <Link className="lf-mk-btn lf-mk-btn-primary" to={primaryTo}>
            {primaryLabel}
          </Link>
          {secondaryTo && secondaryLabel ? (
            <Link className="lf-mk-btn lf-mk-btn-ghost" to={secondaryTo}>
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
        {stage}
      </MkWrap>
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
        <header className="lf-mk-head" style={{ alignItems: 'flex-start', textAlign: 'left', margin: 0, maxWidth: 'none' }}>
          <div className="lf-mk-eyebrow">{eyebrow}</div>
          <h2 className="lf-mk-h2" style={{ marginTop: 14, fontSize: 'clamp(28px,3vw,40px)' }}>
            {title}
          </h2>
        </header>
        <div className="lf-mk-ba">
          <article>
            <h3>{beforeTitle}</h3>
            <ul>
              {before.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="good">
            <h3>{afterTitle}</h3>
            <ul>
              {after.map((item) => (
                <li key={item}>{item}</li>
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
        <div className="lf-mk-eyebrow">{eyebrow}</div>
        <h2 className="lf-mk-h2">{title}</h2>
        <div className="lf-mk-steps">
          {steps.map(([heading, body], index) => (
            <div className="lf-mk-step" key={heading}>
              <span>
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
        <div className="lf-mk-eyebrow">{eyebrow}</div>
        <h2 className="lf-mk-h2" style={{ marginTop: 14, fontSize: 'clamp(28px,3vw,40px)' }}>
          {title}
        </h2>
        <div className="lf-mk-feats">
          {features.map(([heading, body]) => (
            <div className="lf-mk-feat" key={heading}>
              <h3>{heading}</h3>
              <p>{body}</p>
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
        <div className="lf-mk-proof">
          <div>
            <b>{metric}</b>
            <small>{metricSub}</small>
          </div>
          <div>
            <blockquote>“{quote}”</blockquote>
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
        <div className="lf-mk-eyebrow">{eyebrow}</div>
        <h2 className="lf-mk-h2">{title}</h2>
        <div className="lf-mk-related">
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
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
      <MkWrap>
        <div className="lf-mk-eyebrow">{eyebrow}</div>
        <h2 className="lf-mk-h2">{title}</h2>
        <div className="lf-mk-faq">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
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
    } catch {
      setError('Could not send your request. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="lf-mk-cta" id="demo">
      <MkWrap className="lf-mk-cta-grid">
        <form className="lf-mk-form" aria-label="Request a demo" onSubmit={onSubmit} noValidate>
          <h3 className="lf-mk-h2" style={{ fontSize: 24 }}>
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
              {error ? (
                <p className="lf-mk-form-error" role="alert">
                  {error}
                </p>
              ) : null}
              <button className="lf-mk-btn lf-mk-btn-primary" type="submit" disabled={submitting}>
                {submitting ? 'Sending…' : 'Request demo'}
              </button>
            </>
          )}
        </form>
        <div>
          <div className="lf-mk-eyebrow">Get started</div>
          <h2 className="lf-mk-h2">{title}</h2>
          <p className="lf-mk-sub">{sub}</p>
          <ul className="lf-mk-list">
            <li>✓ Guided demo tailored to your freight modes</li>
            <li>✓ Onboarding plan for your team and modules</li>
            <li>✓ Direct line to our solutions team</li>
          </ul>
          <p className="lf-mk-sub" style={{ marginTop: 18, fontSize: 13 }}>
            Prefer email? Write to <Link to="/contact">[sales email]</Link>
          </p>
        </div>
      </MkWrap>
    </section>
  )
}
