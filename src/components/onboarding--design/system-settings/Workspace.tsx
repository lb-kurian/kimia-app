import { useState } from "react"

interface WorkspaceProps {
  onFinish: () => void
  onBack: () => void
}

export function Workspace({ onFinish, onBack }: WorkspaceProps) {
  const [workspaceName, setWorkspaceName] = useState("")

  const handleFinish = () => {
    if (workspaceName.trim()) {
      onFinish()
    } else {
      alert("Please enter a workspace name before finishing.")
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#202224]">System Setting</h1>
        <p className="text-[#979797]">Add Workspace</p>
      </div>

      <div className="mb-8">
        <p className="text-[#313D4F]">
          Create dedicated Workspaces to collaborate seamlessly with your team and stay organized.
        </p>
      </div>

      <div className="space-y-2">
        <label className="block text-[#313D4F] font-medium">
          Workspace Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="My Workspace 1"
          className="w-full rounded-lg border border-[#E8E8E8] p-3"
          value={workspaceName}
          onChange={(e) => setWorkspaceName(e.target.value)}
        />
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          className="rounded-full border border-[#038baf] px-8 py-2.5 text-[#038baf] hover:bg-[#038baf]/5"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="rounded-full border border-[#038baf] bg-[#038baf] px-8 py-2.5 text-white hover:bg-[#038baf]/90"
          onClick={handleFinish}
        >
          Finish
        </button>
      </div>
    </div>
  )
}

