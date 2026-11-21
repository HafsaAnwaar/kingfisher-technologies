export type Voice = {
  id: string
  name: string
  role: string
  company: string
  industry: string
  initials: string
  capability: string
  accent: string
  avatar: string
  quote: string
}

export const VOICES: Voice[] = [
  {
    id: 'ops',
    name: 'Customer Name',
    role: 'Operations Manager',
    company: 'Customer Company',
    industry: 'Freight Forwarding',
    initials: 'OM',
    capability: 'End-to-end Operations',
    accent: '#60A5FA',
    avatar: '',
    quote:
      'Add a verified testimonial about managing bookings, jobs, documentation and shipment milestones from one platform.',
  },
  {
    id: 'multimodal',
    name: 'Customer Name',
    role: 'Freight Forwarding Manager',
    company: 'Customer Company',
    industry: 'Freight Forwarding',
    initials: 'FF',
    capability: 'Multi-modal Freight',
    accent: '#14B8A6',
    avatar: '',
    quote:
      'Add a verified testimonial about managing air, sea, NVOCC and related freight workflows in one connected system.',
  },
  {
    id: 'finance',
    name: 'Customer Name',
    role: 'Finance Manager / CFO',
    company: 'Customer Company',
    industry: 'Freight Forwarding',
    initials: 'CF',
    capability: 'Finance & Profitability',
    accent: '#059669',
    avatar: '',
    quote:
      'Add a verified testimonial about connecting operational costs, revenue, invoicing and profitability.',
  },
  {
    id: 'docs',
    name: 'Customer Name',
    role: 'Documentation / Compliance Manager',
    company: 'Customer Company',
    industry: 'Customs & Documentation',
    initials: 'DC',
    capability: 'Documentation & Compliance',
    accent: '#FACC15',
    avatar: '',
    quote:
      'Add a verified testimonial about reducing fragmented documentation work and improving shipment paperwork visibility.',
  },
  {
    id: 'management',
    name: 'Customer Name',
    role: 'Management / Director',
    company: 'Customer Company',
    industry: 'Freight Forwarding',
    initials: 'MD',
    capability: 'Management Visibility',
    accent: '#84CC16',
    avatar: '',
    quote:
      'Add a verified testimonial about gaining a consolidated view of operations, customers, revenue and business performance.',
  },
  {
    id: 'it',
    name: 'Customer Name',
    role: 'IT / System Administrator',
    company: 'Customer Company',
    industry: 'Freight Forwarding',
    initials: 'IT',
    capability: 'Platform Control',
    accent: '#C4B5FD',
    avatar: '',
    quote:
      'Add a verified testimonial about centralized modules, permissions, configuration and system administration.',
  },
]

export function hexA(hex: string, a: number) {
  const n = Number.parseInt(hex.slice(1), 16)
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`
}

export function ink(color: string, light: boolean) {
  return light ? `color-mix(in srgb, ${color} 55%, #0A2942)` : color
}
