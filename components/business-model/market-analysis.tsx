"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Globe, TrendingUp, Users, Building2 } from "lucide-react"

export default function MarketAnalysis() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const marketData = [
    {
      title: "Total Addressable Market (TAM)",
      value: "₹8,000+ Crore",
      description: "India's entire outdoor advertising market size",
      icon: Globe,
    },
    {
      title: "Serviceable Addressable Market (SAM)",
      value: "₹3,200 Crore",
      description: "Digital-ready outdoor advertising segment",
      icon: TrendingUp,
    },
    {
      title: "Serviceable Obtainable Market (SOM)",
      value: "₹800 Crore",
      description: "Realistic market capture in 5 years",
      icon: Users,
    },
    {
      title: "Market Growth Rate",
      value: "18% CAGR",
      description: "Annual growth rate of outdoor advertising in India",
      icon: Building2,
    },
  ]

  const competitors = [
    {
      name: "Traditional Agencies",
      marketShare: "70%",
      weakness: "Manual processes, no technology integration",
    },
    {
      name: "Digital Platforms",
      marketShare: "15%",
      weakness: "Limited outdoor focus, no end-to-end service",
    },
    {
      name: "Regional Players",
      marketShare: "12%",
      weakness: "Limited scale, city-specific operations",
    },
    {
      name: "The Ad-Project",
      marketShare: "3%",
      weakness: "New entrant, building market presence",
    },
  ]

  return (
    <section ref={ref} className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-high-contrast mb-6">Market Analysis</h2>
          <p className="text-xl text-medium-contrast max-w-3xl mx-auto">
            Deep analysis of India's outdoor advertising market and competitive landscape
          </p>
        </motion.div>

        {/* Market Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {marketData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 text-center hover-lift"
            >
              <data.icon className="w-12 h-12 text-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-high-contrast mb-2">{data.title}</h3>
              <div className="text-3xl font-bold text-high-contrast mb-3">{data.value}</div>
              <p className="text-medium-contrast text-sm">{data.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Competitive Landscape */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="glass-effect rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-high-contrast text-center mb-12">Competitive Landscape</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {competitors.map((competitor, index) => (
                <div key={index} className="border border-border rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-high-contrast">{competitor.name}</h4>
                    <div className="text-2xl font-bold text-foreground">{competitor.marketShare}</div>
                  </div>
                  <p className="text-medium-contrast">{competitor.weakness}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Market Opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="glass-effect rounded-3xl p-12 text-center">
            <h3 className="text-2xl font-bold text-high-contrast mb-6">Market Opportunity</h3>
            <p className="text-lg text-medium-contrast max-w-4xl mx-auto leading-relaxed">
              With 70% of the market still using traditional manual processes, there's a massive opportunity for The
              Ad-Project to capture significant market share through technology-driven solutions. Our target is to
              achieve 10% market share (₹800 Crore revenue) within 5 years.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
