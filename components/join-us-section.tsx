"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Rocket, TrendingUp, Users, Award, ArrowRight, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function JoinUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const opportunities = [
    {
      icon: Rocket,
      title: "Be Part of the Next Unicorn",
      description: "Join India's fastest-growing AdTech startup destined for unicorn status",
    },
    {
      icon: TrendingUp,
      title: "Exponential Career Growth",
      description: "Scale your career with cutting-edge technology and industry-leading practices",
    },
    {
      icon: Users,
      title: "Work with Industry Pioneers",
      description: "Collaborate with top talent and visionary leaders shaping the future",
    },
    {
      icon: Award,
      title: "Competitive Rewards & Equity",
      description: "Attractive compensation packages with equity participation in our success",
    },
  ]

  const stats = [
    { number: "500%", label: "Growth Rate", icon: TrendingUp },
    { number: "₹100Cr+", label: "Funding Raised", icon: Target },
    { number: "50+", label: "Team Members", icon: Users },
    { number: "10+", label: "Cities Covered", icon: Rocket },
  ]

  return (
    <section ref={ref} className="py-24 px-4 bg-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-high-contrast mb-8">JOIN US</h2>
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl font-bold text-high-contrast">
              Your Opportunity to Be Part of India's Future Unicorn
            </p>
            <p className="text-xl text-medium-contrast max-w-4xl mx-auto leading-relaxed">
              If you want to learn, grow, and be part of something revolutionary, here's your chance to join the team
              that's transforming India's advertising landscape forever.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="text-center glass-effect rounded-2xl p-8 hover-lift"
            >
              <stat.icon className="w-8 h-8 text-foreground mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-high-contrast mb-2">{stat.number}</div>
              <div className="text-medium-contrast font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="glass-effect rounded-3xl p-8 hover-lift"
            >
              <div className="w-16 h-16 rounded-2xl bg-foreground text-background p-4 mb-6 flex items-center justify-center">
                <opportunity.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-high-contrast mb-4">{opportunity.title}</h3>
              <p className="text-medium-contrast leading-relaxed text-lg">{opportunity.description}</p>
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
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-high-contrast mb-6">Ready to Shape the Future?</h3>
            <p className="text-xl text-medium-contrast leading-relaxed mb-8">
              Don't just watch the revolution happen – be the one who creates it. Join us in building India's most
              innovative AdTech platform and accelerate your career to new heights.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 px-12 py-4 text-xl font-semibold rounded-xl group"
              >
                Join Our Team
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-border text-foreground hover:bg-muted px-12 py-4 text-xl font-semibold rounded-xl bg-transparent"
              >
                View Open Positions
              </Button>
            </div>

            <p className="text-sm text-medium-contrast mt-8 italic">
              "The best time to plant a tree was 20 years ago. The second best time is now." - Join us today!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
