"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Rocket, Store, Target, Building, Users } from "lucide-react"

const audiences = [
  {
    icon: Building2,
    title: "Brands & Corporates",
    description: "Centralized outdoor ad planning, detailed ROI, wide city reach",
    benefits: ["PAN-India campaign management", "Detailed ROI analytics", "Brand visibility tracking"],
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Affordable visibility in target markets",
    benefits: ["Cost-effective advertising", "Targeted market reach", "Growth-focused campaigns"],
  },
  {
    icon: Store,
    title: "SMEs & Local Businesses",
    description: "Hyperlocal promotion with full support",
    benefits: ["Local market penetration", "Community engagement", "Affordable pricing"],
  },
  {
    icon: Target,
    title: "Agencies",
    description: "Outsourced execution with reporting tools",
    benefits: ["White-label solutions", "Client reporting tools", "Revenue sharing"],
  },
  {
    icon: Building,
    title: "Government Bodies",
    description: "Transparent ad tracking, tax automation, public awareness campaigns",
    benefits: ["Transparent tracking", "Automated taxation", "Public campaigns"],
  },
  {
    icon: Users,
    title: "Event Organizers",
    description: "Large-scale event promotion and audience engagement",
    benefits: ["Event visibility", "Audience targeting", "Multi-location ads"],
  },
]

export default function AudienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Who <span className="text-green-500">Benefits</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our platform serves diverse audiences with tailored solutions for every advertising need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-6">
                <audience.icon className="w-6 h-6 text-green-500" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">{audience.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{audience.description}</p>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-300 uppercase tracking-wide">Key Benefits</h4>
                <ul className="space-y-2">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Market Reach Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-12 border border-gray-700">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Market Reach</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-500 mb-2">500+</div>
                <div className="text-gray-400">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-500 mb-2">2000+</div>
                <div className="text-gray-400">SMEs & Startups</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-500 mb-2">50+</div>
                <div className="text-gray-400">Government Bodies</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
