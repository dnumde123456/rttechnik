"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isPolish = pathname.startsWith("/pl")

  useEffect(() => {
    // Set the HTML lang attribute based on the current path
    if (typeof document !== "undefined") {
      document.documentElement.lang = isPolish ? "pl" : "en"
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isPolish])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={isPolish ? "/pl" : "/"} className="flex items-center">
            <div className="relative h-10 w-10 mr-2">
              <Image src="/images/logo.png" alt="RTTechnik Logo" fill className="object-contain" priority />
            </div>
            <span className="text-2xl font-bold text-primary">RTTechnik</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href={isPolish ? "/pl" : "/"}
              className={cn(
                "text-base font-medium hover:text-primary transition-colors",
                "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                pathname === "/" || pathname === "/pl" ? "after:w-full" : "after:w-0 hover:after:w-full",
              )}
            >
              {isPolish ? "Strona główna" : "Home"}
            </Link>
            <Link
              href={isPolish ? "/pl/about" : "/about"}
              className={cn(
                "text-base font-medium hover:text-primary transition-colors",
                "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                pathname.endsWith("/about") ? "after:w-full" : "after:w-0 hover:after:w-full",
              )}
            >
              {isPolish ? "O nas" : "About Us"}
            </Link>
            <Link
              href={isPolish ? "/pl/services" : "/services"}
              className={cn(
                "text-base font-medium hover:text-primary transition-colors",
                "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                pathname.endsWith("/services") ? "after:w-full" : "after:w-0 hover:after:w-full",
              )}
            >
              {isPolish ? "Usługi" : "Services"}
            </Link>
            <Link
              href={isPolish ? "/pl/gallery" : "/gallery"}
              className={cn(
                "text-base font-medium hover:text-primary transition-colors",
                "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                pathname.endsWith("/gallery") ? "after:w-full" : "after:w-0 hover:after:w-full",
              )}
            >
              {isPolish ? "Galeria" : "Gallery"}
            </Link>
            <Link
              href={isPolish ? "/pl/blog" : "/blog"}
              className={cn(
                "text-base font-medium hover:text-primary transition-colors",
                "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                pathname.endsWith("/blog") ? "after:w-full" : "after:w-0 hover:after:w-full",
              )}
            >
              {isPolish ? "Blog" : "Blog"}
            </Link>
            <Link
              href={isPolish ? "/pl/contact" : "/contact"}
              className={cn(
                "text-base font-medium hover:text-primary transition-colors",
                "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                pathname.endsWith("/contact") ? "after:w-full" : "after:w-0 hover:after:w-full",
              )}
            >
              {isPolish ? "Kontakt" : "Contact"}
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button asChild className="relative overflow-hidden group">
              <Link href={isPolish ? "/pl/contact" : "/contact"}>
                <span className="relative z-10 group-hover:text-white transition-colors">
                  {isPolish ? "Uzyskaj wycenę" : "Get a Quote"}
                </span>
                <span className="absolute inset-0 bg-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button className="p-2" onClick={toggleMobileMenu} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href={isPolish ? "/pl" : "/"}
              className="text-base font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {isPolish ? "Strona główna" : "Home"}
            </Link>
            <Link
              href={isPolish ? "/pl/about" : "/about"}
              className="text-base font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {isPolish ? "O nas" : "About Us"}
            </Link>
            <Link
              href={isPolish ? "/pl/services" : "/services"}
              className="text-base font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {isPolish ? "Usługi" : "Services"}
            </Link>
            <Link
              href={isPolish ? "/pl/gallery" : "/gallery"}
              className="text-base font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {isPolish ? "Galeria" : "Gallery"}
            </Link>
            <Link
              href={isPolish ? "/pl/blog" : "/blog"}
              className="text-base font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {isPolish ? "Blog" : "Blog"}
            </Link>
            <Link
              href={isPolish ? "/pl/contact" : "/contact"}
              className="text-base font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {isPolish ? "Kontakt" : "Contact"}
            </Link>
            <Button asChild className="w-full">
              <Link href={isPolish ? "/pl/contact" : "/contact"} onClick={() => setIsMobileMenuOpen(false)}>
                {isPolish ? "Uzyskaj wycenę" : "Get a Quote"}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
