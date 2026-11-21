/** Verified security messaging from product-intelligence/03 + 06 — no invented certifications. */

export const SECURITY_PILLARS = [
  {
    title: 'Separate sign-in paths',
    body: 'Staff, customers, and vendors do not share the same login doorway. Credentials are required and verified before access.',
  },
  {
    title: 'Tenant separation',
    body: 'Each company’s records are scoped to its own business space, with access restricted to authorized users.',
  },
  {
    title: 'Role-based staff access',
    body: 'Finance, operations, and sales see the modules and actions they are authorized to use — Tenant Admin manages users within their tenant only.',
  },
  {
    title: 'Document privacy',
    body: 'Sensitive business documents are kept private and accessible only through authorized paths and visibility rules.',
  },
  {
    title: 'Track without exposure',
    body: 'Public tracking shares shipment progress without exposing confidential costs, GP, or internal notes.',
  },
  {
    title: 'Payments by provider',
    body: 'Online checkout is processed by a payment provider. Kingfisher records the business receipt and invoice status in your books — it does not store full card numbers.',
  },
] as const

export const SECURITY_ACCOUNT = [
  'Password-protected accounts with secure one-way password storage practices',
  'Invite and activation flows instead of open registration into a tenant',
  'Server-side sessions that can expire after inactivity and be ended by administrators',
  'Login throttling on portal and related auth paths',
  'Account status checks so disabled or locked accounts cannot continue',
  'Login and session history retained for accountability',
] as const

export const SECURITY_ACCESS = [
  ['Super Admin', 'Manages companies and tenants at the platform level — not as ordinary tenant staff inside customer books.'],
  ['Tenant Admin', 'Manages users and configuration within their own tenant only.'],
  ['Staff', 'Module permissions and job-type scopes (Sales, Ops, Finance, and other desks).'],
  ['Customers', 'Only their party’s permitted shipments, documents, quotes, and invoices.'],
  ['Vendors', 'Only assigned or cost-linked information — cannot post the tenant’s books.'],
] as const

export const SECURITY_DO_NOT_CLAIM = [
  'Fake certifications, awards, or compliance seals we have not earned',
  'That Kingfisher stores or vaults full payment card numbers',
  'Global certified customs filing everywhere',
  'Unbreakable, military-grade, or invented uptime guarantees',
] as const

export const SECURITY_FAQS: [string, string][] = [
  [
    'How is my company data separated?',
    'Each company operates in its own tenant space with authenticated access and role-based permissions.',
  ],
  [
    'How do online payments work?',
    'Online checkout is processed by a payment provider. Kingfisher records the receipt against invoices in your company books.',
  ],
  [
    'Can customers see other customers’ data?',
    'No. Portal ownership rules restrict customers to their own permitted records.',
  ],
  [
    'What about public track & trace?',
    'Public track supports lookup by reference while withholding sensitive commercial details.',
  ],
]
