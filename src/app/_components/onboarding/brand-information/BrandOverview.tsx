import { ArrowLeft, ArrowRight, Sparkles, ChevronDown } from "lucide-react"

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

export function BrandOverview() {
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
              className="w-full rounded-lg border border-[#E8E8E8] p-3"
              placeholder="Organico Caffee"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[#313D4F] font-medium">Brand Tagline</label>
            <div className="relative">
              <input
                type="text"
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
                className="w-full appearance-none rounded-lg border border-[#E8E8E8] p-3 pr-10 bg-white"
                defaultValue=""
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
      </div>
    </div>
  )
}

