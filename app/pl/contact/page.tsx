"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    consent: false,
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, consent: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // W rzeczywistej implementacji wysłałbyś dane formularza do backendu
    console.log("Formularz wysłany:", formData)
    setFormSubmitted(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in-up">
            <Badge className="mb-4">Kontakt</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Skontaktuj się z Naszym Zespołem</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Masz pytania dotyczące naszych rozwiązań pomieszczeń czystych? Gotowy, by rozpocząć swój projekt? Nasz
              zespół jest tutaj, aby pomóc. Skontaktuj się z nami, korzystając z poniższych informacji kontaktowych lub
              wypełnij formularz.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-left">
              <h2 className="text-2xl font-bold mb-6">Informacje Kontaktowe</h2>
              <div className="space-y-8 mb-8">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Siedziba Główna</h3>
                    <p className="text-muted-foreground">
                      RTTechnik GmbH
                      <br />
                      123 Clean Tech Street
                      <br />
                      1010 Wiedeń, Austria
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                    <p className="text-muted-foreground">
                      Główny: +43 123 456 789
                      <br />
                      Wsparcie: +43 123 456 780
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      Zapytania Ogólne:{" "}
                      <a href="mailto:info@rttechnik.com" className="text-primary hover:underline">
                        info@rttechnik.com
                      </a>
                      <br />
                      Wsparcie:{" "}
                      <a href="mailto:support@rttechnik.com" className="text-primary hover:underline">
                        support@rttechnik.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Godziny Pracy</h3>
                    <p className="text-muted-foreground">
                      Poniedziałek - Piątek: 8:00 - 18:00 CET
                      <br />
                      Sobota - Niedziela: Zamknięte
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Lokalizacja biura RTTechnik"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <h2 className="text-2xl font-bold mb-6">Wyślij Nam Wiadomość</h2>

              {formSubmitted ? (
                <Card className="border-none shadow-lg bg-primary/5">
                  <CardContent className="p-8 text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckIcon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Dziękujemy za Kontakt!</h3>
                    <p className="text-muted-foreground mb-6">
                      Otrzymaliśmy Twoją wiadomość i odezwiemy się jak najszybciej, zwykle w ciągu 24 godzin roboczych.
                    </p>
                    <Button onClick={() => setFormSubmitted(false)}>Wyślij Kolejną Wiadomość</Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Imię i Nazwisko *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Jan Kowalski"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Adres Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="jan.kowalski@example.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company">Nazwa Firmy</Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Twoja Firma"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Numer Telefonu</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="+43 123 456 789"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Wiadomość *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Proszę opisać swój projekt lub zapytanie..."
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={handleCheckboxChange}
                          required
                        />
                        <div className="grid gap-1.5 leading-none">
                          <Label
                            htmlFor="consent"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Wyrażam zgodę na przetwarzanie moich danych przez RTTechnik w celu odpowiedzi na moje
                            zapytanie *
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Twoje dane będą przetwarzane zgodnie z naszą{" "}
                            <a href="/pl/privacy-policy" className="text-primary hover:underline">
                              Polityką Prywatności
                            </a>
                            .
                          </p>
                        </div>
                      </div>

                      <Button type="submit" className="w-full animate-pulse-slow">
                        Wyślij
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">Globalna Obecność</Badge>
            <h2 className="text-3xl font-bold mb-6">Nasze Biura Regionalne</h2>
            <p className="text-muted-foreground text-lg">
              Z biurami w całej Europie, jesteśmy dobrze przygotowani do obsługi klientów w całym regionie z lokalną
              wiedzą i wsparciem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Niemcy</h3>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">
                    RTTechnik GmbH
                    <br />
                    Technologiepark 5<br />
                    10587 Berlin, Niemcy
                  </p>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">+49 30 123 45678</p>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">germany@rttechnik.com</p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Szwajcaria</h3>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">
                    RTTechnik AG
                    <br />
                    Industriestrasse 10
                    <br />
                    8304 Wallisellen, Szwajcaria
                  </p>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">+41 44 123 45 67</p>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">switzerland@rttechnik.com</p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Czechy</h3>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">
                    RTTechnik s.r.o.
                    <br />
                    Technologická 15
                    <br />
                    160 00 Praga, Czechy
                  </p>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">+420 220 123 456</p>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">czech@rttechnik.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold mb-6">Często Zadawane Pytania</h2>
            <p className="text-muted-foreground text-lg">
              Znajdź odpowiedzi na typowe pytania dotyczące naszych usług, procesu i rozwiązań pomieszczeń czystych.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Jakie branże obsługujecie?",
                answer:
                  "Dostarczamy rozwiązania pomieszczeń czystych dla szerokiej gamy branż, w tym farmaceutycznej, biotechnologicznej, produkcji urządzeń medycznych, mikroelektroniki, przetwórstwa żywności i lotnictwa. Nasza wiedza pozwala nam dostosować nasze rozwiązania do konkretnych wymagań każdej branży.",
              },
              {
                question: "Jak długo trwa typowy projekt pomieszczenia czystego?",
                answer:
                  "Harmonogram projektu pomieszczenia czystego różni się w zależności od jego złożoności, rozmiaru i konkretnych wymagań. Mały modułowy pomieszczenie czyste może zająć 2-3 miesiące od projektu do kwalifikacji, podczas gdy duży obiekt farmaceutyczny może zająć 12-18 miesięcy. Podczas naszej wstępnej konsultacji dostarczymy szczegółowy harmonogram specyficzny dla Twojego projektu.",
              },
              {
                question: "Czy zajmujecie się wszystkimi aspektami wdrażania pomieszczeń czystych?",
                answer:
                  "Tak, oferujemy kompleksowe usługi obejmujące cały cykl życia projektu pomieszczenia czystego. Obejmuje to wstępną konsultację, rozwój koncepcji, szczegółowy projekt, budowę, instalację, kwalifikację, walidację, szkolenia oraz bieżącą konserwację i wsparcie. Nasze kompleksowe podejście zapewnia płynną realizację i odpowiedzialność.",
              },
              {
                question: "Czy możecie ulepszyć lub zmodyfikować nasze istniejące pomieszczenie czyste?",
                answer:
                  "Absolutnie. Specjalizujemy się w ulepszaniu i modyfikowaniu istniejących pomieszczeń czystych w celu poprawy wydajności, zwiększenia efektywności energetycznej lub spełnienia nowych wymagań regulacyjnych. Nasz zespół oceni Twój obecny obiekt i zaleci najbardziej efektywne rozwiązania przy minimalnym zakłóceniu Twojej działalności.",
              },
              {
                question: "Jakie certyfikaty i standardy spełniają wasze pomieszczenia czyste?",
                answer:
                  "Nasze pomieszczenia czyste są projektowane i budowane, aby spełniać wszystkie odpowiednie międzynarodowe standardy, w tym ISO 14644, EU GMP, przepisy FDA i konkretne wymagania branżowe. Zapewniamy pełną zgodność z obowiązującymi przepisami i możemy dostarczyć całą niezbędną dokumentację do walidacji i certyfikacji.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-lg transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Nie widzisz tutaj swojego pytania? Skontaktuj się z nami bezpośrednio, a chętnie pomożemy.
            </p>
            <Button asChild className="animate-pulse-slow">
              <a href="mailto:info@rttechnik.com">Napisz do Nas</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
