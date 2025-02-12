import { Demographic } from "./tabs/Demographic"
import { Psychographic } from "./tabs/Psychographic"
import { Behavioral } from "./tabs/Behavioral"
import { Segments } from "./tabs/Segments"

interface TargetAudienceProps {
  tabs: string[]
  activeTab: string
  onTabChange: (tab: string) => void
  onNext: () => void
  onBack: () => void
  onSkip: () => void
}

export function TargetAudience({ tabs, activeTab, onTabChange, onSkip, onNext, onBack }: TargetAudienceProps) {
  const renderContent = () => {
    switch (activeTab) {
      case "Demographic":
        return <Demographic onSkip={onSkip} />
      case "Psycographic":
        return <Psychographic onSkip={onSkip} />
      case "Behavioral":
        return <Behavioral onSkip={onSkip} />
      case "Segments":
        return <Segments onSkip={onSkip} />
      default:
        return null
    }
  }

  return (
    <div className="rounded-xl border border-[#E8E8E8] flex flex-col min-h-[600px]">
      <div className="flex border-b border-[#E8E8E8]">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-8 py-4 font-medium ${
              activeTab === tab ? "border-b-2 border-[#F57618] text-[#F57618]" : "text-[#313D4F]"
            }`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex-grow overflow-y-auto">{renderContent()}</div>
      <div className="flex items-center justify-between border-t border-[#E8E8E8] p-6">
        <button className="text-[#4880FF] underline" onClick={onSkip}>
          Skip
        </button>
        <div className="flex gap-4">
          <button
            className="rounded-full border border-[#038baf] px-8 py-2.5 text-[#038baf] hover:bg-[#038baf]/5"
            onClick={onBack}
          >
            Back
          </button>
          <button
            className="rounded-full border border-[#038baf] bg-[#038baf] px-8 py-2.5 text-white hover:bg-[#038baf]/90"
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

