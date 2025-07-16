"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Footer() {
  const pathname = usePathname()
  const isPolish = pathname.startsWith("/pl")

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href={isPolish ? "/pl" : "/"} className="flex items-center">
              <div className="relative h-10 w-10 mr-2">
                <Image src="/images/logo.png" alt="RTTechnik Logo" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold">RTTechnik</span>
            </Link>
            <p className="text-primary-foreground/80">
              {isPolish
                ? "Eksperci w projektowaniu, wykonywaniu i serwisowaniu pomieszczeń czystych dla przemysłu farmaceutycznego, medycznego i biotechnologicznego."
                : "Experts in designing, executing, and servicing clean rooms for the pharmaceutical, medical, and biotechnology industries."}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{isPolish ? "Szybkie linki" : "Quick Links"}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={isPolish ? "/pl" : "/"}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {isPolish ? "Strona główna" : "Home"}
                </Link>
              </li>
              <li>
                <Link
                  href={isPolish ? "/pl/about" : "/about"}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {isPolish ? "O nas" : "About Us"}
                </Link>
              </li>
              <li>
                <Link
                  href={isPolish ? "/pl/services" : "/services"}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {isPolish ? "Usługi" : "Services"}
                </Link>
              </li>
              <li>
                <Link
                  href={isPolish ? "/pl/gallery" : "/gallery"}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {isPolish ? "Galeria" : "Gallery"}
                </Link>
              </li>
              <li>
                <Link
                  href={isPolish ? "/pl/blog" : "/blog"}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {isPolish ? "Blog" : "Blog"}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{isPolish ? "Usługi" : "Services"}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={isPolish ? "/pl/services#design" : "/services#design"}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {isPolish ? "Projektowanie pomieszczeń czystych" : "Clean Room Design"}
                </Link>
              </li>
              <li>
                <Link
                  href={isPolish ? "/pl/services#installation" : "/services#installation"}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {isPolish ? "Instalacja" : "Installation"}
                </Link>
              </li>
              <li>
                <Link
                  href={isPolish ? "/pl/services#qualification" : "/services#qualification"}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {isPolish ? "Kwalifikacja" : "Qualification"}
                </Link>
              </li>
              <li>
                <Link
                  href={isPolish ? "/pl/services#training" : "/services#training"}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {isPolish ? "Szkolenia" : "Training"}
                </Link>
              </li>
              <li>
                <Link
                  href={isPolish ? "/pl/services#servicing" : "/services#servicing"}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {isPolish ? "Serwisowanie" : "Servicing"}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{isPolish ? "Kontakt" : "Contact Us"}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0" />
                <span className="text-primary-foreground/80">
                  RTTechnik Headquarters, 123 Clean Tech Street, Vienna, Austria
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0" />
                <span className="text-primary-foreground/80">+43 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0" />
                <a
                  href="mailto:info@rttechnik.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@rttechnik.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              &copy; {new Date().getFullYear()} RTTechnik.{" "}
              {isPolish ? "Wszelkie prawa zastrzeżone." : "All rights reserved."}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href={isPolish ? "/pl/privacy-policy" : "/privacy-policy"}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                {isPolish ? "Polityka prywatności" : "Privacy Policy"}
              </Link>
              <Link
                href={isPolish ? "/pl/terms-of-service" : "/terms-of-service"}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                {isPolish ? "Warunki korzystania" : "Terms of Service"}
              </Link>
              <Link
                href={isPolish ? "/pl/cookie-policy" : "/cookie-policy"}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                {isPolish ? "Polityka cookies" : "Cookie Policy"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
