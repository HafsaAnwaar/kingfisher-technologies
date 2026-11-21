import type { ReactNode } from 'react'
import { MkWrap } from '../Marketing'
import { useInViewPlay } from '../motion'

export type OutcomeMetric = [string, string]

export function OutcomeStrip({
  eyebrow = 'Outcomes',
  title,
  metrics,
}: {
  eyebrow?: string
  title: ReactNode
  metrics: OutcomeMetric[]
}) {
  const { ref, inView } = useInViewPlay<HTMLElement>(0.2)

  return (
    <section className={inView ? 'lf-mk-section lf-mk-inview' : 'lf-mk-section'} ref={ref}>
      <MkWrap>
        <div className="lf-mk-eyebrow lf-mk-rise">{eyebrow}</div>
        <h2 className="lf-mk-h2 lf-mk-rise lf-mk-rise-d1">{title}</h2>
        <div className="lf-mk-outcomes">
          {metrics.map(([value, label], i) => (
            <article className={`lf-mk-outcome lf-mk-rise lf-mk-rise-d${i + 1}`} key={label}>
              <b>{value}</b>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </MkWrap>
    </section>
  )
}
