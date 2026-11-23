import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BeforeAfter,
  DemoCtaBand,
  FaqList,
  MkWrap,
  PageHero,
  SectionHead,
} from '../../components/marketing/Marketing'
import { SwapFrame, TickText, useInViewPlay, usePlayTick } from '../../components/marketing/motion'
import { FeatureSplit, FinanceHud } from '../../components/marketing/LiveHud'
import { SecurityPacketStage } from '../../components/marketing/stages/ArtifactStages'
import '../../components/marketing/marketing.css'
import '../../components/marketing/motion/motion.css'
import '../../components/marketing/live-hud.css'

const LOGOS = [
  'Forwarder Co',
  'Ocean Line Desk',
  'Brokerage Hub',
  'CFS North',
  'Courier Net',
  'Trade House',
  'Gulf Agents',
  'Portside Logistics',
]

const STORIES = [
  {
    title: 'Multi-modal forwarder',
    body: 'Replaced five trackers with one job file across air and sea.',
    tag: 'mode',
  },
  {
    title: 'Ocean consolidator',
    body: 'Voyage load lists and HBL status finally share a board.',
    tag: 'mode',
  },
  {
    title: 'Customs brokerage',
    body: 'Importers see holds without calling the desk.',
    tag: 'outcome',
  },
  {
    title: 'CFS operator',
    body: 'Receiving events feed the forwarder’s shipment timeline.',
    tag: 'industry',
  },
  {
    title: 'Regional courier',
    body: 'Consignment volume with job-level costing discipline.',
    tag: 'industry',
  },
  {
    title: 'Importer network',
    body: 'Fewer shadow trackers — status comes from the operator system.',
    tag: 'outcome',
  },
] as const

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'mode', label: 'By mode' },
  { id: 'outcome', label: 'By outcome' },
  { id: 'industry', label: 'By industry' },
] as const

function StoryTicker() {
  const { ref, play } = useInViewPlay<HTMLDivElement>(0.2)
  const tick = usePlayTick(play, 3200)
  const story = STORIES[tick % STORIES.length]

  return (
    <div className="lf-mk-hcard" ref={ref} style={{ marginTop: 20 }}>
      <div className="lf-mk-mile-k">Operator spotlight</div>
      <SwapFrame swapKey={story.title} par={tick % 2 ? 'b' : 'a'}>
        <div style={{ marginTop: 8, fontSize: 18, fontFamily: "'Instrument Serif', Georgia, serif" }}>
          <TickText text={story.title} tick={tick} />
        </div>
        <p className="lf-mk-sub" style={{ marginTop: 8 }}>
          {story.body}
        </p>
      </SwapFrame>
    </div>
  )
}

export function CustomersPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]['id']>('all')
  const stories = useMemo(
    () => (filter === 'all' ? STORIES : STORIES.filter((s) => s.tag === filter)),
    [filter],
  )
  const logos = [...LOGOS, ...LOGOS]

  return (
    <>
      <PageHero
        eyebrow="Customers"
        title={
          <>
            Built for how freight desks <em>operate.</em>
          </>
        }
        lede="Illustrative operator outcomes across forwarders, NVOCC desks, brokers, and logistics teams — not invented logo walls. Request a demo for a live walkthrough."
        secondaryTo="/security"
        secondaryLabel="Review security"
        caps={['Forwarders', 'NVOCC desks', 'Brokers', 'Logistics teams']}
      />
      <section className="lf-mk-section lf-mk-flush">
        <MkWrap>
          <div className="lf-mk-stats">
            <div className="lf-mk-stat">
              <b>Multi-modal</b>
              <span>Air · Sea · Land · Courier</span>
            </div>
            <div className="lf-mk-stat">
              <b>1 job file</b>
              <span>quotation to invoice</span>
            </div>
            <div className="lf-mk-stat">
              <b>Tenant-ready</b>
              <span>companies &amp; branches</span>
            </div>
          </div>
          <div className="lf-mk-marq" aria-hidden="true">
            <div className="lf-mk-marq-track">
              {logos.map((name, i) => (
                <span key={`${name}-${i}`}>{name}</span>
              ))}
            </div>
          </div>
          <StoryTicker />
        </MkWrap>
      </section>

      <section className="lf-mk-section">
        <MkWrap>
          <SectionHead
            eyebrow="Stories"
            title={
              <>
                Operator scenarios and <em>outcomes.</em>
              </>
            }
          />
          <div className="lf-x-center">
          <div className="lf-mk-filters">
            {FILTERS.map((item) => (
              <button
                type="button"
                key={item.id}
                className={filter === item.id ? 'is-on' : undefined}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          </div>
          <div className="lf-mk-cards" style={{ marginTop: 28 }}>
            {stories.map((story) => (
              <article className="lf-mk-card" key={story.title} style={{ cursor: 'default' }}>
                <span className="cat">{FILTERS.find((f) => f.id === story.tag)?.label.replace('By ', '')}</span>
                <h3>{story.title}</h3>
                <p>{story.body}</p>
              </article>
            ))}
          </div>
        </MkWrap>
      </section>

      <FeatureSplit
        eyebrow="Finance close"
        title={
          <>
            From job charges to <em>posted invoices</em>
          </>
        }
        body={
          <>
            <p>
              Operator outcomes show up when costing, invoices, and receipts stay on the same
              continuum as the shipment — including online pay recorded via a payment provider.
            </p>
          </>
        }
        secondaryTo="/features/finance"
        secondaryLabel="Financial management"
        metrics="• AR / AP · Ledger · Job GP · No card vault claims"
        panel={<FinanceHud />}
        reverse
      />

      <BeforeAfter
        eyebrow="Before / after"
        title={
          <>
            What changes when the job is the system of <em>record.</em>
          </>
        }
        beforeTitle="Before"
        afterTitle="After"
        before={[
          'Status lives in chat',
          'Docs drift from the shipment',
          'Finance rebuilds P&L at month end',
        ]}
        after={[
          'Milestones on the job',
          'Documents attached once',
          'Costing follows the shipment',
        ]}
      />

      <section className="lf-mk-section">
        <MkWrap>
          <SectionHead
            eyebrow="Security"
            title={
              <>
                Tenant isolation and role-based <em>access.</em>
              </>
            }
            sub={
              <>
                Companies, tenants and permissions keep forwarder networks governed — SuperAdmin,
                Tenant Admin and staff roles stay separated. Full verified claims live on the{' '}
                <Link to="/security">Security &amp; Privacy</Link> page.
              </>
            }
          />
          <SecurityPacketStage />
          <div className="lf-mk-stats">
            <div className="lf-mk-stat">
              <b>RBAC</b>
              <span>Users · roles · permissions</span>
            </div>
            <div className="lf-mk-stat">
              <b>Tenants</b>
              <span>Isolated operating companies</span>
            </div>
            <div className="lf-mk-stat">
              <b>Audit</b>
              <span>Operational accountability</span>
            </div>
          </div>
        </MkWrap>
      </section>

      <FaqList
        title={
          <>
            Questions about Kingfisher <em>customers</em>
          </>
        }
        faqs={[
          [
            'Who uses Kingfisher?',
            'Freight forwarders, NVOCC operators, customs brokers, CFS/warehouse operators, transporters and courier companies — plus shippers working through those operators.',
          ],
          [
            'What results do teams aim for?',
            'One job file per shipment, fewer status chases, cleaner documentation, and finance that does not rebuild ops from scratch.',
          ],
          [
            'Can I speak to a reference?',
            'Reference conversations are arranged during evaluation after demos — ask via Contact.',
          ],
        ]}
      />
      <DemoCtaBand
        title={
          <>
            See how operators run on <em>Kingfisher.</em>
          </>
        }
      />
    </>
  )
}
