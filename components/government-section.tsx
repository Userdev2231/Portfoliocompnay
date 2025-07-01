"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, BarChart3, MapPin, FileText, Leaf, Eye } from "lucide-react"

const governmentFeatures = [
  {
    icon: BarChart3,
    title: "Smart City Dashboards",
    description: "Real-time ad activity monitoring and analytics",
  },
  {
    icon: Shield,
    title: "Transparent Tax Revenue Tracking",
    description: "Ad registrations, duration, and payment tracking",
  },
  {
    icon: MapPin,
    title: "Geo-verified Ad Proof",
    description: "Photo/video evidence with GPS verification",
  },
  {
    icon: FileText,
    title: "Digital Permission System",
    description: "Built-in approval flow and compliance management",
  },
  {
    icon: Leaf,
    title: "Eco-Regulation Tools",
    description: "Track ad materials and enforce plastic bans",
  },
  {
    icon: Eye,
    title: "Public Ad Audit System",
    description: "Transparent monitoring for public accountability",
  },
]

export default function GovernmentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            For <span className="text-blue-500">Governments</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Empowering smart cities with transparent, compliant, and eco-friendly outdoor advertising solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {governmentFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-blue-500" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Government Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-12 border border-gray-700">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Smart City Integration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-6">Revenue & Compliance</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">Tax Revenue Increase</span>
                    <span className="text-green-500 font-semibold">+40%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">Compliance Rate</span>
                    <span className="text-blue-500 font-semibold">98%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">Processing Time</span>
                    <span className="text-purple-500 font-semibold">-75%</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-green-400 mb-6">Environmental Impact</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">Plastic Reduction</span>
                    <span className="text-green-500 font-semibold">-80%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">Digital Integration</span>
                    <span className="text-cyan-500 font-semibold">100%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">Carbon Footprint</span>
                    <span className="text-teal-500 font-semibold">-60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
