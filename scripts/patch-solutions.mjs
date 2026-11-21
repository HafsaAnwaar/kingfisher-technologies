import fs from 'fs'

const p = 'client/src/content/solutions.ts'
let s = fs.readFileSync(p, 'utf8')

const extras = {
  'freight-forwarders': {
    metrics: [
      ['1 ERP', 'quotation to invoice'],
      ['5+ modes', 'on shared milestones'],
      ['0 inbox ops', 'as the system of record'],
    ],
    dayBeats: [
      ['Morning sales desk', 'Quotations convert into real multi-modal jobs with parties already attached.'],
      ['Ops mid-shift', 'Air, sea and land desks update the same file — CS sees status without asking.'],
      ['Docs & customs', 'Document packs and clearance handoffs stay on the job, not in a side tracker.'],
      ['Finance close', 'Costing and invoices settle against the shipment everyone already knows.'],
    ],
  },
  'nvocc-operators': {
    metrics: [
      ['1 voyage board', 'capacity and cut-offs'],
      ['HBL + load list', 'same voyage file'],
      ['Live P&L', 'before you sail'],
    ],
    dayBeats: [
      ['Plan the sailing', 'Vessel, cut-offs and space sit on one voyage board.'],
      ['Fill bookings', 'Load list updates as agents and forwarders confirm space.'],
      ['Issue HBLs', 'Documentation packs against the voyage — not a separate folder.'],
      ['Steer profit', 'Voyage P&L updates while you can still change the plan.'],
    ],
  },
  'customs-brokers': {
    metrics: [
      ['Shared holds', 'customer-visible status'],
      ['1 clearance file', 'docs + exams'],
      ['Clean billing', 'from the same record'],
    ],
    dayBeats: [
      ['Intake', 'Link clearance to parties and shipment context in one file.'],
      ['Declare', 'Track filings, exams and document requirements as they change.'],
      ['Release', 'Surface holds and release so importers stop calling for status.'],
      ['Bill', 'Invoice clearance work from the operational record.'],
    ],
  },
  'cfs-warehouse': {
    metrics: [
      ['Floor = timeline', 'receiving feeds jobs'],
      ['Bay clarity', 'occupancy at a glance'],
      ['Clean release', 'handoff to land'],
    ],
    dayBeats: [
      ['Receive', 'Log cargo against the job reference at the bay.'],
      ['Handle', 'Track handling and storage without a shadow spreadsheet.'],
      ['Stage release', 'Align CFS floor events with the shipment timeline.'],
      ['Hand off', 'Release to land/courier with a clean milestone trail.'],
    ],
  },
  'importers-exporters': {
    metrics: [
      ['Less chasing', 'shared shipment truth'],
      ['Docs on tap', 'authorized packs'],
      ['Clean invoices', 'tied to shipments'],
    ],
    dayBeats: [
      ['Book clearly', 'Quotations and bookings with complete party data.'],
      ['Follow the move', 'Milestones and docs without inbox archaeology.'],
      ['See holds', 'Customs and ops status surface when your partner runs Kingfisher.'],
      ['Settle', 'Invoices match the shipments you recognize.'],
    ],
  },
  transporters: {
    metrics: [
      ['Real land jobs', 'not WhatsApp only'],
      ['POD on file', 'milestones shared'],
      ['Cost tied', 'to the haul'],
    ],
    dayBeats: [
      ['Accept the move', 'Land jobs arrive with route, parties and instructions.'],
      ['Execute', 'Update pickup through delivery on the shared record.'],
      ['Prove delivery', 'POD and milestones stay visible to the forwarder.'],
      ['Bill the haul', 'Costs and invoices attach to the same job.'],
    ],
  },
  'courier-companies': {
    metrics: [
      ['Volume + control', 'per consignment'],
      ['96%+ discipline', 'on-time visibility'],
      ['Same ERP', 'ops and finance'],
    ],
    dayBeats: [
      ['Intake', 'Create courier jobs with parties and service levels at volume.'],
      ['Deliver', 'Milestones through out-for-delivery and POD.'],
      ['Track exceptions', 'Exceptions stay on the consignment — not a side chat.'],
      ['Close commercially', 'Costs and invoices still tied to each job.'],
    ],
  },
}

const typeBlock = `export type Solution = {
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
}`

s = s.replace(/export type Solution = \{[\s\S]*?faqs: Faq\[\]\n\}/, typeBlock)

for (const [slug, data] of Object.entries(extras)) {
  const beats = JSON.stringify(data.dayBeats, null, 2)
    .replace(/"/g, "'")
    .replace(/\n/g, '\n    ')
  const metrics = JSON.stringify(data.metrics, null, 2)
    .replace(/"/g, "'")
    .replace(/\n/g, '\n    ')
  const re = new RegExp(`(slug: '${slug}',[\\s\\S]*?stages: \\[[\\s\\S]*?\\],\\n)(    modules:)`)
  if (!re.test(s)) {
    console.log('miss', slug)
    continue
  }
  s = s.replace(re, `$1    dayBeats: ${beats},\n    metrics: ${metrics},\n$2`)
}

fs.writeFileSync(p, s)
console.log('solutions patched')
