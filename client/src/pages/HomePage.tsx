import { ContactDemo } from '../components/contact/ContactDemo'
import { CustomerVoices } from '../components/customer-voices/CustomerVoices'
import { Footer } from '../components/footer/Footer'
import { Hero } from '../components/hero/Hero'
import { HowItWorks } from '../components/how-it-works/HowItWorks'
import { Implementation } from '../components/implementation/Implementation'
import { MetricsStrip } from '../components/metrics/MetricsStrip'
import { ModuleStack } from '../components/modules/ModuleStack'
import { Navbar } from '../components/navbar/Navbar'
import { Platform } from '../components/platform/Platform'
import { ProductDemo } from '../components/product-demo/ProductDemo'
// import { LogoMarquee } from '../components/trust/LogoMarquee'
import { WhyKingfisher } from '../components/why-kingfisher/WhyKingfisher'

export function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <LogoMarquee /> */}
      <HowItWorks />
      <ProductDemo />
      <Platform />
      <ModuleStack />
      <CustomerVoices />
      <WhyKingfisher />
      <Implementation />
         <MetricsStrip />
      <ContactDemo />
      <Footer />
    </>
  )
}
