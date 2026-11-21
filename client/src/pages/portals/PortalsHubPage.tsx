import { Link } from 'react-router-dom'
import { DemoCtaBand, MkWrap, PageHero } from '../../components/marketing/Marketing'
import { FeatureSplit, PortalInboxHud, VendorDeskHud } from '../../components/marketing/LiveHud'
import {
  DataTable,
  IconBadge,
  Icons,
} from '../../components/marketing/VisualKit'
import '../../components/marketing/marketing.css'
import '../../components/marketing/visual-kit.css'
import '../../components/marketing/live-hud.css'

export function PortalsHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Portals"
        title={
          <>
            Customer and vendor access — <em>with boundaries.</em>
          </>
        }
        lede="Give customers a controlled window into their business with you, and vendors a place for assigned work — without opening your internal books."
        primaryLabel="Request a demonstration"
        secondaryTo="/security"
        secondaryLabel="Review security"
      />

      <FeatureSplit
        eyebrow="Customer access"
        title={
          <>
            Portal inbox with <em>boundaries</em>
          </>
        }
        body={
          <>
            <p>
              Customers see their quotes, shipments, permitted documents, and invoices — never other
              parties&apos; data or your internal costing.
            </p>
            <p>Public track shares progress without commercial leakage.</p>
          </>
        }
        secondaryTo="/portals/customer"
        secondaryLabel="Customer portal"
        metrics="• Quotes · Shipments · Docs · Pay via provider"
        panel={<PortalInboxHud />}
      />

      <section className="lf-mk-section lf-mk-flush">
        <MkWrap>
          <div className="lf-mk-cards" style={{ marginTop: 0 }}>
            <Link className="lf-mk-card" to="/portals/customer">
              <IconBadge label="Customer portal">{Icons.portal}</IconBadge>
              <span className="cat">Customers</span>
              <h3>Customer portal</h3>
              <p>Quotes, shipments, documents, invoices, notifications, and pay — on their records only.</p>
            </Link>
            <Link className="lf-mk-card" to="/portals/vendor">
              <IconBadge label="Vendor portal">{Icons.users}</IconBadge>
              <span className="cat">Vendors</span>
              <h3>Vendor portal</h3>
              <p>Assigned work, document exchange, and purchase invoice submit for staff review.</p>
            </Link>
            <Link className="lf-mk-card" to="/security">
              <IconBadge label="Security">{Icons.shield}</IconBadge>
              <span className="cat">Trust</span>
              <h3>Security boundaries</h3>
              <p>Tenant isolation, RBAC, and payment-provider clarity behind every portal action.</p>
            </Link>
          </div>
        </MkWrap>
      </section>

      <DataTable
        eyebrow="Compare"
        title={
          <>
            Portal <em>boundaries</em>
          </>
        }
        columns={['Capability', 'Customer portal', 'Vendor portal']}
        rows={[
          ['Quotations', 'Accept / reject / negotiate', '—'],
          ['Shipments / jobs', 'Own party progress', 'Assigned / cost-linked work'],
          ['Documents', 'Permitted downloads', 'Exchange on linked work'],
          ['Finance', 'Invoices + optional pay', 'Draft PI submit + AP views'],
          ['Ledger posting', 'No', 'No — staff only'],
        ]}
      />

      <FeatureSplit
        eyebrow="Vendor access"
        title={
          <>
            Assigned work, not your <em>books</em>
          </>
        }
        body={
          <>
            <p>
              Vendors exchange documents and submit purchase invoices for review. Your team keeps
              posting and approval control.
            </p>
          </>
        }
        secondaryTo="/portals/vendor"
        secondaryLabel="Vendor portal"
        metrics="• Assigned jobs · Cost visibility · PI draft · AP views"
        panel={<VendorDeskHud />}
        reverse
      />

      <DemoCtaBand
        title={
          <>
            See both portals in a <em>demo.</em>
          </>
        }
      />
    </>
  )
}
