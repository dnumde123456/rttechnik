"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface TestimonialCarouselProps {
  isPolish?: boolean
}

export default function TestimonialCarousel({ isPolish = false }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = isPolish
    ? [
        {
          id: 1,
          name: "Dr. Sarah Johnson",
          position: "Kierownik Działu R&D, PharmaTech Inc.",
          content:
            "RTTechnik dostarczył nasz projekt pomieszczenia czystego na czas i w ramach budżetu. Ich dbałość o szczegóły i wiedza techniczna przekroczyły nasze oczekiwania. Od tego czasu zleciliśmy im dwa dodatkowe obiekty.",
        },
        {
          id: 2,
          name: "Michael Schmidt",
          position: "Dyrektor Operacyjny, BioMed Solutions",
          content:
            "Współpraca z RTTechnik była bezproblemowym doświadczeniem od projektu do wdrożenia. Wiedza ich zespołu na temat wymogów regulacyjnych zaoszczędziła nam znaczną ilość czasu w procesie walidacji.",
        },
        {
          id: 3,
          name: "Dr. Elena Petrova",
          position: "CEO, NovaCure Laboratories",
          content:
            "Jakość pracy RTTechnik jest wyjątkowa. Nasze pomieszczenie czyste działa od trzech lat z minimalnymi problemami konserwacyjnymi. Ich ciągłe wsparcie jest nieocenione dla naszej działalności.",
        },
        {
          id: 4,
          name: "Thomas Weber",
          position: "Kierownik Obiektu, MedDevice GmbH",
          content:
            "Energooszczędny projekt RTTechnik znacznie obniżył nasze koszty operacyjne przy jednoczesnym zachowaniu najwyższych standardów czystości. Ich innowacyjne podejście wyróżnia ich na tle konkurencji.",
        },
      ]
    : [
        {
          id: 1,
          name: "Dr. Sarah Johnson",
          position: "Head of R&D, PharmaTech Inc.",
          content:
            "RTTechnik delivered our clean room project on time and within budget. Their attention to detail and technical expertise exceeded our expectations. We've since contracted them for two additional facilities.",
        },
        {
          id: 2,
          name: "Michael Schmidt",
          position: "Operations Director, BioMed Solutions",
          content:
            "Working with RTTechnik has been a seamless experience from design to implementation. Their team's knowledge of regulatory requirements saved us significant time in the validation process.",
        },
        {
          id: 3,
          name: "Dr. Elena Petrova",
          position: "CEO, NovaCure Laboratories",
          content:
            "The quality of RTTechnik's work is outstanding. Our clean room has been operational for three years with minimal maintenance issues. Their ongoing support has been invaluable to our operations.",
        },
        {
          id: 4,
          name: "Thomas Weber",
          position: "Facility Manager, MedDevice GmbH",
          content:
            "RTTechnik's energy-efficient design has reduced our operational costs significantly while maintaining the highest standards of cleanliness. Their innovative approach sets them apart from competitors.",
        },
      ]

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrevious = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-primary/20 mb-4 animate-float" />
                  <p className="text-lg mb-6 italic">{testimonial.content}</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevious}
          aria-label={isPolish ? "Poprzednia opinia" : "Previous testimonial"}
          className="hover:scale-110 transition-transform"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`w-2 h-2 rounded-full p-0 min-w-0 ${index === activeIndex ? "bg-primary" : "bg-muted"}`}
            onClick={() => {
              setAutoplay(false)
              setActiveIndex(index)
            }}
            aria-label={isPolish ? `Przejdź do opinii ${index + 1}` : `Go to testimonial ${index + 1}`}
          />
        ))}

        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          aria-label={isPolish ? "Następna opinia" : "Next testimonial"}
          className="hover:scale-110 transition-transform"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
