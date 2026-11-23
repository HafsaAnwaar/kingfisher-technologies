import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Arrow, MkWrap } from './Marketing'
import './live-hud.css'

export type HudRow = {
  rank?: number | string
  dot?: 'orange' | 'cyan' | 'mint' | 'amber' | 'rose'
  name: string
  meta?: string
  value: string
  badge?: string
}

type LiveHudPanelProps = {
  icon?: ReactNode
  title: string
  subtitle: string
  timer?: string
  rows: HudRow[]
  footLeft: string
  footRight: string
}

export function LiveHudPanel({
  icon,
  title,
  subtitle,
  timer,
  rows,
  footLeft,
  footRight,
}: LiveHudPanelProps) {
  return (
    <div className="lf-livehud" aria-hidden="true">
      <div className="lf-livehud-top">
        <div className="lf-livehud-id">
          <span className="lf-livehud-ico">{icon ?? <HudPulse />}</span>
          <div>
            <b>{title}</b>
            <small>{subtitle}</small>
          </div>
        </div>
        {timer ? (
          <span className="lf-livehud-timer">
            <ClockIcon />
            {timer}
          </span>
        ) : null}
      </div>
      <ul className="lf-livehud-list">
        {rows.map((row, index) => (
          <li key={`${row.name}-${index}`} className={row.badge ? 'is-lead' : undefined}>
            <span className="lf-livehud-rank">{row.rank ?? index + 1}</span>
            <span className={`lf-livehud-dot tone-${row.dot ?? 'orange'}`} />
            <div className="lf-livehud-name">
              <strong>{row.name}</strong>
              {row.meta ? <em>{row.meta}</em> : null}
            </div>
            <div className="lf-livehud-aside">
              <span className="lf-livehud-val">{row.value}</span>
              {row.badge ? <span className="lf-livehud-badge">{row.badge}</span> : null}
            </div>
          </li>
        ))}
      </ul>
      <div className="lf-livehud-foot">
        <span className="lf-livehud-up">{footLeft}</span>
        <span>{footRight}</span>
      </div>
    </div>
  )
}

export function FeatureSplit({
  eyebrow,
  title,
  body,
  primaryTo = '/contact',
  primaryLabel = 'Book a Demo',
  secondaryTo,
  secondaryLabel,
  metrics,
  panel,
  reverse,
}: {
  eyebrow: string
  title: ReactNode
  body: ReactNode
  primaryTo?: string
  primaryLabel?: string
  secondaryTo?: string
  secondaryLabel?: string
  metrics?: string
  panel: ReactNode
  reverse?: boolean
}) {
  return (
    <section className={reverse ? 'lf-mk-section lf-split-sec is-rev' : 'lf-mk-section lf-split-sec'}>
      <MkWrap>
        <div className={reverse ? 'lf-split is-rev' : 'lf-split'}>
          <div className="lf-split-copy">
            <span className="lf-x-badge">{eyebrow}</span>
            <h2 className="lf-mk-h2 lf-split-h">{title}</h2>
            <div className="lf-mk-sub lf-split-body">{body}</div>
            <div className="lf-mk-ctas" style={{ marginTop: 26 }}>
              <Link className="lf-btn lf-btn-primary lf-btn-sm lf-x-btn-accent" to={primaryTo}>
                {primaryLabel} <Arrow size={16} />
              </Link>
              {secondaryTo && secondaryLabel ? (
                <Link className="lf-btn lf-btn-ghost lf-btn-sm" to={secondaryTo}>
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
            {metrics ? <p className="lf-split-metrics">{metrics}</p> : null}
          </div>
          <div className="lf-split-panel">
            <span className="lf-x-panel-glow" aria-hidden="true" />
            <div className="lf-x-panel-float">{panel}</div>
          </div>
        </div>
      </MkWrap>
    </section>
  )
}

/* Preset Kingfisher-accurate HUD scenes */
export function QuoteBoardHud() {
  return (
    <LiveHudPanel
      title="Q-1842 · DXB → FRA · Air"
      subtitle="Quotation board · 5 offers ranked"
      timer="02:14"
      rows={[
        { rank: 1, dot: 'orange', name: 'Carrier Alpha', meta: 'Direct', value: '$4.12 / kg', badge: 'LOWEST' },
        { rank: 2, dot: 'cyan', name: 'SkyLink Gulf', meta: '1 stop', value: '$4.28 / kg' },
        { rank: 3, dot: 'mint', name: 'AeroLane', meta: 'Direct', value: '$4.35 / kg' },
        { rank: 4, dot: 'amber', name: 'FreightNest', meta: 'Consol', value: '$4.41 / kg' },
        { rank: 5, dot: 'rose', name: 'BlueRoute', meta: '1 stop', value: '$4.56 / kg' },
      ]}
      footLeft="↓ 8.4% vs last lane quote"
      footRight="Ready to send"
    />
  )
}

export function JobDeskHud() {
  return (
    <LiveHudPanel
      title="JOB-9021 · Sea FCL"
      subtitle="Ops desk · milestones live"
      timer="Live"
      rows={[
        { rank: '01', dot: 'mint', name: 'Booking confirmed', meta: 'Sales', value: 'Done' },
        { rank: '02', dot: 'cyan', name: 'Containers gated', meta: 'Ops', value: 'Done' },
        { rank: '03', dot: 'orange', name: 'Docs pack', meta: 'Documentation', value: 'In progress', badge: 'NOW' },
        { rank: '04', dot: 'amber', name: 'Vessel departure', meta: 'Ops', value: 'Queued' },
        { rank: '05', dot: 'rose', name: 'Invoice draft', meta: 'Finance', value: 'Waiting' },
      ]}
      footLeft="On continuum · Sales → Ops → Docs"
      footRight="ETA 6 days"
    />
  )
}

export function CustomsHud() {
  return (
    <LiveHudPanel
      title="CC-331 · Import clearance"
      subtitle="Customs stages · Sales / Ops / Accounts"
      timer="Day 2"
      rows={[
        { rank: 1, dot: 'mint', name: 'Quotation accepted', value: 'Complete' },
        { rank: 2, dot: 'cyan', name: 'Document collection', value: 'Complete' },
        { rank: 3, dot: 'orange', name: 'Classification & filing', value: 'Active', badge: 'STAGE' },
        { rank: 4, dot: 'amber', name: 'Assessment / duty', value: 'Next' },
        { rank: 5, dot: 'rose', name: 'Release & invoice', value: 'Queued' },
      ]}
      footLeft="Clear handoffs on one file"
      footRight="Broker desk"
    />
  )
}

export function PortalInboxHud() {
  return (
    <LiveHudPanel
      title="Customer portal · Acme Trading"
      subtitle="Their records only · 4 updates"
      timer="Now"
      rows={[
        { rank: 1, dot: 'orange', name: 'Quote Q-1842', meta: 'Awaiting decision', value: 'Sent', badge: 'ACTION' },
        { rank: 2, dot: 'cyan', name: 'Shipment SH-220', meta: 'Arrived CFS', value: 'In transit' },
        { rank: 3, dot: 'mint', name: 'Invoice INV-901', meta: 'Due in 7 days', value: 'Open' },
        { rank: 4, dot: 'amber', name: 'BL draft', meta: 'Customer visible', value: 'New doc' },
        { rank: 5, dot: 'rose', name: 'Track lookup', meta: 'Public ref', value: 'Safe' },
      ]}
      footLeft="No internal costing exposed"
      footRight="Portal session"
    />
  )
}

export function VendorDeskHud() {
  return (
    <LiveHudPanel
      title="Vendor portal · Gulf Haulage"
      subtitle="Assigned work · PI submit"
      timer="AP"
      rows={[
        { rank: 1, dot: 'cyan', name: 'Job LAND-441', meta: 'Pickup window', value: 'Assigned', badge: 'OPEN' },
        { rank: 2, dot: 'orange', name: 'Cost lines', meta: 'Linked charges', value: 'Visible' },
        { rank: 3, dot: 'mint', name: 'POD upload', meta: 'Document exchange', value: 'Due' },
        { rank: 4, dot: 'amber', name: 'Purchase invoice', meta: 'Draft for review', value: 'Submit' },
        { rank: 5, dot: 'rose', name: 'AP aging', meta: 'Remittance view', value: 'Read' },
      ]}
      footLeft="Cannot post tenant ledger"
      footRight="Staff approves"
    />
  )
}

export function AccessHud() {
  return (
    <LiveHudPanel
      title="Tenant · Kingfisher Wings demo"
      subtitle="Who can access what"
      timer="RBAC"
      rows={[
        { rank: 1, dot: 'orange', name: 'Tenant Admin', meta: 'Users in this tenant', value: 'Full cfg', badge: 'ADMIN' },
        { rank: 2, dot: 'cyan', name: 'Sales user', meta: 'Quotes & parties', value: 'Scoped' },
        { rank: 3, dot: 'mint', name: 'Ops user', meta: 'Jobs & milestones', value: 'Scoped' },
        { rank: 4, dot: 'amber', name: 'Finance user', meta: 'Invoices & GL', value: 'Scoped' },
        { rank: 5, dot: 'rose', name: 'Customer portal', meta: 'Own party only', value: 'Bounded' },
      ]}
      footLeft="Separate sign-in paths"
      footRight="No cross-tenant leak"
    />
  )
}

export function FinanceHud() {
  return (
    <LiveHudPanel
      title="AR snapshot · March close"
      subtitle="Job charges → invoices → ledger"
      timer="GL"
      rows={[
        { rank: 1, dot: 'mint', name: 'INV-901 Acme', meta: 'Posted', value: '$12.4k', badge: 'PAID' },
        { rank: 2, dot: 'orange', name: 'INV-902 Gulf', meta: 'Open', value: '$8.1k' },
        { rank: 3, dot: 'cyan', name: 'CN-44 credit', meta: 'Allocated', value: '-$0.6k' },
        { rank: 4, dot: 'amber', name: 'Receipt R-18', meta: 'Online pay provider', value: 'Posted' },
        { rank: 5, dot: 'rose', name: 'Job GP check', meta: 'JOB-9021', value: '18%' },
      ]}
      footLeft="Cards via payment provider"
      footRight="Books in Kingfisher"
    />
  )
}

export function VoyageHud() {
  return (
    <LiveHudPanel
      title="VOY-17 · Jebel Ali → Mundra"
      subtitle="NVOCC voyage board · utilization"
      timer="Cut-off"
      rows={[
        { rank: 1, dot: 'orange', name: 'Space held', meta: 'Agents', value: '86%', badge: 'HOT' },
        { rank: 2, dot: 'cyan', name: 'HBL draft queue', meta: 'Docs', value: '14' },
        { rank: 3, dot: 'mint', name: 'Load list locked', meta: 'Ops', value: 'Tonight' },
        { rank: 4, dot: 'amber', name: 'Voyage P&L', meta: 'Accounts', value: 'Live' },
        { rank: 5, dot: 'rose', name: 'Pre-alerts', meta: 'Scheduler', value: 'Queued' },
      ]}
      footLeft="Department swimlane ready"
      footRight="CS → Sales → Ops → Docs"
    />
  )
}

function HudPulse() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 12h3l2-6 4 12 2-6h5" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}
