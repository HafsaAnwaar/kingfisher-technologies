import { useMemo } from 'react'
import { SwapFrame, TickText, usePlayTick } from '../motion'

const AIR_PATH = 'M48 176 C140 48, 250 28, 340 96 S480 210, 552 64'
/** Ocean lane, low S-curve, not the air high arc. */
const SEA_PATH = 'M40 70 C130 210, 250 200, 340 110 S480 40, 560 150'

const PLANE_SHAPE =
  'M14 0 L12.5 -1.2 L8 -1.2 L5.5 -6 L4 -6 L5.5 -1.2 L1.5 -1.2 L0.2 -3.5 L-0.6 -3.5 L0 -1.2 L0 1.2 L-0.6 3.5 L0.2 3.5 L1.5 1.2 L5.5 1.2 L4 6 L5.5 6 L8 1.2 L12.5 1.2 Z'

/** Maps platform Air Freight accordion steps → board phase. */
const AIR_PHASES = [
  {
    mileIdx: 0,
    docs: 1,
    status: 'Booked',
    exportHint: 'Quote → air job opened',
    planeBegin: '0s',
  },
  {
    mileIdx: 1,
    docs: 1,
    status: 'AWB issued',
    exportHint: 'Space confirmed · Cargo accepted',
    planeBegin: '-1.5s',
  },
  {
    mileIdx: 1,
    docs: 3,
    status: 'AWB issued',
    exportHint: 'HAWB / MAWB · Pre-alert',
    planeBegin: '-2.5s',
  },
  {
    mileIdx: 2,
    docs: 3,
    status: 'Departed',
    exportHint: 'Flight uplift · In flight',
    planeBegin: '-4.5s',
  },
  {
    mileIdx: 4,
    docs: 3,
    status: 'Delivered',
    exportHint: 'Track · Invoice · POD',
    planeBegin: '-7.5s',
  },
] as const

/** Air desk: geographic map background + real airplane on flight path. */
export function AirBoardBody({ play, step = 0 }: { play: boolean; step?: number }) {
  const tick = usePlayTick(play, 1800)
  const milestones = ['Booked', 'AWB issued', 'Departed', 'Arrived', 'Delivered']
  const phase = AIR_PHASES[Math.min(Math.max(step, 0), AIR_PHASES.length - 1)]
  const idx = phase.mileIdx
  const docs = [
    ['HAWB', 'H-88421'],
    ['MAWB', '157-440918'],
    ['Pre-alert', 'Sent'],
  ]
  const onDocs = phase.docs

  return (
    <div className="lf-mk-air is-deep">
      <div className="lf-mk-air-flight" aria-hidden="true">
        <svg className="lf-mk-air-map" viewBox="0 0 600 220" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="lf-mk-air-grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path className="lf-mk-map-grid-line" d="M28 0H0V28" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect className="lf-mk-map-bg" width="600" height="220" />
          <rect width="600" height="220" fill="url(#lf-mk-air-grid)" />
          {/* Stylized land masses DXB corridor → Europe */}
          <path
            className="lf-mk-map-land"
            d="M0 150 C40 120, 70 130, 95 155 C120 185, 150 190, 180 165 C210 140, 230 150, 250 175 L250 220 H0 Z"
          />
          <path
            className="lf-mk-map-land"
            d="M200 40 C260 20, 320 35, 360 70 C400 105, 430 90, 470 55 C510 20, 550 30, 600 50 V0 H200 Z"
          />
          <path
            className="lf-mk-map-land"
            d="M380 140 C420 120, 460 130, 500 160 C540 190, 570 175, 600 185 V220 H360 C365 180, 350 160, 380 140 Z"
          />
          <path
            className="lf-mk-map-coast"
            d="M0 150 C40 120, 70 130, 95 155 M200 40 C260 20, 320 35, 360 70 C400 105, 430 90, 470 55 M380 140 C420 120, 460 130, 500 160"
            fill="none"
            strokeWidth="1"
          />
          <path d={AIR_PATH} pathLength={100} className="lf-mk-route-path lf-mk-air-path" />
          <path d={AIR_PATH} pathLength={100} className="lf-mk-route-flow lf-mk-air-flow" />
          <circle cx="48" cy="176" r="5" className="lf-mk-route-dot" />
          <circle cx="552" cy="64" r="5" className="lf-mk-route-dot act" />
          <g className="lf-mk-plane-g">
            <animateMotion
              key={phase.planeBegin}
              dur="9s"
              begin={phase.planeBegin}
              repeatCount="indefinite"
              path={AIR_PATH}
              rotate="auto"
            />
            <g transform="scale(1.85) translate(-4,0)">
              <path d={PLANE_SHAPE} className="lf-mk-plane-shape" />
            </g>
          </g>
        </svg>
        <div className="lf-mk-air-ends">
          <span>DXB</span>
          <span>LHR</span>
        </div>
      </div>
      <div className="lf-mk-air-grid">
        <div className="lf-mk-awb-stack">
          <div className="lf-mk-mile-k">AWB pack · AE-24091</div>
          {docs.slice(0, onDocs).map(([label, value], i) => (
            <div className="lf-mk-awb-card" key={label} style={{ animationDelay: `${i * 0.08}s` }}>
              <b>{label}</b>
              <span>{value}</span>
            </div>
          ))}
        </div>
        <div className="lf-mk-mile">
          <div className="lf-mk-mile-k act">Air milestones</div>
          <div className="lf-mk-mile-row">
            {milestones.map((_, i) => (
              <span key={i} className={`lf-mk-sd${i < idx ? ' done' : i === idx ? ' now' : ''}`} />
            ))}
          </div>
          <div className="lf-mk-mile-v">
            <TickText text={phase.status} tick={tick + idx} />
            <span className="lf-mk-mile-n">
              {idx + 1} / {milestones.length}
            </span>
          </div>
          <div className="lf-mk-air-meta">
            <span>{phase.exportHint}</span>
            <b>482 kg</b>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Sea desk: ocean map + low S-curve shipping lane (not air's high arc) + vessel load. */
export function SeaBoardBody({ play, mode = 'fcl' }: { play: boolean; mode?: 'fcl' | 'lcl' }) {
  const tick = usePlayTick(play, 1900)
  const steps = ['Booked', 'Gated in', 'Sailed', 'Arrived', 'Delivered']
  const idx = tick % steps.length
  const slots = mode === 'fcl' ? 8 : 12
  const filled = Math.min(slots, 2 + (tick % (slots - 1)))
  const cutHours = Math.max(2, 18 - (tick % 8))

  return (
    <div className="lf-mk-sea is-deep">
      <div className="lf-mk-sea-route" aria-hidden="true">
        <svg className="lf-mk-sea-map" viewBox="0 0 600 220" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="lf-mk-sea-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path className="lf-mk-map-grid-line" d="M32 0H0V32" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect className="lf-mk-map-bg" width="600" height="220" />
          <rect width="600" height="220" fill="url(#lf-mk-sea-grid)" />
          <path
            className="lf-mk-map-land"
            d="M0 0 H160 C140 40, 100 70, 60 90 C30 110, 20 140, 0 160 Z"
          />
          <path
            className="lf-mk-map-land"
            d="M480 0 C520 30, 560 50, 600 40 V0 Z"
          />
          <path
            className="lf-mk-map-land"
            d="M520 220 C560 180, 580 160, 600 150 V220 Z"
          />
          <path
            d="M80 40 C160 80, 220 120, 300 100 S420 60, 520 100"
            fill="none"
            stroke="rgba(96,165,250,.12)"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <path d={SEA_PATH} pathLength={100} className="lf-mk-route-path lf-mk-sea-path" />
          <path d={SEA_PATH} pathLength={100} className="lf-mk-route-flow lf-mk-sea-flow" />
          <circle cx="40" cy="70" r="5" className="lf-mk-route-dot" />
          <circle cx="560" cy="150" r="5" className="lf-mk-route-dot act" />
          <g className="lf-mk-ship-g">
            <animateMotion dur="11s" repeatCount="indefinite" path={SEA_PATH} rotate="auto" />
            <path
              className="lf-mk-ship-shape"
              d="M-18 -5 H12 L22 0 L12 5 H-18 Z"
              transform="translate(0,0)"
            />
          </g>
        </svg>
        <div className="lf-mk-air-ends lf-mk-sea-ends">
          <span>CNSHA</span>
          <span>PKKHI</span>
        </div>
      </div>
      <div className="lf-mk-sea-grid">
        <div className="lf-mk-hcard">
          <div className="lf-mk-mile-k act">{mode === 'fcl' ? 'FCL · SE-11802' : 'LCL · SE-22014'}</div>
          <div className="lf-mk-hv">CNSHA → PKKHI</div>
          <div className={`lf-mk-sea-slots mini ${mode}`} aria-hidden="true">
            {Array.from({ length: Math.min(slots, 8) }, (_, i) => (
              <i key={i} className={i < Math.min(filled, 8) ? 'on' : undefined} />
            ))}
          </div>
          <div className="lf-mk-hs">
            <span>{mode === 'fcl' ? 'Containers' : 'CBM booked'}</span>
            <b>
              <TickText text={mode === 'fcl' ? `${filled}/8` : `${filled * 3.5}`} tick={tick} />
            </b>
          </div>
          <div className="lf-mk-hs">
            <span>Cut-off</span>
            <b>{cutHours}h</b>
          </div>
        </div>
        <div className="lf-mk-mile">
          <div className="lf-mk-mile-k">Ocean milestones</div>
          <div className="lf-mk-mile-row">
            {steps.map((_, i) => (
              <span key={i} className={`lf-mk-sd${i < idx ? ' done' : i === idx ? ' now' : ''}`} />
            ))}
          </div>
          <div className="lf-mk-mile-v">
            <TickText text={steps[idx]} tick={tick} />
            <span className="lf-mk-mile-n">
              {idx + 1} / {steps.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

/** NVOCC: voyage capacity + booking list, not the homepage map. */
export function VoyageBoardBody({ play }: { play: boolean }) {
  const tick = usePlayTick(play, 2000)
  const filled = 4 + (tick % 6)
  const bookings = [
    ['BKG-102', '12 CBM', 'Confirmed'],
    ['BKG-108', '8 CBM', 'Pending'],
    ['BKG-111', '6 CBM', 'Confirmed'],
    ['BKG-119', '4 CBM', 'Waitlist'],
  ]
  const show = 1 + (tick % bookings.length)
  const hbls = 10 + (tick % 9)

  return (
    <div className="lf-mk-voyage-board is-deep">
      <div className="lf-mk-hcard lf-mk-voyage-cap">
        <div className="lf-mk-mile-k act">Voyage · MSA-441</div>
        <div className="lf-mk-hv">CNSHA → PKKHI · Cut-off today</div>
        <div className="lf-mk-cap" aria-label="Space utilization">
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i} className={i < filled ? 'on' : i === filled ? 'part' : undefined} />
          ))}
        </div>
        <div className="lf-mk-hs">
          <span>Space used</span>
          <b>{filled * 10}%</b>
        </div>
      </div>
      <div className="lf-mk-voyage-side">
        <div className="lf-mk-hcard">
          <div className="lf-mk-mile-k">HBL issued</div>
          <div className="lf-mk-hstat">
            <TickText text={String(hbls)} tick={tick} />
          </div>
        </div>
        <div className="lf-mk-booking-list">
          {bookings.slice(0, show).map(([id, cbm, status], i) => (
            <div className="lf-mk-booking" key={`${id}-${tick}`} style={{ animationDelay: `${i * 0.06}s` }}>
              <strong>{id}</strong>
              <span>{cbm}</span>
              <em>{status}</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/** Land/courier: truck POD run with clear stops. */
export function PodBoardBody({ play }: { play: boolean }) {
  const tick = usePlayTick(play, 2200)
  const stops = ['Pickup', 'In transit', 'Out for delivery', 'POD signed']
  const idx = tick % stops.length
  const fill = ((idx + 1) / stops.length) * 100

  return (
    <div className="lf-mk-pod is-deep">
      <div className="lf-mk-pod-map" aria-hidden="true">
        <div className="lf-mk-pod-road" />
        <div className="lf-mk-pod-fleet">
          <i />
          <i />
          <i />
        </div>
        <div className="lf-mk-pod-truck" style={{ left: `${8 + idx * 28}%` }}>
          <i />
        </div>
        <div className="lf-mk-pod-pin" style={{ left: `${12 + idx * 26}%` }} />
      </div>
      <div className="lf-mk-pod-line">
        <div className="lf-mk-pod-fill" style={{ width: `${fill}%` }} />
      </div>
      <div className="lf-mk-pod-stops">
        {stops.map((label, i) => (
          <div key={label} className={`lf-mk-pod-stop${i < idx ? ' done' : i === idx ? ' on' : ''}`}>
            <i />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="lf-mk-mile" style={{ marginTop: 18 }}>
        <div className="lf-mk-mile-k">Consignment · LD-5521</div>
        <div className="lf-mk-mile-v">
          <TickText text={stops[idx]} tick={tick} />
        </div>
      </div>
    </div>
  )
}

/** Tracking portal: ETA + scan feed, deliberately not an air network map. */
export function TrackPortalBody({ play }: { play: boolean }) {
  const tick = usePlayTick(play, 2000)
  const events = [
    ['14:20', 'Departed DXB', 'AE-24091'],
    ['18:02', 'In transit · ETK', 'AE-24091'],
    ['09:40', 'Arrived LHR', 'AE-24091'],
    ['11:15', 'Customs hold cleared', 'AE-24091'],
    ['13:05', 'Out for delivery', 'AE-24091'],
  ]
  const visible = [0, 1, 2].map((o) => events[(tick + o) % events.length])
  const etas = ['02h 14m', '01h 48m', '45m', '12m']
  const eta = etas[tick % etas.length]
  const progress = 35 + (tick % 5) * 12

  return (
    <div className="lf-mk-track-portal is-deep">
      <div className="lf-mk-track-bell" title="Portal alerts">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.7 21a2 2 0 01-3.4 0" />
        </svg>
      </div>
      <div className="lf-mk-track-hero">
        <div>
          <div className="lf-mk-mile-k">Public track link</div>
          <div className="lf-mk-track-id">AE-24091</div>
          <div className="lf-mk-track-route">DXB → LHR · Air export</div>
        </div>
        <div className="lf-mk-track-eta">
          <span className="lf-mk-mile-k">ETA</span>
          <strong>
            <TickText text={eta} tick={tick} />
          </strong>
        </div>
      </div>
      <div className="lf-mk-track-bar" aria-hidden="true">
        <div className="lf-mk-track-fill" style={{ width: `${progress}%` }} />
        <span className="lf-mk-track-dot" style={{ left: `${progress}%` }} />
      </div>
      <div className="lf-mk-track-feed">
        {visible.map(([time, text, id], i) => (
          <article key={`${id}-${time}-${tick}-${i}`}>
            <time>{time}</time>
            <div>
              <strong>{text}</strong>
              <span>{id}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

/** Warehouse: cargo moves Receive → Putaway → Pick → Gate with readable actions. */
export function WarehouseFlowBody({ play }: { play: boolean }) {
  const tick = usePlayTick(play, 2100)
  const zones = [
    { id: 'rcv', label: 'Receive', action: 'Scan job · count pieces' },
    { id: 'put', label: 'Putaway', action: 'Bay assigned · A-12' },
    { id: 'pick', label: 'Pick', action: 'Pull for outbound job' },
    { id: 'gate', label: 'Gate out', action: 'Release · POD open' },
  ]
  const idx = tick % zones.length
  const jobs = ['WH-441', 'WH-442', 'WH-448']
  const job = jobs[tick % jobs.length]
  const qty = 12 + (tick % 7)
  const bays = useMemo(() => {
    const base = [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1]
    return base.map((v, i) => (v ? (i === (tick + idx) % base.length ? 2 : 1) : 0))
  }, [tick, idx])

  return (
    <div className="lf-mk-wh is-deep">
      <div className="lf-mk-wh-head">
        <div>
          <div className="lf-mk-mile-k">Warehouse run</div>
          <div className="lf-mk-hv">
            Job <TickText text={job} tick={tick} /> · {qty} pcs
          </div>
        </div>
        <div className="lf-mk-wh-action">
          <span className="lf-mk-mile-k">Now</span>
          <strong>
            <TickText text={zones[idx].action} tick={tick} />
          </strong>
        </div>
      </div>
      <div className="lf-mk-wh-floor" aria-label="Warehouse zones">
        {zones.map((zone, i) => (
          <div key={zone.id} className={`lf-mk-wh-zone${i === idx ? ' on' : i < idx ? ' done' : ''}`}>
            <span className="lf-mk-wh-n">0{i + 1}</span>
            <b>{zone.label}</b>
            {i === idx ? <i className="lf-mk-wh-crate" /> : null}
          </div>
        ))}
        <div className="lf-mk-wh-path" aria-hidden="true">
          <div className="lf-mk-wh-path-fill" style={{ width: `${((idx + 1) / zones.length) * 100}%` }} />
        </div>
      </div>
      <div className="lf-mk-wh-bays" aria-hidden="true">
        {bays.map((state, i) => (
          <div key={i} className={`lf-mk-bay${state === 1 ? ' occ' : state === 2 ? ' hot' : ''}`} />
        ))}
      </div>
      <div className="lf-mk-wh-belt" aria-hidden="true">
        <i className="lf-mk-wh-cv" />
        <i className="lf-mk-wh-cv c2" />
        <i className="lf-mk-wh-cv c3" />
        <span className="lf-mk-wh-out">Gate</span>
      </div>
    </div>
  )
}

export function ChecklistBody({ items, play }: { items: string[]; play: boolean }) {
  const tick = usePlayTick(play, 1700)
  const doneThrough = tick % (items.length + 1)
  const pct = Math.round((Math.min(doneThrough, items.length) / items.length) * 100)
  return (
    <div className="lf-mk-process is-deep">
      <div className="lf-mk-process-rail" aria-hidden="true">
        <div className="lf-mk-process-fill" style={{ height: `${pct}%` }} />
        <span>{pct}%</span>
      </div>
      <ul className="lf-mk-check">
        {items.map((item, i) => (
          <li key={item} className={i < doneThrough ? 'done' : i === doneThrough ? 'now' : undefined}>
            <mark>{i < doneThrough ? '✓' : ''}</mark>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function DocPackBody({ play }: { play: boolean }) {
  const tick = usePlayTick(play, 1600)
  const docs = [
    ['SI', 'Draft'],
    ['BL', 'Issued'],
    ['Invoice', 'Ready'],
    ['Packing', 'Attached'],
  ]
  const onCount = (tick % docs.length) + 1
  return (
    <div className="lf-mk-docs-deep">
      <div className="lf-mk-docs-stack" aria-hidden="true">
        {docs.slice(0, onCount).map(([name], i) => (
          <div
            key={`${name}-${tick}`}
            className="lf-mk-docs-sheet"
            style={{ transform: `translate(${i * 6}px, ${i * -8}px) rotate(${i * -1.5}deg)`, zIndex: i + 1 }}
          >
            <b>{name}</b>
          </div>
        ))}
      </div>
      <div className="lf-mk-docs is-stack">
        {docs.map(([name, status], i) => (
          <div
            key={name}
            className={i < onCount ? 'lf-mk-doc on' : 'lf-mk-doc'}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <b>{name}</b>
            <span>{i < onCount ? status : 'Pending'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CostLedgerBody({ play }: { play: boolean }) {
  const tick = usePlayTick(play, 2100)
  const rows = [
    ['Ocean freight', '$4,280'],
    ['THC / local', '$610'],
    ['Docs & courier', '$95'],
    ['Haulage', '$340'],
  ]
  const show = Math.min(rows.length, 1 + (tick % (rows.length + 1)))
  const marginOn = show >= rows.length
  const spark = [40, 55, 48, 70, 62, 78, 72, 88]
  return (
    <div className="lf-mk-ledger is-deep">
      <div className="lf-mk-ledger-head">
        <span className="lf-mk-mile-k">Job costing · SE-11802</span>
        <div className="lf-mk-spark" aria-hidden="true">
          {spark.map((h, i) => (
            <i key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.04}s` }} />
          ))}
        </div>
      </div>
      {rows.slice(0, show).map(([label, amt], i) => (
        <div className="row" key={label} style={{ animationDelay: `${i * 0.06}s` }}>
          <span>{label}</span>
          <b>{amt}</b>
        </div>
      ))}
      {marginOn ? (
        <div className="row margin" key={`m-${tick}`}>
          <span>Job margin</span>
          <b>18.4%</b>
        </div>
      ) : null}
      {marginOn ? (
        <span className="lf-mk-ledger-stamp" key={`stamp-${tick}`}>
          POSTED
        </span>
      ) : null}
    </div>
  )
}

export function KpiChartsBody({ play }: { play: boolean }) {
  const tick = usePlayTick(play, 2800)
  const period = tick % 2 === 0 ? 'This week' : 'This month'
  const heights = tick % 2 === 0 ? [42, 68, 55, 80, 48, 72, 90] : [60, 50, 78, 66, 88, 70, 95]
  const kpis =
    tick % 2 === 0
      ? [
          ['128', 'Jobs closed'],
          ['94%', 'On-time'],
          ['12.1%', 'Avg margin'],
        ]
      : [
          ['512', 'Jobs closed'],
          ['91%', 'On-time'],
          ['13.4%', 'Avg margin'],
        ]
  return (
    <SwapFrame swapKey={period} par={tick % 2 ? 'b' : 'a'}>
      <div className="lf-mk-mile-k">{period}</div>
      <div className="lf-mk-kpi" style={{ marginTop: 12 }}>
        {kpis.map(([v, l]) => (
          <article key={l}>
            <b>{v}</b>
            <span>{l}</span>
          </article>
        ))}
      </div>
      <div className="lf-mk-bars" aria-hidden="true">
        {heights.map((h, i) => (
          <i key={`${period}-${i}`} style={{ height: `${h}%`, animationDelay: `${i * 0.05}s` }} />
        ))}
      </div>
    </SwapFrame>
  )
}
