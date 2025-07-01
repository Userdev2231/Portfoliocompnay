"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Search, Brain, FileText, Printer, Wrench, MapPin, BarChart3, Receipt } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Discovery",
    description: "Browse verified billboard, kiosk, drone, and transit ad spaces",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Brain,
    title: "AI Campaign Planning",
    description: "AI suggests best locations based on budget, traffic, & goals",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: FileText,
    title: "Permission Management",
    description: "We handle all government approvals & compliance",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Printer,
    title: "Printing & Fabrication",
    description: "QR-enabled eco-friendly banners and digital kiosk content",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Wrench,
    title: "Installation",
    description: "Our ground teams execute safe & timely ad installations",
    color: "from-yellow-500 to-orange-600",
  },
  {
    icon: MapPin,
    title: "Tracking",
    description: "GPS & drone-based proof-of-installation and real-time status",
    color: "from-teal-500 to-green-600",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Dashboard with ROI insights, QR scans, audience traffic",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: Receipt,
    title: "Invoicing & Taxation",
    description: "Auto-generated tax receipts & campaign audit reports",
    color: "from-pink-500 to-red-600",
  },
]

export default function ServicesSection() {
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
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            End-to-end outdoor advertising solutions powered by cutting-edge technology and managed by expert teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-effect rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 group h-full"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} p-3 mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Service Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <div className="glass-effect rounded-3xl p-12 shadow-card text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">Complete Service Flow</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              From initial discovery to final reporting, we handle every aspect of your outdoor advertising campaign
              with precision and expertise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
