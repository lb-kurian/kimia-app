import { ChevronDown, Sparkles } from "lucide-react"

interface SegmentsProps {
  onSkip: () => void
}

export function Segments({ onSkip }: SegmentsProps) {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-center gap-2">
        <span className="text-[#313D4F]">
          Do you want me to automatically generate selections for you, based on your uploaded Knowledge Base?
        </span>
        <button className="text-[#4880FF]" aria-label="Generate from Knowledge Base">
          <Sparkles className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-2">
        <button
          className="flex w-full items-center justify-between rounded-lg border border-[#E8E8E8] p-3 text-[#979797]"
          aria-expanded="false"
        >
          <span>Segments</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

