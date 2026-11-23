import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Arrow, DemoCtaBand, MkWrap, PageHero, SectionHead } from '../../components/marketing/Marketing'
import { LiveOpsStage } from '../../components/marketing/stages/LiveOpsStage'
import { FeatureSplit, VoyageHud } from '../../components/marketing/LiveHud'
import '../../components/marketing/motion'
import { PLATFORM_MODULES, modulePath } from '../../content/platform-modules'
import '../../components/marketing/marketing.css'
import '../../components/marketing/live-hud.css'
import { PlatformHubArt } from '../../components/marketing/inner/HeroArt'

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
        variant="center" fleet="mix" art={<PlatformHubArt modules={PLATFORM_MODULES} />}
        eyebrow="Platform"
        title={
          <>
            Modules for the whole <em>forwarding stack.</em>
          </>
        }
        lede="Kingfisher is a multi-tenant freight management platform, quotations, multi-mode jobs, documents, portals, and ledgers, not a patchwork of tools."
        secondaryTo="/features"
        secondaryLabel="Browse features"
        caps={['Air', 'Ocean', 'NVOCC', 'Land', 'Customs', 'Finance']}
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
              and reports, with live stage previews as you browse.
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
          <SectionHead
            eyebrow="Operating continuum"
            title={
              <>
                CRM → Quote → Job → Docs → Finance → <em>Portals</em>
              </>
            }
          />
          <div className="lf-mk-steps lf-x-steps n-4">
            <span className="lf-x-steps-rail" aria-hidden="true" />
            {CONTINUUM.map((step) => (
              <div className="lf-mk-step" key={step.label}>
                <span className="lf-x-step-n">{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </MkWrap>
      </section>

      <section className="lf-mk-section">
        <MkWrap>
          <SectionHead
            eyebrow="How teams collaborate"
            title={
              <>
                Multi-company. Multi-user. <em>One job file.</em>
              </>
            }
            sub={
              <>
                Each company works in its own tenant. Tenant Admin manages users within that tenant.
                Staff roles (Sales, Ops, Finance, and others) see authorized modules. Customers and
                vendors use separate portals, see <Link to="/portals">portals</Link> and{' '}
                <Link to="/security">security</Link>.
              </>
            }
          />
          <div className="lf-mk-pills lf-x-pills-center lf-x-reveal">
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
          <div className="lf-x-center" style={{ marginTop: 0 }}>
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
                  <span className="lf-x-cardgo" aria-hidden="true">
                    <Arrow size={16} />
                  </span>
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
