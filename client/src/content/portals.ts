export const CUSTOMER_PORTAL = {
  eyebrow: 'Customer portal',
  title: 'A controlled window into their business with you',
  lede: 'Quotations, shipment progress, permitted documents, invoices, notifications, and payment options, without access to your internal costing or other customers’ data.',
  capabilities: [
    ['Quotations', 'Accept, reject, or negotiate quotes after your team sends them.'],
    ['Shipments', 'Follow progress on their own files with clear status.'],
    ['Documents', 'Download files they are allowed to see, by party permission.'],
    ['Invoices & pay', 'View invoices and pay online via a payment provider when enabled.'],
    ['Notifications', 'Stay informed through portal alerts (and email where configured).'],
    ['Track', 'Public track for progress without exposing commercial costs.'],
  ] as [string, string][],
  boundaries: [
    'Customers do not see other parties’ shipments or invoices',
    'Internal costing, GP, and staff-only notes stay inside the tenant',
    'Portal sign-in is separate from staff ERP login',
  ],
}

export const VENDOR_PORTAL = {
  eyebrow: 'Vendor portal',
  title: 'Assigned work without opening your books',
  lede: 'Carriers, agents, and service vendors view assigned work, exchange documents, submit purchase invoices for review, and follow AP-related information, while your team controls posting and approval.',
  capabilities: [
    ['Assigned work', 'See jobs and tasks linked to them, not unrelated vendor accounts.'],
    ['Documents', 'Exchange files needed to execute and settle the work.'],
    ['Purchase invoices', 'Submit draft purchase invoices for staff review and posting.'],
    ['Cost visibility', 'Cost-side charges for linked jobs where you grant visibility.'],
    ['AP views', 'Aging and remittance-oriented information for vendor finance.'],
    ['Disputes', 'Raise and track dispute records where enabled.'],
  ] as [string, string][],
  boundaries: [
    'Vendors cannot post your general ledger',
    'Vendor portal tokens are not staff ERP sessions',
    'Access is limited to cost-linked and assigned information',
  ],
}
