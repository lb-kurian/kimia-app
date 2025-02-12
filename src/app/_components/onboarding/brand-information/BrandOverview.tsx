"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight, Sparkles, ChevronDown } from "lucide-react"
import { getApi, postApi } from "@/lib/apiClient"
import type React from "react" // Added import for React

const businessModels = [
  "B2C (Business to Consumer)",
  "B2B (Business to Business)",
  "C2C (Consumer to Consumer)",
  "C2B (Consumer to Business)",
  "B2G (Business to Government)",
  "D2C (Direct to Consumer)",
  "Subscription-based",
  "Freemium",
  "Marketplace",
  "Franchise",
  "Affiliate Marketing",
  "Dropshipping",
  "Other",
]

interface BrandData {
  id?: string
  name: string
  tagline: string
  bio: string
  business_model: string
}

interface BrandOverviewProps {
  onNext: () => void
}

export function BrandOverview({ onNext }: BrandOverviewProps) {
  const [brandData, setBrandData] = useState<BrandData>({
    name: "",
    tagline: "",
    bio: "",
    business_model: "",
  })
  const [loading, setLoading] = useState(true)
  // Remove this line
  // const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchBrandData()
  }, [])

  async function fetchBrandData() {
    try {
      setLoading(true)
      const data = await getApi<BrandData>("/api/onboarding/brand-information")
      if (data) {
        setBrandData(data)
      }
    } catch (error) {
      console.error("Error fetching brand data:", error)
      // setError("Failed to load brand information")
    } finally {
      setLoading(false)
    }
  }

  async function saveBrandData() {
    if (!brandData.name.trim()) {
      return
    }

    try {
      setLoading(true)
      await postApi("/api/onboarding/brand-information", brandData)
      onNext()
    } catch (error) {
      console.error("Error saving brand data:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setBrandData((prev) => ({ ...prev, [name]: value }))
  }

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>
  }

  return (
    <div className="p-8">
      <p className="mb-8 text-[#313D4F]">Provide a brief description of your brand and its core offerings.</p>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[#313D4F] font-medium">
              Brand Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={brandData.name}
              onChange={handleInputChange}
              className={`w-full rounded-lg border p-3 ${
                brandData.name.trim() === "" ? "border-red-500" : "border-[#E8E8E8]"
              }`}
              placeholder="Organico Caffee"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[#313D4F] font-medium">Brand Tagline</label>
            <div className="relative">
              <input
                type="text"
                name="tagline"
                value={brandData.tagline}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-[#E8E8E8] p-3 pr-24"
                placeholder="Good for the Earth, Great in Your Cup"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <button className="p-1 text-[#979797] hover:text-[#313D4F]">
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button className="p-1 text-[#979797] hover:text-[#313D4F]">
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="p-1 text-[#4880FF]">
                  <Sparkles className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[#313D4F] font-medium">Brand Bio</label>
            <div className="relative">
              <textarea
                name="bio"
                value={brandData.bio}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-[#E8E8E8] p-3 min-h-[200px]"
                placeholder="At Organicoffee, we deliver the finest, organically grown coffee sourced from sustainable, fair trade farms. Our commitment to purity and quality ensures every cup is free from synthetic pesticides and fertilizers, while our eco-friendly packaging reflects our dedication to the environment. By choosing Organicoffee, you're supporting ethical practices and a healthier planet. Experience the pure, unadulterated taste of Organicoffee – Pure Brew, Pure Nature."
              />
              <div className="absolute right-2 bottom-2 flex items-center gap-1">
                <button className="p-1 text-[#979797] hover:text-[#313D4F]">
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button className="p-1 text-[#979797] hover:text-[#313D4F]">
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="p-1 text-[#4880FF]">
                  <Sparkles className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[#313D4F] font-medium">Business Model</label>
            <div className="relative">
              <select
                name="business_model"
                value={brandData.business_model}
                onChange={handleInputChange}
                className="w-full appearance-none rounded-lg border border-[#E8E8E8] p-3 pr-10 bg-white"
              >
                <option value="" disabled>
                  Select a business model
                </option>
                {businessModels.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-[#313D4F]">
          <Sparkles className="h-4 w-4 text-[#4880FF]" />
          <span>This button will generate the content based on your uploaded Knowledge Base</span>
        </div>

        {/* Remove the error message display */}
        {/* {error && <p className="text-red-500 mt-4">{error}</p>} */}

        {/* Removed the "Next" button */}
        {/* <div className="flex justify-end mt-6">
          <button
            onClick={saveBrandData}
            className="rounded-full border border-[#038baf] bg-[#038baf] px-8 py-2.5 text-white hover:bg-[#038baf]/90"
            disabled={loading}
          >
            {loading ? "Saving..." : "Next"}
          </button>
        </div> */}
      </div>
    </div>
  )
}

