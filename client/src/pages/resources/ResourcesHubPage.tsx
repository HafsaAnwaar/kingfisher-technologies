import { Link } from 'react-router-dom'
import { Arrow, SectionHead, DemoCtaBand, MkWrap, PageHero } from '../../components/marketing/Marketing'
import { AccessHud, FeatureSplit } from '../../components/marketing/LiveHud'
import { PRODUCT_UPDATES, RESOURCE_GUIDES, RESOURCE_INSIGHTS } from '../../content/resources'
import '../../components/marketing/marketing.css'
import '../../components/marketing/live-hud.css'
import { ResourcesHubArt } from '../../components/marketing/inner/HeroArt'

export function ResourcesHubPage() {
  return (
    <>
      <PageHero
        variant="split" fleet="mix" art={<ResourcesHubArt items={[...RESOURCE_GUIDES.map((g) => ({ title: g.title, kind: 'Guide' })), ...RESOURCE_INSIGHTS.map((g) => ({ title: g.title, kind: 'Insight' }))].slice(0, 5)} />}
        eyebrow="Resources"
        title={
          <>
            Guides, insights, and <em>answers.</em>
          </>
        }
        lede="Practical explanations of the operating continuum, portals, and security — without thin SEO filler."
        secondaryTo="/resources/faq"
        secondaryLabel="Read FAQ"
        caps={['FAQ', 'Guides', 'Insights', 'Updates']}
      />

      <FeatureSplit
        eyebrow="Learn & trust"
        title={
          <>
            Guides that match the <em>product</em>
          </>
        }
        body={
          <>
            <p>
              Resources explain the continuum, portal boundaries, and verified security — the same
              model you will see in a demonstration.
            </p>
          </>
        }
        secondaryTo="/resources/guides"
        secondaryLabel="Read guides"
        metrics="• FAQ · Guides · Insights · Security"
        panel={<AccessHud />}
      />

      <section className="lf-mk-section lf-mk-flush">
        <MkWrap>
          <div className="lf-x-center" style={{ marginTop: 0 }}>
            <span className="lf-x-badge">
              <span className="lf-x-badge-dot" aria-hidden="true" />
              Start here
            </span>
          </div>
          <div className="lf-mk-cards" style={{ marginTop: 32 }}>
            <Link className="lf-mk-card" to="/resources/faq">
              <span className="cat">FAQ</span>
              <h3>Frequently asked questions</h3>
              <p>Product scope, portals, payments, tracking, and honest limits.</p>
              <span className="lf-x-cardgo" aria-hidden="true">
                <Arrow size={16} />
              </span>
            </Link>
            <Link className="lf-mk-card" to="/resources/guides">
              <span className="cat">Guides</span>
              <h3>Operational guides</h3>
              <p>Quote-to-invoice, portal boundaries, and security basics for buyers.</p>
              <span className="lf-x-cardgo" aria-hidden="true">
                <Arrow size={16} />
              </span>
            </Link>
            <Link className="lf-mk-card" to="/resources/insights">
              <span className="cat">Insights</span>
              <h3>Industry notes</h3>
              <p>Why an operating platform beats a tracker-only story.</p>
              <span className="lf-x-cardgo" aria-hidden="true">
                <Arrow size={16} />
              </span>
            </Link>
            <Link className="lf-mk-card" to="/resources/product-updates">
              <span className="cat">Updates</span>
              <h3>Product updates</h3>
              <p>What we are documenting and demonstrating now.</p>
              <span className="lf-x-cardgo" aria-hidden="true">
                <Arrow size={16} />
              </span>
            </Link>
            <Link className="lf-mk-card" to="/security">
              <span className="cat">Trust</span>
              <h3>Security &amp; Privacy</h3>
              <p>Verified protections only — no fake seals.</p>
              <span className="lf-x-cardgo" aria-hidden="true">
                <Arrow size={16} />
              </span>
            </Link>
            <Link className="lf-mk-card" to="/contact">
              <span className="cat">Help</span>
              <h3>Talk to us</h3>
              <p>Demo, sales, or support — tell us your modes and tools.</p>
              <span className="lf-x-cardgo" aria-hidden="true">
                <Arrow size={16} />
              </span>
            </Link>
          </div>
        </MkWrap>
      </section>

      <section className="lf-mk-section">
        <MkWrap>
          <SectionHead
            eyebrow="Featured guides"
            title={
              <>
                Built for <em>operators</em>
              </>
            }
          />
          <div className="lf-mk-feats lf-x-feats n-3">
            {RESOURCE_GUIDES.map((g) => (
              <Link className="lf-mk-feat" to={`/resources/guides#${g.slug}`} key={g.slug} style={{ textDecoration: 'none' }}>
                <span className="lf-x-feat-n">Guide</span>
                <h3>{g.title}</h3>
                <p>{g.blurb}</p>
                <span className="lf-x-feat-line" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <div className="lf-mk-feats lf-x-feats n-3" style={{ marginTop: 16 }}>
            {RESOURCE_INSIGHTS.map((g) => (
              <Link className="lf-mk-feat" to={`/resources/insights#${g.slug}`} key={g.slug} style={{ textDecoration: 'none' }}>
                <span className="lf-x-feat-n">Insight</span>
                <h3>{g.title}</h3>
                <p>{g.blurb}</p>
                <span className="lf-x-feat-line" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <div className="lf-mk-timeline lf-x-timeline-narrow">
            {PRODUCT_UPDATES.map((u) => (
              <article key={u.title}>
                <b>{u.date}</b>
                <div>
                  <h3 style={{ margin: 0 }}>{u.title}</h3>
                  <p className="lf-mk-sub" style={{ marginTop: 6 }}>
                    {u.blurb}
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
            Prefer a live <em>walkthrough?</em>
          </>
        }
      />
    </>
  )
}
