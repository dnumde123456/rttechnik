"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2, Edit } from "lucide-react"
import TeamMemberForm from "./team-member-form"

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

export default function TeamMembersList() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null)

  const fetchTeamMembers = async () => {
    try {
      const token = localStorage.getItem("adminToken")
      const response = await fetch("/api/admin/team", {
        headers: { Authorization: `Bearer ${token}` },
      })

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

  useEffect(() => {
    fetchTeamMembers()
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this team member?")) return

    try {
      const token = localStorage.getItem("adminToken")
      const response = await fetch(`/api/admin/team/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      })

      if (response.ok) {
        fetchTeamMembers()
      }
    } catch (error) {
      console.error("Failed to delete team member:", error)
    }
  }

  const handleEdit = (member: TeamMember) => {
    setEditingMember(member)
  }

  const handleSave = () => {
    setEditingMember(null)
    fetchTeamMembers()
  }

  const handleCancel = () => {
    setEditingMember(null)
  }

  if (loading) {
    return <div>Loading team members...</div>
  }

  if (editingMember) {
    return <TeamMemberForm editingMember={editingMember} onSave={handleSave} onCancel={handleCancel} />
  }

  return (
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {teamMembers.length === 0 ? (
        <p className="text-gray-500">No team members found.</p>
      ) : (
        teamMembers.map((member) => (
          <Card key={member.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold">
                    {member.nameEn} / {member.namePl}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {member.titleEn} / {member.titlePl}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Order: {member.order}</p>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(member)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(member.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}
