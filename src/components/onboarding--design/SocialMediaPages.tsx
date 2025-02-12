import { MoreVertical, Plus } from "lucide-react"
import Image from "next/image"

const socialAccounts = [
  {
    platform: "Instagram",
    handle: "@biocoffee_original",
    icon: "/instagram-icon.png",
  },
  {
    platform: "Facebook",
    handle: "@BioCoffee",
    icon: "/facebook-icon.png",
  },
  {
    platform: "X",
    handle: "@biocoffee_01",
    icon: "/x-icon.png",
  },
  {
    platform: "LinkedIn",
    handle: "@BioCoffee_com",
    icon: "/linkedin-icon.png",
  },
]

const supportedPlatforms = ["Instagram", "X", "LinkedIn", "Facebook", "Reddit", "TikTok", "Pinterest", "YouTube"]

export function SocialMediaPages() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-10 gap-8">
        <div className="col-span-7">
          <p className="mb-8 text-[#313D4F]">
            I'll dive into your social media profiles, and review the content you've previously created. By
            understanding your writing style and tone, I can craft content that aligns with your brand's voice and
            connects more deeply with your followers.
          </p>

          <button className="mb-8 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-[#E8E8E8] py-4 text-[#4880FF]">
            <Plus className="h-5 w-5" />
            Add a Social Media Page
          </button>

          <div className="space-y-4">
            {socialAccounts.map((account) => (
              <div
                key={account.handle}
                className="flex items-center justify-between rounded-lg border border-[#E8E8E8] p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8">
                    <Image
                      src={account.icon || "/placeholder.svg"}
                      alt={account.platform}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm text-[#313D4F]">{account.handle}</span>
                </div>
                <button className="text-[#979797]">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3">
          <h3 className="text-lg font-medium text-[#313D4F] mb-4">Supported Platforms</h3>
          <div className="space-y-2 text-sm text-[#313D4F]">
            {supportedPlatforms.map((platform) => (
              <p key={platform}>• {platform}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

