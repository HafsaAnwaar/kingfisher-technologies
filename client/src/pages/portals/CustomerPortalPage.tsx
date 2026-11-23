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
