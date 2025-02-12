"use client"

import { useState, useEffect } from "react"
import { MoreVertical, Plus, Trash2, ExternalLink } from "lucide-react"
import { getApi, postApi, deleteApi } from "@/lib/apiClient"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface LandingPage {
  id: string
  file_url: string
  upload_type: string
  created_at: string
}

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
  const [landingPages, setLandingPages] = useState<LandingPage[]>([])
  const [newPageUrl, setNewPageUrl] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchLandingPages()
  }, [])

  async function fetchLandingPages() {
    try {
      setLoading(true)
      const data = await getApi<LandingPage[]>("/api/onboarding/files?uploadType=landing_page")
      setLandingPages(data || [])
    } catch (error) {
      console.error("Error fetching landing pages:", error)
      setError("Failed to load landing pages")
    } finally {
      setLoading(false)
    }
  }

  async function addLandingPage(e: React.FormEvent) {
    e.preventDefault()
    if (!newPageUrl) return

    try {
      setLoading(true)
      // Check if the URL is already added
      const existingPage = landingPages.find((page) => page.file_url === newPageUrl)
      if (existingPage) {
        toast({
          title: "URL already exists",
          description: "This landing page URL has already been added.",
          variant: "destructive",
        })
        return
      }

      const formData = new FormData()
      formData.append("url", newPageUrl)
      formData.append("uploadType", "landing_page")

      const newPage = await postApi<LandingPage>("/api/onboarding/files", formData)
      setLandingPages((prev) => [newPage, ...prev])
      setNewPageUrl("")
      toast({
        title: "Landing page added",
        description: "Your landing page URL has been successfully added.",
      })
    } catch (error) {
      console.error("Error adding landing page:", error)
      toast({
        title: "Failed to add landing page",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  async function deleteLandingPage(id: string) {
    try {
      setLoading(true)
      await deleteApi("/api/onboarding/files", { id })
      setLandingPages((prev) => prev.filter((page) => page.id !== id))
      toast({
        title: "Landing page deleted",
        description: "The landing page has been successfully deleted.",
      })
    } catch (error) {
      console.error("Error deleting landing page:", error)
      toast({
        title: "Deletion failed",
        description: error instanceof Error ? error.message : "Failed to delete landing page",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <div className="grid grid-cols-10 gap-8">
        <div className="col-span-7">
          <p className="mb-8 text-[#313D4F]">
            Share your landing page links—whether websites or blogs—to give me a closer look at your brand. This will
            fuel more personalized and compelling content tailored just for you.
          </p>

          <form onSubmit={addLandingPage} className="mb-8 flex items-center gap-2">
            <Input
              type="url"
              value={newPageUrl}
              onChange={(e) => setNewPageUrl(e.target.value)}
              placeholder="https://example.com"
              className="flex-grow rounded-lg border border-[#E8E8E8] p-3"
              required
            />
            <Button
              type="submit"
              className="flex items-center justify-center rounded-full border border-[#038baf] p-3 text-[#038baf] hover:bg-[#038baf]/5 transition-colors"
              aria-label="Add landing page"
            >
              <Plus className="h-5 w-5" />
            </Button>
          </form>

          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}

          <div className="space-y-4 mb-8">
            {landingPages.map((page) => (
              <div key={page.id} className="flex items-center justify-between rounded-lg border border-[#E8E8E8] p-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#4880FF] to-[#F57618]" />
                  <a
                    href={page.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#313D4F] hover:text-[#038baf] flex items-center gap-1"
                  >
                    {page.file_url}
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
                    <DropdownMenuItem onClick={() => deleteLandingPage(page.id)} className="text-red-600">
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

