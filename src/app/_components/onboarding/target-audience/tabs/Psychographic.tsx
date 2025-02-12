"use client"

import { useState } from "react"
import { ChevronDown, Sparkles } from "lucide-react"

interface PsychographicProps {
  onSkip: () => void
}

interface PsychographicOption {
  label: string
  options: string[]
}

const psychographicOptions: PsychographicOption[] = [
  {
    label: "Interests and Hobbies",
    options: [
      "Technology",
      "Sports",
      "Travel",
      "Cooking",
      "Reading",
      "Gaming",
      "Fitness",
      "Arts & Crafts",
      "Music",
      "Photography",
    ],
  },
  {
    label: "Lifestyle Choices",
    options: [
      "Health-conscious",
      "Eco-friendly",
      "Minimalist",
      "Luxury-oriented",
      "Adventure-seeking",
      "Family-focused",
      "Career-driven",
      "Social activist",
    ],
  },
  {
    label: "Values and Beliefs",
    options: [
      "Environmental sustainability",
      "Social responsibility",
      "Innovation",
      "Tradition",
      "Personal growth",
      "Community",
      "Privacy",
      "Authenticity",
    ],
  },
  {
    label: "Emotional Triggers",
    options: [
      "Fear of missing out",
      "Desire for status",
      "Need for belonging",
      "Achievement",
      "Security",
      "Comfort",
      "Recognition",
      "Self-expression",
    ],
  },
  {
    label: "Brand Preferences",
    options: [
      "Luxury brands",
      "Eco-friendly brands",
      "Tech brands",
      "Local businesses",
      "Artisanal products",
      "Budget-friendly options",
      "Premium quality",
    ],
  },
  {
    label: "Influencer Impact",
    options: [
      "Social media influencers",
      "Industry experts",
      "Peer recommendations",
      "Celebrity endorsements",
      "Professional reviews",
      "User testimonials",
    ],
  },
  {
    label: "Personality Traits",
    options: ["Innovative", "Traditional", "Adventurous", "Cautious", "Social", "Reserved", "Analytical", "Creative"],
  },
]

export function Psychographic({ onSkip }: PsychographicProps) {
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
        {psychographicOptions.map((section) => (
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

