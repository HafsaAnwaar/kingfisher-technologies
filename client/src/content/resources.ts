/** FAQ + resource cards from product-intelligence/06 — honest scope. */

export const SITE_FAQS: [string, string][] = [
  [
    'What is Kingfisher Technologies?',
    'A freight and logistics management platform for forwarders and logistics companies covering quotations, multi-mode jobs, documents, portals, and financial control.',
  ],
  [
    'Who is it for?',
    'Freight forwarders, NVOCCs, customs-focused operators, and logistics companies that need connected operations and accounts.',
  ],
  [
    'Does it support air and sea?',
    'Yes — air import/export, ocean FCL/LCL, plus inland, courier, NVOCC, warehouse, and customs clearance job types.',
  ],
  [
    'Is there a customer portal?',
    'Yes. Customers can work with quotations, shipments, documents, invoices, and notifications according to permissions you grant.',
  ],
  [
    'Is there a vendor portal?',
    'Yes. Vendors can access assigned work and related documents and submit purchase invoices for your team to review.',
  ],
  [
    'Does Kingfisher replace my accounting system?',
    'Kingfisher includes general ledger, AR/AP, vouchers, and financial reports. Some companies still integrate with external accounting — discuss fit during a demo.',
  ],
  [
    'How do online payments work?',
    'Online checkout is processed by a payment provider. Kingfisher records the receipt against invoices in your company books.',
  ],
  [
    'How is my company data separated?',
    'Each company operates in its own tenant space with authenticated access and role-based permissions.',
  ],
  [
    'Can customers track shipments without logging in?',
    'Public track & trace supports lookup by reference, with sensitive commercial details withheld.',
  ],
  [
    'Do you have a mobile app?',
    'A native mobile app is not positioned as a current product offering. Browser access is the primary model.',
  ],
  [
    'Is WhatsApp built in as the main channel?',
    'Email and in-app notifications are the primary channels. WhatsApp should not be marketed as a core completed channel.',
  ],
]

export const RESOURCE_GUIDES = [
  {
    slug: 'quote-to-invoice',
    title: 'From quotation to invoice',
    blurb: 'How enquiry, quote, booking, job, and invoice stay on one continuum.',
    body: [
      'Sales builds and sends a quotation. Customers can accept, reject, or negotiate in the portal.',
      'Accepted commercial intent becomes a shipment booking, then mode-specific jobs with milestones.',
      'Documents and customs stages attach to the same file. Finance invoices from job charges into the ledger.',
      'Customers see progress and invoices in the portal; public track withholds commercial costs.',
    ],
  },
  {
    slug: 'portals-boundaries',
    title: 'Customer & vendor portal boundaries',
    blurb: 'What each portal can see — and what stays inside your tenant.',
    body: [
      'Customer portal: their quotes, shipments, permitted documents, invoices, and notifications.',
      'Vendor portal: assigned work, document exchange, draft purchase invoices, and AP-oriented views.',
      'Staff ERP remains the system of record for posting, approvals, and cross-party visibility.',
      'Separate sign-in paths keep staff, customer, and vendor sessions distinct.',
    ],
  },
  {
    slug: 'security-basics',
    title: 'Security basics for buyers',
    blurb: 'Verified protections only — tenant isolation, roles, documents, and payments.',
    body: [
      'Each company works in a separated tenant space with role-based staff permissions.',
      'Documents use private storage patterns and authorized download paths when configured.',
      'Public track shares progress without exposing costs or internal notes.',
      'Online card payments are handled by a payment provider; Kingfisher records the business receipt.',
    ],
  },
] as const

export const RESOURCE_INSIGHTS = [
  {
    slug: 'operating-platform-not-tracker',
    title: 'An operating platform — not only a tracker',
    blurb: 'Why forwarders need quotations, jobs, docs, portals, and ledgers on one record.',
  },
  {
    slug: 'handoffs-that-hold',
    title: 'Handoffs that hold',
    blurb: 'Sales → Ops → Docs → Accounts designed into workflows instead of inbox archaeology.',
  },
  {
    slug: 'honest-security-copy',
    title: 'Honest security copy',
    blurb: 'What to expect from tenant isolation and portals — without fake badges.',
  },
] as const

export const PRODUCT_UPDATES = [
  {
    title: 'Product intelligence pack published',
    date: 'November 2026',
    blurb: 'Website architecture, feature inventory, and verified security messaging documented for marketing build-out.',
  },
  {
    title: 'Portal & continuum focus',
    date: '2026',
    blurb: 'Customer and vendor portals, multi-mode jobs, and finance posting remain the demonstration spine.',
  },
] as const
