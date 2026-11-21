import { useEffect, useRef, useState, type RefObject } from 'react'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** IntersectionObserver → inView; timers only when visible and motion allowed. */
export function useInViewPlay<T extends HTMLElement = HTMLElement>(
  threshold = 0.25,
): { ref: RefObject<T | null>; inView: boolean; play: boolean } {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(prefersReducedMotion())
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => setInView(entries.some((entry) => entry.isIntersecting)),
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView, play: inView && !reduced }
}

/** Auto-increment tick while `play` is true. */
export function usePlayTick(play: boolean, intervalMs = 1900) {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    if (!play) return
    const id = window.setInterval(() => setTick((t) => t + 1), intervalMs)
    return () => window.clearInterval(id)
  }, [play, intervalMs])
  return tick
}
