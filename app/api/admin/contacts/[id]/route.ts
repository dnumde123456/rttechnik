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

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    verifyToken(request)
    const { id } = params

    const contactIndex = contactRequests.findIndex((contact) => contact.id === id)
    if (contactIndex === -1) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 })
    }

    contactRequests.splice(contactIndex, 1)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}
