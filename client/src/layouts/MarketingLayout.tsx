import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/footer/Footer'
import { Navbar } from '../components/navbar/Navbar'
import { useInnerMotion, useScrollProgress } from '../components/marketing/inner/useInnerMotion'

function skinFor(path: string) {
  if (path.startsWith('/platform')) return 'platform'
  if (path.startsWith('/solutions')) return 'solutions'
  if (path.startsWith('/features')) return 'features'
  if (path.startsWith('/portals')) return 'portals'
  if (path === '/about' || path === '/careers' || path === '/customers') return 'company'
  if (path.startsWith('/legal') || path.startsWith('/resources')) return 'paper'
  if (path === '/pricing') return 'pricing'
  if (path === '/contact') return 'contact'
  if (path === '/security') return 'security'
  return 'base'
}

export function MarketingLayout() {
  const location = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useInnerMotion(mainRef, location.pathname)
  useScrollProgress(barRef)

  return (
    <>
      <div className="lf-x-progress" aria-hidden="true">
        <div ref={barRef} />
      </div>
      <Navbar />
      <main className="lf-mk lf-mk-pad lf-x" data-skin={skinFor(location.pathname)} ref={mainRef}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
