import { Link } from 'react-router-dom'
import { DemoCtaBand, MkWrap, PageHero } from '../../components/marketing/Marketing'
import { AccessHud, FeatureSplit } from '../../components/marketing/LiveHud'
import { PRODUCT_UPDATES, RESOURCE_GUIDES, RESOURCE_INSIGHTS } from '../../content/resources'
import '../../components/marketing/marketing.css'
import '../../components/marketing/live-hud.css'

export function ResourcesHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Guides, insights, and <em>answers.</em>
          </>
        }
        lede="Practical explanations of the operating continuum, portals, and security — without thin SEO filler."
        secondaryTo="/resources/faq"
        secondaryLabel="Read FAQ"
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
          <div className="lf-mk-eyebrow">Start here</div>
          <div className="lf-mk-cards" style={{ marginTop: 24 }}>
            <Link className="lf-mk-card" to="/resources/faq">
              <span className="cat">FAQ</span>
              <h3>Frequently asked questions</h3>
              <p>Product scope, portals, payments, tracking, and honest limits.</p>
            </Link>
            <Link className="lf-mk-card" to="/resources/guides">
              <span className="cat">Guides</span>
              <h3>Operational guides</h3>
              <p>Quote-to-invoice, portal boundaries, and security basics for buyers.</p>
            </Link>
            <Link className="lf-mk-card" to="/resources/insights">
              <span className="cat">Insights</span>
              <h3>Industry notes</h3>
              <p>Why an operating platform beats a tracker-only story.</p>
            </Link>
            <Link className="lf-mk-card" to="/resources/product-updates">
              <span className="cat">Updates</span>
              <h3>Product updates</h3>
              <p>What we are documenting and demonstrating now.</p>
            </Link>
            <Link className="lf-mk-card" to="/security">
              <span className="cat">Trust</span>
              <h3>Security &amp; Privacy</h3>
              <p>Verified protections only — no fake seals.</p>
            </Link>
            <Link className="lf-mk-card" to="/contact">
              <span className="cat">Help</span>
              <h3>Talk to us</h3>
              <p>Demo, sales, or support — tell us your modes and tools.</p>
            </Link>
          </div>
        </MkWrap>
      </section>

      <section className="lf-mk-section">
        <MkWrap>
          <div className="lf-mk-eyebrow">Featured guides</div>
          <h2 className="lf-mk-h2" style={{ marginTop: 14, fontSize: 'clamp(28px,3vw,40px)' }}>
            Built for <em>operators</em>
          </h2>
          <div className="lf-mk-feats" style={{ marginTop: 28 }}>
            {RESOURCE_GUIDES.map((g) => (
              <Link className="lf-mk-feat" to={`/resources/guides#${g.slug}`} key={g.slug} style={{ textDecoration: 'none' }}>
                <h3>{g.title}</h3>
                <p>{g.blurb}</p>
              </Link>
            ))}
          </div>
          <div className="lf-mk-feats" style={{ marginTop: 16 }}>
            {RESOURCE_INSIGHTS.map((g) => (
              <Link className="lf-mk-feat" to={`/resources/insights#${g.slug}`} key={g.slug} style={{ textDecoration: 'none' }}>
                <h3>{g.title}</h3>
                <p>{g.blurb}</p>
              </Link>
            ))}
          </div>
          <ul className="lf-mk-list" style={{ marginTop: 28 }}>
            {PRODUCT_UPDATES.map((u) => (
              <li key={u.title}>
                <strong>{u.date}</strong> — {u.title}: {u.blurb}
              </li>
            ))}
          </ul>
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
