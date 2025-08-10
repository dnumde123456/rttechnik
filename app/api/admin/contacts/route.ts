import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

// In-memory storage (replace with database in production)
const contactRequests: any[] = []

function verifyToken(request: NextRequest) {
  const authHeader = request.headers.get("authorization")
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("No token provided")
  }

  const token = authHeader.substring(7)
  jwt.verify(token, process.env.JWT_SECRET || "fallback-secret")
}

export async function GET(request: NextRequest) {
  try {
    verifyToken(request)
    return NextResponse.json(
      contactRequests.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    )
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const contactData = await request.json()

    const newContact = {
      ...contactData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    }

    contactRequests.push(newContact)
    return NextResponse.json(newContact)
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
