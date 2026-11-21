import { useEffect, useRef, useState, type ReactNode } from 'react'
import { FaqChatStage } from '../marketing/stages/ArtifactStages'
import { FAQ_ITEMS } from './impl-config'
import './Implementation.css'
import '../marketing/motion/motion.css'

const STEPS: {
  day: string
  title: string
  desc: string
  delay: string
  icon: ReactNode
}[] = [
  {
    day: 'Day 1',
    title: 'Discovery call',
    desc: 'We map your freight modes, jobs, documents and finance flow end-to-end.',
    delay: '240ms',
    icon: (
      <>
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </>
    ),
  },
  {
    day: 'Days 2–5',
    title: 'We configure',
    desc: 'Masters, parties, rate cards, document templates and user roles. No coding.',
    delay: '320ms',
    icon: (
      <>
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    day: 'Week 2',
    title: 'Your team goes live',
    desc: 'Hands-on training. Real bookings, jobs and documents through Kingfisher.',
    delay: '400ms',
    icon: (
      <>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </>
    ),
  },
  {
    day: 'Week 3+',
    title: 'Insights kick in',
    desc: 'Management reports, job profitability and smart alerts across your operation.',
    delay: '480ms',
    icon: (
      <>
        <path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.14 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z" />
        <path d="M20 3v4" />
        <path d="M22 5h-4" />
        <path d="M4 17v2" />
        <path d="M5 18H3" />
      </>
    ),
  },
]

function StepIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function Implementation() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const [faqOpen, setFaqOpen] = useState(-1)

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
      { threshold: 0.1 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  function toggleFaq(index: number) {
    setFaqOpen((current) => (current === index ? -1 : index))
  }

  return (
    <section
      className={inView ? 'lf-impl lf-impl-in' : 'lf-impl'}
      id="implementation"
      aria-labelledby="lf-impl-title"
      ref={sectionRef}
    >
      <div className="lf-impl-wrap">
        <div className="lf-impl-eyebrow lf-ir">Implementation</div>
        <h2 className="lf-impl-h lf-ir" id="lf-impl-title" style={{ animationDelay: '80ms' }}>
          Live in <em>weeks.</em>
        </h2>
        <p className="lf-impl-sub lf-ir" style={{ animationDelay: '160ms' }}>
          Guided onboarding. No long IT project.
        </p>
        <ol className="lf-steps4">
          {STEPS.map((step) => (
            <li className="lf-step4 lf-ir" style={{ animationDelay: step.delay }} key={step.title}>
              <span className="lf-step4-ico" aria-hidden="true">
                <StepIcon>{step.icon}</StepIcon>
              </span>
              <span className="lf-step4-day">{step.day}</span>
              <h3 className="lf-step4-t">{step.title}</h3>
              <p className="lf-step4-d">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="lf-faq" id="faq">
        <div className="lf-faq-wrap">
          <div className="lf-faq-eyebrow lf-ir" style={{ animationDelay: '100ms' }}>
            FAQ
          </div>
          <h2 className="lf-faq-h lf-ir" style={{ animationDelay: '160ms' }}>
            Common questions about Kingfisher
          </h2>
          <div className="lf-mk-faq-grid lf-ir" style={{ animationDelay: '220ms', marginTop: 44 }}>
            <ul className="lf-faq-list" style={{ marginTop: 0 }}>
              {FAQ_ITEMS.map((item, index) => {
                const open = faqOpen === index
                const panelId = `lf-faq-${index}`
                return (
                  <li className={open ? 'lf-faq-item is-open' : 'lf-faq-item'} key={item.q}>
                    <button
                      type="button"
                      className="lf-faq-q"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{item.q}</span>
                      <span className="lf-faq-plus" aria-hidden="true" />
                    </button>
                    <div className="lf-faq-a" id={panelId} role="region">
                      <div>
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
            <FaqChatStage />
          </div>
        </div>
      </div>
    </section>
  )
}
