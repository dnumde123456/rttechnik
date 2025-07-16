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
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4">Galeria Projektów</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nasze Projekty Pomieszczeń Czystych</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Poznaj nasze portfolio zrealizowanych projektów pomieszczeń czystych w różnych branżach. Każdy projekt
              pokazuje nasze zaangażowanie w jakość, innowację i doskonałość.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="outline" className="rounded-full">
              Wszystkie Projekty
            </Button>
            <Button variant="ghost" className="rounded-full">
              Farmaceutyka
            </Button>
            <Button variant="ghost" className="rounded-full">
              Biotechnologia
            </Button>
            <Button variant="ghost" className="rounded-full">
              Urządzenia Medyczne
            </Button>
            <Button variant="ghost" className="rounded-full">
              Mikroelektronika
            </Button>
            <Button variant="ghost" className="rounded-full">
              Żywność i Napoje
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
                title: "Zakład Produkcji Farmaceutycznej",
                location: "Wiedeń, Austria",
                description: "Pomieszczenie czyste klasy ISO 5 do sterylnej produkcji farmaceutycznej",
                image: "/placeholder.svg?height=600&width=800",
                category: "Farmaceutyka",
              },
              {
                title: "Laboratorium Badawcze Biotechnologiczne",
                location: "Monachium, Niemcy",
                description:
                  "Niestandardowo zaprojektowane pomieszczenie czyste do zaawansowanych badań biotechnologicznych",
                image: "/placeholder.svg?height=600&width=800",
                category: "Biotechnologia",
              },
              {
                title: "Montaż Urządzeń Medycznych",
                location: "Zurych, Szwajcaria",
                description: "Pomieszczenie czyste klasy ISO 6 do precyzyjnego montażu urządzeń medycznych",
                image: "/placeholder.svg?height=600&width=800",
                category: "Urządzenia Medyczne",
              },
              {
                title: "Produkcja Półprzewodników",
                location: "Praga, Czechy",
                description: "Pomieszczenie czyste klasy 1000 z ochroną ESD dla mikroelektroniki",
                image: "/placeholder.svg?height=600&width=800",
                category: "Mikroelektronika",
              },
              {
                title: "Aseptyczne Przetwarzanie Żywności",
                location: "Budapeszt, Węgry",
                description: "Pomieszczenie czyste zgodne z HACCP do przetwarzania i pakowania żywności",
                image: "/placeholder.svg?height=600&width=800",
                category: "Żywność i Napoje",
              },
              {
                title: "Zakład Produkcji Szczepionek",
                location: "Warszawa, Polska",
                description: "Kompleks pomieszczeń czystych zgodny z GMP do produkcji szczepionek",
                image: "/placeholder.svg?height=600&width=800",
                category: "Farmaceutyka",
              },
              {
                title: "Laboratorium Terapii Komórkowej",
                location: "Berlin, Niemcy",
                description: "Pomieszczenie czyste klasy ISO 5 do zaawansowanych badań terapii komórkowej",
                image: "/placeholder.svg?height=600&width=800",
                category: "Biotechnologia",
              },
              {
                title: "Produkcja Urządzeń Implantowalnych",
                location: "Mediolan, Włochy",
                description: "Pomieszczenie czyste klasy ISO 5 do produkcji implantowalnych urządzeń medycznych",
                image: "/placeholder.svg?height=600&width=800",
                category: "Urządzenia Medyczne",
              },
              {
                title: "Montaż Komponentów Optycznych",
                location: "Lyon, Francja",
                description: "Pomieszczenie czyste klasy 100 do precyzyjnego montażu komponentów optycznych",
                image: "/placeholder.svg?height=600&width=800",
                category: "Mikroelektronika",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
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
            <Button variant="outline" className="animate-bounce-slow">
              Załaduj Więcej Projektów
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Studia Przypadków</Badge>
            <h2 className="text-3xl font-bold mb-6">Wyróżnione Projekty</h2>
            <p className="text-muted-foreground text-lg">
              Zagłęb się w niektóre z naszych najbardziej wymagających i innowacyjnych projektów pomieszczeń czystych.
              Te studia przypadków pokazują nasze zdolności rozwiązywania problemów i wiedzę techniczną.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow animate-fade-in-left">
              <div className="relative h-80">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Studium przypadku zakładu produkcji farmaceutycznej"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-8">
                <Badge className="mb-3">Farmaceutyka</Badge>
                <h3 className="text-2xl font-bold mb-3">Wiodący Producent Farmaceutyczny</h3>
                <p className="text-muted-foreground mb-4">
                  Kompleksowe rozwiązanie pomieszczenia czystego dla wiodącego producenta farmaceutycznego wymagającego
                  wielu klasyfikacji ISO w jednym obiekcie. Projekt ten obejmował specjalistyczne systemy obróbki
                  powietrza, rozwiązania transferu materiałów i zintegrowane systemy monitorowania.
                </p>
                <Button asChild className="animate-pulse-slow">
                  <Link href="/pl/case-studies/pharmaceutical-manufacturer">Przeczytaj Studium Przypadku</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow animate-fade-in-right">
              <div className="relative h-80">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Studium przypadku ośrodka badawczego biotechnologicznego"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-8">
                <Badge className="mb-3">Biotechnologia</Badge>
                <h3 className="text-2xl font-bold mb-3">Zaawansowany Ośrodek Badawczy Biotechnologiczny</h3>
                <p className="text-muted-foreground mb-4">
                  Najnowocześniejszy kompleks pomieszczeń czystych dla instytucji badawczej biotechnologicznej,
                  charakteryzujący się modułową konstrukcją umożliwiającą przyszłą rozbudowę, energooszczędnymi
                  systemami i zaawansowanymi środkami kontroli zanieczyszczeń do obsługi wrażliwych materiałów
                  biologicznych.
                </p>
                <Button asChild className="animate-pulse-slow">
                  <Link href="/pl/case-studies/biotech-research-facility">Przeczytaj Studium Przypadku</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6">Gotowy, by Stworzyć Swoją Własną Historię Sukcesu?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Skontaktuj się z naszym zespołem już dziś, aby omówić swój projekt pomieszczenia czystego i dołączyć do
              naszego portfolio udanych wdrożeń.
            </p>
            <Button asChild size="lg" className="animate-pulse-slow">
              <Link href="/pl/contact">Rozpocznij Swój Projekt</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
