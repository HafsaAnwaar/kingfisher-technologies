import { useEffect, useRef, useState, type ReactNode } from 'react'
import './Platform.css'

const STATUS_STATES = [
  ['Booked', 'Space confirmed'],
  ['In Transit', 'Flight uplift'],
  ['Arrived', 'Pre-alert sent'],
  ['Delivered', 'POD captured'],
] as const

const TABLE_ROWS: { key: string; feature: ReactNode }[] = [
  {
    key: 'modes',
    feature: <span className="lf-tmode">Air, Sea FCL, Sea LCL, NVOCC, Land & Courier</span>,
  },
  { key: 'workflow', feature: 'Connected quotation → booking → shipment workflow' },
  { key: 'milestones', feature: 'Shipment milestones & documentation in one job' },
  { key: 'costing', feature: 'Integrated costing & profitability visibility' },
  { key: 'ops', feature: 'Operational workflows without duplicate data entry' },
]

function YesNo({ yes }: { yes: boolean }) {
  return yes ? (
    <span className="lf-yes">
      <span className="lf-sr">Yes</span>
    </span>
  ) : (
    <span className="lf-no">
      <span className="lf-sr">No</span>
    </span>
  )
}

function Icon({ children, size = 13 }: { children: ReactNode; size?: number }) {
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
      {children}
    </svg>
  )
}

export function Platform() {
  const sectionRef = useRef<HTMLElement>(null)
  const [seen, setSeen] = useState(false)
  const [inView, setInView] = useState(false)
  const [ptick, setPtick] = useState(0)

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
        setInView(on)
        if (on) setSeen(true)
      },
      { threshold: 0.2 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    const timer = window.setInterval(() => setPtick((value) => value + 1), 1900)
    return () => window.clearInterval(timer)
  }, [inView])

  const t = Math.floor(ptick / 2)
  const status = STATUS_STATES[t % STATUS_STATES.length]
  const statusPar = t % 2 ? 'a' : 'b'

  return (
    <section
      className={seen ? 'lf-plat lf-plat-in' : 'lf-plat'}
      id="platform"
      aria-labelledby="lf-plat-title"
      ref={sectionRef}
      style={{ backgroundColor: 'var(--lf-bg)' }}
    >
      <div className="lf-plat-wrap">
        <header className="lf-plat-head">
          <div className="lf-plat-eyebrow lf-pr">The Platform</div>
          <h2 className="lf-plat-h lf-pr" id="lf-plat-title" style={{ animationDelay: '80ms' }}>
            <span>Three things your</span>
            <em>freight ERP should do.</em>
          </h2>
        </header>

        <div className="lf-pcards">
          <article className="lf-pcard lf-pr" style={{ animationDelay: '140ms' }}>
            <div className="lf-pvis lf-pvis-blue" aria-hidden="true">
              <svg className="lf-pflow" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path
                  className="lf-pdash"
                  d="M47 30 H53 M73 42 V60 M53 72 H47"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <div className="lf-pnode" style={{ left: '27%', top: '30%' }}>
                <span className="lf-pni lf-c-or">
                  <Icon>
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </Icon>
                </span>
                <span>
                  <b>Quotation</b>
                  <small>Rates · margin</small>
                </span>
              </div>
              <div className="lf-pnode" style={{ left: '73%', top: '30%' }}>
                <span className="lf-pni lf-c-teal">
                  <Icon>
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                    <path d="m9 16 2 2 4-4" />
                  </Icon>
                </span>
                <span>
                  <b>Booking</b>
                  <small>Space confirmed</small>
                </span>
              </div>
              <div className="lf-pnode" style={{ left: '73%', top: '72%' }}>
                <span className="lf-pni lf-c-blue">
                  <Icon>
                    <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
                    <path d="M10 21.9V14L2.1 9.1" />
                    <path d="m10 14 11.9-6.9" />
                  </Icon>
                </span>
                <span>
                  <b>Shipment</b>
                  <small>HAWB · BL · milestones</small>
                </span>
              </div>
              <div className="lf-pnode" style={{ left: '27%', top: '72%' }}>
                <span className="lf-pni lf-c-violet">
                  <Icon>
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </Icon>
                </span>
                <span>
                  <b>Delivery</b>
                  <small>POD · invoice</small>
                </span>
              </div>
            </div>
            <div className="lf-pbody">
              <div className="lf-prow">
                <span className="lf-plabel lf-k-blue">One Platform</span>
                <span className="lf-pmetric lf-k-blue">1 Job</span>
              </div>
              <h3 className="lf-ph">One freight file.</h3>
              <p className="lf-pd">
                From quotation and booking to documentation, tracking, costing, and delivery, every
                shipment stays connected in one operational workflow.
              </p>
            </div>
          </article>

          <article className="lf-pcard lf-pr" style={{ animationDelay: '220ms' }}>
            <div className="lf-pvis lf-pvis-green" aria-hidden="true">
              <div className="lf-pbars">
                <div>
                  <div className="lf-pbar-head">
                    <span className="lf-k-red">Without platform</span>
                    <span className="lf-k-red">Scattered</span>
                  </div>
                  <div className="lf-pbar lf-pbar-red">
                    <i style={{ width: '22%' }} />
                    <i style={{ width: '17%' }} />
                    <i style={{ width: '27%' }} />
                    <i style={{ width: '14%' }} />
                  </div>
                  <div className="lf-pbar-cap">
                    <span>Manual handoffs</span>
                    <span>Separate records</span>
                    <span>Re-keying</span>
                  </div>
                </div>
                <div>
                  <div className="lf-pbar-head">
                    <span className="lf-k-green">With platform</span>
                    <span className="lf-k-green">Connected</span>
                  </div>
                  <div className="lf-pbar lf-pbar-green">
                    <span className="lf-pstop" style={{ left: '3%' }} />
                    <span className="lf-pstop" style={{ left: '34%' }} />
                    <span className="lf-pstop" style={{ left: '66%' }} />
                    <span className="lf-pstop" style={{ left: '97%' }} />
                  </div>
                  <div className="lf-pmodes">
                    <span>
                      <Icon size={11}>
                        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                      </Icon>
                      Air
                    </span>
                    <span>
                      <Icon size={11}>
                        <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
                        <path d="M10 21.9V14L2.1 9.1" />
                        <path d="m10 14 11.9-6.9" />
                      </Icon>
                      Sea
                    </span>
                    <span>
                      <Icon size={11}>
                        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                        <path d="M15 18H9" />
                        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                        <circle cx="17" cy="18" r="2" />
                        <circle cx="7" cy="18" r="2" />
                      </Icon>
                      Land
                    </span>
                    <span>
                      <Icon size={11}>
                        <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
                        <path d="M12 22V12" />
                        <path d="M3.29 7 12 12l8.71-5" />
                      </Icon>
                      Courier
                    </span>
                  </div>
                  <div className="lf-pcap">
                    Air, Sea FCL, Sea LCL, NVOCC, Land & Courier, managed through connected
                    operational workflows.
                  </div>
                </div>
              </div>
            </div>
            <div className="lf-pbody">
              <div className="lf-prow">
                <span className="lf-plabel lf-k-green">Multi-mode</span>
                <span className="lf-pmetric lf-k-green">7+ Modes</span>
              </div>
              <h3 className="lf-ph">
                <span>Every shipment.</span>
                <span>One workflow.</span>
              </h3>
              <p className="lf-pd">
                Switching between disconnected systems creates delays and duplicate work. Keep
                bookings, milestones, documents, and shipment data connected.
              </p>
            </div>
          </article>

          <article className="lf-pcard lf-pr" style={{ animationDelay: '300ms' }}>
            <div className="lf-pvis lf-pvis-amber">
              <div className="lf-plist">
                <div className="lf-pitem">
                  <span className="lf-pic lf-c-green" aria-hidden="true">
                    <Icon size={12}>
                      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                    </Icon>
                  </span>
                  <span className="lf-ptx">
                    <b>Shipment Status</b>
                    <small className={`lf-tk-${statusPar}`}>
                      {status[0]} · {status[1]}
                    </small>
                  </span>
                  <span className="lf-pind lf-pulse lf-k-green" aria-hidden="true" />
                </div>
                <div className="lf-pitem">
                  <span className="lf-pic lf-c-blue" aria-hidden="true">
                    <Icon size={12}>
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="m9 15 2 2 4-4" />
                    </Icon>
                  </span>
                  <span className="lf-ptx">
                    <b>Documents</b>
                    <small>Ready · BL, SI & VGM filed</small>
                  </span>
                  <span className="lf-pind lf-k-blue" aria-hidden="true" />
                </div>
                <div className="lf-pitem">
                  <span className="lf-pic lf-c-amber" aria-hidden="true">
                    <Icon size={12}>
                      <path d="M16 7h6v6" />
                      <path d="m22 7-8.5 8.5-5-5L2 17" />
                    </Icon>
                  </span>
                  <span className="lf-ptx">
                    <b>Profitability</b>
                    <small>Tracked · job costing & P&L</small>
                  </span>
                  <span className="lf-pind lf-k-amber" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="lf-pbody">
              <div className="lf-prow">
                <span className="lf-plabel lf-k-amber">Always in control</span>
                <span className="lf-pmetric lf-k-amber">24/7</span>
              </div>
              <h3 className="lf-ph">Know what&apos;s happening.</h3>
              <p className="lf-pd">
                Track shipment milestones, documentation, operational progress, costs, and
                profitability from one connected platform.
              </p>
            </div>
          </article>
        </div>

        <div className="lf-ptable-wrap lf-pr" style={{ animationDelay: '380ms' }}>
          <table className="lf-ptable">
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">Our Platform</th>
                <th scope="col">Legacy / Manual</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row) => (
                <tr key={row.key}>
                  <td>{row.feature}</td>
                  <td>
                    <YesNo yes />
                  </td>
                  <td>
                    <YesNo yes={false} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="lf-pstat lf-pr" style={{ animationDelay: '460ms' }}>
          <p className="lf-pstat-big">
            <em>100%</em> connected operations.
          </p>
          <p className="lf-pstat-sub">From booking to delivery, every workflow stays connected.</p>
        </div>
      </div>
    </section>
  )
}
