"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { MainLoadingSpinner } from "@/components/main-loading-spinner"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import SolutionSection from "@/components/solution-section"
import ServicesSection from "@/components/services-section"
import TechSection from "@/components/tech-section"
import AudienceSection from "@/components/audience-section"
import GovernmentSection from "@/components/government-section"
import RoadmapSection from "@/components/roadmap-section"
import JoinUsSection from "@/components/join-us-section"
import VisionSection from "@/components/vision-section"
import Footer from "@/components/footer"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000) // 5 seconds loading

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <MainLoadingSpinner />
  }

  return (
    <div className="relative min-h-screen bg-background">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <TechSection />
        <AudienceSection />
        <GovernmentSection />
        <RoadmapSection />
        <JoinUsSection />
        <VisionSection />
        <Footer />
      </div>
    </div>
  )
}
