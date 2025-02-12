import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function GET() {
  const supabase = createRouteHandlerClient({ cookies })

  try {
    const { data, error } = await supabase.from("brands").select("*").single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching brand information:", error)
    return NextResponse.json({ error: "Failed to fetch brand information" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })

  try {
    const brandData = await request.json()

    const { data, error } = await supabase.from("brands").upsert(brandData, { onConflict: "id" }).select()
    console

    if (error) throw error

    return NextResponse.json(data[0])
  } catch (error) {
    console.error("Error saving brand information:", error)
    return NextResponse.json({ error: "Failed to save brand information" }, { status: 500 })
  }
}

