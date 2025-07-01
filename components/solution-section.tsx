"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle, Zap, Globe, Shield, BarChart, Leaf } from "lucide-react"

const solutions = [
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description: "Automated campaign planning, booking, and optimization using advanced AI algorithms",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Globe,
    title: "Remote Management",
    description: "Manage campaigns from anywhere in the world with our cloud-based platform",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Government Integration",
    description: "Seamless integration with government systems for permissions and compliance",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: BarChart,
    title: "Real-time Analytics",
    description: "Comprehensive ROI tracking with real-time performance metrics and insights",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description: "Sustainable advertising materials and practices for environmental responsibility",
    color: "from-green-400 to-teal-500",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Service",
    description: "Complete solution from discovery to installation, tracking, and reporting",
    color: "from-indigo-400 to-purple-500",
  },
]

export default function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our{" "}
            <span className="text-gradient bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Solution
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive, AI-powered platform that revolutionizes outdoor advertising with transparency, efficiency,
            and environmental responsibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-effect rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.color} p-4 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <solution.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-gradient transition-all duration-300">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="glass-effect rounded-3xl p-12 shadow-card">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">Platform Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-4">
                <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  60-80%
                </div>
                <div className="text-muted-foreground font-medium">Time Savings</div>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-muted-foreground font-medium">Remote Management</div>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Real-time
                </div>
                <div className="text-muted-foreground font-medium">ROI Tracking</div>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Zero
                </div>
                <div className="text-muted-foreground font-medium">Physical Effort</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
