import {
  BeforeAfter,
  DemoCtaBand,
  MkWrap,
  PageHero,
  SectionHead,
} from '../../components/marketing/Marketing'
import { FeatureSplit, PortalInboxHud } from '../../components/marketing/LiveHud'
import { IconCardGrid, Icons } from '../../components/marketing/VisualKit'
import { CUSTOMER_PORTAL } from '../../content/portals'
import '../../components/marketing/marketing.css'
import '../../components/marketing/visual-kit.css'
import '../../components/marketing/live-hud.css'
import { PortalArt } from '../../components/marketing/inner/HeroArt'
import { ProductShowcase } from '../../components/marketing/inner/ProductShowcase'

export function CustomerPortalPage() {
  const p = CUSTOMER_PORTAL
  return (
    <>
      <PageHero
        variant="split" fleet="air" art={<PortalArt kind="customer" rows={p.capabilities.map((c) => c[0])} locked="Internal costing & GP" />}
        eyebrow={p.eyebrow}
        title={
          <>
            Visibility for your customers. <em>Control for you.</em>
          </>
        }
        lede={p.lede}
        secondaryTo="/portals"
        secondaryLabel="All portals"
        primaryLabel="Request a demonstration"
        caps={['Quotes', 'Shipments', 'Documents', 'Invoices']}
      />

      <ProductShowcase
        tone="customer"
        eyebrow="Inside the product"
        title={
          <>
            A customer dashboard built for <em>John&apos;s morning.</em>
          </>
        }
        caption="The customer portal opens on a personal brief for KingFisher Logistic Solutions LLC: what needs attention, the numbers that matter, and every active shipment on one screen."
        imageSrc="/media/showcase/customer-portal.jpg"
        imageAlt="Customer portal dashboard for KingFisher Logistic Solutions LLC, greeting John with attention chips, KPI cards and an active shipments table."
        imageWidth={1024}
        imageHeight={471}
        windowTitle="KingFisher Logistic Solutions LLC · Customer portal"
        callouts={[
          {
            label: 'Good morning, John',
            body: 'Attention chips surface On hold, Documents missing and Invoices overdue before the day even starts.',
          },
          {
            label: 'Four live KPIs',
            body: 'Active shipments (3 open), pending quotations (1 awaiting), outstanding AED 2.9k and delivered jobs sit above the work.',
          },
          {
            label: 'Active shipments table',
            body: 'Each job shows route, mode, container, container status, job status such as Booking confirmed, and ETA.',
          },
          {
            label: 'Their workspace, their records',
            body: 'The navy sidebar covers Dashboard, Booking, Track, Jobs, Customs clearance, Quotes and Invoices, only this customer’s work.',
          },
        ]}
      />


      <FeatureSplit
        eyebrow="Customer portal"
        title={
          <>
            Visibility for them. <em>Control for you.</em>
          </>
        }
        body={
          <>
            <p>{p.lede}</p>
          </>
        }
        secondaryTo="/security"
        secondaryLabel="Review security"
        metrics="• Own party only · No internal GP · Track stays clean"
        panel={<PortalInboxHud />}
      />

      <IconCardGrid
        eyebrow="Capabilities"
        title={
          <>
            What customers <em>can</em> do
          </>
        }
        items={p.capabilities.map(([title, body], i) => ({
          icon: [Icons.portal, Icons.truck, Icons.doc, Icons.ledger, Icons.users, Icons.chart][i % 6],
          title,
          body,
        }))}
      />

      <BeforeAfter
        eyebrow="Boundaries"
        title={
          <>
            Collaboration without <em>exposure</em>
          </>
        }
        beforeTitle="Stays inside your tenant"
        afterTitle="Customer portal delivers"
        before={p.boundaries}
        after={[
          'Their quotations and decisions',
          'Their shipment progress and permitted documents',
          'Their invoices and optional online pay',
        ]}
      />

      <section className="lf-mk-section">
        <MkWrap>
          <SectionHead
            eyebrow="Track"
            title={
              <>
                Progress without commercial <em>leakage</em>
              </>
            }
            sub={
              <>
                Public track &amp; trace supports lookup by reference while withholding costs, GP, and
                internal notes, so customers stay informed without seeing your margin.
              </>
            }
          />
        </MkWrap>
      </section>

      <DemoCtaBand
        title={
          <>
            Walk the customer <em>portal.</em>
          </>
        }
      />
    </>
  )
}
