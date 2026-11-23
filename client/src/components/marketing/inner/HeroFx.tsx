import { Children, cloneElement, isValidElement, useEffect, useState, type CSSProperties, type ReactElement, type ReactNode } from 'react'

function useReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const on = () => setReduced(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return reduced
}

/** Freight lanes drawn across the hero — same orange route + mono port codes as the homepage hero card. */
const LANES = [
  { id: 'a', d: 'M-40 420 C 240 250, 520 230, 760 300 S 1240 420, 1520 250', dur: 9 },
  { id: 'b', d: 'M-40 160 C 260 260, 520 120, 820 170 S 1260 80, 1520 150', dur: 12 },
  { id: 'c', d: 'M120 640 C 380 470, 700 520, 980 430 S 1340 330, 1520 380', dur: 14 },
]

const PORTS = [
  { x: 214, y: 302, code: 'KHI' },
  { x: 760, y: 300, code: 'DXB' },
  { x: 1180, y: 380, code: 'RTM' },
  { x: 520, y: 158, code: 'SIN' },
  { x: 1036, y: 128, code: 'JEA' },
  { x: 1290, y: 540, code: 'LHR' },
]

export function HeroFx() {
  const reduced = useReducedMotion()
  return (
    <div className="lf-xh-fx" aria-hidden="true">
      <div className="lf-xh-aurora">
        <span className="lf-xh-orb o1" />
        <span className="lf-xh-orb o2" />
        <span className="lf-xh-orb o3" />
      </div>
      <div className="lf-xh-grid" />
      <svg className="lf-xh-lanes" viewBox="0 0 1440 720" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="lf-xh-lane" x1="0" x2="1">
            <stop offset="0" stopColor="#FF751F" stopOpacity="0" />
            <stop offset=".45" stopColor="#FF9A57" stopOpacity=".55" />
            <stop offset="1" stopColor="#FFD2B0" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="lf-xh-dotg">
            <stop offset="0" stopColor="#FFD2B0" />
            <stop offset="1" stopColor="#FF751F" stopOpacity="0" />
          </radialGradient>
        </defs>
        {LANES.map((lane) => (
          <g key={lane.id}>
            <path className="lf-xh-lane-base" d={lane.d} />
            <path className={`lf-xh-lane lane-${lane.id}`} d={lane.d} stroke="url(#lf-xh-lane)" />
            {!reduced ? (
              <g>
                <circle r="9" fill="url(#lf-xh-dotg)">
                  <animateMotion dur={`${lane.dur}s`} repeatCount="indefinite" path={lane.d} />
                </circle>
                <circle r="2.4" className="lf-xh-ship">
                  <animateMotion dur={`${lane.dur}s`} repeatCount="indefinite" path={lane.d} />
                </circle>
              </g>
            ) : null}
          </g>
        ))}
        {PORTS.map((p, i) => (
          <g key={p.code} className="lf-xh-port" transform={`translate(${p.x} ${p.y})`} style={{ '--d': `${i * 0.7}s` } as CSSProperties}>
            <circle className="lf-xh-port-ring" r="14" />
            <circle className="lf-xh-port-dot" r="3.2" />
            <text x="10" y="-10">{p.code}</text>
          </g>
        ))}
      </svg>
      <span className="lf-xh-streak s1" />
      <span className="lf-xh-streak s2" />
      <div className="lf-xh-grain">
        <svg xmlns="http://www.w3.org/2000/svg">
          <filter id="lf-xh-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#lf-xh-noise)" />
        </svg>
      </div>
      <div className="lf-xh-fade" />
    </div>
  )
}

/**
 * Wraps every word of a title in a span so it can rise in with a stagger.
 * Keeps <em> (orange italic accent) and other inline elements intact.
 */
export function splitWords(node: ReactNode, counter = { n: 0 }): ReactNode {
  if (typeof node === 'string' || typeof node === 'number') {
    const parts = String(node).split(/(\s+)/)
    return parts.map((part, i) => {
      if (!part) return null
      if (/^\s+$/.test(part)) return part
      const index = counter.n++
      return (
        <span className="lf-w" key={`${index}-${i}`} style={{ '--i': index } as CSSProperties}>
          {part}
        </span>
      )
    })
  }
  if (Array.isArray(node)) return node.map((child) => splitWords(child, counter))
  if (isValidElement(node)) {
    const el = node as ReactElement<{ children?: ReactNode }>
    if (el.props.children === undefined) return el
    return cloneElement(el, undefined, ...Children.toArray(splitWords(el.props.children, counter) as ReactNode))
  }
  return node
}
