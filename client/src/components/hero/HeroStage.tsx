type Offset = {
  x: number
  y: number
}

type HeroStageProps = {
  offset: Offset
}

function shift(offset: Offset, kx: number, ky: number) {
  return {
    transform: `translate3d(${(offset.x * kx).toFixed(1)}px, ${(offset.y * ky).toFixed(1)}px, 0)`,
  }
}

export function HeroStage({ offset }: HeroStageProps) {
  return (
    <div className="lf-stage">
      <div className="lf-pos lf-pos-a" style={shift(offset, -18, -14)}>
        <div className="lf-rise lf-d5">
          <div className="lf-float">
            <div className="lf-glass lf-metric">
              <div className="lf-mhead">
                <span className="lf-ico">
                  <TruckIcon />
                </span>
                Active Shipments
              </div>
              <div className="lf-val">12,480</div>
              <svg className="lf-spark" viewBox="0 0 204 34" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M0 28 L20 25 L40 27 L60 20 L80 22 L100 15 L120 18 L140 11 L160 13 L180 7 L204 9 L204 34 L0 34 Z"
                  fill="#FF751F"
                  fillOpacity=".12"
                />
                <path
                  d="M0 28 L20 25 L40 27 L60 20 L80 22 L100 15 L120 18 L140 11 L160 13 L180 7 L204 9"
                  fill="none"
                  stroke="#FF751F"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="lf-sub">
                <span className="lf-live" />
                Live, network-wide
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lf-pos lf-pos-c" style={shift(offset, -10, 16)}>
        <div className="lf-rise lf-d6">
          <div className="lf-float lf-f3">
            <div className="lf-glass lf-chip">
              <span className="lf-ico">
                <PulseIcon />
              </span>
              <div>
                <div className="lf-chipval">24/7</div>
                <div className="lf-chiplbl">AI Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lf-pos lf-pos-b" style={shift(offset, 14, 10)}>
        <div className="lf-rise lf-d6">
          <div className="lf-float lf-f2">
            <div className="lf-glass lf-metric" style={{ width: 228 }}>
              <div className="lf-mhead">
                <span className="lf-ico">
                  <ClockIcon />
                </span>
                On-Time Delivery
              </div>
              <div className="lf-val">98.6%</div>
              <div className="lf-bar">
                <span className="lf-bar-fill" />
              </div>
              <div className="lf-sub">Rolling 30 days</div>
            </div>
          </div>
        </div>
      </div>

      <div className="lf-pos lf-pos-d" style={shift(offset, 8, 6)}>
        <div className="lf-rise lf-d7">
          <div className="lf-float lf-f4">
            <div className="lf-glass lf-ship">
              <div className="lf-shiphead">
                <span className="lf-eyebrow">
                  <span className="lf-live" />
                  Live Shipment
                </span>
                <span className="lf-status">
                  <span className="lf-sdot" />
                  On Route
                </span>
              </div>
              <div className="lf-route">
                Karachi <RouteArrow /> Dubai
              </div>
              <div className="lf-ports">Port Qasim → Jebel Ali</div>
              <div className="lf-map">
                <ShipmentMap />
              </div>
              <div className="lf-stats">
                <div>
                  <div className="lf-k">ETA</div>
                  <div className="lf-v">18h 42m</div>
                </div>
                <div>
                  <div className="lf-k">Status</div>
                  <div className="lf-v">In Transit</div>
                </div>
                <div>
                  <div className="lf-k">Mode</div>
                  <div className="lf-v">Sea · FCL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ShipmentMap() {
  return (
    <svg viewBox="0 0 376 118" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="lf-dots" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="5" cy="5" r=".9" fill="#FF751F" fillOpacity=".2" />
        </pattern>
      </defs>
      <rect width="376" height="118" fill="url(#lf-dots)" />
      <path
        d="M0 0 H150 C140 20 110 26 96 30 C80 34 70 26 56 30 C40 34 20 50 0 56 Z"
        fill="#FF751F"
        fillOpacity=".07"
        stroke="#FF751F"
        strokeOpacity=".2"
        strokeWidth=".8"
      />
      <path
        d="M200 0 H376 V40 C350 34 340 30 330 34 C300 40 270 30 250 26 C230 22 215 12 200 0 Z"
        fill="#FF751F"
        fillOpacity=".07"
        stroke="#FF751F"
        strokeOpacity=".2"
        strokeWidth=".8"
      />
      <path
        d="M0 72 C30 64 60 58 90 64 C100 80 96 100 84 118 H0 Z"
        fill="#FF751F"
        fillOpacity=".07"
        stroke="#FF751F"
        strokeOpacity=".2"
        strokeWidth=".8"
      />
      <path
        d="M332 46 Q190 128 46 42"
        fill="none"
        stroke="#FF751F"
        strokeOpacity=".5"
        strokeWidth="1.2"
        strokeDasharray="2 5"
        className="lf-flow-slow"
      />
      <path
        d="M332 46 Q246.8 95.2 160.9 83.9"
        fill="none"
        stroke="#FF751F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M332 46 Q246.8 95.2 160.9 83.9"
        pathLength="100"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        className="lf-sweep"
      />
      <circle cx="332" cy="46" r="3.5" fill="#FFFFFF" />
      <circle cx="46" cy="42" r="3.5" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
      <text x="340" y="34" textAnchor="middle" className="lf-maplbl">
        KHI
      </text>
      <text x="46" y="30" textAnchor="middle" className="lf-maplbl">
        DXB
      </text>
      <g transform="translate(160.9 83.9)">
        <circle r="9" fill="#FF751F" fillOpacity=".35" className="lf-vring" />
        <circle r="4.2" fill="#FFFFFF" stroke="#FF751F" strokeWidth="2" />
      </g>
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}

function PulseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

function RouteArrow() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
