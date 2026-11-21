import { HeroFilm } from './HeroFilm'

export function HeroBackdrop() {
  return (
    <>
      <div className="lf-media" aria-hidden="true">
        <div className="lf-film">
          <HeroFilm />
        </div>
      </div>
      <div className="lf-layer lf-grade" />
      <div className="lf-layer lf-left" />
      <div className="lf-layer lf-vert" />
      <div className="lf-layer lf-glow" />
      <div className="lf-layer" style={{ zIndex: 1, overflow: 'hidden' }}>
        <span className="lf-streak lf-streak-a" />
        <span className="lf-streak lf-streak-b" />
      </div>
      <div className="lf-layer lf-vignette" />
      <div className="lf-layer lf-grainwrap" aria-hidden="true">
        <svg className="lf-grain" xmlns="http://www.w3.org/2000/svg">
          <filter id="lf-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#lf-noise)" />
        </svg>
      </div>
    </>
  )
}
