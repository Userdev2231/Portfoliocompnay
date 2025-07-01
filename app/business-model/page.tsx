"use client"
import { ThemeToggle } from "@/components/theme-toggle"
import Navigation from "@/components/navigation"
import BusinessModelHero from "@/components/business-model/hero"
import RevenueStreams from "@/components/business-model/revenue-streams"
import MarketAnalysis from "@/components/business-model/market-analysis"
import ValueProposition from "@/components/business-model/value-proposition"
import BusinessCanvas from "@/components/business-model/business-canvas"
import FinancialProjections from "@/components/business-model/financial-projections"
import CompetitiveAdvantage from "@/components/business-model/competitive-advantage"
import ScalingStrategy from "@/components/business-model/scaling-strategy"
import Footer from "@/components/footer"

export default function BusinessModelPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <ThemeToggle />
      <Navigation />

      <div className="relative pt-16">
        <BusinessModelHero />
        <ValueProposition />
        <RevenueStreams />
        <MarketAnalysis />
        <BusinessCanvas />
        <CompetitiveAdvantage />
        <FinancialProjections />
        <ScalingStrategy />
        <Footer />
      </div>
    </div>
  )
}
