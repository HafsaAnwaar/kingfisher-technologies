import { Navigate, useParams } from 'react-router-dom'
import {
  accentName,
  BeforeAfter,
  DemoCtaBand,
  FaqList,
  FeatureGrid,
  PageHero,
  ProofQuote,
  RelatedLinks,
} from '../../components/marketing/Marketing'
import { ModuleFlowSection } from '../../components/marketing/stages/ModuleFlowSection'
import '../../components/marketing/motion'
import {
  PLATFORM_MODULE_BY_SLUG,
  PLATFORM_MODULES,
  modulePath,
  type StageKind,
} from '../../content/platform-modules'
import { ModuleArt } from '../../components/marketing/inner/HeroArt'
import { ProductShowcase } from '../../components/marketing/inner/ProductShowcase'
import type { Fleet } from '../../components/marketing/inner/HeroFx'

const MODULE_FLEET: Record<string, Fleet> = {
  'air-freight': 'air',
  'sea-freight': 'sea',
  nvocc: 'sea',
  'land-courier': 'land',
  warehouse: 'land',
  'general-trading': 'mix',
  tracking: 'air',
}

function layoutFor(kind: StageKind): 'spatial' | 'process' | 'floor' | 'money' {
  if (kind === 'costLedger' || kind === 'kpiCharts') return 'money'
  if (kind === 'yardGrid') return 'floor'
  if (kind === 'clearance' || kind === 'docPack') return 'process'
  return 'spatial'
}

export function ModulePage() {
  const { slug = '' } = useParams()
  const module = PLATFORM_MODULE_BY_SLUG[slug]
  if (!module) return <Navigate to="/platform" replace />

  const related = module.related
    .map((id) => PLATFORM_MODULES.find((m) => m.slug === id))
    .filter(Boolean)
    .map((m) => ({ to: modulePath(m!.slug), label: m!.name }))

  const layout = layoutFor(module.stageKind)
  const accent = layout === 'money' ? 'orange' : 'teal'
  const name = module.name
  const flowTitle =
    layout === 'money' ? (
      <>
        Numbers that follow the <em>job.</em>
      </>
    ) : layout === 'process' ? (
      <>
        A desk workflow, not a <em>folder.</em>
      </>
    ) : layout === 'floor' ? (
      <>
        Floor truth on the <em>shipment.</em>
      </>
    ) : (
      <>
        Live ops for {accentName(name)}.
      </>
    )

  return (
    <>
      <PageHero
        variant="split" fleet={MODULE_FLEET[module.slug] ?? 'mix'} flip={PLATFORM_MODULES.findIndex((m) => m.slug === module.slug) % 2 === 1} art={<ModuleArt slug={module.slug} title={module.stageTitle} sub={module.stageSub} pills={module.stagePills} />}
        eyebrow={`Platform · ${module.cat}`}
        title={accentName(name)}
        lede={module.tagline}
        sub={module.outcome}
        secondaryTo="/platform"
        secondaryLabel="All modules"
        caps={module.stagePills}
      />

      {module.slug === 'sea-freight' ? (
        <ProductShowcase
          tone="job"
          eyebrow="Inside the product"
          title={
            <>
              The job file your sea desk actually <em>works in.</em>
            </>
          }
          caption="A live FCL import job — JOB/FI/2026/00223 for Al Noor Trading LLC — with routing, the status pipeline, ops actions and sale-versus-cost costing on a single screen."
          imageSrc="/media/showcase/job-detail.jpg"
          imageAlt="Internal Kingfisher job screen for JOB/FI/2026/00223, an FCL import for Al Noor Trading LLC, showing routing fields, a status pipeline, action buttons and a costing grid."
          imageWidth={1024}
          imageHeight={522}
          windowTitle="JOB/FI/2026/00223 · FCL IMPORT · Al Noor Trading LLC"
          callouts={[
            {
              label: 'The whole job, one file',
              body: 'Shipper, POL AEAUH, POD AUABP, ETD/ETA, FOB incoterms, MBL and container sit in a single operational grid.',
            },
            {
              label: 'Status pipeline',
              body: 'Enquiry, Quotation, Verified, Approved, Shipment and Job show exactly how far the movement has come.',
            },
            {
              label: 'Actions on the job',
              body: 'Generate EDI, Track & Trace, Close job, Documents, Invoices, P&L, Milestones and Bills of lading stay one click away.',
            },
            {
              label: 'Costing, GP and vendor',
              body: 'The costing grid compares sale vs cost, surfaces GP and the vendor — Powered by KingFisher Tech Gold.',
            },
          ]}
        />
      ) : null}


      <ModuleFlowSection
        eyebrow={layout === 'money' ? 'Finance loop' : layout === 'process' ? 'Desk flow' : 'How it works'}
        title={flowTitle}
        sub={
          layout === 'money'
            ? 'Costing and KPIs update from the same operational file, no month-end rebuild.'
            : layout === 'process'
              ? `A desk sequence for ${name.toLowerCase()}, stamps, packs and clearances you can follow.`
              : layout === 'floor'
                ? 'Cargo moves zone by zone on the job, receive, putaway, pick, gate.'
                : `A live ${name.toLowerCase()} board, built for this desk, not a copy of the homepage map.`
        }
        steps={module.steps}
        stageKind={module.stageKind}
        stageTitle={module.stageTitle}
        stageSub={module.stageSub}
        stagePills={module.stagePills}
        accent={accent}
        slug={module.slug}
      />

      {layout === 'process' ? (
        <>
          <FeatureGrid
            eyebrow="What's on the desk"
            title={
              <>
                Built for {name.toLowerCase()} <em>work.</em>
              </>
            }
            features={module.features}
          />
          <BeforeAfter
            title={
              <>
                Two ways to run <em>{name.toLowerCase()}.</em>
              </>
            }
            beforeTitle="Without Kingfisher"
            afterTitle={`With ${name}`}
            before={module.before}
            after={module.after}
          />
        </>
      ) : layout === 'floor' ? (
        <>
          <FeatureGrid
            eyebrow="Warehouse ops"
            title={
              <>
                Receiving, handling and release stay on the <em>job.</em>
              </>
            }
            features={module.features}
          />
          <ProofQuote
            metric={module.metric}
            metricSub={module.metricSub}
            quote={module.quote}
            quoteBy={module.quoteBy}
          />
          <BeforeAfter
            title={
              <>
                When the floor and the desk share a <em>timeline.</em>
              </>
            }
            beforeTitle="Without Kingfisher"
            afterTitle={`With ${name}`}
            before={module.before}
            after={module.after}
          />
        </>
      ) : layout === 'money' ? (
        <>
          <BeforeAfter
            title={
              <>
                Stop rebuilding P&L from ops <em>export.</em>
              </>
            }
            beforeTitle="Without Kingfisher"
            afterTitle={`With ${name}`}
            before={module.before}
            after={module.after}
          />
          <FeatureGrid
            eyebrow="Inside finance"
            title={
              <>
                Charges, costing and insight on one <em>spine.</em>
              </>
            }
            features={module.features}
          />
          <ProofQuote
            metric={module.metric}
            metricSub={module.metricSub}
            quote={module.quote}
            quoteBy={module.quoteBy}
          />
        </>
      ) : (
        <>
          <BeforeAfter
            title={
              <>
                Two ways to run <em>{name.toLowerCase()}.</em>
              </>
            }
            beforeTitle="Without Kingfisher"
            afterTitle={`With ${name}`}
            before={module.before}
            after={module.after}
          />
          <FeatureGrid
            eyebrow="What's inside"
            title={
              <>
                Everything you need for <em>{name.toLowerCase()}.</em>
              </>
            }
            features={module.features}
          />
          <ProofQuote
            metric={module.metric}
            metricSub={module.metricSub}
            quote={module.quote}
            quoteBy={module.quoteBy}
          />
        </>
      )}

      {layout === 'process' ? (
        <ProofQuote
          metric={module.metric}
          metricSub={module.metricSub}
          quote={module.quote}
          quoteBy={module.quoteBy}
        />
      ) : null}

      <RelatedLinks
        eyebrow="Pairs perfectly with"
        title={
          <>
            One module is good. A stack is a <em>system.</em>
          </>
        }
        links={related}
      />
      <FaqList
        title={
          <>
            Questions about <em>{name}</em>
          </>
        }
        faqs={module.faqs}
      />
      <DemoCtaBand
        title={
          <>
            See {accentName(name)} on your <em>jobs.</em>
          </>
        }
        sub={`A walkthrough on freight-forwarding workflows, tailored to ${name.toLowerCase()}.`}
      />
    </>
  )
}
