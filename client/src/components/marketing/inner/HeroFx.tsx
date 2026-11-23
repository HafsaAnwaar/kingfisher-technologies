import { Children, cloneElement, isValidElement, useEffect, useState, type CSSProperties, type ReactElement, type ReactNode } from 'react'

export function useReducedMotion() {
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

export type Fleet = 'air' | 'sea' | 'land' | 'mix'

export type Vehicle = 'plane' | 'ship' | 'truck'
type Lane = { id: string; d: string; dur: number; v: Vehicle[] }
type Port = { x: number; y: number; code: string }

/** Lane sets per fleet — air flies high arcs, sea runs low swells, land runs straighter roads. */
const SCENES: Record<Fleet, { lanes: Lane[]; ports: Port[] }> = {
  mix: {
    lanes: [
      { id: 'a', d: 'M-40 430 C 240 260, 520 240, 760 310 S 1240 430, 1520 260', dur: 26, v: ['ship', 'ship'] },
      { id: 'b', d: 'M-40 150 C 260 250, 520 110, 820 160 S 1260 70, 1520 140', dur: 18, v: ['plane'] },
      { id: 'c', d: 'M120 650 C 380 480, 700 530, 980 440 S 1340 340, 1520 390', dur: 22, v: ['plane', 'ship'] },
    ],
    ports: [
      { x: 214, y: 312, code: 'KHI' },
      { x: 760, y: 310, code: 'DXB' },
      { x: 1180, y: 390, code: 'RTM' },
      { x: 520, y: 148, code: 'SIN' },
      { x: 1036, y: 118, code: 'JEA' },
      { x: 1290, y: 550, code: 'LHR' },
    ],
  },
  air: {
    lanes: [
      { id: 'a', d: 'M-60 560 Q 380 40, 900 220 T 1520 120', dur: 16, v: ['plane', 'plane'] },
      { id: 'b', d: 'M-60 260 Q 520 -40, 1000 200 T 1520 420', dur: 20, v: ['plane'] },
      { id: 'c', d: 'M140 700 Q 620 300, 1100 470 T 1520 300', dur: 18, v: ['plane'] },
    ],
    ports: [
      { x: 176, y: 380, code: 'KHI' },
      { x: 640, y: 112, code: 'DXB' },
      { x: 1210, y: 160, code: 'FRA' },
      { x: 1342, y: 382, code: 'LHR' },
      { x: 410, y: 560, code: 'SIN' },
      { x: 960, y: 470, code: 'JFK' },
    ],
  },
  sea: {
    lanes: [
      { id: 'a', d: 'M-40 470 C 200 440, 360 510, 600 480 S 1000 420, 1200 460 S 1440 500, 1520 470', dur: 34, v: ['ship', 'ship'] },
      { id: 'b', d: 'M-40 600 C 260 560, 480 640, 760 600 S 1180 560, 1520 610', dur: 40, v: ['ship'] },
      { id: 'c', d: 'M-40 200 C 300 240, 640 170, 900 210 S 1300 250, 1520 190', dur: 38, v: ['ship'] },
    ],
    ports: [
      { x: 150, y: 452, code: 'KHI' },
      { x: 600, y: 480, code: 'JEA' },
      { x: 1200, y: 460, code: 'RTM' },
      { x: 360, y: 225, code: 'SIN' },
      { x: 1060, y: 230, code: 'SHA' },
      { x: 900, y: 596, code: 'PQM' },
    ],
  },
  land: {
    lanes: [
      { id: 'a', d: 'M-40 520 L 300 470 L 620 500 L 980 430 L 1520 470', dur: 24, v: ['truck', 'truck'] },
      { id: 'b', d: 'M-40 640 L 420 600 L 860 630 L 1520 560', dur: 28, v: ['truck'] },
      { id: 'c', d: 'M-40 210 L 360 240 L 760 190 L 1120 230 L 1520 180', dur: 22, v: ['plane'] },
    ],
    ports: [
      { x: 300, y: 470, code: 'KHI' },
      { x: 620, y: 500, code: 'HYD' },
      { x: 980, y: 430, code: 'MUX' },
      { x: 1280, y: 455, code: 'LHE' },
      { x: 420, y: 600, code: 'QTA' },
      { x: 1120, y: 230, code: 'ISB' },
    ],
  },
}

/** Small top-down vehicles, drawn pointing +x so animateMotion rotate="auto" aims them down the lane. */
export function VehicleIcon({ kind }: { kind: Vehicle }) {
  if (kind === 'plane') {
    return (
      <g className="lf-xh-veh is-plane">
        <path className="lf-xh-trail" d="M-12 0 H-64" />
        <path
          className="lf-xh-veh-body"
          d="M13 0c0-1.3-1.2-2-2.6-2H4.2L-2.6-11.2h-3.3L-2.4-2h-6.1l-2.6-3.6h-2.2l1.3 4.4v2.4l-1.3 4.4h2.2l2.6-3.6h6.1l-3.5 9.2h3.3L4.2 2h6.2C11.8 2 13 1.3 13 0Z"
        />
      </g>
    )
  }
  if (kind === 'truck') {
    return (
      <g className="lf-xh-veh is-truck">
        <rect className="lf-xh-veh-body" x="-13" y="-4.6" width="17" height="9.2" rx="1.4" />
        <rect className="lf-xh-veh-accent" x="5.2" y="-4" width="6.6" height="8" rx="2" />
        <path className="lf-xh-veh-line" d="M-10 -1.5 H1 M-10 1.5 H1" />
      </g>
    )
  }
  return (
    <g className="lf-xh-veh is-ship">
      <path className="lf-xh-wake" d="M-14 -3.4 L-46 -10 M-14 3.4 L-46 10" />
      <path className="lf-xh-veh-body" d="M15 0 9-5h-21.5a1.8 1.8 0 0 0-1.8 1.8v6.4A1.8 1.8 0 0 0-12.5 5H9Z" />
      <rect className="lf-xh-veh-accent" x="-6.5" y="-3.4" width="4" height="3.1" rx=".4" />
      <rect className="lf-xh-veh-accent alt" x="-6.5" y=".3" width="4" height="3.1" rx=".4" />
      <rect className="lf-xh-veh-accent alt" x="-1.8" y="-3.4" width="4" height="3.1" rx=".4" />
      <rect className="lf-xh-veh-accent" x="-1.8" y=".3" width="4" height="3.1" rx=".4" />
      <rect className="lf-xh-veh-accent" x="2.9" y="-3.4" width="4" height="3.1" rx=".4" />
      <rect className="lf-xh-veh-cab" x="-11.6" y="-3" width="3.4" height="6" rx=".8" />
    </g>
  )
}

export function HeroFx({ fleet = 'mix', flip = false }: { fleet?: Fleet; flip?: boolean }) {
  const reduced = useReducedMotion()
  const scene = SCENES[fleet]
  const ports = flip ? scene.ports.map((p) => ({ ...p, x: 1440 - p.x })) : scene.ports
  return (
    <div className={`lf-xh-fx fleet-${fleet}`} aria-hidden="true">
      <div className="lf-xh-aurora">
        <span className="lf-xh-orb o1" />
        <span className="lf-xh-orb o2" />
        <span className="lf-xh-orb o3" />
      </div>
      <div className="lf-xh-grid" />
      {fleet === 'sea' ? <div className="lf-xh-swell" /> : null}
      <svg className="lf-xh-lanes" viewBox="0 0 1440 720" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="lf-xh-lane" x1="0" x2="1">
            <stop offset="0" stopColor="#FF751F" stopOpacity="0" />
            <stop offset=".45" stopColor="#FF9A57" stopOpacity=".55" />
            <stop offset="1" stopColor="#FFD2B0" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g transform={flip ? 'translate(1440 0) scale(-1 1)' : undefined}>
          {scene.lanes.map((lane) => (
            <g key={lane.id}>
              <path className={`lf-xh-lane-base${fleet === 'land' ? ' is-road' : ''}`} d={lane.d} />
              <path className={`lf-xh-lane lane-${lane.id}`} d={lane.d} stroke="url(#lf-xh-lane)" />
              {lane.v.map((kind, i) => {
                const at = (0.32 + i * 0.4 + lane.id.charCodeAt(0) * 0.07) % 1
                return (
                  <g key={`${lane.id}-${i}`} className="lf-xh-mover">
                    <VehicleIcon kind={kind} />
                    {reduced ? (
                      <animateMotion
                        dur="1s"
                        fill="freeze"
                        rotate="auto"
                        path={lane.d}
                        keyPoints={`${at.toFixed(3)};${at.toFixed(3)}`}
                        keyTimes="0;1"
                        calcMode="linear"
                      />
                    ) : (
                      <animateMotion
                        dur={`${lane.dur}s`}
                        begin={`${(-lane.dur * at).toFixed(2)}s`}
                        repeatCount="indefinite"
                        rotate="auto"
                        path={lane.d}
                      />
                    )}
                  </g>
                )
              })}
            </g>
          ))}
        </g>
        {ports.map((p, i) => (
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
