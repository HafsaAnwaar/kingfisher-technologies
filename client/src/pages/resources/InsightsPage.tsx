import { DemoCtaBand, FeatureGrid, MkWrap, PageHero } from '../../components/marketing/Marketing'
import { RESOURCE_INSIGHTS } from '../../content/resources'
import '../../components/marketing/marketing.css'

const BODIES: Record<string, [string, string][]> = {
  'operating-platform-not-tracker': [
    ['Beyond status pages', 'Forwarders need quotations, multi-mode jobs, documents, portals, and ledgers on one record.'],
    ['One job file', 'Sales, ops, docs, and accounts stop reconciling three systems after the cargo moves.'],
    ['Honest scope', 'Track matters — but track alone is not an operating platform.'],
  ],
  'handoffs-that-hold': [
    ['Designed stages', 'Sales → Ops → Docs → Accounts is built into workflows, including customs and NVOCC paths.'],
    ['Shared object', 'The shipment and job file carry context so handoffs do not depend on inbox archaeology.'],
    ['Finance closure', 'Invoicing and ledger posting stay connected to the same commercial work.'],
  ],
  'honest-security-copy': [
    ['Verified only', 'Tenant isolation, separate sign-in, roles, and document privacy — no fake seals.'],
    ['Portal boundaries', 'Customers and vendors see what you grant; staff keep posting control.'],
    ['Payments clarity', 'Card checkout by a provider; Kingfisher records the business receipt.'],
  ],
}

export function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Notes for serious <em>buyers.</em>
          </>
        }
        lede="Short perspectives on operating platforms, departmental handoffs, and trustworthy security language."
        secondaryTo="/resources"
        secondaryLabel="All resources"
      />
      {RESOURCE_INSIGHTS.map((insight) => (
        <section className="lf-mk-section" id={insight.slug} key={insight.slug}>
          <MkWrap>
            <div className="lf-mk-eyebrow">Insight</div>
            <h2 className="lf-mk-h2" style={{ marginTop: 14, fontSize: 'clamp(28px,3vw,40px)' }}>
              {insight.title}
            </h2>
            <p className="lf-mk-sub">{insight.blurb}</p>
          </MkWrap>
          <FeatureGrid
            eyebrow="Takeaways"
            title={<>What matters <em>operationally</em></>}
            features={BODIES[insight.slug] ?? [[insight.title, insight.blurb]]}
          />
        </section>
      ))}
      <DemoCtaBand title={<>Discuss fit for your <em>desk.</em></>} />
    </>
  )
}
