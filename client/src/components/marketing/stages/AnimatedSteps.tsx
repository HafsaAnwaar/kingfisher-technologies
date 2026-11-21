import { useState, type ReactNode } from 'react'
import type { Step } from '../../../content/platform-modules'
import { ProgressRail, useInViewPlay } from '../motion'
import { MkWrap } from '../Marketing'

export function AnimatedSteps({
  eyebrow,
  title,
  steps,
  labelPrefix = '0',
}: {
  eyebrow: string
  title: ReactNode
  steps: Step[]
  labelPrefix?: string
}) {
  const { ref, play, inView } = useInViewPlay<HTMLElement>(0.2)
  const [active, setActive] = useState(0)
  const [hover, setHover] = useState(false)

  return (
    <section
      className={inView ? 'lf-mk-section lf-mk-inview' : 'lf-mk-section'}
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <MkWrap>
        <div className="lf-mk-eyebrow lf-mk-rise">{eyebrow}</div>
        <h2 className="lf-mk-h2 lf-mk-rise lf-mk-rise-d1">{title}</h2>
        <div className="lf-mk-steps">
          {steps.map(([heading, body], index) => (
            <button
              type="button"
              className={index === active ? 'lf-mk-step is-on' : 'lf-mk-step'}
              key={heading}
              onClick={() => setActive(index)}
              style={{ cursor: 'pointer', textAlign: 'left', width: '100%', font: 'inherit' }}
            >
              <span>
                {labelPrefix === 'Stage' ? `Stage ${index + 1}` : `${labelPrefix}${index + 1}`}
              </span>
              <h3>{heading}</h3>
              <p>{body}</p>
              {index === active ? (
                <ProgressRail
                  active={play}
                  paused={hover}
                  durationSec={6}
                  onComplete={() => setActive((i) => (i + 1) % steps.length)}
                />
              ) : null}
            </button>
          ))}
        </div>
      </MkWrap>
    </section>
  )
}
