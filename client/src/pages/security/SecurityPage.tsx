import { Link } from 'react-router-dom'
import {
  DemoCtaBand,
  FaqList,
  MkWrap,
  PageHero,
} from '../../components/marketing/Marketing'
import { AccessHud, FeatureSplit } from '../../components/marketing/LiveHud'
import {
  BarChartCard,
  DataTable,
  IconCardGrid,
  Icons,
} from '../../components/marketing/VisualKit'
import {
  SECURITY_ACCESS,
  SECURITY_ACCOUNT,
  SECURITY_DO_NOT_CLAIM,
  SECURITY_FAQS,
  SECURITY_PILLARS,
} from '../../content/security'
import '../../components/marketing/marketing.css'
import '../../components/marketing/visual-kit.css'
import '../../components/marketing/live-hud.css'

export function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security & Privacy"
        title={
          <>
            Protected access. Separated companies. <em>Honest claims.</em>
          </>
        }
        lede="Kingfisher is a multi-tenant freight platform with separate sign-in paths, role-based permissions, document privacy, and payment handling by a provider — without invented certifications."
        primaryLabel="Request a demonstration"
        secondaryTo="/contact"
        secondaryLabel="Security questionnaire"
      />

      <IconCardGrid
        eyebrow="Verified protections"
        title={
          <>
            What we <em>can</em> say
          </>
        }
        items={SECURITY_PILLARS.map((p, i) => ({
          icon: [Icons.shield, Icons.lock, Icons.users, Icons.doc, Icons.truck, Icons.ledger][i % 6],
          title: p.title,
          body: p.body,
        }))}
      />

      <FeatureSplit
        eyebrow="Access & isolation"
        title={
          <>
            Who sees <em>what</em>
          </>
        }
        body={
          <>
            <p>
              Staff, customers, and vendors use separate sign-in paths. Inside each company, roles
              scope modules and actions — Tenant Admin manages users within their tenant only.
            </p>
            <p>Walk this model live in a demo; no invented certifications required.</p>
          </>
        }
        secondaryTo="/portals"
        secondaryLabel="Portal boundaries"
        metrics="• Tenant separation · RBAC · Session controls"
        panel={<AccessHud />}
      />

      <section className="lf-mk-section">
        <MkWrap>
          <div className="lf-mk-eyebrow">Account protection</div>
          <h2 className="lf-mk-h2" style={{ marginTop: 14, fontSize: 'clamp(28px,3vw,40px)' }}>
            Credentials, sessions, and <em>accountability</em>
          </h2>
          <ul className="lf-mk-list">
            {SECURITY_ACCOUNT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </MkWrap>
      </section>

      <DataTable
        eyebrow="Access model"
        title={
          <>
            Who sees <em>what</em>
          </>
        }
        columns={['Audience', 'Boundary']}
        rows={SECURITY_ACCESS.map(([role, body]) => [role, body])}
      />

      <BarChartCard
        eyebrow="Buyer checklist"
        title={
          <>
            Trust signals buyers usually <em>score</em>
          </>
        }
        sub="Relative emphasis in our security narrative — not a certification score."
        bars={[
          { label: 'Tenant split', value: 96, tone: 'accent' },
          { label: 'RBAC', value: 92, tone: 'cyan' },
          { label: 'Doc privacy', value: 88, tone: 'mint' },
          { label: 'Track hygiene', value: 90, tone: 'accent' },
          { label: 'Pay provider', value: 85, tone: 'cyan' },
        ]}
      />

      <section className="lf-mk-section">
        <MkWrap>
          <div className="lf-mk-eyebrow">Clarity</div>
          <h2 className="lf-mk-h2" style={{ marginTop: 14, fontSize: 'clamp(28px,3vw,40px)' }}>
            What we do <em>not</em> claim
          </h2>
          <ul className="lf-mk-list">
            {SECURITY_DO_NOT_CLAIM.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="lf-mk-sub" style={{ marginTop: 20 }}>
            Read draft legal notices on <Link to="/legal/privacy-policy">Privacy</Link>,{' '}
            <Link to="/legal/data-protection">Data Protection</Link>, and explore{' '}
            <Link to="/portals/customer">Customer</Link> / <Link to="/portals/vendor">Vendor</Link>{' '}
            portal boundaries.
          </p>
        </MkWrap>
      </section>

      <FaqList
        title={
          <>
            Security <em>questions</em>
          </>
        }
        faqs={SECURITY_FAQS}
      />

      <DemoCtaBand
        title={
          <>
            Review security on a <em>live walkthrough.</em>
          </>
        }
        sub="Separate logins, tenant isolation, document visibility, and payment provider flow — demonstrated with your modes in mind."
      />
    </>
  )
}
