"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface TeamMember {
  id?: string
  nameEn: string
  namePl: string
  titleEn: string
  titlePl: string
  bio: string
  image: string
  order: number
}

interface TeamMemberFormProps {
  editingMember?: TeamMember | null
  onSave?: () => void
  onCancel?: () => void
}

export default function TeamMemberForm({ editingMember, onSave, onCancel }: TeamMemberFormProps) {
  const [formData, setFormData] = useState<TeamMember>({
    nameEn: "",
    namePl: "",
    titleEn: "",
    titlePl: "",
    bio: "",
    image: "/images/team-placeholder.png",
    order: 0,
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (editingMember) {
      setFormData(editingMember)
    }
  }, [editingMember])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      const token = localStorage.getItem("adminToken")
      const url = editingMember ? `/api/admin/team/${editingMember.id}` : "/api/admin/team"

      const method = editingMember ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(editingMember ? "Team member updated successfully!" : "Team member added successfully!")
        if (!editingMember) {
          setFormData({
            nameEn: "",
            namePl: "",
            titleEn: "",
            titlePl: "",
            bio: "",
            image: "/images/team-placeholder.png",
            order: 0,
          })
        }
        onSave?.()
      } else {
        setMessage(data.error || "Operation failed")
      }
    } catch (error) {
      setMessage("Network error occurred")
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    setFormData({
      nameEn: "",
      namePl: "",
      titleEn: "",
      titlePl: "",
      bio: "",
      image: "/images/team-placeholder.png",
      order: 0,
    })
    onCancel?.()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="nameEn">Name (English)</Label>
          <Input
            id="nameEn"
            value={formData.nameEn}
            onChange={(e) => setFormData((prev) => ({ ...prev, nameEn: e.target.value }))}
            required
          />
        </div>
        <div>
          <Label htmlFor="namePl">Name (Polish)</Label>
          <Input
            id="namePl"
            value={formData.namePl}
            onChange={(e) => setFormData((prev) => ({ ...prev, namePl: e.target.value }))}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="titleEn">Title (English)</Label>
          <Input
            id="titleEn"
            value={formData.titleEn}
            onChange={(e) => setFormData((prev) => ({ ...prev, titleEn: e.target.value }))}
            required
          />
        </div>
        <div>
          <Label htmlFor="titlePl">Title (Polish)</Label>
          <Input
            id="titlePl"
            value={formData.titlePl}
            onChange={(e) => setFormData((prev) => ({ ...prev, titlePl: e.target.value }))}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          value={formData.bio}
          onChange={(e) => setFormData((prev) => ({ ...prev, bio: e.target.value }))}
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            value={formData.image}
            onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))}
          />
        </div>
        <div>
          <Label htmlFor="order">Display Order</Label>
          <Input
            id="order"
            type="number"
            value={formData.order}
            onChange={(e) => setFormData((prev) => ({ ...prev, order: Number.parseInt(e.target.value) || 0 }))}
          />
        </div>
      </div>

      {message && (
        <Alert variant={message.includes("successfully") ? "default" : "destructive"}>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}

      <div className="flex space-x-2">
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : editingMember ? "Update" : "Add"} Team Member
        </Button>
        {editingMember && (
          <Button type="button" variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  )
}
