import { Link } from 'react-router-dom'
import { DemoCtaBand, FeatureGrid, MkWrap, PageHero, SectionHead } from '../../components/marketing/Marketing'
import { FeatureSplit, JobDeskHud } from '../../components/marketing/LiveHud'
import {
  IconCardGrid,
  Icons,
} from '../../components/marketing/VisualKit'
import { PLATFORM_MODULES } from '../../content/platform-modules'
import '../../components/marketing/marketing.css'
import '../../components/marketing/motion/motion.css'
import '../../components/marketing/visual-kit.css'
import '../../components/marketing/live-hud.css'
import { AboutArt } from '../../components/marketing/inner/HeroArt'

const TIMELINE = [
  {
    label: 'Foundation',
    title: 'Multi-modal job model',
    body: 'Air, sea, NVOCC and land as first-class operational jobs.',
  },
  {
    label: 'Docs',
    title: 'Documentation & customs',
    body: 'Paperwork and clearance status attached to the shipment.',
  },
  {
    label: 'Money',
    title: 'Finance & accounts',
    body: 'Job costing and invoicing without month-end archaeology.',
  },
  {
    label: 'Now',
    title: 'Platform depth',
    body: 'Roles, tenants, portals, reporting and operator solutions across the network.',
  },
]

const VALUES = [
  ['Clarity', 'Clear modules, clear permissions, clear job ownership.'],
  ['Accountability', 'Actions and handoffs leave a trail on the files that matter.'],
  ['Operational realism', 'Software follows how freight departments actually hand work off.'],
  ['Confidentiality', 'Tenant separation and portal boundaries respect business privacy.'],
  ['Continuous improvement', 'Priorities come from real forwarding workflows — not slideware.'],
] as [string, string][]

export function AboutPage() {
  return (
    <>
      <PageHero
        variant="editorial" fleet="air" art={<AboutArt tag="Air · Sea · NVOCC · Land · Customs" />}
        eyebrow="About"
        title={
          <>
            Software for forwarders who need <em>clarity and control.</em>
          </>
        }
        lede="Kingfisher Technologies builds a multi-tenant freight management platform for logistics companies that need operational clarity and financial control in one system."
        secondaryTo="/security"
        secondaryLabel="Security & Privacy"
        caps={['Clarity', 'Accountability', 'Operational realism']}
      />

      <section className="lf-mk-section lf-mk-flush">
        <MkWrap>
          <div className="lf-mk-stats">
            <div className="lf-mk-stat">
              <b>{PLATFORM_MODULES.length}</b>
              <span>Modules in the stack</span>
            </div>
            <div className="lf-mk-stat">
              <b>Multi-modal</b>
              <span>Air · Sea · NVOCC · Land · Customs</span>
            </div>
            <div className="lf-mk-stat">
              <b>Tenant model</b>
              <span>Company → Tenant → Users</span>
            </div>
          </div>
        </MkWrap>
      </section>

      <section className="lf-mk-section">
        <MkWrap>
          <div className="lf-x-duo">
            <article className="lf-x-manifesto lf-x-spot lf-x-reveal">
              <span className="lf-x-badge">
                <span className="lf-x-badge-dot" aria-hidden="true" />
                Vision
              </span>
              <h2 className="lf-mk-h2">
                Every quotation, file, document, and entry stays <em>connected.</em>
              </h2>
              <p className="lf-mk-sub">
                A logistics industry where every quotation, shipment file, document, and financial
                entry stays connected and accountable — so teams stop reconciling after the cargo has
                moved.
              </p>
              <span className="lf-x-manifesto-n" aria-hidden="true">
                01
              </span>
            </article>
            <article className="lf-x-manifesto lf-x-spot lf-x-reveal">
              <span className="lf-x-badge">
                <span className="lf-x-badge-dot" aria-hidden="true" />
                Mission
              </span>
              <h2 className="lf-mk-h2">
                Deliver a secure platform for how departments <em>collaborate.</em>
              </h2>
              <p className="lf-mk-sub">
                Deliver a secure, multi-tenant freight management platform that helps teams
                collaborate across sales, operations, documentation, customers, vendors, and finance.
              </p>
              <span className="lf-x-manifesto-n" aria-hidden="true">
                02
              </span>
            </article>
          </div>
        </MkWrap>
      </section>

      <IconCardGrid
        eyebrow="Values"
        title={
          <>
            What we <em>stand for</em>
          </>
        }
        items={VALUES.map(([title, body], i) => ({
          icon: [Icons.shield, Icons.lock, Icons.truck, Icons.doc, Icons.chart][i % 5],
          title,
          body,
        }))}
      />

      <FeatureSplit
        eyebrow="Product philosophy"
        title={
          <>
            Built for desks — not generic <em>project tools</em>
          </>
        }
        body={
          <>
            <p>
              A serious freight-operations surface: connected workflows, dual portals, and
              trustworthy security — software that follows how departments hand work off.
            </p>
          </>
        }
        secondaryTo="/platform"
        secondaryLabel="Explore platform"
        metrics="• Clarity · Accountability · Operational realism"
        panel={<JobDeskHud />}
      />

      <section className="lf-mk-section lf-x-statement">
        <MkWrap>
          <SectionHead
            eyebrow="Philosophy"
            title={
              <>
                Follow the handoff — not generic <em>project tools.</em>
              </>
            }
          />
          <p className="lf-mk-sub lf-x-statement-body lf-x-reveal">
            Software should follow how freight departments hand work off. Kingfisher connects
            quotations, multi-mode operations, customs and documentation, customer and vendor
            portals, and financial control — so forwarders run from one secure system instead of
            disconnected tools. Explore the{' '}
            <Link to="/platform">platform</Link>, <Link to="/features">features</Link>, and{' '}
            <Link to="/portals">portals</Link>.
          </p>
        </MkWrap>
      </section>

      <FeatureGrid
        eyebrow="How we work"
        title={
          <>
            How we <em>work</em>
          </>
        }
        features={[
          [
            'Operate, then optimise',
            'Earn the right to advise by understanding desk reality — cut-offs, agents, and messy exceptions.',
          ],
          [
            'Customer truth wins',
            'Forwarder feedback beats slideware. We ship for the operator.',
          ],
          [
            'Default to clarity',
            'Clear modules, clear permissions, clear job ownership.',
          ],
          [
            'Small teams, sharp mandates',
            'Own a workflow end-to-end instead of attending meetings about it.',
          ],
        ]}
      />

      <section className="lf-mk-section">
        <MkWrap>
          <SectionHead
            eyebrow="Timeline"
            title={
              <>
                Building in public <em>chapters</em>
              </>
            }
          />
          <div className="lf-mk-timeline lf-x-timeline-narrow">
            {TIMELINE.map((item) => (
              <article key={item.label}>
                <b>{item.label}</b>
                <div>
                  <h3 style={{ margin: 0, fontSize: 16 }}>{item.title}</h3>
                  <p className="lf-mk-sub" style={{ marginTop: 6 }}>
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </MkWrap>
      </section>

      <DemoCtaBand
        title={
          <>
            Talk to a freight <em>expert.</em>
          </>
        }
      />
    </>
  )
}
