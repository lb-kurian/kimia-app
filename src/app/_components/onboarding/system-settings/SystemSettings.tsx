"use client"

import { useState, useEffect } from "react"
import { Search, ChevronDown, Trash2, Plus } from "lucide-react"
import Image from "next/image"
import { getApi, postApi, deleteApi } from "@/lib/apiClient"
import { useSession } from "next-auth/react"

interface SystemSettingsProps {
  onNext: () => void
  onBack: () => void
  onSkip: () => void
}

interface SocialAccount {
  id: string
  platform: string
  username: string
  status: "connected" | "disconnected"
}

const socialPlatforms = [
  { name: "Instagram", icon: "/instagram-icon.png" },
  { name: "Facebook", icon: "/facebook-icon.png" },
  { name: "Twitter", icon: "/twitter-icon.png" },
  { name: "TikTok", icon: "/tiktok-icon.png" },
]

export function SystemSettings({ onNext, onBack, onSkip }: SystemSettingsProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [socialAccounts, setSocialAccounts] = useState<SocialAccount[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { data: session } = useSession()

  useEffect(() => {
    if (session?.user?.id) {
      fetchSocialAccounts()
    }
  }, [session])

  async function fetchSocialAccounts() {
    try {
      setLoading(true)
      const accounts = await getApi<SocialAccount[]>("/api/dashboard/social-accounts")
      setSocialAccounts(accounts)
    } catch (error) {
      console.error("Error fetching social accounts:", error)
      setError("Failed to fetch social accounts. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  async function addSocialAccount(platform: string) {
    // In a real application, this would initiate the OAuth flow
    // For now, we'll just simulate adding an account
    try {
      const newAccount = await postApi<SocialAccount>("/api/dashboard/social-accounts", { platform })
      setSocialAccounts([...socialAccounts, newAccount])
    } catch (error) {
      console.error("Error adding social account:", error)
    }
  }

  async function removeSocialAccount(id: string) {
    try {
      await deleteApi(`/api/dashboard/social-accounts/${id}`)
      setSocialAccounts(socialAccounts.filter((account) => account.id !== id))
    } catch (error) {
      console.error("Error removing social account:", error)
    }
  }

  return (
    <div className="rounded-xl border border-[#d9d9d9] flex flex-col min-h-[600px] p-8">
      <div className="flex border-b border-[#d9d9d9]">
        <div className="border-b-2 border-[#F57618] px-8 py-4 font-medium text-[#F57618]">System Setting</div>
      </div>
      <div className="flex-grow overflow-y-auto p-8">
        {session ? (
          <>
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-[#313d4f]">System Setting</h1>
              <p className="text-[#313d4f]">Add social media accounts</p>
            </div>

            <div className="mb-8 rounded-lg border border-[#d9d9d9] p-6">
              <h2 className="mb-4 text-lg font-medium text-[#313d4f]">Add your social accounts</h2>
              <p className="mb-6 text-[#313d4f]">
                You have connected <span className="font-medium">{socialAccounts.length} Accounts</span>.
              </p>

              <div className="grid grid-cols-4 gap-4">
                {socialPlatforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="flex flex-col items-center justify-center gap-2 rounded-lg border border-[#d9d9d9] p-4"
                  >
                    <Image src={platform.icon || "/placeholder.svg"} alt={platform.name} width={32} height={32} />
                    <span className="text-sm text-[#313d4f]">{platform.name}</span>
                    <button
                      onClick={() => addSocialAccount(platform.name)}
                      className="mt-2 rounded-full bg-[#038baf] px-3 py-1 text-xs text-white hover:bg-[#038baf]/90"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4 flex items-center gap-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full rounded-lg border border-[#d9d9d9] p-3 pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#313d4f]" />
              </div>
              <button className="flex items-center justify-between rounded-lg border border-[#d9d9d9] p-3 text-[#313d4f]">
                <span>Platform</span>
                <ChevronDown className="h-5 w-5" />
              </button>
              <button className="flex items-center justify-between rounded-lg border border-[#d9d9d9] p-3 text-[#313d4f]">
                <span>Status</span>
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>

            {error && <div className="mb-4 p-4 bg-[#FDBCBC] text-[#CB1F27] rounded-lg">{error}</div>}
            <div className="space-y-4">
              {loading ? (
                <p className="text-[#313d4f]">Loading...</p>
              ) : socialAccounts.length > 0 ? (
                socialAccounts.map((account) => (
                  <div
                    key={account.id}
                    className="flex items-center justify-between rounded-lg border border-[#d9d9d9] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src={`/${account.platform.toLowerCase()}-icon.png`}
                          alt={account.platform}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-[#313d4f]">{account.username}</div>
                        <div className="text-sm text-[#313d4f]">{account.platform}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div
                        className={`rounded-full px-3 py-1 text-sm ${
                          account.status === "connected" ? "bg-[#B7E3B4] text-[#313d4f]" : "bg-[#FDBCBC] text-[#CB1F27]"
                        }`}
                      >
                        {account.status === "connected" ? "Connected" : "Disconnected"}
                      </div>
                      <button
                        onClick={() => removeSocialAccount(account.id)}
                        className="text-[#313d4f] hover:text-[#CB1F27]"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-[#313d4f]">No social accounts found. Add some accounts to get started!</p>
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-[#313d4f] text-xl mb-4">Please sign in to manage your social accounts.</p>
            <button
              onClick={() => {
                /* Add your sign-in logic here */
              }}
              className="rounded-full border border-[#038baf] bg-[#038baf] px-8 py-2.5 text-white hover:bg-[#038baf]/90"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between border-t border-[#d9d9d9] p-6">
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

