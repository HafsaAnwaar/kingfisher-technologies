import { Link, Navigate, useParams } from 'react-router-dom'
import {
  accentName,
  DemoCtaBand,
  FaqList,
  FeatureGrid,
  MkWrap,
  PageHero,
  RelatedLinks,
} from '../../components/marketing/Marketing'
import {
  CustomsHud,
  FeatureSplit,
  FinanceHud,
  JobDeskHud,
  PortalInboxHud,
  QuoteBoardHud,
} from '../../components/marketing/LiveHud'
import { DataTable } from '../../components/marketing/VisualKit'
import { FEATURE_BY_SLUG } from '../../content/features'
import { PLATFORM_MODULES, modulePath } from '../../content/platform-modules'
import '../../components/marketing/marketing.css'
import '../../components/marketing/visual-kit.css'
import '../../components/marketing/live-hud.css'
import { FeatureArt } from '../../components/marketing/inner/HeroArt'
import { FEATURES } from '../../content/features'
import type { Fleet } from '../../components/marketing/inner/HeroFx'

const FEATURE_FLEETS: Fleet[] = ['mix', 'air', 'sea']

function panelForFeature(slug: string) {
  if (slug === 'quotations') return <QuoteBoardHud />
  if (slug === 'finance' || slug === 'business-intelligence') return <FinanceHud />
  if (slug === 'customers' || slug === 'vendors') return <PortalInboxHud />
  if (slug === 'documents' || slug === 'shipments') return <CustomsHud />
  return <JobDeskHud />
}

export function FeaturePage() {
  const { slug = '' } = useParams()
  const feature = FEATURE_BY_SLUG[slug]
  if (!feature) return <Navigate to="/features" replace />

  const related = feature.relatedModules
    .map((id) => PLATFORM_MODULES.find((m) => m.slug === id))
    .filter(Boolean)
    .map((m) => ({ to: modulePath(m!.slug), label: m!.name }))

  return (
    <>
      <PageHero
        variant="editorial" fleet={FEATURE_FLEETS[FEATURES.findIndex((f) => f.slug === feature.slug) % 3]} art={<FeatureArt name={feature.name} who={feature.who} />}
        eyebrow="Features"
        title={accentName(feature.name)}
        lede={feature.tagline}
        sub={feature.purpose}
        secondaryTo="/features"
        secondaryLabel="All features"
      />

      <section className="lf-mk-section lf-mk-flush">
        <MkWrap className="lf-x-whostrip lf-x-reveal">
          <span className="lf-x-whostrip-k">Who uses it</span>
          <div className="lf-mk-pills">
            {feature.who.map((role, i) => (
              <span className={i === 0 ? 'lf-mk-pill on' : 'lf-mk-pill'} key={role}>
                {role}
              </span>
            ))}
          </div>
        </MkWrap>
      </section>

      <FeatureSplit
        eyebrow="In the product"
        title={
          <>
            {accentName(feature.name)} on the <em>desk</em>
          </>
        }
        body={
          <>
            <p>{feature.purpose}</p>
          </>
        }
        secondaryTo="/contact"
        secondaryLabel="See it live"
        metrics={`• ${feature.who.slice(0, 3).join(' · ')}`}
        panel={panelForFeature(feature.slug)}
      />

      <FeatureGrid
        eyebrow="Key functions"
        title={
          <>
            What teams <em>run</em> here
          </>
        }
        features={feature.functions}
      />

      <DataTable
        eyebrow="Function detail"
        title={
          <>
            Capability <em>breakdown</em>
          </>
        }
        columns={['Function', 'What it does']}
        rows={feature.functions.map(([h, b]) => [h, b])}
      />

      {related.length ? (
        <RelatedLinks
          eyebrow="Related modules"
          title={
            <>
              On the <em>platform</em>
            </>
          }
          links={related}
        />
      ) : null}

      <section className="lf-mk-section">
        <MkWrap>
          <p className="lf-mk-sub" style={{ margin: 0 }}>
            Looking for mode-specific depth?{' '}
            <Link to="/platform">Browse platform modules</Link> or{' '}
            <Link to="/solutions">operator solutions</Link>.
          </p>
        </MkWrap>
      </section>

      <FaqList
        title={
          <>
            {accentName(feature.name)} — <em>FAQ</em>
          </>
        }
        faqs={feature.faqs}
      />
      <DemoCtaBand
        title={
          <>
            Walk through <em>{feature.name}</em>
          </>
        }
      />
    </>
  )
}
