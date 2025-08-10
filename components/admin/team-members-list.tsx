"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Edit, Trash2 } from "lucide-react"
import Image from "next/image"
import TeamMemberForm from "./team-member-form"

interface TeamMember {
  id: string
  name: string
  position: string
  bio: string
  image?: string
  created_at: string
}

export default function TeamMembersList() {
  const [members, setMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null)

  useEffect(() => {
    fetchMembers()
  }, [])

  const fetchMembers = async () => {
    try {
      const response = await fetch("/api/admin/team")
      if (response.ok) {
        const data = await response.json()
        setMembers(data)
      }
    } catch (error) {
      console.error("Error fetching team members:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (memberData: TeamMember, imageFile?: File) => {
    try {
      const formData = new FormData()
      formData.append("name", memberData.name)
      formData.append("position", memberData.position)
      formData.append("bio", memberData.bio)

      if (imageFile) {
        formData.append("image", imageFile)
      }

      const url = editingMember ? `/api/admin/team/${editingMember.id}` : "/api/admin/team"

      const method = editingMember ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        body: formData,
      })

      if (response.ok) {
        await fetchMembers()
        setShowForm(false)
        setEditingMember(null)
      } else {
        alert("Failed to save team member")
      }
    } catch (error) {
      console.error("Error saving team member:", error)
      alert("Error saving team member")
    }
  }

  const deleteMember = async (id: string) => {
    if (!confirm("Are you sure you want to delete this team member?")) {
      return
    }

    try {
      const response = await fetch(`/api/admin/team/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setMembers(members.filter((member) => member.id !== id))
      } else {
        alert("Failed to delete team member")
      }
    } catch (error) {
      console.error("Error deleting team member:", error)
      alert("Error deleting team member")
    }
  }

  const handleEdit = (member: TeamMember) => {
    setEditingMember(member)
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingMember(null)
  }

  if (loading) {
    return <div className="text-center py-8">Loading team members...</div>
  }

  if (showForm) {
    return <TeamMemberForm member={editingMember || undefined} onSubmit={handleSubmit} onCancel={handleCancel} />
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Team Members</h2>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Team Member
        </Button>
      </div>

      {members.length === 0 ? (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">No team members found.</p>
            <Button onClick={() => setShowForm(true)} className="mt-4">
              <Plus className="h-4 w-4 mr-2" />
              Add First Team Member
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <Card key={member.id}>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(member)}>
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => deleteMember(member.id)}>
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {member.image && (
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                )}
                <div>
                  <p className="font-medium text-primary">{member.position}</p>
                  {member.bio && <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{member.bio}</p>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
