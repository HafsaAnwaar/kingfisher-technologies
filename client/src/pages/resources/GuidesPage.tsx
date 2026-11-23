import { DemoCtaBand, MkWrap, PageHero, SectionHead } from '../../components/marketing/Marketing'
import { RESOURCE_GUIDES } from '../../content/resources'
import '../../components/marketing/marketing.css'

export function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title={
          <>
            How the continuum <em>works.</em>
          </>
        }
        lede="Short educational guides for buyers and operators — quote to invoice, portal boundaries, and security basics."
        secondaryTo="/resources"
        secondaryLabel="All resources"
        caps={RESOURCE_GUIDES.map((g) => g.title)}
      />
      {RESOURCE_GUIDES.map((g, gi) => (
        <section className="lf-mk-section" id={g.slug} key={g.slug}>
          <MkWrap className="lf-x-sidegrid">
            <div className="lf-x-sidegrid-head">
              <SectionHead eyebrow={`Guide ${String(gi + 1).padStart(2, '0')}`} title={g.title} sub={g.blurb} align="left" />
            </div>
            <div className="lf-mk-timeline" style={{ marginTop: 0 }}>
              {g.body.map((step, i) => (
                <article key={step}>
                  <b>0{i + 1}</b>
                  <div>
                    <p className="lf-mk-sub" style={{ margin: 0 }}>
                      {step}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </MkWrap>
        </section>
      ))}
      <DemoCtaBand title={<>See it in a <em>demo.</em></>} />
    </>
  )
}
