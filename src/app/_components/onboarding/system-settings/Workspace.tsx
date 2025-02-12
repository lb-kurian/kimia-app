"use client"

import { useState, useEffect } from "react"
import { getApi, postApi } from "@/lib/apiClient"
import { useSession } from "next-auth/react"

interface WorkspaceProps {
  onFinish: () => void
  onBack: () => void
}

interface Workspace {
  id: number
  name: string
  user_id: string
  brand_id: string | null
}

export function Workspace({ onFinish, onBack }: WorkspaceProps) {
  const [workspaceName, setWorkspaceName] = useState("")
  const [error, setError] = useState("")
  const [brandId, setBrandId] = useState<string | null>(null)
  const { data: session } = useSession()

  useEffect(() => {
    async function fetchBrandId() {
      try {
        const { data } = await getApi<{ id: string }>("/api/brand")
        setBrandId(data.id)
      } catch (error) {
        console.error("Error fetching brand id:", error)
        setError("Failed to fetch brand information. You can still create a workspace.")
      }
    }

    if (session?.user?.id) {
      fetchBrandId()
    }
  }, [session])

  const handleFinish = async () => {
    if (workspaceName.trim()) {
      try {
        if (!session?.user?.id) {
          throw new Error("User not authenticated")
        }
        await postApi<Workspace>("/api/dashboard/workspaces", {
          name: workspaceName,
          user_id: session.user.id,
          brand_id: brandId,
        })
        onFinish()
      } catch (error) {
        console.error("Error creating workspace:", error)
        setError("Failed to create workspace. Please try again.")
      }
    } else {
      setError("Workspace name is required")
    }
  }

  return (
    <div className="rounded-xl border border-[#d9d9d9] flex flex-col min-h-[600px] p-8">
      <div className="flex border-b border-[#d9d9d9]">
        <div className="border-b-2 border-[#F57618] px-8 py-4 font-medium text-[#F57618]">Workspace</div>
      </div>
      <div className="flex-grow overflow-y-auto p-8">
        {session ? (
          <>
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-[#313d4f]">System Setting</h1>
              <p className="text-[#313d4f]">Add Workspace</p>
            </div>

            <div className="mb-8">
              <p className="text-[#313d4f]">
                Create dedicated Workspaces to collaborate seamlessly with your team and stay organized.
              </p>
            </div>

            <div className="space-y-2">
              {error && <div className="p-4 bg-[#FDBCBC] text-[#CB1F27] rounded-lg mb-4">{error}</div>}
              <label className="block text-[#313d4f] font-medium">
                Workspace Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="My Workspace 1"
                className={`w-full rounded-lg border p-3 ${error ? "border-red-500" : "border-[#d9d9d9]"}`}
                value={workspaceName}
                onChange={(e) => {
                  setWorkspaceName(e.target.value)
                  setError("")
                }}
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-[#313d4f] text-xl mb-4">Please sign in to create a workspace.</p>
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

