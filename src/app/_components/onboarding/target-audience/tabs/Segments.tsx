"use client"

import { useState } from "react"
import { ChevronDown, Sparkles } from "lucide-react"

interface SegmentsProps {
  onSkip: () => void
}

interface SegmentOption {
  label: string
  options: string[]
}

const segmentOptions: SegmentOption[] = [
  {
    label: "Primary Segments",
    options: [
      "Young Professionals",
      "Working Parents",
      "Students",
      "Retirees",
      "Small Business Owners",
      "Corporate Executives",
      "Digital Nomads",
      "Homemakers",
    ],
  },
  {
    label: "Value Segments",
    options: [
      "Premium Seekers",
      "Value Hunters",
      "Quality Focused",
      "Convenience Driven",
      "Experience Seekers",
      "Budget Conscious",
      "Luxury Lovers",
    ],
  },
  {
    label: "Lifestyle Segments",
    options: [
      "Health Enthusiasts",
      "Tech Savvy",
      "Eco Warriors",
      "Culture Buffs",
      "Sports Fanatics",
      "Fashion Forward",
      "Foodies",
      "DIY Enthusiasts",
    ],
  },
  {
    label: "Behavioral Segments",
    options: [
      "Early Adopters",
      "Brand Loyalists",
      "Deal Seekers",
      "Seasonal Buyers",
      "Heavy Users",
      "Occasional Users",
      "Trend Followers",
    ],
  },
  {
    label: "Geographic Segments",
    options: [
      "Urban Core",
      "Suburban Areas",
      "Rural Communities",
      "Coastal Regions",
      "Metropolitan Areas",
      "Small Towns",
      "International Markets",
    ],
  },
]

export function Segments({ onSkip }: SegmentsProps) {
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
        {segmentOptions.map((section) => (
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

