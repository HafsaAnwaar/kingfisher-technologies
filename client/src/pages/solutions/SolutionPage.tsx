import { Navigate, useParams } from 'react-router-dom'
import {
  accentName,
  DemoCtaBand,
  FaqList,
  PageHero,
  ProofQuote,
} from '../../components/marketing/Marketing'
import {
  CustomsHud,
  FeatureSplit,
  JobDeskHud,
  VoyageHud,
} from '../../components/marketing/LiveHud'
import { OutcomeStrip } from '../../components/marketing/stages/OutcomeStrip'
import { PersonaFlowSection } from '../../components/marketing/stages/PersonaFlowSection'
import { StackPreview } from '../../components/marketing/stages/StackPreview'
import '../../components/marketing/motion'
import { PLATFORM_MODULES } from '../../content/platform-modules'
import { SOLUTION_BY_SLUG } from '../../content/solutions'
import '../../components/marketing/live-hud.css'
import { SolutionArt } from '../../components/marketing/inner/HeroArt'
import { SOLUTIONS } from '../../content/solutions'
import type { Fleet } from '../../components/marketing/inner/HeroFx'

const SOLUTION_FLEET: Record<string, Fleet> = {
  'nvocc-operators': 'sea',
  'importers-exporters': 'sea',
  'cfs-warehouse': 'land',
  transporters: 'land',
  'courier-companies': 'land',
}

function hudForSolution(slug: string) {
  if (slug.includes('nvocc')) return <VoyageHud />
  if (slug.includes('customs')) return <CustomsHud />
  return <JobDeskHud />
}

export function SolutionPage() {
  const { slug = '' } = useParams()
  const solution = SOLUTION_BY_SLUG[slug]
  if (!solution) return <Navigate to="/solutions" replace />

  const stack = solution.modules
    .map((id) => PLATFORM_MODULES.find((m) => m.slug === id))
    .filter(Boolean) as typeof PLATFORM_MODULES
  const name = solution.name

  return (
    <>
      <PageHero
        variant="split" fleet={SOLUTION_FLEET[solution.slug] ?? 'mix'} flip={SOLUTIONS.findIndex((s) => s.slug === solution.slug) % 2 === 0} art={<SolutionArt title={solution.mockTitle} sub={solution.mockSub} beats={solution.dayBeats} />}
        eyebrow="Solutions"
        title={accentName(name)}
        lede={solution.tagline}
        sub={solution.outcome}
        secondaryTo="/solutions"
        secondaryLabel="All solutions"
        caps={solution.dayBeats.slice(0, 4).map((beat) => beat[0])}
      />

      <FeatureSplit
        eyebrow="Live desk"
        title={
          <>
            {accentName(name)}, operating <em>board</em>
          </>
        }
        body={
          <>
            <p>{solution.outcome}</p>
            <p>{solution.tagline}</p>
          </>
        }
        secondaryTo="/contact"
        secondaryLabel="See it live"
        metrics={solution.metrics.map((m) => m[0]).join(' · ')}
        panel={hudForSolution(solution.slug)}
      />

      <PersonaFlowSection
        eyebrow="A day on the desk"
        title={
          <>
            Built for how <em>{name}</em> actually operate.
          </>
        }
        sub="Auto-advancing day beats with a live module board for this persona, progress rail, swap, and pause on hover."
        beats={solution.dayBeats}
        stack={stack}
        mockTitle={solution.mockTitle}
        mockSub={solution.mockSub}
      />

      <OutcomeStrip
        title={
          <>
            What {name.toLowerCase()} <em>measure.</em>
          </>
        }
        metrics={solution.metrics}
      />

      <StackPreview
        eyebrow="Recommended modules"
        title={
          <>
            The stack for <em>{name.toLowerCase()}.</em>
          </>
        }
        modules={stack}
      />

      <ProofQuote
        metric={solution.metrics[0]?.[0] ?? '1 platform'}
        metricSub={solution.metrics[0]?.[1] ?? 'quotation to invoice for your operating model'}
        quote={solution.quote}
        quoteBy={solution.quoteBy}
      />
      <FaqList
        title={
          <>
            {accentName(name)}, frequently <em>asked</em>
          </>
        }
        faqs={solution.faqs}
      />
      <DemoCtaBand
        title={
          <>
            Kingfisher for <em>{name}.</em>
          </>
        }
        sub={solution.tagline}
      />
    </>
  )
}
