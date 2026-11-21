import { useRef, useState, type ReactNode } from 'react'
import type { Step } from '../../../content/platform-modules'
import { ProgressRail, useInViewPlay } from '../motion'
import { MkWrap } from '../Marketing'
import { LiveOpsStage } from './LiveOpsStage'
import type { StageKind } from '../../../content/platform-modules'

type ModuleFlowSectionProps = {
  eyebrow: string
  title: ReactNode
  sub: string
  steps: Step[]
  stageKind: StageKind
  stageTitle: string
  stageSub: string
  stagePills?: string[]
  accent?: 'teal' | 'orange'
  slug?: string
}

/** HowItWorks-parity: accordion steps + live ops stage, progress auto-advance, pause on hover. */
export function ModuleFlowSection({
  eyebrow,
  title,
  sub,
  steps,
  stageKind,
  stageTitle,
  stageSub,
  stagePills,
  accent = 'teal',
  slug,
}: ModuleFlowSectionProps) {
  const { ref, play, inView } = useInViewPlay<HTMLElement>(0.2)
  const [active, setActive] = useState(0)
  const [swap, setSwap] = useState<'a' | 'b'>('a')
  const activeRef = useRef(0)
  const [hover, setHover] = useState(false)

  function pick(index: number) {
    if (activeRef.current === index) return
    activeRef.current = index
    setActive(index)
    setSwap((s) => (s === 'a' ? 'b' : 'a'))
  }

  return (
    <section
      className={`lf-mk-section lf-mk-band lf-mk-flow ${accent === 'orange' ? 'is-orange' : 'is-teal'}${inView ? ' lf-mk-inview' : ''}`}
      ref={ref}
    >
      <div className="lf-mk-section-bg" aria-hidden="true" />
      <MkWrap>
        <header className="lf-mk-head">
          <span className="lf-mk-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect width="8" height="8" x="3" y="3" rx="2" />
              <path d="M7 11v4a2 2 0 0 0 2 2h4" />
              <rect width="8" height="8" x="13" y="13" rx="2" />
            </svg>
            {eyebrow}
          </span>
          <h2 className="lf-mk-h2">{title}</h2>
          <p className="lf-mk-sub">{sub}</p>
        </header>

        <div
          className="lf-mk-flow-main"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="lf-mk-flow-cards" role="list">
            {steps.map(([heading, body], index) => {
              const open = active === index
              return (
                <div className={open ? 'lf-mk-fc is-on' : 'lf-mk-fc'} role="listitem" key={heading}>
                  <button
                    type="button"
                    className="lf-mk-fc-head"
                    aria-expanded={open}
                    onClick={() => pick(index)}
                  >
                    <span className="lf-mk-fc-n">{String(index + 1).padStart(2, '0')}</span>
                    <span className="lf-mk-fc-txt">
                      <span className="lf-mk-fc-title">{heading}</span>
                      <span className="lf-mk-fc-desc">{body}</span>
                    </span>
                    <svg className="lf-mk-fc-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div className="lf-mk-fc-body">
                    <div className="lf-mk-fc-inner">
                      <p className="lf-mk-fc-sum">{body}</p>
                    </div>
                  </div>
                  {open ? (
                    <ProgressRail
                      active={play}
                      paused={hover}
                      durationSec={9}
                      onComplete={() => pick((index + 1) % steps.length)}
                    />
                  ) : null}
                </div>
              )
            })}
          </div>

          <div className={`lf-mk-flow-stage lf-mk-swap-${swap}`} key={`${active}-${swap}`}>
            <LiveOpsStage
              stageKind={stageKind}
              title={stageTitle}
              sub={stageSub}
              pills={stagePills}
              tall
              slug={slug}
              step={active}
              swapKey={`${active}-${swap}`}
              highlight={steps[active]?.[0]}
              showRail={false}
            />
          </div>
        </div>
      </MkWrap>
    </section>
  )
}
