import { useEffect, useRef, useState, type FormEvent } from 'react'
import { PUBLIC_CONTACT_EMAIL, PUBLIC_CONTACT_MAILTO } from '../../content/site-contact'
import { submitDemoRequest } from '../../lib/api'
import './ContactDemo.css'

const MODES = [
  'Air Freight',
  'Sea FCL',
  'Sea LCL',
  'NVOCC',
  'Land / Trucking',
  'Courier',
] as const

type FormState = {
  email: string
  company: string
  name: string
  role: string
  note: string
  modes: string[]
}

const EMPTY: FormState = {
  email: '',
  company: '',
  name: '',
  role: '',
  note: '',
  modes: [],
}

function CheckIcon() {
  return (
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function ContactDemo() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const [step, setStep] = useState(0)
  const [par, setPar] = useState<'a' | 'b'>('a')
  const [form, setForm] = useState<FormState>(EMPTY)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

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
      { threshold: 0.15 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const done = step >= 4
  const n = Math.min(step, 3)
  const ok = [
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) && form.company.trim().length > 1,
    form.name.trim().length > 1,
    form.modes.length > 0,
    true,
  ]
  const blocked = !ok[n] || submitting
  const pct = done ? 100 : (n + 1) * 25
  const stepLabel = done ? 'Request sent' : `Step ${n + 1} of 4`
  const nextLabel = step === 3 ? 'Request demo' : 'Continue'
  const firstName = form.name.trim().split(/\s+/)[0] || 'there'

  function flip() {
    setPar((current) => (current === 'b' ? 'a' : 'b'))
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }))
    setSubmitError('')
  }

  function toggleMode(mode: string) {
    setForm((current) => ({
      ...current,
      modes: current.modes.includes(mode)
        ? current.modes.filter((item) => item !== mode)
        : [...current.modes, mode],
    }))
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!ok[n] || submitting) return

    if (step < 3) {
      setStep((current) => current + 1)
      flip()
      return
    }

    setSubmitting(true)
    setSubmitError('')
    try {
      await submitDemoRequest({
        email: form.email.trim(),
        company: form.company.trim(),
        name: form.name.trim(),
        role: form.role.trim() || undefined,
        modes: form.modes,
        note: form.note.trim() || undefined,
      })
      setStep(4)
      flip()
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Could not send your request. Please try again.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  function back() {
    if (step === 0) return
    setStep((current) => Math.max(0, current - 1))
    flip()
  }

  function restart() {
    setStep(0)
    setForm(EMPTY)
    setSubmitError('')
    flip()
  }

  return (
    <section
      className={inView ? 'lf-cta lf-cta-in' : 'lf-cta'}
      id="demo"
      aria-labelledby="lf-cta-title"
      ref={sectionRef}
    >
      <div className="lf-cta-glow" aria-hidden="true" />
      <div className="lf-cta-wrap">
        <form
          className="lf-form lf-cr"
          style={{ animationDelay: '120ms' }}
          aria-label="Request a demo"
          onSubmit={onSubmit}
          noValidate
        >
          <div className="lf-form-top">
            <span className="lf-form-step">{stepLabel}</span>
            <span className="lf-form-pct">{pct}%</span>
          </div>
          <div className="lf-form-bar" aria-hidden="true">
            <i style={{ width: `${pct}%` }} />
          </div>

          <div className={`lf-form-body lf-tk-${par}`}>
            {step === 0 ? (
              <>
                <h3 className="lf-form-t">Let&apos;s start with your company</h3>
                <div className="lf-field">
                  <label htmlFor="lf-f-email">Company email</label>
                  <input
                    className="lf-input"
                    id="lf-f-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@yourcompany.com"
                    value={form.email}
                    onChange={(event) => updateField('email', event.target.value)}
                  />
                </div>
                <div className="lf-field">
                  <label htmlFor="lf-f-company">Company name</label>
                  <input
                    className="lf-input"
                    id="lf-f-company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Your freight company"
                    value={form.company}
                    onChange={(event) => updateField('company', event.target.value)}
                  />
                </div>
              </>
            ) : null}

            {step === 1 ? (
              <>
                <h3 className="lf-form-t">Tell us about you</h3>
                <div className="lf-field">
                  <label htmlFor="lf-f-name">Full name</label>
                  <input
                    className="lf-input"
                    id="lf-f-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(event) => updateField('name', event.target.value)}
                  />
                </div>
                <div className="lf-field">
                  <label htmlFor="lf-f-role">
                    Role <small>(optional)</small>
                  </label>
                  <input
                    className="lf-input"
                    id="lf-f-role"
                    type="text"
                    autoComplete="organization-title"
                    placeholder="e.g. Operations Head"
                    value={form.role}
                    onChange={(event) => updateField('role', event.target.value)}
                  />
                </div>
              </>
            ) : null}

            {step === 2 ? (
              <>
                <h3 className="lf-form-t">Which freight modes do you run?</h3>
                <div className="lf-field">
                  <span className="lf-field-l" id="lf-f-modes">
                    Select all that apply
                  </span>
                  <div className="lf-modes2" role="group" aria-labelledby="lf-f-modes">
                    {MODES.map((mode) => {
                      const on = form.modes.includes(mode)
                      return (
                        <button
                          type="button"
                          key={mode}
                          className={on ? 'lf-mode2 is-on' : 'lf-mode2'}
                          aria-pressed={on}
                          onClick={() => toggleMode(mode)}
                        >
                          {mode}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </>
            ) : null}

            {step === 3 ? (
              <>
                <h3 className="lf-form-t">Anything we should know?</h3>
                <div className="lf-field">
                  <label htmlFor="lf-f-note">
                    Your current setup or goals <small>(optional)</small>
                  </label>
                  <textarea
                    className="lf-input"
                    id="lf-f-note"
                    placeholder="e.g. 40 jobs a month across air and sea, moving off spreadsheets"
                    value={form.note}
                    onChange={(event) => updateField('note', event.target.value)}
                  />
                </div>
                {submitError ? (
                  <p className="lf-form-error" role="alert">
                    {submitError}
                  </p>
                ) : null}
              </>
            ) : null}

            {done ? (
              <div className="lf-done" role="status">
                <span className="lf-done-ico" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <h3 className="lf-form-t">Thanks, {firstName}.</h3>
                <p>
                  Our solutions team will reach out at {form.email} to schedule your Kingfisher
                  walkthrough.
                </p>
                <button type="button" className="lf-back" onClick={restart}>
                  Start a new request
                </button>
              </div>
            ) : null}
          </div>

          {!done ? (
            <div className="lf-form-actions">
              <button type="button" className="lf-back" onClick={back} disabled={step === 0}>
                ← Back
              </button>
              <button type="submit" className="lf-next" aria-disabled={blocked}>
                {submitting ? 'Sending…' : nextLabel}{' '}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          ) : null}
        </form>

        <div className="lf-cta-copy">
          <div className="lf-cta-eyebrow lf-cr">Get started</div>
          <h2 className="lf-cta-h lf-cr" id="lf-cta-title" style={{ animationDelay: '80ms' }}>
            Talk to a freight <em>expert.</em>
          </h2>
          <p className="lf-cta-p lf-cr" style={{ animationDelay: '160ms' }}>
            Tell us about your freight operation. We&apos;ll map your modes and workflows, walk you
            through Kingfisher, and show you a live demo built around the way your team ships.
          </p>
          <ul className="lf-cta-list lf-cr" style={{ animationDelay: '220ms' }}>
            <li>
              <CheckIcon />
              Guided demo tailored to your freight modes
            </li>
            <li>
              <CheckIcon />
              Onboarding plan for your team and modules
            </li>
            <li>
              <CheckIcon />
              Direct line to our solutions team
            </li>
          </ul>
          <div className="lf-cta-mail lf-cr" style={{ animationDelay: '280ms' }}>
            Prefer email? Write to{' '}
            <a href={PUBLIC_CONTACT_MAILTO}>{PUBLIC_CONTACT_EMAIL}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
