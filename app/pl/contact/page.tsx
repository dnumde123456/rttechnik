"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPagePL() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/admin/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          language: "pl",
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", company: "", message: "" })
      }
    } catch (error) {
      console.error("Failed to submit form:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Skontaktuj się z naszym zespołem, aby omówić swoje wymagania dotyczące cleanroom i odkryć, jak możemy pomóc
            Ci osiągnąć Twoje cele.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Wyślij nam wiadomość</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-green-600 text-lg font-semibold mb-2">Dziękujemy za wiadomość!</div>
                  <p className="text-gray-600">Skontaktujemy się z Tobą tak szybko, jak to możliwe.</p>
                  <Button onClick={() => setSubmitted(false)} className="mt-4" variant="outline">
                    Wyślij kolejną wiadomość
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Imię i nazwisko *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefon</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div>
                      <Label htmlFor="company">Firma</Label>
                      <Input id="company" name="company" value={formData.company} onChange={handleChange} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Wiadomość *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Wysyłanie..." : "Wyślij wiadomość"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Skontaktuj się z nami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Adres</p>
                    <p className="text-gray-600">
                      RTTechnik Sp. z o.o.
                      <br />
                      ul. Przykładowa 123
                      <br />
                      00-000 Warszawa, Polska
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <p className="text-gray-600">+48 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@rttechnik.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Godziny pracy</p>
                    <p className="text-gray-600">
                      Poniedziałek - Piątek: 8:00 - 18:00
                      <br />
                      Sobota: 9:00 - 14:00
                      <br />
                      Niedziela: Zamknięte
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dlaczego RTTechnik?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ponad 20 lat doświadczenia w technologii cleanroom</li>
                  <li>• Certyfikowane zarządzanie jakością ISO 9001</li>
                  <li>• Kompleksowe rozwiązania od projektu do konserwacji</li>
                  <li>• Zespół ekspertów z certyfikowanymi specjalistami</li>
                  <li>• Wsparcie i serwis 24/7</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
