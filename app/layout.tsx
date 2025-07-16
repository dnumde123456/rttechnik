import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LoadingAnimation } from "@/components/loading-animation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RTTechnik - Clean Room Solutions",
  description:
    "Experts in designing, executing, and servicing clean rooms for pharmaceutical, medical, and biotechnology industries.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Get the current path to determine language
  // This is a client-side check, so we'll handle it in the Header component
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LoadingAnimation />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
