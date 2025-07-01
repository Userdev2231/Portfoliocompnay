"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Clock, Shield, BarChart3, Leaf, Globe } from "lucide-react"

export default function ValueProposition() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const valueProps = [
    {
      icon: Clock,
      title: "Time Efficiency",
      before: "Weeks of manual coordination",
      after: "Minutes of automated planning",
      improvement: "95% time reduction",
    },
    {
      icon: Shield,
      title: "Transparency",
      before: "No visibility into campaign status",
      after: "Real-time tracking and reporting",
      improvement: "100% transparency",
    },
    {
      icon: BarChart3,
      title: "ROI Tracking",
      before: "No measurable outcomes",
      after: "Detailed analytics and insights",
      improvement: "Complete ROI visibility",
    },
    {
      icon: Globe,
      title: "Scale",
      before: "City-by-city operations",
      after: "PAN-India coverage",
      improvement: "Unlimited scalability",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      before: "Plastic-based materials",
      after: "Eco-friendly alternatives",
      improvement: "80% environmental impact reduction",
    },
    {
      icon: Target,
      title: "Precision",
      before: "Generic ad placements",
      after: "AI-optimized targeting",
      improvement: "300% better targeting",
    },
  ]

  return (
    <section ref={ref} className="py-24 px-4 bg-subtle">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-high-contrast mb-6">Value Proposition</h2>
          <p className="text-xl text-medium-contrast max-w-3xl mx-auto">
            Transforming every aspect of outdoor advertising through technology and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-foreground text-background p-3 mb-6 flex items-center justify-center">
                <prop.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-semibold text-high-contrast mb-6">{prop.title}</h3>

              <div className="space-y-4">
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <div className="text-sm font-medium text-red-600 dark:text-red-400 mb-1">Before</div>
                  <div className="text-red-800 dark:text-red-300">{prop.before}</div>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">After</div>
                  <div className="text-green-800 dark:text-green-300">{prop.after}</div>
                </div>

                <div className="text-center">
                  <div className="text-lg font-bold text-high-contrast">{prop.improvement}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
