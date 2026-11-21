import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/footer/Footer'
import { Navbar } from '../components/navbar/Navbar'

export function MarketingLayout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <main className="lf-mk lf-mk-pad">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
