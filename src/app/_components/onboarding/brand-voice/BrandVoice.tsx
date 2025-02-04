import { ChevronDown, Sparkles } from "lucide-react"

interface BrandVoiceProps {
  onNext: () => void
  onBack: () => void
  onSkip: () => void
}

const voiceOptions = [
  {
    label: "Brand Voice Characteristics",
    placeholder: "Select characteristics",
  },
  {
    label: "Writing Style",
    placeholder: "Select style",
  },
  {
    label: "Tone of Voice",
    placeholder: "Select tone",
  },
  {
    label: "Point of View",
    placeholder: "Select point of view",
  },
  {
    label: "Length",
    placeholder: "Select length",
  },
  {
    label: "Vocabulary Level",
    placeholder: "Select level",
  },
]

export function BrandVoice({ onNext, onBack, onSkip }: BrandVoiceProps) {
  return (
    <div className="rounded-xl border border-[#E8E8E8]">
      <div className="flex border-b border-[#E8E8E8]">
        <div className="border-b-2 border-[#F57618] px-8 py-4 font-medium text-[#F57618]">Brand Voice</div>
      </div>

      <div className="p-8">
        <p className="mb-8 text-[#313D4F]">Define the tone and style that best represents your brand's personality.</p>

        <div className="mb-8 flex items-center gap-2">
          <span className="text-[#313D4F]">
            Do you want me to automatically generate selections for you, based on your uploaded Knowledge Base?
          </span>
          <button className="text-[#4880FF]">
            <Sparkles className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {voiceOptions.map((option) => (
            <div key={option.label} className="space-y-2">
              <label className="block text-[#313D4F] font-medium">{option.label}</label>
              <button className="flex w-full items-center justify-between rounded-lg border border-[#E8E8E8] p-3 text-[#979797]">
                <span>{option.placeholder}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

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

