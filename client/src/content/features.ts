export type FeaturePage = {
  slug: string
  name: string
  tagline: string
  purpose: string
  who: string[]
  functions: [string, string][]
  relatedModules: string[]
  faqs: [string, string][]
}

export const FEATURES: FeaturePage[] = [
  {
    slug: 'operations',
    name: 'Operations Management',
    tagline:
      'Air, ocean FCL/LCL, land, courier, NVOCC, warehouse, and customs jobs with shared costing and handoffs.',
    purpose:
      'Give Sales, Ops, Docs, and Accounts one operational file so every mode advances with clear milestones and departmental ownership.',
    who: ['Operations', 'Customer service', 'Branch managers', 'Tenant admins'],
    functions: [
      ['Multi-mode jobs', 'Air, ocean, inland, courier, NVOCC, warehouse, and customs as first-class work.'],
      ['Shared costing', 'Sale, cost, and GP live on the job — not in a side spreadsheet.'],
      ['Milestones', 'Advance status with a trail the whole desk can trust.'],
      ['Department handoffs', 'Sales → Ops → Docs → Accounts designed into the continuum.'],
    ],
    relatedModules: ['air-freight', 'sea-freight', 'nvocc', 'land-courier', 'customs', 'warehouse'],
    faqs: [
      ['Does operations cover all modes?', 'Yes — air, ocean FCL/LCL, inland, courier, NVOCC, warehouse-linked, and customs clearance jobs.'],
      ['Can we start with one mode?', 'Yes. Enable the modules you need and expand as desks come online.'],
    ],
  },
  {
    slug: 'shipments',
    name: 'Shipment Management',
    tagline: 'A booking layer between accepted quotations and executable operational jobs.',
    purpose:
      'Turn commercial intent into work with clear status — so accepted quotes become bookings and jobs without losing context.',
    who: ['Sales', 'Operations', 'Customer service'],
    functions: [
      ['Booking layer', 'Bridge accepted quotations into shipments before jobs execute.'],
      ['Status clarity', 'Commercial and operational status stay readable across teams.'],
      ['Containers & cargo', 'Planned and actual containers, dimensions, and cargo detail on the file.'],
      ['Sub-jobs', 'House–master and related structures where your mode requires them.'],
    ],
    relatedModules: ['air-freight', 'sea-freight', 'tracking', 'documentation'],
    faqs: [
      ['Is a shipment the same as a job?', 'Shipments sit as the booking layer; jobs are the operational execution by mode.'],
      ['Can customers see shipment progress?', 'Yes — via customer portal and public track, without exposing commercial costs.'],
    ],
  },
  {
    slug: 'quotations',
    name: 'Quotation Management',
    tagline: 'Build, verify, send, and convert quotations — with portal accept, reject, or negotiate.',
    purpose:
      'Keep quoting on the same continuum as jobs and finance so accepted commercial work becomes executable files.',
    who: ['Sales', 'Customer service', 'Customers (portal)'],
    functions: [
      ['Draft to send', 'Lines, services, and verification before the quote reaches the customer.'],
      ['Portal decisions', 'Customers accept, reject, or negotiate after a quote is sent.'],
      ['Convert', 'Move accepted quotes into shipments and jobs with parties intact.'],
      ['CRM path', 'Enquiry to quotation without forcing auto-job creation.'],
    ],
    relatedModules: ['finance-accounts', 'tracking', 'documentation'],
    faqs: [
      ['Can customers negotiate in the portal?', 'Yes — after a quote is sent, portal actions support accept, reject, and negotiate.'],
      ['Does quoting connect to finance?', 'Converted work carries into job costing and invoicing on the same continuum.'],
    ],
  },
  {
    slug: 'customers',
    name: 'Customer Management',
    tagline: 'Party profiles, contacts, credit context, and portal users on one commercial record.',
    purpose:
      'One customer record drives quoting, ops visibility, documents, and AR — without duplicate party masters.',
    who: ['Sales', 'Customer service', 'Finance', 'Tenant admins'],
    functions: [
      ['Party master', 'Customers and agents with contacts, addresses, and credit fields.'],
      ['Portal enablement', 'Invite portal users per party with document ACL.'],
      ['Linked records', 'Quotes, shipments, jobs, and invoices via ownership rules.'],
      ['Credit context', 'Credit status available where finance needs it.'],
    ],
    relatedModules: ['finance-accounts', 'tracking', 'documentation'],
    faqs: [
      ['Do customers see other parties’ data?', 'No. Portal ownership limits customers to their own permitted records.'],
      ['Who manages portal invites?', 'Authorized staff and tenant admins within the company tenant.'],
    ],
  },
  {
    slug: 'vendors',
    name: 'Vendor Management',
    tagline: 'Cost visibility, offers, document exchange, and purchase invoice submit — without opening your books.',
    purpose:
      'Coordinate carriers, agents, and service vendors in a controlled space while staff keep posting and approval control.',
    who: ['Operations', 'Finance', 'Vendors (portal)'],
    functions: [
      ['Vendor parties', 'Supplier and agent masters linked to cost-side work.'],
      ['Cost visibility', 'Vendors see cost-linked job information — not unrelated accounts.'],
      ['Purchase invoices', 'Vendors submit drafts; staff review and post.'],
      ['AP views', 'Aging and remittance-oriented visibility for vendor finance.'],
    ],
    relatedModules: ['finance-accounts', 'documentation', 'land-courier'],
    faqs: [
      ['Can vendors post our ledger?', 'No. Vendors submit for review; your team controls posting and approval.'],
      ['Is there a vendor portal?', 'Yes — a dedicated sign-in path for assigned work and documents.'],
    ],
  },
  {
    slug: 'documents',
    name: 'Document Management',
    tagline: 'Collect booking and compliance documents with controlled visibility on the shipment file.',
    purpose:
      'Keep shipment files organized for staff, customers, and vendors — private storage, authorized downloads, clear visibility rules.',
    who: ['Documentation', 'Operations', 'Customers', 'Vendors'],
    functions: [
      ['Collection', 'Booking and compliance packs attached to the operational file.'],
      ['Access control', 'Internal vs customer-visible document types and portal ACL.'],
      ['Private storage', 'Business files intended for private durable storage when configured.'],
      ['Authorized routes', 'Downloads served through controlled application paths.'],
    ],
    relatedModules: ['documentation', 'customs', 'tracking'],
    faqs: [
      ['Are documents on public track?', 'Public track shares progress without exposing confidential commercial detail or internal notes.'],
      ['Who sees which files?', 'Visibility follows job document rules and portal party permissions.'],
    ],
  },
  {
    slug: 'finance',
    name: 'Financial Management',
    tagline: 'Invoices, credit notes, ledger, receipts, payments, AR/AP, and job profitability.',
    purpose:
      'Connect job charges to customer and vendor invoices, post into the company ledger, and keep AR/AP readable.',
    who: ['Finance', 'Accounts', 'Management'],
    functions: [
      ['Invoicing', 'Customer invoices and credit notes tied to operational work.'],
      ['Ledger', 'Post into the company general ledger as the financial source of truth.'],
      ['Receipts & payments', 'Allocate receipts and payments against open items.'],
      ['Online pay', 'Checkout via a payment provider; Kingfisher records the business receipt.'],
    ],
    relatedModules: ['finance-accounts', 'reports'],
    faqs: [
      ['Does Kingfisher store card numbers?', 'No. Online payments are processed by a payment provider; Kingfisher updates invoices and receipts in your books.'],
      ['Does it replace external accounting?', 'Kingfisher includes GL, AR/AP, and reports. Some companies still integrate externally — discuss fit in a demo.'],
    ],
  },
  {
    slug: 'business-intelligence',
    name: 'Business Intelligence',
    tagline: 'MIS dashboards, financial statements, CRM insights, and operational reports.',
    purpose:
      'Help management and desks understand performance from real GL, CRM, and ops data — without invented KPI theater.',
    who: ['Management', 'Finance', 'Sales', 'Operations'],
    functions: [
      ['MIS & statements', 'Profitability views plus trial balance, P&L, balance sheet, and related statements.'],
      ['CRM insights', 'Leads, calls, follow-ups, and campaign metrics for sales.'],
      ['Ops boards', 'Exceptions, job-not-invoiced, and operational KPI views.'],
      ['Report catalog', 'Generate and download report packs your tenant is entitled to run.'],
    ],
    relatedModules: ['reports', 'finance-accounts'],
    faqs: [
      ['Is there a single CEO dashboard?', 'We surface MIS, ops, and CRM views from real endpoints — not a fabricated all-in-one widget wall.'],
      ['NVOCC reporting?', 'Voyage P&L, utilization, and trade-lane style reports are available for NVOCC ops.'],
    ],
  },
  {
    slug: 'users-permissions',
    name: 'Users & Permissions',
    tagline: 'Role-based staff access so each team sees the modules and actions they are authorized to use.',
    purpose:
      'Separate Super Admin, Tenant Admin, and staff roles clearly — finance, ops, and sales see what they should.',
    who: ['Tenant admins', 'Branch managers', 'All staff'],
    functions: [
      ['Role-based access', 'Module permissions and job-type scopes for staff.'],
      ['Tenant admin', 'User and configuration management within their own tenant only.'],
      ['Separate sign-in', 'Staff, customers, and vendors use distinct secure login paths.'],
      ['Session controls', 'Idle timeout, logout, and admin force-logout for oversight.'],
    ],
    relatedModules: ['reports', 'finance-accounts'],
    faqs: [
      ['Can Tenant Admin manage other companies?', 'No. Tenant Admin manages users within their own tenant only.'],
      ['Who manages platform tenants?', 'Super Admin manages companies and tenants at the platform level.'],
    ],
  },
  {
    slug: 'activity-monitoring',
    name: 'Activity Monitoring',
    tagline: 'Operational conversations, notifications, and accountable history on the files that matter.',
    purpose:
      'Keep comments, attachments, follow-ups, and significant actions on jobs and related entities for shared accountability.',
    who: ['Operations', 'Customer service', 'Finance', 'Management'],
    functions: [
      ['Ops continuum', 'Comments, attachments, tags, and complaints on the job file.'],
      ['Notifications', 'Domain events create in-app alerts (and often email).'],
      ['Audit trail', 'Significant operational and financial actions write accountable history.'],
      ['Login history', 'Sign-in activity retained for business oversight.'],
    ],
    relatedModules: ['tracking', 'documentation', 'finance-accounts'],
    faqs: [
      ['Is activity visible to customers?', 'Customers see portal-appropriate notifications and documents — not internal staff-only notes.'],
      ['Can admins force logout?', 'Authorized administrators can revoke sessions when needed.'],
    ],
  },
]

export const FEATURE_BY_SLUG = Object.fromEntries(FEATURES.map((f) => [f.slug, f])) as Record<
  string,
  FeaturePage
>

export function featurePath(slug: string) {
  return `/features/${slug}`
}
