"use client"

import { ThemeToggle } from "@/components/theme-toggle"
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
