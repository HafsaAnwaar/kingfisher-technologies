export type Faq = [string, string]
export type Step = [string, string]

export type Solution = {
  slug: string
  name: string
  tagline: string
  outcome: string
  mockTitle: string
  mockSub: string
  stages: Step[]
  dayBeats: Step[]
  metrics: Step[]
  modules: string[]
  quote: string
  quoteBy: string
  faqs: Faq[]
}

export const SOLUTIONS: Solution[] = [
  {
    slug: 'freight-forwarders',
    name: 'Freight Forwarders',
    tagline:
      'Multi-modal forwarding on one ERP — quotations to invoice without stitching five tools.',
    outcome: 'Run air, sea, land and docs as one operating company.',
    mockTitle: 'Forwarder control tower',
    mockSub: 'Today · 86 open jobs · 12 awaiting docs',
    stages: [
      ['Sell & quote', 'CRM, parties and quotations that convert into real jobs.'],
      ['Operate every mode', 'Air, sea, NVOCC, land and courier with shared milestones.'],
      ['Document & settle', 'Docs, customs handoffs, costing and invoicing on the same file.'],
    ],
    dayBeats: [
      [
        'Morning sales desk',
        'Quotations convert into real multi-modal jobs with parties already attached.'
      ],
      [
        'Ops mid-shift',
        'Air, sea and land desks update the same file — CS sees status without asking.'
      ],
      [
        'Docs & customs',
        'Document packs and clearance handoffs stay on the job, not in a side tracker.'
      ],
      [
        'Finance close',
        'Costing and invoices settle against the shipment everyone already knows.'
      ]
    ],
    metrics: [
      [
        '1 ERP',
        'quotation to invoice'
      ],
      [
        '5+ modes',
        'on shared milestones'
      ],
      [
        '0 inbox ops',
        'as the system of record'
      ]
    ],
    modules: ['air-freight', 'sea-freight', 'documentation', 'tracking', 'finance-accounts', 'reports'],
    quote: 'We stopped running the company out of inboxes. The job file is the company.',
    quoteBy: 'Managing Director · Mid-market forwarder',
    faqs: [
      [
        'Is Kingfisher only for large forwarders?',
        'No. It fits growing forwarders who need multi-modal jobs, docs and finance without enterprise program theater.',
      ],
      [
        'Can we start with one mode?',
        'Yes. Switch on the modules you need; add ocean, air or land as you grow.',
      ],
      [
        'Does it replace our accounting package?',
        'Job costing and invoicing live in Kingfisher; GL strategy depends on your finance stack.',
      ],
      [
        'Multi-branch?',
        'Organization, users and permissions support branch networks under a tenant.',
      ],
      [
        'How long to go live?',
        'Most teams follow the homepage implementation plan — timeline depends on modules and data migration.',
      ],
      [
        'What about agents abroad?',
        'Parties, vendors and job sharing patterns support agent networks; access is permissioned.',
      ],
    ],
  },
  {
    slug: 'logistics-companies',
    name: 'Logistics Companies',
    tagline:
      'Multi-mode operations with warehouse adjacency, transport handoffs, and financial control on one platform.',
    outcome: 'Run forwarding-adjacent logistics without stitching WMS, trackers, and billing tools.',
    mockTitle: 'Logistics control board',
    mockSub: 'Multi-mode · warehouse-linked · finance open',
    stages: [
      ['Plan & quote', 'Commercial work that converts into executable multi-mode jobs.'],
      ['Move & store', 'Land, courier, and warehouse-linked jobs with shared milestones.'],
      ['Document & settle', 'Docs, costing, and invoices on the same operational file.'],
    ],
    dayBeats: [
      [
        'Morning planning',
        'Quotes and bookings land as jobs across modes your network actually runs.',
      ],
      [
        'Yard & transport',
        'Warehouse and land movements update the same shipment timeline.',
      ],
      [
        'Partner handoffs',
        'Vendors see assigned work in the portal without opening your books.',
      ],
      [
        'Finance close',
        'Job charges become invoices and ledger entries with AR/AP visibility.',
      ],
    ],
    metrics: [
      ['Multi-mode', 'one operating record'],
      ['WMS-adjacent', 'jobs on the file'],
      ['Portals', 'customers & vendors'],
    ],
    modules: ['warehouse', 'land-courier', 'tracking', 'documentation', 'finance-accounts', 'reports'],
    quote: 'We needed one place for movement, storage handoffs, and settlement — not three exports.',
    quoteBy: 'Operations Director · Regional logistics company',
    faqs: [
      [
        'Is this only for pure forwarders?',
        'No. Logistics companies that run multi-mode work with warehouse and transport adjacency are a primary fit.',
      ],
      [
        'Do you replace a full WMS?',
        'Warehouse-linked jobs and yard-style visibility sit in Kingfisher; deep WMS fit is discussed in demo.',
      ],
      [
        'Customer visibility?',
        'Customer portal and public track share progress without exposing commercial costs.',
      ],
      [
        'Vendor collaboration?',
        'Vendor portal covers assigned work, documents, and purchase invoice submit for review.',
      ],
      [
        'Finance included?',
        'Invoicing, ledger, AR/AP, and reports are part of the platform continuum.',
      ],
      [
        'Can we start with land and warehouse?',
        'Yes. Enable the modules you need and expand modes as desks come online.',
      ],
    ],
  },
  {
    slug: 'nvocc-operators',
    name: 'NVOCC Operators',
    tagline: 'Voyage-centric control for consolidators — space, HBLs and voyage P&L together.',
    outcome: 'Manage the voyage as the product, not a folder of bookings.',
    mockTitle: 'Voyage board',
    mockSub: '3 voyages open · 1 cut-off today',
    stages: [
      ['Plan the voyage', 'Vessel, cut-offs and capacity in one board.'],
      ['Fill & document', 'Bookings, load lists, HBLs and pre-alerts.'],
      ['Measure profit', 'Voyage profitability while you can still steer.'],
    ],
    dayBeats: [
      [
        'Plan the sailing',
        'Vessel, cut-offs and space sit on one voyage board.'
      ],
      [
        'Fill bookings',
        'Load list updates as agents and forwarders confirm space.'
      ],
      [
        'Issue HBLs',
        'Documentation packs against the voyage — not a separate folder.'
      ],
      [
        'Steer profit',
        'Voyage P&L updates while you can still change the plan.'
      ]
    ],
    metrics: [
      [
        '1 voyage board',
        'capacity and cut-offs'
      ],
      [
        'HBL + load list',
        'same voyage file'
      ],
      [
        'Live P&L',
        'before you sail'
      ]
    ],
    modules: ['nvocc', 'sea-freight', 'documentation', 'finance-accounts', 'reports'],
    quote: 'Cut-off day is calmer when load list and HBLs are not in three places.',
    quoteBy: 'NVOCC Ops Head · Ocean consolidator',
    faqs: [
      [
        'Do we need Sea Freight too?',
        'Many NVOCCs run NVOCC + Documentation + Finance; Sea Freight helps if you also forward.',
      ],
      [
        'HBL issuance?',
        'Documentation workflows cover HBL packs against voyage bookings.',
      ],
      [
        'Agent portals?',
        'Permissions and parties support agent relationships; portal scope is implementation-specific.',
      ],
      [
        'Demurrage visibility?',
        'Operational milestones and costing help surface expensive delays earlier.',
      ],
      ['Multi-trade lanes?', 'Voyages and masters configure the trades you operate.'],
      ['Reporting?', 'Reports roll voyage and job economics for leadership.'],
    ],
  },
  {
    slug: 'customs-brokers',
    name: 'Customs Brokers',
    tagline: 'Clearance status, document checklists and customer visibility without a private tracker.',
    outcome: 'Make clearance progress a shared operational fact.',
    mockTitle: 'Broker desk',
    mockSub: '18 active clearances · 3 under exam',
    stages: [
      ['Intake the file', 'Link clearance to parties and shipment context.'],
      ['Drive declarations', 'Track exams, holds and document requirements.'],
      ['Release & bill', 'Complete clearance and settle commercial work.'],
    ],
    dayBeats: [
      [
        'Intake',
        'Link clearance to parties and shipment context in one file.'
      ],
      [
        'Declare',
        'Track filings, exams and document requirements as they change.'
      ],
      [
        'Release',
        'Surface holds and release so importers stop calling for status.'
      ],
      [
        'Bill',
        'Invoice clearance work from the operational record.'
      ]
    ],
    metrics: [
      [
        'Shared holds',
        'customer-visible status'
      ],
      [
        '1 clearance file',
        'docs + exams'
      ],
      [
        'Clean billing',
        'from the same record'
      ]
    ],
    modules: ['customs', 'documentation', 'tracking', 'finance-accounts', 'reports'],
    quote: 'Importers stopped calling us for status we already knew — they can see the holds.',
    quoteBy: 'Principal · Customs brokerage',
    faqs: [
      [
        'Can brokers use Kingfisher without forwarding?',
        'Yes. The Customs Brokers solution centers clearance, docs and billing.',
      ],
      [
        'Filing integrations?',
        'Orchestration is in-product; local customs connectivity depends on region and integration.',
      ],
      [
        'Multi-client?',
        'Customers & Parties keep importer files separated under permissions.',
      ],
      [
        'Document packs?',
        'Documentation holds supporting files against each clearance job.',
      ],
      [
        'How do we bill clearance fees?',
        'Finance & Accounts invoices from the operational record.',
      ],
      [
        'Staff access?',
        'Administration & Access sets broker vs admin permissions.',
      ],
    ],
  },
  {
    slug: 'cfs-warehouse',
    name: 'CFS & Warehouse Operators',
    tagline: 'Receiving, handling and release tied to freight jobs — CFS floor and ops desk aligned.',
    outcome: 'Warehouse truth feeds the shipment timeline.',
    mockTitle: 'CFS floor',
    mockSub: 'Receiving bay · 6 jobs inbound today',
    stages: [
      ['Receive', 'Log cargo against the job reference.'],
      ['Handle', 'Track handling and storage activity.'],
      ['Release', 'Hand off to onward transport with a clean timeline.'],
    ],
    dayBeats: [
      [
        'Receive',
        'Log cargo against the job reference at the bay.'
      ],
      [
        'Handle',
        'Track handling and storage without a shadow spreadsheet.'
      ],
      [
        'Stage release',
        'Align CFS floor events with the shipment timeline.'
      ],
      [
        'Hand off',
        'Release to land/courier with a clean milestone trail.'
      ]
    ],
    metrics: [
      [
        'Floor = timeline',
        'receiving feeds jobs'
      ],
      [
        'Bay clarity',
        'occupancy at a glance'
      ],
      [
        'Clean release',
        'handoff to land'
      ]
    ],
    modules: ['warehouse', 'land-courier', 'tracking', 'documentation', 'finance-accounts'],
    quote: 'Forwarders who store with us finally see the same receiving events we see.',
    quoteBy: 'CFS Operations · Port-adjacent warehouse',
    faqs: [
      [
        'Is Kingfisher a WMS replacement?',
        'It covers freight-linked warehouse activity. Ultra-deep WMS features are scoped per implementation.',
      ],
      [
        'Can forwarders and CFS share a tenant model?',
        'Company/tenant structure supports how you commercially separate entities.',
      ],
      [
        'Storage billing?',
        'Costs and charges can flow into Finance from warehouse-linked jobs.',
      ],
      ['Land connectivity?', 'Land & Courier continues the move after release.'],
      [
        'Inventory accuracy?',
        'Job-linked receiving and handling reduce the ops vs floor mismatch.',
      ],
      ['Multiple locations?', 'Masters and organization settings configure warehouses.'],
    ],
  },
  {
    slug: 'importers-exporters',
    name: 'Importers & Exporters',
    tagline: 'Work with your forwarder on shared shipment truth — status, docs and commercial clarity.',
    outcome: 'Less chasing. More shipment certainty.',
    mockTitle: 'Shipper view',
    mockSub: '4 active shipments · 1 awaiting clearance',
    stages: [
      ['Book with clarity', 'Quotations and bookings with complete party data.'],
      ['Follow the move', 'Milestones and docs without inbox archaeology.'],
      ['Settle cleanly', 'Invoices tied to the shipments you recognize.'],
    ],
    dayBeats: [
      [
        'Book clearly',
        'Quotations and bookings with complete party data.'
      ],
      [
        'Follow the move',
        'Milestones and docs without inbox archaeology.'
      ],
      [
        'See holds',
        'Customs and ops status surface when your partner runs Kingfisher.'
      ],
      [
        'Settle',
        'Invoices match the shipments you recognize.'
      ]
    ],
    metrics: [
      [
        'Less chasing',
        'shared shipment truth'
      ],
      [
        'Docs on tap',
        'authorized packs'
      ],
      [
        'Clean invoices',
        'tied to shipments'
      ]
    ],
    modules: ['tracking', 'documentation', 'customs', 'finance-accounts', 'air-freight', 'sea-freight'],
    quote: 'We stopped maintaining our own shadow tracker next to the forwarder updates.',
    quoteBy: 'Logistics Manager · Regional importer',
    faqs: [
      [
        'Do importers log into Kingfisher?',
        'Depending on rollout, customers may receive status and documentation access; the ERP remains operator-led.',
      ],
      [
        'Can we see customs holds?',
        'When your forwarder/broker runs Customs Clearance on Kingfisher, holds can surface on the shared job story.',
      ],
      [
        'Multi-forwarder?',
        'Your commercial relationships stay yours; Kingfisher is the operator system of record.',
      ],
      [
        'Document downloads?',
        'Authorized packs come from Documentation on the job.',
      ],
      [
        'Invoice disputes?',
        'Job-linked invoicing reduces “which shipment is this?” fights.',
      ],
      [
        'Modes supported?',
        'Air, sea, land and courier — whatever your operator runs on Kingfisher.',
      ],
    ],
  },
  {
    slug: 'transporters',
    name: 'Transporters',
    tagline: 'Haulage jobs, vendor performance and costs connected to the forwarder’s shipment file.',
    outcome: 'Trucking instructions and costs stop living only in WhatsApp.',
    mockTitle: 'Haulage desk',
    mockSub: '14 active land jobs · 3 pickups today',
    stages: [
      ['Accept the move', 'Land jobs with route, parties and instructions.'],
      ['Execute & update', 'Milestones from pickup to delivery.'],
      ['Bill the work', 'Haulage costs and invoices tied to the job.'],
    ],
    dayBeats: [
      [
        'Accept the move',
        'Land jobs arrive with route, parties and instructions.'
      ],
      [
        'Execute',
        'Update pickup through delivery on the shared record.'
      ],
      [
        'Prove delivery',
        'POD and milestones stay visible to the forwarder.'
      ],
      [
        'Bill the haul',
        'Costs and invoices attach to the same job.'
      ]
    ],
    metrics: [
      [
        'Real land jobs',
        'not WhatsApp only'
      ],
      [
        'POD on file',
        'milestones shared'
      ],
      [
        'Cost tied',
        'to the haul'
      ]
    ],
    modules: ['land-courier', 'tracking', 'finance-accounts', 'reports', 'warehouse'],
    quote: 'Forwarders send cleaner instructions when the land job is a real record.',
    quoteBy: 'Fleet Ops · Regional transporter',
    faqs: [
      [
        'Are transporters tenants or vendors?',
        'Often vendors inside a forwarder tenant; transporter companies can also run Land & Courier as operators.',
      ],
      [
        'POD?',
        'Delivery milestones and documentation capture proof against the job.',
      ],
      ['Rate cards?', 'Commercial terms live with vendors and job costing.'],
      ['Multi-stop?', 'Job routing fields support the moves you configure.'],
      [
        'Visibility for the forwarder?',
        'Shared milestones keep the forwarder and transporter aligned.',
      ],
      [
        'Reports?',
        'Volume and cost reports help both sides review performance.',
      ],
    ],
  },
  {
    slug: 'courier-companies',
    name: 'Courier Companies',
    tagline: 'Consignments, delivery milestones and commercial close inside the same ERP discipline.',
    outcome: 'Courier volume without losing shipment-level control.',
    mockTitle: 'Courier ops',
    mockSub: '128 consignments · 96% on-time yesterday',
    stages: [
      ['Intake consignments', 'Create courier jobs with parties and service levels.'],
      ['Deliver with status', 'Milestones through out-for-delivery and POD.'],
      ['Close commercially', 'Costs and invoices still tied to each consignment job.'],
    ],
    dayBeats: [
      [
        'Intake',
        'Create courier jobs with parties and service levels at volume.'
      ],
      [
        'Deliver',
        'Milestones through out-for-delivery and POD.'
      ],
      [
        'Track exceptions',
        'Exceptions stay on the consignment — not a side chat.'
      ],
      [
        'Close commercially',
        'Costs and invoices still tied to each job.'
      ]
    ],
    metrics: [
      [
        'Volume + control',
        'per consignment'
      ],
      [
        '96%+ discipline',
        'on-time visibility'
      ],
      [
        'Same ERP',
        'ops and finance'
      ]
    ],
    modules: ['land-courier', 'tracking', 'finance-accounts', 'reports', 'documentation'],
    quote: 'High volume stopped meaning we will reconcile it somehow next week.',
    quoteBy: 'COO · Domestic courier',
    faqs: [
      [
        'Is this a consumer shipping app?',
        'No. It is an operating ERP for courier companies and forwarders running courier services.',
      ],
      [
        'Last-mile only?',
        'Courier jobs cover the consignments you operate end-to-end or as a partner network.',
      ],
      [
        'Bulk upload?',
        'Implementation can include intake patterns for volume desks.',
      ],
      [
        'Customer notifications?',
        'Status from Tracking is the foundation; channels vary by rollout.',
      ],
      [
        'COD / special services?',
        'Commercial fields and job types follow your configured services.',
      ],
      [
        'Branch networks?',
        'Organization and permissions support multi-station courier ops.',
      ],
    ],
  },
]

export const SOLUTION_BY_SLUG = Object.fromEntries(SOLUTIONS.map((s) => [s.slug, s])) as Record<
  string,
  Solution
>

export function solutionPath(slug: string) {
  return `/solutions/${slug}`
}
