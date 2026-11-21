import fs from 'fs'

const p = 'client/src/content/platform-modules.ts'
let s = fs.readFileSync(p, 'utf8')

const pills = {
  'air-freight': ['AWB live', 'Flight up', 'Delivery open'],
  'sea-freight': ['FCL live', 'BL linked', 'Cut-off set'],
  nvocc: ['Voyage open', 'Space filling', 'HBL pack'],
  'land-courier': ['Pickup set', 'In transit', 'POD ready'],
  customs: ['Filing', 'Exam', 'Release'],
  documentation: ['SI draft', 'BL issued', 'Pack ready'],
  warehouse: ['Receiving', 'In bay', 'Release'],
  tracking: ['Live ETA', 'Events', 'Share link'],
  'finance-accounts': ['Charges', 'Costed', 'Invoiced'],
  reports: ['Ops KPIs', 'Margin', 'Trends'],
}

for (const [slug, list] of Object.entries(pills)) {
  const lit = JSON.stringify(list).replace(/"/g, "'")
  const re = new RegExp(`(slug: '${slug}',[\\s\\S]*?stageSub: '[^']*',\\n)(    before:)`)
  if (!re.test(s)) {
    console.log('miss', slug)
    continue
  }
  s = s.replace(re, `$1    stagePills: ${lit},\n$2`)
}

fs.writeFileSync(p, s)
console.log('pills done')
