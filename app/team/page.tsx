"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TeamMember {
  id: string
  nameEn: string
  namePl: string
  titleEn: string
  titlePl: string
  bio: string
  image: string
  order: number
}

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("/api/team")
        if (response.ok) {
          const data = await response.json()
          setTeamMembers(data)
        }
      } catch (error) {
        console.error("Failed to fetch team members:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchTeamMembers()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  const leadership = teamMembers.filter((member) => member.nameEn === "Bernhard Zach")
  const professionals = teamMembers.filter((member) => member.nameEn !== "Bernhard Zach")

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals who make RTTechnik a leader in cleanroom solutions.
          </p>
        </div>

        {/* Leadership Section */}
        {leadership.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Leadership</h2>
            <div className="flex justify-center">
              <div className="max-w-md">
                {leadership.map((member) => (
                  <Card key={member.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-80 w-full">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.nameEn}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-semibold mb-2">{member.nameEn}</h3>
                        <p className="text-primary font-medium mb-3">{member.titleEn}</p>
                        <p className="text-gray-600">{member.bio}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Professionals Section */}
        {professionals.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Our Dedicated Professionals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {professionals.map((member) => (
                <Card key={member.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-64 w-full">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.nameEn}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-2">{member.nameEn}</h3>
                      <p className="text-primary font-medium mb-3">{member.titleEn}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
