"use client"

import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Target } from "lucide-react"

export default function BusinessModelHero() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center justify-center mb-8">
            <BarChart3 className="w-16 h-16 text-foreground mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-high-contrast">Business Model</h1>
          </div>

          <p className="text-xl md:text-2xl text-medium-contrast max-w-4xl mx-auto leading-relaxed mb-12">
            A comprehensive deep-dive into The Ad-Project's revolutionary business model, market strategy, and path to
            becoming India's leading AdTech unicorn.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-6">
              <Target className="w-12 h-12 text-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-high-contrast mb-2">Market Opportunity</h3>
              <p className="text-medium-contrast">₹8,000+ Crore TAM</p>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <TrendingUp className="w-12 h-12 text-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-high-contrast mb-2">Revenue Streams</h3>
              <p className="text-medium-contrast">7 Diversified Sources</p>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <BarChart3 className="w-12 h-12 text-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-high-contrast mb-2">Growth Projection</h3>
              <p className="text-medium-contrast">500% YoY Growth</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
