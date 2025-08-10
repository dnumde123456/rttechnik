import { NextResponse } from "next/server"

// This should match the data from admin/team/route.ts
// In production, both would use the same database
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

export async function GET() {
  return NextResponse.json(teamMembers.sort((a, b) => a.order - b.order))
}
