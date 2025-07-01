"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { AlertTriangle, Clock, DollarSign, MapPin, BarChart3, Leaf } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Manual & Time-Consuming",
    description: "Ad bookings today are manual, fragmented, and city-dependent",
    color: "from-red-500 to-rose-600",
  },
  {
    icon: DollarSign,
    title: "Wasted Resources",
    description: "Brands waste weeks negotiating permissions, finding vendors, and installing ads",
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: MapPin,
    title: "No Transparency",
    description: "There's no transparent system for governments to track outdoor campaigns or collect tax",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: BarChart3,
    title: "Limited Reach",
    description: "SMEs & startups struggle to plan PAN-India visibility",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: AlertTriangle,
    title: "No ROI Tracking",
    description: "Traditional ads offer no digital engagement or ROI tracking",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description: "Environmental damage caused by plastic-based materials",
    color: "from-green-500 to-emerald-600",
  },
]

export default function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            The{" "}
            <span className="text-gradient bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Problem
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The outdoor advertising industry faces significant challenges that hinder efficiency, transparency, and
            environmental sustainability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-effect rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${problem.color} p-4 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <problem.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-gradient transition-all duration-300">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="glass-effect rounded-3xl p-12 shadow-card">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">Current Industry Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  60-80%
                </div>
                <div className="text-muted-foreground font-medium">Time Wasted on Manual Processes</div>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  ₹1000Cr+
                </div>
                <div className="text-muted-foreground font-medium">Lost Revenue Due to Inefficiencies</div>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
                  85%
                </div>
                <div className="text-muted-foreground font-medium">Campaigns Without ROI Tracking</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
