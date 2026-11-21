import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { buildFlowData } from './flow-geometry'
import './HowItWorks.css'

const DATA = buildFlowData()
const ROUTE_DELAYS = [0, 90, 180, 270, 330, 390, 440, 490]

const CARDS = [
  {
    title: 'Air Freight',
    desc: 'Import & Export — booking, AWB, flight and delivery',
    summary:
      'Manage complete air shipments from booking and space confirmation through HAWB/MAWB, flight uplift, arrival, pre-alert and delivery.',
    tags: ['Air Export', 'Air Import', 'HAWB / MAWB'],
    get: 'House + Master Jobs · AWB Management · Flight Milestones',
    href: '/platform/air-freight',
    cta: 'Explore Air →',
    icon: (
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    ),
  },
  {
    title: 'Sea FCL',
    desc: 'Full container import & export operations',
    summary:
      'Manage full-container shipments with vessel bookings, container tracking, BL workflows, SI, VGM, cut-offs, customs and delivery.',
    tags: ['FCL Export', 'FCL Import', 'Containers'],
    get: 'Booking · Containers · BL · VGM · Cut-offs',
    href: '/platform/sea-freight',
    cta: 'Explore FCL →',
    icon: (
      <>
        <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
        <path d="M10 21.9V14L2.1 9.1" />
        <path d="m10 14 11.9-6.9" />
        <path d="M14 19.8v-8.1" />
        <path d="M18 17.5V9.4" />
      </>
    ),
  },
  {
    title: 'Sea LCL',
    desc: 'Consolidation, de-stuffing & per-consignment control',
    summary:
      'Manage LCL consolidation from house bookings and master consolidation through CFS handling, de-stuffing, customs and individual deliveries.',
    tags: ['LCL Export', 'LCL Import', 'CFS'],
    get: 'House + Master · Consolidation · CFS · Prorated Cost',
    href: '/platform/sea-freight',
    cta: 'Explore LCL →',
    icon: (
      <>
        <path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" />
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35a2 2 0 0 1 1.26-1.86l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
        <path d="M6 13h12" />
        <path d="M6 17h12" />
      </>
    ),
  },
  {
    title: 'NVOCC',
    desc: 'Voyages, bookings, HBL & space management',
    summary:
      'Operate as the carrier with voyage management, enquiries, bookings, load lists, NVOCC HBLs, space utilization and voyage profitability.',
    tags: ['Voyages', 'HBL', 'Space Utilization'],
    get: 'Voyage Control · Load List · HBL · Voyage P&L',
    href: '/platform/nvocc',
    cta: 'Explore NVOCC →',
    icon: (
      <>
        <path d="M12 22V8" />
        <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        <circle cx="12" cy="5" r="3" />
      </>
    ),
  },
  {
    title: 'Land & Courier',
    desc: 'Road transport, pickup, delivery & parcel movement',
    summary:
      'Coordinate trucking and courier movements with transport requests, vehicle assignment, pickup, delivery tracking and POD.',
    tags: ['Trucking', 'Courier', 'POD'],
    get: 'Pickup · In Transit · Delivery · POD',
    href: '/platform/land-courier',
    cta: 'Explore Ground →',
    icon: (
      <>
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
        <path d="M6 8h4" />
        <path d="M8 6v4" />
      </>
    ),
  },
] as const

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}

function milestone(steps: { m: string; s: string[] }[], tick: number) {
  const total = steps.reduce((count, group) => count + group.s.length, 0)
  let index = tick % total
  let groupIndex = 0
  while (index >= steps[groupIndex].s.length) {
    index -= steps[groupIndex].s.length
    groupIndex += 1
  }
  const group = steps[groupIndex]
  return {
    mode: group.m,
    now: group.s[index],
    n: `${index + 1} / ${group.s.length}`,
    par: tick % 2 ? 'a' : 'b',
    dots: group.s.map((_, dot) => `lf-sd${dot < index ? ' done' : dot === index ? ' now' : ''}`),
  }
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const flowRef = useRef(0)
  const [flow, setFlow] = useState(0)
  const [swap, setSwap] = useState<'a' | 'b'>('a')
  const [tick, setTick] = useState(0)
  const [inView, setInView] = useState(false)
  const [mapSize, setMapSize] = useState({ w: 745, h: 560 })

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => setInView(entries.some((entry) => entry.isIntersecting)),
      { threshold: 0.25 },
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    const timer = window.setInterval(() => setTick((value) => value + 1), 1900)
    return () => window.clearInterval(timer)
  }, [inView])

  useEffect(() => {
    const map = mapRef.current
    if (!map || !('ResizeObserver' in window)) return
    const observer = new ResizeObserver((entries) => {
      const box = entries[0].contentRect
      setMapSize((current) =>
        Math.abs(current.w - box.width) > 1 || Math.abs(current.h - box.height) > 1
          ? { w: box.width, h: box.height }
          : current,
      )
    })
    observer.observe(map)
    return () => observer.disconnect()
  }, [])

  function pick(index: number) {
    if (flowRef.current === index) return
    flowRef.current = index
    setFlow(index)
    setSwap((current) => (current === 'a' ? 'b' : 'a'))
    setTick(0)
  }

  const scene = DATA.flows[flow]
  const status = milestone(scene.steps, tick)
  const scale = Math.min(mapSize.w / 620, mapSize.h / 520)
  const originX = mapSize.w / 2 - 360 * scale
  const originY = mapSize.h / 2 + 8 - 335 * scale

  return (
    <section
      className={inView ? 'lf-hiw lf-inview' : 'lf-hiw'}
      id="how-it-works"
      aria-labelledby="lf-hiw-title"
      ref={sectionRef}
    >
      <div className="lf-hiw-bg" aria-hidden="true" />
      <div className="lf-wrap">
        <header className="lf-hiw-head">
          <span className="lf-hiw-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="8" height="8" x="3" y="3" rx="2" />
              <path d="M7 11v4a2 2 0 0 0 2 2h4" />
              <rect width="8" height="8" x="13" y="13" rx="2" />
            </svg>
            How it works
          </span>
          <h2 className="lf-h2" id="lf-hiw-title">
            Five flows. <em>One platform.</em>
          </h2>
          <p className="lf-hiw-sub">
            From quotation to booking, documentation to delivery — every shipment moves through one connected freight platform.
          </p>
        </header>

        <div className="lf-hiw-main">
          <div className="lf-flows" role="list" aria-label="Freight service flows">
            {CARDS.map((card, index) => {
              const open = flow === index
              return (
                <div className={open ? 'lf-fc is-on' : 'lf-fc'} role="listitem" key={card.title}>
                  <button
                    className="lf-fc-head"
                    type="button"
                    aria-expanded={open}
                    aria-controls={`lf-fc-p${index}`}
                    onClick={() => pick(index)}
                  >
                    <span className="lf-fc-ico">
                      <Icon>{card.icon}</Icon>
                    </span>
                    <span className="lf-fc-txt">
                      <span className="lf-fc-title">{card.title}</span>
                      <span className="lf-fc-desc">{card.desc}</span>
                    </span>
                    <svg className="lf-fc-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div className="lf-fc-body" id={`lf-fc-p${index}`}>
                    <div className="lf-fc-inner">
                      <p className="lf-fc-sum">{card.summary}</p>
                      <div className="lf-tags">
                        {card.tags.map((tag) => (
                          <span className="lf-tag" key={tag}>{tag}</span>
                        ))}
                      </div>
                      <div className="lf-fc-get">
                        <div>
                          <div className="lf-fc-k">What you get</div>
                          <div className="lf-fc-v">{card.get}</div>
                        </div>
                        <Link className="lf-fc-cta" to={card.href}>{card.cta}</Link>
                      </div>
                    </div>
                  </div>
                  <span className="lf-fc-prog" aria-hidden="true">
                    <span
                      className="lf-fc-bar"
                      onAnimationEnd={(event) => {
                        if (event.animationName !== 'lf-progress' || flowRef.current !== index) return
                        pick((index + 1) % CARDS.length)
                      }}
                    />
                  </span>
                </div>
              )
            })}
          </div>

          <div className="lf-map2" ref={mapRef} role="img" aria-label={`Live network map: ${scene.num}, ${scene.hud}`}>
            <div className="lf-mh">
              <span className="lf-mh-l">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                </svg>
                {scene.net}
              </span>
              <span className="lf-mh-r">
                <span className="lf-mh-view">Network View</span>
                <span className="lf-mh-live"><span className="lf-live" />Live</span>
              </span>
            </div>

            <div className="lf-stage2" style={{ transform: `translate(${originX}px, ${originY}px) scale(${scale})` }}>
              <svg className="lf-iso" viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="lf-floor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#0C1A2C" />
                    <stop offset="1" stopColor="#08101E" />
                  </linearGradient>
                  <linearGradient id="lf-floor-light" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#F8FBFE" />
                    <stop offset="1" stopColor="#E4EBF3" />
                  </linearGradient>
                  <filter id="lf-hglow" x="-10%" y="-10%" width="120%" height="120%">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path className="lf-side-l" d={DATA.iso.sideL} fill="#0A1626" />
                <path className="lf-side-r" d={DATA.iso.sideR} fill="#08101C" />
                <path className="lf-floor" d={DATA.iso.floor} fill="url(#lf-floor)" stroke="#FFFFFF" strokeOpacity="0.28" strokeWidth="1" />
                <path className="lf-grid" d={DATA.iso.grid} fill="none" stroke="#FFFFFF" strokeOpacity="0.09" strokeWidth="1" />
                <g className={`lf-swap-${swap}`} key={swap}>
                  <path className="lf-zw" d={scene.zw} fill="#1E3A8A" fillOpacity="0.16" stroke="#60A5FA" strokeOpacity="0.25" strokeWidth="1" />
                  <path className="lf-zm" d={scene.zm} fill="#FFFFFF" fillOpacity="0.05" stroke="#FFFFFF" strokeOpacity="0.24" strokeWidth="1" strokeDasharray="3 4" />
                  <path className="lf-zt" d={scene.zt} fill="#3FD7A6" fillOpacity="0.06" stroke="#3FD7A6" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 4" />
                  <path className="lf-mk" d={scene.mk} fill="none" stroke="#FFFFFF" strokeOpacity="0.28" strokeWidth="1" />
                  <path className="lf-rs" d={scene.rs} fill="none" stroke="#FFFFFF" strokeOpacity="0.32" strokeWidth="1" strokeDasharray="2 5" />
                  <path className="lf-rm" d={scene.rm} fill="none" stroke="#64748B" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path className="lf-rx" d={scene.rx} fill="none" stroke="#F5B454" strokeOpacity="0.75" strokeWidth="1.6" strokeDasharray="5 5" strokeLinecap="round" strokeLinejoin="round" />
                  {scene.routes.map((route, index) => (
                    <path
                      key={index}
                      d={route}
                      pathLength={100}
                      fill="none"
                      stroke="#3FD7A6"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#lf-hglow)"
                      className="lf-rd"
                      style={{ animationDelay: `${ROUTE_DELAYS[index]}ms` }}
                    />
                  ))}
                  <path d={scene.ra} fill="none" stroke="#D9FFF1" strokeWidth="1.4" strokeLinecap="round" className="lf-rflow" />
                  <path className="lf-bl" d={scene.bl} fill="#0E2236" />
                  <path className="lf-br" d={scene.br} fill="#0A1B2C" />
                  <path className="lf-bt" d={scene.bt} fill="#14304A" stroke="#FFFFFF" strokeOpacity="0.28" strokeWidth="0.8" />
                  <path className="lf-cl" d={scene.cl} fill="#26364A" />
                  <path className="lf-cr" d={scene.cr} fill="#1E2C3D" />
                  <path className="lf-ct" d={scene.ct} fill="#33465E" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="0.8" />
                  <path className="lf-al" d={scene.al} fill="#10303F" />
                  <path className="lf-ar" d={scene.ar} fill="#0B2533" />
                  <path className="lf-at" d={scene.at} fill="#174B4C" stroke="#3FD7A6" strokeOpacity="0.6" strokeWidth="1" />
                </g>
              </svg>
              <div className="lf-vlayer" key={`vehicles-${swap}`}>
                {scene.nodes.map((node) => (
                  <span key={`${node.cls}-${node.x}-${node.y}`} className={node.cls} style={{ left: node.x, top: node.y, animationDelay: `${node.dl}ms` }} />
                ))}
                <div className="lf-vin">
                  {scene.parts.map((part, index) => (
                    <span
                      key={`part-${index}`}
                      className="lf-part"
                      style={{ offsetPath: `path('${part.d}')`, animationDuration: `${part.dur}s`, animationDelay: `${part.delay}s` }}
                    />
                  ))}
                  {scene.veh.map((vehicle, index) => (
                    <span
                      key={`veh-${index}`}
                      className={vehicle.cls}
                      style={{
                        offsetPath: `path('${vehicle.d}')`,
                        animationDuration: `${vehicle.dur}s`,
                        animationDelay: `${vehicle.delay}s`,
                        offsetDistance: `${vehicle.dist}%`,
                      }}
                    >
                      <i />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lf-labels" key={`labels-${swap}`}>
              {scene.labels.map((label) => (
                <div
                  key={`${label.t}-${label.x}`}
                  className={label.cls}
                  style={{ left: originX + label.x * scale, top: originY + label.y * scale, animationDelay: `${label.dl}ms` }}
                >
                  {label.t}
                  {label.hasSub ? <small>{label.sub}</small> : null}
                </div>
              ))}
            </div>

            <div className="lf-steps" aria-live="off">
              <div className="lf-steps-k">{status.mode}</div>
              <div className="lf-steps-row">
                {status.dots.map((dot, index) => (
                  <span className={dot} key={`${status.mode}-${index}`} />
                ))}
              </div>
              <div className={`lf-steps-v lf-tk-${status.par}`}>
                <span className="lf-steps-n">{status.n}</span>
                {status.now}
              </div>
            </div>

            {scene.hasVoy ? (
              <>
                <div className="lf-hud lf-hudin">
                  <div className="lf-hcard">
                    <div className="lf-hk">Voyage 042</div>
                    <div className="lf-hv">Dubai → Nhava Sheva</div>
                    <div className="lf-cap" aria-hidden="true">
                      {Array.from({ length: 10 }, (_, index) => (
                        <span key={index} className={index < 7 ? 'on' : index === 7 ? 'part' : undefined} />
                      ))}
                    </div>
                    <div className="lf-hs"><span>Space</span><b>72% used</b></div>
                  </div>
                </div>
                <div className="lf-hud2 lf-hudin">
                  <div className="lf-hcard">
                    <div className="lf-hk act">Carrier: NVOCC</div>
                    <div className="lf-hstats">
                      <div><b>18</b><span>Bookings</span></div>
                      <div><b>46</b><span>CBM</span></div>
                      <div><b>12</b><span>Containers</span></div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}

            <div className="lf-mf">
              <div>
                <div className="lf-mf-k">{scene.num}</div>
                <div className="lf-mf-v">{scene.hud}</div>
              </div>
              <div className="lf-leg">
                <span><i style={{ background: '#3FD7A6' }} />Active route</span>
                <span><i style={{ background: '#64748B' }} />Network</span>
                <span><i style={{ background: '#F5B454' }} />Alert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
