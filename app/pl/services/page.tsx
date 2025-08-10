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
            alt="Usługi pomieszczeń czystych"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Nasze Usługi
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Kompleksowe Rozwiązania Pomieszczeń Czystych
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Od początkowego opracowania koncepcji po bieżącą konserwację, zapewniamy kompletne rozwiązania pomieszczeń
              czystych dostosowane do wymagań Twojej branży.
            </p>
            <Button asChild size="lg" className="text-base animate-pulse-slow">
              <a href="#services">Poznaj Nasze Usługi</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Kompletne Rozwiązania</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nasze Portfolio Usług</h2>
            <p className="text-muted-foreground text-lg">
              Oferujemy kompleksową gamę usług, aby sprostać wszystkim potrzebom związanym z pomieszczeniami czystymi,
              od początkowego planowania po długoterminowe wsparcie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Opracowanie Koncepcji */}
            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Opracowanie Koncepcji</h3>
                  <p className="text-muted-foreground mb-6">
                    Kompleksowe opracowanie koncepcji dostosowane do specyficznych wymagań branżowych i standardów
                    regulacyjnych. Współpracujemy ściśle z Tobą, aby zrozumieć Twoje potrzeby i opracować optymalne
                    rozwiązanie.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Analiza wymagań specyficznych dla branży
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Ocena zgodności z przepisami
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Studia wykonalności
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Projektowanie */}
            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Cog className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Projektowanie</h3>
                  <p className="text-muted-foreground mb-6">
                    Zaawansowane rozwiązania projektowe i inżynieryjne z wykorzystaniem najnowocześniejszej technologii
                    dla optymalnej wydajności pomieszczeń czystych. Nasz doświadczony zespół tworzy szczegółowe plany i
                    specyfikacje.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Modelowanie i wizualizacja 3D
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Projektowanie systemów HVAC
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Szczegółowe specyfikacje techniczne
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Dostawa Kompletnej Instalacji */}
            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Microscope className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Dostawa Kompletnej Instalacji</h3>
                  <p className="text-muted-foreground mb-6">
                    Pełna dostawa kompletnych instalacji "pod klucz" z wysokiej jakości materiałami i energooszczędnymi
                    projektami. Zajmujemy się każdym aspektem procesu instalacji.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Dostawa projektów "pod klucz"
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Wysokiej jakości materiały
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Energooszczędne rozwiązania
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Montaż i Koordynacja Prowadzonych Prac */}
            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Montaż i Koordynacja Prowadzonych Prac</h3>
                  <p className="text-muted-foreground mb-6">
                    Profesjonalny montaż i koordynacja wszystkich prac budowlanych w celu zapewnienia bezproblemowej
                    realizacji projektu. Nasz doświadczony zespół zarządza wszystkimi aspektami procesu budowy.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Profesjonalne zespoły montażowe
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Koordynacja projektów
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Procesy kontroli jakości
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Uruchomienie i Kwalifikacja */}
            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "500ms" }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Uruchomienie i Kwalifikacja</h3>
                  <p className="text-muted-foreground mb-6">
                    Kompleksowe procedury uruchomienia i testy kwalifikacyjne, aby zapewnić, że pomieszczenie czyste
                    spełnia wszystkie wymagania regulacyjne i standardy wydajności.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Uruchomienie systemu
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Kwalifikacja wydajności
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Testy zgodności z przepisami
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Szkolenie */}
            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Szkolenie</h3>
                  <p className="text-muted-foreground mb-6">
                    Kompleksowe programy szkoleniowe dla Twojego personelu, aby zapewnić właściwą obsługę i konserwację
                    obiektu pomieszczenia czystego.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Programy szkolenia operatorów
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Procedury konserwacji
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Protokoły bezpieczeństwa
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Serwis */}
            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up md:col-span-2 lg:col-span-1"
              style={{ animationDelay: "700ms" }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Serwis</h3>
                  <p className="text-muted-foreground mb-6">
                    Bieżące wsparcie serwisowe i konserwacyjne, aby zapewnić, że pomieszczenie czyste będzie działać z
                    optymalną wydajnością przez cały okres użytkowania.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Konserwacja zapobiegawcza
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Wsparcie awaryjne
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      Monitorowanie wydajności
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
            <Badge className="mb-4">Nasz Proces</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Jak Pracujemy</h2>
            <p className="text-muted-foreground text-lg">
              Nasza sprawdzona metodologia zapewnia pomyślną realizację projektu od początkowej konsultacji po bieżące
              wsparcie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Konsultacja</h3>
              <p className="text-muted-foreground text-sm">
                Początkowa konsultacja w celu zrozumienia Twoich wymagań i oceny wykonalności projektu.
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Projektowanie</h3>
              <p className="text-muted-foreground text-sm">
                Szczegółowa faza projektowania i inżynierii z modelowaniem 3D i specyfikacjami technicznymi.
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Instalacja</h3>
              <p className="text-muted-foreground text-sm">
                Profesjonalna instalacja i montaż z rygorystycznymi procesami kontroli jakości.
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Wsparcie</h3>
              <p className="text-muted-foreground text-sm">
                Bieżące wsparcie, szkolenia i konserwacja w celu zapewnienia optymalnej wydajności.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Gotowy Rozpocząć Swój Projekt?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Skontaktuj się z naszym zespołem już dziś, aby omówić wymagania dotyczące pomieszczenia czystego i odkryć,
              jak możemy pomóc w realizacji Twojego projektu.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="animate-pulse-slow">
                <a href="/pl/contact">Uzyskaj Bezpłatną Konsultację</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/pl/about">Dowiedz Się Więcej o Nas</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
