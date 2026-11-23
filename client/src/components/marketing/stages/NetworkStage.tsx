import { useEffect, useRef, useState } from 'react'
import { buildFlowData } from '../../how-it-works/flow-geometry'
import '../../how-it-works/HowItWorks.css'
import { usePlayTick } from '../motion'

const DATA = buildFlowData()
const ROUTE_DELAYS = [0, 90, 180, 270, 330, 390, 440, 490]

function milestone(steps: { m: string; s: string[] }[], tick: number) {
  const total = steps.reduce((count, group) => count + group.s.length, 0)
  let index = tick % total
  let groupIndex = 0
  while (index >= steps[groupIndex].s.length) {
    index -= steps[groupIndex].s.length
    groupIndex += 1
  }
  const group = steps[groupIndex]
  return {
    mode: group.m,
    now: group.s[index],
    n: `${index + 1} / ${group.s.length}`,
    par: tick % 2 ? 'a' : 'b',
    dots: group.s.map((_, dot) => `lf-sd${dot < index ? ' done' : dot === index ? ' now' : ''}`),
  }
}

type NetworkStageProps = {
  flowIndex: number
  play: boolean
  swapKey?: string | number
  title?: string
  sub?: string
}

/** Homepage HowItWorks map, same geometry, vehicles, draw, tick, HUD. */
export function NetworkStage({ flowIndex, play, swapKey = 0, title, sub }: NetworkStageProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapSize, setMapSize] = useState({ w: 640, h: 520 })
  const [swap, setSwap] = useState<'a' | 'b'>('a')
  const tick = usePlayTick(play, 1900)
  const scene = DATA.flows[Math.min(flowIndex, DATA.flows.length - 1)]
  const status = milestone(scene.steps, tick)
  const scale = Math.min(mapSize.w / 620, mapSize.h / 520)
  const originX = mapSize.w / 2 - 360 * scale
  const originY = mapSize.h / 2 + 8 - 335 * scale

  useEffect(() => {
    setSwap((s) => (s === 'a' ? 'b' : 'a'))
  }, [flowIndex, swapKey])

  useEffect(() => {
    const map = mapRef.current
    if (!map || !('ResizeObserver' in window)) return
    const observer = new ResizeObserver((entries) => {
      const box = entries[0].contentRect
      setMapSize((current) =>
        Math.abs(current.w - box.width) > 1 || Math.abs(current.h - box.height) > 1
          ? { w: box.width, h: box.height }
          : current,
      )
    })
    observer.observe(map)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={play ? 'lf-mk-net lf-map2 lf-inview' : 'lf-mk-net lf-map2'}
      ref={mapRef}
      role="img"
      aria-label={title ? `${title}: ${scene.hud}` : `Live network: ${scene.hud}`}
    >
      <div className="lf-mh">
        <span className="lf-mh-l">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
          </svg>
          {title ?? scene.net}
        </span>
        <span className="lf-mh-r">
          <span className="lf-mh-view">{sub ?? 'Network View'}</span>
          <span className="lf-mh-live">
            <span className="lf-live" />
            Live
          </span>
        </span>
      </div>

      <div className="lf-stage2" style={{ transform: `translate(${originX}px, ${originY}px) scale(${scale})` }}>
        <svg className="lf-iso" viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="lf-mk-floor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0C1A2C" />
              <stop offset="1" stopColor="#08101E" />
            </linearGradient>
            <linearGradient id="lf-mk-floor-light" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#F8FBFE" />
              <stop offset="1" stopColor="#E4EBF3" />
            </linearGradient>
            <filter id="lf-mk-hglow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path className="lf-side-l" d={DATA.iso.sideL} fill="#0A1626" />
          <path className="lf-side-r" d={DATA.iso.sideR} fill="#08101C" />
          <path
            className="lf-floor"
            d={DATA.iso.floor}
            fill="url(#lf-mk-floor)"
            stroke="#FFFFFF"
            strokeOpacity="0.28"
            strokeWidth="1"
          />
          <path className="lf-grid" d={DATA.iso.grid} fill="none" stroke="#FFFFFF" strokeOpacity="0.09" strokeWidth="1" />
          <g className={`lf-swap-${swap}`} key={`${swap}-${flowIndex}-${swapKey}`}>
            <path className="lf-zw" d={scene.zw} fill="#1E3A8A" fillOpacity="0.16" stroke="#60A5FA" strokeOpacity="0.25" strokeWidth="1" />
            <path className="lf-zm" d={scene.zm} fill="#FFFFFF" fillOpacity="0.05" stroke="#FFFFFF" strokeOpacity="0.24" strokeWidth="1" strokeDasharray="3 4" />
            <path className="lf-zt" d={scene.zt} fill="#3FD7A6" fillOpacity="0.06" stroke="#3FD7A6" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 4" />
            <path className="lf-mk" d={scene.mk} fill="none" stroke="#FFFFFF" strokeOpacity="0.28" strokeWidth="1" />
            <path className="lf-rs" d={scene.rs} fill="none" stroke="#FFFFFF" strokeOpacity="0.32" strokeWidth="1" strokeDasharray="2 5" />
            <path className="lf-rm" d={scene.rm} fill="none" stroke="#64748B" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
            <path className="lf-rx" d={scene.rx} fill="none" stroke="#F5B454" strokeOpacity="0.75" strokeWidth="1.6" strokeDasharray="5 5" strokeLinecap="round" />
            {scene.routes.map((route, index) => (
              <path
                key={index}
                d={route}
                pathLength={100}
                fill="none"
                stroke="#3FD7A6"
                strokeWidth="2.6"
                strokeLinecap="round"
                filter="url(#lf-mk-hglow)"
                className="lf-rd"
                style={{ animationDelay: `${ROUTE_DELAYS[index]}ms` }}
              />
            ))}
            <path d={scene.ra} fill="none" stroke="#D9FFF1" strokeWidth="1.4" strokeLinecap="round" className="lf-rflow" />
            <path className="lf-bl" d={scene.bl} fill="#0E2236" />
            <path className="lf-br" d={scene.br} fill="#0A1B2C" />
            <path className="lf-bt" d={scene.bt} fill="#14304A" stroke="#FFFFFF" strokeOpacity="0.28" strokeWidth="0.8" />
            <path className="lf-cl" d={scene.cl} fill="#26364A" />
            <path className="lf-cr" d={scene.cr} fill="#1E2C3D" />
            <path className="lf-ct" d={scene.ct} fill="#33465E" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="0.8" />
            <path className="lf-al" d={scene.al} fill="#10303F" />
            <path className="lf-ar" d={scene.ar} fill="#0B2533" />
            <path className="lf-at" d={scene.at} fill="#174B4C" stroke="#3FD7A6" strokeOpacity="0.6" strokeWidth="1" />
          </g>
        </svg>
        <div className="lf-vlayer" key={`vehicles-${swap}-${flowIndex}`}>
          {scene.nodes.map((node) => (
            <span
              key={`${node.cls}-${node.x}-${node.y}`}
              className={node.cls}
              style={{ left: node.x, top: node.y, animationDelay: `${node.dl}ms` }}
            />
          ))}
          <div className="lf-vin">
            {scene.parts.map((part, index) => (
              <span
                key={`part-${index}`}
                className="lf-part"
                style={{
                  offsetPath: `path('${part.d}')`,
                  animationDuration: `${part.dur}s`,
                  animationDelay: `${part.delay}s`,
                }}
              />
            ))}
            {scene.veh.map((vehicle, index) => (
              <span
                key={`veh-${index}`}
                className={vehicle.cls}
                style={{
                  offsetPath: `path('${vehicle.d}')`,
                  animationDuration: `${vehicle.dur}s`,
                  animationDelay: `${vehicle.delay}s`,
                  offsetDistance: `${vehicle.dist}%`,
                }}
              >
                <i />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="lf-labels" key={`labels-${swap}-${flowIndex}`}>
        {scene.labels.map((label) => (
          <div
            key={`${label.t}-${label.x}`}
            className={label.cls}
            style={{
              left: originX + label.x * scale,
              top: originY + label.y * scale,
              animationDelay: `${label.dl}ms`,
            }}
          >
            {label.t}
            {label.hasSub ? <small>{label.sub}</small> : null}
          </div>
        ))}
      </div>

      <div className="lf-steps" aria-live="off">
        <div className="lf-steps-k">{status.mode}</div>
        <div className="lf-steps-row">
          {status.dots.map((dot, index) => (
            <span className={dot} key={`${status.mode}-${index}`} />
          ))}
        </div>
        <div className={`lf-steps-v lf-tk-${status.par}`}>
          <span className="lf-steps-n">{status.n}</span>
          {status.now}
        </div>
      </div>

      {scene.hasVoy ? (
        <>
          <div className="lf-hud lf-hudin">
            <div className="lf-hcard">
              <div className="lf-hk">Voyage 042</div>
              <div className="lf-hv">Dubai → Nhava Sheva</div>
              <div className="lf-cap" aria-hidden="true">
                {Array.from({ length: 10 }, (_, index) => (
                  <span key={index} className={index < 7 ? 'on' : index === 7 ? 'part' : undefined} />
                ))}
              </div>
              <div className="lf-hs">
                <span>Space</span>
                <b>72% used</b>
              </div>
            </div>
          </div>
          <div className="lf-hud2 lf-hudin">
            <div className="lf-hcard">
              <div className="lf-hk act">Carrier: NVOCC</div>
              <div className="lf-hstats">
                <div>
                  <b>18</b>
                  <span>Bookings</span>
                </div>
                <div>
                  <b>46</b>
                  <span>CBM</span>
                </div>
                <div>
                  <b>12</b>
                  <span>Containers</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      <div className="lf-mf">
        <div>
          <div className="lf-mf-k">{scene.num}</div>
          <div className="lf-mf-v">{scene.hud}</div>
        </div>
        <div className="lf-leg">
          <span>
            <i style={{ background: '#3FD7A6' }} />
            Active route
          </span>
          <span>
            <i style={{ background: '#64748B' }} />
            Network
          </span>
        </div>
      </div>
    </div>
  )
}
