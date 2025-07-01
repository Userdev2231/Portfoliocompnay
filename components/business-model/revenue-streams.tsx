"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { DollarSign, Percent, Users, Zap, Shield, BarChart3, Wrench } from "lucide-react"

export default function RevenueStreams() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const revenueStreams = [
    {
      icon: Percent,
      title: "Commission on Bookings",
      description: "5-15% commission on every ad booking through our platform",
      revenue: "₹50-150 Cr/year",
      percentage: "40%",
    },
    {
      icon: Users,
      title: "SaaS Subscription",
      description: "Monthly/yearly subscriptions for platform access and premium features",
      revenue: "₹20-60 Cr/year",
      percentage: "25%",
    },
    {
      icon: Zap,
      title: "AI Analytics Premium",
      description: "Advanced AI-powered analytics and insights for enterprise clients",
      revenue: "₹15-45 Cr/year",
      percentage: "15%",
    },
    {
      icon: Shield,
      title: "Government Partnerships",
      description: "Revenue from government contracts for smart city advertising solutions",
      revenue: "₹10-30 Cr/year",
      percentage: "10%",
    },
    {
      icon: BarChart3,
      title: "Data Monetization",
      description: "Anonymized advertising insights and market intelligence reports",
      revenue: "₹5-15 Cr/year",
      percentage: "5%",
    },
    {
      icon: Wrench,
      title: "Installation Services",
      description: "Premium installation and maintenance services across India",
      revenue: "₹3-10 Cr/year",
      percentage: "3%",
    },
    {
      icon: DollarSign,
      title: "White-label Solutions",
      description: "Licensing our platform to other advertising agencies and companies",
      revenue: "₹2-7 Cr/year",
      percentage: "2%",
    },
  ]

  return (
    <section ref={ref} className="py-24 px-4 bg-subtle">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-high-contrast mb-6">Revenue Streams</h2>
          <p className="text-xl text-medium-contrast max-w-3xl mx-auto">
            Seven diversified revenue streams ensuring sustainable growth and market resilience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 hover-lift"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-foreground text-background p-3 flex items-center justify-center">
                  <stream.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-high-contrast">{stream.percentage}</div>
              </div>

              <h3 className="text-xl font-semibold text-high-contrast mb-3">{stream.title}</h3>
              <p className="text-medium-contrast mb-4 leading-relaxed">{stream.description}</p>
              <div className="text-lg font-semibold text-foreground">{stream.revenue}</div>
            </motion.div>
          ))}
        </div>

        {/* Revenue Projection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="glass-effect rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-high-contrast text-center mb-8">5-Year Revenue Projection</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
              {[
                { year: "Year 1", revenue: "₹25 Cr" },
                { year: "Year 2", revenue: "₹75 Cr" },
                { year: "Year 3", revenue: "₹200 Cr" },
                { year: "Year 4", revenue: "₹450 Cr" },
                { year: "Year 5", revenue: "₹800 Cr" },
              ].map((projection, index) => (
                <div key={index} className="space-y-4">
                  <div className="text-3xl font-bold text-high-contrast">{projection.revenue}</div>
                  <div className="text-medium-contrast font-medium">{projection.year}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
