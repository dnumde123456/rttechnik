import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Building2, Microscope, Cog, Award, Users, Clock } from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cleanroom-space.png"
            alt="Clean room facility"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Industry Leaders
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Precision in Clean Room Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Designing, executing, and servicing state-of-the-art clean rooms for pharmaceutical, medical, and
              biotechnology industries with decades of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base animate-pulse-slow">
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-base"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Our Expertise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Clean Room Solutions</h2>
            <p className="text-muted-foreground text-lg">
              From concept to completion, we provide end-to-end services for all your clean room needs with unmatched
              precision and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Design & Planning</h3>
                <p className="text-muted-foreground">
                  Custom clean room design using advanced 3D technology to visualize your project before construction
                  begins.
                </p>
                <Link
                  href="/services#design"
                  className="inline-flex items-center text-primary font-medium hover:underline group"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Cog className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Installation & Setup</h3>
                <p className="text-muted-foreground">
                  Professional installation of clean rooms with high-quality materials and energy-efficient designs.
                </p>
                <Link
                  href="/services#installation"
                  className="inline-flex items-center text-primary font-medium hover:underline group"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Qualification & Validation</h3>
                <p className="text-muted-foreground">
                  Comprehensive testing and validation to ensure your clean room meets all regulatory requirements.
                </p>
                <Link
                  href="/services#qualification"
                  className="inline-flex items-center text-primary font-medium hover:underline group"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="animate-bounce-slow bg-transparent">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Badge className="mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Decades of Experience in Clean Room Excellence</h2>
              <p className="text-muted-foreground text-lg mb-8">
                RTTechnik has established itself as a leader in the clean room industry, delivering exceptional quality
                and service to clients across pharmaceutical, medical, and biotechnology sectors.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Unmatched Expertise</h3>
                    <p className="text-muted-foreground">
                      Over 25 years of specialized experience in clean room solutions
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">ISO 9001:2015 Certified</h3>
                    <p className="text-muted-foreground">
                      Quality management system certified to international standards
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Customized Approach</h3>
                    <p className="text-muted-foreground">
                      Tailored solutions designed to meet your specific requirements
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Ongoing Support</h3>
                    <p className="text-muted-foreground">Comprehensive maintenance and service packages</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex items-center space-x-4">
                <Button asChild className="relative overflow-hidden group">
                  <Link href="/about">
                    <span className="relative z-10">Learn About Our Company</span>
                    <span className="absolute inset-0 bg-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </Button>
                <div className="flex items-center space-x-2">
                  <div className="relative h-8 w-10">
                    <Image src="/images/iso-9001-logo.png" alt="ISO 9001 Certified" fill className="object-contain" />
                  </div>
                  <div className="relative h-8 w-10">
                    <Image src="/images/bio-forum-member.png" alt="Bio Forum Member" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl animate-fade-in-right">
              <Image
                src="/images/cleanroom-lab.png"
                alt="RTTechnik clean room project"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30">
              Our Impact
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Delivering Excellence at Scale</h2>
            <p className="text-primary-foreground/80 text-lg">
              Our track record speaks for itself with hundreds of successful projects and satisfied clients across
              Europe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="text-center p-6 rounded-lg bg-primary-foreground/5 transform hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex justify-center mb-4">
                <Building2 className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="187">
                187
              </div>
              <p className="text-primary-foreground/80">Projects Completed</p>
            </div>

            <div
              className="text-center p-6 rounded-lg bg-primary-foreground/5 transform hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex justify-center mb-4">
                <Users className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="300">
                300+
              </div>
              <p className="text-primary-foreground/80">Satisfied Clients</p>
            </div>

            <div
              className="text-center p-6 rounded-lg bg-primary-foreground/5 transform hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex justify-center mb-4">
                <Clock className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="25">
                25+
              </div>
              <p className="text-primary-foreground/80">Years of Experience</p>
            </div>

            <div
              className="text-center p-6 rounded-lg bg-primary-foreground/5 transform hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <div className="flex justify-center mb-4">
                <Award className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="15">
                15+
              </div>
              <p className="text-primary-foreground/80">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Room Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Our Work</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">State-of-the-Art Clean Room Facilities</h2>
            <p className="text-muted-foreground text-lg">
              Explore our portfolio of completed clean room projects showcasing cutting-edge technology and precision
              engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="relative h-64">
                <Image
                  src="/images/cleanroom-personnel.png"
                  alt="Clean room with personnel in protective suits"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Pharmaceutical Manufacturing</h3>
                <p className="text-muted-foreground">
                  ISO Class 5 clean room for sterile pharmaceutical production with advanced contamination control.
                </p>
              </CardContent>
            </Card>

            <Card
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative h-64">
                <Image
                  src="/images/cleanroom-corridor.png"
                  alt="Clean room corridor with glass walls"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Research Facility</h3>
                <p className="text-muted-foreground">
                  Modern clean room complex with modular design for biotechnology research and development.
                </p>
              </CardContent>
            </Card>

            <Card
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <div className="relative h-64">
                <Image
                  src="/images/cleanroom-changing.png"
                  alt="Clean room changing area with lockers"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Support Facilities</h3>
                <p className="text-muted-foreground">
                  Comprehensive changing rooms and support areas designed for optimal workflow and compliance.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="animate-bounce-slow bg-transparent">
              <Link href="/gallery">View Complete Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it. Here's what our clients have to say about working with RTTechnik.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Clean Room Project?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our team today for a consultation and discover how RTTechnik can deliver the perfect clean room
              solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="animate-pulse-slow">
                <Link href="/contact">Request a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/gallery">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
