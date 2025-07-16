import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "RTTechnik - Rozwiązania Pomieszczeń Czystych",
  description:
    "Eksperci w projektowaniu, wykonywaniu i serwisowaniu pomieszczeń czystych dla przemysłu farmaceutycznego, medycznego i biotechnologicznego.",
}

export default function PolishLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
