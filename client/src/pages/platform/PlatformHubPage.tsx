import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { DemoCtaBand, MkWrap, PageHero } from '../../components/marketing/Marketing'
import { LiveOpsStage } from '../../components/marketing/stages/LiveOpsStage'
import { FeatureSplit, VoyageHud } from '../../components/marketing/LiveHud'
import '../../components/marketing/motion'
import { PLATFORM_MODULES, modulePath } from '../../content/platform-modules'
import '../../components/marketing/marketing.css'
import '../../components/marketing/live-hud.css'

const FILTERS = ['All', 'Operations', 'Business'] as const

const CONTINUUM = [
  { label: '01', title: 'Enquiry & quote', body: 'CRM and quotations that customers can accept, reject, or negotiate.' },
  { label: '02', title: 'Booking & job', body: 'Commercial intent becomes executable multi-mode work with milestones.' },
  { label: '03', title: 'Docs & customs', body: 'Document packs and clearance stages stay on the operational file.' },
  { label: '04', title: 'Finance & portals', body: 'Invoice into the ledger; customers and vendors get controlled access.' },
]

export function PlatformHubPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All')
  const [selected, setSelected] = useState(0)
  const modules = useMemo(
    () =>
      filter === 'All' ? PLATFORM_MODULES : PLATFORM_MODULES.filter((m) => m.cat === filter),
    [filter],
  )
  const preview = modules[Math.min(selected, modules.length - 1)] ?? modules[0]

  return (
    <>
      <PageHero
        eyebrow="Platform"
        title={
          <>
            Modules for the whole <em>forwarding stack.</em>
          </>
        }
        lede="Kingfisher is a multi-tenant freight management platform — quotations, multi-mode jobs, documents, portals, and ledgers — not a patchwork of tools."
        secondaryTo="/features"
        secondaryLabel="Browse features"
      />

      <FeatureSplit
        eyebrow="NVOCC & modes"
        title={
          <>
            Voyage boards inside the <em>stack</em>
          </>
        }
        body={
          <>
            <p>
              Platform modules cover air, ocean, NVOCC, land, customs, warehouse, tracking, finance,
              and reports — with live stage previews as you browse.
            </p>
            <p>Each company works in its own tenant; desks share one job file across the continuum.</p>
          </>
        }
        secondaryTo="/features"
        secondaryLabel="Browse features"
        metrics="• Voyages · Load lists · HBL · Voyage P&L"
        panel={<VoyageHud />}
      />

      <section className="lf-mk-section">
        <MkWrap>
          <div className="lf-mk-eyebrow">Operating continuum</div>
          <h2 className="lf-mk-h2" style={{ marginTop: 14, fontSize: 'clamp(28px,3vw,40px)' }}>
            CRM → Quote → Job → Docs → Finance → <em>Portals</em>
          </h2>
          <div className="lf-mk-timeline">
            {CONTINUUM.map((step) => (
              <article key={step.label}>
                <b>{step.label}</b>
                <div>
                  <h3 style={{ margin: 0, fontSize: 16 }}>{step.title}</h3>
                  <p className="lf-mk-sub" style={{ marginTop: 6 }}>
                    {step.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </MkWrap>
      </section>

      <section className="lf-mk-section">
        <MkWrap>
          <div className="lf-mk-eyebrow">How teams collaborate</div>
          <h2 className="lf-mk-h2" style={{ marginTop: 14, fontSize: 'clamp(28px,3vw,40px)' }}>
            Multi-company. Multi-user. <em>One job file.</em>
          </h2>
          <p className="lf-mk-sub">
            Each company works in its own tenant. Tenant Admin manages users within that tenant.
            Staff roles (Sales, Ops, Finance, and others) see authorized modules. Customers and
            vendors use separate portals — see <Link to="/portals">portals</Link> and{' '}
            <Link to="/security">security</Link>.
          </p>
          <div className="lf-mk-pills" style={{ marginTop: 18 }}>
            <span className="lf-mk-pill on">Air</span>
            <span className="lf-mk-pill on">Ocean</span>
            <span className="lf-mk-pill on">Inland</span>
            <span className="lf-mk-pill on">NVOCC</span>
            <span className="lf-mk-pill on">Customs</span>
            <span className="lf-mk-pill on">Warehouse</span>
          </div>
        </MkWrap>
      </section>

      <section className="lf-mk-section lf-mk-flush">
        <MkWrap>
          <div className="lf-mk-filters" role="tablist" aria-label="Filter modules">
            {FILTERS.map((item) => (
              <button
                type="button"
                key={item}
                className={filter === item ? 'is-on' : undefined}
                onClick={() => {
                  setFilter(item)
                  setSelected(0)
                }}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="lf-mk-hub-layout">
            <div className="lf-mk-cards" style={{ marginTop: 0 }}>
              {modules.map((m, index) => (
                <Link
                  className={index === selected ? 'lf-mk-card is-sel' : 'lf-mk-card'}
                  to={modulePath(m.slug)}
                  key={m.slug}
                  onMouseEnter={() => setSelected(index)}
                  onFocus={() => setSelected(index)}
                >
                  <span className="cat">{m.cat}</span>
                  <h3>{m.name}</h3>
                  <p>{m.tagline}</p>
                </Link>
              ))}
            </div>
            {preview ? (
              <div className="lf-mk-preview-panel">
                <LiveOpsStage
                  stageKind={preview.stageKind}
                  title={preview.stageTitle}
                  sub={preview.stageSub}
                  pills={preview.stagePills}
                  tall
                  showRail={false}
                  slug={preview.slug}
                  swapKey={preview.slug}
                />
              </div>
            ) : null}
          </div>
        </MkWrap>
      </section>
      <DemoCtaBand
        title={
          <>
            See the modules on your <em>jobs.</em>
          </>
        }
      />
    </>
  )
}
