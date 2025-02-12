import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function GET() {
  const supabase = createRouteHandlerClient({ cookies })

  try {
    const { data, error } = await supabase
      .from("social_media_accounts")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching social media accounts:", error)
    return NextResponse.json({ error: "Failed to fetch social media accounts" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })

  const { handle } = await request.json()

  if (!handle) {
    return NextResponse.json({ error: "Missing handle" }, { status: 400 })
  }

  try {
    // Extract platform from handle (this is a simple example, you might want to improve this logic)
    const platform = handle.startsWith("@") ? handle.split("@")[1].split(".")[0] : "Unknown"

    const { data, error } = await supabase.from("social_media_accounts").insert({ platform, handle }).select()

    if (error) throw error

    return NextResponse.json(data[0])
  } catch (error) {
    console.error("Error adding social media account:", error)
    return NextResponse.json({ error: "Failed to add social media account" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })

  const { id } = await request.json()

  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 })
  }

  try {
    const { error } = await supabase.from("social_media_accounts").delete().match({ id })

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting social media account:", error)
    return NextResponse.json({ error: "Failed to delete social media account" }, { status: 500 })
  }
}

