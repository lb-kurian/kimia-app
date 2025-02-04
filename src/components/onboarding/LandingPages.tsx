import { MoreVertical, Plus } from "lucide-react"

const landingPages = [
  { url: "https://biocoffee.com/about-us" },
  { url: "https://biocoffee.com/contact-us" },
  { url: "https://biocoffee.com/products" },
  { url: "https://biocoffee.com/faq" },
]

const pageTypes = [
  "Company Website",
  "Product Or Service Pages",
  "About Us Pages",
  "Contact Pages",
  "Blog Pages",
  "Portfolio Or Case Study Pages",
  "FAQs Or Help Center",
  "Landing Pages For Campaigns",
  "Customer Testimonials Pages",
  "News Or Press Pages",
]

export function LandingPages() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-10 gap-8">
        <div className="col-span-7">
          <p className="mb-8 text-[#313D4F]">
            Share your landing page links—whether websites or blogs—to give me a closer look at your brand. This will
            fuel more personalized and compelling content tailored just for you.
          </p>

          <button className="mb-8 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-[#E8E8E8] py-4 text-[#4880FF]">
            <Plus className="h-5 w-5" />
            Add a Landing Page
          </button>

          <div className="space-y-4 mb-8">
            {landingPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between rounded-lg border border-[#E8E8E8] p-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#4880FF] to-[#F57618]" />
                  <span className="text-sm text-[#313D4F]">{page.url}</span>
                </div>
                <button className="text-[#979797]">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3">
          <h3 className="text-lg font-medium text-[#313D4F] mb-4">Page Types</h3>
          <div className="space-y-2 text-sm text-[#313D4F]">
            {pageTypes.map((type, index) => (
              <p key={index}>• {type}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

