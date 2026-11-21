import { useRef } from 'react'
import './LogoMarquee.css'

const LOGOS = {
  nexora: { name: 'NEXORA', cls: 'lf-t-wide lf-m-arc' },
  steelcore: { name: 'STEELCORE', cls: 'lf-t-heavy lf-m-sq' },
  orbital: { name: 'Orbital Materials', cls: 'lf-t-serif lf-m-ring' },
  northstar: { name: 'NORTHSTAR LOGISTICS', cls: 'lf-t-mono lf-m-dia' },
  vectra: { name: 'vectra', cls: 'lf-t-tight lf-m-tri' },
  alta: { name: 'Alta Manufacturing', cls: 'lf-t-serifi' },
  prime: { name: 'PRIMEFREIGHT', cls: 'lf-t-heavy lf-m-slash' },
  novatech: { name: 'novatech', cls: 'lf-t-tight lf-m-dot' },
  metroline: { name: 'METROLINE', cls: 'lf-t-mono lf-m-bars' },
  axiom: { name: 'Axiom Industries', cls: 'lf-t-plain lf-m-x' },
} as const

const ROW_A = [
  'nexora',
  'steelcore',
  'orbital',
  'northstar',
  'vectra',
  'alta',
  'prime',
  'novatech',
  'metroline',
  'axiom',
] as const

const ROW_B = [
  'alta',
  'metroline',
  'orbital',
  'prime',
  'axiom',
  'steelcore',
  'novatech',
  'northstar',
  'nexora',
  'vectra',
] as const

type LogoKey = keyof typeof LOGOS

function setPlaybackRate(tracks: Array<HTMLDivElement | null>, rate: number) {
  for (const track of tracks) {
    if (!track) continue
    for (const animation of track.getAnimations()) {
      animation.updatePlaybackRate(rate)
    }
  }
}

function LogoTrack({
  order,
  direction,
  trackRef,
}: {
  order: readonly LogoKey[]
  direction: 'r' | 'l'
  trackRef: (element: HTMLDivElement | null) => void
}) {
  const items = [...order, ...order]

  return (
    <div className="lf-row">
      <div className={`lf-track lf-track-${direction}`} ref={trackRef}>
        {items.map((key, index) => {
          const logo = LOGOS[key]
          const duplicate = index >= order.length
          return (
            <div
              key={`${direction}-${key}-${index}`}
              className={duplicate ? 'lf-item lf-dup' : 'lf-item'}
              aria-hidden={duplicate || undefined}
            >
              <span className={`lf-logo ${logo.cls}`}>{logo.name}</span>
              <span className="lf-div" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function LogoMarquee() {
  const tracks = useRef<Array<HTMLDivElement | null>>([])

  function bindTrack(index: number) {
    return (element: HTMLDivElement | null) => {
      tracks.current[index] = element
    }
  }

  return (
    <section className="lf-trust lf-trust-logos" aria-labelledby="lf-trust-title">
      <div className="lf-trust-glow" aria-hidden="true" />
      <div className="lf-trust-grain" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg">
          <filter id="lf-noise-trust">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#lf-noise-trust)" />
        </svg>
      </div>
      <div className="lf-wrap">
        <h2 className="lf-kicker" id="lf-trust-title">
          Trusted by teams moving freight at scale
        </h2>
      </div>
      <div
        className="lf-marquee"
        onMouseEnter={() => setPlaybackRate(tracks.current, 0.35)}
        onMouseLeave={() => setPlaybackRate(tracks.current, 1)}
      >
        <LogoTrack order={ROW_A} direction="r" trackRef={bindTrack(0)} />
        <LogoTrack order={ROW_B} direction="l" trackRef={bindTrack(1)} />
      </div>
    </section>
  )
}
