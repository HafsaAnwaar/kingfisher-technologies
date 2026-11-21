import type { ReactNode } from 'react'

type SwapFrameProps = {
  swapKey: string | number
  par?: 'a' | 'b'
  className?: string
  children: ReactNode
}

/** Remount + crossfade on key change (HowItWorks lf-swap-a/b pattern). */
export function SwapFrame({ swapKey, par = 'a', className = '', children }: SwapFrameProps) {
  return (
    <div className={`lf-mk-swap lf-mk-swap-${par} ${className}`.trim()} key={swapKey}>
      {children}
    </div>
  )
}
