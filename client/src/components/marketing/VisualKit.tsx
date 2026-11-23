import type { ReactNode } from 'react'
import { MkWrap, SectionHead } from './Marketing'
import './visual-kit.css'

export function IconBadge({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="lf-vk-icon" aria-hidden="true" title={label}>
      {children}
    </div>
  )
}

export function IconCardGrid({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string
  title: ReactNode
  items: { icon: ReactNode; title: string; body: string }[]
}) {
  return (
    <section className="lf-mk-section">
      <MkWrap>
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className="lf-vk-cards">
          {items.map((item) => (
            <article className="lf-vk-card" key={item.title}>
              <IconBadge label={item.title}>{item.icon}</IconBadge>
              <span className="lf-x-vk-n" aria-hidden="true">{String(items.indexOf(item) + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </MkWrap>
    </section>
  )
}

export function DataTable({
  eyebrow,
  title,
  columns,
  rows,
}: {
  eyebrow: string
  title: ReactNode
  columns: string[]
  rows: string[][]
}) {
  return (
    <section className="lf-mk-section">
      <MkWrap>
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className="lf-vk-table-wrap">
          <table className="lf-mk-table lf-vk-table">
            <thead>
              <tr>
                {columns.map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.join('|')}>
                  {row.map((cell, i) => (
                    <td key={`${row[0]}-${i}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </MkWrap>
    </section>
  )
}

export function BarChartCard({
  eyebrow,
  title,
  sub,
  bars,
}: {
  eyebrow: string
  title: ReactNode
  sub?: string
  bars: { label: string; value: number; tone?: 'accent' | 'cyan' | 'mint' }[]
}) {
  const max = Math.max(...bars.map((b) => b.value), 1)
  return (
    <section className="lf-mk-section">
      <MkWrap>
        <div className="lf-vk-chart-panel">
          <SectionHead eyebrow={eyebrow} title={title} sub={sub} align="left" />
          <div className="lf-vk-bars" role="img" aria-label="Comparative capability chart">
            {bars.map((bar) => (
              <div className="lf-vk-bar-row" key={bar.label}>
                <span>{bar.label}</span>
                <div className="lf-vk-bar-track">
                  <i
                    className={`lf-vk-bar-fill tone-${bar.tone ?? 'accent'}`}
                    style={{ width: `${Math.round((bar.value / max) * 100)}%` }}
                  />
                </div>
                <b>{bar.value}%</b>
              </div>
            ))}
          </div>
        </div>
      </MkWrap>
    </section>
  )
}

export function ShotPlaceholder({
  label = 'Software screenshot',
  caption = 'Drop a sanitized product screenshot here when available.',
}: {
  label?: string
  caption?: string
}) {
  return (
    <div className="lf-vk-shot" aria-hidden="true">
      <div className="lf-vk-shot-frame">
        <span className="lf-vk-shot-chip">{label}</span>
        <div className="lf-vk-shot-grid" />
        <p>{caption}</p>
      </div>
    </div>
  )
}

export function TwoColVisual({
  eyebrow,
  title,
  body,
  visual,
  reverse,
}: {
  eyebrow: string
  title: ReactNode
  body: ReactNode
  visual: ReactNode
  reverse?: boolean
}) {
  return (
    <section className="lf-mk-section">
      <MkWrap>
        <div className={reverse ? 'lf-vk-split is-rev' : 'lf-vk-split'}>
          <div>
            <SectionHead eyebrow={eyebrow} title={title} align="left" />
            <div className="lf-mk-sub">{body}</div>
          </div>
          <div className="lf-vk-split-visual">{visual}</div>
        </div>
      </MkWrap>
    </section>
  )
}

/* Compact SVG icons — brand-consistent stroke set */
export const Icons = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3 5 6v5c0 5 3.2 8.4 7 9.5 3.8-1.1 7-4.5 7-9.5V6l-7-3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3.5 19c.8-3 2.9-4.5 5.5-4.5S13.7 16 14.5 19" />
      <path d="M15 14.5c1.8 0 3.4.8 4.2 2.5" />
    </svg>
  ),
  doc: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7V10z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  ),
  ledger: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </svg>
  ),
  portal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 13h3M8 16h5" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 19V5M4 19h16" />
      <path d="M8 16v-5M12 16V8M16 16v-8" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  ),
}
