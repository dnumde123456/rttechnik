"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trash2, Eye, Mail, Phone, Calendar } from "lucide-react"
import { format } from "date-fns"

interface ContactRequest {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  createdAt: string
  status: "new" | "read" | "responded"
}

export default function ContactRequestsList() {
  const [contacts, setContacts] = useState<ContactRequest[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedContact, setSelectedContact] = useState<ContactRequest | null>(null)

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/admin/contacts")
      if (response.ok) {
        const data = await response.json()
        setContacts(data)
      }
    } catch (error) {
      console.error("Error fetching contacts:", error)
    } finally {
      setLoading(false)
    }
  }

  const deleteContact = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact request?")) {
      return
    }

    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setContacts(contacts.filter((contact) => contact.id !== id))
        if (selectedContact?.id === id) {
          setSelectedContact(null)
        }
      } else {
        alert("Failed to delete contact request")
      }
    } catch (error) {
      console.error("Error deleting contact:", error)
      alert("Error deleting contact request")
    }
  }

  const markAsRead = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "read" }),
      })

      if (response.ok) {
        setContacts(contacts.map((contact) => (contact.id === id ? { ...contact, status: "read" } : contact)))
      }
    } catch (error) {
      console.error("Error updating contact status:", error)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800"
      case "read":
        return "bg-yellow-100 text-yellow-800"
      case "responded":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (loading) {
    return <div className="text-center py-8">Loading contact requests...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Contact Requests</h2>
        <Badge variant="secondary">{contacts.length} total</Badge>
      </div>

      {contacts.length === 0 ? (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">No contact requests found.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact List */}
          <div className="space-y-4">
            {contacts.map((contact) => (
              <Card
                key={contact.id}
                className={`cursor-pointer transition-colors ${
                  selectedContact?.id === contact.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => {
                  setSelectedContact(contact)
                  if (contact.status === "new") {
                    markAsRead(contact.id)
                  }
                }}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{contact.name}</h3>
                    <Badge className={getStatusColor(contact.status)}>{contact.status}</Badge>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Mail className="h-3 w-3 mr-2" />
                      {contact.email}
                    </div>
                    {contact.phone && (
                      <div className="flex items-center">
                        <Phone className="h-3 w-3 mr-2" />
                        {contact.phone}
                      </div>
                    )}
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-2" />
                      {format(new Date(contact.createdAt), "PPP")}
                    </div>
                  </div>
                  <p className="text-sm mt-2 line-clamp-2">{contact.message}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Details */}
          <div>
            {selectedContact ? (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>Contact Details</CardTitle>
                    <Button variant="destructive" size="sm" onClick={() => deleteContact(selectedContact.id)}>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">{selectedContact.name}</h3>
                    <Badge className={getStatusColor(selectedContact.status)}>{selectedContact.status}</Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <a href={`mailto:${selectedContact.email}`} className="text-primary hover:underline">
                        {selectedContact.email}
                      </a>
                    </div>

                    {selectedContact.phone && (
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                        <a href={`tel:${selectedContact.phone}`} className="text-primary hover:underline">
                          {selectedContact.phone}
                        </a>
                      </div>
                    )}

                    {selectedContact.company && (
                      <div>
                        <strong>Company:</strong> {selectedContact.company}
                      </div>
                    )}

                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      {format(new Date(selectedContact.createdAt), "PPP p")}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Message:</h4>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="whitespace-pre-wrap">{selectedContact.message}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button onClick={() => window.open(`mailto:${selectedContact.email}`, "_blank")} className="flex-1">
                      <Mail className="h-4 w-4 mr-2" />
                      Reply via Email
                    </Button>
                    {selectedContact.phone && (
                      <Button variant="outline" onClick={() => window.open(`tel:${selectedContact.phone}`, "_blank")}>
                        <Phone className="h-4 w-4 mr-2" />
                        Call
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="text-center py-8">
                  <Eye className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Select a contact request to view details</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
