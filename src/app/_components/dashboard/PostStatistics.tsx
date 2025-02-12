import { CheckCircle, Clock, XCircle } from "lucide-react"

export function PostStatistics() {
  return (
    <div className="rounded-lg border border-[#e8e8e8] p-6">
      <h2 className="mb-6 text-lg font-semibold text-[#313d4f]">Post Statistics</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4880ff]">
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-semibold text-[#313d4f]">90</div>
            <div className="text-sm text-[#979797]">Published</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f57618]">
            <Clock className="h-5 w-5 text-white" />
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-semibold text-[#313d4f]">30</div>
            <div className="text-sm text-[#979797]">Scheduled</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500">
            <XCircle className="h-5 w-5 text-white" />
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-semibold text-[#313d4f]">5</div>
            <div className="text-sm text-[#979797]">Failed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

