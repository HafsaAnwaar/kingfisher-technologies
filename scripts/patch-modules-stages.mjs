import fs from 'fs'

const p = 'client/src/content/platform-modules.ts'
let s = fs.readFileSync(p, 'utf8')

const kinds = {
  'air-freight': ['routeMap', ['AWB live', 'Flight up', 'Delivery open']],
  'sea-freight': ['routeMap', ['FCL live', 'BL linked', 'Cut-off set']],
  nvocc: ['voyageHud', ['Voyage open', 'Space filling', 'HBL pack']],
  'land-courier': ['podRun', ['Pickup set', 'In transit', 'POD ready']],
  customs: ['clearance', ['Filing', 'Exam', 'Release']],
  documentation: ['docPack', ['SI draft', 'BL issued', 'Pack ready']],
  warehouse: ['yardGrid', ['Receiving', 'In bay', 'Release']],
  tracking: ['liveTrack', ['Live ETA', 'Events', 'Share link']],
  'finance-accounts': ['costLedger', ['Charges', 'Costed', 'Invoiced']],
  reports: ['kpiCharts', ['Ops KPIs', 'Margin', 'Trends']],
}

const typeBlock = `export type StageKind =
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
}`

s = s.replace(/export type PlatformModule = \{[\s\S]*?faqs: Faq\[\]\n\}/, typeBlock)

for (const [slug, [kind, pills]] of Object.entries(kinds)) {
  const re = new RegExp(`(slug: '${slug}',[\\s\\S]*?outcome: [^\\n]+\\n)(    stageTitle:)`)
  if (!re.test(s)) {
    console.log('miss kind', slug)
    continue
  }
  s = s.replace(re, `$1    stageKind: '${kind}',\n$2`)

  const pillsLit = JSON.stringify(pills).replace(/"/g, "'")
  const re2 = new RegExp(`(slug: '${slug}',[\\s\\S]*?stageSub: '[^']*'\\n)`)
  if (!re2.test(s)) {
    console.log('miss pills', slug)
    continue
  }
  s = s.replace(re2, `$1    stagePills: ${pillsLit},\n`)
}

fs.writeFileSync(p, s)
console.log('patched', Object.keys(kinds).length)
