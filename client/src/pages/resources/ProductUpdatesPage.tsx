import { DemoCtaBand, MkWrap, PageHero } from '../../components/marketing/Marketing'
import { PRODUCT_UPDATES } from '../../content/resources'
import '../../components/marketing/marketing.css'

export function ProductUpdatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Product updates"
        title={
          <>
            What we are documenting <em>now.</em>
          </>
        }
        lede="High-level updates for website and sales enablement — not a changelog of every API commit."
        secondaryTo="/resources"
        secondaryLabel="All resources"
        compact
      />
      <section className="lf-mk-section lf-mk-flush">
        <MkWrap>
          <div className="lf-mk-timeline lf-x-timeline-narrow">
            {PRODUCT_UPDATES.map((u) => (
              <article key={u.title}>
                <b>{u.date}</b>
                <div>
                  <h3 style={{ margin: 0, fontSize: 18 }}>{u.title}</h3>
                  <p className="lf-mk-sub" style={{ marginTop: 8 }}>
                    {u.blurb}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </MkWrap>
      </section>
      <DemoCtaBand title={<>Get the current <em>demo script.</em></>} />
    </>
  )
}
