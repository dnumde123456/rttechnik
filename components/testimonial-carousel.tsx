"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  quote: string
  author: string
  title: string
  avatar: string
}

const englishTestimonials: Testimonial[] = [
  {
    quote:
      "RTTechnik delivered a state-of-the-art clean room that exceeded our expectations. Their professionalism and expertise were outstanding.",
    author: "Dr. Sarah Johnson",
    title: "CEO, PharmaCorp",
    avatar: "/placeholder.svg?height=64&width=64&text=SJ",
  },
  {
    quote:
      "The modular clean room provided by RTTechnik was installed efficiently and perfectly met our stringent requirements for electronics manufacturing.",
    author: "Michael Chen",
    title: "Operations Manager, ElectroTech",
    avatar: "/placeholder.svg?height=64&width=64&text=MC",
  },
  {
    quote:
      "Exceptional quality and service from start to finish. RTTechnik is our go-to partner for all clean room needs.",
    author: "Prof. Emma Wilson",
    title: "Research Director, BioGen Labs",
    avatar: "/placeholder.svg?height=64&width=64&text=EW",
  },
  {
    quote:
      "The attention to detail and commitment to quality standards made RTTechnik the perfect choice for our pharmaceutical facility.",
    author: "Dr. James Rodriguez",
    title: "Quality Director, MedTech Solutions",
    avatar: "/placeholder.svg?height=64&width=64&text=JR",
  },
  {
    quote:
      "Outstanding project management and technical expertise. Our clean room was delivered on time and within budget.",
    author: "Lisa Thompson",
    title: "Facility Manager, BioPharm Inc.",
    avatar: "/placeholder.svg?height=64&width=64&text=LT",
  },
]

const polishTestimonials: Testimonial[] = [
  {
    quote:
      "RTTechnik dostarczył nam najnowocześniejsze pomieszczenie czyste, które przerosło nasze oczekiwania. Ich profesjonalizm i wiedza były wybitne.",
    author: "Dr Anna Kowalska",
    title: "CEO, PharmaCorp",
    avatar: "/placeholder.svg?height=64&width=64&text=AK",
  },
  {
    quote:
      "Modułowe pomieszczenie czyste dostarczone przez RTTechnik zostało zainstalowane sprawnie i doskonale spełniło nasze rygorystyczne wymagania dotyczące produkcji elektroniki.",
    author: "Inż. Piotr Nowak",
    title: "Kierownik Operacyjny, ElectroTech",
    avatar: "/placeholder.svg?height=64&width=64&text=PN",
  },
  {
    quote:
      "Wyjątkowa jakość i obsługa od początku do końca. RTTechnik to nasz główny partner we wszystkich potrzebach związanych z pomieszczeniami czystymi.",
    author: "Prof. Maria Zielińska",
    title: "Kierownik Badań, BioGen Labs",
    avatar: "/placeholder.svg?height=64&width=64&text=MZ",
  },
  {
    quote:
      "Dbałość o szczegóły i zaangażowanie w standardy jakości sprawiły, że RTTechnik był idealnym wyborem dla naszego zakładu farmaceutycznego.",
    author: "Dr Jakub Wiśniewski",
    title: "Dyrektor Jakości, MedTech Solutions",
    avatar: "/placeholder.svg?height=64&width=64&text=JW",
  },
  {
    quote:
      "Wybitne zarządzanie projektem i wiedza techniczna. Nasze pomieszczenie czyste zostało dostarczone na czas i w ramach budżetu.",
    author: "Anna Lewandowska",
    title: "Kierownik Obiektu, BioPharm Inc.",
    avatar: "/placeholder.svg?height=64&width=64&text=AL",
  },
]

interface TestimonialCarouselProps {
  isPolish?: boolean
}

export default function TestimonialCarousel({ isPolish = false }: TestimonialCarouselProps) {
  const testimonials = isPolish ? polishTestimonials : englishTestimonials
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="border-none shadow-xl bg-white/50 backdrop-blur-sm">
        <CardContent className="p-8 md:p-12">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>

          <blockquote className="text-lg md:text-xl text-center text-gray-700 mb-8 leading-relaxed">
            "{testimonials[currentIndex].quote}"
          </blockquote>

          <div className="flex items-center justify-center space-x-4">
            <div className="relative h-16 w-16 rounded-full overflow-hidden">
              <Image
                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                alt={testimonials[currentIndex].author}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <div className="font-semibold text-gray-900">{testimonials[currentIndex].author}</div>
              <div className="text-sm text-gray-600">{testimonials[currentIndex].title}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center items-center mt-8 space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="rounded-full bg-white/80 hover:bg-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="rounded-full bg-white/80 hover:bg-white"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
