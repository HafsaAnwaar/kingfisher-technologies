import { DemoCtaBand, MkWrap, PageHero, SectionHead } from '../../components/marketing/Marketing'
import { RESOURCE_INSIGHTS } from '../../content/resources'
import '../../components/marketing/marketing.css'
import { InsightArt } from '../../components/marketing/inner/HeroArt'

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
        variant="split" compact fleet="mix" art={<InsightArt title={RESOURCE_INSIGHTS[0].title} body={RESOURCE_INSIGHTS[0].blurb} />}
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
      {RESOURCE_INSIGHTS.map((insight, ii) => (
        <section className="lf-mk-section" id={insight.slug} key={insight.slug}>
          <MkWrap>
            <SectionHead
              eyebrow={`Insight ${String(ii + 1).padStart(2, '0')}`}
              title={insight.title}
              sub={insight.blurb}
            />
            <div className="lf-x-subhead lf-x-reveal">
              <span className="lf-x-subhead-k">Takeaways</span>
              <span className="lf-x-subhead-t">
                What matters <em>operationally</em>
              </span>
            </div>
            <div className="lf-mk-feats lf-x-feats n-3" style={{ marginTop: 20 }}>
              {(BODIES[insight.slug] ?? [[insight.title, insight.blurb]]).map(([heading, body], index) => (
                <div className="lf-mk-feat" key={heading}>
                  <span className="lf-x-feat-n">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{heading}</h3>
                  <p>{body}</p>
                  <span className="lf-x-feat-line" aria-hidden="true" />
                </div>
              ))}
            </div>
          </MkWrap>
        </section>
      ))}
      <DemoCtaBand title={<>Discuss fit for your <em>desk.</em></>} />
    </>
  )
}
