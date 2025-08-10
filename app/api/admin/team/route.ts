import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

// In-memory storage (replace with database in production)
const teamMembers: any[] = [
  {
    id: "1",
    nameEn: "Bernhard Zach",
    namePl: "Bernhard Zach",
    titleEn: "Managing Director",
    titlePl: "Dyrektor Zarządzający",
    bio: "Experienced leader in cleanroom technology with over 20 years in the industry.",
    image: "/images/team-placeholder.png",
    order: 1,
  },
  {
    id: "2",
    nameEn: "Anna Kowalski",
    namePl: "Anna Kowalski",
    titleEn: "Project Manager",
    titlePl: "Kierownik Projektów",
    bio: "Specialist in cleanroom design and implementation.",
    image: "/images/team-placeholder.png",
    order: 2,
  },
  {
    id: "3",
    nameEn: "Marek Nowak",
    namePl: "Marek Nowak",
    titleEn: "Technical Specialist",
    titlePl: "Specjalista Techniczny",
    bio: "Expert in HVAC systems and cleanroom validation.",
    image: "/images/team-placeholder.png",
    order: 3,
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
    return NextResponse.json(teamMembers.sort((a, b) => a.order - b.order))
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}

export async function POST(request: NextRequest) {
  try {
    verifyToken(request)
    const memberData = await request.json()

    const newMember = {
      ...memberData,
      id: Date.now().toString(),
    }

    teamMembers.push(newMember)
    return NextResponse.json(newMember)
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}
