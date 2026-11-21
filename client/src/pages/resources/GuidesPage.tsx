import { DemoCtaBand, MkWrap, PageHero } from '../../components/marketing/Marketing'
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
      />
      {RESOURCE_GUIDES.map((g) => (
        <section className="lf-mk-section" id={g.slug} key={g.slug}>
          <MkWrap>
            <div className="lf-mk-eyebrow">Guide</div>
            <h2 className="lf-mk-h2" style={{ marginTop: 14, fontSize: 'clamp(28px,3vw,40px)' }}>
              {g.title}
            </h2>
            <p className="lf-mk-sub">{g.blurb}</p>
            <div className="lf-mk-timeline" style={{ marginTop: 32 }}>
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
