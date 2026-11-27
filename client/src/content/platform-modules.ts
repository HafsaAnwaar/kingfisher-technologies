export type Faq = [string, string]
export type Step = [string, string]
export type Feature = [string, string]

export type StageKind =
  | 'routeMap'
  | 'voyageHud'
  | 'podRun'
  | 'clearance'
  | 'docPack'
  | 'yardGrid'
  | 'liveTrack'
  | 'costLedger'
  | 'kpiCharts'

export type PlatformModule = {
  slug: string
  name: string
  footerLabel?: string
  cat: string
  tagline: string
  outcome: string
  stageKind: StageKind
  stageTitle: string
  stageSub: string
  stagePills: string[]
  before: string[]
  after: string[]
  steps: Step[]
  features: Feature[]
  metric: string
  metricSub: string
  quote: string
  quoteBy: string
  related: string[]
  faqs: Faq[]
}

export const PLATFORM_MODULES: PlatformModule[] = [
  {
    slug: 'air-freight',
    name: 'Air Freight',
    cat: 'Operations',
            tagline: 'Air export and import jobs, AWB workflows, bookings and milestones, one file per shipment.',
    outcome: 'Run every air job from booking to delivery without spreadsheet handoffs.',
    stageKind: 'routeMap',
    stageTitle: 'Air job board',
    stageSub: 'AE-24091 · DXB → LHR · Booking confirmed',
    stagePills: ['AWB live', 'Flight up', 'Delivery open'],
    before: [
      'AWB numbers live in email threads and WhatsApp groups',
      'Export and import teams keep separate trackers',
      'Customer asks for status, ops opens three tools to answer',
    ],
    after: [
      'One air job with milestones, docs and costing attached',
      'AWB / HAWB status visible to sales and CS in real time',
      'Customer gets a clean status link instead of a phone chase',
    ],
    steps: [
      [
        'Book the job',
        'Raise an air export or import job from quotation — parties, route, chargeable weight and space confirmation through cargo accepted.',
      ],
      [
        'Move the docs',
        'Issue HAWB/MAWB, send pre-alerts and keep paperwork on the same job through flight uplift and departure.',
      ],
      [
        'Close the loop',
        'Track arrival, customs/CAN, delivery and POD, then push job costing into finance.',
      ],
    ],
    features: [
      ['Export & import workflows', 'Separate flows for air export and import with mode-specific fields.'],
      ['AWB / HAWB tracking', 'Document status tied to the job, not a shared drive folder.'],
      ['Milestone timeline', 'Booked → Departed → Arrived → Delivered with ownership.'],
      ['Cost & revenue ready', 'Job costing feeds Finance without re-keying.'],
    ],
    metric: '1 job file',
    metricSub: 'instead of 4 spreadsheets per air shipment',
    quote: 'Our air desk stopped chasing AWB updates in chat. Everything sits on the job.',
    quoteBy: 'Operations Lead · Multi-modal forwarder',
    related: ['documentation', 'tracking', 'customs', 'finance-accounts'],
    faqs: [
      ['Does Kingfisher support both air export and import?', 'Yes. Air Freight covers export and import job workflows, bookings, AWB paperwork and milestones in one module.'],
      ['Can sales see air job status?', 'Yes. Status and milestones are shared across teams linked to the same job, sales and CS do not need a separate tracker.'],
      ['How do AWBs connect to documentation?', 'Documentation holds the paperwork; Air Freight owns the operational job. Both point at the same shipment record.'],
      ['Is chargeable weight handled?', 'Jobs capture chargeable weight and related commercial fields so costing and quotations stay aligned.'],
      ['Can we run multi-leg air moves?', 'Milestones and routing fields support the legs your team operates; complex networks still live under one job file.'],
      ['Does this replace a dedicated AWB portal?', 'Kingfisher is your operating system of record. Carrier portals remain for transmission; Kingfisher keeps the job, docs and money together.'],
    ],
  },
  {
    slug: 'sea-freight',
    name: 'Sea Freight',
    footerLabel: 'Sea FCL & LCL',
    cat: 'Operations',
            tagline: 'FCL and LCL import/export, containers, vessels, BL workflows and ocean milestones in one place.',
    outcome: 'Operate Sea FCL and LCL without splitting the shipment across tools.',
    stageKind: 'routeMap',
    stageTitle: 'Sea FCL job',
    stageSub: 'SE-11802 · CNSHA → PKKHI · Container gated in',
    stagePills: ['FCL live','BL linked','Cut-off set'],
    before: [
      'FCL and LCL live in different sheets',
      'Vessel ETAs updated by whoever last checked the line portal',
      'BL drafts float outside the job',
    ],
    after: [
      'FCL and LCL jobs with container and vessel context',
      'Milestones updated once, visible to every role',
      'BL / HBL work linked to documentation and costing',
    ],
    steps: [
      ['Open the ocean job', 'Raise FCL or LCL export/import from quotation or booking.'],
      ['Attach containers & vessel', 'Keep container numbers, vessel/voyage and cut-offs on the job.'],
      ['Document and deliver', 'Drive BL workflows, customs handoff and delivery milestones.'],
    ],
    features: [
      ['FCL & LCL modes', 'Mode-aware fields for full container and consolidation flows.'],
      ['Container & vessel context', 'Keep equipment and sailing data with the operational job.'],
      ['Import & export', 'Parallel workflows for inbound and outbound ocean freight.'],
      ['Handoff to customs', 'Clear path into Customs Clearance when declarations start.'],
    ],
    metric: 'FCL + LCL',
    metricSub: 'same platform, no second ocean tool',
    quote: 'We finally stopped maintaining one sheet for FCL and another for LCL.',
    quoteBy: 'Sea Ops Manager · Regional forwarder',
    related: ['nvocc', 'customs', 'documentation', 'tracking'],
    faqs: [
      ['Do you support both FCL and LCL?', 'Yes. Sea Freight covers FCL and LCL import and export with mode-specific operational fields.'],
      ['Where do BL drafts live?', 'Operational status sits on the Sea job; Documentation manages BL/HBL paperwork against that job.'],
      ['Can NVOCC voyages link here?', 'NVOCC manages voyages and HBLs; Sea Freight handles forwarder ocean jobs. Teams often run both.'],
      ['How are vessel ETAs tracked?', 'Vessel and voyage fields plus milestones keep ETA updates on the job your teams already open.'],
      ['Is container tracking included?', 'Container identifiers and movement milestones live on the job; pair with Shipment Tracking for customer-facing status.'],
      ['Does finance see ocean costs?', 'Yes. Job costing and vendor costs flow into Finance and Accounts from the same job.'],
    ],
  },
  {
    slug: 'nvocc',
    name: 'NVOCC',
    cat: 'Operations',
            tagline: 'Voyages, bookings, load lists, HBLs, pre-alerts, DOs and voyage profitability, built for NVOCC ops.',
    outcome: 'Run voyages as the unit of control, not a pile of disconnected bookings.',
    stageKind: 'voyageHud',
    stageTitle: 'Voyage control',
    stageSub: 'VY-440 · CMA CGM · Karachi cut-off Tue 18:00',
    stagePills: ['Voyage open','Space filling','HBL pack'],
    before: [
      'Load lists in Excel, HBLs in Word, P&L nowhere',
      'Pre-alerts sent late because nobody owns the voyage view',
      'Profitability calculated after the voyage sails',
    ],
    after: [
      'Voyage board with bookings and load list',
      'HBL / pre-alert / DO status on the voyage',
      'Voyage profitability visible while you can still act',
    ],
    steps: [
      ['Open the voyage', 'Create vessel/voyage with cut-offs and capacity.'],
      ['Build the load', 'Attach bookings, manage load lists and space.'],
      ['Document & settle', 'Drive HBLs, pre-alerts, DOs and voyage costing.'],
    ],
    features: [
      ['Voyage management', 'Treat the voyage as the operating spine for NVOCC work.'],
      ['Load lists & bookings', 'See what is confirmed, pending and cut-off risk.'],
      ['HBL & DO workflows', 'Documentation steps owned against voyage context.'],
      ['Voyage profitability', 'Revenue and cost rolled up before and after sailing.'],
    ],
    metric: 'Voyage P&L',
    metricSub: 'visible while bookings are still open',
    quote: 'Our NVOCC desk finally manages space and paperwork from one voyage board.',
    quoteBy: 'NVOCC Manager · Ocean consolidator',
    related: ['sea-freight', 'documentation', 'finance-accounts', 'reports'],
    faqs: [
      ['Is NVOCC separate from Sea Freight?', 'Yes. NVOCC is voyage-centric for consolidators; Sea Freight is forwarder job-centric. Many tenants use both.'],
      ['Can we track HBL issuance?', 'HBL and related docs are managed with Documentation against the voyage and bookings.'],
      ['Do load lists export?', 'Load lists live in-platform as the operational source; exports can follow your reporting needs.'],
      ['How is voyage profit calculated?', 'Revenue and costs attached to voyage bookings roll into voyage-level profitability views.'],
      ['Are pre-alerts supported?', 'Pre-alert status is part of the voyage documentation workflow so teams stop chasing email drafts.'],
      ['Who should use this module?', 'NVOCC operators and forwarders running consolidation voyages with HBL issuance.'],
    ],
  },
  {
    slug: 'land-courier',
    name: 'Land & Courier',
    cat: 'Operations',
            tagline: 'Trucking and courier jobs with the same job discipline as air and ocean, milestones, docs and costs.',
    outcome: 'Domestic trucking and courier no longer live outside the ERP.',
    stageKind: 'podRun',
    stageTitle: 'Land job',
    stageSub: 'LD-9021 · Karachi → Lahore · Out for delivery',
    stagePills: ['Pickup set','In transit','POD ready'],
    before: [
      'Land moves tracked only in a driver WhatsApp group',
      'Courier consignments never hit finance cleanly',
      'No shared milestone language with international jobs',
    ],
    after: [
      'Land and courier jobs with parties, route and status',
      'Same milestone and costing model as other modes',
      'CS can answer without calling the truck desk',
    ],
    steps: [
      ['Create the move', 'Raise a land or courier job from booking or domestic order.'],
      ['Dispatch & track', 'Update milestones from pickup through delivery.'],
      ['Cost the job', 'Capture vendor haulage and courier charges into finance.'],
    ],
    features: [
      ['Trucking jobs', 'Domestic and cross-border land moves as first-class jobs.'],
      ['Courier consignments', 'Keep small-parcel work inside the same operating system.'],
      ['Shared milestones', 'Pickup, in-transit, delivered, consistent with other modes.'],
      ['Vendor haulage costs', 'Link transporters and courier vendors to job costing.'],
    ],
    metric: 'One model',
    metricSub: 'for air, sea, land and courier jobs',
    quote: 'Domestic trucking finally shows up next to our ocean jobs, same discipline.',
    quoteBy: 'Branch Manager · Forwarder network',
    related: ['tracking', 'vendors', 'finance-accounts', 'warehouse'],
    faqs: [
      ['Is Land separate from Courier?', 'Both live under Land & Courier with fields suited to trucking vs consignments, sharing the job model.'],
      ['Can transporters be vendors?', 'Yes. Vendors manage carriers and haulage partners tied into job costs.'],
      ['Does this cover last-mile only?', 'It covers domestic land and courier jobs your forwarder or courier operation runs, not a consumer parcel marketplace.'],
      ['How does tracking work?', 'Use Shipment Tracking milestones and status views on the land/courier job.'],
      ['Can we mix modes on one shipment?', 'Related jobs and documentation keep multi-modal moves coherent across modules.'],
      ['Is POD captured?', 'Delivery milestones and documentation hold proof artifacts against the job.'],
    ],
  },
  {
    slug: 'customs',
    name: 'Customs Clearance',
    cat: 'Operations',
            tagline: 'Declarations, clearance status and customs requirements attached to the operational shipment.',
    outcome: 'Customs work stops living in a side spreadsheet nobody else trusts.',
    stageKind: 'clearance',
    stageTitle: 'Clearance desk',
    stageSub: 'CC-3310 · Import · Under examination',
    stagePills: ['Filing','Exam','Release'],
    before: [
      'Clearance status only in the broker’s private tracker',
      'Ops learns about holds when the customer calls',
      'Documents re-requested because versions diverge',
    ],
    after: [
      'Clearance workflow on the shipment job',
      'Holds and examination status visible to ops and CS',
      'Required docs checklist tied to Documentation',
    ],
    steps: [
      ['Open clearance', 'Start customs work linked to the import/export job.'],
      ['Drive the checklist', 'Track declarations, exams and document requirements.'],
      ['Release & hand off', 'Mark clearance complete and continue delivery milestones.'],
    ],
    features: [
      ['Clearance workflows', 'Import and export clearance steps on the shipment.'],
      ['Status visibility', 'Examination, hold and release visible beyond the customs desk.'],
      ['Doc requirements', 'Needed paperwork referenced into Documentation.'],
      ['Broker-ready', 'Works for in-house clearance teams and customs broker tenants.'],
    ],
    metric: 'Shared status',
    metricSub: 'ops + CS see holds without chasing the broker desk',
    quote: 'When a shipment went into exam, sales knew before the consignee called us.',
    quoteBy: 'Customs Manager · Brokerage + forwarding',
    related: ['documentation', 'sea-freight', 'air-freight', 'tracking'],
    faqs: [
      ['Is this a filing gateway?', 'Kingfisher orchestrates clearance work and status. Transmission to customs systems depends on your local integration setup.'],
      ['Can customs brokers use Kingfisher alone?', 'Yes. Customs Brokers is a first-class solution persona with clearance-centric modules.'],
      ['How do holds surface?', 'Clearance status and notes sit on the job so other roles see blockers without a separate chat.'],
      ['Does it work with air and sea?', 'Clearance links to the operational job regardless of mode.'],
      ['Where do supporting docs live?', 'Documentation holds the files; Customs Clearance tracks the clearance process against them.'],
      ['Can we report clearance cycle time?', 'Reports & Analytics can include operational timing once milestones are maintained.'],
    ],
  },
  {
    slug: 'documentation',
    name: 'Documentation',
    cat: 'Operations',
            tagline: 'Shipment paperwork, BL/AWB drafts, pre-alerts, invoices and operational docs on the job.',
    outcome: 'Every document has a job home. No more “final_v7_REAL”.',
    stageKind: 'docPack',
    stageTitle: 'Doc pack',
    stageSub: 'SE-11802 · Draft BL · Pre-alert queued',
    stagePills: ['SI draft','BL issued','Pack ready'],
    before: [
      'Docs scattered across email, desktop folders and WhatsApp',
      'Wrong draft sent to the line or the customer',
      'No checklist of what is still missing',
    ],
    after: [
      'Document checklist per job',
      'Draft → issued status for key instruments',
      'Pre-alerts and packs prepared from one place',
    ],
    steps: [
      ['Attach to the job', 'Open Documentation from the operational shipment.'],
      ['Work the checklist', 'Track drafts, approvals and issued docs.'],
      ['Share with care', 'Send the right version to carriers, agents and customers.'],
    ],
    features: [
      ['BL / AWB workflows', 'Ocean and air instruments tracked against the job.'],
      ['Pre-alerts', 'Prepare and mark pre-alert status without a parallel inbox.'],
      ['Checklist discipline', 'See what is missing before cut-off.'],
      ['Version clarity', 'Teams open the job, not a hunt for the latest file.'],
    ],
    metric: '0 orphan docs',
    metricSub: 'every pack linked to a shipment job',
    quote: 'We cut “which BL is final?” messages to nearly zero.',
    quoteBy: 'Documentation Lead · Ocean forwarder',
    related: ['air-freight', 'sea-freight', 'nvocc', 'customs'],
    faqs: [
      ['Is this a DMS like SharePoint?', 'It is operational documentation on the freight job, purpose-built for forwarding paperwork, not a general file share.'],
      ['Can we store customer invoices?', 'Commercial and operational docs attach to the job; Finance handles billing documents in the money modules.'],
      ['Who can edit drafts?', 'Access follows your Administration & Access permissions by role.'],
      ['Does it cover HBL and HAWB?', 'Yes, ocean HBL and air HAWB workflows sit with Documentation against NVOCC/air/sea jobs.'],
      ['How do pre-alerts work?', 'Pre-alert status is tracked on the job so ops knows what has been sent.'],
      ['Can CS download packs?', 'Authorized roles can access the job’s documentation without asking ops to forward email attachments.'],
    ],
  },
  {
    slug: 'warehouse',
    name: 'Warehouse',
    cat: 'Operations',
            tagline: 'Cargo handling, inventory movement and warehouse activity connected to freight jobs.',
    outcome: 'CFS and warehouse activity stays tied to the shipment, not a separate black box.',
    stageKind: 'yardGrid',
    stageTitle: 'Warehouse activity',
    stageSub: 'WH-778 · Cartons received · Putaway pending',
    stagePills: ['Receiving','In bay','Release'],
    before: [
      'Warehouse notes never make it back to the job file',
      'CFS inventory and forwarding ops disagree on counts',
      'Demurrage conversations start without a timeline',
    ],
    after: [
      'Warehouse activity logged against jobs',
      'Receiving, handling and release visible to ops',
      'Cleaner handoffs into delivery and costing',
    ],
    steps: [
      ['Receive against the job', 'Log inbound cargo with job reference.'],
      ['Handle & store', 'Track handling and inventory movement.'],
      ['Release for onward move', 'Hand off to land, courier or delivery milestones.'],
    ],
    features: [
      ['Job-linked receiving', 'Cargo events reference the freight job.'],
      ['Handling records', 'Operational warehouse activity without a second system of truth.'],
      ['CFS-ready', 'Fits CFS and warehouse operator workflows.'],
      ['Release visibility', 'Ops knows when cargo is ready to move.'],
    ],
    metric: 'One timeline',
    metricSub: 'from gate-in to onward dispatch on the job',
    quote: 'Our CFS floor and forwarding desk finally argue less about what was received.',
    quoteBy: 'Warehouse Supervisor · CFS operator',
    related: ['land-courier', 'tracking', 'sea-freight', 'finance-accounts'],
    faqs: [
      ['Is this a full WMS?', 'Warehouse covers freight-linked handling and movement. Deep slotting WMS features depend on your deployment scope.'],
      ['Can CFS operators use it?', 'Yes, CFS & Warehouse Operators is a solution persona built around this module.'],
      ['Does inventory sync to finance?', 'Handling and storage costs can feed job costing; detailed inventory valuation follows your finance setup.'],
      ['How does it relate to tracking?', 'Warehouse events feed the operational timeline customers and CS care about.'],
      ['Multi-warehouse?', 'Organization and masters configure locations your tenant operates.'],
      ['Barcode scanning?', 'Field capture patterns depend on implementation; the artifact assumes job-linked activity records.'],
    ],
  },
  {
    slug: 'general-trading',
    name: 'General Trading',
    footerLabel: 'Trading',
    cat: 'Operations',
    tagline:
      'Connect purchase and sales orders to freight jobs — quotations, shipments, documents and settlement on one continuum.',
    outcome: 'Trading and logistics stop living in separate spreadsheets.',
    stageKind: 'docPack',
    stageTitle: 'Trading desk',
    stageSub: 'PO-4418 · Freight booked · Sale open',
    stagePills: ['Purchase', 'Shipment', 'Settlement'],
    before: [
      'Purchase orders sit in email while freight jobs live in another system',
      'Sales invoices never reconcile cleanly to the inbound shipment',
      'Docs and settlement chase starts only after cargo has already moved',
    ],
    after: [
      'Buy-side and sell-side orders linked to the freight job',
      'Shipment, documents and commercial status on one timeline',
      'Settlement follows the same file from purchase through delivery',
    ],
    steps: [
      [
        'Open the trade',
        'Raise purchase and sales orders with suppliers and buyers, then book the linked import or export freight job.',
      ],
      [
        'Move cargo & docs',
        'Drive the shipment with documentation, pre-alerts and milestones against the same trading file.',
      ],
      [
        'Settle the deal',
        'Invoice, receipt and close costs so trading P&L stays tied to the freight job.',
      ],
    ],
    features: [
      ['Purchase & sales orders', 'Commercial orders that stay attached to the operational job.'],
      ['Freight handoff', 'Book air, sea or land moves from the trade without re-keying parties.'],
      ['Docs on the continuum', 'Invoices, packing lists and shipment packs share one file.'],
      ['Settlement visibility', 'Revenue, cost and receipt follow the trade through delivery.'],
    ],
    metric: '1 continuum',
    metricSub: 'from purchase order to settlement on the job',
    quote: 'Our traders finally see freight status without leaving the commercial file.',
    quoteBy: 'Trading Manager · Importer / exporter',
    related: ['documentation', 'sea-freight', 'air-freight', 'finance-accounts'],
    faqs: [
      [
        'Is General Trading only for pure traders?',
        'It fits importers, exporters and forwarders who also buy and sell cargo — anyone who needs orders and freight on one continuum.',
      ],
      [
        'Does it replace a full ERP inventory module?',
        'It connects commercial orders to freight jobs and settlement. Deep stock accounting follows your finance and warehouse setup.',
      ],
      [
        'Can we link one PO to multiple shipments?',
        'Related jobs and documentation keep multi-leg or split moves coherent against the trade.',
      ],
      [
        'How does settlement work?',
        'Invoices and costs attach to the trading file and feed Finance / Accounts the same way other jobs do.',
      ],
      [
        'Does this cover import and export?',
        'Yes. Buy-side inbound and sell-side outbound trades both connect to the freight modes you operate.',
      ],
      [
        'Who should use this module?',
        'Trading desks, importer/exporter tenants and forwarders running general trading alongside logistics.',
      ],
    ],
  },
  {
    slug: 'tracking',
    name: 'Shipment Tracking',
    cat: 'Operations',
            tagline: 'Milestones, movement and delivery progress, one status story for ops, CS and customers.',
    outcome: 'Stop guessing ETAs. Publish the milestone truth from the job.',
    stageKind: 'liveTrack',
    stageTitle: 'Live milestones',
    stageSub: 'AE-24091 · Departed DXB · Next: Arrive LHR',
    stagePills: ['Live ETA','Events','Share link'],
    before: [
      'CS calls ops; ops calls the agent; nobody has the same answer',
      'Customers get conflicting ETAs from sales and operations',
      'Exceptions discovered only when delivery fails',
    ],
    after: [
      'Milestone timeline on every job',
      'Shared status for CS and customers',
      'Exceptions visible early enough to act',
    ],
    steps: [
      ['Define the path', 'Milestones follow the mode job you already run.'],
      ['Update once', 'Ops updates the job, every role sees it.'],
      ['Share status', 'Give CS and customers a coherent progress story.'],
    ],
    features: [
      ['Milestone timeline', 'Booked through delivered with timestamps and ownership.'],
      ['Exception visibility', 'Delays and blockers surface on the job.'],
      ['CS-ready status', 'Customer service answers without a desk-to-desk chase.'],
      ['Mode agnostic', 'Works across air, sea, NVOCC, land and courier jobs.'],
    ],
    metric: '−60%',
    metricSub: 'fewer “where is my shipment?” internal pings (target outcome)',
    quote: 'Customer service stopped camping on the ops floor for status.',
    quoteBy: 'CS Lead · Freight forwarder',
    related: ['air-freight', 'sea-freight', 'land-courier', 'documentation'],
    faqs: [
      ['Is this GPS / SIM tracking?', 'Shipment Tracking is milestone and status tracking on the Kingfisher job, not a telematics product.'],
      ['Can customers see status?', 'Share coherent progress from the job; branded portals depend on your rollout.'],
      ['Who updates milestones?', 'Operations owns updates; permissions control who can edit.'],
      ['Does it work multi-modal?', 'Yes, milestones attach to whatever mode jobs you run.'],
      ['How does it help sales?', 'Sales sees the same operational truth without maintaining a shadow tracker.'],
      ['Alerts?', 'Exception and milestone visibility is the foundation; notification channels follow implementation.'],
    ],
  },
  {
    slug: 'finance-accounts',
    name: 'Finance & Accounts',
    cat: 'Business',
            tagline: 'Job costing, invoicing, receivables and payables linked directly to operational jobs.',
    outcome: 'Money follows the shipment, not a month-end archaeology project.',
    stageKind: 'costLedger',
    stageTitle: 'Job costing',
    stageSub: 'SE-11802 · Margin 18.4% · Invoice ready',
    stagePills: ['Charges','Costed','Invoiced'],
    before: [
      'Costs re-typed from ops sheets into accounting',
      'Invoices wait because nobody trusts the job P&L',
      'AP and AR argue about which shipment an invoice belongs to',
    ],
    after: [
      'Costs and revenue on the job',
      'Invoicing from operational truth',
      'AR/AP tied to shipment context',
    ],
    steps: [
      ['Cost the job', 'Capture vendor costs and revenue against the shipment.'],
      ['Invoice with confidence', 'Raise customer invoices from completed commercial data.'],
      ['Close receivables & payables', 'Track AR/AP with job linkage.'],
    ],
    features: [
      ['Job costing', 'See margin while the job is alive, not only after close.'],
      ['Invoicing', 'Bill from the operational record.'],
      ['Receivables & payables', 'AR/AP with shipment context.'],
      ['Finance + Accounts', 'Commercial control and accounting operations in one platform story.'],
    ],
    metric: 'Same-cycle',
    metricSub: 'costing → invoice without re-keying ops data',
    quote: 'Finance stopped asking ops to rebuild the shipment from emails at month end.',
    quoteBy: 'Finance Head · Mid-market forwarder',
    related: ['reports', 'air-freight', 'sea-freight', 'nvocc'],
    faqs: [
      ['Are Finance and Accounts one module?', 'They are paired as Finance & Accounts on the marketing site; in-product they cover costing, invoicing, AR/AP and accounting ops.'],
      ['Does this replace my GL?', 'Kingfisher owns job-level commercial truth. GL posting patterns depend on your accounting integration.'],
      ['Can we see per-job margin?', 'Yes, job costing is designed for shipment-level profitability.'],
      ['Multi-currency?', 'Commercial fields support the currencies your tenant configures in masters.'],
      ['Vendor bills?', 'Payables link vendor costs back to jobs and vendors.'],
      ['Who can approve invoices?', 'Administration & Access controls approval permissions by role.'],
    ],
  },
  {
    slug: 'reports',
    name: 'Reports & Analytics',
    cat: 'Business',
            tagline: 'Operational and financial data turned into management reports, without exporting five CSVs.',
    outcome: 'Leaders see volume, margin and exceptions from the system of record.',
    stageKind: 'kpiCharts',
    stageTitle: 'Ops & margin',
    stageSub: 'This month · 412 jobs · Margin 16.2%',
    stagePills: ['Ops KPIs','Margin','Trends'],
    before: [
      'Every manager builds their own Excel dashboard',
      'Numbers disagree between ops and finance',
      'Exception reports arrive too late to help',
    ],
    after: [
      'Shared reports from live job and finance data',
      'Volume and margin in one narrative',
      'Management views without shadow spreadsheets',
    ],
    steps: [
      ['Trust the jobs', 'Reports read from operational and financial modules.'],
      ['Slice what matters', 'By mode, branch, customer, margin and status.'],
      ['Act in-product', 'Jump back to the job, not a disconnected BI island.'],
    ],
    features: [
      ['Ops volume', 'Jobs by mode, status and branch.'],
      ['Profitability', 'Margin views fed by job costing.'],
      ['Exception lenses', 'See what is stuck before it becomes a customer issue.'],
      ['Management-ready', 'One story for leadership reviews.'],
    ],
    metric: 'One number',
    metricSub: 'ops and finance stop arguing about whose export is right',
    quote: 'Monday reviews finally use the same figures the desks work in all week.',
    quoteBy: 'CEO · Regional freight group',
    related: ['finance-accounts', 'tracking', 'air-freight', 'sea-freight'],
    faqs: [
      ['Is this a full BI suite?', 'Reports & Analytics focuses on freight ops and commercial performance from Kingfisher data.'],
      ['Can we export?', 'Exports support offline needs; the source of truth remains the platform.'],
      ['Branch-level views?', 'Yes, organization structure and job ownership feed branch reporting.'],
      ['Real-time?', 'Reports reflect the operational data your teams maintain on jobs.'],
      ['Custom KPIs?', 'Core freight KPIs ship in-product; deeper custom analytics can layer via implementation.'],
      ['Who gets access?', 'Permissions restrict sensitive margin and finance views.'],
    ],
  },
]


export const PLATFORM_MODULE_BY_SLUG = Object.fromEntries(PLATFORM_MODULES.map(m => [m.slug, m])) as Record<string, PlatformModule>

export function modulePath(slug: string) {
  return `/platform/${slug}`
}
