import { useEffect, useRef, useState } from 'react'
import './ProductDemo.css'

const YT_ID = 'ce5A7uPs1PA'
const DEMO_POSTER = '/media/freight-ops-demo-poster.jpg'
const YT_EMBED = `https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&controls=1&disablekb=0&fs=1&cc_load_policy=0`

export function ProductDemo() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        setInView(true)
      },
      { threshold: 0.2 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className={inView ? 'lf-demo lf-demo-in' : 'lf-demo'}
      id="product-demo"
      aria-labelledby="lf-demo-title"
      ref={sectionRef}
    >
      <header className="lf-demo-head">
        <div className="lf-demo-eyebrow lf-dr">Product Demo</div>
        <h2 className="lf-demo-h lf-dr" id="lf-demo-title" style={{ transitionDelay: '90ms' }}>
          <span>See your freight</span>
          <em>operations in action</em>
        </h2>
        <p className="lf-demo-p lf-dr" style={{ transitionDelay: '180ms' }}>
          See how one connected platform manages bookings, documentation, shipments, operations, and
          delivery — across air, ocean, NVOCC and ground freight.
        </p>
      </header>

      <div className="lf-demo-stage">
        <div className="lf-demo-glow" aria-hidden="true" />
        <div className="lf-video2 lf-dr" style={{ transitionDelay: '280ms' }}>
          {playing ? (
            <div className="lf-yt-wrap">
              <iframe
                className="lf-yt-frame"
                src={YT_EMBED}
                title="Kingfisher platform walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <span className="lf-yt-logo-cover" aria-hidden="true" />
            </div>
          ) : (
            <button
              type="button"
              className="lf-poster"
              onClick={() => setPlaying(true)}
              aria-label="Play the product demo video"
              style={{ backgroundImage: `url(${DEMO_POSTER})` }}
            >
              <span className="lf-poster-shade" aria-hidden="true" />
              <span className="lf-poster-top">
                <span className="lf-poster-chip">
                  <span className="lf-live" />
                  KINGFISHER · Platform walkthrough
                </span>
                <span className="lf-poster-hide">HD</span>
              </span>
              <span className="lf-poster-c">
                <span className="lf-playbtn" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                    <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z" />
                  </svg>
                </span>
                <span className="lf-poster-t">Air · Ocean · NVOCC · Ground</span>
              </span>
              <span className="lf-poster-bot">
                <span className="lf-poster-hide">Freight forwarding ERP</span>
                <span>Play demo</span>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
