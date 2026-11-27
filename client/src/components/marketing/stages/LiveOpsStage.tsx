import { useState, type ReactNode, type RefObject } from 'react'
import { ProgressRail, SwapFrame, useInViewPlay } from '../motion'
import type { StageKind } from '../../../content/platform-modules'
import {
  AirBoardBody,
  ChecklistBody,
  CostLedgerBody,
  DocPackBody,
  KpiChartsBody,
  PodBoardBody,
  SeaBoardBody,
  TrackPortalBody,
  VoyageBoardBody,
  WarehouseFlowBody,
} from './ModuleStages'

type LiveOpsStageProps = {
  stageKind: StageKind
  title: string
  sub: string
  pills?: string[]
  milestones?: string[]
  tall?: boolean
  highlight?: string
  showRail?: boolean
  slug?: string
  flowIndex?: number
  step?: number
  swapKey?: string | number
  onPillSelect?: (index: number) => void
}

const AIR_SUBS = [
  'AE-24091 · DXB → LHR · Booking confirmed',
  'AE-24091 · DXB → LHR · In flight',
  'AE-24091 · DXB → LHR · Delivery / POD',
]

function StageShell({
  title,
  sub,
  pills,
  activePill = 0,
  onPillSelect,
  children,
  play,
  rootRef,
  onAdvance,
  durationSec = 7,
  tall,
  showRail = true,
}: {
  title: string
  sub: string
  pills?: string[]
  activePill?: number
  onPillSelect?: (index: number) => void
  children: ReactNode
  play: boolean
  rootRef: RefObject<HTMLDivElement | null>
  onAdvance?: () => void
  durationSec?: number
  tall?: boolean
  showRail?: boolean
}) {
  const [hover, setHover] = useState(false)
  const interactive = Boolean(onPillSelect)
  return (
    <div
      className={`lf-mk-stage-live${tall ? ' is-tall' : ''}${play ? ' lf-mk-inview' : ''}`}
      ref={rootRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="lf-mk-stage-chrome">
        <div className="lf-mk-stage-top">
          <b>{title}</b>
          <span>
            <i className="lf-mk-live" />
            Live
          </span>
        </div>
        <div className="lf-mk-stage-meta">{sub}</div>
        {pills?.length ? (
          <div className="lf-mk-pills" role={interactive ? 'tablist' : undefined}>
            {pills.map((pill, index) => {
              const on = index === activePill
              if (interactive) {
                return (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={on}
                    className={on ? 'lf-mk-pill on' : 'lf-mk-pill'}
                    key={pill}
                    onClick={() => onPillSelect?.(index)}
                  >
                    {pill}
                  </button>
                )
              }
              return (
                <span className={on ? 'lf-mk-pill on' : 'lf-mk-pill'} key={pill}>
                  {pill}
                </span>
              )
            })}
          </div>
        ) : null}
      </div>
      <div className="lf-mk-stage-body">{children}</div>
      {showRail && onAdvance ? (
        <ProgressRail active={play} paused={hover} durationSec={durationSec} onComplete={onAdvance} />
      ) : null}
    </div>
  )
}

function isSeaSlug(slug?: string, title = '', sub = '') {
  if (slug === 'sea-freight') return true
  return /sea|ocean|container|fcl|lcl|vessel/i.test(`${title} ${sub}`)
}

export function LiveOpsStage({
  stageKind,
  title,
  sub,
  pills,
  milestones,
  tall,
  showRail = true,
  slug,
  step = 0,
  highlight,
  onPillSelect,
}: LiveOpsStageProps) {
  const { ref, play } = useInViewPlay<HTMLDivElement>(0.15)
  const [cycle, setCycle] = useState(0)
  const air = stageKind === 'routeMap' && !isSeaSlug(slug, title, sub)
  const activePill = Math.min(Math.max(step, 0), Math.max((pills?.length ?? 1) - 1, 0))
  const stageSub = air ? AIR_SUBS[activePill] ?? sub : sub

  const body = (() => {
    switch (stageKind) {
      case 'routeMap':
        return isSeaSlug(slug, title, sub) ? (
          <SeaBoardBody play={play} mode={step % 2 === 0 ? 'fcl' : 'lcl'} />
        ) : (
          <AirBoardBody play={play} step={step} />
        )
      case 'voyageHud':
        return <VoyageBoardBody play={play} />
      case 'podRun':
        return <PodBoardBody play={play} />
      case 'liveTrack':
        return <TrackPortalBody play={play} />
      case 'clearance':
        return (
          <ChecklistBody
            play={play}
            items={
              milestones ?? ['Docs received', 'Declaration filed', 'Exam cleared', 'Duty paid', 'Released']
            }
          />
        )
      case 'docPack':
        return <DocPackBody play={play} />
      case 'yardGrid':
        return <WarehouseFlowBody play={play} />
      case 'costLedger':
        return <CostLedgerBody play={play} />
      case 'kpiCharts':
        return <KpiChartsBody play={play} />
      default:
        return null
    }
  })()

  return (
    <StageShell
      title={title}
      sub={stageSub}
      pills={pills}
      activePill={activePill}
      onPillSelect={onPillSelect}
      play={play}
      rootRef={ref}
      durationSec={8}
      tall={tall}
      showRail={showRail && !tall}
      onAdvance={() => setCycle((c) => c + 1)}
    >
      <SwapFrame swapKey={`${stageKind}-${slug ?? ''}-${cycle}-${step}-${highlight ?? ''}`} par={cycle % 2 ? 'b' : 'a'}>
        {body}
      </SwapFrame>
    </StageShell>
  )
}

export function LiveOpsThumb({ stageKind, title, slug }: { stageKind: StageKind; title: string; slug?: string }) {
  return (
    <LiveOpsStage
      stageKind={stageKind}
      title={title}
      sub="Live preview"
      pills={undefined}
      slug={slug}
    />
  )
}
