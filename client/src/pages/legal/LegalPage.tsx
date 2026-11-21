import { Link, Navigate, useParams } from 'react-router-dom'
import { MkWrap, PageHero } from '../../components/marketing/Marketing'
import { LEGAL_BY_SLUG, LEGAL_DOCS, legalPath } from '../../content/legal'
import '../../components/marketing/marketing.css'

export function LegalPage() {
  const { slug = '' } = useParams()
  const doc = LEGAL_BY_SLUG[slug]
  if (!doc) return <Navigate to="/legal/privacy-policy" replace />

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>{doc.title}</>}
        lede={`${doc.updated}. These pages require company legal review before they are treated as final policy.`}
        primaryTo="/contact"
        primaryLabel="Contact us"
        secondaryTo="/security"
        secondaryLabel="Security & Privacy"
      />
      <section className="lf-mk-section lf-mk-flush">
        <MkWrap>
          <div className="lf-mk-pills" style={{ marginBottom: 28 }}>
            {LEGAL_DOCS.map((d) => (
              <Link
                key={d.slug}
                className={d.slug === slug ? 'lf-mk-pill on' : 'lf-mk-pill'}
                to={legalPath(d.slug)}
                style={{ textDecoration: 'none' }}
              >
                {d.title}
              </Link>
            ))}
          </div>
          {doc.sections.map((s) => (
            <article key={s.heading} style={{ marginBottom: 36 }}>
              <h2 className="lf-mk-h2" style={{ fontSize: 'clamp(22px,2.4vw,30px)', marginTop: 0 }}>
                {s.heading}
              </h2>
              {s.paragraphs.map((p) => (
                <p className="lf-mk-sub" key={p.slice(0, 48)}>
                  {p}
                </p>
              ))}
            </article>
          ))}
        </MkWrap>
      </section>
    </>
  )
}
