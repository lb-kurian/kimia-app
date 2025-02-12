import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function GET() {
  const supabase = createRouteHandlerClient({ cookies })

  try {
    const { data, error } = await supabase.from("landing_pages").select("*").order("created_at", { ascending: false })

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching landing pages:", error)
    return NextResponse.json({ error: "Failed to fetch landing pages" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })

  const { url } = await request.json()

  if (!url) {
    return NextResponse.json({ error: "Missing URL" }, { status: 400 })
  }

  try {
    const { data, error } = await supabase.from("landing_pages").insert({ url }).select()

    if (error) throw error

    return NextResponse.json(data[0])
  } catch (error) {
    console.error("Error adding landing page:", error)
    return NextResponse.json({ error: "Failed to add landing page" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })

  const { id } = await request.json()

  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 })
  }

  try {
    const { error } = await supabase.from("landing_pages").delete().match({ id })

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting landing page:", error)
    return NextResponse.json({ error: "Failed to delete landing page" }, { status: 500 })
  }
}

