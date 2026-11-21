import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './app/ThemeProvider'
import { MarketingLayout } from './layouts/MarketingLayout'
import { AboutPage } from './pages/about/AboutPage'
import { CareersPage } from './pages/careers/CareersPage'
import { ContactPage } from './pages/contact/ContactPage'
import { CustomersPage } from './pages/customers/CustomersPage'
import { FeaturePage } from './pages/features/FeaturePage'
import { FeaturesHubPage } from './pages/features/FeaturesHubPage'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/legal/LegalPage'
import { ModulePage } from './pages/platform/ModulePage'
import { PlatformHubPage } from './pages/platform/PlatformHubPage'
import { CustomerPortalPage } from './pages/portals/CustomerPortalPage'
import { PortalsHubPage } from './pages/portals/PortalsHubPage'
import { VendorPortalPage } from './pages/portals/VendorPortalPage'
import { PricingPage } from './pages/pricing/PricingPage'
import { FaqPage } from './pages/resources/FaqPage'
import { GuidesPage } from './pages/resources/GuidesPage'
import { InsightsPage } from './pages/resources/InsightsPage'
import { ProductUpdatesPage } from './pages/resources/ProductUpdatesPage'
import { ResourcesHubPage } from './pages/resources/ResourcesHubPage'
import { SecurityPage } from './pages/security/SecurityPage'
import { SolutionPage } from './pages/solutions/SolutionPage'
import { SolutionsHubPage } from './pages/solutions/SolutionsHubPage'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<MarketingLayout />}>
            <Route path="/platform" element={<PlatformHubPage />} />
            <Route path="/platform/:slug" element={<ModulePage />} />
            <Route path="/features" element={<FeaturesHubPage />} />
            <Route path="/features/:slug" element={<FeaturePage />} />
            <Route path="/solutions" element={<SolutionsHubPage />} />
            <Route path="/solutions/:slug" element={<SolutionPage />} />
            <Route path="/portals" element={<PortalsHubPage />} />
            <Route path="/portals/customer" element={<CustomerPortalPage />} />
            <Route path="/portals/vendor" element={<VendorPortalPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resources" element={<ResourcesHubPage />} />
            <Route path="/resources/faq" element={<FaqPage />} />
            <Route path="/resources/guides" element={<GuidesPage />} />
            <Route path="/resources/insights" element={<InsightsPage />} />
            <Route path="/resources/product-updates" element={<ProductUpdatesPage />} />
            <Route path="/legal/:slug" element={<LegalPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
