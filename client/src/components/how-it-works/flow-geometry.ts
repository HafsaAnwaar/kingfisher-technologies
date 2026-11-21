type Pt = number[]

type Box = { x: number; y: number; w: number; d: number; h: number; z?: number; k?: 'base' | 'cont' | 'accent' }

type Veh = { r: Pt[]; dur?: number; delay?: number; dist?: number; t?: string; mut?: number; park?: number; risk?: number }

type Spec = {
  title: string
  net: string
  hud: string
  voy?: number
  steps: { m: string; s: string[] }[]
  boxes?: Box[]
  zw?: Pt[][]
  zt?: Pt[][]
  zm?: Pt[][]
  mk?: Pt[][]
  ra?: Pt[][]
  rm?: Pt[][]
  rx?: Pt[][]
  rs?: Pt[][]
  veh?: Veh[]
  nodes?: [Pt, string][]
  labels?: { p: Pt; t: string; sub?: string; k?: string; minor?: number }[]
}

const U = 36
const K = U * 0.8660254
const OX = 360
const OY = 150

function r1(n: number) {
  return Math.round(n * 10) / 10
}

function P(x: number, y: number, z?: number) {
  return [OX + (x - y) * K, OY + (x + y) * U / 2 - (z || 0)]
}

function pt(q: number[]) {
  return `${r1(q[0])} ${r1(q[1])}`
}

function line(pts: Pt[]) {
  return pts.map((q, i) => `${i ? 'L' : 'M'}${pt(P(q[0], q[1], q[2]))}`).join(' ')
}

function poly(pts: Pt[]) {
  return `${line(pts)} Z`
}

function lines(a?: Pt[][]) {
  return a && a.length ? a.map(line).join(' ') : 'M0 0'
}

function polys(a?: Pt[][]) {
  return a && a.length ? a.map(poly).join(' ') : 'M0 0'
}

function at(q: Pt) {
  const p = P(q[0], q[1], q[2])
  return { x: r1(p[0]), y: r1(p[1]) }
}

function range(n: number) {
  return Array.from({ length: n }, (_, i) => i)
}

function arc(a: number[], b: number[], hz: number, n: number) {
  return range(n + 1).map((i) => {
    const t = i / n
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, hz * Math.sin(Math.PI * t)]
  })
}

function flat(pts: Pt[]) {
  return pts.map((q) => [q[0], q[1], 0])
}

function smooth(pts: number[][], n: number) {
  const cr = (a: number, b: number, c: number, d: number, t: number) =>
    0.5 * (2 * b + (c - a) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (3 * b - a - 3 * c + d) * t * t * t)
  const out: number[][] = []
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] || pts[i + 1]
    for (let k = 0; k < n; k++) {
      out.push([
        cr(p0[0], p1[0], p2[0], p3[0], k / n),
        cr(p0[1], p1[1], p2[1], p3[1], k / n),
      ])
    }
  }
  out.push(pts[pts.length - 1])
  return out
}

function specs(): Spec[] {
  const airTruck = [[2.8, 7.2], [4.8, 7.2], [4.8, 2.4], [3.6, 2.4]]
  const flight = arc([3.6, 3.5], [6.4, 7.25], 78, 20)
  const connect = arc([3.4, 3.3], [9.8, 0.6], 64, 18)
  const airLast = [[8.5, 6.5], [8.5, 8.6]]
  const cyRoute = [[0.4, 2.9], [4.1, 2.9], [4.1, 3.6]]
  const ocean = [[0.3, 5.5], [9.8, 5.5]]
  const fclDel = [[7.2, 6.3], [7.2, 8.8], [9.2, 8.8]]
  const fclIn = [[0.4, 8.6], [7.2, 8.6]]
  const shA = [[1.8, 1.2], [2.6, 1.2], [2.6, 2.8], [3.2, 2.8]]
  const shB = [[1.8, 3.4], [3.2, 3.4]]
  const shC = [[1.8, 5.6], [2.6, 5.6], [2.6, 4.0], [3.2, 4.0]]
  const consol = [[5.0, 3.5], [5.4, 3.5]]
  const master = [[5.9, 3.5], [7.4, 3.5], [7.4, 6.6]]
  const d1 = [[6.6, 7.6], [4.25, 7.6], [4.25, 8.4]]
  const d2 = [[7.4, 8.0], [7.4, 9.35], [6.9, 9.35]]
  const d3 = [[8.4, 7.4], [9.4, 7.4], [9.4, 8.4]]
  const voyage = smooth([[8.4, 3.1], [5.0, 3.3], [2.2, 4.0], [1.6, 5.2], [2.6, 6.4], [5.6, 6.7]], 10)
  const bA = [[1.25, 1.3], [1.25, 2.2], [7.4, 2.2]]
  const bB = [[3.45, 1.2], [3.45, 2.2]]
  const bC = [[5.85, 1.3], [5.85, 2.2]]
  const agent = [[8.0, 8.7], [8.8, 8.7]]
  const landMain = [[3.0, 1.6], [3.6, 1.6], [3.6, 6.2], [7.6, 6.2], [7.6, 6.0]]
  const landDel = [[8.6, 5.4], [9.3, 5.4], [9.3, 8.6], [8.4, 8.6]]
  const c1 = [[7.4, 1.3], [8.75, 1.3], [8.75, 2.6]]
  const c2 = [[6.8, 1.7], [6.8, 3.1], [7.6, 3.1]]
  const landAlt = [[0.4, 8.4], [3.6, 8.4], [3.6, 6.2]]

  return [
    {
      title: 'Air Freight',
      net: 'Live Air Network',
      hud: 'Warehouse → origin airport → airline → destination → consignee',
      steps: [
        { m: 'Air Export', s: ['Booking Received', 'Space Confirmed', 'Cargo Received', 'Cargo Accepted', 'Flight Uplift', 'Cargo Departed'] },
        { m: 'Air Import', s: ['Cargo Arrived', 'Customs', 'CAN', 'Delivery', 'POD'] },
      ],
      boxes: [
        { x: 1, y: 1.2, w: 2.6, d: 1.2, h: 22, k: 'accent' },
        { x: 3.95, y: 1.3, w: 0.35, d: 0.35, h: 54 },
        { x: 3.85, y: 1.2, w: 0.55, d: 0.55, z: 54, h: 8, k: 'accent' },
        { x: 1, y: 6.6, w: 1.8, d: 1.3, h: 20 },
        { x: 7.6, y: 5.4, w: 1.8, d: 1.1, h: 20, k: 'accent' },
        { x: 7.9, y: 8.6, w: 1.2, d: 0.9, h: 12 },
      ],
      zm: [
        [[0.6, 3.1], [4.2, 3.1], [4.2, 3.9], [0.6, 3.9]],
        [[4.4, 6.9], [8.0, 6.9], [8.0, 7.6], [4.4, 7.6]],
        [[0.8, 2.45], [3.8, 2.45], [3.8, 2.95], [0.8, 2.95]],
      ],
      zt: [[[7.3, 5.1], [9.7, 5.1], [9.7, 6.8], [7.3, 6.8]]],
      mk: range(6)
        .map((k) => [[0.9 + 0.55 * k, 3.5], [1.15 + 0.55 * k, 3.5]])
        .concat(range(6).map((k) => [[4.7 + 0.55 * k, 7.25], [4.95 + 0.55 * k, 7.25]])),
      ra: [airTruck, flight, airLast],
      rm: [connect, [[4.8, 7.2], [4.8, 9.6]], [[0.4, 9.6], [9.6, 9.6]]],
      rs: [flat(flight), flat(connect)],
      veh: [
        { r: flight, dur: 7, delay: -1, t: 'plane' },
        { r: airTruck, dur: 7, delay: -3 },
        { r: airLast, dur: 4.5, delay: -2, t: 'van' },
        { r: connect, dur: 10, delay: -4, t: 'plane', mut: 1 },
        { r: [[1.2, 2.7], [2.8, 2.7]], park: 1, dist: 50, t: 'plane' },
      ],
      nodes: [
        [[2.8, 7.2], 'act'],
        [[3.6, 2.4], 'act'],
        [[3.6, 3.5], 'act'],
        [[6.4, 7.25], 'act'],
        [[8.5, 8.6], 'act'],
        [[9.8, 0.6], 'mut'],
        [[4.8, 9.6], 'mut'],
      ],
      labels: [
        { p: [1.9, 7.25, 28], t: 'Cargo Warehouse', sub: 'Cargo received' },
        { p: [2.3, 1.8, 32], t: 'Origin Airport', sub: 'Space confirmed', k: 'act' },
        { p: [5.0, 5.4, 86], t: 'In Flight', sub: 'MAWB · 3 HAWBs', k: 'act' },
        { p: [1.9, 2.7, 10], t: 'Airline', sub: 'Flight uplift', minor: 1 },
        { p: [8.5, 5.95, 28], t: 'Destination', sub: 'Cargo arrived', k: 'act' },
        { p: [8.5, 9.05, 20], t: 'HAWB', sub: 'Consignee · POD' },
        { p: [6.6, 1.95, 70], t: 'Connecting Flight', minor: 1 },
      ],
    },
    {
      title: 'Sea FCL',
      net: 'Live Ocean Network',
      hud: 'Container → CY → vessel → port of discharge → customs → delivery',
      steps: [
        { m: 'FCL Export', s: ['Booking', 'Container Assigned', 'SI / VGM', 'CY Cut-off', 'Loaded', 'Vessel Sailed'] },
        { m: 'FCL Import', s: ['Vessel Arrival', 'CAN', 'Customs', 'DO', 'Delivery'] },
      ],
      zw: [[[0, 3.6], [10, 3.6], [10, 6.2], [0, 6.2]]],
      mk: [[[0, 3.6], [10, 3.6]], [[0, 6.2], [10, 6.2]]],
      boxes: [
        { x: 2.6, y: 3.85, w: 4.4, d: 1, h: 8 },
        { x: 6.2, y: 4.0, w: 0.5, d: 0.7, z: 8, h: 22 },
        { x: 9.2, y: 8.3, w: 0.7, d: 0.9, h: 12 },
        { x: 3.0, y: 4.0, w: 3.0, d: 0.7, z: 8, h: 12, k: 'cont' },
        { x: 0.8, y: 0.8, w: 1.6, d: 0.7, h: 16, k: 'cont' },
        { x: 2.8, y: 0.8, w: 1.6, d: 0.7, h: 22, k: 'cont' },
        { x: 0.8, y: 1.8, w: 1.6, d: 0.7, h: 10, k: 'cont' },
        { x: 2.8, y: 1.8, w: 1.6, d: 0.7, h: 14, k: 'cont' },
        { x: 4.6, y: 3.2, w: 0.25, d: 0.25, h: 62, k: 'accent' },
        { x: 4.6, y: 2.9, w: 0.25, d: 2.1, z: 58, h: 5, k: 'accent' },
        { x: 7.6, y: 6.35, w: 0.25, d: 0.25, h: 58, k: 'accent' },
        { x: 7.6, y: 4.6, w: 0.25, d: 1.9, z: 54, h: 5, k: 'accent' },
        { x: 7.8, y: 7.2, w: 1, d: 0.8, h: 18, k: 'accent' },
      ],
      zm: [[[0.5, 0.5], [4.7, 0.5], [4.7, 2.7], [0.5, 2.7]]],
      ra: [cyRoute, ocean, fclDel],
      rm: [fclIn, [[4.1, 2.9], [6.4, 2.9], [6.4, 0.4]]],
      veh: [
        { r: cyRoute, dur: 6, t: 'box' },
        { r: cyRoute, dur: 6, delay: -2, t: 'box' },
        { r: cyRoute, dur: 6, delay: -4, t: 'box' },
        { r: ocean, dur: 16, delay: -5, t: 'ship lg' },
        { r: fclDel, dur: 6, delay: -1 },
        { r: fclIn, dur: 9, delay: -3, mut: 1 },
      ],
      nodes: [
        [[0.4, 2.9], 'mut'],
        [[4.1, 3.6], 'act'],
        [[5.2, 5.5], 'ai'],
        [[7.2, 6.3], 'act'],
        [[9.2, 8.8], 'act'],
        [[9.8, 5.5], 'mut'],
      ],
      labels: [
        { p: [2.6, 1.3, 30], t: 'Container Yard', sub: 'Container assigned' },
        { p: [4.7, 3.3, 70], t: 'Port of Loading', k: 'act' },
        { p: [4.4, 4.35, 26], t: 'Vessel', sub: 'SI / VGM filed · Loaded' },
        { p: [0.4, 2.9, 6], t: 'CY Cut-off', sub: 'Thu 18:00', k: 'warn', minor: 1 },
        { p: [5.2, 5.5, 4], t: 'Transhipment', k: 'ai' },
        { p: [7.7, 6.45, 64], t: 'Port of Discharge', k: 'act' },
        { p: [8.3, 7.6, 24], t: 'Customs', sub: 'Cleared · DO issued' },
        { p: [8.2, 8.8, 6], t: 'Delivery', k: 'act', minor: 1 },
      ],
    },
    {
      title: 'Sea LCL',
      net: 'Live Consolidation Network',
      hud: 'Shippers → CFS → consolidation → container → de-stuffing → consignees',
      steps: [
        { m: 'LCL Export', s: ['House Jobs', 'Master Consolidation', 'Prorated Cost', 'Container', 'Vessel'] },
        { m: 'LCL Import', s: ['Vessel', 'CFS', 'De-stuffing', 'Per-consignment Customs', 'Part Delivery', 'POD'] },
      ],
      boxes: [
        { x: 0.8, y: 0.8, w: 1, d: 0.8, h: 12 },
        { x: 0.8, y: 3.0, w: 1, d: 0.8, h: 12 },
        { x: 0.8, y: 5.2, w: 1, d: 0.8, h: 12 },
        { x: 3.2, y: 2.2, w: 1.8, d: 2, h: 26, k: 'accent' },
        { x: 5.4, y: 2.8, w: 0.5, d: 1.4, h: 10, k: 'cont' },
        { x: 6.6, y: 6.6, w: 1.8, d: 1.4, h: 24, k: 'accent' },
        { x: 3.8, y: 8.4, w: 0.9, d: 0.8, h: 11 },
        { x: 6.0, y: 9.0, w: 0.9, d: 0.7, h: 11 },
        { x: 9.0, y: 8.4, w: 0.8, d: 0.8, h: 11 },
      ],
      zt: [[[2.9, 1.9], [6.2, 1.9], [6.2, 4.5], [2.9, 4.5]]],
      zm: [[[6.2, 6.2], [8.8, 6.2], [8.8, 8.3], [6.2, 8.3]]],
      ra: [shA, shB, shC, consol, master, d1, d2, d3],
      rm: [[[0.4, 9.6], [9.6, 9.6]]],
      veh: [
        { r: shA, dur: 4.5, t: 'pkg' },
        { r: shB, dur: 3.5, delay: -1, t: 'pkg' },
        { r: shC, dur: 4.5, delay: -2.2, t: 'pkg' },
        { r: master, dur: 7, delay: -1, t: 'box' },
        { r: d1, dur: 4, delay: -0.5, t: 'pkg' },
        { r: d2, dur: 4, delay: -1.8, t: 'pkg' },
        { r: d3, dur: 4, delay: -2.6, t: 'pkg' },
      ],
      nodes: [
        [[3.2, 2.8], 'act'],
        [[3.2, 3.4], 'act'],
        [[3.2, 4.0], 'act'],
        [[5.9, 3.5], 'act'],
        [[7.4, 6.6], 'act'],
        [[4.25, 8.4], 'act'],
        [[6.9, 9.35], 'mut'],
        [[9.4, 8.4], 'act'],
      ],
      labels: [
        { p: [1.3, 1.2, 18], t: 'Shipper A' },
        { p: [1.3, 3.4, 18], t: 'Shipper B' },
        { p: [1.3, 5.6, 18], t: 'Shipper C' },
        { p: [4.1, 3.2, 34], t: 'CFS · Consolidation', sub: 'House jobs → master', k: 'act' },
        { p: [5.65, 3.5, 16], t: 'Master BL', sub: 'Prorated cost' },
        { p: [7.5, 7.3, 32], t: 'De-stuffing', sub: 'Per-consignment customs', k: 'act' },
        { p: [4.25, 8.8, 17], t: 'Consignee', sub: 'Part delivery' },
        { p: [9.4, 8.8, 17], t: 'POD', k: 'act', minor: 1 },
      ],
    },
    {
      title: 'NVOCC',
      net: 'Live Voyage Network',
      voy: 1,
      hud: 'Booking → space → load list → HBL → sailed → pre-alert → POD',
      steps: [
        { m: 'Voyage 042', s: ['Enquiry', 'Booking', 'Space Allocation', 'Load List', 'NVOCC HBL', 'Vessel Loaded', 'Sailed'] },
        { m: 'Destination', s: ['Pre-Alert', 'CAN', 'DO', 'Voyage P&L'] },
      ],
      zw: [[[0, 2.6], [10, 2.6], [10, 7.2], [0, 7.2]]],
      mk: [[[0, 2.6], [10, 2.6]], [[0, 7.2], [10, 7.2]]],
      boxes: [
        { x: 0.8, y: 0.6, w: 0.9, d: 0.7, h: 11 },
        { x: 3.0, y: 0.5, w: 0.9, d: 0.7, h: 11 },
        { x: 5.4, y: 0.6, w: 0.9, d: 0.7, h: 11 },
        { x: 8.8, y: 8.4, w: 0.8, d: 0.7, h: 12 },
        { x: 6.8, y: 0.8, w: 1.6, d: 1.2, h: 20, k: 'accent' },
        { x: 8.0, y: 2.35, w: 0.25, d: 0.25, h: 58, k: 'accent' },
        { x: 8.0, y: 2.2, w: 0.25, d: 1.6, z: 54, h: 5, k: 'accent' },
        { x: 6.4, y: 8.0, w: 1.6, d: 1.2, h: 20, k: 'accent' },
        { x: 5.8, y: 7.35, w: 0.25, d: 0.25, h: 58, k: 'accent' },
        { x: 5.8, y: 5.9, w: 0.25, d: 1.6, z: 54, h: 5, k: 'accent' },
      ],
      ra: [voyage, bA, bB, bC, agent],
      rm: [[[8.4, 3.1], [9.8, 2.9]], [[5.6, 6.7], [9.8, 6.9]]],
      veh: [
        { r: voyage, dur: 16, delay: -4, t: 'ship lg' },
        { r: bA, dur: 6, t: 'box' },
        { r: bB, dur: 4, delay: -1.5, t: 'box' },
        { r: bC, dur: 3.5, delay: -2.5, t: 'box' },
        { r: agent, dur: 3, delay: -1, t: 'pkg' },
      ],
      nodes: [
        [[1.25, 2.2], 'act'],
        [[3.45, 2.2], 'act'],
        [[5.85, 2.2], 'act'],
        [[7.4, 2.2], 'act'],
        [[1.6, 5.2], 'ai'],
        [[5.6, 6.7], 'act'],
        [[8.8, 8.7], 'act'],
        [[9.8, 2.9], 'mut'],
      ],
      labels: [
        { p: [7.6, 1.4, 28], t: 'POL', sub: 'Load list closed', k: 'act' },
        { p: [1.25, 0.95, 17], t: 'Booking', sub: 'Enquiry → booking' },
        { p: [3.45, 0.85, 17], t: 'HBL', sub: 'NVOCC HBL issued' },
        { p: [7.4, 2.2, 4], t: 'Load List', minor: 1 },
        { p: [5.2, 3.3, 6], t: 'Voyage', sub: 'VOY 042 · Sailed', k: 'act' },
        { p: [1.6, 5.2, 4], t: 'Transit', k: 'ai', minor: 1 },
        { p: [3.4, 6.6, 4], t: 'Space 72%', k: 'ai' },
        { p: [7.2, 8.6, 28], t: 'POD', sub: 'Pre-alert sent', k: 'act' },
        { p: [9.2, 8.75, 18], t: 'Destination Agent', sub: 'CAN · DO', minor: 1 },
      ],
    },
    {
      title: 'Land & Courier',
      net: 'Live Ground Network',
      hud: 'Warehouse → pickup → in transit → border → delivery → POD',
      steps: [
        { m: 'Land Job', s: ['Transport Request', 'Trucker Assigned', 'Pickup', 'In Transit', 'Cross-border', 'Delivery', 'POD'] },
        { m: 'Courier', s: ['Courier Booking', 'Barcode Labels', 'Pickup', 'Delivery Tracking', 'POD'] },
      ],
      boxes: [
        { x: 0.8, y: 0.8, w: 2.2, d: 1.6, h: 26 },
        { x: 2.4, y: 3.0, w: 0.9, d: 0.8, h: 12 },
        { x: 6.2, y: 0.8, w: 1.2, d: 0.9, h: 14 },
        { x: 8.4, y: 2.6, w: 0.7, d: 0.6, h: 9 },
        { x: 7.6, y: 2.8, w: 0.6, d: 0.6, h: 9 },
        { x: 7.4, y: 8.2, w: 1, d: 0.8, h: 12 },
        { x: 6.8, y: 4.6, w: 1.8, d: 1.4, h: 24, k: 'accent' },
        { x: 4.85, y: 5.85, w: 0.2, d: 0.2, h: 22, k: 'accent' },
        { x: 4.85, y: 6.45, w: 0.2, d: 0.2, h: 22, k: 'accent' },
        { x: 4.85, y: 5.85, w: 0.2, d: 0.8, z: 22, h: 3, k: 'accent' },
      ],
      zm: [[[4.9, 0], [5.1, 0], [5.1, 10], [4.9, 10]]],
      zt: [[[5.9, 0.5], [9.6, 0.5], [9.6, 3.7], [5.9, 3.7]]],
      ra: [landMain, landDel, c1, c2],
      rm: [landAlt, [[9.3, 5.4], [9.3, 4.2]]],
      veh: [
        { r: landMain, dur: 11 },
        { r: landDel, dur: 6, delay: -2, t: 'van' },
        { r: c1, dur: 3.5, t: 'pkg' },
        { r: c2, dur: 3.2, delay: -1.4, t: 'pkg' },
        { r: landAlt, dur: 9, delay: -3, mut: 1 },
      ],
      nodes: [
        [[3.0, 1.6], 'act'],
        [[3.6, 3.4], 'act'],
        [[5.0, 6.2], 'warn'],
        [[7.6, 6.0], 'act'],
        [[8.4, 8.6], 'act'],
        [[8.75, 2.6], 'act'],
        [[7.6, 3.1], 'act'],
        [[0.4, 8.4], 'mut'],
      ],
      labels: [
        { p: [1.9, 1.6, 30], t: 'Warehouse', sub: 'Transport request' },
        { p: [2.85, 3.4, 16], t: 'Pickup', sub: 'Trucker assigned', k: 'act' },
        { p: [3.6, 4.4, 4], t: 'In Transit', sub: 'Land job · vehicle', k: 'act' },
        { p: [5.3, 6.6, 26], t: 'Border', sub: 'Cross-border', k: 'warn' },
        { p: [7.7, 5.3, 28], t: 'Distribution Center', minor: 1 },
        { p: [7.9, 8.6, 16], t: 'Delivery', k: 'act' },
        { p: [9.3, 7.2, 4], t: 'POD', sub: 'Signed', k: 'act', minor: 1 },
        { p: [6.8, 1.25, 18], t: 'Courier', sub: 'Barcode labels' },
      ],
    },
  ]
}

export type FlowGeometry = ReturnType<typeof buildFlowData>['flows'][number]

export function buildFlowData() {
  const iso = {
    floor: poly([[0, 0], [10, 0], [10, 10], [0, 10]]),
    sideL: poly([[0, 10, 0], [10, 10, 0], [10, 10, -14], [0, 10, -14]]),
    sideR: poly([[10, 0, 0], [10, 10, 0], [10, 10, -14], [10, 0, -14]]),
    grid: range(9)
      .map((i) => `${line([[i + 1, 0], [i + 1, 10]])} ${line([[0, i + 1], [10, i + 1]])}`)
      .join(' '),
  }

  const flows = specs().map((flow, idx) => {
    const faces = {
      base: { t: [] as string[], l: [] as string[], r: [] as string[] },
      cont: { t: [] as string[], l: [] as string[], r: [] as string[] },
      accent: { t: [] as string[], l: [] as string[], r: [] as string[] },
    }
    for (const box of flow.boxes || []) {
      const z = box.z || 0
      const height = z + box.h
      const face = faces[box.k || 'base']
      const { x, y, w, d } = box
      face.l.push(poly([[x, y + d, z], [x + w, y + d, z], [x + w, y + d, height], [x, y + d, height]]))
      face.r.push(poly([[x + w, y, z], [x + w, y + d, z], [x + w, y + d, height], [x + w, y, height]]))
      face.t.push(poly([[x, y, height], [x + w, y, height], [x + w, y + d, height], [x, y + d, height]]))
    }
    const join = (paths: string[]) => (paths.length ? paths.join(' ') : 'M0 0')
    const routes = range(8).map((i) => (flow.ra && flow.ra[i] ? line(flow.ra[i]) : 'M0 0'))
    const parts = (flow.ra || []).flatMap((route, i) => {
      const d = line(route)
      return [
        { d, dur: 2.8, delay: -(i * 0.7) },
        { d, dur: 2.8, delay: -(i * 0.7 + 1.4) },
      ]
    })
    return {
      num: `Flow 0${idx + 1} / 05 · ${flow.title}`,
      hud: flow.hud,
      net: flow.net,
      steps: flow.steps,
      hasVoy: !!flow.voy,
      zw: polys(flow.zw),
      zt: polys(flow.zt),
      zm: polys(flow.zm),
      mk: lines(flow.mk),
      ra: lines(flow.ra),
      rm: lines(flow.rm),
      rx: lines(flow.rx),
      rs: lines(flow.rs),
      routes,
      bl: join(faces.base.l),
      br: join(faces.base.r),
      bt: join(faces.base.t),
      cl: join(faces.cont.l),
      cr: join(faces.cont.r),
      ct: join(faces.cont.t),
      al: join(faces.accent.l),
      ar: join(faces.accent.r),
      at: join(faces.accent.t),
      veh: (flow.veh || []).map((vehicle) => ({
        d: line(vehicle.r),
        dur: vehicle.dur || 7,
        delay: vehicle.delay || 0,
        dist: vehicle.dist ?? 40,
        cls: `lf-veh lf-${vehicle.t || 'truck'}${vehicle.mut ? ' mut' : ''}${vehicle.risk ? ' risk' : ''}${vehicle.park ? ' lf-park' : ''}`,
      })),
      parts,
      nodes: (flow.nodes || []).map((node, i) => ({
        ...at(node[0]),
        cls: `lf-node ${node[1] || ''}`,
        dl: 260 + i * 60,
      })),
      labels: (flow.labels || []).map((label, i) => ({
        ...at(label.p),
        t: label.t,
        sub: label.sub || '',
        hasSub: !!label.sub,
        cls: `lf-ml ${label.k || ''}${label.minor ? ' minor' : ''}`,
        dl: 380 + i * 70,
      })),
    }
  })

  return { iso, flows }
}
