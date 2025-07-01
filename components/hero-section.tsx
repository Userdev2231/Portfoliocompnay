"use client"

import { motion } from "framer-motion"
import { Building2, ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-8">
            <Building2 className="w-16 h-16 text-foreground mr-4" />
            <h1 className="text-6xl md:text-8xl font-bold text-high-contrast">The Ad-Project</h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 mb-12"
          >
            <p className="text-2xl md:text-3xl font-semibold text-medium-contrast">
              India's First Full-Stack, AI-Powered
            </p>
            <p className="text-3xl md:text-4xl font-bold text-high-contrast">Outdoor AdTech Ecosystem</p>
            <p className="text-lg md:text-xl text-medium-contrast max-w-4xl mx-auto leading-relaxed">
              Revolutionizing outdoor advertising with intelligent automation, remote management, and comprehensive
              analytics for brands, agencies, and government bodies across India.
            </p>
          </motion.div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto"
        >
          {[
            {
              title: "AI-Powered Planning",
              desc: "Smart campaign optimization with advanced algorithms",
            },
            {
              title: "Remote Management",
              desc: "Manage campaigns globally from a single dashboard",
            },
            {
              title: "End-to-End Solution",
              desc: "Complete service from planning to analytics",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="glass-effect rounded-2xl p-8 hover-lift"
            >
              <h3 className="text-xl font-semibold text-high-contrast mb-3">{feature.title}</h3>
              <p className="text-medium-contrast">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 px-10 py-4 text-lg font-semibold rounded-xl group"
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Link href="/business-model">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-border text-foreground hover:bg-muted px-10 py-4 text-lg font-semibold rounded-xl bg-transparent"
            >
              <Play className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
