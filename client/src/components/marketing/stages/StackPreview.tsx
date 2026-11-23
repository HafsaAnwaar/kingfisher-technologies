import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { PlatformModule } from '../../../content/platform-modules'
import { modulePath } from '../../../content/platform-modules'
import { MkWrap, SectionHead } from '../Marketing'
import { LiveOpsStage } from './LiveOpsStage'
import { useInViewPlay } from '../motion'

export function StackPreview({
  eyebrow,
  title,
  modules,
}: {
  eyebrow: string
  title: ReactNode
  modules: PlatformModule[]
}) {
  const { ref, inView } = useInViewPlay<HTMLElement>(0.15)
  const [active, setActive] = useState(0)
  const current = modules[active] ?? modules[0]
  if (!current) return null

  return (
    <section className={inView ? 'lf-mk-section lf-mk-inview' : 'lf-mk-section'} ref={ref}>
      <MkWrap>
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className="lf-mk-stack">
          <div className="lf-mk-stack-chips">
            {modules.map((m, index) => (
              <button
                type="button"
                key={m.slug}
                className={index === active ? 'is-on' : undefined}
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
              >
                <span>{m.name}</span>
                <span style={{ color: 'var(--lf-muted)', fontSize: 12 }}>{m.cat}</span>
              </button>
            ))}
          </div>
          <div className="lf-mk-stack-preview" style={{ padding: 0, border: 0, background: 'transparent' }}>
            <div style={{ marginTop: 0 }} className="lf-mk-stack-stage">
              <LiveOpsStage
                stageKind={current.stageKind}
                title={current.stageTitle}
                sub={current.stageSub}
                pills={current.stagePills.slice(0, 3)}
                slug={current.slug}
                swapKey={current.slug}
                tall
                showRail={false}
              />
            </div>
            <Link
              to={modulePath(current.slug)}
              className="lf-mk-btn lf-mk-btn-ghost"
              style={{ marginTop: 12, height: 36, fontSize: 13 }}
            >
              Open {current.name} →
            </Link>
          </div>
        </div>
      </MkWrap>
    </section>
  )
}
