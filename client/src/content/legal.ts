/** Draft legal pages — require company legal review before treating as final. */

export type LegalDoc = {
  slug: string
  title: string
  updated: string
  sections: { heading: string; paragraphs: string[] }[]
}

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    updated: 'Draft — November 2026',
    sections: [
      {
        heading: 'About this draft',
        paragraphs: [
          'This page is a marketing-site draft informed by product design. It is not legal advice and must be reviewed by company counsel before publication as binding policy.',
        ],
      },
      {
        heading: 'What we process',
        paragraphs: [
          'Kingfisher Technologies provides a multi-tenant freight management platform. Business contact details submitted via demo or contact forms (such as name, company, email, phone, and message) are used to respond to your enquiry.',
          'Within the product, tenant companies process operational and commercial data they enter (parties, jobs, documents, invoices). Kingfisher processes that data to provide the service under the customer’s instructions and contract.',
        ],
      },
      {
        heading: 'Access and separation',
        paragraphs: [
          'Each customer company operates in a separated tenant space. Staff, customers, and vendors use separate sign-in paths with role-based and ownership-based access controls.',
        ],
      },
      {
        heading: 'Payments',
        paragraphs: [
          'Online payments are processed by a payment provider. Kingfisher does not position itself as storing full payment card numbers; the provider handles card checkout and Kingfisher records business receipts in the tenant books.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'For privacy questions about this website or the platform, use the Contact page. Formal DPO or counsel contacts will be published when designated by the company.',
        ],
      },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms of Use',
    updated: 'Draft — November 2026',
    sections: [
      {
        heading: 'About this draft',
        paragraphs: [
          'These website terms are a draft placeholder. Software subscription terms, SLAs, and acceptable-use rules are defined in customer agreements — not solely on this page.',
        ],
      },
      {
        heading: 'Website use',
        paragraphs: [
          'You may browse this marketing site for informational purposes. Do not misuse forms, attempt unauthorized access, or scrape content in ways that harm the service.',
        ],
      },
      {
        heading: 'Product access',
        paragraphs: [
          'Access to the Kingfisher platform is provided under separate commercial agreements with each customer company (tenant). Portal users access only what their company authorizes.',
        ],
      },
      {
        heading: 'Accuracy',
        paragraphs: [
          'Product descriptions on this site aim to reflect implemented capabilities. Demo conversations confirm fit for your modes and finance stack.',
        ],
      },
    ],
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    updated: 'Draft — November 2026',
    sections: [
      {
        heading: 'About this draft',
        paragraphs: [
          'This cookie notice is a draft for the marketing website. Counsel should finalize categories, retention, and consent mechanics for your hosting and analytics stack.',
        ],
      },
      {
        heading: 'Essential cookies',
        paragraphs: [
          'We may use cookies or local storage required for theme preference, session continuity on the marketing site, and security of forms.',
        ],
      },
      {
        heading: 'Analytics',
        paragraphs: [
          'If analytics are enabled, they will be disclosed here with opt-out or consent as required by applicable law. Until configured, assume only essential site function storage is in use.',
        ],
      },
    ],
  },
  {
    slug: 'data-protection',
    title: 'Data Protection',
    updated: 'Draft — November 2026',
    sections: [
      {
        heading: 'About this draft',
        paragraphs: [
          'This summary describes product-aligned data-protection practices. It is not a substitute for a counsel-approved DPA or regional privacy notice.',
        ],
      },
      {
        heading: 'Tenant isolation',
        paragraphs: [
          'Business records are scoped to the customer’s tenant. Application access uses authentication, role-based permissions, and ownership filters for customer and vendor portals.',
        ],
      },
      {
        heading: 'Documents',
        paragraphs: [
          'Business files are intended for private durable storage when configured. Downloads are served through authorized application routes with visibility rules.',
        ],
      },
      {
        heading: 'Accountability',
        paragraphs: [
          'Significant operational and financial actions write activity history. Sessions can expire after inactivity and can be revoked by administrators.',
        ],
      },
      {
        heading: 'What we do not claim here',
        paragraphs: [
          'Published retention schedules, one-click erasure packs, and formal certification seals are not advertised until productized and legally reviewed.',
        ],
      },
    ],
  },
]

export const LEGAL_BY_SLUG = Object.fromEntries(LEGAL_DOCS.map((d) => [d.slug, d])) as Record<
  string,
  LegalDoc
>

export function legalPath(slug: string) {
  return `/legal/${slug}`
}
