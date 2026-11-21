import { useRef, useState, type ReactNode } from 'react'
import type { Step } from '../../../content/platform-modules'
import type { PlatformModule } from '../../../content/platform-modules'
import { ProgressRail, useInViewPlay } from '../motion'
import { MkWrap } from '../Marketing'
import { LiveOpsStage } from './LiveOpsStage'

type PersonaFlowSectionProps = {
  eyebrow: string
  title: ReactNode
  sub: string
  beats: Step[]
  stack: PlatformModule[]
  mockTitle: string
  mockSub: string
}

/** Solution-page HIW twin: day beats accordion + live module stage that swaps with stack. */
export function PersonaFlowSection({
  eyebrow,
  title,
  sub,
  beats,
  stack,
  mockTitle,
  mockSub,
}: PersonaFlowSectionProps) {
  const { ref, play, inView } = useInViewPlay<HTMLElement>(0.2)
  const [active, setActive] = useState(0)
  const [moduleIdx, setModuleIdx] = useState(0)
  const [swap, setSwap] = useState<'a' | 'b'>('a')
  const activeRef = useRef(0)
  const [hover, setHover] = useState(false)
  const current = stack[moduleIdx] ?? stack[0]

  function pick(index: number) {
    if (activeRef.current === index) return
    activeRef.current = index
    setActive(index)
    setModuleIdx(index % Math.max(stack.length, 1))
    setSwap((s) => (s === 'a' ? 'b' : 'a'))
  }

  return (
    <section
      className={`lf-mk-section lf-mk-band lf-mk-flow is-orange${inView ? ' lf-mk-inview' : ''}`}
      ref={ref}
    >
      <div className="lf-mk-section-bg" aria-hidden="true" />
      <MkWrap>
        <header className="lf-mk-head">
          <span className="lf-mk-badge">{eyebrow}</span>
          <h2 className="lf-mk-h2">{title}</h2>
          <p className="lf-mk-sub">{sub}</p>
        </header>

        <div
          className="lf-mk-flow-main"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="lf-mk-flow-cards" role="list">
            <div className="lf-mk-fc is-on" style={{ pointerEvents: 'none', marginBottom: 4 }}>
              <div className="lf-mk-fc-head" style={{ minHeight: 48, paddingBottom: 8 }}>
                <span className="lf-mk-fc-txt">
                  <span className="lf-mk-fc-title">{mockTitle}</span>
                  <span className="lf-mk-fc-desc" style={{ display: 'block' }}>
                    {mockSub}
                  </span>
                </span>
              </div>
            </div>
            {beats.map(([heading, body], index) => {
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
                    <svg
                      className="lf-mk-fc-chev"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
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
                      onComplete={() => pick((index + 1) % beats.length)}
                    />
                  ) : null}
                </div>
              )
            })}
          </div>

          <div className={`lf-mk-flow-stage lf-mk-swap-${swap}`} key={`${active}-${swap}`}>
            {current ? (
              <LiveOpsStage
                stageKind={current.stageKind}
                title={current.stageTitle}
                sub={current.stageSub}
                pills={current.stagePills}
                tall
                showRail={false}
                slug={current.slug}
                step={active}
                swapKey={`${active}-${swap}-${current.slug}`}
              />
            ) : null}
          </div>
        </div>
      </MkWrap>
    </section>
  )
}
