"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
  Eye,
  MapPin,
  Satellite,
  QrCode,
  BarChart3,
  Shield,
  Cpu,
  Globe,
  Camera,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Building,
  Car,
  ShoppingBag,
  Users,
  Award,
  Calendar,
  MapIcon,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function TechnologyPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const technologies = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      subtitle: "Smart Ad Detection & Optimization",
      description:
        "Advanced machine learning algorithms analyze audience behavior, optimize ad placement, and predict campaign performance with 95% accuracy.",
      features: [
        "Real-time audience analysis",
        "Predictive campaign optimization",
        "Automated content personalization",
        "Smart bidding algorithms",
      ],
      metrics: {
        accuracy: "95%",
        processing: "< 100ms",
        optimization: "40% better ROI",
      },
    },
    {
      icon: Eye,
      title: "Augmented Reality",
      subtitle: "Immersive Ad Experiences",
      description:
        "Create interactive AR campaigns that blend digital content with real-world environments, increasing engagement by 300%.",
      features: [
        "3D product visualization",
        "Interactive brand experiences",
        "Virtual try-on capabilities",
        "Location-based AR triggers",
      ],
      metrics: {
        engagement: "+300%",
        retention: "85%",
        conversion: "+150%",
      },
    },
    {
      icon: MapPin,
      title: "Geospatial Mapping",
      subtitle: "Precision Location Intelligence",
      description:
        "Advanced GIS technology provides precise location data, demographic insights, and optimal ad placement strategies.",
      features: [
        "High-resolution mapping",
        "Demographic overlay analysis",
        "Traffic pattern recognition",
        "Optimal placement algorithms",
      ],
      metrics: {
        precision: "99.9%",
        coverage: "500+ cities",
        accuracy: "Sub-meter",
      },
    },
    {
      icon: Satellite,
      title: "Satellite Integration",
      subtitle: "Real-time Global Monitoring",
      description:
        "Satellite data integration enables real-time monitoring, weather-based campaign adjustments, and global reach analytics.",
      features: [
        "Weather-based optimization",
        "Real-time monitoring",
        "Global coverage analysis",
        "Environmental impact tracking",
      ],
      metrics: {
        coverage: "Global",
        updates: "Real-time",
        accuracy: "Meter-level",
      },
    },
    {
      icon: QrCode,
      title: "Interactive QR Technology",
      subtitle: "Seamless Digital Bridge",
      description:
        "Advanced QR systems create seamless connections between physical ads and digital experiences, tracking every interaction.",
      features: [
        "Dynamic QR generation",
        "Multi-platform compatibility",
        "Interaction analytics",
        "Personalized landing pages",
      ],
      metrics: {
        scan_rate: "78%",
        conversion: "45%",
        tracking: "100%",
      },
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      subtitle: "Comprehensive Performance Insights",
      description:
        "Advanced analytics platform provides real-time campaign performance, audience insights, and ROI optimization recommendations.",
      features: [
        "Live performance dashboards",
        "Audience behavior analysis",
        "ROI optimization",
        "Predictive insights",
      ],
      metrics: {
        reporting: "Real-time",
        insights: "24/7",
        accuracy: "99.5%",
      },
    },
  ]

  const realWorldExamples = [
    {
      icon: Building,
      title: "Mumbai Metro AR Campaign",
      client: "Real Estate Developer",
      challenge: "Launch luxury residential project in competitive Mumbai market",
      solution: "AR-enabled metro station ads allowing virtual property tours",
      technology: ["Augmented Reality", "QR Technology", "Geospatial Mapping"],
      results: {
        engagement: "+450% increase in engagement",
        leads: "2,500+ qualified leads in 30 days",
        roi: "320% ROI improvement",
        conversion: "65% higher conversion rate",
      },
      timeline: "3 months",
      location: "Mumbai Metro Stations",
      description:
        "Deployed AR-enabled advertisements across 15 Mumbai Metro stations, allowing commuters to take virtual tours of luxury apartments by scanning QR codes. The campaign used geospatial data to target high-income demographics during peak hours.",
    },
    {
      icon: Car,
      title: "Delhi Highway Smart Billboards",
      client: "Automotive Manufacturer",
      challenge: "Promote new SUV model across Delhi-NCR highways",
      solution: "AI-powered dynamic billboards with weather-responsive content",
      technology: ["Artificial Intelligence", "Satellite Data", "Real-time Analytics"],
      results: {
        visibility: "2.5M+ daily impressions",
        engagement: "180% increase in showroom visits",
        awareness: "85% brand recall improvement",
        efficiency: "40% reduction in ad spend waste",
      },
      timeline: "6 months",
      location: "Delhi-NCR Highway Network",
      description:
        "Implemented AI-driven dynamic billboards that automatically adjusted content based on weather conditions, traffic patterns, and time of day. Satellite data enabled real-time optimization of ad content for maximum impact.",
    },
    {
      icon: ShoppingBag,
      title: "Bangalore Mall Interactive Kiosks",
      client: "Fashion Retail Chain",
      challenge: "Drive foot traffic to new store locations",
      solution: "Interactive AR try-on kiosks with personalized recommendations",
      technology: ["Augmented Reality", "AI", "QR Technology"],
      results: {
        footfall: "300% increase in store visits",
        sales: "₹2.5 Cr additional revenue",
        engagement: "Average 4.5 min interaction time",
        satisfaction: "92% customer satisfaction",
      },
      timeline: "4 months",
      location: "5 Major Bangalore Malls",
      description:
        "Deployed interactive AR kiosks allowing customers to virtually try on clothing and accessories. AI algorithms provided personalized style recommendations, while QR codes enabled seamless purchase journeys.",
    },
    {
      icon: Users,
      title: "Chennai Government Health Campaign",
      client: "Tamil Nadu Government",
      challenge: "Promote vaccination awareness across urban and rural areas",
      solution: "Multi-language QR-enabled awareness campaign with real-time tracking",
      technology: ["QR Technology", "Geospatial Mapping", "Real-time Analytics"],
      results: {
        reach: "5M+ people reached",
        engagement: "78% QR scan rate",
        appointments: "150,000+ vaccination bookings",
        coverage: "95% district coverage",
      },
      timeline: "8 months",
      location: "Tamil Nadu State-wide",
      description:
        "Executed comprehensive health awareness campaign using QR-enabled posters and billboards across Tamil Nadu. Geospatial mapping ensured optimal placement in high-traffic areas, while real-time analytics tracked campaign effectiveness.",
    },
    {
      icon: Zap,
      title: "Hyderabad Tech Park Drone Show",
      client: "Technology Conference",
      challenge: "Create buzz for major tech conference launch",
      solution: "Synchronized drone light show with AR integration",
      technology: ["Drone Technology", "Augmented Reality", "Satellite Data"],
      results: {
        attendance: "50,000+ live viewers",
        social: "2M+ social media impressions",
        registration: "400% increase in conference registrations",
        media: "Coverage in 25+ news outlets",
      },
      timeline: "2 months",
      location: "Hyderabad HITEC City",
      description:
        "Orchestrated a spectacular 500-drone light show synchronized with AR experiences accessible via mobile apps. Satellite data ensured optimal weather conditions and flight path planning for maximum safety and impact.",
    },
    {
      icon: Award,
      title: "Pune Smart City Integration",
      client: "Pune Municipal Corporation",
      challenge: "Modernize city advertising infrastructure",
      solution: "IoT-enabled smart advertising ecosystem with environmental monitoring",
      technology: ["IoT Sensors", "AI Analytics", "Satellite Integration"],
      results: {
        efficiency: "60% reduction in energy consumption",
        revenue: "₹15 Cr annual advertising revenue",
        monitoring: "Real-time air quality integration",
        maintenance: "50% reduction in maintenance costs",
      },
      timeline: "12 months",
      location: "Pune Smart City Areas",
      description:
        "Deployed comprehensive smart advertising infrastructure with IoT sensors monitoring air quality, noise levels, and energy consumption. AI algorithms optimize ad display based on environmental conditions and audience patterns.",
    },
  ]

  const techStack = [
    { name: "TensorFlow", category: "AI/ML", usage: "Machine Learning Models" },
    { name: "ARCore/ARKit", category: "AR", usage: "Augmented Reality" },
    { name: "PostGIS", category: "GIS", usage: "Geospatial Analysis" },
    { name: "Google Earth Engine", category: "Satellite", usage: "Satellite Data Processing" },
    { name: "React Native", category: "Mobile", usage: "Cross-platform Apps" },
    { name: "Node.js", category: "Backend", usage: "API Development" },
    { name: "MongoDB", category: "Database", usage: "Data Storage" },
    { name: "AWS", category: "Cloud", usage: "Infrastructure" },
  ]

  const benefits = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "AI-powered audience analysis ensures your ads reach the right people at the right time and place.",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description:
        "Real-time analytics and machine learning continuously optimize campaign performance for maximum ROI.",
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description:
        "Satellite integration and cloud infrastructure enable campaigns to scale globally with consistent quality.",
    },
    {
      icon: Shield,
      title: "Data Security",
      description:
        "Enterprise-grade security ensures all campaign data and analytics are protected with military-grade encryption.",
    },
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-muted border-t-foreground rounded-full animate-spin mx-auto"></div>
            <Sparkles className="w-6 h-6 text-foreground absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <p className="text-muted-foreground">Loading Advanced Technology...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Spacer */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Cpu className="w-4 h-4 mr-2" />
              Advanced Technology Stack
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              The Future of
              <span className="block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Outdoor Advertising
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We combine AI, AR, Geospatial Mapping, GIS, GPS, Satellite Data, and QR-powered Interactive Ads to
              digitally transform traditional outdoor advertising — enabling smart ad detection, immersive previews,
              real-time analytics, and campaign tracking like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Explore Technology
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                View Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Revolutionary Technology Stack</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Six core technologies working together to transform outdoor advertising into an intelligent, data-driven,
              and highly engaging medium.
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="examples">Case Studies</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="stack">Tech Stack</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-muted">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-muted rounded-lg">
                            <tech.icon className="w-6 h-6 text-foreground" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{tech.title}</CardTitle>
                            <CardDescription className="text-sm">{tech.subtitle}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">{tech.description}</p>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          {Object.entries(tech.metrics).map(([key, value]) => (
                            <div key={key} className="p-2 bg-muted/50 rounded">
                              <div className="font-semibold text-sm text-foreground">{value}</div>
                              <div className="text-xs text-muted-foreground capitalize">{key.replace("_", " ")}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="examples" className="space-y-8">
              <div className="space-y-8">
                {realWorldExamples.map((example, index) => (
                  <motion.div
                    key={example.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="border-muted">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-3 bg-muted rounded-lg">
                              <example.icon className="w-6 h-6 text-foreground" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{example.title}</CardTitle>
                              <CardDescription className="text-sm font-medium">{example.client}</CardDescription>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {example.technology.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                            <p className="text-sm text-muted-foreground">{example.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                            <p className="text-sm text-muted-foreground">{example.solution}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Implementation</h4>
                            <div className="space-y-1 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-2">
                                <Calendar className="w-3 h-3" />
                                <span>{example.timeline}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapIcon className="w-3 h-3" />
                                <span>{example.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Campaign Description</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{example.description}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Results Achieved</h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {Object.entries(example.results).map(([key, value]) => (
                              <div key={key} className="p-3 bg-muted/50 rounded-lg text-center">
                                <div className="font-semibold text-foreground text-sm">{value}</div>
                                <div className="text-xs text-muted-foreground capitalize mt-1">
                                  {key.replace(/([A-Z])/g, " $1").trim()}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {technologies.map((tech, index) => (
                  <Card key={tech.title} className="border-muted">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <tech.icon className="w-6 h-6 text-foreground" />
                        <CardTitle>{tech.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tech.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full border-muted">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-muted rounded-lg">
                            <benefit.icon className="w-6 h-6 text-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="stack" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Card className="text-center border-muted hover:shadow-md transition-all duration-300">
                      <CardContent className="p-4">
                        <Badge variant="outline" className="mb-2">
                          {tech.category}
                        </Badge>
                        <h4 className="font-semibold text-foreground">{tech.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{tech.usage}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Technology Images Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technology in Action</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See how our advanced technology stack transforms traditional outdoor advertising into intelligent,
              interactive, and measurable campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="AI-powered ad detection and optimization dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">AI-Powered Analytics Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time campaign performance monitoring with predictive insights and automated optimization
                  recommendations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Augmented reality ad experience on mobile device"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">AR Interactive Experiences</h3>
                <p className="text-sm text-muted-foreground">
                  Immersive augmented reality campaigns that blend digital content with real-world environments for
                  maximum engagement.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Geospatial mapping and location intelligence interface"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Geospatial Intelligence</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced GIS mapping with demographic overlays and traffic pattern analysis for optimal ad placement
                  strategies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to Transform Your Advertising?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the power of AI-driven, AR-enhanced outdoor advertising. Let's discuss how our technology can
              revolutionize your campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Schedule Demo
                <Camera className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">
                  View Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
