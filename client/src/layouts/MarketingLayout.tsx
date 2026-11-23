import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/footer/Footer'
import { Navbar } from '../components/navbar/Navbar'
import { useInnerMotion, useScrollProgress } from '../components/marketing/inner/useInnerMotion'

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
      <main className="lf-mk lf-mk-pad lf-x" ref={mainRef}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
