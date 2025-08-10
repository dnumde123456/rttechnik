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

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    verifyToken(request)
    const memberData = await request.json()
    const { id } = params

    const memberIndex = teamMembers.findIndex((member) => member.id === id)
    if (memberIndex === -1) {
      return NextResponse.json({ error: "Member not found" }, { status: 404 })
    }

    teamMembers[memberIndex] = { ...memberData, id }
    return NextResponse.json(teamMembers[memberIndex])
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    verifyToken(request)
    const { id } = params

    const memberIndex = teamMembers.findIndex((member) => member.id === id)
    if (memberIndex === -1) {
      return NextResponse.json({ error: "Member not found" }, { status: 404 })
    }

    teamMembers.splice(memberIndex, 1)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}
