"use client"

import { useState } from "react"
import { ChevronDown, Sparkles } from "lucide-react"

interface BehavioralProps {
  onSkip: () => void
}

interface BehavioralOption {
  label: string
  options: string[]
}

const behavioralOptions: BehavioralOption[] = [
  {
    label: "Purchase Behavior",
    options: [
      "Frequent buyer",
      "Seasonal shopper",
      "Discount seeker",
      "Luxury buyer",
      "Impulse purchaser",
      "Planned purchaser",
      "Brand loyal",
      "Price sensitive",
    ],
  },
  {
    label: "Usage Patterns",
    options: [
      "Daily user",
      "Weekly user",
      "Monthly user",
      "Occasional user",
      "Heavy user",
      "Light user",
      "First-time user",
      "Regular user",
    ],
  },
  {
    label: "Decision Making",
    options: [
      "Research-oriented",
      "Spontaneous",
      "Peer-influenced",
      "Expert-advised",
      "Review-dependent",
      "Brand-driven",
      "Price-driven",
      "Feature-driven",
    ],
  },
  {
    label: "Channel Preference",
    options: [
      "Online shopping",
      "In-store shopping",
      "Mobile shopping",
      "Social commerce",
      "Marketplace",
      "Direct from brand",
      "Multi-channel",
    ],
  },
  {
    label: "Engagement Level",
    options: [
      "Brand advocate",
      "Active participant",
      "Passive consumer",
      "Content creator",
      "Social sharer",
      "Reviewer",
      "Community member",
    ],
  },
  {
    label: "Technology Adoption",
    options: [
      "Early adopter",
      "Tech-savvy",
      "Traditional",
      "Late adopter",
      "Selective adopter",
      "Digital native",
      "Digital immigrant",
    ],
  },
]

export function Behavioral({ onSkip }: BehavioralProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({})

  const toggleSection = (label: string) => {
    setExpandedSection((prev) => (prev === label ? null : label))
  }

  const toggleOption = (section: string, option: string) => {
    setSelectedOptions((prev) => {
      const currentOptions = prev[section] || []
      const newOptions = currentOptions.includes(option)
        ? currentOptions.filter((o) => o !== option)
        : [...currentOptions, option]

      return {
        ...prev,
        [section]: newOptions,
      }
    })
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center gap-2">
        <span className="text-[#313d4f]">
          Do you want me to automatically generate selections for you, based on your uploaded Knowledge Base?
        </span>
        <button className="text-[#4880FF]" aria-label="Generate from Knowledge Base">
          <Sparkles className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {behavioralOptions.map((section) => (
          <div key={section.label} className="relative rounded-lg border border-[#d9d9d9]">
            <button
              className="flex w-full items-center justify-between p-3 text-[#313d4f]"
              onClick={() => toggleSection(section.label)}
              aria-expanded={expandedSection === section.label}
            >
              <div className="flex items-center gap-2">
                <span>{section.label}</span>
                {selectedOptions[section.label]?.length > 0 && (
                  <span className="rounded-full bg-[#038baf] px-2 py-0.5 text-xs text-white">
                    {selectedOptions[section.label].length} selected
                  </span>
                )}
              </div>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${expandedSection === section.label ? "rotate-180" : ""}`}
              />
            </button>
            {expandedSection === section.label && (
              <div className="absolute left-0 right-0 top-full z-50 mt-1 rounded-lg border border-[#d9d9d9] bg-[#ffffff] shadow-lg">
                <div className="max-h-[240px] overflow-y-auto p-3">
                  {section.options.map((option) => (
                    <label
                      key={option}
                      className="flex cursor-pointer items-center gap-2 rounded p-2 hover:bg-[#f5f5f5]"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#d9d9d9] text-[#038baf] focus:ring-[#038baf]"
                        checked={selectedOptions[section.label]?.includes(option) || false}
                        onChange={() => toggleOption(section.label, option)}
                      />
                      <span className="text-sm text-[#313d4f]">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

