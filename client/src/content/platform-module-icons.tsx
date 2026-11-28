import type { CSSProperties } from 'react'
import {
  BarChart3,
  Building2,
  ClipboardCheck,
  FileText,
  Link2,
  Package,
  Plane,
  Ship,
  Truck,
  Wallet,
  Warehouse,
  type LucideIcon,
} from 'lucide-react'

/** Same Lucide icons + accents as FreightNest sidebar (`SIDEBAR_ICON_STYLES` / dept icons). */
export type PlatformModuleIconDef = {
  Icon: LucideIcon
  color: string
}

export const PLATFORM_MODULE_ICONS: Record<string, PlatformModuleIconDef> = {
  'air-freight': { Icon: Plane, color: '#60A5FA' },
  'sea-freight': { Icon: Ship, color: '#2DD4BF' },
  nvocc: { Icon: Building2, color: '#9333EA' },
  'land-courier': { Icon: Truck, color: '#F97316' },
  customs: { Icon: ClipboardCheck, color: '#0F766E' },
  documentation: { Icon: FileText, color: '#FACC15' },
  warehouse: { Icon: Warehouse, color: '#0D9488' },
  'general-trading': { Icon: Link2, color: '#7C3AED' },
  tracking: { Icon: Package, color: '#2DD4BF' },
  'finance-accounts': { Icon: Wallet, color: '#059669' },
  reports: { Icon: BarChart3, color: '#DC2626' },
}

function accentTint(color: string, alpha: number): string {
  const hex = color.replace('#', '')
  if (hex.length !== 6) return color
  const r = Number.parseInt(hex.slice(0, 2), 16)
  const g = Number.parseInt(hex.slice(2, 4), 16)
  const b = Number.parseInt(hex.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function PlatformModuleIcon({
  slug,
  size = 22,
  className = 'lf-vk-icon',
}: {
  slug: string
  size?: number
  className?: string
}) {
  const def = PLATFORM_MODULE_ICONS[slug]
  if (!def) return null
  const { Icon, color } = def
  const style = {
    color,
    background: accentTint(color, 0.18),
    borderColor: accentTint(color, 0.35),
  } as CSSProperties

  return (
    <span className={className} style={style} aria-hidden="true">
      <Icon size={size} strokeWidth={2.1} />
    </span>
  )
}
