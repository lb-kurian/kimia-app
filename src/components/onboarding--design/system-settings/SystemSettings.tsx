"use client"

import { Search, ChevronDown, Trash2, Info } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface SystemSettingsProps {
  onNext: () => void
  onBack: () => void
  onSkip: () => void
  tabs: string[]
  activeTab: string
  onTabChange: (tab: string) => void
}

const socialPlatforms = [
  {
    name: "Instagram",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/instagram-icon.png",
    status: "connected",
  },
  {
    name: "LinkedIn",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linkedin-icon.png",
    status: "connected",
  },
  { name: "Twitter", icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/x-icon.png", status: "connected" },
  { name: "Tiktok", icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tiktok-icon.png", status: "new" },
  {
    name: "Telegram",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telegram-icon.png",
    status: "coming_soon",
  },
  {
    name: "Pinterest",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pinterest-icon.png",
    status: "coming_soon",
  },
]

const connectedAccounts = [
  {
    platform: "linkedin",
    username: "@t_amini",
    name: "Toby Amini",
    status: "connected",
    lastUpdated: "About 1 hour ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    platform: "facebook",
    username: "@t_amini",
    name: "Toby Amini",
    status: "reconnect",
    lastUpdated: "About 1 hour ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function SystemSettings({ onNext, onBack, onSkip, tabs, activeTab, onTabChange }: SystemSettingsProps) {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="rounded-xl border border-[#E8E8E8] flex flex-col min-h-[600px]">
      <div className="flex border-b border-[#E8E8E8]">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-8 py-4 font-medium ${
              activeTab === tab ? "border-b-2 border-[#F57618] text-[#F57618]" : "text-[#313D4F]"
            }`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex-grow overflow-y-auto p-8 pt-6">
        <div className="mb-8 rounded-lg border border-[#E8E8E8] p-6">
          <h2 className="mb-4 text-lg font-medium text-[#313D4F]">Add your social accounts</h2>
          <p className="mb-6 text-[#313D4F]">
            You have connected <span className="font-medium">3 Accounts</span>, out of{" "}
            <span className="font-medium">5 total Social Media Accounts</span> for your Plan.
          </p>

          <div className="grid grid-cols-6 gap-4">
            {socialPlatforms.map((platform) => (
              <div
                key={platform.name}
                className="flex flex-col items-center justify-center gap-2 rounded-lg border border-[#E8E8E8] p-4"
              >
                <Image src={platform.icon || "/placeholder.svg"} alt={platform.name} width={32} height={32} />
                <span className="text-sm text-[#313D4F]">{platform.name}</span>
                {platform.status === "coming_soon" && <span className="text-xs text-[#979797]">Coming soon</span>}
                {platform.status === "new" && (
                  <span className="rounded bg-[#FDBCBC] px-2 py-0.5 text-xs text-[#CB1F27]">New</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4 grid grid-cols-[1fr,200px,200px] gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-lg border border-[#E8E8E8] p-3 pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#979797]" />
          </div>
          <button className="flex items-center justify-between rounded-lg border border-[#E8E8E8] p-3 text-[#313D4F]">
            <span>Platform</span>
            <ChevronDown className="h-5 w-5" />
          </button>
          <button className="flex items-center justify-between rounded-lg border border-[#E8E8E8] p-3 text-[#313D4F]">
            <span>Status</span>
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          {connectedAccounts.map((account) => (
            <div
              key={account.platform + account.username}
              className="flex items-center justify-between rounded-lg border border-[#E8E8E8] p-4"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={account.avatar || "/placeholder.svg"} alt={account.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-medium text-[#313D4F]">{account.name}</div>
                  <div className="text-sm text-[#979797]">{account.username}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#979797]">{account.lastUpdated}</span>
                  <Info className="h-4 w-4 text-[#979797]" />
                </div>
                <div
                  className={`rounded-full px-3 py-1 text-sm ${
                    account.status === "connected" ? "bg-[#B7E3B4] text-[#313D4F]" : "bg-[#FDBCBC] text-[#CB1F27]"
                  }`}
                >
                  {account.status === "connected" ? "Connected" : "Reconnect"}
                </div>
                <button className="text-[#979797] hover:text-[#CB1F27]">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
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

