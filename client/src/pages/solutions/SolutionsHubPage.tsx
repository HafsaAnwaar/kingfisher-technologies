import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { DemoCtaBand, MkWrap, PageHero } from '../../components/marketing/Marketing'
import { CustomsHud, FeatureSplit } from '../../components/marketing/LiveHud'
import { LiveOpsStage } from '../../components/marketing/stages/LiveOpsStage'
import '../../components/marketing/motion'
import { PLATFORM_MODULES } from '../../content/platform-modules'
import { SOLUTIONS, solutionPath } from '../../content/solutions'
import '../../components/marketing/marketing.css'
import '../../components/marketing/live-hud.css'

export function SolutionsHubPage() {
  const [selected, setSelected] = useState(0)
  const current = SOLUTIONS[selected] ?? SOLUTIONS[0]
  const preview = useMemo(() => {
    if (!current) return null
    return (
      current.modules
        .map((id) => PLATFORM_MODULES.find((m) => m.slug === id))
        .find(Boolean) ?? null
    )
  }, [current])

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Built for how <em>you operate.</em>
          </>
        }
        lede="Forwarders, NVOCC operators, customs brokers, CFS, shippers, transporters and courier companies — each with a recommended Kingfisher stack."
      />
      <section className="lf-mk-section lf-mk-flush">
        <MkWrap>
          <div className="lf-mk-hub-layout">
            <div className="lf-mk-cards" style={{ marginTop: 0 }}>
              {SOLUTIONS.map((s, index) => (
                <Link
                  className={index === selected ? 'lf-mk-card is-sel' : 'lf-mk-card'}
                  to={solutionPath(s.slug)}
                  key={s.slug}
                  onMouseEnter={() => setSelected(index)}
                  onFocus={() => setSelected(index)}
                >
                  <span className="cat">Solution</span>
                  <h3>{s.name}</h3>
                  <p>{s.tagline}</p>
                  <p style={{ marginTop: 8, fontSize: 12, color: 'var(--lf-accent-text)' }}>
                    {s.dayBeats[0]?.[0]} → {s.dayBeats[s.dayBeats.length - 1]?.[0]}
                  </p>
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
                  swapKey={`${current?.slug}-${preview.slug}`}
                />
              </div>
            ) : null}
          </div>
        </MkWrap>
      </section>

      <FeatureSplit
        eyebrow="Customs & clearance"
        title={
          <>
            Stage machines for every <em>file</em>
          </>
        }
        body={
          <>
            <p>
              Operator solutions share one idea: Sales, Ops, Docs, and Accounts know their stage on
              the same record — whether you clear imports or run multi-modal forwarding.
            </p>
          </>
        }
        secondaryTo="/solutions/customs-brokers"
        secondaryLabel="Customs brokers"
        metrics="• Quotation → Filing → Duty → Release → Invoice"
        panel={<CustomsHud />}
        reverse
      />

      <DemoCtaBand
        title={
          <>
            Find the stack for your <em>desk.</em>
          </>
        }
      />
    </>
  )
}
