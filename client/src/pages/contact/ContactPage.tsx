import { useState, type FormEvent } from 'react'
import { DemoCtaBand, MkWrap, PageHero } from '../../components/marketing/Marketing'
import { ProgressRail, useInViewPlay } from '../../components/marketing/motion'
import { PUBLIC_CONTACT_EMAIL, PUBLIC_CONTACT_MAILTO } from '../../content/site-contact'
import { submitDemoRequest } from '../../lib/api'
import '../../components/marketing/marketing.css'

const CHANNELS = ['Sales', 'Support', 'Partnerships', 'Press'] as const

export function ContactPage() {
  const { ref, play, inView } = useInViewPlay<HTMLElement>(0.15)
  const [step, setStep] = useState(0)
  const [channel, setChannel] = useState<(typeof CHANNELS)[number]>('Sales')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [volume, setVolume] = useState('Under 100')
  const [note, setNote] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)
  const [hover, setHover] = useState(false)

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    if (submitting) return
    if (step < 2) {
      setStep((s) => s + 1)
      return
    }
    setSubmitting(true)
    setError('')
    try {
      await submitDemoRequest({
        email: email.trim(),
        company: company.trim(),
        name: name.trim(),
        modes: [volume, channel],
        note: note.trim() || undefined,
      })
      setDone(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Could not send your message. Please try again.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Talk to Kingfisher about your <em>forwarding operations.</em>
          </>
        }
        lede="Request a product demonstration, ask a sales question, or contact support. Tell us about your modes, team size, and current tools so we can focus the conversation."
        primaryTo="#contact-form"
        primaryLabel="Request a demonstration"
        secondaryTo="/security"
        secondaryLabel="Review security & privacy"
      />

      <section
        className={inView ? 'lf-mk-section lf-mk-inview' : 'lf-mk-section'}
        style={{ borderTop: 0, paddingTop: 0 }}
        id="contact-form"
        ref={ref}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <MkWrap className="lf-mk-cta-grid">
          <form
            className="lf-mk-form lf-mk-rise"
            aria-label="Contact Kingfisher"
            onSubmit={onSubmit}
            noValidate
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <h3 className="lf-mk-h2" style={{ fontSize: 24 }}>
              {done ? (
                <>
                  Message <em>sent</em>
                </>
              ) : (
                <>
                  Step {step + 1} of <em>3</em>
                </>
              )}
            </h3>
            <div className="lf-mk-mile-row" style={{ marginTop: 12 }}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`lf-mk-sd${i < step ? ' done' : i === step ? ' now' : ''}`}
                />
              ))}
            </div>
            {done ? (
              <p className="lf-mk-sub">Thanks — we will reply to {email} within one business day.</p>
            ) : (
              <>
                {step === 0 ? (
                  <div className="lf-mk-rise is-in" style={{ marginTop: 8 }}>
                    <p className="lf-mk-sub">Who should we route this to?</p>
                    <div className="lf-mk-pills" style={{ marginTop: 12 }}>
                      {CHANNELS.map((item) => (
                        <button
                          type="button"
                          key={item}
                          className={channel === item ? 'lf-mk-pill on' : 'lf-mk-pill'}
                          onClick={() => setChannel(item)}
                          style={{ cursor: 'pointer', font: 'inherit' }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
                {step === 1 ? (
                  <div className="lf-mk-rise is-in">
                    <label>
                      Full name
                      <input
                        required
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>
                    <label>
                      Work email
                      <input
                        type="email"
                        required
                        placeholder="you@yourcompany.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                    <label>
                      Company
                      <input
                        required
                        placeholder="Freight company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </label>
                  </div>
                ) : null}
                {step === 2 ? (
                  <div className="lf-mk-rise is-in">
                    <label>
                      Monthly jobs (approx)
                      <select value={volume} onChange={(e) => setVolume(e.target.value)}>
                        <option>Under 100</option>
                        <option>100–500</option>
                        <option>500–2,000</option>
                        <option>2,000+</option>
                      </select>
                    </label>
                    <label>
                      How can we help?
                      <textarea
                        placeholder="Modes, branches, timeline…"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                      />
                    </label>
                  </div>
                ) : null}
                {error ? (
                  <p className="lf-mk-form-error" role="alert">
                    {error}
                  </p>
                ) : null}
                <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
                  {step > 0 ? (
                    <button
                      className="lf-mk-btn lf-mk-btn-ghost"
                      type="button"
                      onClick={() => setStep((s) => s - 1)}
                      style={{ flex: 1 }}
                    >
                      Back
                    </button>
                  ) : null}
                  <button
                    className="lf-mk-btn lf-mk-btn-primary"
                    type="submit"
                    disabled={submitting}
                    style={{ flex: 1 }}
                  >
                    {submitting ? 'Sending…' : step < 2 ? 'Continue' : 'Send message'}
                  </button>
                </div>
                {step < 2 ? (
                  <ProgressRail
                    active={play && !done}
                    paused={hover}
                    durationSec={8}
                    onComplete={() => setStep((s) => Math.min(2, s + 1))}
                  />
                ) : null}
              </>
            )}
          </form>

          <div className="lf-mk-rise lf-mk-rise-d2">
            <div className="lf-mk-eyebrow">Channels</div>
            <div className="lf-mk-feats" style={{ marginTop: 12, gridTemplateColumns: '1fr' }}>
              <div className="lf-mk-feat">
                <h3>Sales</h3>
                <p>
                  Talk to a solutions engineer.{' '}
                  <a href={PUBLIC_CONTACT_MAILTO}>{PUBLIC_CONTACT_EMAIL}</a>
                </p>
              </div>
              <div className="lf-mk-feat">
                <h3>Customer support</h3>
                <p>
                  For existing customers.{' '}
                  <a href={PUBLIC_CONTACT_MAILTO}>{PUBLIC_CONTACT_EMAIL}</a>
                </p>
              </div>
              <div className="lf-mk-feat">
                <h3>Partnerships</h3>
                <p>
                  SI, reseller and tech partners.{' '}
                  <a href={PUBLIC_CONTACT_MAILTO}>{PUBLIC_CONTACT_EMAIL}</a>
                </p>
              </div>
              <div className="lf-mk-feat">
                <h3>Press</h3>
                <p>
                  Media and analyst inquiries.{' '}
                  <a href={PUBLIC_CONTACT_MAILTO}>{PUBLIC_CONTACT_EMAIL}</a>
                </p>
              </div>
            </div>
            <div className="lf-mk-eyebrow" style={{ marginTop: 28 }}>
              Offices
            </div>
            <div className="lf-mk-steps" style={{ marginTop: 12 }}>
              <div className="lf-mk-step">
                <span>HQ</span>
                <h3>[City]</h3>
                <p>[Street address placeholder]</p>
              </div>
              <div className="lf-mk-step">
                <span>Ops</span>
                <h3>[City]</h3>
                <p>[Street address placeholder]</p>
              </div>
            </div>
          </div>
        </MkWrap>
      </section>

      <DemoCtaBand
        title={
          <>
            Prefer a structured <em>demo?</em>
          </>
        }
        sub="Book a walkthrough tailored to your modes and branches."
      />
    </>
  )
}
