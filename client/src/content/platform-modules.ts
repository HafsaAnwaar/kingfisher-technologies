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
  /** Shown on hub/module pages when the surface is not a full first-class ERP module. */
  badge?: string
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
    tagline:
      'Import & export air shipments — booking, AWB, flight milestones, and delivery on one job file.',
    outcome:
      'House + Master jobs, HAWB / MAWB, flight milestones, pre-alert, Track & Trace, costing and invoice on one continuum.',
    stageKind: 'routeMap',
    stageTitle: 'Air job board',
    stageSub: 'AE-24091 · DXB → LHR · Booking confirmed',
    stagePills: ['Air Export', 'Air Import', 'HAWB / MAWB', 'Flight milestones', 'Pre-alert', 'POD'],
    before: [
      'AWB numbers live in email threads and WhatsApp groups',
      'Export and import teams keep separate trackers',
      'Customer asks for status, ops opens three tools to answer',
    ],
    after: [
      'One air job with milestones, docs and costing attached',
      'HAWB / MAWB status visible to sales and CS in real time',
      'Track & Trace plus POD close-out on the same file',
    ],
    steps: [
      [
        'Quote → book job',
        'Capture enquiry or convert an approved air quotation into an Air Export or Air Import job with parties, chargeable weight and routing.',
      ],
      [
        'Confirm flight & space',
        'Complete airline, flight number, space confirmation and cargo acceptance on the job.',
      ],
      [
        'Issue HAWB / MAWB',
        'Manage house and master air waybills; generate pre-alert and operational documents from the job.',
      ],
      [
        'Flight milestones',
        'Update booked → cargo accepted → departed → in flight → arrived (import: arrival → cleared → out for delivery).',
      ],
      [
        'Track → invoice & deliver',
        'Use job Track & Trace, post costs and invoices, confirm POD and close the job.',
      ],
    ],
    features: [
      ['Air Export & Import', 'Separate export and import job hubs with mode-specific fields.'],
      ['House + Master jobs', 'HAWB / MAWB workflows on the same operational file.'],
      ['Flight milestones', 'Booked through delivered with ownership and Track & Trace.'],
      ['Pre-alert → costing → invoice', 'Docs, P&L and invoices stay on the air job.'],
    ],
    metric: '1 job file',
    metricSub: 'Warehouse → origin airport → airline → destination → consignee (POD)',
    quote: 'Our air desk stopped chasing AWB updates in chat. Everything sits on the job.',
    quoteBy: 'Operations Lead · Multi-modal forwarder',
    related: ['documentation', 'tracking', 'customs', 'finance-accounts'],
    faqs: [
      ['Does Kingfisher support both air export and import?', 'Yes. Air Freight covers export and import job workflows, bookings, AWB paperwork and milestones in one module.'],
      ['Can sales see air job status?', 'Yes. Status and milestones are shared across teams linked to the same job.'],
      ['How do AWBs connect to documentation?', 'Documentation holds the paperwork; Air Freight owns the operational job. Both point at the same shipment record.'],
      ['Is chargeable weight handled?', 'Jobs capture chargeable weight and related commercial fields so costing and quotations stay aligned.'],
      ['Can we run multi-leg air moves?', 'Milestones and routing fields support the legs your team operates under one job file.'],
      ['Does this replace a dedicated AWB portal?', 'Carrier portals remain for transmission; Kingfisher keeps the job, docs and money together.'],
    ],
  },
  {
    slug: 'sea-freight',
    name: 'Sea Freight',
    footerLabel: 'Sea FCL & LCL',
    cat: 'Operations',
    tagline:
      'Full-container and LCL ocean operations — vessels, containers, BL, VGM, cut-offs, customs, and delivery.',
    outcome: 'Booking, containers, HBL / MBL, VGM, cut-offs, Arrival Notice, DO, costing — FCL and LCL on one platform.',
    stageKind: 'routeMap',
    stageTitle: 'Sea FCL job',
    stageSub: 'SE-11802 · CNSHA → PKKHI · Container gated in',
    stagePills: ['FCL Export', 'FCL Import', 'LCL Export', 'LCL Import', 'Containers', 'BL', 'VGM', 'DO'],
    before: [
      'FCL and LCL live in different sheets',
      'Vessel ETAs updated by whoever last checked the line portal',
      'BL drafts float outside the job',
    ],
    after: [
      'FCL and LCL export/import jobs with container and vessel context',
      'VGM, cut-offs, Arrival Notice and DO on the operational file',
      'Customs handoff and inland haul when needed — same continuum',
    ],
    steps: [
      [
        'Open the ocean job',
        'Convert an approved sea quotation or create Sea Export / Import FCL or LCL from booking or inbound advice.',
      ],
      [
        'Vessel, containers & cut-offs',
        'Confirm POL / POD, vessel, voyage, ETD / ETA, containers, seals, stuffing plan and VGM.',
      ],
      [
        'BL & Arrival Notice',
        'Issue HBL / MBL and export packs; on import manage Arrival Notice, discharge and CY / CFS status.',
      ],
      [
        'Customs & DO',
        'File or track customs on the job or via Customs Clearance; issue Delivery Order; arrange inland haul if needed.',
      ],
      [
        'Cost, invoice & close',
        'Prorate LCL costs when used; invoice from the job; confirm delivery / empty return and close.',
      ],
    ],
    features: [
      ['FCL & LCL · Export & Import', 'Four ocean paths with mode-aware fields on one platform.'],
      ['Containers · VGM · Cut-offs', 'Equipment and sailing data stay on the job.'],
      ['HBL / MBL · Arrival Notice · DO', 'Ocean instruments linked to Documentation.'],
      ['CFS via LCL / warehouse', 'Consolidation and de-stuff handoffs without a separate CFS product claim.'],
    ],
    metric: 'FCL + LCL',
    metricSub: 'Container → CY → vessel → POD → customs → delivery',
    quote: 'We finally stopped maintaining one sheet for FCL and another for LCL.',
    quoteBy: 'Sea Ops Manager · Regional forwarder',
    related: ['nvocc', 'customs', 'documentation', 'tracking'],
    faqs: [
      ['Do you support both FCL and LCL?', 'Yes — FCL and LCL import and export with mode-specific operational fields.'],
      ['Where do BL drafts live?', 'Operational status sits on the Sea job; Documentation manages BL/HBL paperwork against that job.'],
      ['Can NVOCC voyages link here?', 'NVOCC is voyage-centric; Sea Freight is forwarder ocean jobs. Teams often run both.'],
      ['How are vessel ETAs tracked?', 'Vessel and voyage fields plus milestones keep ETA updates on the job.'],
      ['Is container tracking included?', 'Container IDs and movement milestones live on the job; pair with Shipment Tracking for customer-facing status.'],
      ['Does finance see ocean costs?', 'Yes. Job costing and vendor costs flow into Finance and Accounts from the same job.'],
    ],
  },
  {
    slug: 'nvocc',
    name: 'NVOCC',
    cat: 'Operations',
    tagline: 'Operate as the carrier — voyages, bookings, load lists, HBL, space, and voyage profitability.',
    outcome: 'Voyage control, enquiry & booking, load list, HBL, pre-alert / DO and voyage P&L on one board.',
    stageKind: 'voyageHud',
    stageTitle: 'Voyage control',
    stageSub: 'VY-440 · CMA CGM · Karachi cut-off Tue 18:00',
    stagePills: ['Voyages', 'Bookings', 'Load list', 'HBL', 'Space / utilization', 'Voyage P&L'],
    before: [
      'Load lists in Excel, HBLs in Word, P&L nowhere',
      'Pre-alerts sent late because nobody owns the voyage view',
      'Profitability calculated after the voyage sails',
    ],
    after: [
      'Voyage board with bookings and load list',
      'HBL / pre-alert / DO status on the voyage',
      'Voyage P&L visible while bookings are still open',
    ],
    steps: [
      [
        'Open the voyage',
        'Maintain vessel / voyage master — ports, ETD / ETA and capacity context; capture NVOCC enquiries and tariffs.',
      ],
      [
        'Bookings → load list',
        'Create bookings (portal accept where enabled), convert to NVOCC jobs, and build the load list by vessel, voyage and container.',
      ],
      [
        'HBL · pre-alert · DO',
        'Issue HBL, pre-alerts and delivery orders from the job; track voyage execution and milestones.',
      ],
      [
        'Voyage P&L & reports',
        'Review voyage / job P&L, invoice, close jobs and run NVOCC module reports.',
      ],
    ],
    features: [
      ['Voyage control', 'Treat the voyage as the operating spine for NVOCC work.'],
      ['Enquiry · booking · load list', 'Confirmed, pending and cut-off risk in one view.'],
      ['HBL · pre-alert · DO', 'Documentation steps owned against voyage context.'],
      ['Voyage P&L', 'Revenue and cost while bookings are open — not an airline-style space RMS.'],
    ],
    metric: 'Voyage P&L',
    metricSub: 'Space held → HBL draft → load list locked → P&L live → pre-alerts queued',
    quote: 'Our NVOCC desk finally manages voyages and paperwork from one board.',
    quoteBy: 'NVOCC Manager · Ocean consolidator',
    related: ['sea-freight', 'documentation', 'finance-accounts', 'reports'],
    faqs: [
      ['Is NVOCC separate from Sea Freight?', 'Yes. NVOCC is voyage-centric for consolidators; Sea Freight is forwarder job-centric.'],
      ['Can we track HBL issuance?', 'HBL and related docs are managed with Documentation against the voyage and bookings.'],
      ['Do load lists export?', 'Load lists live in-platform as the operational source.'],
      ['How is voyage profit calculated?', 'Revenue and costs attached to voyage bookings roll into voyage-level profitability views.'],
      [
        'Is this advanced space utilization / yield?',
        'Kingfisher covers voyage control, load lists and voyage P&L — not airline-style space revenue management.',
      ],
      ['Who should use this module?', 'NVOCC operators and forwarders running consolidation voyages with HBL issuance.'],
    ],
  },
  {
    slug: 'land-courier',
    name: 'Land & Courier',
    cat: 'Operations',
    tagline: 'Road transport and courier movements — pickup, assignment, in-transit tracking, and POD.',
    outcome:
      'Pickup, vehicle / trucker assignment or transport handoff, in transit, border when used, delivery and POD on the job.',
    stageKind: 'podRun',
    stageTitle: 'Land job',
    stageSub: 'LD-9021 · Karachi → Lahore · Out for delivery',
    stagePills: ['Road freight', 'Courier', 'Pickup', 'In transit', 'POD', 'Transport handoff'],
    before: [
      'Land moves tracked only in a driver WhatsApp group',
      'Courier consignments never hit finance cleanly',
      'No shared milestone language with international jobs',
    ],
    after: [
      'Land and courier jobs with parties, route and status',
      'Transport request handoff when the move leaves the freight desk',
      'POD captured on the same job file as costing and invoice',
    ],
    steps: [
      [
        'Create the road / courier job',
        'Raise from quote or department hub; set origin / destination, dates, freight terms and vehicle type.',
      ],
      [
        'Assign or hand off',
        'Assign trucker, driver, vehicle and trailer — or pass the job to Transport handoff.',
      ],
      [
        'Pickup → in transit',
        'Confirm pickup; update in transit; for cross-border moves capture declaration / HS / value and border milestones.',
      ],
      [
        'Deliver · POD · close',
        'Deliver cargo; capture POD (date, received by, delivered by, remarks); cost, invoice and close.',
      ],
    ],
    features: [
      ['Road freight & courier jobs', 'Domestic and cross-border land moves as first-class jobs.'],
      ['Assignment or transport handoff', 'Vehicle / trucker on the job — not a full fleet TMS.'],
      ['Pickup · in transit · POD', 'Shared milestones with international modes.'],
      ['Costing on the same file', 'Haulage and courier charges feed Finance.'],
    ],
    metric: 'One model',
    metricSub: 'Warehouse → pickup → in transit → border → delivery → POD',
    quote: 'Domestic trucking finally shows up next to our ocean jobs, same discipline.',
    quoteBy: 'Branch Manager · Forwarder network',
    related: ['tracking', 'warehouse', 'documentation', 'finance-accounts'],
    faqs: [
      [
        'Is this a full fleet TMS?',
        'No. Position as land & courier jobs + transport handoff — not a fleet TMS / routing engine.',
      ],
      ['Is Land separate from Courier?', 'Both share the job model with fields suited to trucking vs consignments.'],
      ['Can transporters be vendors?', 'Yes. Carriers and haulage partners tie into job costs via vendor parties and the vendor portal.'],
      ['Does this cover last-mile only?', 'It covers domestic land and courier jobs your operation runs, not a consumer parcel marketplace.'],
      ['How does tracking work?', 'Use Shipment Tracking milestones on the land/courier job.'],
      ['Is POD captured?', 'Delivery milestones and documentation hold proof artifacts against the job.'],
    ],
  },
  {
    slug: 'customs',
    name: 'Customs Clearance',
    cat: 'Operations',
    tagline: 'Declarations, exams, holds, and release — clearance stages on the operational shipment.',
    outcome: 'Docs checklist, HS classify, declaration, duty, exam / hold, cleared, DO and invoice on one clearance file.',
    stageKind: 'clearance',
    stageTitle: 'Clearance desk',
    stageSub: 'CC-3310 · Import · Under examination',
    stagePills: ['Declaration', 'Exam / Hold', 'Duty', 'Cleared', 'DO'],
    before: [
      'Clearance status only in the broker’s private tracker',
      'Ops learns about holds when the customer calls',
      'Documents re-requested because versions diverge',
    ],
    after: [
      'Clearance workflow on the shipment or dedicated CC job',
      'Holds and examination status visible to ops, CS and portal invitees',
      'Duty, release / DO and agency invoice on the same continuum',
    ],
    steps: [
      [
        'Open the clearance file',
        'Create a Customs Clearance job or attach clearance to a freight job; complete the documents checklist.',
      ],
      [
        'Classify & declare',
        'Enter cargo lines, classify HS codes, prepare and file the customs declaration (BOE / entry).',
      ],
      [
        'Duty · exam · hold',
        'Assess duties, raise payment request, mark duty paid; handle examination, queries and holds if raised.',
      ],
      [
        'Clear · DO · invoice',
        'Clear the shipment, issue release / Delivery Order, generate customs agency invoice and close.',
      ],
    ],
    features: [
      ['Docs checklist · HS classify', 'Clearance prep tied to Documentation.'],
      ['Declaration · duty · exam / hold', 'Stages visible beyond the customs desk.'],
      ['Cleared · DO', 'Release into delivery milestones and Land & Courier when needed.'],
      ['Portal visibility', 'Invited customers can follow CC progress where enabled.'],
    ],
    metric: 'Shared status',
    metricSub: 'Job → declaration → exam / hold → release → DO → delivery handoff',
    quote: 'When a shipment went into exam, sales knew before the consignee called us.',
    quoteBy: 'Customs Manager · Brokerage + forwarding',
    related: ['documentation', 'sea-freight', 'air-freight', 'tracking'],
    faqs: [
      ['Is this a filing gateway?', 'Kingfisher orchestrates clearance work and status. Transmission to customs systems depends on local integration.'],
      ['Can customs brokers use Kingfisher alone?', 'Yes. Customs Brokers is a first-class solution persona with clearance-centric modules.'],
      ['How do holds surface?', 'Clearance status and notes sit on the job so other roles see blockers without a separate chat.'],
      ['Does it work with air and sea?', 'Clearance links to the operational job regardless of mode.'],
      ['Where do supporting docs live?', 'Documentation holds the files; Customs Clearance tracks the process against them.'],
      ['Can we report clearance cycle time?', 'Reports & Analytics can include operational timing once milestones are maintained.'],
    ],
  },
  {
    slug: 'documentation',
    name: 'Documentation',
    cat: 'Operations',
    tagline:
      'Shipment paperwork, BL / AWB workflows, pre-alerts, EDI, and operational uploads — on the job and in one docs hub.',
    outcome:
      'Job document packs, pre-alerts, regional EDI, bulk uploads, charge templates and closed-job DO / BL updates.',
    stageKind: 'docPack',
    stageTitle: 'Doc pack',
    stageSub: 'SE-11802 · Draft BL · Pre-alert queued',
    stagePills: ['BL / AWB', 'Pre-alert', 'EDI', 'Bulk uploads', 'Charge templates', 'Closed-job updates'],
    before: [
      'Docs scattered across email, desktop folders and WhatsApp',
      'Wrong draft sent to the line or the customer',
      'No checklist of what is still missing before cut-off',
    ],
    after: [
      'Document packs and checklists per job',
      'Pre-alerts and regional EDI from one Documentation hub',
      'Bulk ops updates and closed-job DO / BL corrections without reopening chaos',
    ],
    steps: [
      [
        'Open docs on the job',
        'From the live job, open Documents and section files for the shipment set.',
      ],
      [
        'Generate mode packs',
        'Produce HAWB, MAWB, HBL, MBL, Arrival Notice, DO, VGM, packing list, commercial invoice, POD and labels as needed.',
      ],
      [
        'Pre-alert & EDI',
        'Send pre-alerts; run regional EDI / compliance tools (BOE, Bayan, CCN, CGM, eQO, IAL, UAE MPCI, etc.).',
      ],
      [
        'Bulk ops & templates',
        'Bulk-update container numbers, transport charges, truck positions or tracking ingest; apply charge templates / bulk cost.',
      ],
      [
        'Closed-job updates & reports',
        'Update DO or BL status on closed jobs when required; review Documentation ops reports.',
      ],
    ],
    features: [
      ['BL / AWB on the job', 'Ocean and air instruments tracked against the shipment.'],
      ['Pre-alert · EDI', 'Operational send status plus regional compliance tooling.'],
      ['Bulk uploads · charge templates', 'Ops data and cost entry without spreadsheet sprawl.'],
      ['Closed-job DO / BL updates', 'Correct instruments after close without a parallel tracker.'],
    ],
    metric: '0 orphan docs',
    metricSub: 'every pack linked to a shipment job',
    quote: 'We cut “which BL is final?” messages to nearly zero.',
    quoteBy: 'Documentation Lead · Ocean forwarder',
    related: ['air-freight', 'sea-freight', 'nvocc', 'customs'],
    faqs: [
      ['Is this a DMS like SharePoint?', 'It is operational documentation on the freight job — not a general file share.'],
      ['Can we store customer invoices?', 'Commercial and operational docs attach to the job; Finance handles billing documents.'],
      ['Who can edit drafts?', 'Access follows Administration & Access permissions by role.'],
      ['Does it cover HBL and HAWB?', 'Yes — against NVOCC, air and sea jobs.'],
      ['How do pre-alerts work?', 'Pre-alert status is tracked on the job so ops knows what has been sent.'],
      ['Can CS download packs?', 'Authorized roles access job documentation without ops forwarding email attachments.'],
    ],
  },
  {
    slug: 'warehouse',
    name: 'Warehouse',
    cat: 'Operations',
    tagline: 'Receiving, handling, inventory, and release — warehouse / CFS activity connected to the freight job.',
    outcome: 'Gate-in, ASN → GRN, inventory, GDO / GDN, storage charges and onward dispatch on the job continuum.',
    stageKind: 'yardGrid',
    stageTitle: 'Warehouse activity',
    stageSub: 'WH-778 · Cartons received · Putaway pending',
    stagePills: ['Gate-in', 'Handling', 'Inventory', 'GDO', 'Storage', 'Onward dispatch'],
    before: [
      'Warehouse notes never make it back to the job file',
      'CFS inventory and forwarding ops disagree on counts',
      'Demurrage conversations start without a timeline',
    ],
    after: [
      'ASN → GRN → stock lots visible to ops',
      'GDO / GDN and storage charges linked to costing',
      'Release into Land & Courier or consignee delivery on the same continuum',
    ],
    steps: [
      [
        'Configure & ASN',
        'Set warehouse settings, SKUs / items and storage rules; create an ASN for expected inbound cargo.',
      ],
      [
        'Gate-in → GRN',
        'Unload / gate-in; post or create GRN into stock lots; manage on-hand stock, lots and transfers.',
      ],
      [
        'GDO · storage · costing',
        'Create GDO for outbound dispatch (customer GDN where portal-enabled); calculate storage charges and draft invoices.',
      ],
      [
        'Onward dispatch',
        'Release cargo to road delivery or consignee; link handling / storage back to freight or warehouse job costing.',
      ],
    ],
    features: [
      ['ASN → GRN → inventory', 'Inbound truth connected to the job.'],
      ['GDO / GDN · storage', 'Outbound and storage charges without a second WMS claim.'],
      ['CFS via LCL / warehouse', 'Consolidation and de-stuff through job workflows — not a standalone CFS SKU.'],
      ['Onward to Land & Courier', 'Release into road delivery milestones.'],
    ],
    metric: 'One timeline',
    metricSub: 'Gate-in → receiving → putaway → pick → release → onward dispatch',
    quote: 'Our CFS floor and forwarding desk finally argue less about what was received.',
    quoteBy: 'Warehouse Supervisor · CFS operator',
    related: ['land-courier', 'tracking', 'sea-freight', 'finance-accounts'],
    faqs: [
      [
        'Is this a full WMS?',
        'Core warehouse handling connected to jobs. Advanced putaway rules remain partial — do not sell as enterprise WMS.',
      ],
      ['Can CFS operators use it?', 'Yes — via LCL / warehouse workflows, not a separate CFS product.'],
      ['Does inventory sync to finance?', 'Handling and storage costs can feed job costing; valuation follows your finance setup.'],
      ['How does it relate to tracking?', 'Warehouse events feed the operational timeline customers and CS care about.'],
      ['Multi-warehouse?', 'Organization and masters configure locations your tenant operates.'],
      ['Barcode scanning?', 'Field capture depends on implementation; activity stays job-linked.'],
    ],
  },
  {
    slug: 'general-trading',
    name: 'General Trading',
    footerLabel: 'Trading',
    badge: 'Integration',
    cat: 'Operations',
    tagline:
      'Connect external trading quote requests to freight quotations and jobs — commercial intent flows into logistics on one continuum.',
    outcome:
      'Quote-request integration (KFPP / KFQA), sync to quotations, convert to freight jobs, then standard docs and settlement.',
    stageKind: 'docPack',
    stageTitle: 'Trading bridge',
    stageSub: 'KFQA · Quote request · Freight handoff',
    stagePills: ['Quote-request bridge', 'Quotation', 'Freight job', 'Documents', 'Settlement'],
    before: [
      'Trading quote requests never reach the freight desk cleanly',
      'Ops re-keys commercial intent into a separate job tool',
      'Docs and settlement diverge from the trading request',
    ],
    after: [
      'Inbound quote requests sync into staff quotations',
      'Approved quotes convert to air, sea or land jobs',
      'Documentation, tracking, costing and settlement run in standard modules',
    ],
    steps: [
      [
        'Enable the bridge',
        'Turn on the General Trading quote-request connection in tenant admin.',
      ],
      [
        'Sync & map to quotation',
        'Pull inbound commercial quote requests from the trading site / provider; map each into a staff quotation.',
      ],
      [
        'Approve → convert to job',
        'Customer / sales approve the freight quote; convert to the correct operations job (air, sea, land, etc.).',
      ],
      [
        'Execute the continuum',
        'Run documentation, tracking, costing and settlement in standard modules — not a native buy/sell GT ERP.',
      ],
    ],
    features: [
      ['Quote-request bridge', 'KFPP / KFQA intake — not a full merchandising ERP.'],
      ['Sync → quotation', 'Commercial intent becomes a priced freight quote.'],
      ['Convert to freight job', 'Air, sea, land and other modes on the same continuum.'],
      ['Docs & settlement', 'Standard Documentation and Finance after the job exists.'],
    ],
    metric: 'Bridge',
    metricSub: 'Quote request → quotation → freight job → docs & settlement',
    quote: 'We stopped re-typing trading quote requests into the freight desk.',
    quoteBy: 'Ops Lead · Forwarder with trading partners',
    related: ['documentation', 'sea-freight', 'air-freight', 'finance-accounts'],
    faqs: [
      [
        'Is this a full General Trading ERP?',
        'No. Prefer “integration” language. Native buy/sell merchandising is not claimed equal to Air/Sea until a GT module ships.',
      ],
      [
        'What can we demo today?',
        'Admin quote-request intake into quotations and jobs — not a buy/sell inventory suite.',
      ],
      [
        'Does it replace trading software?',
        'It hands commercial requests into Kingfisher logistics. Deep GT stays with your trading stack or roadmap.',
      ],
      [
        'How do docs and finance connect?',
        'Once a freight job exists, Documentation, Tracking, Finance and Accounts work like other modes.',
      ],
      [
        'Who is this for?',
        'Forwarders and tenants that receive trading quote requests and need a clean path into Kingfisher jobs.',
      ],
      [
        'Will a native GT module ship?',
        'Treat native General Trading as roadmap until product ships it.',
      ],
    ],
  },
  {
    slug: 'tracking',
    name: 'Shipment Tracking',
    cat: 'Operations',
    tagline: 'One status story for ops, CS, and customers — milestones, movement, and delivery progress.',
    outcome:
      'Job Track & Trace, CS tracking, Customer Portal track, public track / widget, and POD close-out.',
    stageKind: 'liveTrack',
    stageTitle: 'Live milestones',
    stageSub: 'AE-24091 · Departed DXB · Next: Arrive LHR',
    stagePills: ['Milestones', 'Live track', 'Portal', 'Public track', 'POD'],
    before: [
      'CS calls ops; ops calls the agent; nobody has the same answer',
      'Customers get conflicting ETAs from sales and operations',
      'Exceptions discovered only when delivery fails',
    ],
    after: [
      'Ops updates milestones once on the job',
      'CS, portal and public track share the same reference',
      'POD closes the continuum; delays surface in ops reports',
    ],
    steps: [
      [
        'Update milestones on the job',
        'Ops maintain shipment status and the live timeline (map when Maps is configured) on Track & Trace.',
      ],
      [
        'CS & portal visibility',
        'Customer Service monitors tracking desks; invited customers track on the Customer Portal.',
      ],
      [
        'Public track / ingest',
        'Share public Track or embeddable widget; ingest external positions (e.g. air MAWB track, tracking file upload) where used.',
      ],
      [
        'POD & exceptions',
        'Close with POD / delivery acknowledgement; surface delays in operations reports and dashboards.',
      ],
    ],
    features: [
      ['Job Track & Trace', 'Milestones and movement on the operational file.'],
      ['CS · portal · public track', 'One status story across staff and customers.'],
      ['External ingest', 'MAWB track and tracking file upload where configured.'],
      ['POD close-out', 'Delivery acknowledgement ends the continuum cleanly.'],
    ],
    metric: 'One status',
    metricSub: 'ops, CS, portal and public track — same reference',
    quote: 'Customer service stopped camping on the ops floor for status.',
    quoteBy: 'CS Lead · Freight forwarder',
    related: ['air-freight', 'sea-freight', 'land-courier', 'documentation'],
    faqs: [
      ['Is this GPS / SIM tracking?', 'Milestone and status tracking on the Kingfisher job — not a telematics product.'],
      ['Can customers see status?', 'Yes via portal and public track / widget when rolled out.'],
      ['Who updates milestones?', 'Operations owns updates; permissions control who can edit.'],
      ['Does it work multi-modal?', 'Yes — milestones attach to whatever mode jobs you run.'],
      ['How does it help sales?', 'Sales sees the same operational truth without a shadow tracker.'],
      ['Alerts?', 'Exception and milestone visibility is the foundation; notification channels follow implementation.'],
    ],
  },
  {
    slug: 'finance-accounts',
    name: 'Finance & Accounts',
    cat: 'Business',
    tagline:
      'Job costing through invoicing, receivables, payables, and the ledger — finance linked directly to operational jobs.',
    outcome:
      'Job costing & P&L, sales / purchase invoices, credit / debit notes, AR / AP, payments, GL and financial statements on one continuum.',
    stageKind: 'costLedger',
    stageTitle: 'Job costing',
    stageSub: 'SE-11802 · Margin 18.4% · Invoice ready',
    stagePills: ['Job costing', 'Sales invoice', 'Purchase invoice', 'AR / AP', 'Payments', 'GL', 'P&L'],
    before: [
      'Costs re-typed from ops sheets into accounting',
      'Invoices wait because nobody trusts the job P&L',
      'AP and AR argue about which shipment an invoice belongs to',
    ],
    after: [
      'Cost and revenue on the job before billing',
      'Sales and purchase invoices from operational truth',
      'AR / AP, vouchers and GL statements without month-end archaeology',
    ],
    steps: [
      [
        'Cost the job',
        'Capture costs and revenue on the job costing tab (templates / bulk cost where used); review job P&L before billing.',
      ],
      [
        'Invoice from the job',
        'Create sales invoice from the job (preferred), post → PDF → send; adjust with credit / debit notes and payment requests.',
      ],
      [
        'Purchase invoices & AP',
        'Raise purchase invoices from job costs or vendor submissions; post for AP.',
      ],
      [
        'AR / AP → ledger',
        'Allocate payments, work aging, manage cheques / PDC and bank recon; post vouchers and maintain CoA.',
      ],
      [
        'Statements & MIS',
        'Run trial balance, P&L, balance sheet, cash flow and VAT / MIS packs — Quotation → Job → Costing → Invoice → Payment → Ledger → Report.',
      ],
    ],
    features: [
      ['Job costing & P&L', 'Margin while the job is alive.'],
      ['Sales & purchase invoices', 'Bill and AP from the operational record.'],
      ['AR / AP · payments', 'Collections and payables with shipment context.'],
      ['GL & statements', 'Product splits Finance vs Accounts; website tells one continuum.'],
    ],
    metric: 'Same-cycle',
    metricSub: 'Quotation → Job → Costing → Invoice → Payment → Ledger → Report',
    quote: 'Finance stopped asking ops to rebuild the shipment from emails at month end.',
    quoteBy: 'Finance Head · Mid-market forwarder',
    related: ['reports', 'air-freight', 'sea-freight', 'nvocc'],
    faqs: [
      [
        'Are Finance and Accounts one module?',
        'Paired on the marketing site as one continuum; in-product they split ops AR/AP docs vs GL.',
      ],
      ['Does this replace my GL?', 'Kingfisher owns job-level commercial truth; GL posting depends on your accounting setup.'],
      ['Can we see per-job margin?', 'Yes — job costing is designed for shipment-level profitability.'],
      ['Multi-currency?', 'Commercial fields support currencies configured in masters.'],
      ['Vendor bills?', 'Payables link vendor costs back to jobs and vendors / portal.'],
      ['Who can approve invoices?', 'Administration & Access controls approval permissions by role.'],
    ],
  },
  {
    slug: 'reports',
    name: 'Reports & Analytics',
    cat: 'Business',
    tagline:
      'Turn operational and financial data into management reports — without stitching five spreadsheets.',
    outcome:
      'Report formats catalogue, ops KPI / exception packs, sales & quotation analytics, docs / NVOCC / HR reports, GL & MIS dashboards.',
    stageKind: 'kpiCharts',
    stageTitle: 'Ops & margin',
    stageSub: 'This month · 412 jobs · Margin 16.2%',
    stagePills: ['Catalogue', 'Ops KPI', 'Job finance', 'Aging', 'MIS', 'Export / PDF'],
    before: [
      'Every manager builds their own Excel dashboard',
      'Numbers disagree between ops and finance',
      'Exception reports arrive too late to help',
    ],
    after: [
      'Catalogue formats filled from live quotations, jobs and invoices',
      'Ops KPI, job finance and aging from the system of record',
      'MIS and exports that feed exceptions back into ops and collections',
    ],
    steps: [
      [
        'Open Reports hub',
        'Browse the report formats catalogue (quotation, AWB/BL, arrival notice, DO, invoice, WMS, ops lists, accounts).',
      ],
      [
        'Generate from live data',
        'Run a format from a live quotation, job or invoice so data fills automatically.',
      ],
      [
        'Ops · sales · docs · NVOCC · HR',
        'Run operations packs (DO not invoiced, job finance, exceptions, KPI, closed jobs, voyage lists) and module reports.',
      ],
      [
        'Finance & GL analytics',
        'Aging, overdue, trial balance, P&L, MIS dashboard and saved reports; export / print management packs.',
      ],
    ],
    features: [
      ['Formats catalogue', 'Quotation, AWB/BL, AN, DO, invoice, WMS and ops lists.'],
      ['Ops KPI · job finance', 'Exceptions and margin from live jobs.'],
      ['Sales · docs · NVOCC · HR', 'Module reports without CSV sprawl as the primary path.'],
      ['GL · MIS · export / PDF', 'Leadership packs from the same system of record.'],
    ],
    metric: 'One catalogue',
    metricSub: 'ops and finance stop arguing about whose export is right',
    quote: 'Monday reviews finally use the same figures the desks work in all week.',
    quoteBy: 'CEO · Regional freight group',
    related: ['finance-accounts', 'tracking', 'air-freight', 'sea-freight'],
    faqs: [
      ['Is this a full BI suite?', 'Focused on freight ops and commercial performance from Kingfisher data.'],
      ['Can we export?', 'Yes — exports support offline needs; the platform remains source of truth.'],
      ['Branch-level views?', 'Organization structure and job ownership feed branch reporting.'],
      ['Real-time?', 'Reports reflect the operational data your teams maintain on jobs.'],
      ['Custom KPIs?', 'Core freight KPIs ship in-product; deeper custom analytics via implementation.'],
      ['Who gets access?', 'Permissions restrict sensitive margin and finance views.'],
    ],
  },
]


export const PLATFORM_MODULE_BY_SLUG = Object.fromEntries(PLATFORM_MODULES.map(m => [m.slug, m])) as Record<string, PlatformModule>

export function modulePath(slug: string) {
  return `/platform/${slug}`
}
