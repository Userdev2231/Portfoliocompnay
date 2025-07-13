"use client"

import type React from "react"
import { useState } from "react"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Lightbulb, Award, Loader2, CheckCircle, Mail, Phone, MapPin } from "lucide-react"
import { supabase, type ApplicationData, logSupabaseError } from "@/lib/supabase"

export default function AboutPage() {
  const [formData, setFormData] = useState<ApplicationData>({
    name: "",
    email: "",
    phone: "",
    location: "",
    contribution: "",
    availability: "",
    skills: "",
    expertise: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (field: keyof ApplicationData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError("") // Clear error when user starts typing
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Validate required fields
      const requiredFields: (keyof ApplicationData)[] = [
        "name",
        "email",
        "phone",
        "location",
        "contribution",
        "availability",
        "skills",
        "expertise",
      ]

      for (const field of requiredFields) {
        if (!formData[field]?.trim()) {
          throw new Error(`Please fill in the ${field} field.`)
        }
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address.")
      }

      const { error: supabaseError } = await supabase.from("applications").insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim(),
          location: formData.location.trim(),
          contribution: formData.contribution,
          availability: formData.availability,
          skills: formData.skills.trim(),
          expertise: formData.expertise.trim(),
          status: "pending",
        },
      ])

      if (supabaseError) {
        logSupabaseError(supabaseError)
        throw new Error(supabaseError.message || "Failed to submit application. Please try again.")
      }

      setIsSubmitted(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        contribution: "",
        availability: "",
        skills: "",
        expertise: "",
      })
    } catch (err) {
      console.error("Form submission error:", err)
      setError(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const founders = [
    {
      name: "Goutam P",
      role: "Co-Founder & CTO",
      description:
        "Technical architect specializing in AI/ML, geospatial systems, and scalable infrastructure. Drives the technological innovation at The Ad-Project.",
      skills: ["AI/ML", "Geospatial Tech", "System Architecture", "Full-Stack Development"],
    },
    {
      name: "Zeeshan M",
      role: "Co-Founder & CEO",
      description:
        "Visionary leader with expertise in AI and AdTech innovation. Passionate about transforming outdoor advertising through cutting-edge technology.",
      skills: ["Business Strategy", "Product Vision", "Team Leadership"],
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in outdoor advertising with cutting-edge technology.",
    },
    {
      icon: Users,
      title: "Impact Driven",
      description: "Every solution we create is designed to deliver measurable results and real business value.",
    },
    {
      icon: Lightbulb,
      title: "People Centered",
      description: "We believe in building a team where everyone can learn, grow, and make a meaningful impact.",
    },
    {
      icon: Award,
      title: "Future Focused",
      description: "We're building the next generation of advertising technology that will shape the industry.",
    },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="flex flex-col items-center justify-center pt-24 px-4">
          <div className="max-w-md text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for your interest in joining The Ad-Project. We've received your application and will review it
              carefully. Our team will get back to you within 3-5 business days.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="w-full">
              Submit Another Application
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                The Ad-Project
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Founded by Goutam P and Zeeshan M, we're a small but dedicated team on a mission to 
              revolutionize outdoor advertising in India. With a sharp focus on AI, AR, geospatial tools, 
              and next-gen tech, we're building the future of ad-tech. We're also passionate about hunting talent across India — 
              not based on fancy degrees or past experience, but on raw eagerness to learn, ambition, and the drive to build something impactful.
            </p>
            <Badge variant="outline" className="text-lg px-4 py-2">
              Future Unicorn Journey
            </Badge>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Founders</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Two passionate entrepreneurs with a shared vision to transform the advertising industry
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {founders.map((founder, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted overflow-hidden">
                      <img
                        src="/placeholder.svg?height=200&width=200"
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl">{founder.name}</CardTitle>
                    <CardDescription className="text-lg font-medium">{founder.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{founder.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {founder.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at The Ad-Project
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card key={index} className="text-center h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
              <p className="text-muted-foreground">
                We're looking for passionate talent to join us on this future unicorn journey. Fill out the form below
                to get started.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Application Form</CardTitle>
                <CardDescription>Tell us about yourself and how you'd like to contribute</CardDescription>
              </CardHeader>
              <CardContent>
                {error && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone and Location */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        placeholder="City, State, Country"
                        required
                      />
                    </div>
                  </div>

                  {/* Contribution and Availability */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contribution">Contribution *</Label>
                      <Select
                        value={formData.contribution}
                        onValueChange={(value) => handleInputChange("contribution", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="How would you like to contribute?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="co-founder">Co-Founder</SelectItem>
                          <SelectItem value="partner">Partner</SelectItem>
                          <SelectItem value="collaboration">Collaboration</SelectItem>
                          <SelectItem value="team-member">Team Member</SelectItem>
                          <SelectItem value="consultant">Consultant</SelectItem>
                          <SelectItem value="advisor">Advisor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="availability">Availability *</Label>
                      <Select
                        value={formData.availability}
                        onValueChange={(value) => handleInputChange("availability", value)}
                        required
                      >
                        <SelectTrigger>
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
                  </div>

                  {/* Skills */}
                  <div>
                    <Label htmlFor="skills">Skills *</Label>
                    <Textarea
                      id="skills"
                      value={formData.skills}
                      onChange={(e) => handleInputChange("skills", e.target.value)}
                      placeholder="List your key skills and technologies..."
                      rows={3}
                      required
                    />
                  </div>

                  {/* Expertise */}
                  <div>
                    <Label htmlFor="expertise">Expertise & Experience *</Label>
                    <Textarea
                      id="expertise"
                      value={formData.expertise}
                      onChange={(e) => handleInputChange("expertise", e.target.value)}
                      placeholder="Describe your expertise, experience, and what you can bring to The Ad-Project..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-muted-foreground">Have questions? We'd love to hear from you.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">theadproject01@gmail.com</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">+91 80508 53225</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">Bangalore,Belagavi, India</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
