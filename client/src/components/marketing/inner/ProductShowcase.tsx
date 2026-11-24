import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { MkWrap, SectionHead } from '../Marketing'
import './product-showcase.css'

export type ShowcaseCallout = {
  label: string
  body: string
}

export type ShowcaseTone = 'customer' | 'vendor' | 'job'

type ProductShowcaseProps = {
  eyebrow: string
  title: ReactNode
  caption: string
  imageSrc: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  windowTitle: string
  callouts: ShowcaseCallout[]
  tone?: ShowcaseTone
}

export function ProductShowcase({
  eyebrow,
  title,
  caption,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  windowTitle,
  callouts,
  tone = 'customer',
}: ProductShowcaseProps) {
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocus = useRef<HTMLElement | null>(null)
  const titleId = useId()

  useEffect(() => {
    if (!open) return
    lastFocus.current = document.activeElement as HTMLElement | null
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const t = window.setTimeout(() => closeRef.current?.focus(), 0)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(t)
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
      lastFocus.current?.focus()
    }
  }, [open])

  return (
    <section className={`lf-mk-section lf-x-showcase is-${tone}`}>
      <MkWrap>
        <SectionHead
          eyebrow={eyebrow}
          title={title}
          sub={caption}
          align={tone === 'job' ? 'center' : 'left'}
        />
        <div className="lf-x-sc-grid">
          <button
            type="button"
            className="lf-x-sc-frame lf-x-reveal lf-x-spot"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-label={`Enlarge screenshot: ${windowTitle}`}
          >
            <span className="lf-x-sc-chrome">
              <span className="lf-x-sc-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="lf-x-sc-wtitle">{windowTitle}</span>
              <span className="lf-x-sc-hint">Click to enlarge</span>
            </span>
            <img
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              loading="lazy"
              decoding="async"
            />
          </button>
          <ol className="lf-x-sc-callouts">
            {callouts.map((item, index) => (
              <li key={item.label} className="lf-x-reveal lf-x-spot">
                <span className="lf-x-sc-idx">{String(index + 1).padStart(2, '0')}</span>
                <strong>{item.label}</strong>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </MkWrap>

      {open ? (
        <div
          className="lf-x-sc-lb"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setOpen(false)}
        >
          <div className="lf-x-sc-lb-bar">
            <p id={titleId}>{windowTitle}</p>
            <button
              ref={closeRef}
              type="button"
              className="lf-x-sc-lb-close"
              onClick={() => setOpen(false)}
              aria-label="Close screenshot"
            >
              Close
            </button>
          </div>
          <img
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  )
}
