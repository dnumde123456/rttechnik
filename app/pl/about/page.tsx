import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Clock, Building2 } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4">O Nas</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dekady Doskonałości w Rozwiązaniach Pomieszczeń Czystych
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              RTTechnik jest liderem w technologii pomieszczeń czystych od ponad 25 lat, dostarczając wyjątkową jakość i
              innowacyjne rozwiązania klientom w całej Europie i poza nią.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl animate-fade-in-left">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Zespół RTTechnik"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="animate-fade-in-right">
              <Badge className="mb-4">Nasza Historia</Badge>
              <h2 className="text-3xl font-bold mb-6">Od Skromnych Początków do Liderów Branży</h2>
              <p className="text-muted-foreground mb-4">
                Założona w 1998 roku, firma RTTechnik rozpoczęła działalność jako mały zespół inżynierów z wizją
                zrewolucjonizowania projektowania i wdrażania pomieszczeń czystych. Dziś staliśmy się jednym z
                najbardziej szanowanych dostawców rozwiązań pomieszczeń czystych w Europie.
              </p>
              <p className="text-muted-foreground mb-4">
                Nasza podróż była naznaczona ciągłymi innowacjami, niezachwianym zaangażowaniem w jakość i głębokim
                zrozumieniem unikalnych potrzeb naszych klientów. Z powodzeniem zrealizowaliśmy ponad 187 projektów w
                branżach farmaceutycznej, urządzeń medycznych, biotechnologicznej i mikroelektronicznej.
              </p>
              <p className="text-muted-foreground mb-6">
                To, co nas wyróżnia, to nasze holistyczne podejście – od początkowej koncepcji i projektu, przez
                instalację, kwalifikację, aż po bieżącą konserwację. Nie jesteśmy tylko wykonawcami; jesteśmy partnerami
                w Twoim sukcesie.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Certyfikat ISO 9001:2015 dla zarządzania jakością</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Zgodność z przepisami GMP, FDA i EMA</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Ekologiczne projekty i praktyki</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <span>Zespół certyfikowanych inżynierów i techników</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Nasz Wpływ</Badge>
            <h2 className="text-3xl font-bold mb-6">RTTechnik w Liczbach</h2>
            <p className="text-muted-foreground text-lg">
              Nasze osiągnięcia mówią same za siebie, z setkami udanych projektów i zadowolonych klientów w całej
              Europie.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="text-center p-6 rounded-lg bg-background shadow-md hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex justify-center mb-4">
                <Building2 className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="187">
                187
              </div>
              <p className="text-muted-foreground">Ukończonych Projektów</p>
            </div>

            <div
              className="text-center p-6 rounded-lg bg-background shadow-md hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex justify-center mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="300">
                300+
              </div>
              <p className="text-muted-foreground">Zadowolonych Klientów</p>
            </div>

            <div
              className="text-center p-6 rounded-lg bg-background shadow-md hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex justify-center mb-4">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="25">
                25+
              </div>
              <p className="text-muted-foreground">Lat Doświadczenia</p>
            </div>

            <div
              className="text-center p-6 rounded-lg bg-background shadow-md hover:shadow-lg transition-shadow animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <div className="flex justify-center mb-4">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count" data-count="15">
                15+
              </div>
              <p className="text-muted-foreground">Nagród Branżowych</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Nasz Zespół</Badge>
            <h2 className="text-3xl font-bold mb-6">Poznaj Ekspertów Stojących za RTTechnik</h2>
            <p className="text-muted-foreground text-lg">
              Nasz zespół wysoko wykwalifikowanych specjalistów łączy dziesięciolecia wspólnego doświadczenia w
              projektowaniu, inżynierii i wdrażaniu pomieszczeń czystych.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Robert Müller",
                position: "Założyciel i Dyrektor Generalny",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Z ponad 30-letnim doświadczeniem w branży, Dr. Müller prowadzi naszą firmę z wizją i wiedzą.",
              },
              {
                name: "Ing. Maria Schmidt",
                position: "Dyrektor Techniczny",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Maria nadzoruje wszystkie aspekty techniczne naszych projektów, zapewniając najwyższe standardy jakości.",
              },
              {
                name: "Dipl.-Ing. Thomas Weber",
                position: "Kierownik Inżynierii",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Thomas wprowadza innowacyjne rozwiązania inżynieryjne nawet do najbardziej złożonych wyzwań pomieszczeń czystych.",
              },
              {
                name: "Dr. Anna Bauer",
                position: "Kierownik Zapewnienia Jakości",
                image: "/placeholder.svg?height=400&width=400",
                bio: "Anna zapewnia, że wszystkie nasze projekty spełniają rygorystyczne wymagania regulacyjne i standardy jakości.",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.position}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Nasz zespół wykracza poza tych kluczowych członków i obejmuje wyspecjalizowanych inżynierów, kierowników
              projektów, techników i personel pomocniczy – wszystkich zaangażowanych w dostarczanie doskonałości.
            </p>
            <Button asChild className="animate-pulse-slow">
              <Link href="/pl/contact">Skontaktuj się z Naszym Zespołem</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Badge className="mb-4">Nasze Wartości</Badge>
              <h2 className="text-3xl font-bold mb-6">Zasady, Które Nami Kierują</h2>
              <p className="text-muted-foreground mb-8">
                W RTTechnik nasze podstawowe wartości kształtują wszystko, co robimy – od sposobu projektowania i
                budowania pomieszczeń czystych po sposób interakcji z naszymi klientami i między sobą.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">Doskonałość</h3>
                    <p className="text-muted-foreground">
                      Dążymy do doskonałości w każdym aspekcie naszej pracy, nigdy nie idąc na kompromis w kwestii
                      jakości czy bezpieczeństwa.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">Innowacja</h3>
                    <p className="text-muted-foreground">
                      Nieustannie poszukujemy innowacyjnych rozwiązań, aby poprawić wydajność, zrównoważony rozwój i
                      wydajność.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">Uczciwość</h3>
                    <p className="text-muted-foreground">
                      Prowadzimy naszą działalność z uczciwością, przejrzystością i etycznymi praktykami przez cały
                      czas.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">Partnerstwo</h3>
                    <p className="text-muted-foreground">
                      Budujemy trwałe relacje z naszymi klientami oparte na zaufaniu, współpracy i wzajemnym sukcesie.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl animate-fade-in-right">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Wartości RTTechnik"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6">Gotowy do Współpracy z Nami?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Skontaktuj się z naszym zespołem już dziś, aby omówić swój projekt pomieszczenia czystego i odkryć, jak
              RTTechnik może dostarczyć idealne rozwiązanie dla Twoich potrzeb.
            </p>
            <Button asChild size="lg" className="animate-pulse-slow">
              <Link href="/pl/contact">Skontaktuj się z Nami Dzisiaj</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
