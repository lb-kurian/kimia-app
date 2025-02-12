import { DocumentList } from "./DocumentList"
import { LandingPages } from "./LandingPages"
import { SocialMediaPages } from "./SocialMediaPages"

interface TabsProps {
  tabs: string[]
  activeTab: string
  onNext: () => void
  onBack: () => void
  onSkip: () => void
  onTabChange: (tab: string) => void
  loading?: boolean
}

export function Tabs({ tabs, activeTab, onNext, onBack, onSkip, onTabChange, loading = false }: TabsProps) {
  const renderContent = () => {
    if (loading) {
      return (
        <div className="p-8">
          <div className="h-4 w-3/4 animate-pulse bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-1/2 animate-pulse bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-2/3 animate-pulse bg-gray-200 rounded mb-4"></div>
        </div>
      )
    }

    switch (activeTab) {
      case "Documents":
        return <DocumentList />
      case "Landing Pages":
        return <LandingPages />
      case "Social Media Pages":
        return <SocialMediaPages />
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
            disabled={loading}
          >
            {loading ? <div className="h-4 w-24 animate-pulse bg-gray-200 rounded"></div> : tab}
          </button>
        ))}
      </div>
      <div className="flex-grow overflow-y-auto">{renderContent()}</div>
      <div className="flex items-center justify-between border-t border-[#E8E8E8] p-6">
        <button className="text-[#038baf] underline" onClick={onSkip} disabled={loading}>
          Skip
        </button>
        <div className="flex gap-4">
          <button
            className="rounded-full border border-[#038baf] px-8 py-2.5 text-[#038baf] hover:bg-[#038baf]/5"
            onClick={onBack}
            disabled={loading}
          >
            Back
          </button>
          <button
            className="rounded-full border border-[#038baf] bg-[#038baf] px-8 py-2.5 text-white hover:bg-[#038baf]/90"
            onClick={onNext}
            disabled={loading}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

