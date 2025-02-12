"use client"

import { useState, useEffect } from "react"
import { MoreVertical, Plus, Trash2, ExternalLink } from "lucide-react"
import Image from "next/image"
import { getApi, postApi, deleteApi } from "@/lib/apiClient"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface SocialMediaAccount {
  id: string
  file_url: string
  upload_type: string
  created_at: string
}

const supportedPlatforms = ["Instagram", "X", "LinkedIn", "Facebook", "Reddit", "TikTok", "Pinterest", "YouTube"]

export function SocialMediaPages() {
  const [socialAccounts, setSocialAccounts] = useState<SocialMediaAccount[]>([])
  const [newHandle, setNewHandle] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchSocialAccounts()
  }, [])

  async function fetchSocialAccounts() {
    try {
      setLoading(true)
      const data = await getApi<SocialMediaAccount[]>("/api/onboarding/files?uploadType=social_media_page")
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
      // Check if the handle is already added
      const existingAccount = socialAccounts.find((account) => account.file_url === newHandle)
      if (existingAccount) {
        toast({
          title: "Account already exists",
          description: "This social media account has already been added.",
          variant: "destructive",
        })
        return
      }

      const formData = new FormData()
      formData.append("url", newHandle)
      formData.append("uploadType", "social_media_page")

      const addedAccount = await postApi<SocialMediaAccount>("/api/onboarding/files", formData)
      if (!addedAccount) {
        throw new Error("Failed to add social media account")
      }
      setSocialAccounts((prev) => [addedAccount, ...prev])
      setNewHandle("")
      toast({
        title: "Social media account added",
        description: "Your social media account has been successfully added.",
      })
    } catch (error) {
      console.error("Error adding social media account:", error)
      toast({
        title: "Failed to add account",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  async function deleteSocialAccount(id: string) {
    try {
      setLoading(true)
      await deleteApi("/api/onboarding/files", { id })
      setSocialAccounts((prev) => prev.filter((account) => account.id !== id))
      toast({
        title: "Social media account deleted",
        description: "The social media account has been successfully deleted.",
      })
    } catch (error) {
      console.error("Error deleting social media account:", error)
      toast({
        title: "Deletion failed",
        description: error instanceof Error ? error.message : "Failed to delete social media account",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  function getPlatformIcon(url: string): string {
    const platform = supportedPlatforms.find((p) => url.toLowerCase().includes(p.toLowerCase()))
    return platform ? `/${platform.toLowerCase()}-icon.png` : "/placeholder.svg"
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
            <Input
              type="text"
              value={newHandle}
              onChange={(e) => setNewHandle(e.target.value)}
              placeholder="@username or https://platform.com/username"
              className="flex-grow rounded-lg border border-[#E8E8E8] p-3"
              required
            />
            <Button
              type="submit"
              className="flex items-center justify-center rounded-full border border-[#038baf] p-3 text-[#038baf] hover:bg-[#038baf]/5 transition-colors"
              aria-label="Add social media account"
            >
              <Plus className="h-5 w-5" />
            </Button>
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
                      src={getPlatformIcon(account.file_url) || "/placeholder.svg"}
                      alt={account.upload_type}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <a
                    href={account.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#313D4F] hover:text-[#038baf] flex items-center gap-1"
                  >
                    {account.file_url}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => deleteSocialAccount(account.id)} className="text-red-600">
                      <Trash2 className="mr-2 h-4 w-4" />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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

