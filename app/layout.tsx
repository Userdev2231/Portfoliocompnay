import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster" // ✅ Import Toaster
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "The Ad-Project | India's First AI-Powered Outdoor AdTech Ecosystem",
  description:
    "Revolutionizing outdoor advertising with AI-powered campaign planning, remote management, and real-time analytics. Transform your brand visibility with India's most advanced AdTech platform.",
  keywords:
    "outdoor advertising, AdTech, AI advertising, billboard advertising, digital marketing, India advertising",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="dark">
          {children}
          <Toaster /> {/* ✅ Toast notifications will now work globally */}
        </ThemeProvider>
      </body>
    </html>
  )
}
