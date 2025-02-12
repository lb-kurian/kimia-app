import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function GET() {
  const supabase = createRouteHandlerClient({ cookies })

  try {
    const { data: session } = await supabase.auth.getSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data, error } = await supabase.from("social_accounts").select("*")
    if (error) throw error
    return NextResponse.json(data || [])
  } catch (error) {
    console.error("Error fetching social accounts:", error)
    return NextResponse.json([], { status: 200 })
  }
}

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  const { platform } = await request.json()

  try {
    const { data: session } = await supabase.auth.getSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data, error } = await supabase
      .from("social_accounts")
      .insert({
        user_id: session.user.id,
        platform,
        username: `user_${Math.random().toString(36).substr(2, 9)}`, // Simulated username
        status: "connected",
      })
      .select()
      .single()

    if (error) throw error
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error adding social account:", error)
    return NextResponse.json({ error: "Failed to add social account" }, { status: 500 })
  }
}

