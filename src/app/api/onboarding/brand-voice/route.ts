
import { NextResponse } from "next/server"
import { getBrandVoiceOptions } from "./onboardingModule"

export async function GET() {
  try {
    const options = await getBrandVoiceOptions()
    return NextResponse.json(options)
  } catch (error) {
    console.error("Error fetching brand voice options:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

