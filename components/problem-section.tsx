"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { AlertTriangle, Clock, DollarSign, MapPin, BarChart3, Leaf } from "lucide-react"

const painPoints = [
  {
    icon: Clock,
    title: "Manual & Time-Consuming",
    description: "Ad bookings today are manual, fragmented, and city-dependent",
    color: "bg-gradient-to-br from-red-500 via-rose-500 to-pink-600",
    delay: 0.1
  },
  {
    icon: DollarSign,
    title: "Wasted Resources",
    description: "Brands waste weeks negotiating permissions, finding vendors, and installing ads",
    color: "bg-gradient-to-br from-amber-500 via-orange-500 to-red-600",
    delay: 0.2
  },
  {
    icon: MapPin,
    title: "No Transparency",
    description: "There's no transparent system for governments to track outdoor campaigns or collect tax",
    color: "bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500",
    delay: 0.3
  },
  {
    icon: BarChart3,
    title: "Limited Reach",
    description: "SMEs & startups struggle to plan PAN-India visibility",
    color: "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600",
    delay: 0.4
  },
  {
    icon: AlertTriangle,
    title: "No ROI Tracking",
    description: "Traditional ads offer no digital engagement or ROI tracking",
    color: "bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-600",
    delay: 0.5
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description: "Environmental damage caused by plastic-based materials",
    color: "bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600",
    delay: 0.6
  },
]

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section 
      ref={sectionRef} 
      className="relative py-28 px-6 bg-gradient-to-b from-muted/20 to-muted/50 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-rose-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header with more personality */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
          className="text-center mb-24"
        >
          <span className="inline-block px-4 py-2 bg-rose-500/10 text-rose-600 rounded-full text-sm font-medium mb-6">
            Industry Challenges
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            The{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Pain</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-gradient-to-r from-red-400 to-orange-400 opacity-30 -z-0" />
            </span>{" "}
            Points
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Outdoor advertising is stuck in the past. Manual processes, lack of transparency, and environmental concerns 
            are holding the industry back from its true potential.
          </p>
        </motion.header>

        {/* Problem cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: item.delay,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon container with shine effect */}
              <div className="relative">
                <div className={`absolute -inset-1 ${item.color} rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                <div className={`relative w-16 h-16 rounded-xl ${item.color} flex items-center justify-center shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900 mb-4 relative">
                <span className="relative z-10">{item.title}</span>
                <span className={`absolute bottom-0 left-0 w-0 h-1 ${item.color.replace('bg-', 'bg-opacity-20 bg-')} group-hover:w-full transition-all duration-500`} />
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>

        {/* Impact stats with more visual punch */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24"
        >
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-100 shadow-sm overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-rose-500/10 blur-3xl" />
            
            <h3 className="relative text-3xl font-bold text-gray-900 text-center mb-12">
              <span className="relative z-10">The Hard Numbers</span>
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-rose-400 to-orange-400 opacity-30 -z-0" />
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
              {[
                { value: "60-80%", label: "Time Wasted on Manual Processes", color: "from-red-500 to-orange-500" },
                { value: "₹1000Cr+", label: "Lost Revenue Due to Inefficiencies", color: "from-amber-500 to-red-500" },
                { value: "85%", label: "Campaigns Without ROI Tracking", color: "from-orange-500 to-rose-500" }
              ].map((stat, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${stat.color})` }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
