import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function GET() {
  const supabase = createRouteHandlerClient({ cookies })

  try {
    const { data, error } = await supabase.from("files").select("*").order("created_at", { ascending: false })

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching documents:", error)
    return NextResponse.json({ error: "Failed to fetch documents" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })

  const formData = await request.formData()
  const file = formData.get("file") as File
  const type = formData.get("type") as string

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
  }

  try {
    const fileExt = file.name.split(".").pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `documents/${fileName}`

    const { error: uploadError } = await supabase.storage.from("documents").upload(filePath, file)

    if (uploadError) throw uploadError

    const { data: urlData, error: urlError } = await supabase.storage.from("documents").getPublicUrl(filePath)

    if (urlError) throw urlError

    const { data, error } = await supabase
      .from("documents")
      .insert({ name: file.name, url: urlData.publicUrl, type })
      .select()

    if (error) throw error

    return NextResponse.json(data[0])
  } catch (error) {
    console.error("Error uploading document:", error)
    return NextResponse.json({ error: "Failed to upload document" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })

  const { id, url } = await request.json()

  if (!id || !url) {
    return NextResponse.json({ error: "Missing id or url" }, { status: 400 })
  }

  try {
    const filePath = url.split("/").pop()
    if (!filePath) throw new Error("Invalid file path")

    const { error: deleteStorageError } = await supabase.storage.from("documents").remove([filePath])

    if (deleteStorageError) throw deleteStorageError

    const { error: deleteDbError } = await supabase.from("documents").delete().match({ id })

    if (deleteDbError) throw deleteDbError

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting document:", error)
    return NextResponse.json({ error: "Failed to delete document" }, { status: 500 })
  }
}

