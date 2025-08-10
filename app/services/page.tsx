import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Cog, Microscope, GraduationCap, Wrench, CheckCircle, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Clean Room Solutions</h1>
            <p className="text-lg text-muted-foreground mb-8">
              From concept to completion and beyond, RTTechnik provides end-to-end services for all your clean room
              needs with unmatched precision and quality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="overview" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/cleanroom-modular-exterior.png"
                alt="RTTechnik services overview"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <Badge className="mb-4">Full Spectrum Services</Badge>
              <h2 className="text-3xl font-bold mb-6">Your Partner at Every Stage</h2>
              <p className="text-muted-foreground mb-6">
                RTTechnik offers a complete range of services to support your clean room project from initial concept
                through to ongoing maintenance and support. Our integrated approach ensures seamless execution and
                optimal results.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Concept Development & Design</h3>
                    <p className="text-muted-foreground">Custom solutions tailored to your specific requirements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Installation & Construction</h3>
                    <p className="text-muted-foreground">Professional implementation with minimal disruption</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Qualification & Validation</h3>
                    <p className="text-muted-foreground">Comprehensive testing to ensure regulatory compliance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Training & Knowledge Transfer</h3>
                    <p className="text-muted-foreground">Ensuring your team can operate and maintain the facility</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Maintenance & Servicing</h3>
                    <p className="text-muted-foreground">Ongoing support to maximize performance and longevity</p>
                  </div>
                </li>
              </ul>

              <Button asChild>
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Our Expertise</Badge>
            <h2 className="text-3xl font-bold mb-6">Detailed Service Offerings</h2>
            <p className="text-muted-foreground text-lg">
              Explore our comprehensive range of services designed to meet all your clean room needs with precision and
              excellence.
            </p>
          </div>

          {/* Design Service */}
          <div id="design" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Clean Room Design & Planning</h3>
              <p className="text-muted-foreground mb-4">
                Our design process begins with a thorough understanding of your requirements, workflows, and regulatory
                needs. We then create custom clean room designs that optimize space, efficiency, and compliance.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Advanced 3D modeling and visualization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Airflow and contamination control analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Energy-efficient and sustainable designs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Regulatory compliance planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Detailed technical documentation</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-primary font-medium hover:underline">
                Learn more about our design process <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/cleanroom-empty-large.png"
                alt="Clean room design process"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Installation Service */}
          <div id="installation" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl lg:order-first">
              <Image
                src="/images/cleanroom-large-machine.png"
                alt="Clean room installation"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Cog className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Installation & Construction</h3>
              <p className="text-muted-foreground mb-4">
                Our experienced installation teams bring your clean room design to life with precision and attention to
                detail. We manage the entire construction process to ensure minimal disruption to your operations.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Turnkey installation services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>High-quality materials and components</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Strict adherence to project timelines</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Rigorous quality control throughout construction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Comprehensive system integration</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-primary font-medium hover:underline">
                Learn more about our installation process <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Qualification Service */}
          <div id="qualification" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Microscope className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Qualification & Validation</h3>
              <p className="text-muted-foreground mb-4">
                Our comprehensive qualification and validation services ensure your clean room meets all regulatory
                requirements and performs to specification. We provide detailed documentation to support your compliance
                efforts.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Design qualification (DQ)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Installation qualification (IQ)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Operational qualification (OQ)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Performance qualification (PQ)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Comprehensive validation documentation</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-primary font-medium hover:underline">
                Learn more about our qualification process <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/cleanroom-lab-equipment.png"
                alt="Clean room qualification"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Training Service */}
          <div id="training" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl lg:order-first">
              <Image
                src="/images/cleanroom-corridor-glass.png"
                alt="Clean room training"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Training & Knowledge Transfer</h3>
              <p className="text-muted-foreground mb-4">
                We provide comprehensive training to ensure your team has the knowledge and skills to operate and
                maintain your clean room effectively. Our training programs are tailored to your specific needs and can
                be delivered on-site or remotely.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Operational procedures and protocols</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Maintenance and troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Contamination control practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Regulatory compliance requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Customized training materials and documentation</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-primary font-medium hover:underline">
                Learn more about our training programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Servicing */}
          <div id="servicing" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Maintenance & Servicing</h3>
              <p className="text-muted-foreground mb-4">
                Our comprehensive maintenance and servicing programs ensure your clean room continues to operate at peak
                performance throughout its lifecycle. We offer flexible service packages to meet your specific needs and
                budget.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Preventive maintenance programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Emergency repair services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>System upgrades and modifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Performance monitoring and optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Compliance testing and recertification</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-primary font-medium hover:underline">
                Learn more about our maintenance services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/cleanroom-production-line.png"
                alt="Clean room maintenance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4">Industries</Badge>
            <h2 className="text-3xl font-bold mb-6">Specialized Solutions for Various Industries</h2>
            <p className="text-muted-foreground text-lg">
              We provide tailored clean room solutions for a wide range of industries, each with unique requirements and
              regulatory standards. Our expertise spans across multiple sectors, ensuring we can deliver the perfect
              clean room solution for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Pharmaceutical</h3>
                <p className="text-muted-foreground">
                  GMP-compliant clean rooms for pharmaceutical manufacturing, research, and development with stringent
                  contamination control.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Biotechnology</h3>
                <p className="text-muted-foreground">
                  Specialized environments for biotech research and production, designed to maintain sterility and
                  prevent cross-contamination.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Cog className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Medical Devices</h3>
                <p className="text-muted-foreground">
                  ISO-classified clean rooms for medical device manufacturing and assembly, ensuring product safety and
                  quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Microelectronics</h3>
                <p className="text-muted-foreground">
                  Particle-controlled environments for semiconductor and microelectronics manufacturing with ESD
                  protection.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Food & Beverage</h3>
                <p className="text-muted-foreground">
                  Hygienic processing environments that meet HACCP and food safety standards for contamination-free
                  production.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Cog className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Aerospace</h3>
                <p className="text-muted-foreground">
                  Precision-controlled environments for aerospace component manufacturing and assembly with strict
                  quality controls.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Clean Room Project?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our team today for a consultation and discover how RTTechnik can deliver the perfect clean room
              solution for your needs.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
