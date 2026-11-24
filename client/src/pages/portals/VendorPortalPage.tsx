import {
  BeforeAfter,
  DemoCtaBand,
  PageHero,
} from '../../components/marketing/Marketing'
import { FeatureSplit, VendorDeskHud } from '../../components/marketing/LiveHud'
import { IconCardGrid, Icons } from '../../components/marketing/VisualKit'
import { VENDOR_PORTAL } from '../../content/portals'
import '../../components/marketing/marketing.css'
import '../../components/marketing/visual-kit.css'
import '../../components/marketing/live-hud.css'
import { PortalArt } from '../../components/marketing/inner/HeroArt'
import { ProductShowcase } from '../../components/marketing/inner/ProductShowcase'

export function VendorPortalPage() {
  const p = VENDOR_PORTAL
  return (
    <>
      <PageHero
        variant="split" flip fleet="sea" art={<PortalArt kind="vendor" rows={p.capabilities.map((c) => c[0])} locked="Your general ledger" />}
        eyebrow={p.eyebrow}
        title={
          <>
            Vendor collaboration that stays <em>permissioned.</em>
          </>
        }
        lede={p.lede}
        secondaryTo="/portals"
        secondaryLabel="All portals"
        primaryLabel="Request a demonstration"
      />

      <ProductShowcase
        tone="vendor"
        eyebrow="Inside the product"
        title={
          <>
            Klaus&apos;s payables desk, <em>permissioned.</em>
          </>
        }
        caption="The vendor portal welcomes Klaus into an accounts payable overview for Euro Logistics Partners GmbH — invoices, aging and upcoming dues, without opening your general ledger."
        imageSrc="/media/showcase/vendor-portal.jpg"
        imageAlt="Vendor portal for Euro Logistics Partners GmbH, welcoming Klaus with invoice KPIs, an upcoming due list and an open invoice card."
        imageWidth={1024}
        imageHeight={474}
        windowTitle="Euro Logistics Partners GmbH · Vendor portal"
        callouts={[
          {
            label: 'Welcome, Klaus',
            body: 'A named home screen for Euro Logistics Partners GmbH, with Refresh and Submit invoice always at hand.',
          },
          {
            label: 'Payables at a glance',
            body: 'KPI cards track Invoices, Due/Open (9), Aging outstanding and Paid so vendors see their own AP position.',
          },
          {
            label: 'Upcoming due and open invoices',
            body: 'A due list of purchase invoices sits beside an Open invoice card with a clear path to View Invoices.',
          },
          {
            label: 'A vendor-safe menu',
            body: 'Home, Invoices, Payments, Advances, Credit notes, Schedule, Statement and TDS — assigned work, not your books.',
          },
        ]}
      />


      <FeatureSplit
        eyebrow="Vendor portal"
        title={
          <>
            Collaboration that stays <em>permissioned</em>
          </>
        }
        body={
          <>
            <p>{p.lede}</p>
          </>
        }
        secondaryTo="/security"
        secondaryLabel="Review security"
        metrics="• Assigned work · PI submit · Staff posts ledger"
        panel={<VendorDeskHud />}
      />

      <IconCardGrid
        eyebrow="Capabilities"
        title={
          <>
            What vendors <em>can</em> do
          </>
        }
        items={p.capabilities.map(([title, body], i) => ({
          icon: [Icons.truck, Icons.doc, Icons.ledger, Icons.chart, Icons.users, Icons.lock][i % 6],
          title,
          body,
        }))}
      />

      <BeforeAfter
        eyebrow="Boundaries"
        title={
          <>
            Your books stay <em>yours</em>
          </>
        }
        beforeTitle="Vendors cannot"
        afterTitle="Your team retains"
        before={p.boundaries}
        after={[
          'Posting and financial approval',
          'Cross-vendor and full-ledger visibility',
          'Staff ERP as the system of record',
        ]}
      />

      <DemoCtaBand
        title={
          <>
            Walk the vendor <em>portal.</em>
          </>
        }
      />
    </>
  )
}
