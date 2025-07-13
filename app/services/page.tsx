"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building2,
  Truck,
  Smartphone,
  DrillIcon as Drone,
  Eye,
  Target,
  Zap,
  Leaf,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  MapPin,
  Clock,
  Shield,
} from "lucide-react"
import Navigation from "@/components/navigation"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const services = [
  {
    id: "wall-ads",
    title: "Wall Advertisements",
    description: "Transform building walls into powerful brand canvases with our premium wall advertising solutions.",
    icon: Building2,
    features: [
      "High-visibility prime locations",
      "Weather-resistant materials",
      "Custom design and installation",
      "Long-term brand exposure",
      "Cost-effective reach",
    ],
    benefits: [
      "24/7 brand visibility",
      "Massive audience reach",
      "Local market penetration",
      "Brand authority building",
    ],
    pricing: "Starting from ₹15,000/month",
    duration: "3-12 months campaigns",
    coverage: "Pan-India availability",
  },
  {
    id: "hoardings",
    title: "Digital & Traditional Hoardings",
    description: "Dominate skylines with our strategic hoarding placements in high-traffic areas across major cities.",
    icon: Eye,
    features: [
      "Prime highway locations",
      "Digital LED displays",
      "Traditional flex hoardings",
      "Strategic placement analysis",
      "Real-time content updates",
    ],
    benefits: [
      "Maximum visibility impact",
      "Traffic-based targeting",
      "Brand recall enhancement",
      "Market dominance display",
    ],
    pricing: "Starting from ₹50,000/month",
    duration: "1-24 months campaigns",
    coverage: "Tier 1 & Tier 2 cities",
  },
  {
    id: "kiosks",
    title: "Interactive Kiosks",
    description:
      "Engage customers with smart, interactive kiosks featuring touchscreen technology and real-time analytics.",
    icon: Smartphone,
    features: [
      "Touchscreen interaction",
      "Real-time analytics",
      "Multi-language support",
      "QR code integration",
      "Customer data collection",
    ],
    benefits: [
      "Direct customer engagement",
      "Measurable interactions",
      "Lead generation capability",
      "Brand experience enhancement",
    ],
    pricing: "Starting from ₹25,000/month",
    duration: "6-18 months campaigns",
    coverage: "Metro cities & malls",
  },
  {
    id: "transit-ads",
    title: "Transit Advertising",
    description:
      "Reach mobile audiences with our comprehensive transit advertising across buses, metros, and auto-rickshaws.",
    icon: Truck,
    features: [
      "Bus exterior/interior ads",
      "Metro station displays",
      "Auto-rickshaw branding",
      "Airport advertising",
      "Railway station ads",
    ],
    benefits: ["Mobile audience reach", "Commuter targeting", "Route-specific campaigns", "High frequency exposure"],
    pricing: "Starting from ₹8,000/month",
    duration: "1-12 months campaigns",
    coverage: "All major transport hubs",
  },
  {
    id: "drone-displays",
    title: "Drone Light Shows",
    description:
      "Create spectacular aerial displays with synchronized drone formations and LED light shows for maximum impact.",
    icon: Drone,
    features: [
      "Synchronized drone formations",
      "LED light programming",
      "Custom choreography",
      "Event integration",
      "Social media amplification",
    ],
    benefits: [
      "Viral marketing potential",
      "Unique brand experience",
      "Event enhancement",
      "Media coverage generation",
    ],
    pricing: "Starting from ₹2,00,000/event",
    duration: "Single events or campaigns",
    coverage: "Major cities with permissions",
  },
  {
    id: "ar-campaigns",
    title: "AR-Integrated Campaigns",
    description: "Blend physical and digital worlds with cutting-edge Augmented Reality advertising experiences.",
    icon: Zap,
    features: [
      "AR filter development",
      "Interactive experiences",
      "Social media integration",
      "Real-time engagement",
      "Analytics tracking",
    ],
    benefits: [
      "Tech-forward brand image",
      "Viral content creation",
      "Engagement amplification",
      "Measurable interactions",
    ],
    pricing: "Starting from ₹75,000/campaign",
    duration: "2-6 months campaigns",
    coverage: "Digital + physical integration",
  },
]

const packages = [
  {
    name: "Startup Package",
    price: "₹25,000",
    duration: "3 months",
    description: "Perfect for new businesses looking to establish local presence",
    features: [
      "2 Wall advertisements",
      "1 Transit ad campaign",
      "Basic analytics",
      "Design consultation",
      "Installation support",
    ],
    popular: false,
  },
  {
    name: "Growth Package",
    price: "₹75,000",
    duration: "6 months",
    description: "Ideal for expanding businesses targeting multiple locations",
    features: [
      "5 Wall advertisements",
      "2 Digital hoardings",
      "3 Transit campaigns",
      "1 Interactive kiosk",
      "Advanced analytics",
      "Dedicated account manager",
    ],
    popular: true,
  },
  {
    name: "Enterprise Package",
    price: "₹2,50,000",
    duration: "12 months",
    description: "Comprehensive solution for large-scale brand campaigns",
    features: [
      "15+ Wall advertisements",
      "5 Digital hoardings",
      "10 Transit campaigns",
      "3 Interactive kiosks",
      "1 Drone light show",
      "AR campaign integration",
      "Real-time dashboard",
      "24/7 support",
    ],
    popular: false,
  },
]

const industries = [
  { name: "Retail & E-commerce", icon: "🛍️", campaigns: "500+" },
  { name: "Real Estate", icon: "🏢", campaigns: "300+" },
  { name: "Automotive", icon: "🚗", campaigns: "250+" },
  { name: "Food & Beverage", icon: "🍕", campaigns: "400+" },
  { name: "Healthcare", icon: "🏥", campaigns: "150+" },
  { name: "Education", icon: "🎓", campaigns: "200+" },
  { name: "Government", icon: "🏛️", campaigns: "100+" },
  { name: "Entertainment", icon: "🎬", campaigns: "180+" },
]

// Portfolio/Showcase Images
const portfolioImages = [
  { image: "/work (1).png" },
  { image: "/work (2).png" },
  { image: "/work (3).png" },
  { image: "/work (4).png" },
  { image: "/work (5).png" },
  { image: "/work (6).png" }
]

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState("wall-ads")
  const [activeTab, setActiveTab] = useState("services")

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-muted text-muted-foreground">Complete Outdoor Advertising Solutions</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Transform Your Brand with
              <span className="block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Outdoor Advertising
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              At The Ad Project, we offer complete outdoor advertising solutions tailored to your business goals, trend
              preferences, and budget. From wall ads, hoardings, kiosks, transit ads, and drone displays to
              AR-integrated campaigns — we provide customized packages that suit every scale, sector, and city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Portfolio
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">1000+</div>
              <div className="text-muted-foreground">Campaigns Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="text-muted-foreground">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="services">Our Services</TabsTrigger>
              <TabsTrigger value="packages">Packages</TabsTrigger>
              <TabsTrigger value="industries">Industries</TabsTrigger>
              <TabsTrigger value="process">Our Process</TabsTrigger>
            </TabsList>

            {/* Services Tab */}
            <TabsContent value="services" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedService === service.id ? "ring-2 ring-foreground" : ""
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <service.icon className="h-8 w-8 text-foreground" />
                          <div>
                            <CardTitle className="text-lg">{service.title}</CardTitle>
                            <CardDescription className="text-sm">{service.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Selected Service Details */}
              {selectedService && (
                <motion.div
                  key={selectedService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {services.find((s) => s.id === selectedService)?.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {services.find((s) => s.id === selectedService)?.description}
                        </p>

                        <h4 className="text-lg font-semibold text-foreground mb-3">Key Features:</h4>
                        <ul className="space-y-2 mb-6">
                          {services
                            .find((s) => s.id === selectedService)
                            ?.features.map((feature, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                        </ul>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                          <div className="flex items-center space-x-2">
                            <Target className="h-4 w-4 text-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {services.find((s) => s.id === selectedService)?.pricing}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {services.find((s) => s.id === selectedService)?.duration}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {services.find((s) => s.id === selectedService)?.coverage}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Benefits:</h4>
                        <ul className="space-y-2 mb-6">
                          {services
                            .find((s) => s.id === selectedService)
                            ?.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <Star className="h-4 w-4 text-yellow-500" />
                                <span className="text-muted-foreground">{benefit}</span>
                              </li>
                            ))}
                        </ul>

                        <div className="bg-muted p-6 rounded-lg">
                          <h5 className="font-semibold text-foreground mb-2">Why Choose This Service?</h5>
                          <p className="text-sm text-muted-foreground mb-4">
                            Our {services.find((s) => s.id === selectedService)?.title.toLowerCase()} solutions are
                            designed with cutting-edge technology, eco-friendly materials, and data-driven placement
                            strategies to maximize your ROI.
                          </p>
                          <Button className="w-full">Get Quote for This Service</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </TabsContent>

            {/* Packages Tab */}
            <TabsContent value="packages" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Package</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Whether you're a startup or a government body, we have customized packages that suit every scale,
                  sector, and city.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className={`relative h-full ${pkg.popular ? "ring-2 ring-foreground" : ""}`}>
                      {pkg.popular && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-foreground text-background">
                          Most Popular
                        </Badge>
                      )}
                      <CardHeader className="text-center">
                        <CardTitle className="text-xl">{pkg.name}</CardTitle>
                        <div className="text-3xl font-bold text-foreground">{pkg.price}</div>
                        <div className="text-muted-foreground">per {pkg.duration}</div>
                        <CardDescription>{pkg.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 mb-6">
                          {pkg.features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                          Choose {pkg.name}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Industries Tab */}
            <TabsContent value="industries" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Industries We Serve</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  From startups to government bodies, we help businesses across all sectors build their brand in the
                  real world with tech-driven, eco-friendly, and impactful ads.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                      <div className="text-4xl mb-3">{industry.icon}</div>
                      <h3 className="font-semibold text-foreground mb-2">{industry.name}</h3>
                      <div className="text-sm text-muted-foreground">{industry.campaigns} campaigns</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Process Tab */}
            <TabsContent value="process" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Process</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  From consultation to campaign execution, we ensure every step is optimized for maximum impact and ROI.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Consultation",
                    description: "Understanding your goals, target audience, and budget requirements",
                    icon: Users,
                  },
                  {
                    step: "02",
                    title: "Strategy",
                    description: "Developing customized advertising strategy with location analysis",
                    icon: Target,
                  },
                  {
                    step: "03",
                    title: "Execution",
                    description: "Professional installation and campaign launch with quality assurance",
                    icon: Zap,
                  },
                  {
                    step: "04",
                    title: "Analytics",
                    description: "Real-time monitoring, reporting, and optimization for better results",
                    icon: TrendingUp,
                  },
                ].map((process, index) => (
                  <motion.div
                    key={process.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="text-center p-6 h-full">
                      <div className="text-2xl font-bold text-muted-foreground mb-3">{process.step}</div>
                      <process.icon className="h-8 w-8 text-foreground mx-auto mb-3" />
                      <h3 className="font-semibold text-foreground mb-2">{process.title}</h3>
                      <p className="text-sm text-muted-foreground">{process.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Amazing 3D Portfolio Slider */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-foreground text-background">Our Success Stories</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Witness Our
              <span className="block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Revolutionary Campaigns
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore real campaigns that transformed brands with cutting-edge technology, delivering exceptional ROI
              and unprecedented engagement across India's major cities.
            </p>
          </motion.div>

          {/* 3D Portfolio Carousel */}
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {portfolioImages.map((item, index) => (
                  <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="h-full"
                    >
                      <Card className="group h-full overflow-hidden bg-background border border-border hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        {/* Image Container with 3D Effect */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
                          <div className="aspect-[4/3] overflow-hidden">
                            <motion.img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              whileHover={{ scale: 1.05 }}
                            />
                          </div>

                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-foreground/90 text-background backdrop-blur-sm">{item.category}</Badge>
                          </div>

                          {/* Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Content */}
                        <CardContent className="p-6 space-y-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-foreground/90 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                          </div>

                          {/* Metrics */}
                          <div className="pt-4 border-t border-border">
                            <div className="flex items-center justify-between">
                              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                Results
                              </div>
                              <div className="flex items-center space-x-1">
                                <TrendingUp className="h-3 w-3 text-green-600" />
                                <span className="text-xs text-green-600 font-medium">Success</span>
                              </div>
                            </div>
                            <p className="text-sm font-semibold text-foreground mt-2">{item.metrics}</p>
                          </div>

                          {/* View Details Button */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            className="pt-2"
                          >
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-foreground hover:text-background"
                            >
                              View Case Study
                              <ArrowRight className="ml-2 h-3 w-3" />
                            </Button>
                          </motion.div>
                        </CardContent>

                        {/* Subtle 3D Border Effect */}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Custom Navigation */}
              <div className="flex justify-center mt-8 space-x-4">
                <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-background border-2 border-border hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300" />
                <CarouselNext className="static translate-y-0 h-12 w-12 bg-background border-2 border-border hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300" />
              </div>
            </Carousel>
          </div>

          {/* Portfolio Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">50M+</div>
              <div className="text-muted-foreground text-sm">Total Impressions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">450%</div>
              <div className="text-muted-foreground text-sm">Avg. Engagement Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">₹100Cr+</div>
              <div className="text-muted-foreground text-sm">Client Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">98%</div>
              <div className="text-muted-foreground text-sm">Campaign Success Rate</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Brand?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a customized outdoor advertising solution that fits your business goals, budget, and target audience.
              Our experts are ready to help you dominate the outdoor space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Download Brochure
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>100% Quality Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-4 w-4" />
                <span>Eco-Friendly Materials</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
