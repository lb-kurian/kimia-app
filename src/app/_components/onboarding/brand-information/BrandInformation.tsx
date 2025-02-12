import { BrandOverview } from "./BrandOverview"
import { VisualDesign } from "./VisualDesign"

interface BrandInformationProps {
  tabs: string[]
  activeTab: string
  onNext: () => void
  onBack: () => void
  onSkip: () => void
  onTabChange: (tab: string) => void
}

export function BrandInformation({ tabs, activeTab, onNext, onBack, onSkip, onTabChange }: BrandInformationProps) {
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
      <div className="flex-grow overflow-y-auto">
        {activeTab === "Brand Overview" ? <BrandOverview /> : <VisualDesign />}
      </div>
      <div className="flex items-center justify-between border-t border-[#E8E8E8] p-6">
        <button className="text-[#038baf] underline" onClick={onSkip}>
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

