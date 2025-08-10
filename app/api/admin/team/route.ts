import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

async function verifyAdmin(request: NextRequest) {
  const cookieStore = await cookies()
  const token = cookieStore.get("admin-token")?.value

  if (!token) {
    return false
  }

  try {
    const response = await fetch(`${request.nextUrl.origin}/api/admin/verify`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.ok
  } catch {
    return false
  }
}

async function uploadImage(file: File): Promise<string | null> {
  try {
    const fileExt = file.name.split(".").pop()
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
    const filePath = `team-images/${fileName}`

    const { data, error } = await supabase.storage.from("team-images").upload(filePath, file)

    if (error) {
      console.error("Storage upload error:", error)
      return null
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("team-images").getPublicUrl(filePath)

    return publicUrl
  } catch (error) {
    console.error("Error uploading image:", error)
    return null
  }
}

export async function GET(request: NextRequest) {
  try {
    const isAdmin = await verifyAdmin(request)
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { data, error } = await supabase.from("team_members").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to fetch team members" }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching team members:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const isAdmin = await verifyAdmin(request)
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await request.formData()
    const name = formData.get("name") as string
    const position = formData.get("position") as string
    const bio = formData.get("bio") as string
    const imageFile = formData.get("image") as File | null

    let imageUrl = null
    if (imageFile && imageFile.size > 0) {
      imageUrl = await uploadImage(imageFile)
    }

    const { data, error } = await supabase
      .from("team_members")
      .insert([
        {
          name,
          position,
          bio,
          image: imageUrl,
        },
      ])
      .select()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to create team member" }, { status: 500 })
    }

    return NextResponse.json(data[0])
  } catch (error) {
    console.error("Error creating team member:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
