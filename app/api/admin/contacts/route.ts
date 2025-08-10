import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

interface ContactRequest {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  language: string
  createdAt: string
}

// In-memory storage (replace with database in production)
const contactRequests: ContactRequest[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    company: "Acme Corp",
    message: "Interested in cleanroom solutions.",
    language: "en",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Jan Kowalski",
    email: "jan.kowalski@example.com",
    phone: "987-654-3210",
    company: "XYZ Sp. z o.o.",
    message: "Zapytanie o pomieszczenia czyste.",
    language: "pl",
    createdAt: new Date().toISOString(),
  },
]

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
    return NextResponse.json(contactRequests)
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}
