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
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4">Nasze Usługi</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kompleksowe Rozwiązania Pomieszczeń Czystych</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Od koncepcji do realizacji i dalej, RTTechnik zapewnia kompleksowe usługi dla wszystkich potrzeb
              związanych z pomieszczeniami czystymi, z niezrównaną precyzją i jakością.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="overview" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl animate-fade-in-left">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Przegląd usług RTTechnik"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="animate-fade-in-right">
              <Badge className="mb-4">Pełne Spektrum Usług</Badge>
              <h2 className="text-3xl font-bold mb-6">Twój Partner na Każdym Etapie</h2>
              <p className="text-muted-foreground mb-6">
                RTTechnik oferuje pełen zakres usług wspierających Twój projekt pomieszczenia czystego od początkowej
                koncepcji aż po bieżącą konserwację i wsparcie. Nasze zintegrowane podejście zapewnia płynną realizację
                i optymalne wyniki.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Rozwój Koncepcji i Projektowanie</h3>
                    <p className="text-muted-foreground">
                      Niestandardowe rozwiązania dostosowane do Twoich konkretnych wymagań
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Instalacja i Budowa</h3>
                    <p className="text-muted-foreground">Profesjonalne wdrożenie z minimalnym zakłóceniem</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Kwalifikacja i Walidacja</h3>
                    <p className="text-muted-foreground">Kompleksowe testy zapewniające zgodność z przepisami</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Szkolenia i Transfer Wiedzy</h3>
                    <p className="text-muted-foreground">
                      Zapewnienie, że Twój zespół może obsługiwać i utrzymywać obiekt
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Konserwacja i Serwisowanie</h3>
                    <p className="text-muted-foreground">
                      Bieżące wsparcie w celu maksymalizacji wydajności i trwałości
                    </p>
                  </div>
                </li>
              </ul>

              <Button asChild className="animate-pulse-slow">
                <Link href="/pl/contact">Omów Swój Projekt</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Nasza Specjalizacja</Badge>
            <h2 className="text-3xl font-bold mb-6">Szczegółowa Oferta Usług</h2>
            <p className="text-muted-foreground text-lg">
              Poznaj nasz kompleksowy zakres usług zaprojektowanych, aby spełnić wszystkie potrzeby związane z
              pomieszczeniami czystymi z precyzją i doskonałością.
            </p>
          </div>

          {/* Design Service */}
          <div id="design" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-left">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Projektowanie i Planowanie Pomieszczeń Czystych</h3>
              <p className="text-muted-foreground mb-4">
                Nasz proces projektowania rozpoczyna się od dokładnego zrozumienia Twoich wymagań, przepływów pracy i
                potrzeb regulacyjnych. Następnie tworzymy niestandardowe projekty pomieszczeń czystych, które
                optymalizują przestrzeń, wydajność i zgodność.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Zaawansowane modelowanie 3D i wizualizacja</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Analiza przepływu powietrza i kontroli zanieczyszczeń</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Energooszczędne i zrównoważone projekty</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Planowanie zgodności z przepisami</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Szczegółowa dokumentacja techniczna</span>
                </li>
              </ul>
              <Link
                href="/pl/contact"
                className="inline-flex items-center text-primary font-medium hover:underline group"
              >
                Dowiedz się więcej o naszym procesie projektowania{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl animate-fade-in-right">
              <Image
                src="/placeholder.svg?height=800&width=1000"
                alt="Proces projektowania pomieszczenia czystego"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Installation Service */}
          <div id="installation" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl lg:order-first animate-fade-in-left">
              <Image
                src="/placeholder.svg?height=800&width=1000"
                alt="Instalacja pomieszczenia czystego"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="animate-fade-in-right">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Cog className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Instalacja i Budowa</h3>
              <p className="text-muted-foreground mb-4">
                Nasze doświadczone zespoły instalacyjne realizują projekt pomieszczenia czystego z precyzją i dbałością
                o szczegóły. Zarządzamy całym procesem budowy, aby zapewnić minimalne zakłócenia w Twojej działalności.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Kompleksowe usługi instalacyjne</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Wysokiej jakości materiały i komponenty</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Ścisłe przestrzeganie harmonogramów projektów</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Rygorystyczna kontrola jakości podczas budowy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Kompleksowa integracja systemów</span>
                </li>
              </ul>
              <Link
                href="/pl/contact"
                className="inline-flex items-center text-primary font-medium hover:underline group"
              >
                Dowiedz się więcej o naszym procesie instalacji{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Qualification Service */}
          <div id="qualification" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-left">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Microscope className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Kwalifikacja i Walidacja</h3>
              <p className="text-muted-foreground mb-4">
                Nasze kompleksowe usługi kwalifikacji i walidacji zapewniają, że Twoje pomieszczenie czyste spełnia
                wszystkie wymagania regulacyjne i działa zgodnie ze specyfikacją. Dostarczamy szczegółową dokumentację
                wspierającą Twoje wysiłki w zakresie zgodności.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Kwalifikacja projektowa (DQ)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Kwalifikacja instalacyjna (IQ)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Kwalifikacja operacyjna (OQ)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Kwalifikacja wydajnościowa (PQ)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Kompleksowa dokumentacja walidacyjna</span>
                </li>
              </ul>
              <Link
                href="/pl/contact"
                className="inline-flex items-center text-primary font-medium hover:underline group"
              >
                Dowiedz się więcej o naszym procesie kwalifikacji{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl animate-fade-in-right">
              <Image
                src="/placeholder.svg?height=800&width=1000"
                alt="Kwalifikacja pomieszczenia czystego"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Training Service */}
          <div id="training" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl lg:order-first animate-fade-in-left">
              <Image
                src="/placeholder.svg?height=800&width=1000"
                alt="Szkolenie z pomieszczeń czystych"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="animate-fade-in-right">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Szkolenia i Transfer Wiedzy</h3>
              <p className="text-muted-foreground mb-4">
                Zapewniamy kompleksowe szkolenia, aby upewnić się, że Twój zespół posiada wiedzę i umiejętności do
                efektywnej obsługi i utrzymania pomieszczenia czystego. Nasze programy szkoleniowe są dostosowane do
                Twoich konkretnych potrzeb i mogą być prowadzone na miejscu lub zdalnie.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Procedury operacyjne i protokoły</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Konserwacja i rozwiązywanie problemów</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Praktyki kontroli zanieczyszczeń</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Wymagania zgodności z przepisami</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Dostosowane materiały szkoleniowe i dokumentacja</span>
                </li>
              </ul>
              <Link
                href="/pl/contact"
                className="inline-flex items-center text-primary font-medium hover:underline group"
              >
                Dowiedz się więcej o naszych programach szkoleniowych{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Servicing */}
          <div id="servicing" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Konserwacja i Serwisowanie</h3>
              <p className="text-muted-foreground mb-4">
                Nasze kompleksowe programy konserwacji i serwisowania zapewniają, że Twoje pomieszczenie czyste nadal
                działa z najwyższą wydajnością przez cały cykl życia. Oferujemy elastyczne pakiety serwisowe, aby
                spełnić Twoje konkretne potrzeby i budżet.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Programy konserwacji zapobiegawczej</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Usługi napraw awaryjnych</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Modernizacje i modyfikacje systemów</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Monitorowanie i optymalizacja wydajności</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Testy zgodności i recertyfikacja</span>
                </li>
              </ul>
              <Link
                href="/pl/contact"
                className="inline-flex items-center text-primary font-medium hover:underline group"
              >
                Dowiedz się więcej o naszych usługach konserwacji{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl animate-fade-in-right">
              <Image
                src="/placeholder.svg?height=800&width=1000"
                alt="Konserwacja pomieszczenia czystego"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Branże</Badge>
            <h2 className="text-3xl font-bold mb-6">Specjalistyczne Rozwiązania dla Różnych Branż</h2>
            <p className="text-muted-foreground text-lg">
              Dostarczamy dostosowane rozwiązania pomieszczeń czystych dla szerokiej gamy branż, każda z unikalnymi
              wymaganiami i standardami regulacyjnymi. Nasza wiedza obejmuje wiele sektorów, zapewniając, że możemy
              dostarczyć idealne rozwiązanie pomieszczenia czystego dla Twoich konkretnych potrzeb.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Farmaceutyka</h3>
                <p className="text-muted-foreground">
                  Pomieszczenia czyste zgodne z GMP dla produkcji farmaceutycznej, badań i rozwoju z rygorystyczną
                  kontrolą zanieczyszczeń.
                </p>
              </CardContent>
            </Card>

            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Biotechnologia</h3>
                <p className="text-muted-foreground">
                  Specjalistyczne środowiska dla badań i produkcji biotechnologicznej, zaprojektowane do utrzymania
                  sterylności i zapobiegania zanieczyszczeniom krzyżowym.
                </p>
              </CardContent>
            </Card>

            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Cog className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Urządzenia Medyczne</h3>
                <p className="text-muted-foreground">
                  Pomieszczenia czyste sklasyfikowane według ISO dla produkcji i montażu urządzeń medycznych,
                  zapewniające bezpieczeństwo i jakość produktów.
                </p>
              </CardContent>
            </Card>

            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Mikroelektronika</h3>
                <p className="text-muted-foreground">
                  Środowiska kontrolowane pod kątem cząstek dla produkcji półprzewodników i mikroelektroniki z ochroną
                  ESD.
                </p>
              </CardContent>
            </Card>

            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "500ms" }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Żywność i Napoje</h3>
                <p className="text-muted-foreground">
                  Higieniczne środowiska przetwarzania, które spełniają standardy HACCP i bezpieczeństwa żywności dla
                  produkcji wolnej od zanieczyszczeń.
                </p>
              </CardContent>
            </Card>

            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Cog className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Lotnictwo</h3>
                <p className="text-muted-foreground">
                  Precyzyjnie kontrolowane środowiska dla produkcji i montażu komponentów lotniczych z rygorystyczną
                  kontrolą jakości.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6">Gotowy, by Rozpocząć Swój Projekt Pomieszczenia Czystego?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Skontaktuj się z naszym zespołem już dziś, aby uzyskać konsultację i odkryć, jak RTTechnik może dostarczyć
              idealne rozwiązanie pomieszczenia czystego dla Twoich potrzeb.
            </p>
            <Button asChild size="lg" className="animate-pulse-slow">
              <Link href="/pl/contact">Poproś o Konsultację</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
