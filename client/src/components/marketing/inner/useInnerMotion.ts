import { useEffect, useLayoutEffect, type RefObject } from 'react'

/**
 * Inner-page motion layer (scroll reveals, staggered cards, cursor spotlight,
 * count-up numbers). Scoped to the marketing <main> so the homepage is untouched.
 * Respects prefers-reduced-motion: nothing is hidden or animated when reduced.
 */

const REVEAL_SELECTORS = [
  '.lf-x-head',
  '.lf-mk-section > .lf-mk-wrap > .lf-mk-eyebrow',
  '.lf-mk-section > .lf-mk-wrap > .lf-mk-h2',
  '.lf-mk-section > .lf-mk-wrap > .lf-mk-sub',
  '.lf-mk-card',
  '.lf-mk-feat',
  '.lf-vk-card',
  '.lf-mk-steps > .lf-mk-step',
  '.lf-mk-stat',
  '.lf-mk-ba > article',
  '.lf-x-ba-arrow',
  '.lf-mk-proof',
  '.lf-mk-related > a',
  '.lf-mk-faq > details',
  '.lf-mk-timeline > article',
  '.lf-split-copy',
  '.lf-split-panel',
  '.lf-vk-table-wrap',
  '.lf-vk-chart-panel',
  '.lf-vk-split > div',
  '.lf-mk-cta-panel',
  '.lf-mk-hcard',
  '.lf-mk-marq',
  '.lf-mk-filters',
  '.lf-mk-plans',
  '.lf-mk-pricebox',
  '.lf-mk-table',
  '.lf-mk-outcome',
  '.lf-mk-rise',
  '.lf-x-check',
  '.lf-x-reveal',
].join(',')

/** Elements that already own their entrance animation. */
const SKIP = '.lf-xh, .lf-xh *, [data-rv-skip], [data-rv-skip] *'

const SPOT_SELECTORS =
  '.lf-mk-card, .lf-mk-feat, .lf-vk-card, .lf-mk-step, .lf-mk-stat, .lf-mk-ba > article, .lf-mk-proof, .lf-mk-related > a, .lf-mk-pricebox, .lf-x-spot'

const COUNT_SELECTORS = '.lf-mk-stat b, .lf-mk-proof b, .lf-x-count'

function prefersReduced() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function countUp(el: HTMLElement) {
  if (el.dataset.counted) return
  el.dataset.counted = '1'
  const node = el.childNodes.length === 1 && el.firstChild?.nodeType === Node.TEXT_NODE ? (el.firstChild as Text) : null
  if (!node) return
  const original = node.nodeValue ?? ''
  const match = original.match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/s)
  if (!match) return
  const [, prefix, numStr, suffix] = match
  const target = Number(numStr.replace(/,/g, ''))
  if (!Number.isFinite(target) || target === 0) return
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0
  const useComma = numStr.includes(',')
  const duration = 1400
  const start = performance.now()
  const fmt = (v: number) => {
    const fixed = v.toFixed(decimals)
    return useComma ? Number(fixed).toLocaleString('en-US', { minimumFractionDigits: decimals }) : fixed
  }
  const step = (now: number) => {
    // text node may have been replaced by React — stop quietly
    if (node.parentNode !== el) return
    const t = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - t, 3)
    node.nodeValue = t >= 1 ? original : `${prefix}${fmt(target * eased)}${suffix}`
    if (t < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export function useInnerMotion(rootRef: RefObject<HTMLElement | null>, routeKey: string) {
  // Tag before paint so nothing flashes in and then hides.
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || prefersReduced() || typeof IntersectionObserver === 'undefined') return

    root.classList.add('lf-x-motion')

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          el.dataset.rvIn = '1'
          io.unobserve(el)
          if (el.dataset.rv) {
            const delay = 950 + Number(el.dataset.rvD ?? 0) * 80
            window.setTimeout(() => {
              el.dataset.rvDone = '1'
            }, delay)
          }
          el.querySelectorAll<HTMLElement>(COUNT_SELECTORS).forEach(countUp)
          if (el.matches(COUNT_SELECTORS)) countUp(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    const tag = (scope: ParentNode) => {
      const found = scope.querySelectorAll<HTMLElement>(REVEAL_SELECTORS)
      found.forEach((el) => {
        if (el.closest(SKIP)) return
        if (el.dataset.rv) {
          if (!el.dataset.rvIn) io.observe(el)
          return
        }
        // stagger among revealable siblings
        let index = 0
        let sib = el.previousElementSibling
        while (sib && index < 8) {
          if ((sib as HTMLElement).dataset?.rv !== undefined || sib.matches(REVEAL_SELECTORS)) index += 1
          sib = sib.previousElementSibling
        }
        el.dataset.rv = el.matches('.lf-mk-h2, .lf-x-head') ? 'head' : '1'
        el.dataset.rvD = String(Math.min(index, 8))
        io.observe(el)
      })
      // timelines / step rails draw in when visible
      scope.querySelectorAll<HTMLElement>('.lf-mk-timeline, .lf-mk-steps, .lf-x-rail').forEach((el) => {
        el.dataset.rvLine = '1'
        if (!el.dataset.rvIn) io.observe(el)
      })
    }

    tag(root)

    const mo = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return
          const el = node as HTMLElement
          if (el.matches(REVEAL_SELECTORS)) tag(el.parentElement ?? root)
          else tag(el)
        })
      }
    })
    mo.observe(root, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
      root.classList.remove('lf-x-motion')
    }
  }, [rootRef, routeKey])

  // Cursor spotlight + hero parallax (cheap: one listener, CSS vars only).
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return
    const st: { frame: number; last: PointerEvent | null } = { frame: 0, last: null }
    const run = () => {
      st.frame = 0
      const e = st.last
      if (!e) return
      const target = e.target as Element | null
      const card = target?.closest?.(SPOT_SELECTORS) as HTMLElement | null
      if (card && root.contains(card)) {
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', `${e.clientX - r.left}px`)
        card.style.setProperty('--my', `${e.clientY - r.top}px`)
      }
      if (!prefersReduced()) {
        const hero = root.querySelector<HTMLElement>('.lf-xh')
        if (hero) {
          const r = hero.getBoundingClientRect()
          if (e.clientY < r.bottom) {
            hero.style.setProperty('--px', ((e.clientX / window.innerWidth) * 2 - 1).toFixed(3))
            hero.style.setProperty('--py', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3))
          }
        }
      }
    }
    const onMove = (e: PointerEvent) => {
      st.last = e
      if (!st.frame) st.frame = requestAnimationFrame(run)
    }
    root.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      root.removeEventListener('pointermove', onMove)
      if (st.frame) cancelAnimationFrame(st.frame)
    }
  }, [rootRef])
}

/** Thin scroll-progress bar for long inner pages. */
export function useScrollProgress(barRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    const st = { frame: 0 }
    const update = () => {
      st.frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      bar.style.transform = `scaleX(${p})`
    }
    const onScroll = () => {
      if (!st.frame) st.frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (st.frame) cancelAnimationFrame(st.frame)
    }
  }, [barRef])
}
