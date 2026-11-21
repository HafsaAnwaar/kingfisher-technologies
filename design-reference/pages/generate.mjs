/**
 * Generates Kingfisher full-nav design artifacts (.dc.html).
 * Run: node design-reference/pages/generate.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
mkdirSync(__dirname, { recursive: true })

const ACCENT = '#FF751F'

const MODULES = [
  {
    slug: 'air-freight',
    name: 'Air Freight',
    cat: 'Operations',
    file: 'platform-air-freight.dc.html',
    href: 'platform-air-freight.dc.html',
    tagline: 'Air export and import jobs, AWB workflows, bookings and milestones — one file per shipment.',
    outcome: 'Run every air job from booking to delivery without spreadsheet handoffs.',
    stageTitle: 'Air job board',
    stageSub: 'AE-24091 · DXB → LHR · AWB issued',
    before: [
      'AWB numbers live in email threads and WhatsApp groups',
      'Export and import teams keep separate trackers',
      'Customer asks for status — ops opens three tools to answer',
    ],
    after: [
      'One air job with milestones, docs and costing attached',
      'AWB / HAWB status visible to sales and CS in real time',
      'Customer gets a clean status link instead of a phone chase',
    ],
    steps: [
      ['Book the job', 'Convert a quotation into an air export or import job with parties, route and chargeable weight.'],
      ['Move the docs', 'Track AWB, HAWB, invoices and pre-alerts against the same job file.'],
      ['Close the loop', 'Update milestones through delivery and push costing into finance.'],
    ],
    features: [
      ['Export & import workflows', 'Separate flows for air export and import with mode-specific fields.'],
      ['AWB / HAWB tracking', 'Document status tied to the job — not a shared drive folder.'],
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
      ['Can sales see air job status?', 'Yes. Status and milestones are shared across teams linked to the same job — sales and CS do not need a separate tracker.'],
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
    file: 'platform-sea-freight.dc.html',
    href: 'platform-sea-freight.dc.html',
    tagline: 'FCL and LCL import/export — containers, vessels, BL workflows and ocean milestones in one place.',
    outcome: 'Operate Sea FCL and LCL without splitting the shipment across tools.',
    stageTitle: 'Sea FCL job',
    stageSub: 'SE-11802 · CNSHA → PKKHI · Container gated in',
    before: [
      'FCL and LCL live in different sheets',
      'Vessel ETAs updated by whoever last checked the line portal',
      'BL drafts float outside the job',
    ],
    after: [
      'FCL and LCL jobs with container and vessel context',
      'Milestones updated once — visible to every role',
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
    metricSub: 'same platform — no second ocean tool',
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
    file: 'platform-nvocc.dc.html',
    href: 'platform-nvocc.dc.html',
    tagline: 'Voyages, bookings, load lists, HBLs, pre-alerts, DOs and voyage profitability — built for NVOCC ops.',
    outcome: 'Run voyages as the unit of control, not a pile of disconnected bookings.',
    stageTitle: 'Voyage control',
    stageSub: 'VY-440 · CMA CGM · Karachi cut-off Tue 18:00',
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
    file: 'platform-land-courier.dc.html',
    href: 'platform-land-courier.dc.html',
    tagline: 'Trucking and courier jobs with the same job discipline as air and ocean — milestones, docs and costs.',
    outcome: 'Domestic trucking and courier no longer live outside the ERP.',
    stageTitle: 'Land job',
    stageSub: 'LD-9021 · Karachi → Lahore · Out for delivery',
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
      ['Shared milestones', 'Pickup, in-transit, delivered — consistent with other modes.'],
      ['Vendor haulage costs', 'Link transporters and courier vendors to job costing.'],
    ],
    metric: 'One model',
    metricSub: 'for air, sea, land and courier jobs',
    quote: 'Domestic trucking finally shows up next to our ocean jobs — same discipline.',
    quoteBy: 'Branch Manager · Forwarder network',
    related: ['tracking', 'vendors', 'finance-accounts', 'warehouse'],
    faqs: [
      ['Is Land separate from Courier?', 'Both live under Land & Courier with fields suited to trucking vs consignments, sharing the job model.'],
      ['Can transporters be vendors?', 'Yes. Vendors manage carriers and haulage partners tied into job costs.'],
      ['Does this cover last-mile only?', 'It covers domestic land and courier jobs your forwarder or courier operation runs — not a consumer parcel marketplace.'],
      ['How does tracking work?', 'Use Shipment Tracking milestones and status views on the land/courier job.'],
      ['Can we mix modes on one shipment?', 'Related jobs and documentation keep multi-modal moves coherent across modules.'],
      ['Is POD captured?', 'Delivery milestones and documentation hold proof artifacts against the job.'],
    ],
  },
  {
    slug: 'customs',
    name: 'Customs Clearance',
    cat: 'Operations',
    file: 'platform-customs.dc.html',
    href: 'platform-customs.dc.html',
    tagline: 'Declarations, clearance status and customs requirements attached to the operational shipment.',
    outcome: 'Customs work stops living in a side spreadsheet nobody else trusts.',
    stageTitle: 'Clearance desk',
    stageSub: 'CC-3310 · Import · Under examination',
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
    file: 'platform-documentation.dc.html',
    href: 'platform-documentation.dc.html',
    tagline: 'Shipment paperwork — BL/AWB drafts, pre-alerts, invoices and operational docs on the job.',
    outcome: 'Every document has a job home. No more “final_v7_REAL”.',
    stageTitle: 'Doc pack',
    stageSub: 'SE-11802 · Draft BL · Pre-alert queued',
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
      ['Version clarity', 'Teams open the job — not a hunt for the latest file.'],
    ],
    metric: '0 orphan docs',
    metricSub: 'every pack linked to a shipment job',
    quote: 'We cut “which BL is final?” messages to nearly zero.',
    quoteBy: 'Documentation Lead · Ocean forwarder',
    related: ['air-freight', 'sea-freight', 'nvocc', 'customs'],
    faqs: [
      ['Is this a DMS like SharePoint?', 'It is operational documentation on the freight job — purpose-built for forwarding paperwork, not a general file share.'],
      ['Can we store customer invoices?', 'Commercial and operational docs attach to the job; Finance handles billing documents in the money modules.'],
      ['Who can edit drafts?', 'Access follows your Administration & Access permissions by role.'],
      ['Does it cover HBL and HAWB?', 'Yes — ocean HBL and air HAWB workflows sit with Documentation against NVOCC/air/sea jobs.'],
      ['How do pre-alerts work?', 'Pre-alert status is tracked on the job so ops knows what has been sent.'],
      ['Can CS download packs?', 'Authorized roles can access the job’s documentation without asking ops to forward email attachments.'],
    ],
  },
  {
    slug: 'warehouse',
    name: 'Warehouse',
    cat: 'Operations',
    file: 'platform-warehouse.dc.html',
    href: 'platform-warehouse.dc.html',
    tagline: 'Cargo handling, inventory movement and warehouse activity connected to freight jobs.',
    outcome: 'CFS and warehouse activity stays tied to the shipment — not a separate black box.',
    stageTitle: 'Warehouse activity',
    stageSub: 'WH-778 · Cartons received · Putaway pending',
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
      ['Can CFS operators use it?', 'Yes — CFS & Warehouse Operators is a solution persona built around this module.'],
      ['Does inventory sync to finance?', 'Handling and storage costs can feed job costing; detailed inventory valuation follows your finance setup.'],
      ['How does it relate to tracking?', 'Warehouse events feed the operational timeline customers and CS care about.'],
      ['Multi-warehouse?', 'Organization and masters configure locations your tenant operates.'],
      ['Barcode scanning?', 'Field capture patterns depend on implementation; the artifact assumes job-linked activity records.'],
    ],
  },
  {
    slug: 'tracking',
    name: 'Shipment Tracking',
    cat: 'Operations',
    file: 'platform-tracking.dc.html',
    href: 'platform-tracking.dc.html',
    tagline: 'Milestones, movement and delivery progress — one status story for ops, CS and customers.',
    outcome: 'Stop guessing ETAs. Publish the milestone truth from the job.',
    stageTitle: 'Live milestones',
    stageSub: 'AE-24091 · Departed DXB · Next: Arrive LHR',
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
      ['Update once', 'Ops updates the job — every role sees it.'],
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
      ['Is this GPS / SIM tracking?', 'Shipment Tracking is milestone and status tracking on the Kingfisher job — not a telematics product.'],
      ['Can customers see status?', 'Share coherent progress from the job; branded portals depend on your rollout.'],
      ['Who updates milestones?', 'Operations owns updates; permissions control who can edit.'],
      ['Does it work multi-modal?', 'Yes — milestones attach to whatever mode jobs you run.'],
      ['How does it help sales?', 'Sales sees the same operational truth without maintaining a shadow tracker.'],
      ['Alerts?', 'Exception and milestone visibility is the foundation; notification channels follow implementation.'],
    ],
  },
  {
    slug: 'finance-accounts',
    name: 'Finance & Accounts',
    cat: 'Business',
    file: 'platform-finance-accounts.dc.html',
    href: 'platform-finance-accounts.dc.html',
    tagline: 'Job costing, invoicing, receivables and payables linked directly to operational jobs.',
    outcome: 'Money follows the shipment — not a month-end archaeology project.',
    stageTitle: 'Job costing',
    stageSub: 'SE-11802 · Margin 18.4% · Invoice ready',
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
      ['Job costing', 'See margin while the job is alive — not only after close.'],
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
      ['Can we see per-job margin?', 'Yes — job costing is designed for shipment-level profitability.'],
      ['Multi-currency?', 'Commercial fields support the currencies your tenant configures in masters.'],
      ['Vendor bills?', 'Payables link vendor costs back to jobs and vendors.'],
      ['Who can approve invoices?', 'Administration & Access controls approval permissions by role.'],
    ],
  },
  {
    slug: 'reports',
    name: 'Reports & Analytics',
    cat: 'Business',
    file: 'platform-reports.dc.html',
    href: 'platform-reports.dc.html',
    tagline: 'Operational and financial data turned into management reports — without exporting five CSVs.',
    outcome: 'Leaders see volume, margin and exceptions from the system of record.',
    stageTitle: 'Ops & margin',
    stageSub: 'This month · 412 jobs · Margin 16.2%',
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
      ['Act in-product', 'Jump back to the job — not a disconnected BI island.'],
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
      ['Branch-level views?', 'Yes — organization structure and job ownership feed branch reporting.'],
      ['Real-time?', 'Reports reflect the operational data your teams maintain on jobs.'],
      ['Custom KPIs?', 'Core freight KPIs ship in-product; deeper custom analytics can layer via implementation.'],
      ['Who gets access?', 'Permissions restrict sensitive margin and finance views.'],
    ],
  },
]

const SOLUTIONS = [
  {
    slug: 'freight-forwarders',
    name: 'Freight Forwarders',
    file: 'solutions-freight-forwarders.dc.html',
    href: 'solutions-freight-forwarders.dc.html',
    tagline: 'Multi-modal forwarding on one ERP — quotations to invoice without stitching five tools.',
    outcome: 'Run air, sea, land and docs as one operating company.',
    mockTitle: 'Forwarder control tower',
    mockSub: 'Today · 86 open jobs · 12 awaiting docs',
    stages: [
      ['Sell & quote', 'CRM, parties and quotations that convert into real jobs.'],
      ['Operate every mode', 'Air, sea, NVOCC, land and courier with shared milestones.'],
      ['Document & settle', 'Docs, customs handoffs, costing and invoicing on the same file.'],
    ],
    modules: ['air-freight', 'sea-freight', 'documentation', 'tracking', 'finance-accounts', 'reports'],
    quote: 'We stopped running the company out of inboxes. The job file is the company.',
    quoteBy: 'Managing Director · Mid-market forwarder',
    faqs: [
      ['Is Kingfisher only for large forwarders?', 'No. It fits growing forwarders who need multi-modal jobs, docs and finance without enterprise program theater.'],
      ['Can we start with one mode?', 'Yes. Switch on the modules you need; add ocean, air or land as you grow.'],
      ['Does it replace our accounting package?', 'Job costing and invoicing live in Kingfisher; GL strategy depends on your finance stack.'],
      ['Multi-branch?', 'Organization, users and permissions support branch networks under a tenant.'],
      ['How long to go live?', 'Most teams follow the homepage implementation plan — timeline depends on modules and data migration.'],
      ['What about agents abroad?', 'Parties, vendors and job sharing patterns support agent networks; access is permissioned.'],
    ],
  },
  {
    slug: 'nvocc-operators',
    name: 'NVOCC Operators',
    file: 'solutions-nvocc-operators.dc.html',
    href: 'solutions-nvocc-operators.dc.html',
    tagline: 'Voyage-centric control for consolidators — space, HBLs and voyage P&L together.',
    outcome: 'Manage the voyage as the product, not a folder of bookings.',
    mockTitle: 'Voyage board',
    mockSub: '3 voyages open · 1 cut-off today',
    stages: [
      ['Plan the voyage', 'Vessel, cut-offs and capacity in one board.'],
      ['Fill & document', 'Bookings, load lists, HBLs and pre-alerts.'],
      ['Measure profit', 'Voyage profitability while you can still steer.'],
    ],
    modules: ['nvocc', 'sea-freight', 'documentation', 'finance-accounts', 'reports'],
    quote: 'Cut-off day is calmer when load list and HBLs are not in three places.',
    quoteBy: 'NVOCC Ops Head · Ocean consolidator',
    faqs: [
      ['Do we need Sea Freight too?', 'Many NVOCCs run NVOCC + Documentation + Finance; Sea Freight helps if you also forward.'],
      ['HBL issuance?', 'Documentation workflows cover HBL packs against voyage bookings.'],
      ['Agent portals?', 'Permissions and parties support agent relationships; portal scope is implementation-specific.'],
      ['Demurrage visibility?', 'Operational milestones and costing help surface expensive delays earlier.'],
      ['Multi-trade lanes?', 'Voyages and masters configure the trades you operate.'],
      ['Reporting?', 'Reports roll voyage and job economics for leadership.'],
    ],
  },
  {
    slug: 'customs-brokers',
    name: 'Customs Brokers',
    file: 'solutions-customs-brokers.dc.html',
    href: 'solutions-customs-brokers.dc.html',
    tagline: 'Clearance status, document checklists and customer visibility without a private tracker.',
    outcome: 'Make clearance progress a shared operational fact.',
    mockTitle: 'Broker desk',
    mockSub: '18 active clearances · 3 under exam',
    stages: [
      ['Intake the file', 'Link clearance to parties and shipment context.'],
      ['Drive declarations', 'Track exams, holds and document requirements.'],
      ['Release & bill', 'Complete clearance and settle commercial work.'],
    ],
    modules: ['customs', 'documentation', 'tracking', 'finance-accounts', 'reports'],
    quote: 'Importers stopped calling us for status we already knew — they can see the holds.',
    quoteBy: 'Principal · Customs brokerage',
    faqs: [
      ['Can brokers use Kingfisher without forwarding?', 'Yes. The Customs Brokers solution centers clearance, docs and billing.'],
      ['Filing integrations?', 'Orchestration is in-product; local customs connectivity depends on region and integration.'],
      ['Multi-client?', 'Customers & Parties keep importer files separated under permissions.'],
      ['Document packs?', 'Documentation holds supporting files against each clearance job.'],
      ['How do we bill clearance fees?', 'Finance & Accounts invoices from the operational record.'],
      ['Staff access?', 'Administration & Access sets broker vs admin permissions.'],
    ],
  },
  {
    slug: 'cfs-warehouse',
    name: 'CFS & Warehouse Operators',
    file: 'solutions-cfs-warehouse.dc.html',
    href: 'solutions-cfs-warehouse.dc.html',
    tagline: 'Receiving, handling and release tied to freight jobs — CFS floor and ops desk aligned.',
    outcome: 'Warehouse truth feeds the shipment timeline.',
    mockTitle: 'CFS floor',
    mockSub: 'Receiving bay · 6 jobs inbound today',
    stages: [
      ['Receive', 'Log cargo against the job reference.'],
      ['Handle', 'Track handling and storage activity.'],
      ['Release', 'Hand off to onward transport with a clean timeline.'],
    ],
    modules: ['warehouse', 'land-courier', 'tracking', 'documentation', 'finance-accounts'],
    quote: 'Forwarders who store with us finally see the same receiving events we see.',
    quoteBy: 'CFS Operations · Port-adjacent warehouse',
    faqs: [
      ['Is Kingfisher a WMS replacement?', 'It covers freight-linked warehouse activity. Ultra-deep WMS features are scoped per implementation.'],
      ['Can forwarders and CFS share a tenant model?', 'Company/tenant structure supports how you commercially separate entities.'],
      ['Storage billing?', 'Costs and charges can flow into Finance from warehouse-linked jobs.'],
      ['Land connectivity?', 'Land & Courier continues the move after release.'],
      ['Inventory accuracy?', 'Job-linked receiving and handling reduce the ops vs floor mismatch.'],
      ['Multiple locations?', 'Masters and organization settings configure warehouses.'],
    ],
  },
  {
    slug: 'importers-exporters',
    name: 'Importers & Exporters',
    file: 'solutions-importers-exporters.dc.html',
    href: 'solutions-importers-exporters.dc.html',
    tagline: 'Work with your forwarder on shared shipment truth — status, docs and commercial clarity.',
    outcome: 'Less chasing. More shipment certainty.',
    mockTitle: 'Shipper view',
    mockSub: '4 active shipments · 1 awaiting clearance',
    stages: [
      ['Book with clarity', 'Quotations and bookings with complete party data.'],
      ['Follow the move', 'Milestones and docs without inbox archaeology.'],
      ['Settle cleanly', 'Invoices tied to the shipments you recognize.'],
    ],
    modules: ['tracking', 'documentation', 'customs', 'finance-accounts', 'air-freight', 'sea-freight'],
    quote: 'We stopped maintaining our own shadow tracker next to the forwarder updates.',
    quoteBy: 'Logistics Manager · Regional importer',
    faqs: [
      ['Do importers log into Kingfisher?', 'Depending on rollout, customers may receive status and documentation access; the ERP remains operator-led.'],
      ['Can we see customs holds?', 'When your forwarder/broker runs Customs Clearance on Kingfisher, holds can surface on the shared job story.'],
      ['Multi-forwarder?', 'Your commercial relationships stay yours; Kingfisher is the operator system of record.'],
      ['Document downloads?', 'Authorized packs come from Documentation on the job.'],
      ['Invoice disputes?', 'Job-linked invoicing reduces “which shipment is this?” fights.'],
      ['Modes supported?', 'Air, sea, land and courier — whatever your operator runs on Kingfisher.'],
    ],
  },
  {
    slug: 'transporters',
    name: 'Transporters',
    file: 'solutions-transporters.dc.html',
    href: 'solutions-transporters.dc.html',
    tagline: 'Haulage jobs, vendor performance and costs connected to the forwarder’s shipment file.',
    outcome: 'Trucking instructions and costs stop living only in WhatsApp.',
    mockTitle: 'Haulage desk',
    mockSub: '14 active land jobs · 3 pickups today',
    stages: [
      ['Accept the move', 'Land jobs with route, parties and instructions.'],
      ['Execute & update', 'Milestones from pickup to delivery.'],
      ['Bill the work', 'Haulage costs and invoices tied to the job.'],
    ],
    modules: ['land-courier', 'tracking', 'finance-accounts', 'reports', 'warehouse'],
    quote: 'Forwarders send cleaner instructions when the land job is a real record.',
    quoteBy: 'Fleet Ops · Regional transporter',
    faqs: [
      ['Are transporters tenants or vendors?', 'Often vendors inside a forwarder tenant; transporter companies can also run Land & Courier as operators.'],
      ['POD?', 'Delivery milestones and documentation capture proof against the job.'],
      ['Rate cards?', 'Commercial terms live with vendors and job costing.'],
      ['Multi-stop?', 'Job routing fields support the moves you configure.'],
      ['Visibility for the forwarder?', 'Shared milestones keep the forwarder and transporter aligned.'],
      ['Reports?', 'Volume and cost reports help both sides review performance.'],
    ],
  },
  {
    slug: 'courier-companies',
    name: 'Courier Companies',
    file: 'solutions-courier-companies.dc.html',
    href: 'solutions-courier-companies.dc.html',
    tagline: 'Consignments, delivery milestones and commercial close inside the same ERP discipline.',
    outcome: 'Courier volume without losing shipment-level control.',
    mockTitle: 'Courier ops',
    mockSub: '128 consignments · 96% on-time yesterday',
    stages: [
      ['Intake consignments', 'Create courier jobs with parties and service levels.'],
      ['Deliver with status', 'Milestones through out-for-delivery and POD.'],
      ['Close commercially', 'Costs and invoices still tied to each consignment job.'],
    ],
    modules: ['land-courier', 'tracking', 'finance-accounts', 'reports', 'documentation'],
    quote: 'High volume stopped meaning we will reconcile it somehow next week.',
    quoteBy: 'COO · Domestic courier',
    faqs: [
      ['Is this a consumer shipping app?', 'No. It is an operating ERP for courier companies and forwarders running courier services.'],
      ['Last-mile only?', 'Courier jobs cover the consignments you operate end-to-end or as a partner network.'],
      ['Bulk upload?', 'Implementation can include intake patterns for volume desks.'],
      ['Customer notifications?', 'Status from Tracking is the foundation; channels vary by rollout.'],
      ['COD / special services?', 'Commercial fields and job types follow your configured services.'],
      ['Branch networks?', 'Organization and permissions support multi-station courier ops.'],
    ],
  },
]

const MODULE_BY_SLUG = Object.fromEntries(MODULES.map((m) => [m.slug, m]))

function esc(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function cssBase() {
  return `
body{margin:0;background:#08091F}
a{color:#A1A1B5}a:hover{color:#FFFFFF}
*{box-sizing:border-box}
.lf-page{--lf-bg:#08091F;--lf-surface:#0B0E2C;--lf-surface-2:#0D1133;--lf-border:rgba(255,255,255,.08);--lf-border-strong:rgba(255,255,255,.16);--lf-text:#FFFFFF;--lf-text-2:#A1A1B5;--lf-muted:#73758A;--lf-accent:#FF751F;--lf-accent-text:#FF751F;--lf-em-accent:linear-gradient(95deg,#FFD2B0 0%,#FF9A57 55%,#FF751F 100%);background:var(--lf-bg);color:var(--lf-text);font-family:'Geist',ui-sans-serif,system-ui,sans-serif;-webkit-font-smoothing:antialiased;min-height:100vh;overflow-x:hidden}
.lf-theme-light{--lf-bg:#F7F9FC;--lf-surface:#FFFFFF;--lf-surface-2:#F1F5F9;--lf-border:#D8E1EA;--lf-border-strong:#B6C3D1;--lf-text:#0A2942;--lf-text-2:#73758A;--lf-muted:#64748B;--lf-accent-text:#C2410C;--lf-em-accent:linear-gradient(95deg,#C2410C 0%,#EA6A16 100%)}
.lf-theme-light .lf-nav{background:rgba(255,255,255,.78);border-color:rgba(10,41,66,.1);box-shadow:0 12px 40px -18px rgba(10,41,66,.22)}
.lf-theme-light .lf-brand,.lf-theme-light .lf-word{color:#0A2942}
.lf-theme-light .lf-link{color:#64748B}
.lf-theme-light .lf-link:hover{color:#0A2942;background:rgba(10,41,66,.05)}
.lf-theme-light .lf-mega{background:rgba(255,255,255,.96);border-color:rgba(10,41,66,.1)}
.lf-theme-light .lf-mpanel{background:rgba(255,255,255,.96)}
.lf-navwrap{position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:50;width:min(1240px,calc(100% - 80px))}
.lf-nav{position:relative;display:flex;align-items:center;justify-content:space-between;gap:24px;height:68px;padding:0 10px 0 20px;border-radius:48px;background:rgba(9,12,38,.55);border:1px solid rgba(255,255,255,.09);-webkit-backdrop-filter:blur(18px) saturate(140%);backdrop-filter:blur(18px) saturate(140%);box-shadow:0 12px 40px -14px rgba(0,0,0,.55),inset 0 1px 0 rgba(255,255,255,.05)}
.lf-brand{display:flex;align-items:center;gap:10px;color:#fff;text-decoration:none}
.lf-word{font-size:17px;font-weight:600;letter-spacing:.06em}
.lf-word b{font-weight:400;color:#FF751F}
.lf-links{display:flex;align-items:center;gap:2px}
.lf-link{display:inline-flex;align-items:center;gap:4px;padding:10px 14px;border-radius:999px;color:#A1A1B5;text-decoration:none;font-size:14.5px;border:0;background:none;font:inherit;cursor:pointer}
.lf-link:hover{color:#fff;background:rgba(255,255,255,.05)}
.lf-actions{display:flex;align-items:center;gap:6px}
.lf-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:999px;font-weight:600;text-decoration:none;cursor:pointer;border:0;font:inherit}
.lf-btn-primary{height:40px;padding:0 18px;background:#FF751F;color:#1A0B02;box-shadow:0 10px 28px -10px rgba(255,117,31,.7)}
.lf-btn-ghost{height:40px;padding:0 18px;background:rgba(255,255,255,.04);color:var(--lf-text);border:1px solid var(--lf-border-strong)}
.lf-btn-sm{height:40px;font-size:13.5px}
.lf-theme-btn,.lf-menu-btn{width:40px;height:40px;border-radius:999px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.04);color:#fff;display:inline-flex;align-items:center;justify-content:center;cursor:pointer}
.lf-menu-btn{display:none}
.lf-mega{display:none;position:absolute;left:0;right:0;top:calc(100% + 10px);padding:22px;border-radius:20px;background:rgba(9,12,38,.94);border:1px solid rgba(255,255,255,.1);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);box-shadow:0 30px 60px -20px rgba(0,0,0,.7)}
.lf-mega.is-open{display:block}
.lf-mega-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px 28px}
.lf-mega h4{margin:0 0 10px;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--lf-muted)}
.lf-mega a{display:block;padding:10px 12px;border-radius:12px;color:var(--lf-text);text-decoration:none;font-size:14px}
.lf-mega a:hover{background:rgba(255,255,255,.05)}
.lf-mega a small{display:block;margin-top:2px;color:var(--lf-muted);font-size:12px}
.lf-mpanel{display:none;position:absolute;left:0;right:0;top:calc(100% + 10px);padding:10px;border-radius:24px;background:rgba(9,12,38,.92);border:1px solid rgba(255,255,255,.1);flex-direction:column;gap:2px}
.lf-mpanel.is-open{display:flex}
.lf-mlink{display:flex;min-height:48px;align-items:center;padding:0 16px;border-radius:14px;color:#fff;text-decoration:none}
.lf-mainpad{padding-top:108px}
.lf-wrap{max-width:1100px;margin:0 auto;padding:0 40px}
.lf-hero-p{position:relative;padding:48px 0 72px;overflow:hidden}
.lf-hero-p::before{content:'';position:absolute;inset:0;background:radial-gradient(50% 60% at 70% 0%,rgba(255,117,31,.12),transparent 70%);pointer-events:none}
.lf-eyebrow{font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--lf-accent-text)}
.lf-h1{margin:14px 0 0;font-family:'Instrument Serif',Georgia,serif;font-weight:400;font-size:clamp(40px,5vw,64px);line-height:1.05;letter-spacing:-.02em}
.lf-h1 em{font-style:italic;background:var(--lf-em-accent);-webkit-background-clip:text;background-clip:text;color:transparent}
.lf-lede{margin:18px 0 0;max-width:560px;font-size:17px;line-height:1.65;color:var(--lf-text-2)}
.lf-ctas{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}
.lf-section{padding:72px 0;border-top:1px solid var(--lf-border)}
.lf-h2{margin:0;font-family:'Instrument Serif',Georgia,serif;font-weight:400;font-size:clamp(28px,3vw,40px);line-height:1.15}
.lf-sub{margin:12px 0 0;max-width:540px;color:var(--lf-text-2);font-size:15px;line-height:1.6}
.lf-stage{margin-top:28px;padding:22px;border-radius:16px;background:linear-gradient(180deg,#1A1D3D,#11132E);border:1px solid rgba(255,255,255,.12);box-shadow:0 40px 80px -40px rgba(0,0,0,.8)}
.lf-theme-light .lf-stage{background:#fff;border-color:var(--lf-border);box-shadow:0 30px 60px -36px rgba(10,41,66,.25)}
.lf-stage-top{display:flex;justify-content:space-between;gap:12px;align-items:baseline}
.lf-stage-top b{font-size:15px}
.lf-stage-top span{font-family:'Geist Mono',ui-monospace,monospace;font-size:11px;color:var(--lf-muted)}
.lf-stage-body{margin-top:18px;display:grid;gap:10px}
.lf-pillrow{display:flex;flex-wrap:wrap;gap:8px}
.lf-pill{height:34px;padding:0 12px;border-radius:999px;border:1px solid var(--lf-border-strong);display:inline-flex;align-items:center;font-size:12.5px;color:var(--lf-text-2)}
.lf-pill.on{border-color:#FF751F;background:rgba(255,117,31,.14);color:var(--lf-text)}
.lf-ba{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:28px}
.lf-ba article{padding:20px;border-radius:14px;border:1px solid var(--lf-border);background:var(--lf-surface)}
.lf-ba h3{margin:0;font-size:14px;font-weight:600}
.lf-ba ul{margin:14px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:10px}
.lf-ba li{font-size:13.5px;line-height:1.5;color:var(--lf-text-2);padding-left:16px;position:relative}
.lf-ba li::before{content:'';position:absolute;left:0;top:8px;width:6px;height:6px;border-radius:50%;background:var(--lf-muted)}
.lf-ba .good li::before{background:#FF751F}
.lf-steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:28px}
.lf-step{padding:20px;border-radius:14px;border:1px solid var(--lf-border);background:var(--lf-surface)}
.lf-step span{font-family:'Geist Mono',ui-monospace,monospace;font-size:11px;color:var(--lf-accent-text)}
.lf-step h3{margin:10px 0 0;font-size:18px;font-family:'Instrument Serif',Georgia,serif;font-weight:400}
.lf-step p{margin:10px 0 0;font-size:13.5px;line-height:1.55;color:var(--lf-text-2)}
.lf-feats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:28px}
.lf-feat{padding:20px;border-radius:14px;border:1px solid var(--lf-border);background:var(--lf-surface)}
.lf-feat h3{margin:0;font-size:16px}
.lf-feat p{margin:8px 0 0;font-size:13.5px;line-height:1.55;color:var(--lf-text-2)}
.lf-proof{display:grid;grid-template-columns:200px 1fr;gap:24px;align-items:center;margin-top:28px;padding:28px;border-radius:16px;border:1px solid var(--lf-border);background:var(--lf-surface)}
.lf-proof b{display:block;font-family:'Instrument Serif',Georgia,serif;font-size:42px;font-weight:400;color:var(--lf-accent-text)}
.lf-proof small{display:block;margin-top:6px;color:var(--lf-muted);font-size:13px;line-height:1.4}
.lf-proof blockquote{margin:0;font-size:18px;line-height:1.5;font-family:'Instrument Serif',Georgia,serif}
.lf-proof cite{display:block;margin-top:12px;font-style:normal;font-size:13px;color:var(--lf-muted)}
.lf-related{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}
.lf-related a{padding:12px 14px;border-radius:12px;border:1px solid var(--lf-border);background:var(--lf-surface);color:var(--lf-text);text-decoration:none;font-size:13.5px}
.lf-related a:hover{border-color:#FF751F}
.lf-faq{margin-top:22px;display:flex;flex-direction:column;gap:8px}
.lf-faq details{border:1px solid var(--lf-border);border-radius:12px;background:var(--lf-surface);padding:14px 16px}
.lf-faq summary{cursor:pointer;font-weight:600;font-size:14px}
.lf-faq p{margin:10px 0 0;font-size:13.5px;line-height:1.6;color:var(--lf-text-2)}
.lf-cta{padding:80px 0 100px;position:relative}
.lf-cta-grid{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:48px;align-items:center}
.lf-form{padding:24px;border-radius:14px;background:linear-gradient(180deg,#1A1D3D,#11132E);border:1px solid rgba(255,255,255,.12)}
.lf-theme-light .lf-form{background:#fff;border-color:var(--lf-border)}
.lf-form label{display:block;font-size:12.5px;font-weight:600;margin-top:14px}
.lf-form input,.lf-form textarea,.lf-form select{width:100%;margin-top:8px;height:44px;padding:0 12px;border-radius:9px;border:1px solid var(--lf-border-strong);background:rgba(255,255,255,.04);color:var(--lf-text);font:inherit}
.lf-theme-light .lf-form input,.lf-theme-light .lf-form textarea,.lf-theme-light .lf-form select{background:#F8FAFC}
.lf-form textarea{height:100px;padding:12px;resize:vertical}
.lf-form .lf-btn{margin-top:18px;width:100%;height:46px}
.lf-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:28px}
.lf-card{display:flex;flex-direction:column;gap:8px;padding:20px;border-radius:14px;border:1px solid var(--lf-border);background:var(--lf-surface);text-decoration:none;color:inherit;transition:border-color .2s}
.lf-card:hover{border-color:#FF751F;color:inherit}
.lf-card .cat{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--lf-accent-text)}
.lf-card h3{margin:0;font-size:18px;font-family:'Instrument Serif',Georgia,serif;font-weight:400}
.lf-card p{margin:0;font-size:13px;line-height:1.5;color:var(--lf-text-2);flex:1}
.lf-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:28px}
.lf-stat{padding:18px;border-radius:14px;border:1px solid var(--lf-border);background:var(--lf-surface);text-align:center}
.lf-stat b{display:block;font-family:'Instrument Serif',Georgia,serif;font-size:32px;font-weight:400}
.lf-stat span{display:block;margin-top:6px;font-size:12.5px;color:var(--lf-muted)}
.lf-table{width:100%;border-collapse:collapse;margin-top:24px;font-size:13.5px}
.lf-table th,.lf-table td{padding:12px 14px;border-bottom:1px solid var(--lf-border);text-align:left}
.lf-table th{color:var(--lf-muted);font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.06em}
.lf-plans{display:flex;gap:8px;margin-top:22px;flex-wrap:wrap}
.lf-plans button{height:40px;padding:0 16px;border-radius:999px;border:1px solid var(--lf-border-strong);background:transparent;color:var(--lf-text);font:inherit;cursor:pointer}
.lf-plans button.is-on{background:rgba(255,117,31,.14);border-color:#FF751F}
.lf-pricebox{margin-top:22px;padding:22px;border-radius:14px;border:1px solid var(--lf-border);background:var(--lf-surface)}
.lf-pricebox .big{font-family:'Instrument Serif',Georgia,serif;font-size:40px}
.lf-foot{--ft-bg:#04051A;background:var(--ft-bg);border-top:1px solid var(--lf-border);margin-top:40px}
.lf-theme-light .lf-foot{--ft-bg:#F1F5F9}
.lf-foot-wrap{max-width:1180px;margin:0 auto;padding:72px 40px 32px}
.lf-foot-grid{display:grid;grid-template-columns:minmax(0,1.7fr) repeat(4,minmax(0,1fr));gap:40px}
.lf-foot-tag{margin:18px 0 0;max-width:260px;font-size:13px;line-height:1.6;color:var(--lf-text-2)}
.lf-foot-col h3{margin:0;font-size:13px;font-weight:600}
.lf-foot-col ul{margin:18px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:12px}
.lf-foot-col a{font-size:13px;color:var(--lf-text-2);text-decoration:none}
.lf-foot-col a:hover{color:var(--lf-accent-text)}
.lf-foot-bottom{display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;margin-top:56px;padding-top:22px;border-top:1px solid var(--lf-border);font-size:12px;color:var(--lf-muted)}
.lf-foot-legal{display:flex;gap:20px}
.lf-foot-legal a{color:var(--lf-accent-text);text-decoration:none}
.lf-logos{display:flex;flex-wrap:wrap;gap:10px 18px;margin-top:22px;opacity:.7}
.lf-logos span{font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--lf-muted)}
.lf-filters{display:flex;flex-wrap:wrap;gap:8px;margin-top:20px}
.lf-filters button{height:36px;padding:0 14px;border-radius:999px;border:1px solid var(--lf-border-strong);background:transparent;color:var(--lf-text-2);font:inherit;cursor:pointer}
.lf-filters button.is-on{border-color:#FF751F;color:var(--lf-text);background:rgba(255,117,31,.12)}
.lf-story{padding:20px;border-radius:14px;border:1px solid var(--lf-border);background:var(--lf-surface)}
.lf-story h3{margin:0;font-size:17px;font-family:'Instrument Serif',Georgia,serif;font-weight:400}
.lf-story p{margin:10px 0 0;font-size:13.5px;line-height:1.55;color:var(--lf-text-2)}
.lf-timeline{margin-top:28px;display:flex;flex-direction:column;gap:16px}
.lf-timeline article{display:grid;grid-template-columns:88px 1fr;gap:16px}
.lf-timeline b{font-family:'Geist Mono',ui-monospace,monospace;font-size:12px;color:var(--lf-accent-text)}
@media (max-width:900px){
.lf-links,.lf-login,.lf-navcta{display:none}
.lf-menu-btn{display:inline-flex}
.lf-nav{height:60px}
.lf-ba,.lf-steps,.lf-feats,.lf-cards,.lf-stats,.lf-cta-grid,.lf-proof{grid-template-columns:1fr}
.lf-foot-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.lf-foot-brand{grid-column:1/-1}
}
@media (max-width:640px){
.lf-navwrap{top:14px;width:calc(100% - 32px)}
.lf-wrap,.lf-foot-wrap{padding-left:16px;padding-right:16px}
.lf-mainpad{padding-top:92px}
}
`
}

function logoSvg(size = 30) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="10" fill="${ACCENT}"></rect><path d="M9 22h4c4.6 0 3.4-12 8-12h2" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"></path><circle cx="9" cy="22" r="2.4" fill="#FFFFFF"></circle><circle cx="23" cy="10" r="2.4" fill="none" stroke="#FFFFFF" stroke-width="2"></circle></svg>`
}

function navHtml(active = '') {
  const ops = MODULES.filter((m) => m.cat === 'Operations')
  const biz = MODULES.filter((m) => m.cat === 'Business')
  return `
<header class="lf-navwrap">
<nav class="lf-nav" aria-label="Primary">
<a class="lf-brand" href="../Main.dc.html" aria-label="KINGFISHER home">${logoSvg(32)}<span class="lf-word">KING<b>FISHER</b></span></a>
<div class="lf-links">
<button type="button" class="lf-link" data-mega="platform" aria-expanded="false">Platform <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></button>
<button type="button" class="lf-link" data-mega="solutions" aria-expanded="false">Solutions <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></button>
<a class="lf-link" href="customers.dc.html">Customers</a>
<a class="lf-link" href="pricing.dc.html">Pricing</a>
<a class="lf-link" href="about.dc.html">Company</a>
</div>
<div class="lf-actions">
<button class="lf-theme-btn" type="button" data-theme-toggle aria-label="Toggle theme">◐</button>
<a class="lf-link lf-login" href="contact.dc.html">Login</a>
<a class="lf-btn lf-btn-primary lf-btn-sm lf-navcta" href="contact.dc.html">Book a Demo</a>
<button class="lf-menu-btn" type="button" data-menu aria-label="Open menu">☰</button>
</div>
<div class="lf-mega" id="mega-platform" hidden>
<div class="lf-mega-grid">
<div><h4>Operations</h4>${ops.map((m) => `<a href="${m.href}">${esc(m.name)}<small>${esc(m.tagline.slice(0, 64))}…</small></a>`).join('')}</div>
<div><h4>Business</h4>${biz.map((m) => `<a href="${m.href}">${esc(m.name)}<small>${esc(m.tagline.slice(0, 64))}…</small></a>`).join('')}
<a href="platform.dc.html"><strong>All platform modules</strong><small>Browse the full stack</small></a></div>
</div></div>
<div class="lf-mega" id="mega-solutions" hidden>
<div class="lf-mega-grid">
${SOLUTIONS.map((s) => `<a href="${s.href}">${esc(s.name)}<small>${esc(s.tagline.slice(0, 72))}…</small></a>`).join('')}
<a href="solutions.dc.html"><strong>All solutions</strong><small>Find your operator profile</small></a>
</div></div>
<div class="lf-mpanel" id="mobile-panel" hidden>
<a class="lf-mlink" href="platform.dc.html">Platform</a>
<a class="lf-mlink" href="solutions.dc.html">Solutions</a>
<a class="lf-mlink" href="customers.dc.html">Customers</a>
<a class="lf-mlink" href="pricing.dc.html">Pricing</a>
<a class="lf-mlink" href="about.dc.html">Company</a>
<a class="lf-mlink" href="careers.dc.html">Careers</a>
<a class="lf-mlink" href="contact.dc.html">Contact</a>
<a class="lf-btn lf-btn-primary" href="contact.dc.html" style="margin-top:8px">Book a Demo</a>
</div>
</nav>
</header>`
}

function footerHtml() {
  return `
<footer class="lf-foot">
<div class="lf-foot-wrap">
<div class="lf-foot-grid">
<div class="lf-foot-brand">
<a class="lf-brand" href="../Main.dc.html">${logoSvg(30)}<span class="lf-word">KING<b>FISHER</b></span></a>
<p class="lf-foot-tag">The freight-forwarding ERP for modern logistics teams — from quotation to invoice.</p>
</div>
<nav class="lf-foot-col" aria-label="Platform"><h3>Platform</h3><ul>
${MODULES.map((m) => `<li><a href="${m.href}">${esc(m.footerLabel || m.name)}</a></li>`).join('')}
</ul></nav>
<nav class="lf-foot-col" aria-label="Solutions"><h3>Solutions</h3><ul>
${SOLUTIONS.map((s) => `<li><a href="${s.href}">${esc(s.name)}</a></li>`).join('')}
</ul></nav>
<nav class="lf-foot-col" aria-label="Company"><h3>Company</h3><ul>
<li><a href="about.dc.html">About Us</a></li>
<li><a href="customers.dc.html">Customers</a></li>
<li><a href="pricing.dc.html">Pricing</a></li>
<li><a href="careers.dc.html">Careers</a></li>
<li><a href="contact.dc.html">Contact</a></li>
</ul></nav>
<nav class="lf-foot-col" aria-label="Resources"><h3>Resources</h3><ul>
<li><a href="../Main.dc.html#product-demo">Product Demo</a></li>
<li><a href="../Main.dc.html#implementation">Implementation</a></li>
<li><a href="../Main.dc.html#faq">FAQ</a></li>
<li><a href="platform.dc.html">Platform</a></li>
<li><a href="solutions.dc.html">Solutions</a></li>
</ul></nav>
</div>
<div class="lf-foot-bottom">
<span>© 2026 Kingfisher. All rights reserved.</span>
<nav class="lf-foot-legal" aria-label="Legal"><a href="#">Terms</a><a href="#">Privacy</a><a href="#">Cookies</a></nav>
</div>
</div>
</footer>`
}

function demoCta(title = 'Talk to a freight expert.', sub = 'Tell us about your freight operation. We will map your modes and walk you through Kingfisher.') {
  return `
<section class="lf-cta" id="demo">
<div class="lf-wrap lf-cta-grid">
<form class="lf-form" aria-label="Request a demo" onsubmit="event.preventDefault();alert('Design artifact — wire to /api/leads in React port.');">
<h3 class="lf-h2" style="font-size:24px">Request a demo</h3>
<label>Company email<input type="email" placeholder="you@yourcompany.com" required></label>
<label>Company name<input type="text" placeholder="Your freight company" required></label>
<label>Full name<input type="text" placeholder="Your name" required></label>
<label>Freight modes
<select><option>Air Freight</option><option>Sea FCL / LCL</option><option>NVOCC</option><option>Land / Courier</option><option>Multi-modal</option></select>
</label>
<button class="lf-btn lf-btn-primary" type="submit">Request demo</button>
</form>
<div>
<div class="lf-eyebrow">Get started</div>
<h2 class="lf-h2">${esc(title)}</h2>
<p class="lf-sub">${esc(sub)}</p>
<ul style="margin:18px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:10px;color:var(--lf-text-2);font-size:14px">
<li>✓ Guided demo tailored to your freight modes</li>
<li>✓ Onboarding plan for your team and modules</li>
<li>✓ Direct line to our solutions team</li>
</ul>
<p style="margin-top:18px;font-size:13px;color:var(--lf-muted)">Prefer email? Write to <a href="contact.dc.html">[sales email]</a></p>
</div>
</div>
</section>`
}

function scriptBlock() {
  return `
<script>
(function(){
  const page=document.querySelector('.lf-page');
  const themeBtn=document.querySelector('[data-theme-toggle]');
  const menuBtn=document.querySelector('[data-menu]');
  const panel=document.getElementById('mobile-panel');
  let theme=localStorage.getItem('lf-theme')||'dark';
  function apply(){
    page.classList.toggle('lf-theme-light', theme==='light');
    page.classList.toggle('lf-theme-dark', theme!=='light');
  }
  apply();
  themeBtn&&themeBtn.addEventListener('click',()=>{theme=theme==='light'?'dark':'light';localStorage.setItem('lf-theme',theme);apply();});
  menuBtn&&menuBtn.addEventListener('click',()=>{
    const open=!panel.classList.contains('is-open');
    panel.hidden=!open;panel.classList.toggle('is-open',open);
    document.querySelectorAll('.lf-mega').forEach(m=>{m.hidden=true;m.classList.remove('is-open');});
  });
  document.querySelectorAll('[data-mega]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const id='mega-'+btn.getAttribute('data-mega');
      const el=document.getElementById(id);
      const open=!el.classList.contains('is-open');
      document.querySelectorAll('.lf-mega').forEach(m=>{m.hidden=true;m.classList.remove('is-open');});
      if(panel){panel.hidden=true;panel.classList.remove('is-open');}
      el.hidden=!open;el.classList.toggle('is-open',open);
      btn.setAttribute('aria-expanded',open?'true':'false');
    });
  });
  document.addEventListener('click',(e)=>{
    if(!e.target.closest('.lf-navwrap')){
      document.querySelectorAll('.lf-mega,.lf-mpanel').forEach(m=>{m.hidden=true;m.classList.remove('is-open');});
    }
  });
})();
</script>`
}

function pageShell(title, body, active = '') {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} · KINGFISHER</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@300..700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap">
<style>${cssBase()}</style>
</head>
<body>
<div class="lf-page lf-theme-dark">
${navHtml(active)}
<div class="lf-mainpad">
${body}
</div>
${footerHtml()}
</div>
${scriptBlock()}
</body>
</html>
`
}

function relatedLinks(slugs) {
  return slugs
    .map((s) => MODULE_BY_SLUG[s])
    .filter(Boolean)
    .map((m) => `<a href="${m.href}">${esc(m.name)}</a>`)
    .join('')
}

function modulePage(m) {
  const body = `
<section class="lf-hero-p"><div class="lf-wrap">
<div class="lf-eyebrow">Platform · ${esc(m.cat)}</div>
<h1 class="lf-h1">${esc(m.name)}</h1>
<p class="lf-lede">${esc(m.tagline)}</p>
<p class="lf-sub" style="margin-top:10px">${esc(m.outcome)}</p>
<div class="lf-ctas">
<a class="lf-btn lf-btn-primary" href="contact.dc.html">Book a Demo</a>
<a class="lf-btn lf-btn-ghost" href="platform.dc.html">All modules</a>
</div>
<div class="lf-stage">
<div class="lf-stage-top"><b>${esc(m.stageTitle)}</b><span>${esc(m.stageSub)}</span></div>
<div class="lf-stage-body">
<div class="lf-pillrow">
<span class="lf-pill on">Job live</span>
<span class="lf-pill">Docs linked</span>
<span class="lf-pill">Costing open</span>
<span class="lf-pill">CS visible</span>
</div>
</div>
</div>
</div></section>

<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">Before &amp; after</div>
<h2 class="lf-h2">Two ways to run ${esc(m.name.toLowerCase())}.</h2>
<div class="lf-ba">
<article><h3>Without Kingfisher</h3><ul>${m.before.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></article>
<article class="good"><h3>With ${esc(m.name)}</h3><ul>${m.after.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></article>
</div>
</div></section>

<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">How it works</div>
<h2 class="lf-h2">Three steps. From day one.</h2>
<div class="lf-steps">
${m.steps
  .map(
    ([t, d], i) =>
      `<div class="lf-step"><span>0${i + 1}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`,
  )
  .join('')}
</div>
</div></section>

<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">What's inside</div>
<h2 class="lf-h2">Everything you need for ${esc(m.name.toLowerCase())}.</h2>
<div class="lf-feats">
${m.features.map(([t, d]) => `<div class="lf-feat"><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}
</div>
</div></section>

<section class="lf-section"><div class="lf-wrap">
<div class="lf-proof">
<div><b>${esc(m.metric)}</b><small>${esc(m.metricSub)}</small></div>
<div><blockquote>“${esc(m.quote)}”</blockquote><cite>${esc(m.quoteBy)}</cite></div>
</div>
</div></section>

<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">Pairs perfectly with</div>
<h2 class="lf-h2">One module is good. A stack is a system.</h2>
<div class="lf-related">${relatedLinks(m.related)}</div>
</div></section>

<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">FAQ</div>
<h2 class="lf-h2">Questions about ${esc(m.name)}</h2>
<div class="lf-faq">
${m.faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}
</div>
</div></section>

${demoCta(`See ${m.name} on your jobs.`, `A walkthrough on freight-forwarding workflows — tailored to ${m.name.toLowerCase()}.`)}
`
  return pageShell(`${m.name}`, body, 'platform')
}

function solutionPage(s) {
  const body = `
<section class="lf-hero-p"><div class="lf-wrap">
<div class="lf-eyebrow">Solutions</div>
<h1 class="lf-h1">${esc(s.name)}</h1>
<p class="lf-lede">${esc(s.tagline)}</p>
<p class="lf-sub">${esc(s.outcome)}</p>
<div class="lf-ctas">
<a class="lf-btn lf-btn-primary" href="contact.dc.html">Book a Demo</a>
<a class="lf-btn lf-btn-ghost" href="solutions.dc.html">All solutions</a>
</div>
<div class="lf-stage">
<div class="lf-stage-top"><b>${esc(s.mockTitle)}</b><span>${esc(s.mockSub)}</span></div>
<div class="lf-stage-body"><div class="lf-pillrow">
${s.modules
  .slice(0, 5)
  .map((slug) => {
    const m = MODULE_BY_SLUG[slug]
    return m ? `<span class="lf-pill on">${esc(m.name)}</span>` : ''
  })
  .join('')}
</div></div>
</div>
</div></section>

<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">Live workflow</div>
<h2 class="lf-h2">Built for how ${esc(s.name.toLowerCase())} actually operate.</h2>
<div class="lf-steps">
${s.stages
  .map(
    ([t, d], i) =>
      `<div class="lf-step"><span>Stage ${i + 1}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`,
  )
  .join('')}
</div>
</div></section>

<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">Recommended modules</div>
<h2 class="lf-h2">The stack for ${esc(s.name.toLowerCase())}.</h2>
<div class="lf-related">${relatedLinks(s.modules.filter((x) => MODULE_BY_SLUG[x]))}</div>
</div></section>

<section class="lf-section"><div class="lf-wrap">
<div class="lf-proof">
<div><b>1 platform</b><small>quotation to invoice for your operating model</small></div>
<div><blockquote>“${esc(s.quote)}”</blockquote><cite>${esc(s.quoteBy)}</cite></div>
</div>
</div></section>

<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">FAQ</div>
<h2 class="lf-h2">${esc(s.name)} — frequently asked</h2>
<div class="lf-faq">
${s.faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}
</div>
</div></section>

${demoCta(`Kingfisher for ${s.name}.`, s.tagline)}
`
  return pageShell(`${s.name}`, body, 'solutions')
}

function shellPage() {
  const body = `
<section class="lf-hero-p"><div class="lf-wrap">
<div class="lf-eyebrow">Design chrome</div>
<h1 class="lf-h1">Shared <em>shell</em></h1>
<p class="lf-lede">Sticky nav with Platform / Solutions mega-menus, theme toggle, mobile panel, and shared footer — reused across every marketing page artifact.</p>
<div class="lf-ctas">
<a class="lf-btn lf-btn-primary" href="platform.dc.html">Platform hub</a>
<a class="lf-btn lf-btn-ghost" href="solutions.dc.html">Solutions hub</a>
</div>
<div class="lf-stage" style="margin-top:32px">
<div class="lf-stage-top"><b>Chrome checklist</b><span>nav · mega · footer · theme</span></div>
<div class="lf-stage-body">
<div class="lf-pillrow">
<span class="lf-pill on">Sticky glass nav</span>
<span class="lf-pill on">Platform mega-menu</span>
<span class="lf-pill on">Solutions mega-menu</span>
<span class="lf-pill on">Theme toggle</span>
<span class="lf-pill on">Shared footer routes</span>
</div>
<p style="margin:14px 0 0;color:var(--lf-text-2);font-size:14px;line-height:1.6">Open Platform or Solutions in the nav to preview mega-menus. Toggle theme with ◐. Footer links resolve to sibling artifacts.</p>
</div>
</div>
</div></section>
${demoCta()}
`
  return pageShell('Shell', body)
}

function platformHub() {
  const body = `
<section class="lf-hero-p"><div class="lf-wrap">
<div class="lf-eyebrow">Platform</div>
<h1 class="lf-h1">Modules for the whole <em>forwarding</em> stack.</h1>
<p class="lf-lede">Air, sea, NVOCC, land, customs, docs, warehouse, tracking, finance and reports — one ERP, not a patchwork of tools.</p>
<div class="lf-ctas"><a class="lf-btn lf-btn-primary" href="contact.dc.html">Book a Demo</a></div>
</div></section>
<section class="lf-section" style="border:0;padding-top:0"><div class="lf-wrap">
<div class="lf-filters" role="tablist" aria-label="Filter">
<button type="button" class="is-on">All</button>
<button type="button">Operations</button>
<button type="button">Business</button>
</div>
<div class="lf-cards">
${MODULES.map(
  (m) =>
    `<a class="lf-card" href="${m.href}"><span class="cat">${esc(m.cat)}</span><h3>${esc(m.name)}</h3><p>${esc(m.tagline)}</p></a>`,
).join('')}
</div>
</div></section>
${demoCta()}
`
  return pageShell('Platform', body, 'platform')
}

function solutionsHub() {
  const body = `
<section class="lf-hero-p"><div class="lf-wrap">
<div class="lf-eyebrow">Solutions</div>
<h1 class="lf-h1">Built for how <em>you</em> operate.</h1>
<p class="lf-lede">Forwarders, NVOCC operators, customs brokers, CFS, shippers, transporters and courier companies — each with a recommended Kingfisher stack.</p>
</div></section>
<section class="lf-section" style="border:0;padding-top:0"><div class="lf-wrap">
<div class="lf-cards">
${SOLUTIONS.map(
  (s) =>
    `<a class="lf-card" href="${s.href}"><span class="cat">Solution</span><h3>${esc(s.name)}</h3><p>${esc(s.tagline)}</p></a>`,
).join('')}
</div>
</div></section>
${demoCta()}
`
  return pageShell('Solutions', body, 'solutions')
}

function customersPage() {
  const stories = [
    ['Multi-modal forwarder', 'Replaced five trackers with one job file across air and sea.', 'mode'],
    ['Ocean consolidator', 'Voyage load lists and HBL status finally share a board.', 'mode'],
    ['Customs brokerage', 'Importers see holds without calling the desk.', 'outcome'],
    ['CFS operator', 'Receiving events feed the forwarder’s shipment timeline.', 'industry'],
    ['Regional courier', 'Consignment volume with job-level costing discipline.', 'industry'],
    ['Importer network', 'Fewer shadow trackers — status comes from the operator system.', 'outcome'],
  ]
  const body = `
<section class="lf-hero-p"><div class="lf-wrap">
<div class="lf-eyebrow">Customers</div>
<h1 class="lf-h1">Freight teams run their <em>operation</em> on Kingfisher.</h1>
<p class="lf-lede">From branch forwarders to NVOCC desks and customs brokers — see how operators unify jobs, documents and money.</p>
<div class="lf-stats">
<div class="lf-stat"><b>Multi-modal</b><span>Air · Sea · Land · Courier</span></div>
<div class="lf-stat"><b>1 job file</b><span>quotation to invoice</span></div>
<div class="lf-stat"><b>Tenant-ready</b><span>companies &amp; branches</span></div>
</div>
<div class="lf-logos">
<span>Forwarder Co</span><span>Ocean Line Desk</span><span>Brokerage Hub</span><span>CFS North</span><span>Courier Net</span><span>Trade House</span>
</div>
</div></section>
<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">Stories</div>
<h2 class="lf-h2">Real teams, real operating outcomes.</h2>
<div class="lf-filters"><button class="is-on" type="button">All</button><button type="button">By mode</button><button type="button">By outcome</button><button type="button">By industry</button></div>
<div class="lf-cards" style="margin-top:20px">
${stories.map(([t, p]) => `<article class="lf-story"><h3>${esc(t)}</h3><p>${esc(p)}</p></article>`).join('')}
</div>
</div></section>
<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">Before / after</div>
<h2 class="lf-h2">What changes when the job is the system of record.</h2>
<div class="lf-ba">
<article><h3>Before</h3><ul><li>Status lives in chat</li><li>Docs drift from the shipment</li><li>Finance rebuilds P&amp;L at month end</li></ul></article>
<article class="good"><h3>After</h3><ul><li>Milestones on the job</li><li>Documents attached once</li><li>Costing follows the shipment</li></ul></article>
</div>
</div></section>
<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">Security</div>
<h2 class="lf-h2">Tenant isolation and role-based access.</h2>
<p class="lf-sub">Companies, tenants and permissions keep forwarder networks governed — SuperAdmin, Tenant Admin and staff roles stay separated.</p>
<div class="lf-stats">
<div class="lf-stat"><b>RBAC</b><span>Users · roles · permissions</span></div>
<div class="lf-stat"><b>Tenants</b><span>Isolated operating companies</span></div>
<div class="lf-stat"><b>Audit</b><span>Operational accountability</span></div>
</div>
</div></section>
<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">FAQ</div>
<h2 class="lf-h2">Questions about Kingfisher customers</h2>
<div class="lf-faq">
<details><summary>Who uses Kingfisher?</summary><p>Freight forwarders, NVOCC operators, customs brokers, CFS/warehouse operators, transporters and courier companies — plus shippers working through those operators.</p></details>
<details><summary>What results do teams aim for?</summary><p>One job file per shipment, fewer status chases, cleaner documentation, and finance that does not rebuild ops from scratch.</p></details>
<details><summary>Can I speak to a reference?</summary><p>Reference conversations are arranged during evaluation after demos — ask via Contact.</p></details>
</div>
</div></section>
${demoCta()}
`
  return pageShell('Customers', body)
}

function pricingPage() {
  const body = `
<section class="lf-hero-p"><div class="lf-wrap">
<div class="lf-eyebrow">Pricing</div>
<h1 class="lf-h1">Pay for the modules you <em>switch on</em>.</h1>
<p class="lf-lede">Kingfisher is modular. Start with the modes you run today — add customs, warehouse or finance as you grow. Pricing scales with jobs per month, not truck telematics.</p>
<div class="lf-plans">
<button type="button">Starter</button>
<button type="button" class="is-on">Growth</button>
<button type="button">Enterprise</button>
<button type="button">Monthly</button>
<button type="button" class="is-on">Annual · −15%</button>
</div>
<div class="lf-ba" style="margin-top:28px">
<article>
<h3>Your monthly volume</h3>
<p style="margin:12px 0 0;font-size:13px;color:var(--lf-text-2)">Jobs / month</p>
<input type="range" min="50" max="5000" value="400" style="width:100%;margin-top:8px" aria-label="Jobs per month">
<p style="margin:16px 0 0;font-size:13px;color:var(--lf-text-2)">Modes in scope</p>
<div class="lf-pillrow" style="margin-top:8px">
<span class="lf-pill on">Air</span><span class="lf-pill on">Sea</span><span class="lf-pill">NVOCC</span><span class="lf-pill">Land</span><span class="lf-pill on">Customs</span>
</div>
<p style="margin:16px 0 0;font-size:13px;color:var(--lf-text-2)">Modules</p>
<div class="lf-pillrow" style="margin-top:8px">
${MODULES.slice(0, 6)
  .map((m, i) => `<span class="lf-pill${i < 4 ? ' on' : ''}">${esc(m.name)}</span>`)
  .join('')}
</div>
</article>
<article class="lf-pricebox" style="margin:0">
<div class="lf-eyebrow">Indicative Growth · annual</div>
<div class="big">Talk to sales</div>
<p style="margin:10px 0 0;color:var(--lf-text-2);font-size:14px;line-height:1.5">List pricing is scoped to your job volume, modes and module mix. Design artifact shows the calculator pattern — commercial numbers finalize in scoping.</p>
<ul style="margin:16px 0 0;padding:0;list-style:none;font-size:13px;color:var(--lf-text-2);display:flex;flex-direction:column;gap:8px">
<li>Platform modules · selected stack</li>
<li>Jobs / month soft caps by plan</li>
<li>Annual prepay discount pattern</li>
<li>One-time onboarding scoped separately</li>
</ul>
<a class="lf-btn lf-btn-primary" style="margin-top:18px" href="contact.dc.html">Get this quote</a>
</article>
</div>
</div></section>
<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">Compare</div>
<h2 class="lf-h2">Every capability, side by side.</h2>
<table class="lf-table">
<thead><tr><th>Feature</th><th>Starter</th><th>Growth</th><th>Enterprise</th></tr></thead>
<tbody>
<tr><td>Core job modules</td><td>Up to 4</td><td>Up to 8</td><td>Full stack</td></tr>
<tr><td>Modes</td><td>1–2</td><td>Multi-modal</td><td>Multi-modal + NVOCC</td></tr>
<tr><td>Branches / users</td><td>Standard</td><td>Expanded</td><td>Custom</td></tr>
<tr><td>Finance &amp; Accounts</td><td>Add-on</td><td>Included option</td><td>Included</td></tr>
<tr><td>SSO / advanced admin</td><td>—</td><td>Optional</td><td>Included</td></tr>
<tr><td>Onboarding</td><td>Guided</td><td>Guided + training</td><td>Dedicated</td></tr>
</tbody>
</table>
</div></section>
<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">FAQ</div>
<h2 class="lf-h2">Pricing questions, answered straight.</h2>
<div class="lf-faq">
<details open><summary>How is Kingfisher priced?</summary><p>By plan tier and the modules you switch on, scaled to monthly job volume and modes — not per GPS device or truck telematics.</p></details>
<details><summary>Do you charge per shipment?</summary><p>Volume soft caps and job bands are part of plan design. Exact unit economics are confirmed in scoping.</p></details>
<details><summary>Is there a free trial?</summary><p>Evaluations typically run through a guided demo and scoped pilot — contact solutions for the right path.</p></details>
<details><summary>Can we add modules mid-year?</summary><p>Yes. Modular stacks are meant to grow with your operation.</p></details>
<details><summary>On-premise?</summary><p>Deployment options (cloud / private) are discussed for Enterprise scopes.</p></details>
</div>
</div></section>
${demoCta('Talk to a solutions engineer.', 'Volume pricing, multi-branch rollouts and module mixes — if your setup does not fit a tier, we will scope a plan that does.')}
`
  return pageShell('Pricing', body)
}

function aboutPage() {
  const body = `
<section class="lf-hero-p"><div class="lf-wrap">
<div class="lf-eyebrow">About</div>
<h1 class="lf-h1">We're building the ERP for <em>freight forwarders</em>.</h1>
<p class="lf-lede">One platform for quotations, jobs, documentation, customs, tracking, warehouse, finance and accounts — because forwarding should not run on spreadsheets and WhatsApp.</p>
<div class="lf-stats">
<div class="lf-stat"><b>18</b><span>Modules in the stack</span></div>
<div class="lf-stat"><b>Multi-modal</b><span>Air · Sea · NVOCC · Land</span></div>
<div class="lf-stat"><b>Tenant model</b><span>Company → Tenant → Users</span></div>
</div>
</div></section>
<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">Note</div>
<h2 class="lf-h2">Operators deserved a system of record.</h2>
<p class="lf-sub">The average forwarder still juggles mode tools, document folders and a finance export that never quite matches ops. Kingfisher closes the loop from enquiry to invoice on one job file — modular, permissioned, and built for how freight desks actually work.</p>
</div></section>
<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">Why we exist</div>
<h2 class="lf-h2">Freight teams don't lack tools. They lack one truth.</h2>
<p class="lf-sub">By the time status, paperwork and cost agree, the shipment has already moved. Kingfisher makes the job the shared object across sales, ops, docs, customs and finance.</p>
</div></section>
<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">How we work</div>
<div class="lf-feats">
<div class="lf-feat"><h3>Operate, then optimise</h3><p>Earn the right to advise by understanding desk reality — cut-offs, agents, and messy exceptions.</p></div>
<div class="lf-feat"><h3>Customer truth wins</h3><p>Forwarder feedback beats slideware. We ship for the operator.</p></div>
<div class="lf-feat"><h3>Default to clarity</h3><p>Clear modules, clear permissions, clear job ownership.</p></div>
<div class="lf-feat"><h3>Small teams, sharp mandates</h3><p>Own a workflow end-to-end instead of attending meetings about it.</p></div>
</div>
</div></section>
<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">Timeline</div>
<h2 class="lf-h2">Building in public chapters</h2>
<div class="lf-timeline">
<article><b>Foundation</b><div><h3 style="margin:0;font-size:16px">Multi-modal job model</h3><p class="lf-sub" style="margin-top:6px">Air, sea, NVOCC and land as first-class operational jobs.</p></div></article>
<article><b>Docs</b><div><h3 style="margin:0;font-size:16px">Documentation &amp; customs</h3><p class="lf-sub" style="margin-top:6px">Paperwork and clearance status attached to the shipment.</p></div></article>
<article><b>Money</b><div><h3 style="margin:0;font-size:16px">Finance &amp; accounts</h3><p class="lf-sub" style="margin-top:6px">Job costing and invoicing without month-end archaeology.</p></div></article>
<article><b>Now</b><div><h3 style="margin:0;font-size:16px">Platform depth</h3><p class="lf-sub" style="margin-top:6px">Roles, tenants, reporting and operator solutions across the network.</p></div></article>
</div>
</div></section>
<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">Team</div>
<h2 class="lf-h2">Product, ops and engineering for freight.</h2>
<p class="lf-sub">Design artifact placeholder for team portraits and locations — keep tone operator-serious, not startup-cute.</p>
<div class="lf-pillrow" style="margin-top:18px">
<span class="lf-pill on">Product</span><span class="lf-pill on">Engineering</span><span class="lf-pill on">Solutions</span><span class="lf-pill on">Customer success</span>
</div>
</div></section>
${demoCta()}
`
  return pageShell('About', body)
}

function careersPage() {
  const body = `
<section class="lf-hero-p"><div class="lf-wrap">
<div class="lf-eyebrow">Careers</div>
<h1 class="lf-h1">Help us rewire how <em>forwarders</em> operate.</h1>
<p class="lf-lede">Build product for people who move freight for a living — desks, cut-offs, documents and margins included.</p>
<div class="lf-stats">
<div class="lf-stat"><b>Freight-native</b><span>Domain-heavy product work</span></div>
<div class="lf-stat"><b>Multi-city</b><span>Placeholder hubs</span></div>
<div class="lf-stat"><b>Open</b><span>Roles listed below</span></div>
</div>
</div></section>
<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">What you get</div>
<div class="lf-feats">
<div class="lf-feat"><h3>Meaningful ownership</h3><p>Own workflows that operators feel every day — not vanity dashboards.</p></div>
<div class="lf-feat"><h3>Learn the domain</h3><p>Time with forwarding, NVOCC and brokerage reality.</p></div>
<div class="lf-feat"><h3>Health &amp; support</h3><p>Placeholder benefits block for the React port.</p></div>
<div class="lf-feat"><h3>Team offsites</h3><p>Build trust in person — placeholder for culture detail.</p></div>
</div>
</div></section>
<section class="lf-section"><div class="lf-wrap">
<div class="lf-eyebrow">Open roles</div>
<h2 class="lf-h2">Find your spot</h2>
<div class="lf-stage">
<div class="lf-stage-top"><b>No open roles listed in this artifact</b><span>Update when hiring</span></div>
<p style="margin:14px 0 0;color:var(--lf-text-2);font-size:14px;line-height:1.6">We still want to hear from great people. Write to <a href="contact.dc.html">[careers email]</a> with what you build and why freight.</p>
</div>
</div></section>
${demoCta('Build with us.', 'Whether you are exploring roles or partnering with Kingfisher, start a conversation.')}
`
  return pageShell('Careers', body)
}

function contactPage() {
  const body = `
<section class="lf-hero-p"><div class="lf-wrap">
<div class="lf-eyebrow">Contact</div>
<h1 class="lf-h1">Tell us what you're <em>moving</em>.</h1>
<p class="lf-lede">A solutions teammate will get back within one business day — demos, partnerships, support and press.</p>
</div></section>
<section class="lf-section" style="border:0;padding-top:0"><div class="lf-wrap lf-cta-grid">
<form class="lf-form" aria-label="Contact Kingfisher" onsubmit="event.preventDefault();alert('Design artifact — wire to /api/leads in React port.');">
<label>Full name<input required placeholder="Your name"></label>
<label>Work email<input type="email" required placeholder="you@yourcompany.com"></label>
<label>Company<input required placeholder="Freight company"></label>
<label>Monthly jobs (approx)<select><option>Under 100</option><option>100–500</option><option>500–2,000</option><option>2,000+</option></select></label>
<label>How can we help?<textarea placeholder="Modes, branches, timeline…"></textarea></label>
<button class="lf-btn lf-btn-primary" type="submit">Send message</button>
</form>
<div>
<div class="lf-eyebrow">Channels</div>
<div class="lf-feats" style="margin-top:12px;grid-template-columns:1fr">
<div class="lf-feat"><h3>Sales</h3><p>Talk to a solutions engineer. <a href="#">[sales email]</a></p></div>
<div class="lf-feat"><h3>Customer support</h3><p>For existing customers. <a href="#">[support email]</a></p></div>
<div class="lf-feat"><h3>Partnerships</h3><p>SI, reseller and tech partners. <a href="#">[partners email]</a></p></div>
<div class="lf-feat"><h3>Press</h3><p>Media and analyst inquiries. <a href="#">[press email]</a></p></div>
</div>
<div class="lf-eyebrow" style="margin-top:28px">Offices</div>
<div class="lf-steps" style="margin-top:12px">
<div class="lf-step"><span>HQ</span><h3>[City]</h3><p>[Street address placeholder]</p></div>
<div class="lf-step"><span>Ops</span><h3>[City]</h3><p>[Street address placeholder]</p></div>
<div class="lf-step"><span>Phone</span><h3>[phone number]</h3><p>Business hours placeholder</p></div>
</div>
</div>
</div></section>
`
  return pageShell('Contact', body)
}

// Write all files
const outputs = [
  ['_shell.dc.html', shellPage()],
  ['platform.dc.html', platformHub()],
  ['solutions.dc.html', solutionsHub()],
  ...MODULES.map((m) => [m.file, modulePage(m)]),
  ...SOLUTIONS.map((s) => [s.file, solutionPage(s)]),
  ['customers.dc.html', customersPage()],
  ['pricing.dc.html', pricingPage()],
  ['about.dc.html', aboutPage()],
  ['careers.dc.html', careersPage()],
  ['contact.dc.html', contactPage()],
]

for (const [name, html] of outputs) {
  writeFileSync(join(__dirname, name), html, 'utf8')
  console.log('wrote', name)
}
console.log(`Done — ${outputs.length} artifacts`)
