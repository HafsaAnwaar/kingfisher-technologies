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
        compact
      />
      <section className="lf-mk-section lf-mk-flush">
        <MkWrap className="lf-x-legal">
          <nav className="lf-x-legal-nav lf-x-reveal" aria-label="Legal documents">
            <span className="lf-x-legal-nav-k">Legal</span>
            {LEGAL_DOCS.map((d) => (
              <Link key={d.slug} className={d.slug === slug ? 'on' : undefined} to={legalPath(d.slug)}>
                {d.title}
              </Link>
            ))}
            <div className="lf-x-legal-toc">
              {doc.sections.map((s, i) => (
                <a key={s.heading} href={`#legal-${i + 1}`}>
                  {s.heading}
                </a>
              ))}
            </div>
          </nav>
          <div className="lf-x-legal-doc lf-x-reveal">
            {doc.sections.map((s, i) => (
              <article key={s.heading} id={`legal-${i + 1}`}>
                <h2 className="lf-mk-h2" style={{ marginTop: 0 }}>
                  <small>{String(i + 1).padStart(2, '0')}</small>
                  {s.heading}
                </h2>
                {s.paragraphs.map((p) => (
                  <p className="lf-mk-sub" key={p.slice(0, 48)}>
                    {p}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </MkWrap>
      </section>
    </>
  )
}
