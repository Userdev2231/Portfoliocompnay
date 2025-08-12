"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { AlertTriangle, Clock, DollarSign, MapPin, BarChart3, Leaf } from "lucide-react"

const industryChallenges = [
  {
    icon: Clock,
    title: "Manual Processes",
    description: "Tedious, city-dependent ad bookings stuck in paperwork",
    color: "#FF6B6B",
    pattern: "zigzag"
  },
  {
    icon: DollarSign,
    title: "Resource Drain",
    description: "Weeks wasted on vendor negotiations and installations",
    color: "#FFA07A",
    pattern: "dots"
  },
  {
    icon: MapPin,
    title: "Black Box System",
    description: "No transparency for governments to track or tax campaigns",
    color: "#FFD166",
    pattern: "lines"
  },
  {
    icon: BarChart3,
    title: "Geographic Limits",
    description: "SMEs can't effectively plan nationwide visibility",
    color: "#06D6A0",
    pattern: "crosses"
  },
  {
    icon: AlertTriangle,
    title: "ROI Blindspots",
    description: "Traditional ads lack digital tracking capabilities",
    color: "#118AB2",
    pattern: "waves"
  },
  {
    icon: Leaf,
    title: "Eco Damage",
    description: "Plastic-based materials harming the environment",
    color: "#073B4C",
    pattern: "grid"
  },
]

export default function IndustryChallenges() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 px-6 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        </div>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-rose-200/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-indigo-200/30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header with creative typography */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
          className="text-center mb-24"
        >
          <motion.span 
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium mb-6 shadow-sm"
          >
            Industry Pain Points
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Breaking Point for <br />
            <span className="relative inline-block">
              <span className="relative z-10">Outdoor Advertising</span>
              <svg 
                className="absolute -bottom-3 left-0 w-full h-4 text-rose-400" 
                viewBox="0 0 200 20"
              >
                <path 
                  d="M0,10 Q50,5 100,10 T200,10" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The industry is at a crossroads. Antiquated systems can't keep up with modern demands, 
            creating friction at every turn.
          </p>
        </motion.div>

        {/* Creative cards grid with patterns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryChallenges.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotate: -1 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.1 + 0.3,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-xs hover:shadow-md transition-all duration-300 group"
            >
              {/* Pattern background */}
              <div 
                className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pattern-${item.pattern}`}
                style={{ backgroundColor: item.color }}
              ></div>
              
              {/* Animated icon container */}
              <motion.div 
                whileHover={{ rotate: 5 }}
                className="relative w-16 h-16 rounded-xl mb-6 flex items-center justify-center"
                style={{ backgroundColor: item.color }}
              >
                <item.icon className="w-8 h-8 text-white" />
                <div className="absolute inset-0 rounded-xl border-2 border-white/30"></div>
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 relative inline-block">
                {item.title}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-1 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: item.color }}
                ></span>
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
              
              {/* Corner accent */}
              <div 
                className="absolute top-0 right-0 w-16 h-16 overflow-hidden"
              >
                <div 
                  className="absolute top-0 right-0 w-32 h-32 origin-bottom-left rotate-45"
                  style={{ backgroundColor: item.color }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact stats with creative layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-28"
        >
          <div className="relative bg-white rounded-3xl p-12 border border-gray-200 shadow-xs overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gray-200 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gray-200 rounded-br-3xl"></div>
            
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12 relative">
              <span className="relative z-10 px-4 bg-white">By The Numbers</span>
              <span className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-0"></span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { value: "60-80%", label: "Time lost to manual work", color: "#FF6B6B" },
                { value: "₹1000Cr+", label: "Revenue leakage annually", color: "#FFA07A" },
                { value: "85%", label: "No ROI measurement", color: "#118AB2" }
              ].map((stat, idx) => (
                <div key={idx} className="space-y-4">
                  <div 
                    className="text-5xl font-bold mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                  <div 
                    className="w-16 h-1 mx-auto mt-4 rounded-full"
                    style={{ backgroundColor: stat.color }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS for patterns - would go in your global CSS */}
      <style jsx>{`
        .pattern-zigzag {
          background-image: 
            linear-gradient(135deg, currentColor 25%, transparent 25%),
            linear-gradient(225deg, currentColor 25%, transparent 25%),
            linear-gradient(315deg, currentColor 25%, transparent 25%),
            linear-gradient(45deg, currentColor 25%, transparent 25%);
          background-size: 8px 8px;
        }
        .pattern-dots {
          background-image: radial-gradient(currentColor 1px, transparent 1px);
          background-size: 8px 8px;
        }
        .pattern-lines {
          background-image: repeating-linear-gradient(45deg, currentColor, currentColor 1px, transparent 1px, transparent 8px);
        }
        .pattern-crosses {
          background-image: 
            linear-gradient(currentColor 1px, transparent 1px),
            linear-gradient(90deg, currentColor 1px, transparent 1px);
          background-size: 8px 8px;
        }
        .pattern-waves {
          background-image: 
            radial-gradient(circle at 100% 50%, currentColor 20%, transparent 20%),
            radial-gradient(circle at 0% 50%, currentColor 20%, transparent 20%);
          background-size: 16px 16px;
        }
        .pattern-grid {
          background-image: 
            linear-gradient(currentColor 1px, transparent 1px),
            linear-gradient(90deg, currentColor 1px, transparent 1px);
          background-size: 16px 16px;
        }
      `}</style>
    </section>
  )
}
