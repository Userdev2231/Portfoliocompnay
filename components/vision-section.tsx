"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Eye, Target, Zap, Globe, Shield, Leaf, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const visionPoints = [
  {
    icon: Eye,
    title: "Intelligent",
    description: "AI-powered optimization for maximum campaign effectiveness",
  },
  {
    icon: Target,
    title: "Accessible",
    description: "Remote management capabilities for global reach",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable materials and environmentally responsible practices",
  },
  {
    icon: Globe,
    title: "Connected",
    description: "Seamless integration with government and business systems",
  },
  {
    icon: Shield,
    title: "Transparent",
    description: "Complete visibility and accountability in all operations",
  },
  {
    icon: Zap,
    title: "Innovative",
    description: "Cutting-edge technology driving industry transformation",
  },
]

export default function VisionSection() {
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
            Our <span className="text-blue-500">Vision</span>
          </h2>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-12 border border-gray-700">
            <blockquote className="text-xl md:text-2xl font-medium text-white text-center leading-relaxed">
              "To create India's most intelligent, accessible, and eco-friendly physical advertising ecosystem — where
              brands launch campaigns remotely, governments monitor ads in real-time, and the public interacts through
              immersive, measurable technology."
            </blockquote>
          </div>
        </motion.div>

        {/* Vision Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
                <point.icon className="w-6 h-6 text-blue-500" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">{point.title}</h3>
              <p className="text-gray-400 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-12 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Join the Revolution</h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Be part of India's advertising transformation. Experience the future of outdoor advertising today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-lg flex items-center gap-2">
                Start Your Campaign
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg font-medium rounded-lg bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
