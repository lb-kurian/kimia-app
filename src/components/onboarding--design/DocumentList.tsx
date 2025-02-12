import { FileText, MoreVertical, Plus } from "lucide-react"

const documents = [
  { icon: "docx", name: "Ad_Campaign_Guide.docx" },
  { icon: "pdf", name: "Catalogue2024.pdf" },
  { icon: "pdf", name: "Visual_Brand_Guidelines.pdf" },
  { icon: "docx", name: "Brand_Guide_v2.docx" },
  { icon: "pptx", name: "Sales_Presentation.pptx" },
  { icon: "pdf", name: "Menu_Flyer_2025.pdf" },
  { icon: "pdf", name: "Marketing_Plan_V3.pdf" },
  { icon: "pdf", name: "Technical_Product_Details.pdf" },
]

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
  return (
    <div className="p-8">
      <div className="grid grid-cols-10 gap-8">
        <div className="col-span-7">
          <p className="mb-8 text-[#313D4F]">
            Upload your business documents here, including PDFs, Word files, presentations, and more. These files will
            help me build a complete understanding of your brand, allowing for more precise and impactful content
            creation.
          </p>

          <button className="mb-8 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-[#E8E8E8] py-4 text-[#4880FF]">
            <Plus className="h-5 w-5" />
            Add a Document
          </button>

          <div className="grid grid-cols-2 gap-4">
            {documents.map((doc) => (
              <div key={doc.name} className="flex items-center justify-between rounded-lg border border-[#E8E8E8] p-4">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-[#4880FF]" />
                  <span className="text-sm text-[#313D4F]">{doc.name}</span>
                </div>
                <button className="text-[#979797]">
                  <MoreVertical className="h-5 w-5" />
                </button>
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

