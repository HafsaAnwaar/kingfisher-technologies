import { DemoCtaBand, FaqList, PageHero } from '../../components/marketing/Marketing'
import { SITE_FAQS } from '../../content/resources'
import '../../components/marketing/marketing.css'
import { QuestionsArt } from '../../components/marketing/inner/HeroArt'

export function FaqPage() {
  return (
    <>
      <PageHero
        variant="split" compact fleet="air" art={<QuestionsArt questions={SITE_FAQS.map((f) => f[0])} />}
        eyebrow="FAQ"
        title={
          <>
            Straight answers about <em>Kingfisher.</em>
          </>
        }
        lede="Scope, portals, payments, tracking, and what we do not overclaim, drawn from the product investigation."
        secondaryTo="/resources"
        secondaryLabel="All resources"
      />
      <FaqList
        eyebrow="Answers"
        title={
          <>
            Frequently <em>asked</em>
          </>
        }
        faqs={SITE_FAQS}
      />
      <DemoCtaBand
        title={
          <>
            Still have a <em>question?</em>
          </>
        }
        sub="Request a demonstration or contact sales with your modes and current tools."
      />
    </>
  )
}
