import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../app/theme-context'
import {
  CAT_KEY,
  FILTERS_A,
  FILTERS_B,
  MODULE_BY_ID,
  MODULES,
  PERSONAS,
  hexA,
  lum,
  type FilterDef,
} from './stack-config'
import './ModuleStack.css'

function PathIcon({
  d,
  size,
  strokeWidth = 1.8,
  stroke,
}: {
  d: string
  size: number
  strokeWidth?: number
  stroke?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke ?? 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}

export function ModuleStack() {
  const { theme } = useTheme()
  const light = theme === 'light'
  const sectionRef = useRef<HTMLElement>(null)
  const [seen, setSeen] = useState(false)
  const visiblePersonas = PERSONAS.filter((p) => !p.hidden)
  const showPersonas = visiblePersonas.length > 0
  const allModuleIds = MODULES.map((m) => m.id)
  const [persona, setPersona] = useState(0)
  const [sel, setSel] = useState<string[] | null>(() => (showPersonas ? null : allModuleIds.slice()))
  const [filter, setFilter] = useState('all')
  const [pswap, setPswap] = useState<'a' | 'b'>('a')

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    if (!('IntersectionObserver' in window)) {
      setSeen(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        setSeen(true)
      },
      { threshold: 0.08 },
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const per = showPersonas ? visiblePersonas[persona] ?? PERSONAS[0] : PERSONAS[0]
  const selected = sel ?? (showPersonas ? per.modules : allModuleIds)
  const on = new Set(selected)
  const fdef: FilterDef =
    FILTERS_A.concat(FILTERS_B).find((f) => f.id === filter) ?? FILTERS_A[0]
  const shows = (id: string, cat: string) =>
    filter === 'all' || (fdef.cat ? cat === fdef.cat : (fdef.ids?.includes(id) ?? false))
  const text = light ? per.textLight : per.color
  const modified = !(
    selected.length === per.modules.length && per.modules.every((id) => on.has(id))
  )

  let prev: { a: boolean; c: string } | null = null
  let hit = 0
  const steps = per.pipeline.map((st, i) => {
    const mods = st[1].map((id) => MODULE_BY_ID[id])
    const am = mods.find((m) => on.has(m.id))
    const m = am ?? mods[0]
    const a = !!am
    if (a) hit += 1
    const line = i > 0 && a && prev?.a
    const out = {
      l: st[0],
      icon: m.icon,
      cls: a ? 'lf-ps' : 'lf-ps off',
      lineCls: `lf-ps-line${i === 0 ? ' first' : ''}${line ? ' on' : ''}`,
      lineBg: line
        ? `linear-gradient(90deg, ${prev!.c}, ${m.color})`
        : 'var(--lf-border)',
      dl: i * 70,
      fg: a ? m.color : 'var(--lf-muted)',
      bd: a ? hexA(m.color, 0.7) : 'var(--lf-border)',
      bg: a ? hexA(m.color, light ? 0.1 : 0.14) : 'var(--lf-surface)',
      sh: a
        ? `0 0 0 4px ${hexA(m.color, 0.08)}, 0 8px 24px -8px ${hexA(m.color, 0.7)}`
        : 'none',
    }
    prev = { a, c: m.color }
    return out
  })

  const cov = Math.round((hit / steps.length) * 100)
  const glow = hexA(per.color, light ? 0.1 : 0.12)
  const panelBd = hexA(per.color, 0.4)
  const panelBg = `radial-gradient(60% 140% at 0% 0%, ${hexA(per.color, light ? 0.09 : 0.12)}, transparent 62%), var(--lf-surface)`
  const chips = MODULES.filter((m) => on.has(m.id)).map((m) => ({
    name: m.name,
    color: m.color,
  }))

  function pickPersona(index: number) {
    const next = visiblePersonas[index]
    if (!next) return
    setPersona(index)
    setSel(next.modules.slice())
    setPswap((current) => (current === 'b' ? 'a' : 'b'))
  }

  function toggleModule(id: string) {
    setSel((current) => {
      const base = current ?? per.modules
      return base.includes(id) ? base.filter((x) => x !== id) : [...base, id]
    })
  }

  function reset() {
    setSel(showPersonas ? per.modules.slice() : allModuleIds.slice())
    setPswap((current) => (current === 'b' ? 'a' : 'b'))
  }

  return (
    <section
      className={seen ? 'lf-stack lf-stack-in' : 'lf-stack'}
      id="modules"
      aria-labelledby="lf-stack-title"
      ref={sectionRef}
    >
      <div
        className="lf-stack-glow"
        aria-hidden="true"
        style={{
          background: `radial-gradient(42% 320px at 50% 360px, ${glow}, transparent 72%)`,
        }}
      />
      <div className="lf-stack-wrap">
        <header className="lf-sk-head">
          <div className="lf-sk-eyebrow lf-sr2">Modules for freight</div>
          <h2 className="lf-sk-h lf-sr2" id="lf-stack-title" style={{ animationDelay: '80ms' }}>
            <span>{MODULES.length} modules. One platform.</span>
            <em>Build your freight stack.</em>
          </h2>
          <p className="lf-sk-sub lf-sr2" style={{ animationDelay: '160ms' }}>
            Tell us how your freight operation works, we&apos;ll recommend the right modules, show
            you the workflow, and estimate your potential savings.
          </p>
          {showPersonas ? (
            <div className="lf-sk-ask lf-sr2" style={{ animationDelay: '220ms' }}>
              I am, click a role to see my modules
            </div>
          ) : null}
        </header>

        {showPersonas ? (
          <>
            <div
              className="lf-personas lf-sr2"
              role="group"
              aria-label="Choose a role"
              style={{ animationDelay: '280ms' }}
            >
              {visiblePersonas.map((p, i) => {
                const active = i === persona
                return (
                  <button
                    type="button"
                    className={active ? 'lf-persona is-on' : 'lf-persona'}
                    aria-pressed={active}
                    onClick={() => pickPersona(i)}
                    key={p.id}
                  >
                    <span
                      className="lf-av"
                      style={{
                        background: `radial-gradient(circle at 50% 30%, ${hexA(p.color, active ? 0.55 : 0.3)}, ${hexA(p.color, 0.06)} 72%), var(--lf-surface)`,
                        boxShadow: active
                          ? `0 0 0 2px ${p.color}, 0 0 0 8px ${hexA(p.color, 0.16)}, 0 22px 60px -12px ${hexA(p.color, 0.65)}`
                          : '0 0 0 1px var(--lf-border)',
                      }}
                    >
                      <span className="lf-av-in">
                        <svg className="lf-sil" viewBox="0 0 100 100" aria-hidden="true">
                          <circle cx="50" cy="40" r="15" fill="currentColor" />
                          <path d="M20 99c1.5-19 14-31 30-31s28.5 12 30 31Z" fill="currentColor" />
                        </svg>
                      </span>
                      <span className="lf-av-badge" style={{ background: p.color }}>
                        <PathIcon d={p.badge} size={15} strokeWidth={2} />
                      </span>
                    </span>
                    <span className="lf-pname">{p.name}</span>
                    <span className="lf-psub">{p.sub}</span>
                  </button>
                )
              })}
            </div>

            <div className="lf-ppill-row lf-sr2" style={{ animationDelay: '340ms' }}>
              <span
                className={`lf-ppill lf-tk-${pswap}`}
                style={{ borderColor: hexA(per.color, 0.45) }}
                aria-live="polite"
              >
                <i style={{ background: per.color }} />
                <span>
                  <b style={{ color: text }}>{per.name}&apos;s stack</b>, {per.pill}
                </span>
              </span>
            </div>
          </>
        ) : null}

        <div
          className="lf-filters lf-sr2"
          role="group"
          aria-label="Filter modules"
          style={{ animationDelay: '380ms' }}
        >
          {FILTERS_A.map((f) => (
            <button
              type="button"
              key={f.id}
              className={f.id === filter ? 'lf-filter is-on' : 'lf-filter'}
              aria-pressed={f.id === filter}
              onClick={() => setFilter(f.id)}
            >
              {f.l}
            </button>
          ))}
          <span className="lf-filter-sep" aria-hidden="true" />
          {FILTERS_B.map((f) => (
            <button
              type="button"
              key={f.id}
              className={f.id === filter ? 'lf-filter is-on' : 'lf-filter'}
              aria-pressed={f.id === filter}
              onClick={() => setFilter(f.id)}
            >
              {f.l}
            </button>
          ))}
        </div>

        <div className="lf-mgrid lf-sr2" style={{ animationDelay: '440ms' }}>
          {MODULES.map((m, i) => {
            const a = on.has(m.id)
            const inFilter = shows(m.id, m.cat)
            // All: show every card. Other tabs: keep non-matching cards in grid, faded.
            const faded = filter === 'all' ? !a : !inFilter || !a
            return (
              <button
                type="button"
                key={m.id}
                className={`lf-mc2${a && inFilter ? ' is-sel' : ''}${faded ? ' is-faded' : ''}`}
                aria-pressed={a}
                onClick={() => toggleModule(m.id)}
                style={{
                  borderColor: a && inFilter ? hexA(m.color, 0.55) : 'var(--lf-border)',
                  background:
                    a && inFilter
                      ? `linear-gradient(160deg, ${hexA(m.color, light ? 0.1 : 0.13)}, ${hexA(m.color, 0.02)} 65%), var(--lf-surface)`
                      : 'var(--lf-surface)',
                  boxShadow:
                    a && inFilter
                      ? `0 0 0 1px ${hexA(m.color, 0.12)}, 0 14px 34px -18px ${hexA(m.color, light ? 0.45 : 0.6)}`
                      : 'none',
                  transitionDelay: `${(i % 6) * 25}ms`,
                }}
              >
                <span className="lf-mc2-top">
                  <span
                    className="lf-mc2-ico"
                    style={{
                      color: m.color,
                      background: hexA(m.color, 0.14),
                      borderColor: hexA(m.color, 0.35),
                    }}
                  >
                    <PathIcon d={m.icon} size={16} />
                  </span>
                  <span
                    className="lf-mc2-check"
                    style={{
                      background: a ? m.color : 'transparent',
                      borderColor: a ? m.color : 'var(--lf-border-strong)',
                    }}
                    aria-hidden="true"
                  >
                    <PathIcon
                      d="M20 6 9 17l-5-5"
                      size={10}
                      strokeWidth={3.2}
                      stroke={lum(m.color) > 0.55 ? '#0A2942' : '#FFFFFF'}
                    />
                  </span>
                </span>
                <span className={`lf-mc2-cat lf-cat-${CAT_KEY[m.cat]}`}>{m.cat}</span>
                <span className="lf-mc2-name">{m.name}</span>
                <span className="lf-mc2-desc">{m.desc}</span>
                <span className="lf-mc2-route">{m.route}</span>
              </button>
            )
          })}
        </div>

        <div className="lf-pipe lf-sr2" style={{ animationDelay: '520ms' }}>
          <div className="lf-pipe-head">
            <span className="lf-pipe-k">Your freight pipeline</span>
            <span className="lf-pipe-story">
              {showPersonas
                ? per.story
                : 'Select the modules your freight team needs, from commercial handoff through delivery and finance.'}
            </span>
          </div>
          <div className="lf-pipe-scroll">
            <div className={`lf-pipe-row lf-pipe-${pswap}`}>
              {steps.map((st, i) => (
                <div className={st.cls} key={`${per.id}-${st.l}-${i}`}>
                  <span
                    className={st.lineCls}
                    style={{ background: st.lineBg, animationDelay: `${st.dl}ms` }}
                    aria-hidden="true"
                  />
                  <span
                    className="lf-ps-dot"
                    style={{
                      color: st.fg,
                      borderColor: st.bd,
                      background: st.bg,
                      boxShadow: st.sh,
                    }}
                  >
                    <PathIcon d={st.icon} size={17} />
                  </span>
                  <span className="lf-ps-lbl">{st.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="lf-val2 lf-sr2"
          style={{
            animationDelay: '580ms',
            borderColor: panelBd,
            background: panelBg,
          }}
        >
          <div>
            <div className="lf-val2-k">Estimated operational value · demo estimate</div>
            <p className="lf-val2-big">
              <em style={{ color: text }}>{cov}%</em> of your freight pipeline connected
            </p>
            <p className="lf-val2-note">
              Configured for your freight workflow, based on how many pipeline steps your selected
              modules cover. Your actual value depends on your operation.
            </p>
            <div className="lf-chips">
              {chips.map((x) => (
                <span className="lf-chip2" key={x.name}>
                  <i style={{ background: x.color }} />
                  {x.name}
                </span>
              ))}
            </div>
          </div>
          <div className="lf-val2-r">
            <span className="lf-val2-n" style={{ color: text }}>
              {selected.length}
            </span>
            <span className="lf-val2-nl">modules selected</span>
            <span className="lf-val2-for">
              {showPersonas
                ? modified
                  ? `Customized from the ${per.name} stack`
                  : `Recommended stack for ${per.name}`
                : modified
                  ? 'Customized module stack'
                  : 'Recommended freight stack'}
            </span>
            <Link className="lf-val2-btn" to={{ pathname: '/', hash: 'how-it-works' }}>
              See how this stack works →
            </Link>
            {modified ? (
              <button type="button" className="lf-reset" onClick={reset}>
                Reset recommendation
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
