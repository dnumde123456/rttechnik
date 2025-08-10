"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TeamMemberForm from "@/components/admin/team-member-form"
import TeamMembersList from "@/components/admin/team-members-list"
import ContactRequestsList from "@/components/admin/contact-requests-list"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const verifyAuth = async () => {
      const token = localStorage.getItem("adminToken")
      if (!token) {
        router.push("/admin/login")
        return
      }

      try {
        const response = await fetch("/api/admin/verify", {
          headers: { Authorization: `Bearer ${token}` },
        })

        if (response.ok) {
          setIsAuthenticated(true)
        } else {
          localStorage.removeItem("adminToken")
          router.push("/admin/login")
        }
      } catch (error) {
        localStorage.removeItem("adminToken")
        router.push("/admin/login")
      } finally {
        setLoading(false)
      }
    }

    verifyAuth()
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    router.push("/admin/login")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">RTTechnik Admin Dashboard</h1>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>

        <Tabs defaultValue="team" className="space-y-4">
          <TabsList>
            <TabsTrigger value="team">Team Management</TabsTrigger>
            <TabsTrigger value="contacts">Contact Requests</TabsTrigger>
          </TabsList>

          <TabsContent value="team" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Add/Edit Team Member</CardTitle>
                </CardHeader>
                <CardContent>
                  <TeamMemberForm />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Current Team Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <TeamMembersList />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Contact Form Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactRequestsList />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
