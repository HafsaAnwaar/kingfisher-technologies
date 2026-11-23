import { useMemo, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Arrow, DemoCtaBand, FaqList, MkWrap, PageHero, SectionHead } from '../../components/marketing/Marketing'
import { FeatureSplit, QuoteBoardHud } from '../../components/marketing/LiveHud'
import { SwapFrame, TickText } from '../../components/marketing/motion'
import { PLATFORM_MODULES } from '../../content/platform-modules'
import '../../components/marketing/marketing.css'
import '../../components/marketing/motion/motion.css'
import '../../components/marketing/live-hud.css'
import { PricingArt } from '../../components/marketing/inner/HeroArt'

const PLANS = ['Starter', 'Growth', 'Enterprise'] as const
const MODES = ['Air', 'Sea', 'NVOCC', 'Land', 'Customs'] as const

/** Tier highlights — taken from the comparison table below. */
const TIER_FACTS: Record<(typeof PLANS)[number], string[]> = {
  Starter: ['Core job modules · Up to 4', 'Modes · 1–2', 'Onboarding · Guided'],
  Growth: ['Core job modules · Up to 8', 'Modes · Multi-modal', 'Onboarding · Guided + training'],
  Enterprise: ['Core job modules · Full stack', 'Modes · Multi-modal + NVOCC', 'Onboarding · Dedicated'],
}

export function PricingPage() {
  const [plan, setPlan] = useState<(typeof PLANS)[number]>('Growth')
  const [annual, setAnnual] = useState(true)
  const [jobs, setJobs] = useState(400)
  const [modes, setModes] = useState<string[]>(['Air', 'Sea', 'Customs'])
  const [modules, setModules] = useState<string[]>(
    PLATFORM_MODULES.slice(0, 4).map((m) => m.slug),
  )

  const summary = useMemo(() => {
    const modeCount = modes.length
    const moduleCount = modules.length
    return { modeCount, moduleCount, jobs, plan, annual }
  }, [modes, modules, jobs, plan, annual])

  function toggleMode(mode: string) {
    setModes((current) =>
      current.includes(mode) ? current.filter((m) => m !== mode) : [...current, mode],
    )
  }

  function toggleModule(slug: string) {
    setModules((current) =>
      current.includes(slug) ? current.filter((m) => m !== slug) : [...current, slug],
    )
  }

  return (
    <>
      <PageHero
        variant="split" fleet="mix" art={<PricingArt modules={PLATFORM_MODULES.map((m) => m.name)} />}
        eyebrow="Pricing"
        title={
          <>
            Pay for the modules you <em>switch on</em>.
          </>
        }
        lede="Kingfisher is modular. Start with the modes you run today — add customs, warehouse or finance as you grow. Pricing scales with jobs per month, not truck telematics."
        caps={['Starter', 'Growth', 'Enterprise']}
      />

      <FeatureSplit
        eyebrow="Modular packaging"
        title={
          <>
            Switch on modes — keep one <em>quote desk</em>
          </>
        }
        body={
          <>
            <p>
              Plans scale with the modules and job volume you enable. Commercial work still lands on
              a ranked quotation board that converts into real jobs.
            </p>
          </>
        }
        secondaryTo="/features/quotations"
        secondaryLabel="See quotations"
        metrics="• Starter · Growth · Enterprise · Annual options"
        panel={<QuoteBoardHud />}
      />

      <section className="lf-mk-section">
        <MkWrap>
          <SectionHead
            eyebrow="Plans"
            title={
              <>
                Pick a tier. Switch on <em>modules.</em>
              </>
            }
          />
          <div className="lf-x-center">
            <div className="lf-mk-filters" role="group" aria-label="Billing period">
              <button
                type="button"
                className={!annual ? 'is-on' : undefined}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
              <button
                type="button"
                className={annual ? 'is-on' : undefined}
                onClick={() => setAnnual(true)}
              >
                Annual · −15%
              </button>
            </div>
          </div>
          <div className="lf-mk-plans lf-x-tiers">
            {PLANS.map((item, index) => (
              <button
                type="button"
                key={item}
                className={`lf-mk-plan-card lf-x-tier${plan === item ? ' is-on' : ''}`}
                onClick={() => setPlan(item)}
                aria-pressed={plan === item}
              >
                {item === 'Growth' && plan === item ? (
                  <span className="lf-mk-plan-halo" aria-hidden="true" />
                ) : null}
                <span className="lf-x-tier-inner">
                  <span className="lf-x-tier-top">
                    <span className="lf-x-tier-n">{String(index + 1).padStart(2, '0')}</span>
                    <span className="lf-x-tier-radio" aria-hidden="true" />
                  </span>
                  <span className="lf-x-tier-name">{item}</span>
                  <span className="lf-x-tier-facts">
                    {TIER_FACTS[item].map((fact) => (
                      <span key={fact}>{fact}</span>
                    ))}
                  </span>
                </span>
              </button>
            ))}
          </div>

          <div className="lf-mk-ba lf-x-pricing" style={{ marginTop: 20 }}>
            <article className="lf-x-config">
              <h3>Your monthly volume</h3>
              <p style={{ margin: '12px 0 0', fontSize: 13, color: 'var(--lf-text-2)' }}>
                Jobs / month · {jobs}
              </p>
              <input
                type="range"
                min={50}
                max={5000}
                value={jobs}
                onChange={(e) => setJobs(Number(e.target.value))}
                aria-label="Jobs per month"
                className="lf-x-range"
                style={{ '--p': `${((jobs - 50) / (5000 - 50)) * 100}%` } as CSSProperties}
              />
              <p style={{ margin: '16px 0 0', fontSize: 13, color: 'var(--lf-text-2)' }}>
                Modes in scope
              </p>
              <div className="lf-mk-pills" style={{ marginTop: 8 }}>
                {MODES.map((mode) => (
                  <button
                    type="button"
                    key={mode}
                    className={modes.includes(mode) ? 'lf-mk-pill on' : 'lf-mk-pill'}
                    onClick={() => toggleMode(mode)}
                    style={{ cursor: 'pointer', font: 'inherit' }}
                  >
                    {mode}
                  </button>
                ))}
              </div>
              <p style={{ margin: '16px 0 0', fontSize: 13, color: 'var(--lf-text-2)' }}>
                Modules
              </p>
              <div className="lf-mk-pills" style={{ marginTop: 8 }}>
                {PLATFORM_MODULES.slice(0, 6).map((m) => (
                  <button
                    type="button"
                    key={m.slug}
                    className={modules.includes(m.slug) ? 'lf-mk-pill on' : 'lf-mk-pill'}
                    onClick={() => toggleModule(m.slug)}
                    style={{ cursor: 'pointer', font: 'inherit' }}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
            </article>

            <article className="lf-mk-pricebox lf-x-quote" style={{ margin: 0 }}>
              <SwapFrame swapKey={`${summary.plan}-${summary.annual}-${summary.jobs}`} par={summary.jobs % 2 ? 'b' : 'a'}>
              <div className="lf-mk-eyebrow">
                Indicative {summary.plan} · {summary.annual ? 'annual' : 'monthly'}
              </div>
              <div className="big">
                <TickText text={`${summary.jobs.toLocaleString()} jobs`} tick={summary.jobs} />
              </div>
              <p className="lf-mk-sub">
                Scoped to {summary.modeCount} modes and {summary.moduleCount} modules
                {summary.annual ? ' with annual prepay' : ' on monthly billing'}. Commercial numbers
                finalize in scoping.
              </p>
              </SwapFrame>
              <ul className="lf-mk-list">
                <li>Platform modules · selected stack</li>
                <li>Jobs / month soft caps by plan</li>
                <li>Annual prepay discount pattern</li>
                <li>One-time onboarding scoped separately</li>
              </ul>
              <Link className="lf-btn lf-btn-primary lf-btn-lg lf-x-btn-accent" to="/contact" style={{ marginTop: 22 }}>
                Get this quote <Arrow />
              </Link>
            </article>
          </div>
        </MkWrap>
      </section>

      <section className="lf-mk-section">
        <MkWrap>
          <SectionHead
            eyebrow="Compare"
            title={
              <>
                Every capability, side by <em>side.</em>
              </>
            }
          />
          <div className="lf-vk-table-wrap lf-x-compare">
          <table className="lf-mk-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Starter</th>
                <th>Growth</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Core job modules</td>
                <td>Up to 4</td>
                <td>Up to 8</td>
                <td>Full stack</td>
              </tr>
              <tr>
                <td>Modes</td>
                <td>1–2</td>
                <td>Multi-modal</td>
                <td>Multi-modal + NVOCC</td>
              </tr>
              <tr>
                <td>Branches / users</td>
                <td>Standard</td>
                <td>Expanded</td>
                <td>Custom</td>
              </tr>
              <tr>
                <td>Finance &amp; Accounts</td>
                <td>Add-on</td>
                <td>Included option</td>
                <td>Included</td>
              </tr>
              <tr>
                <td>SSO / advanced admin</td>
                <td>—</td>
                <td>Optional</td>
                <td>Included</td>
              </tr>
              <tr>
                <td>Onboarding</td>
                <td>Guided</td>
                <td>Guided + training</td>
                <td>Dedicated</td>
              </tr>
            </tbody>
          </table>
          </div>
        </MkWrap>
      </section>

      <FaqList
        title={
          <>
            Pricing questions, answered <em>straight.</em>
          </>
        }
        faqs={[
          [
            'How is Kingfisher priced?',
            'By plan tier and the modules you switch on, scaled to monthly job volume and modes — not per GPS device or truck telematics.',
          ],
          [
            'Do you charge per shipment?',
            'Volume soft caps and job bands are part of plan design. Exact unit economics are confirmed in scoping.',
          ],
          [
            'Is there a free trial?',
            'Evaluations typically run through a guided demo and scoped pilot — contact solutions for the right path.',
          ],
          [
            'Can we add modules mid-year?',
            'Yes. Modular stacks are meant to grow with your operation.',
          ],
          [
            'On-premise?',
            'Deployment options (cloud / private) are discussed for Enterprise scopes.',
          ],
        ]}
      />
      <DemoCtaBand
        title={
          <>
            Talk to a solutions <em>engineer.</em>
          </>
        }
        sub="Volume pricing, multi-branch rollouts and module mixes — if your setup does not fit a tier, we will scope a plan that does."
      />
    </>
  )
}
