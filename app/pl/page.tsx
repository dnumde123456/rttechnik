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
            src="/images/cleanroom-empty-large.png"
            alt="Pomieszczenie czyste"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
              Liderzy Branży
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Precyzja w Rozwiązaniach Pomieszczeń Czystych
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Projektowanie, wykonywanie i serwisowanie najnowocześniejszych pomieszczeń czystych dla przemysłu
              farmaceutycznego, medycznego i biotechnologicznego z wieloletnim doświadczeniem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base animate-pulse-slow">
                <Link href="/pl/contact">Uzyskaj Bezpłatną Konsultację</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-base"
              >
                <Link href="/pl/services">Poznaj Nasze Usługi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Nasza Specjalizacja</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Kompleksowe Rozwiązania Pomieszczeń Czystych</h2>
            <p className="text-muted-foreground text-lg">
              Od koncepcji do realizacji, zapewniamy kompleksowe usługi dla wszystkich potrzeb związanych z
              pomieszczeniami czystymi, z niezrównaną precyzją i jakością.
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
                <h3 className="text-xl font-bold">Projektowanie i Planowanie</h3>
                <p className="text-muted-foreground">
                  Niestandardowe projektowanie pomieszczeń czystych z wykorzystaniem zaawansowanej technologii 3D do
                  wizualizacji projektu przed rozpoczęciem budowy.
                </p>
                <Link
                  href="/pl/services#design"
                  className="inline-flex items-center text-primary font-medium hover:underline group"
                >
                  Dowiedz się więcej{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                <h3 className="text-xl font-bold">Instalacja i Konfiguracja</h3>
                <p className="text-muted-foreground">
                  Profesjonalna instalacja pomieszczeń czystych z wykorzystaniem wysokiej jakości materiałów i
                  energooszczędnych projektów.
                </p>
                <Link
                  href="/pl/services#installation"
                  className="inline-flex items-center text-primary font-medium hover:underline group"
                >
                  Dowiedz się więcej{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                <h3 className="text-xl font-bold">Kwalifikacja i Walidacja</h3>
                <p className="text-muted-foreground">
                  Kompleksowe testy i walidacja, aby zapewnić, że pomieszczenie czyste spełnia wszystkie wymagania
                  regulacyjne.
                </p>
                <Link
                  href="/pl/services#qualification"
                  className="inline-flex items-center text-primary font-medium hover:underline group"
                >
                  Dowiedz się więcej{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="animate-bounce-slow bg-transparent">
              <Link href="/pl/services">Zobacz Wszystkie Usługi</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Badge className="mb-4">Dlaczego My</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Wieloletnie Doświadczenie w Doskonałości Pomieszczeń Czystych
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                RTTechnik ugruntował swoją pozycję lidera w branży pomieszczeń czystych, dostarczając wyjątkową jakość i
                usługi klientom z sektorów farmaceutycznego, medycznego i biotechnologicznego.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Niezrównana Wiedza</h3>
                    <p className="text-muted-foreground">
                      Ponad 25 lat specjalistycznego doświadczenia w rozwiązaniach pomieszczeń czystych
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Certyfikat ISO 9001:2015</h3>
                    <p className="text-muted-foreground">
                      System zarządzania jakością certyfikowany według międzynarodowych standardów
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Indywidualne Podejście</h3>
                    <p className="text-muted-foreground">
                      Dostosowane rozwiązania zaprojektowane, aby spełnić Twoje konkretne wymagania
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Ciągłe Wsparcie</h3>
                    <p className="text-muted-foreground">Kompleksowe pakiety konserwacji i serwisu</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex items-center space-x-4">
                <Button asChild className="relative overflow-hidden group">
                  <Link href="/pl/about">
                    <span className="relative z-10">Poznaj Naszą Firmę</span>
                    <span className="absolute inset-0 bg-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </Button>
                <div className="flex items-center space-x-2">
                  <div className="relative h-8 w-10">
                    <Image
                      src="/images/iso-9001-llc-logo.png"
                      alt="Certyfikat ISO 9001"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative h-8 w-10">
                    <Image src="/images/bio-forum-member.png" alt="Członek Bio Forum" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl animate-fade-in-right">
              <Image
                src="/images/cleanroom-lab.png"
                alt="Projekt pomieszczenia czystego RTTechnik"
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
              Nasz Wpływ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Dostarczanie Doskonałości na Dużą Skalę</h2>
            <p className="text-primary-foreground/80 text-lg">
              Nasze osiągnięcia mówią same za siebie, z setkami udanych projektów i zadowolonych klientów w całej
              Europie.
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
              <p className="text-primary-foreground/80">Ukończonych Projektów</p>
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
              <p className="text-primary-foreground/80">Zadowolonych Klientów</p>
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
              <p className="text-primary-foreground/80">Lat Doświadczenia</p>
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
              <p className="text-primary-foreground/80">Nagród Branżowych</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Room Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Nasze Prace</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Najnowocześniejsze Pomieszczenia Czyste</h2>
            <p className="text-muted-foreground text-lg">
              Poznaj nasze portfolio zrealizowanych projektów pomieszczeń czystych prezentujących najnowocześniejszą
              technologię i precyzyjną inżynierię.
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
                  alt="Pomieszczenie czyste z personelem w kombinezonach ochronnych"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Produkcja Farmaceutyczna</h3>
                <p className="text-muted-foreground">
                  Pomieszczenie czyste klasy ISO 5 do sterylnej produkcji farmaceutycznej z zaawansowaną kontrolą
                  zanieczyszczeń.
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
                  alt="Korytarz pomieszczenia czystego ze szklanymi ścianami"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Ośrodek Badawczy</h3>
                <p className="text-muted-foreground">
                  Nowoczesny kompleks pomieszczeń czystych z modułową konstrukcją do badań i rozwoju
                  biotechnologicznego.
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
                  alt="Szatnia pomieszczenia czystego z szafkami"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Obiekty Pomocnicze</h3>
                <p className="text-muted-foreground">
                  Kompleksowe szatnie i obszary pomocnicze zaprojektowane dla optymalnego przepływu pracy i zgodności z
                  przepisami.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="animate-bounce-slow bg-transparent">
              <Link href="/pl/gallery">Zobacz Pełną Galerię</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Referencje</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Co Mówią Nasi Klienci</h2>
            <p className="text-muted-foreground text-lg">
              Nie wierz nam na słowo. Oto co nasi klienci mówią o współpracy z RTTechnik.
            </p>
          </div>

          <TestimonialCarousel isPolish={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Gotowy, by Rozpocząć Swój Projekt Pomieszczenia Czystego?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Skontaktuj się z naszym zespołem już dziś, aby uzyskać konsultację i odkryć, jak RTTechnik może dostarczyć
              idealne rozwiązanie pomieszczenia czystego dla Twoich potrzeb.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="animate-pulse-slow">
                <Link href="/pl/contact">Poproś o Konsultację</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pl/gallery">Zobacz Nasze Projekty</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
