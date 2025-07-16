import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4">Project Gallery</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clean Room Projects</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our portfolio of completed clean room projects across various industries. Each project showcases
              our commitment to quality, innovation, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="outline" className="rounded-full">
              All Projects
            </Button>
            <Button variant="ghost" className="rounded-full">
              Pharmaceutical
            </Button>
            <Button variant="ghost" className="rounded-full">
              Biotechnology
            </Button>
            <Button variant="ghost" className="rounded-full">
              Medical Devices
            </Button>
            <Button variant="ghost" className="rounded-full">
              Microelectronics
            </Button>
            <Button variant="ghost" className="rounded-full">
              Food & Beverage
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pharmaceutical Manufacturing Facility",
                location: "Vienna, Austria",
                description: "ISO Class 5 clean room for sterile pharmaceutical production",
                image: "/placeholder.svg?height=600&width=800",
                category: "Pharmaceutical",
              },
              {
                title: "Biotech Research Laboratory",
                location: "Munich, Germany",
                description: "Custom-designed clean room for advanced biotechnology research",
                image: "/placeholder.svg?height=600&width=800",
                category: "Biotechnology",
              },
              {
                title: "Medical Device Assembly",
                location: "Zurich, Switzerland",
                description: "ISO Class 6 clean room for precision medical device assembly",
                image: "/placeholder.svg?height=600&width=800",
                category: "Medical Devices",
              },
              {
                title: "Semiconductor Manufacturing",
                location: "Prague, Czech Republic",
                description: "Class 1000 clean room with ESD protection for microelectronics",
                image: "/placeholder.svg?height=600&width=800",
                category: "Microelectronics",
              },
              {
                title: "Aseptic Food Processing",
                location: "Budapest, Hungary",
                description: "HACCP-compliant clean room for food processing and packaging",
                image: "/placeholder.svg?height=600&width=800",
                category: "Food & Beverage",
              },
              {
                title: "Vaccine Production Facility",
                location: "Warsaw, Poland",
                description: "GMP-compliant clean room suite for vaccine manufacturing",
                image: "/placeholder.svg?height=600&width=800",
                category: "Pharmaceutical",
              },
              {
                title: "Cell Therapy Laboratory",
                location: "Berlin, Germany",
                description: "ISO Class 5 clean room for advanced cell therapy research",
                image: "/placeholder.svg?height=600&width=800",
                category: "Biotechnology",
              },
              {
                title: "Implantable Device Manufacturing",
                location: "Milan, Italy",
                description: "ISO Class 5 clean room for implantable medical device production",
                image: "/placeholder.svg?height=600&width=800",
                category: "Medical Devices",
              },
              {
                title: "Optical Component Assembly",
                location: "Lyon, France",
                description: "Class 100 clean room for precision optical component assembly",
                image: "/placeholder.svg?height=600&width=800",
                category: "Microelectronics",
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-2">{project.category}</Badge>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.location}</p>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline">Load More Projects</Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Case Studies</Badge>
            <h2 className="text-3xl font-bold mb-6">Featured Project Highlights</h2>
            <p className="text-muted-foreground text-lg">
              Dive deeper into some of our most challenging and innovative clean room projects. These case studies
              showcase our problem-solving capabilities and technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="overflow-hidden border-none shadow-xl">
              <div className="relative h-80">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Pharmaceutical manufacturing facility case study"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8">
                <Badge className="mb-3">Pharmaceutical</Badge>
                <h3 className="text-2xl font-bold mb-3">Leading Pharmaceutical Manufacturer</h3>
                <p className="text-muted-foreground mb-4">
                  A comprehensive clean room solution for a leading pharmaceutical manufacturer requiring multiple ISO
                  classifications within a single facility. This project included specialized air handling systems,
                  material transfer solutions, and integrated monitoring systems.
                </p>
                <Button asChild>
                  <Link href="/case-studies/pharmaceutical-manufacturer">Read Case Study</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-xl">
              <div className="relative h-80">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Biotechnology research facility case study"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8">
                <Badge className="mb-3">Biotechnology</Badge>
                <h3 className="text-2xl font-bold mb-3">Advanced Biotech Research Facility</h3>
                <p className="text-muted-foreground mb-4">
                  A state-of-the-art clean room complex for a biotechnology research institution, featuring modular
                  design for future expansion, energy-efficient systems, and advanced contamination control measures for
                  handling sensitive biological materials.
                </p>
                <Button asChild>
                  <Link href="/case-studies/biotech-research-facility">Read Case Study</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Own Success Story?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss your clean room project and join our portfolio of successful
              implementations.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
