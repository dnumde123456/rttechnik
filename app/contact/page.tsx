"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    consent: false,
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, consent: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send the form data to your backend
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch With Our Team</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about our clean room solutions? Ready to start your project? Our team is here to help.
              Reach out to us using the contact information below or fill out the form.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-8 mb-8">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Headquarters</h3>
                    <p className="text-muted-foreground">
                      RTTechnik
                      <br />
                      Ziębicka 35/116
                      <br />
                      60-164 Poznań, Poland
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">Main: +48 61 670 78 58</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      General Inquiries:{" "}
                      <a href="mailto:office@rttechnik.com" className="text-primary hover:underline">
                        office@rttechnik.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM CET
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.8234567890123!2d16.9251!3d52.4064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b2062e2b2b7%3A0x1234567890abcdef!2sZi%C4%99bicka%2035%2C%2060-164%20Pozna%C5%84%2C%20Poland!5e0!3m2!1sen!2spl!4v1234567890123!5m2!1sen!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RTTechnik Office Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {formSubmitted ? (
                <Card className="border-none shadow-lg bg-primary/5">
                  <CardContent className="p-8 text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckIcon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Thank You for Contacting Us!</h3>
                    <p className="text-muted-foreground mb-6">
                      We've received your message and will get back to you as soon as possible, usually within 24
                      business hours.
                    </p>
                    <Button onClick={() => setFormSubmitted(false)}>Send Another Message</Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john.doe@example.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Your Company"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="+48 61 670 78 58"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Please describe your project or inquiry..."
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={handleCheckboxChange}
                          required
                        />
                        <div className="grid gap-1.5 leading-none">
                          <Label
                            htmlFor="consent"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I consent to RTTechnik processing my data for the purpose of responding to my inquiry *
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Your data will be processed in accordance with our{" "}
                            <a href="/privacy-policy" className="text-primary hover:underline">
                              Privacy Policy
                            </a>
                            .
                          </p>
                        </div>
                      </div>

                      <Button type="submit" className="w-full">
                        Submit
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our services, process, and clean room solutions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What industries do you serve?",
                answer:
                  "We provide clean room solutions for a wide range of industries including pharmaceutical, biotechnology, medical device manufacturing, microelectronics, food processing, and aerospace. Our expertise allows us to tailor our solutions to meet the specific requirements of each industry.",
              },
              {
                question: "How long does a typical clean room project take?",
                answer:
                  "The timeline for a clean room project varies depending on its complexity, size, and specific requirements. A small modular clean room might take 2-3 months from design to qualification, while a large pharmaceutical facility could take 12-18 months. During our initial consultation, we'll provide you with a detailed timeline specific to your project.",
              },
              {
                question: "Do you handle all aspects of clean room implementation?",
                answer:
                  "Yes, we offer comprehensive services covering the entire lifecycle of a clean room project. This includes initial consultation, concept development, detailed design, construction, installation, qualification, validation, training, and ongoing maintenance and support. Our turnkey approach ensures seamless execution and accountability.",
              },
              {
                question: "Can you upgrade or modify our existing clean room?",
                answer:
                  "Absolutely. We specialize in upgrading and modifying existing clean rooms to improve performance, increase energy efficiency, or meet new regulatory requirements. Our team will assess your current facility and recommend the most effective solutions while minimizing disruption to your operations.",
              },
              {
                question: "What certifications and standards do your clean rooms meet?",
                answer:
                  "Our clean rooms are designed and built to meet all relevant international standards including ISO 14644, EU GMP, FDA regulations, and specific industry requirements. We ensure full compliance with applicable regulations and can provide all necessary documentation for validation and certification.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Don't see your question here? Contact us directly and we'll be happy to help.
            </p>
            <Button asChild>
              <a href="mailto:office@rttechnik.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
