"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Sparkles } from "lucide-react"
import { getApi } from "@/lib/apiClient"

interface BrandVoiceProps {
  onNext: () => void
  onBack: () => void
  onSkip: () => void
}

interface BrandVoiceOptions {
  brand_voice_characteristics: string[]
  content_lengths: string[]
  writing_styles: string[]
  vocabulary_levels: string[]
  tone_of_voices: string[]
  points_of_view: string[]
}

export function BrandVoice({ onNext, onBack, onSkip }: BrandVoiceProps) {
  const [options, setOptions] = useState<BrandVoiceOptions | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchOptions() {
      try {
        const data = await getApi<BrandVoiceOptions>("/api/onboarding/brand-voice")
        setOptions(data)
      } catch (err) {
        setError("Error loading options. Please try again.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchOptions()
  }, [])

  const renderDropdown = (key: keyof BrandVoiceOptions, values: string[] | undefined) => (
    <div key={key} className="space-y-2">
      <label className="block text-[#313D4F] font-medium">
        {key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
      </label>
      <div className="relative">
        {loading ? (
          <div className="h-10 w-full animate-pulse bg-gray-200 rounded"></div>
        ) : (
          <>
            <select
              className="w-full appearance-none rounded-lg border border-[#E8E8E8] p-3 pr-10 text-black bg-white hover:border-black focus:border-black focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled className="text-[#979797]">
                Select an option
              </option>
              {values?.map((value) => (
                <option key={value} value={value} className="text-black">
                  {value}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#979797]" />
          </>
        )}
      </div>
    </div>
  )

  return (
    <div className="rounded-xl border border-[#E8E8E8] flex flex-col min-h-[600px]">
      <div className="flex border-b border-[#E8E8E8]">
        <div className="border-b-2 border-[#F57618] px-8 py-4 font-medium text-[#F57618]">Brand Voice</div>
      </div>
      <div className="flex-grow overflow-y-auto p-8">
        <p className="mb-8 text-[#313D4F]">Define the tone and style that best represents your brand's personality.</p>

        <div className="mb-8 flex items-center gap-2">
          <span className="text-[#313D4F]">
            Do you want me to automatically generate selections for you, based on your uploaded Knowledge Base?
          </span>
          <button className="text-[#4880FF]">
            <Sparkles className="h-5 w-5" />
          </button>
        </div>

        {error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {options
              ? Object.entries(options).map(([key, values]) => renderDropdown(key as keyof BrandVoiceOptions, values))
              : [
                  "brand_voice_characteristics",
                  "content_lengths",
                  "writing_styles",
                  "vocabulary_levels",
                  "tone_of_voices",
                  "points_of_view",
                ].map((key) => renderDropdown(key as keyof BrandVoiceOptions, undefined))}
          </div>
        )}
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

