"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Navigation } from "@/components/navigation"
import {
  Target,
  Rocket,
  Brain,
  Heart,
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle,
  Building,
  Handshake,
  Crown,
  UserPlus,
} from "lucide-react"

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    skills: "",
    portfolio: "",
    linkedin: "",
    github: "",
    role: "",
    message: "",
    availability: "",
    expectations: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const founders = [
    {
      name: "Goutam P",
      role: "Co-Founder & CEO",
      description:
        "Visionary leader driving the future of outdoor advertising with cutting-edge technology and strategic innovation.",
      expertise: ["Strategic Planning", "Business Development", "Team Leadership", "Market Analysis"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Zeeshan M",
      role: "Co-Founder & CTO",
      description:
        "Technology architect building scalable AI and AR solutions that transform traditional advertising landscapes.",
      expertise: ["AI/ML Development", "AR/VR Technology", "System Architecture", "Product Innovation"],
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const opportunities = [
    {
      icon: Crown,
      title: "Co-Founder",
      description: "Join as an equity partner and help shape the company's future direction",
      benefits: ["Equity Ownership", "Strategic Decision Making", "Leadership Role", "High Growth Potential"],
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "Collaborate with us on strategic initiatives and business development",
      benefits: ["Revenue Sharing", "Joint Ventures", "Market Expansion", "Resource Sharing"],
    },
    {
      icon: Building,
      title: "Collaboration",
      description: "Work together on specific projects and innovative solutions",
      benefits: ["Project-based Work", "Skill Development", "Network Building", "Portfolio Growth"],
    },
    {
      icon: UserPlus,
      title: "Team Member",
      description: "Join our core team and be part of the unicorn journey",
      benefits: ["Competitive Salary", "Stock Options", "Learning Opportunities", "Career Growth"],
    },
  ]

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push boundaries with AI, AR, and cutting-edge technology to revolutionize outdoor advertising.",
    },
    {
      icon: Target,
      title: "Impact Driven",
      description: "Every campaign we create is designed to deliver measurable results and real business value.",
    },
    {
      icon: Heart,
      title: "People Centered",
      description: "We believe in building a team where everyone can learn, grow, and make a meaningful impact.",
    },
    {
      icon: Rocket,
      title: "Future Focused",
      description: "We're not just building a company; we're creating the future of advertising technology.",
    },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-16 min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6 p-8"
          >
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Application Submitted!</h1>
            <p className="text-muted-foreground max-w-md">
              Thank you for your interest in joining The Ad-Project. We'll review your application and get back to you
              within 48 hours.
            </p>
            <Button onClick={() => window.location.reload()} className="mt-6">
              Submit Another Application
            </Button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              About The Ad-Project
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Building the Future of
              <span className="block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Outdoor Advertising
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The Ad-Project was founded by Goutam P and Zeeshan M — a small but dedicated team on a mission to
              revolutionize outdoor advertising in India. We're building the future of ad-tech with AI, AR, geospatial
              tools, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Founders</h2>
            <p className="text-muted-foreground text-lg">
              The visionary minds behind The Ad-Project's revolutionary approach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                        <img
                          src={founder.image || "/placeholder.svg"}
                          alt={founder.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{founder.name}</h3>
                        <p className="text-muted-foreground font-medium mb-4">{founder.role}</p>
                        <p className="text-muted-foreground leading-relaxed mb-6">{founder.description}</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {founder.expertise.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join Our Journey</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Right now, we're looking for passionate talent to join us on this future unicorn journey — whether you're
              into tech, innovation, design, sales, or marketing. If you're eager to learn, grow, and make an impact, we
              want you on board.
            </p>
          </motion.div>

          {/* Opportunities */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                      <opportunity.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{opportunity.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{opportunity.description}</p>
                    <div className="space-y-2">
                      {opportunity.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                          <span className="text-xs text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Application Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-foreground">Apply for Collaboration</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Tell us about yourself and how you'd like to contribute to The Ad-Project
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-foreground">
                        Location
                      </Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="City, State"
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  {/* Role Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-foreground">
                      Interested Role *
                    </Label>
                    <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select your preferred role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="co-founder">Co-Founder</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="team-member">Team Member</SelectItem>
                        <SelectItem value="intern">Internship</SelectItem>
                        <SelectItem value="advisor">Advisor/Mentor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-foreground">
                      Experience Level
                    </Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => handleInputChange("experience", value)}
                    >
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student/Fresh Graduate</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills" className="text-foreground">
                      Skills & Expertise *
                    </Label>
                    <Textarea
                      id="skills"
                      value={formData.skills}
                      onChange={(e) => handleInputChange("skills", e.target.value)}
                      placeholder="List your key skills, technologies, and areas of expertise..."
                      required
                      className="bg-background/50 min-h-[100px]"
                    />
                  </div>

                  {/* Links */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="portfolio" className="text-foreground">
                        Portfolio/Website
                      </Label>
                      <Input
                        id="portfolio"
                        value={formData.portfolio}
                        onChange={(e) => handleInputChange("portfolio", e.target.value)}
                        placeholder="https://yourportfolio.com"
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin" className="text-foreground">
                        LinkedIn Profile
                      </Label>
                      <Input
                        id="linkedin"
                        value={formData.linkedin}
                        onChange={(e) => handleInputChange("linkedin", e.target.value)}
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="github" className="text-foreground">
                      GitHub Profile (for tech roles)
                    </Label>
                    <Input
                      id="github"
                      value={formData.github}
                      onChange={(e) => handleInputChange("github", e.target.value)}
                      placeholder="https://github.com/yourusername"
                      className="bg-background/50"
                    />
                  </div>

                  {/* Availability */}
                  <div className="space-y-2">
                    <Label htmlFor="availability" className="text-foreground">
                      Availability
                    </Label>
                    <Select
                      value={formData.availability}
                      onValueChange={(value) => handleInputChange("availability", value)}
                    >
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="When can you start?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediately">Immediately</SelectItem>
                        <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="2-months">Within 2 months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Why do you want to join The Ad-Project? *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your motivation, what you can contribute, and why you're excited about this opportunity..."
                      required
                      className="bg-background/50 min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expectations" className="text-foreground">
                      Expectations & Goals
                    </Label>
                    <Textarea
                      id="expectations"
                      value={formData.expectations}
                      onChange={(e) => handleInputChange("expectations", e.target.value)}
                      placeholder="What are your expectations from this role? What do you hope to achieve?"
                      className="bg-background/50 min-h-[80px]"
                    />
                  </div>

                  <Separator />

                  <Button type="submit" className="w-full py-6 text-lg font-semibold" disabled={isLoading}>
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                        <span>Submitting Application...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Submit Application</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
            <h2 className="text-2xl font-bold text-foreground mb-4">Have Questions?</h2>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out to us directly for any questions about opportunities or collaborations.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>careers@theadproject.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
