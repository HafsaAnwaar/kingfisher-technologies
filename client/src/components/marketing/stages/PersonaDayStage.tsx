import { useState } from 'react'
import { ProgressRail, useInViewPlay } from '../motion'

export type DayBeat = [string, string]

export function PersonaDayStage({
  title,
  sub,
  beats,
}: {
  title: string
  sub: string
  beats: DayBeat[]
}) {
  const { ref, play } = useInViewPlay<HTMLDivElement>(0.2)
  const [active, setActive] = useState(0)
  const [hover, setHover] = useState(false)

  return (
    <div
      className={play ? 'lf-mk-stage-live lf-mk-inview' : 'lf-mk-stage-live'}
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="lf-mk-stage-top">
        <b>{title}</b>
        <span>
          <i className="lf-mk-live" />
          {sub}
        </span>
      </div>
      <div className="lf-mk-stage-body">
        <div className="lf-mk-day">
          {beats.map(([label, detail], index) => (
            <button
              type="button"
              key={label}
              className={index === active ? 'is-on' : undefined}
              onClick={() => setActive(index)}
            >
              <span className="beat-n">0{index + 1}</span>
              <span>
                <div className="beat-t">{label}</div>
                <div className="beat-d">{detail}</div>
              </span>
              {index === active ? (
                <ProgressRail
                  active={play}
                  paused={hover}
                  durationSec={6.5}
                  onComplete={() => setActive((i) => (i + 1) % beats.length)}
                />
              ) : null}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
