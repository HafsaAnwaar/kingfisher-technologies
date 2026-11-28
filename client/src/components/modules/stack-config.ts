export const OPS = 'Operations'
export const BIZ = 'Business'
export const ADM = 'Administration'

export const ICONS = {
  sales: 'M16 7h6v6 M22 7l-8.5 8.5-5-5L2 17',
  users:
    'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 3a4 4 0 1 1 0 8 4 4 0 1 1 0-8 M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
  vendor:
    'M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2 M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2 M10 6h4 M10 10h4 M10 14h4 M10 18h4',
  quote:
    'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z M14 2v4a2 2 0 0 0 2 2h4 M16 13H8 M16 17H8 M10 9H8',
  air: 'M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z',
  sea: 'M12 10.189V14 M12 2v3 M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6 M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76 M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1',
  anchor: 'M12 22V8 M5 12H2a10 10 0 0 0 20 0h-3 M12 2a3 3 0 1 1 0 6 3 3 0 1 1 0-6',
  customs:
    'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z M9 12l2 2 4-4',
  docs: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z M14 2v4a2 2 0 0 0 2 2h4 M9 15l2 2 4-4',
  track:
    'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0 M12 7a3 3 0 1 1 0 6 3 3 0 1 1 0-6',
  warehouse:
    'M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11 M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35a2 2 0 0 1 1.26-1.86l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z M6 13h12 M6 17h12',
  mgmt: 'M3 3h7v9H3z M14 3h7v5h-7z M14 12h7v9h-7z M3 16h7v5H3z',
  wallet:
    'M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1 M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4',
  calc: 'M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z M8 6h8 M8 10h.01 M12 10h.01 M16 10h.01 M8 14h.01 M12 14h.01 M16 14v4 M8 18h4',
  chart: 'M3 3v18h18 M18 17V9 M13 17V5 M8 17v-3',
  hr: 'M16 10h2 M16 14h2 M6.17 15a3 3 0 0 1 5.66 0 M9 8a2 2 0 1 1 0 4 2 2 0 1 1 0-4 M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z',
  sliders:
    'M20 7h-9 M14 17H5 M17 14a3 3 0 1 1 0 6 3 3 0 1 1 0-6 M7 4a3 3 0 1 1 0 6 3 3 0 1 1 0-6',
  lock: 'M7 11h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z M7 11V7a5 5 0 0 1 10 0v4',
  clip: 'M9 2h6v4H9z M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2 M12 11h4 M12 16h4 M8 11h.01 M8 16h.01',
  route:
    'M6 16a3 3 0 1 1 0 6 3 3 0 1 1 0-6 M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15 M18 2a3 3 0 1 1 0 6 3 3 0 1 1 0-6',
  server:
    'M4 2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z M4 14h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z M6 6h.01 M6 18h.01',
  trade:
    'M16 3h5v5 M8 3H3v5 M21 3 14 10 M3 3l7 7 M8 21H3v-5 M16 21h5v-5 M3 21l7-7 M21 21l-7-7',
} as const

export type ModuleDef = {
  id: string
  name: string
  cat: typeof OPS | typeof BIZ | typeof ADM
  color: string
  route: string
  icon: string
  desc: string
}

export type PersonaDef = {
  id: string
  name: string
  sub: string
  pill: string
  color: string
  textLight: string
  badge: string
  story: string
  modules: string[]
  pipeline: [string, string[]][]
  /** When true, role is kept for defaults but not shown in the picker. */
  hidden?: boolean
}

export type FilterDef = {
  id: string
  l: string
  cat?: string
  ids?: string[]
}

export const MODULES: ModuleDef[] = [
  {
    id: 'sales',
    name: 'Sales & CRM',
    cat: BIZ,
    color: '#F43F5E',
    route: '/sales',
    icon: ICONS.sales,
    desc: 'CRM enquiries, leads, follow-ups and sales handoff to quotations.',
  },
  {
    id: 'customers',
    name: 'Customers & Parties',
    cat: BIZ,
    color: '#E879F9',
    route: '/parties · /customers',
    icon: ICONS.users,
    desc: 'Party master for shippers, consignees and agents, plus CS and portal collaboration.',
  },
  {
    id: 'vendors',
    name: 'Vendors',
    cat: BIZ,
    color: '#D97706',
    route: '/parties · /vendors',
    icon: ICONS.vendor,
    desc: 'Vendor parties and vendor portal, carriers and partners on the same job file.',
  },
  {
    id: 'quotations',
    name: 'Quotations',
    cat: BIZ,
    color: '#818CF8',
    route: '/quotations',
    icon: ICONS.quote,
    desc: 'Create, manage and convert freight quotations into operational jobs.',
  },
  {
    id: 'air',
    name: 'Air Freight',
    cat: OPS,
    color: '#60A5FA',
    route: '/jobs/air-export · air-import',
    icon: ICONS.air,
    desc: 'Air export and import jobs, AWB / HAWB / MAWB workflows, bookings and milestones.',
  },
  {
    id: 'sea',
    name: 'Sea Freight',
    cat: OPS,
    color: '#14B8A6',
    route: '/jobs/sea-export · /jobs/sea-import',
    icon: ICONS.sea,
    desc: 'FCL and LCL import/export, containers, vessels, BL, VGM and ocean milestones.',
  },
  {
    id: 'nvocc',
    name: 'NVOCC',
    cat: OPS,
    color: '#9333EA',
    route: '/nvocc',
    icon: ICONS.anchor,
    desc: 'Voyage control & profitability, bookings, load lists, HBLs, pre-alerts and DOs.',
  },
  {
    id: 'transport',
    name: 'Transport',
    cat: OPS,
    color: '#38BDF8',
    route: '/operations/transport-requests',
    icon: ICONS.route,
    desc: 'Land & Courier jobs and transport handoff, not a full fleet TMS.',
  },
  {
    id: 'customs',
    name: 'Customs Clearance',
    cat: OPS,
    color: '#0F766E',
    route: '/jobs/customs-clearance',
    icon: ICONS.customs,
    desc: 'Declarations, exams, holds and release on the shipment job.',
  },
  {
    id: 'docs',
    name: 'Documentation',
    cat: OPS,
    color: '#FACC15',
    route: '/documentation',
    icon: ICONS.docs,
    desc: 'BL/AWB, pre-alerts and operational paperwork on the job file.',
  },
  {
    id: 'tracking',
    name: 'Shipment Tracking',
    cat: OPS,
    color: '#67E8F9',
    route: 'Job Track & Trace · /track',
    icon: ICONS.track,
    desc: 'Milestones for ops, CS, portal and public track, one status story.',
  },
  {
    id: 'warehouse',
    name: 'Warehouse',
    cat: OPS,
    color: '#0D9488',
    route: '/warehouse',
    icon: ICONS.warehouse,
    desc: 'Warehouse handling connected to jobs, receiving, stock and release.',
  },
  {
    id: 'trading',
    name: 'General Trading',
    cat: OPS,
    color: '#F97316',
    route: '/platform/general-trading',
    icon: ICONS.trade,
    desc: 'Integration, quote-request bridge into freight jobs (not a native GT ERP).',
  },
  {
    id: 'management',
    name: 'Management',
    cat: BIZ,
    color: '#84CC16',
    route: '/management',
    icon: ICONS.mgmt,
    desc: 'Management dashboard, MIS and consolidated ops performance views.',
  },
  {
    id: 'finance',
    name: 'Finance',
    cat: BIZ,
    color: '#059669',
    route: '/finance',
    icon: ICONS.wallet,
    desc: 'Manage financial workflows, job costing, expenses, revenue and profitability.',
  },
  {
    id: 'accounts',
    name: 'Accounts',
    cat: BIZ,
    color: '#22D3EE',
    route: '/accounts',
    icon: ICONS.calc,
    desc: 'Manage accounting operations, financial records, receivables and payables.',
  },
  {
    id: 'reports',
    name: 'Reports & Analytics',
    cat: BIZ,
    color: '#DC2626',
    route: '/reports',
    icon: ICONS.chart,
    desc: 'Turn operational and financial data into actionable management reports.',
  },
  {
    id: 'hr',
    name: 'HR',
    cat: ADM,
    color: '#DB2777',
    route: '/hr',
    icon: ICONS.hr,
    desc: 'HR for logistics teams, employees, leave and payroll (not enterprise HCM).',
  },
  {
    id: 'masters',
    name: 'Masters & Configuration',
    cat: ADM,
    color: '#A855F7',
    route: '/masters · /organization · /settings',
    icon: ICONS.sliders,
    desc: 'Configure operational masters, organization settings, users and system behavior.',
  },
  {
    id: 'admin',
    name: 'Administration & Access',
    cat: ADM,
    color: '#C026D3',
    route: '/admin/users',
    icon: ICONS.lock,
    desc: 'Control users, permissions, access and platform administration.',
  },
]

export const PERSONAS: PersonaDef[] = [
  {
    id: 'operationsHead',
    name: 'Operations Head',
    hidden: true,
    sub: 'End-to-end freight control',
    pill: 'End-to-end operational control',
    color: '#FF751F',
    textLight: '#C2410C',
    badge: ICONS.clip,
    story:
      'Everything needed to control the complete freight operation, from commercial handoff to delivery.',
    modules: [
      'sales',
      'customers',
      'quotations',
      'air',
      'sea',
      'nvocc',
      'transport',
      'customs',
      'docs',
      'tracking',
      'trading',
      'management',
      'reports',
    ],
    pipeline: [
      ['Enquiry', ['sales']],
      ['Quotation', ['quotations']],
      ['Booking', ['customers']],
      ['Job', ['air', 'sea', 'nvocc', 'transport']],
      ['Trading', ['trading']],
      ['Documentation', ['docs']],
      ['Tracking', ['tracking']],
      ['Customs', ['customs']],
      ['Delivery', ['tracking']],
      ['Costing', ['finance']],
      ['Reporting', ['reports']],
    ],
  },
  {
    id: 'logisticsManager',
    name: 'Logistics Manager',
    hidden: true,
    sub: 'Run every shipment efficiently',
    pill: 'Multi-modal shipment execution',
    color: '#67E8F9',
    textLight: '#0E7490',
    badge: ICONS.route,
    story:
      'Run multi-modal shipments from booking through delivery with operational visibility at every step.',
    modules: [
      'customers',
      'vendors',
      'quotations',
      'air',
      'sea',
      'nvocc',
      'transport',
      'customs',
      'docs',
      'tracking',
      'warehouse',
      'trading',
    ],
    pipeline: [
      ['Quotation', ['quotations']],
      ['Booking', ['customers']],
      ['Air / Sea', ['air', 'sea']],
      ['Transport', ['transport']],
      ['Trading', ['trading']],
      ['Documentation', ['docs']],
      ['Customs', ['customs']],
      ['Warehouse', ['warehouse']],
      ['Tracking', ['tracking']],
      ['Delivery', ['tracking']],
    ],
  },
  {
    id: 'finance',
    name: 'CFO / Finance',
    hidden: true,
    sub: 'Control cost and profitability',
    pill: 'Cost & profitability visibility',
    color: '#A3E635',
    textLight: '#4D7C0F',
    badge: ICONS.wallet,
    story: 'Connect commercial activity, operational costs and financial performance.',
    modules: [
      'customers',
      'vendors',
      'quotations',
      'management',
      'finance',
      'accounts',
      'reports',
      'sales',
    ],
    pipeline: [
      ['Customer', ['customers']],
      ['Quotation', ['quotations']],
      ['Job', ['management']],
      ['Vendor Cost', ['vendors']],
      ['Revenue', ['sales']],
      ['Finance', ['finance']],
      ['Accounts', ['accounts']],
      ['Profitability', ['management']],
      ['Reports', ['reports']],
    ],
  },
  {
    id: 'itAdmin',
    name: 'IT / System Admin',
    hidden: true,
    sub: 'Connect and control the platform',
    pill: 'Platform control & governance',
    color: '#C4B5FD',
    textLight: '#6D28D9',
    badge: ICONS.server,
    story: 'Keep the platform configured, secure, governed and ready for every department.',
    modules: [
      'customers',
      'vendors',
      'management',
      'finance',
      'accounts',
      'hr',
      'reports',
      'masters',
      'admin',
    ],
    pipeline: [
      ['Organization', ['masters']],
      ['Users', ['admin']],
      ['Permissions', ['admin']],
      ['Masters', ['masters']],
      ['Modules', ['management']],
      ['Operations', ['air', 'sea', 'nvocc']],
      ['Finance', ['finance']],
      ['Reports', ['reports']],
      ['Administration', ['admin']],
    ],
  },
]

export const FILTERS_A: FilterDef[] = [
  { id: 'all', l: 'All' },
  { id: 'operations', l: 'Operations', cat: OPS },
  { id: 'business', l: 'Business', cat: BIZ },
  { id: 'administration', l: 'Administration', cat: ADM },
]

export const FILTERS_B: FilterDef[] = [
  { id: 'air', l: 'Air', ids: ['air'] },
  { id: 'sea', l: 'Sea', ids: ['sea', 'customs'] },
  { id: 'nvocc', l: 'NVOCC', ids: ['nvocc'] },
  { id: 'transport', l: 'Transport', ids: ['transport'] },
  { id: 'trading', l: 'Trading', ids: ['trading'] },
  { id: 'finance', l: 'Finance', ids: ['finance', 'accounts'] },
  { id: 'reporting', l: 'Reporting', ids: ['reports', 'management'] },
]

export const CAT_KEY: Record<string, string> = {
  [OPS]: 'ops',
  [BIZ]: 'biz',
  [ADM]: 'admin',
}

export const MODULE_BY_ID = Object.fromEntries(MODULES.map((m) => [m.id, m])) as Record<
  string,
  ModuleDef
>

export function hexA(hex: string, a: number) {
  const n = Number.parseInt(hex.slice(1), 16)
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`
}

export function lum(hex: string) {
  const n = Number.parseInt(hex.slice(1), 16)
  return (0.299 * ((n >> 16) & 255) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255
}
