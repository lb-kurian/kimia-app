import type React from "react"
import { useLanguage } from "../../../contexts/LanguageContext"
import { smartPublisherContent } from "../../../locales/onboarding/smartPublisher"

const SmartPublisherSection: React.FC = () => {
  const { language } = useLanguage()
  const content = smartPublisherContent[language as keyof typeof smartPublisherContent]

  return (
    <div className="flex flex-col tracking-normal">
      <div className="flex flex-col mb-6">
        <div className="text-3xl font-bold text-neutral-800">{content.title}</div>
        <div className="text-lg text-neutral-400 mt-2">{content.subtitle}</div>
      </div>
      <div className="text-base text-neutral-400 space-y-6">
        <p>{content.paragraph1}</p>
        <p>{content.paragraph2}</p>
        <p>{content.paragraph3}</p>
      </div>
    </div>
  )
}

export default SmartPublisherSection

