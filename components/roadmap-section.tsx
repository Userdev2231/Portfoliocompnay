"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle, Clock, Rocket, Globe } from "lucide-react"

const roadmapPhases = [
  {
    phase: "Phase 1",
    timeline: "2025 – Q2 2025",
    status: "active",
    icon: CheckCircle,
    milestones: ["Core platform live", "B2B onboarding", "Drone, kiosk, and transit modules to be ready"],
  },
  {
    phase: "Phase 2",
    timeline: "Q3 2025",
    status: "upcoming",
    icon: Clock,
    milestones: ["Govt dashboard & tax module", "Mobile app launch", "Drone banner pilot campaigns"],
  },
  {
    phase: "Phase 3",
    timeline: "Q4 2025 – 2026",
    status: "planned",
    icon: Rocket,
    milestones: ["Tier 2/3 city expansion", "Public ad audit system", "Smart contracts for ad permits"],
  },
  {
    phase: "Phase 4",
    timeline: "2026+",
    status: "future",
    icon: Globe,
    milestones: ["Blockchain log for ad transactions", "AI-powered predictive ROI", "AR+QR gamification layer"],
  },
]

export default function RoadmapSection() {
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
            Our <span className="text-purple-500">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Strategic phases of development leading to India's most advanced outdoor advertising ecosystem
          </p>
        </motion.div>

        <div className="space-y-8">
          {roadmapPhases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      phase.status === "active"
                        ? "bg-green-500/10 text-green-500"
                        : phase.status === "upcoming"
                          ? "bg-blue-500/10 text-blue-500"
                          : phase.status === "planned"
                            ? "bg-purple-500/10 text-purple-500"
                            : "bg-orange-500/10 text-orange-500"
                    }`}
                  >
                    <phase.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{phase.phase}</h3>
                    <p className="text-gray-400">{phase.timeline}</p>
                  </div>
                </div>

                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    phase.status === "active"
                      ? "bg-green-500/20 text-green-400"
                      : phase.status === "upcoming"
                        ? "bg-blue-500/20 text-blue-400"
                        : phase.status === "planned"
                          ? "bg-purple-500/20 text-purple-400"
                          : "bg-orange-500/20 text-orange-400"
                  }`}
                >
                  {phase.status.toUpperCase()}
                </div>

                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {phase.milestones.map((milestone, milestoneIndex) => (
                      <div key={milestoneIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-3 flex-shrink-0" />
                        {milestone}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
