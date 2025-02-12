"use client"

import { useState, useEffect } from "react"
import { MoreVertical, Plus, Trash2 } from "lucide-react"
import { getApi, postApi, deleteApi } from "@/lib/apiClient"

interface LandingPage {
  id: string
  url: string
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

  useEffect(() => {
    fetchLandingPages()
  }, [])

  async function fetchLandingPages() {
    try {
      setLoading(true)
      const data = await getApi<LandingPage[]>("/api/onboarding/knowledge-base/landing-page")
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
      const newPage = await postApi<LandingPage>("/api/onboarding/knowledge-base/landing-page", { url: newPageUrl })
      setLandingPages((prev) => [...prev, newPage])
      setNewPageUrl("")
    } catch (error) {
      console.error("Error adding landing page:", error)
      setError("Failed to add landing page")
    } finally {
      setLoading(false)
    }
  }

  async function deleteLandingPage(id: string) {
    try {
      setLoading(true)
      await deleteApi("/api/onboarding/knowledge-base/landing-page", { id })
      setLandingPages((prev) => prev.filter((page) => page.id !== id))
    } catch (error) {
      console.error("Error deleting landing page:", error)
      setError("Failed to delete landing page")
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
            <input
              type="url"
              value={newPageUrl}
              onChange={(e) => setNewPageUrl(e.target.value)}
              placeholder="https://example.com"
              className="flex-grow rounded-lg border border-[#E8E8E8] p-3"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center rounded-full border border-[#038baf] p-3 text-[#038baf] hover:bg-[#038baf]/5 transition-colors"
              aria-label="Add landing page"
            >
              <Plus className="h-5 w-5" />
            </button>
          </form>

          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}

          <div className="space-y-4 mb-8">
            {landingPages.map((page) => (
              <div key={page.id} className="flex items-center justify-between rounded-lg border border-[#E8E8E8] p-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#4880FF] to-[#F57618]" />
                  <span className="text-sm text-[#313D4F]">{page.url}</span>
                </div>
                <div className="relative group">
                  <button className="text-[#979797] hover:text-[#313D4F]">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
                      onClick={() => deleteLandingPage(page.id)}
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

