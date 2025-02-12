import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export const dynamic = "force-dynamic"

async function getAuthenticatedClient() {
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    throw new Error("Unauthorized")
  }

  return { supabase, userId: session.user.id }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const uploadType = searchParams.get("uploadType")

    const { supabase, userId } = await getAuthenticatedClient()

    let query = supabase.from("files").select("*").eq("user_id", userId).order("created_at", { ascending: false })

    if (uploadType) {
      query = query.eq("upload_type", uploadType)
    }

    const { data, error } = await query

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching files:", error)
    return NextResponse.json({ error: error.message }, { status: error.message === "Unauthorized" ? 401 : 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { supabase, userId } = await getAuthenticatedClient()

    const formData = await request.formData()
    const uploadType = formData.get("uploadType") as string
    const file = formData.get("file") as File | null
    const url = formData.get("url") as string | null

    if (!uploadType) {
      return NextResponse.json({ error: "Missing upload type" }, { status: 400 })
    }

    let fileUrl = url

    if (uploadType === "document" && file) {
      const fileExt = file.name.split(".").pop()
      const fileName = `${userId}_${Date.now()}.${fileExt}`
      const filePath = `private/${userId}/documents/${fileName}`

      const { error: uploadError } = await supabase.storage.from("files").upload(filePath, file, { upsert: true })

      if (uploadError) throw uploadError

      const { data: urlData, error: urlError } = await supabase.storage
        .from("files")
        .createSignedUrl(filePath, 60 * 60 * 24 * 7) // 7 days expiry

      if (urlError) throw urlError

      fileUrl = urlData.signedUrl
    } else if (uploadType === "landing_page" || uploadType === "social_media_page") {
      if (!url) {
        return NextResponse.json({ error: "Missing URL for landing page or social media page" }, { status: 400 })
      }
      fileUrl = url
    }

    const { data, error } = await supabase
      .from("files")
      .insert({
        user_id: userId,
        upload_type: uploadType,
        file_url: fileUrl,
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error adding file:", error)
    return NextResponse.json({ error: error.message }, { status: error.message === "Unauthorized" ? 401 : 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { supabase, userId } = await getAuthenticatedClient()

    const { id, file_url } = await request.json()

    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 })
    }

    const { error: deleteError } = await supabase.from("files").delete().match({ id, user_id: userId })

    if (deleteError) throw deleteError

    if (file_url && file_url.includes(`private/${userId}/documents/`)) {
      const filePath = file_url.split("/files/")[1]
      const { error: storageError } = await supabase.storage.from("files").remove([filePath])
      if (storageError) throw storageError
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting file:", error)
    return NextResponse.json({ error: error.message }, { status: error.message === "Unauthorized" ? 401 : 500 })
  }
}

