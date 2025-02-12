import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const supabase = createRouteHandlerClient({ cookies })
  const id = params.id

  try {
    const { error } = await supabase.from("social_accounts").delete().eq("id", id)
    if (error) throw error
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting social account:", error)
    return NextResponse.json({ error: "Failed to delete social account" }, { status: 500 })
  }
}

