"use client"

import { useState, useEffect } from "react"
import { FileText, Plus, Trash2, AlertCircle, Eye, MoreVertical } from "lucide-react"
import { getApi, postApi, deleteApi } from "@/lib/apiClient"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Document {
  id: string
  file_url: string
  file_name: string
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

const MAX_UPLOADS = 10

export function DocumentList() {
  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [viewDocument, setViewDocument] = useState<Document | null>(null)
  const { toast } = useToast()

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
      if (documents.length >= MAX_UPLOADS) {
        toast({
          title: "Upload limit reached",
          description: `Maximum number of document uploads (${MAX_UPLOADS}) reached`,
          variant: "destructive",
        })
        return
      }

      // Check if the document is already uploaded
      const existingDoc = documents.find((doc) => doc.file_name === file.name)
      if (existingDoc) {
        toast({
          title: "Document already exists",
          description: "This document has already been uploaded.",
          variant: "destructive",
        })
        return
      }

      setLoading(true)
      const formData = new FormData()
      formData.append("file", file)
      formData.append("uploadType", "document")

      const newDocument = await postApi<Document>("/api/onboarding/files", formData)
      if (!newDocument) {
        throw new Error("Failed to upload document")
      }
      setDocuments((prev) => [newDocument, ...prev])
      toast({
        title: "Document uploaded",
        description: "Your document has been successfully uploaded.",
      })
    } catch (error) {
      console.error("Error uploading document:", error)
      toast({
        title: "Upload failed",
        description: error instanceof Error ? error.message : "Failed to upload document",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  async function deleteDocument(id: string) {
    try {
      setLoading(true)
      await deleteApi("/api/onboarding/files", { id })
      setDocuments((prev) => prev.filter((doc) => doc.id !== id))
      toast({
        title: "Document deleted",
        description: "The document has been successfully deleted.",
      })
    } catch (error) {
      console.error("Error deleting document:", error)
      toast({
        title: "Deletion failed",
        description: error instanceof Error ? error.message : "Failed to delete document",
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
          <Input
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
                  <span className="text-sm text-[#313D4F]">{doc.file_name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setViewDocument(doc)}>
                        <Eye className="mr-2 h-4 w-4" />
                        <span>View</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => deleteDocument(doc.id)} className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
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

      <Dialog open={!!viewDocument} onOpenChange={() => setViewDocument(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{viewDocument?.file_name}</DialogTitle>
          </DialogHeader>
          <div className="mt-4 h-[600px]">
            <iframe src={viewDocument?.file_url} className="w-full h-full" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

