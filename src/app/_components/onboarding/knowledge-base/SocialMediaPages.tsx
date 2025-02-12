"use client"

import { useState, useEffect } from "react"
import { MoreVertical, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import { getApi, postApi, deleteApi } from "@/lib/apiClient"

interface SocialMediaAccount {
  id: string
  platform: string
  handle: string
}

const supportedPlatforms = ["Instagram", "X", "LinkedIn", "Facebook", "Reddit", "TikTok", "Pinterest", "YouTube"]

export function SocialMediaPages() {
  const [socialAccounts, setSocialAccounts] = useState<SocialMediaAccount[]>([])
  const [newHandle, setNewHandle] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchSocialAccounts()
  }, [])

  async function fetchSocialAccounts() {
    try {
      setLoading(true)
      const data = await getApi<SocialMediaAccount[]>("/api/onboarding/knowledge-base/social-media")
      if (!data) {
        throw new Error("No data received from the API")
      }
      setSocialAccounts(data)
    } catch (error) {
      console.error("Error fetching social media accounts:", error)
      setError(error instanceof Error ? error.message : "An unknown error occurred")
    } finally {
      setLoading(false)
    }
  }

  async function addSocialAccount(e: React.FormEvent) {
    e.preventDefault()
    if (!newHandle) return

    try {
      setLoading(true)
      const addedAccount = await postApi<SocialMediaAccount>("/api/onboarding/knowledge-base/social-media", {
        handle: newHandle,
      })
      if (!addedAccount) {
        throw new Error("Failed to add social media account")
      }
      setSocialAccounts((prev) => [...prev, addedAccount])
      setNewHandle("")
    } catch (error) {
      console.error("Error adding social media account:", error)
      setError(error instanceof Error ? error.message : "Failed to add social media account")
    } finally {
      setLoading(false)
    }
  }

  async function deleteSocialAccount(id: string) {
    try {
      setLoading(true)
      await deleteApi("/api/onboarding/knowledge-base/social-media", { id })
      setSocialAccounts((prev) => prev.filter((account) => account.id !== id))
    } catch (error) {
      console.error("Error deleting social media account:", error)
      setError(error instanceof Error ? error.message : "Failed to delete social media account")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <div className="grid grid-cols-10 gap-8">
        <div className="col-span-7">
          <p className="mb-8 text-[#313D4F]">
            I'll dive into your social media profiles, and review the content you've previously created. By
            understanding your writing style and tone, I can craft content that aligns with your brand's voice and
            connects more deeply with your followers.
          </p>

          <form onSubmit={addSocialAccount} className="mb-8 flex items-center gap-2">
            <input
              type="text"
              value={newHandle}
              onChange={(e) => setNewHandle(e.target.value)}
              placeholder="@username"
              className="flex-grow rounded-lg border border-[#E8E8E8] p-3"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center rounded-full border border-[#038baf] p-3 text-[#038baf] hover:bg-[#038baf]/5 transition-colors"
              aria-label="Add social media account"
            >
              <Plus className="h-5 w-5" />
            </button>
          </form>

          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}

          <div className="space-y-4">
            {socialAccounts.map((account) => (
              <div
                key={account.id}
                className="flex items-center justify-between rounded-lg border border-[#E8E8E8] p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8">
                    <Image
                      src={`/${account.platform.toLowerCase()}-icon.png`}
                      alt={account.platform}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm text-[#313D4F]">{account.handle}</span>
                </div>
                <div className="relative group">
                  <button className="text-[#979797] hover:text-[#313D4F]">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
                      onClick={() => deleteSocialAccount(account.id)}
                    >
                      <Trash2 className="h-4 w-4 inline-block mr-2" />
                      Delete
                    </button>
                  </div>
                </div>
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

