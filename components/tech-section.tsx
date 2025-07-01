"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Globe, Satellite, Smartphone, Package, Map, BarChart3, Zap } from "lucide-react"

const technologies = [
  {
    icon: Brain,
    title: "AI Ad Planner",
    description: "Suggests optimal space, format, and location based on budget & audience",
  },
  {
    icon: Globe,
    title: "Web & Mobile Dashboard",
    description: "Plan, book, and monitor campaigns remotely",
  },
  {
    icon: Satellite,
    title: "GPS + Drone Integration",
    description: "Verifies ad installations with location data",
  },
  {
    icon: Smartphone,
    title: "AR Previews",
    description: "Visualize your ad in real-world environments before booking",
  },
  {
    icon: Package,
    title: "QR-Enabled Fabric Ads",
    description: "Drive digital engagement from physical banners",
  },
  {
    icon: Map,
    title: "Geospatial Mapping (GIS)",
    description: "Map-based discovery and heatmap coverage of ad zones",
  },
  {
    icon: BarChart3,
    title: "Live Analytics Dashboard",
    description: "View performance metrics like scans, impressions, footfall, etc.",
  },
  {
    icon: Zap,
    title: "API & Government Sync",
    description: "Seamless integration with govt. permission and tax systems",
  },
]

export default function TechSection() {
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
            Our <span className="text-purple-500">Technology</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technologies powering the future of outdoor advertising
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <tech.icon className="w-5 h-5 text-purple-500" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">{tech.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-12 border border-gray-700">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Technology Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-500 mb-2">99.9%</div>
                <div className="text-gray-400">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-500 mb-2">Real-time</div>
                <div className="text-gray-400">Data Processing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">AI-Powered</div>
                <div className="text-gray-400">Optimization</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                <div className="text-gray-400">Monitoring</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
