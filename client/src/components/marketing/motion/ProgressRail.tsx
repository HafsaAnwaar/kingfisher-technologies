type ProgressRailProps = {
  active: boolean
  paused?: boolean
  durationSec?: number
  onComplete?: () => void
  className?: string
}

/** Bottom progress fill; fires onComplete when CSS animation ends (same contract as lf-fc-bar). */
export function ProgressRail({
  active,
  paused = false,
  durationSec = 7,
  onComplete,
  className = '',
}: ProgressRailProps) {
  return (
    <span className={`lf-mk-prog ${className}`.trim()} aria-hidden="true">
      <span
        key={active ? 'on' : 'off'}
        className={active ? 'lf-mk-bar is-run' : 'lf-mk-bar'}
        style={
          active
            ? {
                animationDuration: `${durationSec}s`,
                animationPlayState: paused ? 'paused' : 'running',
              }
            : undefined
        }
        onAnimationEnd={(event) => {
          if (event.animationName !== 'lf-mk-progress' || !active) return
          onComplete?.()
        }}
      />
    </span>
  )
}
