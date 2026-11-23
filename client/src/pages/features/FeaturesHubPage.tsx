import { Link } from 'react-router-dom'
import { Arrow, DemoCtaBand, MkWrap, PageHero } from '../../components/marketing/Marketing'
import { FeatureSplit, JobDeskHud, QuoteBoardHud } from '../../components/marketing/LiveHud'
import {
  BarChartCard,
  DataTable,
  IconBadge,
  Icons,
} from '../../components/marketing/VisualKit'
import { FEATURES, featurePath } from '../../content/features'
import '../../components/marketing/marketing.css'
import '../../components/marketing/visual-kit.css'
import '../../components/marketing/live-hud.css'

const FEATURE_ICONS = [
  Icons.truck,
  Icons.portal,
  Icons.doc,
  Icons.users,
  Icons.users,
  Icons.doc,
  Icons.ledger,
  Icons.chart,
  Icons.lock,
  Icons.shield,
]

export function FeaturesHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title={
          <>
            Capabilities across the <em>operating continuum.</em>
          </>
        }
        lede="Operations, shipments, quotations, parties, documents, finance, intelligence, permissions, and activity — mapped to how freight desks actually work."
        secondaryTo="/platform"
        secondaryLabel="Explore platform modules"
        caps={['Operate', 'Quote', 'Document', 'Invoice', 'Report']}
      />

      <FeatureSplit
        eyebrow="Operate & document"
        title={
          <>
            Job file <em>milestones</em>
          </>
        }
        body={
          <>
            <p>
              Capabilities show up as live desks — not abstract feature lists. Sales, Ops, Docs, and
              Finance advance the same file with ranked status the whole company can trust.
            </p>
            <p>Browse each capability below, then open the related platform modules for mode depth.</p>
          </>
        }
        secondaryTo="/platform"
        secondaryLabel="Explore modules"
        metrics="• Multi-mode jobs · Shared costing · Continuum handoffs"
        panel={<JobDeskHud />}
      />

      <section className="lf-mk-section lf-mk-flush">
        <MkWrap>
          <div className="lf-mk-cards" style={{ marginTop: 0 }}>
            {FEATURES.map((f, i) => (
              <Link className="lf-mk-card" to={featurePath(f.slug)} key={f.slug}>
                <IconBadge label={f.name}>{FEATURE_ICONS[i % FEATURE_ICONS.length]}</IconBadge>
                <span className="cat">Capability</span>
                <h3>{f.name}</h3>
                <p>{f.tagline}</p>
                <span className="lf-x-cardgo" aria-hidden="true">
                  <Arrow size={16} />
                </span>
              </Link>
            ))}
          </div>
        </MkWrap>
      </section>

      <DataTable
        eyebrow="At a glance"
        title={
          <>
            Feature map for <em>buyers</em>
          </>
        }
        columns={['Feature', 'Primary users', 'Related modules']}
        rows={FEATURES.map((f) => [
          f.name,
          f.who.slice(0, 2).join(', '),
          String(f.relatedModules.length),
        ])}
      />

      <BarChartCard
        eyebrow="Continuum weight"
        title={
          <>
            Where desks spend their <em>day</em>
          </>
        }
        sub="Illustrative emphasis across a typical forwarder desk — not a performance KPI."
        bars={[
          { label: 'Operations', value: 94, tone: 'accent' },
          { label: 'Quotations', value: 78, tone: 'cyan' },
          { label: 'Documents', value: 86, tone: 'mint' },
          { label: 'Finance', value: 72, tone: 'accent' },
          { label: 'Portals', value: 68, tone: 'cyan' },
        ]}
      />

      <FeatureSplit
        eyebrow="Sell & convert"
        title={
          <>
            Quotation <em>boards</em>
          </>
        }
        body={
          <>
            <p>
              Rank offers, send quotes, and let customers accept, reject, or negotiate in the portal —
              then convert into bookings and jobs without losing commercial context.
            </p>
          </>
        }
        secondaryTo="/features/quotations"
        secondaryLabel="Quotation management"
        metrics="• Verify · Send · Portal decision · Convert"
        panel={<QuoteBoardHud />}
        reverse
      />

      <DemoCtaBand
        title={
          <>
            See features on your <em>jobs.</em>
          </>
        }
      />
    </>
  )
}
