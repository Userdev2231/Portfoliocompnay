"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Play, BarChart3, Target, Zap } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/10" />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-foreground/10 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-4">
                🚀 India's First AI-Powered AdTech Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              Revolutionizing
              <br />
              <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
                Outdoor Advertising
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your brand visibility with AI-powered campaign planning, remote management, and real-time
              analytics across India's largest outdoor advertising network.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button size="lg" className="text-lg px-8 py-6 hover-lift">
                Start Your Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover-lift bg-transparent">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {[
              { icon: BarChart3, title: "₹12,000+ Cr", subtitle: "Market Opportunity", color: "text-foreground" },
              { icon: Target, title: "500%", subtitle: "YoY Growth Target", color: "text-foreground" },
              { icon: Zap, title: "10,000+", subtitle: "Billboard Network", color: "text-foreground" },
            ].map((stat, index) => (
              <Card key={index} className="glass-effect hover-lift">
                <CardContent className="p-6 text-center">
                  <stat.icon className={`h-8 w-8 mx-auto mb-4 ${stat.color}`} />
                  <h3 className="text-2xl font-bold text-foreground mb-2">{stat.title}</h3>
                  <p className="text-muted-foreground">{stat.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center"
          >
            <Card className="glass-effect max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Transform Your Advertising Strategy?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join leading brands who trust The Ad-Project for their outdoor advertising campaigns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/business-model">
                    <Button variant="outline" className="hover-lift bg-transparent">
                      Explore Business Model
                    </Button>
                  </Link>
                  <Button className="hover-lift">Schedule Consultation</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
