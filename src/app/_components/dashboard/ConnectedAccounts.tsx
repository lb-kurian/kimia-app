"use client"

import Image from "next/image"
import { Plus } from "lucide-react"

interface SocialAccount {
  id: string
  platform: string
  username: string
  avatar: string
}

const socialAccounts: SocialAccount[] = [
  {
    id: "1",
    platform: "instagram",
    username: "Tim Khoahkipan",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: "2",
    platform: "instagram",
    username: "Tim Khoahkipan",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: "3",
    platform: "linkedin",
    username: "Tim Khoahkipan",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: "4",
    platform: "twitter",
    username: "Tim Khoahkipan",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: "5",
    platform: "facebook",
    username: "Tim Khoahkipan",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: "6",
    platform: "facebook",
    username: "Tim Khoahkipan",
    avatar: "/placeholder.svg?height=48&width=48",
  },
]

export function ConnectedAccounts() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#313d4f]">
          Connected Social Accounts <span className="text-[#4880ff]">{socialAccounts.length}</span>
        </h2>
      </div>
      <p className="text-[#979797]">Connect your social accounts to schedule and manage your social media presence.</p>
      <div className="flex flex-wrap gap-4">
        {socialAccounts.map((account) => (
          <div key={account.id} className="flex flex-col items-center gap-2 rounded-lg border border-[#e8e8e8] p-4">
            <div className="relative">
              <Image
                src={account.avatar || "/placeholder.svg"}
                alt={account.username}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="absolute -bottom-1 -right-1 rounded-full border-2 border-white bg-white">
                <Image src={`/${account.platform}-icon.png`} alt={account.platform} width={16} height={16} />
              </div>
            </div>
            <span className="text-sm text-[#313d4f]">{account.username}</span>
          </div>
        ))}
        <button className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[#e8e8e8] p-4 hover:bg-gray-50">
          <div className="rounded-full bg-[#4880ff] p-2">
            <Plus className="h-5 w-5 text-white" />
          </div>
          <span className="text-sm text-[#313d4f]">Add new Account</span>
        </button>
      </div>
    </div>
  )
}

