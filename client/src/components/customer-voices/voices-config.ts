import cargoConnectLogo from '../../assets/cargo-connect-logo.jpg'
import companyLogo from '../../assets/kf-wings-logistics-logo.png'
import redwoodLogo from '../../assets/redwood-logistics-logo.webp'

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

/** Featured customers — carousel appears when length > 1. */
export const VOICES: Voice[] = [
  {
    id: 'kf-wings',
    name: 'Operations Team',
    role: 'Freight Operations',
    company: 'Kingfisher Wings Logistics',
    industry: 'Freight Forwarding',
    initials: 'KF',
    capability: 'Air · Sea · Road',
    accent: '#60A5FA',
    avatar: companyLogo,
    quote:
      'We move cargo every week across the Gulf, Pakistan and China — air, sea and road. One connected platform finally gave our team clear visibility from booking to delivery, cleaner documentation, and the control we need to keep every corridor running on time.',
  },
  {
    id: 'cargo-connect',
    name: 'Operations Team',
    role: 'Logistics Operations',
    company: 'Cargo Connect',
    industry: 'Logistics',
    initials: 'CC',
    capability: 'End-to-end Logistics',
    accent: '#EA580C',
    avatar: cargoConnectLogo,
    quote:
      'From booking to last-mile, our desk used to juggle separate tools for jobs, docs and customer updates. Running logistics on one platform means our team sees every movement clearly — and customers get answers without the chase.',
  },
  {
    id: 'redwood',
    name: 'Operations Team',
    role: '4PL Operations',
    company: 'Redwood Logistics',
    industry: '4PL · Supply Chain',
    initials: 'RW',
    capability: 'Open 4PL Orchestration',
    accent: '#DC2626',
    avatar: redwoodLogo,
    quote:
      'Orchestrating shippers, carriers and partners across modes used to mean fragmented systems and constant chase-downs. One connected platform gave our teams the visibility and control to run flexible, end-to-end supply chain execution without the spreadsheet handoffs.',
  },
]

export function hexA(hex: string, a: number) {
  const n = Number.parseInt(hex.slice(1), 16)
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`
}

export function ink(color: string, light: boolean) {
  return light ? `color-mix(in srgb, ${color} 55%, #0A2942)` : color
}
