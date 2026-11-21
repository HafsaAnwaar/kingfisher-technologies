/**
 * Artifact → live site animation map
 * Source: Claude Design artifact Ei3D8c1p (design-reference/artifact-Ei3D8c1p/ANIMATIONS.md)
 *
 * Module stages stay unique (not homepage HIW iso map). Homepage keeps Five flows.
 */

/** Claude board → live route / section → motions wired in */
export const ARTIFACT_SITE_MAP = [
  {
    artifact: 'Main.dc.html',
    site: '/ (Hero, LogoMarquee, HowItWorks, Platform, ModuleStack)',
    motions: ['bob', 'ping', 'mq', 'mv', 'flow', 'draw', 'fillbar', 'sweep', 'shimmer', 'scan', 'spin'],
    status: 'home-native',
  },
  {
    artifact: 'Platform.dc.html',
    site: '/platform hub preview + homepage Platform',
    motions: ['flow', 'spin', 'ping', 'bob', 'sweepY'],
    status: 'partial',
  },
  {
    artifact: 'Operations.dc.html',
    site: '/platform/land-courier · PodBoardBody (drive lanes + dash road)',
    motions: ['drive', 'dash', 'dotp'],
    status: 'mapped',
  },
  {
    artifact: 'Finance.dc.html',
    site: '/platform/finance-accounts · CostLedgerBody (POSTED stamp + bars)',
    motions: ['grow', 'stamp', 'flow'],
    status: 'mapped',
  },
  {
    artifact: 'Sales.dc.html',
    site: '/ ModuleStack pipeline + solution persona beats',
    motions: ['travel', 'hue', 'gp', 'blink'],
    status: 'partial',
  },
  {
    artifact: 'Portals.dc.html',
    site: '/platform/tracking · TrackPortalBody (bell ring + slide-in feed)',
    motions: ['ring', 'slidein', 'bob', 'pop'],
    status: 'mapped',
  },
  {
    artifact: 'Warehouse.dc.html',
    site: '/platform/warehouse · WarehouseFlowBody (conveyor + belt + slots + outq)',
    motions: ['conveyor', 'belt', 'slot', 'outq'],
    status: 'mapped',
  },
  {
    artifact: 'Developers.dc.html',
    site: '/platform/tracking scan feed (terminal-like) — no /developers route',
    motions: ['ln', 'blink', 'up', 'flow', 'ping'],
    status: 'borrowed',
  },
  {
    artifact: 'Security.dc.html',
    site: '/customers Security section · SecurityPacketStage',
    motions: ['wave', 'packet', 'lit', 'draw'],
    status: 'mapped',
  },
  {
    artifact: 'Track.dc.html',
    site: '/platform/tracking · TrackPortalBody',
    motions: ['dotp', 'flow'],
    status: 'mapped',
  },
  {
    artifact: 'Pricing.dc.html',
    site: '/pricing · Growth plan halo spin',
    motions: ['spin'],
    status: 'mapped',
  },
  {
    artifact: 'About.dc.html',
    site: '/about · dive stage removed',
    motions: [],
    status: 'skipped',
  },
  {
    artifact: 'FAQ.dc.html',
    site: '/#faq · FaqChatStage beside Implementation FAQ',
    motions: ['bubble', 'typing', 'dotp', 'open'],
    status: 'mapped',
  },
  {
    artifact: 'Careers.dc.html',
    site: '/careers · CareersFloatPills',
    motions: ['bob', 'fade'],
    status: 'mapped',
  },
  {
    artifact: 'Clients.dc.html',
    site: '/customers logo marquee + story SwapFrame',
    motions: ['mq', 'fade'],
    status: 'mapped',
  },
  {
    artifact: 'Contact.dc.html',
    site: '/contact + homepage ContactDemo',
    motions: ['draw', 'pop', 'flow'],
    status: 'partial',
  },
  {
    artifact: 'Industries.dc.html',
    site: '/solutions hub (persona cards) — wordin/orbit not ported as page',
    motions: ['wordin', 'orbit'],
    status: 'deferred',
  },
  {
    artifact: 'Services.dc.html',
    site: '/#implementation steps (lit sequence affinity)',
    motions: ['grow', 'lit', 'spin'],
    status: 'partial',
  },
  {
    artifact: 'Login / News / Partners / Support / Legal / Resources / Nav / Footer',
    site: 'No dedicated marketing routes (or static chrome)',
    motions: [],
    status: 'deferred',
  },
] as const

export const STAGE_ANIM: Record<string, { motions: string[]; section: string; artifact?: string }> = {
  routeMap: {
    motions: ['flight-or-vessel', 'milestone-tick', 'doc-or-container-fill', 'flow-accordion'],
    section: 'ModuleFlowSection + AirBoard / SeaBoard',
    artifact: 'Main / Platform network language',
  },
  voyageHud: {
    motions: ['capacity-fill', 'booking-cascade', 'hbl-tick', 'flow-accordion'],
    section: 'ModuleFlowSection + VoyageBoard',
  },
  podRun: {
    motions: ['drive', 'dash', 'truck-pod', 'milestone-tick', 'flow-accordion'],
    section: 'ModuleFlowSection + PodBoard ← Operations.dc.html',
    artifact: 'Operations.dc.html',
  },
  liveTrack: {
    motions: ['eta-tick', 'slidein-feed', 'ring-bell', 'progress-bar', 'flow-accordion'],
    section: 'ModuleFlowSection + TrackPortal ← Portals + Track',
    artifact: 'Portals.dc.html / Track.dc.html',
  },
  clearance: {
    motions: ['checklist-stamp', 'progress-rail', 'flow-accordion'],
    section: 'ModuleFlowSection + ChecklistBody',
  },
  docPack: {
    motions: ['doc-assemble', 'stamp', 'flow-accordion'],
    section: 'ModuleFlowSection + DocPackBody',
  },
  yardGrid: {
    motions: ['zone-advance', 'conveyor', 'belt', 'slot', 'outq', 'flow-accordion'],
    section: 'ModuleFlowSection + WarehouseFlow ← Warehouse.dc.html',
    artifact: 'Warehouse.dc.html',
  },
  costLedger: {
    motions: ['ledger-cascade', 'margin-flash', 'stamp-posted', 'flow-accordion'],
    section: 'ModuleFlowSection + CostLedger ← Finance.dc.html',
    artifact: 'Finance.dc.html',
  },
  kpiCharts: {
    motions: ['bar-grow', 'kpi-tick', 'period-swap', 'flow-accordion'],
    section: 'ModuleFlowSection + KpiChartsBody',
  },
}
