import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Clock, Building2, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4">About Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Decades of Excellence in Clean Room Solutions</h1>
            <p className="text-lg text-muted-foreground mb-8">
              RTTechnik has been at the forefront of clean room technology for over 25 years, delivering exceptional
              quality and innovative solutions to clients across Europe and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/cleanroom-lab-equipment.png"
                alt="RTTechnik clean room professionals"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <Badge className="mb-4">Our Story</Badge>
              <h2 className="text-3xl font-bold mb-6">From Humble Beginnings to Industry Leaders</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 1998, RTTechnik began as a small team of engineers with a vision to revolutionize clean room
                design and implementation. Today, we've grown into one of Europe's most respected clean room solution
                providers.
              </p>
              <p className="text-muted-foreground mb-4">
                Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep
                understanding of our clients' unique needs. We've successfully completed over 187 projects across
                pharmaceutical, medical device, biotechnology, and microelectronics industries.
              </p>
              <p className="text-muted-foreground mb-6">
                What sets us apart is our holistic approach – from initial concept and design through to installation,
                qualification, and ongoing maintenance. We're not just contractors; we're partners in your success.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>ISO 9001:2015 certified for quality management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Compliant with GMP, FDA, and EMA regulations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Environmentally conscious designs and practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Team of certified engineers and technicians</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced ISO 9001 Certification Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-8">
                <div className="h-20 w-20 rounded-xl bg-primary/15 flex items-center justify-center mr-6 shadow-lg">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <Badge className="mb-3 bg-primary/20 text-primary">Quality Assurance Excellence</Badge>
                  <h2 className="text-4xl font-bold">ISO 9001:2015 Certified</h2>
                  <p className="text-primary font-medium mt-1">The Gold Standard in Quality Management</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                RTTechnik is proud to be ISO 9001:2015 certified, demonstrating our unwavering commitment to quality
                management systems and continuous improvement. This prestigious certification ensures that every aspect
                of our operations meets the highest international standards.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start bg-white/50 p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Quality Management System</h3>
                    <p className="text-muted-foreground">
                      Systematic approach to quality control and assurance across all operations
                    </p>
                  </div>
                </div>
                <div className="flex items-start bg-white/50 p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Continuous Improvement</h3>
                    <p className="text-muted-foreground">Regular assessment and enhancement of all processes</p>
                  </div>
                </div>
                <div className="flex items-start bg-white/50 p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Customer Satisfaction</h3>
                    <p className="text-muted-foreground">Focus on meeting and exceeding client expectations</p>
                  </div>
                </div>
                <div className="flex items-start bg-white/50 p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Risk Management</h3>
                    <p className="text-muted-foreground">Proactive identification and mitigation of risks</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Certification Display */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-primary/20">
                <h4 className="font-bold text-lg mb-4 text-center">Our Certifications & Memberships</h4>
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="relative h-24 w-32 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow">
                      <Image
                        src="/images/iso-9001-llc-logo.png"
                        alt="ISO 9001 Certified"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <p className="text-sm font-medium mt-2">ISO 9001:2015</p>
                    <p className="text-xs text-muted-foreground">Quality Management</p>
                  </div>
                  <div className="text-center">
                    <div className="relative h-24 w-32 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow">
                      <Image
                        src="/images/bio-forum-member.png"
                        alt="Bio Forum Member"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <p className="text-sm font-medium mt-2">Bio Forum</p>
                    <p className="text-xs text-muted-foreground">Industry Member</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/30 rounded-2xl blur-lg"></div>
              <div className="relative h-[700px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/iso-certificate-english.png"
                  alt="RTTechnik ISO 9001:2015 Certificate"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Our Impact</Badge>
            <h2 className="text-3xl font-bold mb-6">RTTechnik by the Numbers</h2>
            <p className="text-muted-foreground text-lg">
              Our track record speaks for itself with hundreds of successful projects and satisfied clients across
              Europe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-background shadow-md">
              <div className="flex justify-center mb-4">
                <Building2 className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2">187</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background shadow-md">
              <div className="flex justify-center mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2">300+</div>
              <p className="text-muted-foreground">Satisfied Clients</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background shadow-md">
              <div className="flex justify-center mb-4">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-background shadow-md">
              <div className="flex justify-center mb-4">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-muted-foreground">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Our Values</Badge>
              <h2 className="text-3xl font-bold mb-6">The Principles That Guide Us</h2>
              <p className="text-muted-foreground mb-8">
                At RTTechnik, our core values shape everything we do – from how we design and build clean rooms to how
                we interact with our clients and each other.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">Excellence</h3>
                    <p className="text-muted-foreground">
                      We strive for excellence in every aspect of our work, never compromising on quality or safety.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">Innovation</h3>
                    <p className="text-muted-foreground">
                      We continuously seek innovative solutions to improve efficiency, sustainability, and performance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">Integrity</h3>
                    <p className="text-muted-foreground">
                      We conduct our business with honesty, transparency, and ethical practices at all times.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">Partnership</h3>
                    <p className="text-muted-foreground">
                      We build lasting relationships with our clients based on trust, collaboration, and mutual success.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image src="/images/cleanroom-red-doors.png" alt="RTTechnik values" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss your clean room project and discover how RTTechnik can deliver the
              perfect solution for your needs.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
