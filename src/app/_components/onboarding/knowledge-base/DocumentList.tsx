"use client"

import { useState, useEffect } from "react"
import { FileText, Plus, MoreVertical, Trash2, AlertCircle } from "lucide-react"
import { getApi, postApi, deleteApi } from "@/lib/apiClient"

interface Document {
  id: string
  file_url: string
  upload_type: string
  created_at: string
}

const documentTypes = [
  "Product Information And Catalogs",
  "Brochures, Flyers And Advertising Content",
  "Educational And Training Materials",
  "Customer Proposals And Presentations",
  "Customer Feedback And Reviews",
  "Legal Documents",
  "Visual Content",
  "Mission And Vision Statements",
  "Sales Presentations",
  "Brand Guidelines",
  "Policy Documents",
]

export function DocumentList() {
  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchDocuments()
  }, [])

  async function fetchDocuments() {
    try {
      setLoading(true)
      const data = await getApi<Document[]>("/api/onboarding/files?uploadType=document")
      if (!data) {
        throw new Error("No data received from the API")
      }
      setDocuments(data)
    } catch (error) {
      console.error("Error fetching documents:", error)
      setError(error instanceof Error ? error.message : "An unknown error occurred")
    } finally {
      setLoading(false)
    }
  }

  async function uploadDocument(file: File) {
    try {
      setLoading(true)
      const formData = new FormData()
      formData.append("file", file)
      formData.append("uploadType", "document")

      const newDocument = await postApi<Document>("/api/onboarding/files", formData)
      if (!newDocument) {
        throw new Error("Failed to upload document")
      }
      setDocuments((prev) => [newDocument, ...prev])
    } catch (error) {
      console.error("Error uploading document:", error)
      setError(error instanceof Error ? error.message : "Failed to upload document")
    } finally {
      setLoading(false)
    }
  }

  async function deleteDocument(id: string, file_url: string) {
    try {
      setLoading(true)
      await deleteApi("/api/onboarding/files", { id, file_url })
      setDocuments((prev) => prev.filter((doc) => doc.id !== id))
    } catch (error) {
      console.error("Error deleting document:", error)
      setError(error instanceof Error ? error.message : "Failed to delete document")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <div className="grid grid-cols-10 gap-8">
        <div className="col-span-7">
          <p className="mb-8 text-[#313D4F]">
            Upload your business documents here, including PDFs, Word files, presentations, and more. These files will
            help me build a complete understanding of your brand, allowing for more precise and impactful content
            creation.
          </p>

          <label
            htmlFor="file-upload"
            className="mb-8 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-[#E8E8E8] py-4 text-[#038baf] cursor-pointer hover:bg-[#038baf]/5 transition-colors"
          >
            <Plus className="h-5 w-5" />
            Add a Document
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx,.csv"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) uploadDocument(file)
            }}
          />

          {loading && <p className="text-center text-[#313D4F]">Loading...</p>}
          {error && (
            <div className="flex items-center justify-center text-red-500 mb-4">
              <AlertCircle className="mr-2" />
              <p>Error: {error}</p>
            </div>
          )}

          {!loading && !error && documents.length === 0 && (
            <div className="text-center text-[#313D4F] mb-4">
              <p>No documents uploaded yet. Start by adding your first document!</p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between rounded-lg border border-[#E8E8E8] p-4">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-[#038baf]" />
                  <span className="text-sm text-[#313D4F]">{doc.file_url.split("/").pop()}</span>
                </div>
                <div className="relative group">
                  <button className="text-[#979797] hover:text-[#313D4F]">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
                      onClick={() => deleteDocument(doc.id, doc.file_url)}
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
          <h3 className="text-lg font-medium text-[#313D4F] mb-4">Document Types</h3>
          <div className="space-y-2 text-sm text-[#313D4F]">
            {documentTypes.map((type, index) => (
              <p key={index}>• {type}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

