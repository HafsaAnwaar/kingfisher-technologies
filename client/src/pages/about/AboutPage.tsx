import { Link } from 'react-router-dom'
import { DemoCtaBand, FeatureGrid, MkWrap, PageHero } from '../../components/marketing/Marketing'
import { useInViewPlay } from '../../components/marketing/motion'
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
  const { ref, inView } = useInViewPlay<HTMLElement>(0.2)

  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Software for forwarders who need <em>clarity and control.</em>
          </>
        }
        lede="Kingfisher Technologies builds a multi-tenant freight management platform for logistics companies that need operational clarity and financial control in one system."
        secondaryTo="/security"
        secondaryLabel="Security & Privacy"
      />

      <section className="lf-mk-section" style={{ borderTop: 0, paddingTop: 0 }}>
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
          <div className="lf-mk-eyebrow">Vision</div>
          <h2 className="lf-mk-h2">
            Every quotation, file, document, and entry stays <em>connected.</em>
          </h2>
          <p className="lf-mk-sub">
            A logistics industry where every quotation, shipment file, document, and financial entry
            stays connected and accountable — so teams stop reconciling after the cargo has moved.
          </p>
        </MkWrap>
      </section>

      <section className="lf-mk-section">
        <MkWrap>
          <div className="lf-mk-eyebrow">Mission</div>
          <h2 className="lf-mk-h2">
            Deliver a secure platform for how departments <em>collaborate.</em>
          </h2>
          <p className="lf-mk-sub">
            Deliver a secure, multi-tenant freight management platform that helps teams collaborate
            across sales, operations, documentation, customers, vendors, and finance.
          </p>
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

      <section className="lf-mk-section">
        <MkWrap>
          <div className="lf-mk-eyebrow">Philosophy</div>
          <h2 className="lf-mk-h2">
            Follow the handoff — not generic <em>project tools.</em>
          </h2>
          <p className="lf-mk-sub">
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

      <section className={inView ? 'lf-mk-section lf-mk-inview' : 'lf-mk-section'} ref={ref}>
        <MkWrap>
          <div className="lf-mk-eyebrow">Timeline</div>
          <h2 className="lf-mk-h2">
            Building in public <em>chapters</em>
          </h2>
          <div className="lf-mk-timeline">
            {TIMELINE.map((item, i) => (
              <article className={`lf-mk-rise lf-mk-rise-d${i + 1}`} key={item.label}>
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
