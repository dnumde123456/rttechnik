import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Clock, Building2 } from "lucide-react"

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
              <Image src="/placeholder.svg?height=1000&width=800" alt="RTTechnik team" fill className="object-cover" />
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
                understanding of our clients' unique needs. We've successfully completed over 500 projects across
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

      {/* Stats Section */}
      <section className="py-16 bg-muted">
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
              <div className="text-4xl font-bold mb-2">500+</div>
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

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-3xl font-bold mb-6">Meet the Experts Behind RTTechnik</h2>
            <p className="text-muted-foreground text-lg">
              Our team of highly skilled professionals brings together decades of combined experience in clean room
              design, engineering, and implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Robert Müller",
                position: "Founder & CEO",
                image: "/placeholder.svg?height=400&width=400",
                bio: "With over 30 years in the industry, Dr. Müller leads our company with vision and expertise.",
              },
              {
                name: "Ing. Maria Schmidt",
                position: "Technical Director",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Maria oversees all technical aspects of our projects, ensuring the highest standards of quality.",
              },
              {
                name: "Dipl.-Ing. Thomas Weber",
                position: "Head of Engineering",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Thomas brings innovative engineering solutions to even the most complex clean room challenges.",
              },
              {
                name: "Dr. Anna Bauer",
                position: "Quality Assurance Manager",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Anna ensures all our projects meet rigorous regulatory requirements and quality standards.",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.position}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Our team extends beyond these key members to include specialized engineers, project managers, technicians,
              and support staff – all dedicated to delivering excellence.
            </p>
            <Button asChild>
              <Link href="/contact">Get in Touch With Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
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
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="RTTechnik values"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
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
