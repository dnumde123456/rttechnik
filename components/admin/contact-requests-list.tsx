"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trash2 } from "lucide-react"

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

export default function ContactRequestsList() {
  const [contacts, setContacts] = useState<ContactRequest[]>([])
  const [loading, setLoading] = useState(true)

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem("adminToken")
      const response = await fetch("/api/admin/contacts", {
        headers: { Authorization: `Bearer ${token}` },
      })

      if (response.ok) {
        const data = await response.json()
        setContacts(data)
      }
    } catch (error) {
      console.error("Failed to fetch contacts:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact request?")) return

    try {
      const token = localStorage.getItem("adminToken")
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      })

      if (response.ok) {
        fetchContacts()
      }
    } catch (error) {
      console.error("Failed to delete contact:", error)
    }
  }

  if (loading) {
    return <div>Loading contact requests...</div>
  }

  return (
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {contacts.length === 0 ? (
        <p className="text-gray-500">No contact requests found.</p>
      ) : (
        contacts.map((contact) => (
          <Card key={contact.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{contact.name}</CardTitle>
                  <p className="text-sm text-gray-600">{contact.email}</p>
                  {contact.phone && <p className="text-sm text-gray-600">{contact.phone}</p>}
                  {contact.company && <p className="text-sm text-gray-600">{contact.company}</p>}
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={contact.language === "pl" ? "secondary" : "default"}>
                    {contact.language.toUpperCase()}
                  </Badge>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(contact.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">{contact.message}</p>
              <p className="text-xs text-gray-500">Submitted: {new Date(contact.createdAt).toLocaleString()}</p>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}
