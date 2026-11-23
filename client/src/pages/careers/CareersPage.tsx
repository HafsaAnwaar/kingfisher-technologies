import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DemoCtaBand, FeatureGrid, MkWrap, PageHero, SectionHead } from '../../components/marketing/Marketing'
import { ProgressRail, useInViewPlay } from '../../components/marketing/motion'
import { CareersFloatPills } from '../../components/marketing/stages/ArtifactStages'
import '../../components/marketing/marketing.css'
import '../../components/marketing/motion/motion.css'
import { CareersArt } from '../../components/marketing/inner/HeroArt'

const ROLES = [
  {
    title: 'Product designer · freight ops',
    detail: 'Shape job boards, milestones and document flows operators actually trust.',
  },
  {
    title: 'Full-stack engineer · platform',
    detail: 'Build multi-tenant ERP surfaces across modes, docs and finance.',
  },
  {
    title: 'Solutions engineer',
    detail: 'Map forwarder workflows to Kingfisher modules and run sharp demos.',
  },
]

export function CareersPage() {
  const { ref, play } = useInViewPlay<HTMLElement>(0.2)
  const [open, setOpen] = useState(0)
  const [hover, setHover] = useState(false)

  return (
    <>
      <PageHero
        variant="split" flip fleet="mix" art={<CareersArt teams={['Product', 'Design', 'Engineering', 'Solutions', 'Freight ops']} />}
        eyebrow="Careers"
        title={
          <>
            Help us rewire how <em>forwarders</em> operate.
          </>
        }
        lede="Build product for people who move freight for a living — desks, cut-offs, documents and margins included."
        caps={['Freight-native', 'Multi-city', 'Open roles']}
      />

      <section className="lf-mk-section lf-mk-flush">
        <MkWrap>
          <div className="lf-mk-stats">
            <div className="lf-mk-stat">
              <b>Freight-native</b>
              <span>Domain-heavy product work</span>
            </div>
            <div className="lf-mk-stat">
              <b>Multi-city</b>
              <span>Placeholder hubs</span>
            </div>
            <div className="lf-mk-stat">
              <b>Open</b>
              <span>Roles listed below</span>
            </div>
          </div>
          <CareersFloatPills />
        </MkWrap>
      </section>

      <FeatureGrid
        eyebrow="What you get"
        title={
          <>
            What you <em>get</em>
          </>
        }
        features={[
          [
            'Meaningful ownership',
            'Own workflows that operators feel every day — not vanity dashboards.',
          ],
          ['Learn the domain', 'Time with forwarding, NVOCC and brokerage reality.'],
          ['Health & support', 'Placeholder benefits block for the live careers page.'],
          ['Team offsites', 'Build trust in person — placeholder for culture detail.'],
        ]}
      />

      <section
        className="lf-mk-section"
        id="open-roles"
        ref={ref}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <MkWrap>
          <SectionHead
            eyebrow="Open roles"
            title={
              <>
                Find your <em>spot</em>
              </>
            }
          />
          <div className="lf-mk-day lf-x-roles lf-x-reveal">
            {ROLES.map((role, index) => (
              <button
                type="button"
                key={role.title}
                className={index === open ? 'is-on' : undefined}
                onClick={() => setOpen(index)}
              >
                <span className="beat-n">0{index + 1}</span>
                <span>
                  <div className="beat-t">{role.title}</div>
                  {index === open ? <div className="beat-d">{role.detail}</div> : null}
                </span>
                <span className="lf-x-role-go" aria-hidden="true">
                  →
                </span>
                {index === open ? (
                  <ProgressRail
                    active={play}
                    paused={hover}
                    durationSec={7}
                    onComplete={() => setOpen((i) => (i + 1) % ROLES.length)}
                  />
                ) : null}
              </button>
            ))}
          </div>
          <p className="lf-mk-sub lf-x-roles-note">
            We still want to hear from great people. Write to{' '}
            <Link to="/contact">[careers email]</Link> with what you build and why freight.
          </p>
        </MkWrap>
      </section>

      <DemoCtaBand
        title={
          <>
            Build with <em>us.</em>
          </>
        }
        sub="Whether you are exploring roles or partnering with Kingfisher, start a conversation."
      />
    </>
  )
}
