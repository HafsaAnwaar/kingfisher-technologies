import type { ReactNode } from 'react'

type TickTextProps = {
  text: ReactNode
  tick: number
  className?: string
}

/** Crossfade label on tick change (lf-tk-a / lf-tk-b). */
export function TickText({ text, tick, className = '' }: TickTextProps) {
  const par = tick % 2 ? 'b' : 'a'
  return (
    <span className={`lf-mk-tk lf-mk-tk-${par} ${className}`.trim()} key={`${tick}-${String(text)}`}>
      {text}
    </span>
  )
}
