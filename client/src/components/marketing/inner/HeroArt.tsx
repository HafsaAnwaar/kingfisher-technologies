import type { CSSProperties, ReactNode } from 'react'
import { useReducedMotion, VehicleIcon, type Vehicle } from './HeroFx'

/**
 * Signature hero visuals — one per page or page group, so inner pages don't read as one template.
 * Pure SVG/CSS motion; everything freezes under prefers-reduced-motion (see hero-art.css).
 */

const v = (i: number) => ({ '--i': i }) as CSSProperties

function Frame({
  label,
  meta,
  className = '',
  children,
  foot,
}: {
  label: string
  meta?: string
  className?: string
  children: ReactNode
  foot?: ReactNode
}) {
  return (
    <div className={`lf-xa ${className}`.trim()}>
      <div className="lf-xa-top">
        <span className="lf-xa-live" />
        <b>{label}</b>
        {meta ? <span className="lf-xa-meta">{meta}</span> : null}
      </div>
      <div className="lf-xa-body">{children}</div>
      {foot ? <div className="lf-xa-foot">{foot}</div> : null}
    </div>
  )
}

function Pills({ items, on = 0 }: { items: readonly string[]; on?: number }) {
  return (
    <div className="lf-xa-pills">
      {items.map((p, i) => (
        <span key={p} className={i === on ? 'lf-xa-pill on' : 'lf-xa-pill'} style={v(i)}>
          {p}
        </span>
      ))}
    </div>
  )
}

/** A vehicle riding a path inside an art SVG (static mid-path under reduced motion). */
function Rider({ path, kind, dur, at = 0.45 }: { path: string; kind: Vehicle; dur: number; at?: number }) {
  const reduced = useReducedMotion()
  return (
    <g className="lf-xa-rider">
      <VehicleIcon kind={kind} />
      {reduced ? (
        <animateMotion dur="1s" fill="freeze" rotate="auto" path={path} keyPoints={`${at};${at}`} keyTimes="0;1" calcMode="linear" />
      ) : (
        <animateMotion dur={`${dur}s`} repeatCount="indefinite" rotate="auto" path={path} />
      )}
    </g>
  )
}

const Check = () => (
  <svg viewBox="0 0 16 16" className="lf-xa-ic" aria-hidden="true">
    <path d="M3.5 8.4 6.6 11.3 12.5 4.9" />
  </svg>
)

/* ------------------------------------------------------------------ */
/* Platform modules — one visual per module                            */
/* ------------------------------------------------------------------ */

function lanePair(sub: string): [string, string] {
  const m = sub.match(/([A-Za-z]{3,})\s*→\s*([A-Za-z]{3,})/)
  return m ? [m[1], m[2]] : ['Origin', 'Dest']
}

export function ModuleArt({ slug, title, sub, pills }: { slug: string; title: string; sub: string; pills: string[] }) {
  const code = sub.split('·')[0].trim()
  const [from, to] = lanePair(sub)
  const status = sub.split('·').slice(-1)[0].trim()

  switch (slug) {
    case 'air-freight': {
      const arc = 'M30 128 Q190 -18 350 128'
      return (
        <Frame label={title} meta={code} className="is-air" foot={<Pills items={pills} />}>
          <svg viewBox="0 0 380 150" className="lf-xa-svg">
            <path className="lf-xa-dash" d={arc} />
            <path className="lf-xa-draw" d={arc} pathLength={1} />
            <circle className="lf-xa-node" cx="30" cy="128" r="5" />
            <circle className="lf-xa-node on" cx="350" cy="128" r="5" />
            <text className="lf-xa-code" x="18" y="146">{from}</text>
            <text className="lf-xa-code" x="334" y="146">{to}</text>
            <Rider path={arc} kind="plane" dur={7} />
          </svg>
          <div className="lf-xa-legs">
            {['Booked', 'Departed', 'Arrived'].map((s, i) => (
              <span key={s} style={v(i)}>
                <Check />
                {s}
              </span>
            ))}
          </div>
        </Frame>
      )
    }
    case 'sea-freight':
      return (
        <Frame label={title} meta={`${from} → ${to}`} className="is-sea" foot={<Pills items={pills} />}>
          <div className="lf-xa-bay">
            {Array.from({ length: 18 }, (_, i) => (
              <span key={i} className={i % 5 === 2 ? 'lf-xa-box alt' : 'lf-xa-box'} style={v(i)} />
            ))}
          </div>
          <svg viewBox="0 0 380 60" className="lf-xa-svg lf-xa-hull">
            <path d="M14 8 H366 L340 46 H40 Z" />
            <path className="lf-xa-wave" d="M0 54 Q 24 46 48 54 T 96 54 T 144 54 T 192 54 T 240 54 T 288 54 T 336 54 T 384 54" />
          </svg>
          <div className="lf-xa-row">
            <span className="lf-xa-k">{code}</span>
            <span className="lf-xa-v">{status}</span>
          </div>
        </Frame>
      )
    case 'nvocc':
      return (
        <Frame label={title} meta={code} className="is-nvocc" foot={<Pills items={pills} />}>
          <div className="lf-xa-bl">
            <div className="lf-xa-doc big">
              <b>MBL</b>
              <i />
              <i />
              <i />
            </div>
            <svg viewBox="0 0 90 150" className="lf-xa-svg lf-xa-links">
              {[24, 75, 126].map((y, i) => (
                <path key={y} className="lf-xa-flow" style={v(i)} d={`M0 75 C 45 75, 45 ${y}, 90 ${y}`} />
              ))}
            </svg>
            <div className="lf-xa-hbls">
              {['HBL 01', 'HBL 02', 'HBL 03'].map((h, i) => (
                <div className="lf-xa-doc" key={h} style={v(i)}>
                  <b>{h}</b>
                  <i />
                </div>
              ))}
            </div>
          </div>
          <svg viewBox="0 0 380 40" className="lf-xa-svg">
            <path className="lf-xa-dash" d="M16 20 H364" />
            <Rider path="M16 20 H364" kind="ship" dur={11} />
          </svg>
          <div className="lf-xa-row">
            <span className="lf-xa-k">{sub.split('·')[1]?.trim()}</span>
            <span className="lf-xa-v">{status}</span>
          </div>
        </Frame>
      )
    case 'land-courier': {
      const road = 'M20 110 C 90 110, 90 40, 160 40 S 230 110, 300 100 S 360 40, 370 40'
      return (
        <Frame label={title} meta={code} className="is-land" foot={<Pills items={pills} />}>
          <svg viewBox="0 0 390 140" className="lf-xa-svg">
            <path className="lf-xa-road" d={road} />
            <path className="lf-xa-roadline" d={road} />
            {[
              [20, 110],
              [160, 40],
              [300, 100],
              [370, 40],
            ].map(([x, y], i) => (
              <g key={i} className="lf-xa-stop" style={v(i)}>
                <circle cx={x} cy={y} r="9" />
                <circle cx={x} cy={y} r="3.4" />
              </g>
            ))}
            <Rider path={road} kind="truck" dur={9} />
          </svg>
          <div className="lf-xa-row">
            <span className="lf-xa-k">
              {from} → {to}
            </span>
            <span className="lf-xa-v">{status}</span>
          </div>
        </Frame>
      )
    }
    case 'customs':
      return (
        <Frame label={title} meta={code} className="is-customs" foot={<Pills items={pills} />}>
          <div className="lf-xa-decl">
            <div className="lf-xa-sheet">
              <b>Goods declaration</b>
              {[80, 64, 72, 50, 68].map((w, i) => (
                <i key={i} style={{ width: `${w}%` }} />
              ))}
              <span className="lf-xa-stamp">Released</span>
            </div>
            <ol className="lf-xa-steps">
              {['Filed', 'Assessed', 'Examined', 'Released'].map((s, i) => (
                <li key={s} style={v(i)}>
                  <span />
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </Frame>
      )
    case 'documentation':
      return (
        <Frame label={title} meta={code} className="is-docs" foot={<Pills items={pills} />}>
          <div className="lf-xa-fan">
            {['Shipping instruction', 'Draft BL', 'Commercial invoice', 'Pre-alert'].map((d, i) => (
              <div className="lf-xa-page" key={d} style={v(i)}>
                <b>{d}</b>
                <i />
                <i />
                <i />
              </div>
            ))}
          </div>
        </Frame>
      )
    case 'warehouse':
      return (
        <Frame label={title} meta={code} className="is-wh" foot={<Pills items={pills} />}>
          <div className="lf-xa-yard">
            {Array.from({ length: 40 }, (_, i) => (
              <span key={i} style={v((i * 7) % 40)} className={i % 9 === 4 ? 'hot' : undefined} />
            ))}
          </div>
          <div className="lf-xa-zones">
            {['Zone A', 'Zone B', 'Zone C', 'Gate'].map((z) => (
              <span key={z}>{z}</span>
            ))}
          </div>
        </Frame>
      )
    case 'tracking':
      return (
        <Frame label={title} meta={code} className="is-track" foot={<Pills items={pills} />}>
          <div className="lf-xa-track">
            <ol className="lf-xa-ms">
              {['Booked', 'Picked up', `Departed ${from}`, `Arrive ${to}`, 'Delivered'].map((s, i) => (
                <li key={s} style={v(i)} className={i === 3 ? 'now' : i < 3 ? 'done' : undefined}>
                  <span />
                  {s}
                </li>
              ))}
            </ol>
            <div className="lf-xa-radar">
              <span className="lf-xa-sweep" />
              <span className="lf-xa-pin" />
              <span className="lf-xa-ring r1" />
              <span className="lf-xa-ring r2" />
            </div>
          </div>
        </Frame>
      )
    case 'finance-accounts':
      return (
        <Frame label={title} meta={code} className="is-fin" foot={<Pills items={pills} />}>
          <div className="lf-xa-ledger">
            {[
              ['Sale', 92],
              ['Cost', 74],
              ['GP', 18],
            ].map(([k, w], i) => (
              <div className="lf-xa-lrow" key={k} style={v(i)}>
                <span>{k}</span>
                <i style={{ '--w': `${w}%` } as CSSProperties} />
              </div>
            ))}
          </div>
          <svg viewBox="0 0 380 80" className="lf-xa-svg">
            <path className="lf-xa-draw" pathLength={1} d="M0 64 C40 60 60 40 100 46 S160 20 200 30 S270 12 310 20 S360 8 380 6" />
          </svg>
          <div className="lf-xa-row">
            <span className="lf-xa-k">{sub.split('·')[1]?.trim()}</span>
            <span className="lf-xa-v">{status}</span>
          </div>
        </Frame>
      )
    default:
      return (
        <Frame label={title} meta={sub.split('·')[0].trim()} className="is-kpi" foot={<Pills items={pills} />}>
          <div className="lf-xa-kpi">
            <div className="lf-xa-bars">
              {[42, 58, 50, 70, 64, 82, 76, 90].map((h, i) => (
                <span key={i} style={{ '--h': `${h}%`, '--i': i } as CSSProperties} />
              ))}
            </div>
            <svg viewBox="0 0 100 100" className="lf-xa-donut">
              <circle cx="50" cy="50" r="38" />
              <circle className="on" cx="50" cy="50" r="38" pathLength={100} />
              <text x="50" y="55">{sub.split('·')[2]?.replace(/[^0-9.%]/g, '') || 'KPI'}</text>
            </svg>
          </div>
        </Frame>
      )
  }
}

/* ------------------------------------------------------------------ */
/* Solutions — persona day dial                                       */
/* ------------------------------------------------------------------ */

export function SolutionArt({ title, sub, beats }: { title: string; sub: string; beats: readonly (readonly [string, string])[] }) {
  const list = beats.slice(0, 4)
  return (
    <Frame label={title} meta={sub.split('·')[0].trim()} className="is-dial">
      <div className="lf-xa-dial">
        <svg viewBox="0 0 160 160" className="lf-xa-clock">
          <circle className="lf-xa-face" cx="80" cy="80" r="64" />
          <circle className="lf-xa-arc" cx="80" cy="80" r="64" pathLength={100} />
          {list.map((_, i) => {
            const a = (i / list.length) * Math.PI * 2 - Math.PI / 2
            return <circle key={i} className="lf-xa-tick" style={v(i)} cx={80 + Math.cos(a) * 64} cy={80 + Math.sin(a) * 64} r="5" />
          })}
          <line className="lf-xa-hand" x1="80" y1="80" x2="80" y2="30" />
          <circle cx="80" cy="80" r="4" className="lf-xa-hub" />
        </svg>
        <ol className="lf-xa-beats">
          {list.map(([b], i) => (
            <li key={b} style={v(i)}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              {b}
            </li>
          ))}
        </ol>
      </div>
      <div className="lf-xa-row">
        <span className="lf-xa-k">Today</span>
        <span className="lf-xa-v">{sub.split('·').slice(1).join('·').trim()}</span>
      </div>
    </Frame>
  )
}

/* ------------------------------------------------------------------ */
/* Features — who-uses-it orbit                                        */
/* ------------------------------------------------------------------ */

export function FeatureArt({ name, who }: { name: string; who: readonly string[] }) {
  const initials = name
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w))
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
  return (
    <div className="lf-xa-orbit is-feature">
      <div className="lf-xa-orbit-ring r1" />
      <div className="lf-xa-orbit-ring r2" />
      <div className="lf-xa-core">
        <b>{initials}</b>
        <span>{name}</span>
      </div>
      <div className="lf-xa-sats">
        {who.slice(0, 6).map((w, i, arr) => (
          <span key={w} className="lf-xa-sat" style={{ '--a': `${(360 / arr.length) * i}deg`, '--i': i } as CSSProperties}>
            <em>{w}</em>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Hubs                                                               */
/* ------------------------------------------------------------------ */

export function PlatformHubArt({ modules }: { modules: readonly { name: string; cat: string }[] }) {
  const loop = 'M60 228 A440 182 0 1 1 940 228 A440 182 0 1 1 60 228'
  return (
    <div className="lf-xa-orbit is-platform">
      <svg viewBox="0 0 1000 455" className="lf-xa-orbit-svg" aria-hidden="true">
        <ellipse className="lf-xa-dash" cx="500" cy="228" rx="440" ry="182" />
        <ellipse className="lf-xa-orbit-inner" cx="500" cy="228" rx="250" ry="104" />
        <Rider path={loop} kind="plane" dur={22} at={0.1} />
        <Rider path={`M500 124 A250 104 0 1 0 500 332 A250 104 0 1 0 500 124`} kind="ship" dur={30} at={0.6} />
      </svg>
      <div className="lf-xa-core">
        <b>KF</b>
        <span>One job file</span>
      </div>
      <div className="lf-xa-sats">
        {modules.map((m, i, arr) => {
          const a = (i / arr.length) * Math.PI * 2 - Math.PI / 2
          return (
            <span
              key={m.name}
              className={`lf-xa-sat-e ${m.cat === 'Business' ? 'biz' : ''}`}
              style={{ left: `${50 + Math.cos(a) * 44}%`, top: `${50 + Math.sin(a) * 40}%`, '--i': i } as CSSProperties}
            >
              {m.name}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export function SolutionsHubArt({ items }: { items: readonly { name: string; mockTitle: string; mockSub: string }[] }) {
  return (
    <div className="lf-xa-deck">
      {items.slice(0, 5).map((s, i) => (
        <div key={s.name} className="lf-xa-persona" style={{ '--i': i, '--n': Math.min(items.length, 5) } as CSSProperties}>
          <span className="lf-xa-avatar">{s.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}</span>
          <div>
            <b>{s.name}</b>
            <span>{s.mockTitle}</span>
            <small>{s.mockSub}</small>
          </div>
        </div>
      ))}
    </div>
  )
}

export function FeaturesHubArt({ names }: { names: readonly string[] }) {
  return (
    <div className="lf-xa-matrix">
      {names.map((n, i) => (
        <span key={n} style={v(i)}>
          <i>{String(i + 1).padStart(2, '0')}</i>
          {n.replace(' Management', '')}
        </span>
      ))}
    </div>
  )
}

function PortalWindow({ label, rows, locked, className = '' }: { label: string; rows: readonly string[]; locked: string; className?: string }) {
  return (
    <div className={`lf-xa-win ${className}`.trim()}>
      <div className="lf-xa-win-bar">
        <i />
        <i />
        <i />
        <span>{label}</span>
      </div>
      <ul>
        {rows.map((r, i) => (
          <li key={r} style={v(i)}>
            <Check />
            {r}
          </li>
        ))}
        <li className="lock">
          <svg viewBox="0 0 16 16" className="lf-xa-ic" aria-hidden="true">
            <rect x="3.5" y="7" width="9" height="6.5" rx="1.4" />
            <path d="M5.5 7V5.2a2.5 2.5 0 0 1 5 0V7" />
          </svg>
          {locked}
        </li>
      </ul>
    </div>
  )
}

export function PortalArt({ kind, rows, locked }: { kind: 'customer' | 'vendor'; rows: readonly string[]; locked: string }) {
  return (
    <div className={`lf-xa-portal is-${kind}`}>
      <PortalWindow label={kind === 'customer' ? 'Customer portal' : 'Vendor portal'} rows={rows.slice(0, 4)} locked={locked} />
      <span className="lf-xa-shield-chip">Tenant data stays inside</span>
    </div>
  )
}

export function PortalsHubArt({ customer, vendor }: { customer: readonly string[]; vendor: readonly string[] }) {
  return (
    <div className="lf-xa-portals">
      <PortalWindow className="a" label="Customer portal" rows={customer.slice(0, 3)} locked="Internal costing" />
      <div className="lf-xa-tenant">
        <b>Your tenant</b>
        <span>Staff ERP</span>
      </div>
      <PortalWindow className="b" label="Vendor portal" rows={vendor.slice(0, 3)} locked="General ledger" />
    </div>
  )
}

export function ResourcesHubArt({ items }: { items: readonly { title: string; kind: string }[] }) {
  return (
    <Frame label="Library" meta={`${items.length} reads`} className="is-library">
      <ul className="lf-xa-lib">
        {items.map((it, i) => (
          <li key={it.title} style={v(i)}>
            <span className="lf-xa-k">{it.kind}</span>
            <b>{it.title}</b>
            <i />
          </li>
        ))}
      </ul>
    </Frame>
  )
}

/* ------------------------------------------------------------------ */
/* Company & commercial pages                                         */
/* ------------------------------------------------------------------ */

export function PricingArt({ modules }: { modules: readonly string[] }) {
  return (
    <Frame label="Plan builder" meta="Modules" className="is-plan">
      <ul className="lf-xa-switches">
        {modules.slice(0, 6).map((m, i) => (
          <li key={m} style={v(i)} className={i === 4 ? 'off' : undefined}>
            {m}
            <span className="lf-xa-switch" />
          </li>
        ))}
      </ul>
      <div className="lf-xa-meter">
        <span>Users</span>
        <i />
      </div>
    </Frame>
  )
}

export function ContactArt({ channels, email }: { channels: readonly string[]; email: string }) {
  return (
    <div className="lf-xa-thread">
      <div className="lf-xa-msg me" style={v(0)}>
        <b>You</b>
        Talk to Kingfisher about our forwarding operations.
      </div>
      <div className="lf-xa-msg" style={v(1)}>
        <b>Kingfisher team</b>
        <span className="lf-xa-typing">
          <i />
          <i />
          <i />
        </span>
      </div>
      <div className="lf-xa-route" style={v(2)}>
        {channels.map((c, i) => (
          <span key={c} className={i === 0 ? 'on' : undefined}>
            {c}
          </span>
        ))}
      </div>
      <div className="lf-xa-mail" style={v(3)}>
        <span className="lf-xa-live" />
        {email}
      </div>
    </div>
  )
}

export function SecurityArt({ roles }: { roles: readonly string[] }) {
  return (
    <div className="lf-xa-sec">
      <div className="lf-xa-shield">
        <span className="lf-xa-sweep" />
        <svg viewBox="0 0 120 140" aria-hidden="true">
          <path className="lf-xa-shield-path" d="M60 6 110 24v40c0 34-22 58-50 70C32 122 10 98 10 64V24Z" />
          <rect className="lf-xa-lock" x="42" y="62" width="36" height="28" rx="5" />
          <path className="lf-xa-lock-arc" d="M49 62v-8a11 11 0 0 1 22 0v8" />
        </svg>
      </div>
      <ul className="lf-xa-roles">
        {roles.map((r, i) => (
          <li key={r} style={v(i)}>
            <span className="lf-xa-k">{String(i + 1).padStart(2, '0')}</span>
            {r}
            <i />
          </li>
        ))}
      </ul>
    </div>
  )
}

export function AboutArt({ tag }: { tag: string }) {
  return (
    <div className="lf-xa-globe">
      <svg viewBox="0 0 240 240" aria-hidden="true">
        <circle className="lf-xa-g-face" cx="120" cy="120" r="100" />
        {[0, 1, 2, 3].map((i) => (
          <ellipse key={i} className="lf-xa-g-mer" style={v(i)} cx="120" cy="120" rx="100" ry="100" />
        ))}
        {[-60, -20, 20, 60].map((y) => (
          <ellipse key={y} className="lf-xa-g-lat" cx="120" cy={120 + y} rx={Math.sqrt(100 * 100 - y * y)} ry={Math.sqrt(100 * 100 - y * y) * 0.18} />
        ))}
        <circle className="lf-xa-g-dot" cx="98" cy="112" r="4" />
        <circle className="lf-xa-g-dot" cx="152" cy="92" r="3" />
        <circle className="lf-xa-g-dot" cx="170" cy="140" r="3" />
        <path className="lf-xa-draw" pathLength={1} d="M98 112 Q 130 70 152 92" />
        <path className="lf-xa-draw d2" pathLength={1} d="M98 112 Q 140 140 170 140" />
      </svg>
      <svg viewBox="0 0 240 240" className="lf-xa-g-orbit" aria-hidden="true">
        <ellipse className="lf-xa-dash" cx="120" cy="120" rx="118" ry="44" transform="rotate(-18 120 120)" />
        <Rider path="M2 120 A118 44 0 1 0 238 120 A118 44 0 1 0 2 120" kind="plane" dur={14} />
      </svg>
      <span className="lf-xa-g-tag">{tag}</span>
    </div>
  )
}

export function CareersArt({ teams }: { teams: readonly string[] }) {
  const pts = [
    [50, 18],
    [84, 40],
    [72, 82],
    [26, 80],
    [14, 40],
  ]
  return (
    <div className="lf-xa-team">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {pts.map(([x, y], i) => (
          <line key={i} className="lf-xa-flow" style={v(i)} x1="50" y1="52" x2={x} y2={y} />
        ))}
        {pts.map(([x, y], i) => {
          const [x2, y2] = pts[(i + 1) % pts.length]
          return <line key={`r${i}`} className="lf-xa-dash" x1={x} y1={y} x2={x2} y2={y2} />
        })}
      </svg>
      <span className="lf-xa-node-c">You?</span>
      {teams.slice(0, 5).map((t, i) => (
        <span key={t} className="lf-xa-member" style={{ left: `${pts[i][0]}%`, top: `${pts[i][1]}%`, '--i': i } as CSSProperties}>
          <i>{t[0]}</i>
          {t}
        </span>
      ))}
    </div>
  )
}

export function CustomersArt({ stories }: { stories: readonly { title: string; body: string }[] }) {
  const list = stories.slice(0, 4)
  return (
    <div className="lf-xa-quotes" style={{ '--n': list.length } as CSSProperties}>
      {list.map((s, i) => (
        <figure key={s.title} className="lf-xa-quote" style={v(i)}>
          <span className="lf-xa-qmark">“</span>
          <blockquote>{s.body}</blockquote>
          <figcaption>{s.title}</figcaption>
        </figure>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Reading pages                                                      */
/* ------------------------------------------------------------------ */

export function LegalArt({ docs, current }: { docs: readonly string[]; current: string }) {
  return (
    <div className="lf-xa-legal">
      {docs.map((d, i) => (
        <div key={d} className={d === current ? 'lf-xa-ldoc on' : 'lf-xa-ldoc'} style={v(i)}>
          <b>{d}</b>
          <i />
          <i />
          <i />
          {d === current ? <span className="lf-xa-scan" /> : null}
        </div>
      ))}
    </div>
  )
}

export function QuestionsArt({ questions }: { questions: readonly string[] }) {
  return (
    <div className="lf-xa-qs">
      {questions.slice(0, 4).map((q, i) => (
        <span key={q} className={i % 2 ? 'lf-xa-q r' : 'lf-xa-q'} style={v(i)}>
          <i>?</i>
          {q}
        </span>
      ))}
    </div>
  )
}

export function ChangelogArt({ items }: { items: readonly { date: string; title: string }[] }) {
  return (
    <div className="lf-xa-log">
      {items.slice(0, 4).map((it, i) => (
        <div key={it.title} className="lf-xa-logrow" style={v(i)}>
          <span className="lf-xa-k">{it.date}</span>
          <b>{it.title}</b>
        </div>
      ))}
      <span className="lf-xa-cursor" />
    </div>
  )
}

export function InsightArt({ title, body }: { title: string; body: string }) {
  return (
    <figure className="lf-xa-pull">
      <span className="lf-xa-qmark">“</span>
      <blockquote>{body}</blockquote>
      <figcaption>
        <span className="lf-xa-underline" />
        {title}
      </figcaption>
    </figure>
  )
}
