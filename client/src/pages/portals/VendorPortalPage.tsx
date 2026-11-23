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
