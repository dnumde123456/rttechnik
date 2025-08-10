import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Building2, Microscope, Cog, Settings, Users, Award } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cleanroom-corridor-glass.png"
            alt="Clean room services"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive Clean Room Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              From initial concept development to ongoing maintenance, we provide complete clean room solutions tailored
              to your industry requirements.
            </p>
            <Button asChild size="lg" className="text-base animate-pulse-slow">
              <a href="#services">Explore Our Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Complete Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Service Portfolio</h2>
            <p className="text-muted-foreground text-lg">
              We offer a comprehensive range of services to meet all your clean room needs, from initial planning to
              long-term support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Concept Development */}
            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Concept Development</h3>
                  <p className="text-muted-foreground mb-6">
                    Comprehensive concept development tailored to your specific industry requirements and regulatory
                    standards. We work closely with you to understand your needs and develop the optimal solution.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Industry-specific requirements analysis
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Regulatory compliance assessment
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Feasibility studies
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Design & Engineering */}
            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Cog className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Design & Engineering</h3>
                  <p className="text-muted-foreground mb-6">
                    Advanced 3D design and engineering solutions using cutting-edge technology for optimal clean room
                    performance. Our experienced team creates detailed plans and specifications.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      3D modeling and visualization
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      HVAC system design
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Detailed technical specifications
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Complete Installation Delivery */}
            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Microscope className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Complete Installation Delivery</h3>
                  <p className="text-muted-foreground mb-6">
                    Full turnkey delivery of complete installations with high-quality materials and energy-efficient
                    designs. We handle every aspect of the installation process.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Turnkey project delivery
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      High-quality materials
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Energy-efficient solutions
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Assembly & Work Coordination */}
            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Assembly & Work Coordination</h3>
                  <p className="text-muted-foreground mb-6">
                    Professional assembly and coordination of all construction work to ensure seamless project
                    execution. Our experienced team manages all aspects of the build process.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Professional assembly teams
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Project coordination
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Quality control processes
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Startup & Qualification */}
            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "500ms" }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Startup & Qualification</h3>
                  <p className="text-muted-foreground mb-6">
                    Comprehensive startup procedures and qualification testing to ensure your clean room meets all
                    regulatory requirements and performance standards.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      System commissioning
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Performance qualification
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Regulatory compliance testing
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Training */}
            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Training</h3>
                  <p className="text-muted-foreground mb-6">
                    Comprehensive training programs for your staff to ensure proper operation and maintenance of your
                    clean room facility.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Operator training programs
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Maintenance procedures
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Safety protocols
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Service & Maintenance */}
            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up md:col-span-2 lg:col-span-1"
              style={{ animationDelay: "700ms" }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Service & Maintenance</h3>
                  <p className="text-muted-foreground mb-6">
                    Ongoing service and maintenance support to ensure your clean room continues to operate at peak
                    performance throughout its lifecycle.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Preventive maintenance
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Emergency support
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Performance monitoring
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-muted-foreground text-lg">
              Our proven methodology ensures successful project delivery from initial consultation to ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-muted-foreground text-sm">
                Initial consultation to understand your requirements and assess project feasibility.
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-muted-foreground text-sm">
                Detailed design and engineering phase with 3D modeling and technical specifications.
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Installation</h3>
              <p className="text-muted-foreground text-sm">
                Professional installation and assembly with rigorous quality control processes.
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <p className="text-muted-foreground text-sm">
                Ongoing support, training, and maintenance to ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss your clean room requirements and discover how we can help bring your
              project to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="animate-pulse-slow">
                <a href="/contact">Get a Free Consultation</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/about">Learn More About Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
