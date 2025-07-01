"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { TrendingUp, Target, DollarSign, Zap, Shield, BarChart3, PieChart, LineChart, Activity } from "lucide-react"

export default function BusinessModelPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Business Model</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive analysis of The Ad-Project's revolutionary AdTech ecosystem, market opportunity, and strategic
            growth plan.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Executive Summary */}
        <section className="mb-16">
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="h-6 w-6" />
                Executive Summary
              </CardTitle>
              <CardDescription>
                The Ad-Project is India's first AI-powered outdoor advertising technology ecosystem
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-foreground">₹12,000Cr+</div>
                  <div className="text-sm text-muted-foreground">Total Addressable Market</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-foreground">8</div>
                  <div className="text-sm text-muted-foreground">Revenue Streams</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-foreground">₹800Cr</div>
                  <div className="text-sm text-muted-foreground">5-Year Revenue Target</div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                The Ad-Project revolutionizes outdoor advertising through AI-powered campaign planning, remote billboard
                management, and real-time analytics. Our platform addresses the ₹12,000+ crore outdoor advertising
                market in India, providing unprecedented transparency, efficiency, and ROI optimization for advertisers
                while creating new revenue opportunities for media owners.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Market Opportunity */}
        <section className="mb-16">
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="h-6 w-6" />
                Market Opportunity
              </CardTitle>
              <CardDescription>
                Massive and growing market with significant digital transformation potential
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Market Size Analysis</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="text-foreground">TAM (Total Addressable Market)</span>
                      <Badge variant="secondary">₹12,000+ Crore</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="text-foreground">SAM (Serviceable Addressable Market)</span>
                      <Badge variant="secondary">₹3,600 Crore</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="text-foreground">SOM (Serviceable Obtainable Market)</span>
                      <Badge variant="secondary">₹360 Crore</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Growth Drivers</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Digital transformation of traditional outdoor advertising
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Increasing demand for measurable advertising ROI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Government push for smart city infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Rising adoption of programmatic advertising</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Value Proposition */}
        <section className="mb-16">
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="h-6 w-6" />
                Value Proposition
              </CardTitle>
              <CardDescription>
                Transforming outdoor advertising through AI-powered technology and data-driven insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Before The Ad-Project</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/30 rounded-lg border-l-4 border-muted">
                      <div className="text-sm text-muted-foreground">Manual campaign planning taking weeks</div>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg border-l-4 border-muted">
                      <div className="text-sm text-muted-foreground">No real-time performance tracking</div>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg border-l-4 border-muted">
                      <div className="text-sm text-muted-foreground">Limited inventory visibility</div>
                    </div>
                    <div className="p-3 bg-muted/30 rounded-lg border-l-4 border-muted">
                      <div className="text-sm text-muted-foreground">High operational costs</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-foreground">After The Ad-Project</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/50 rounded-lg border-l-4 border-foreground">
                      <div className="text-sm text-foreground font-medium">AI-powered campaign planning in minutes</div>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg border-l-4 border-foreground">
                      <div className="text-sm text-foreground font-medium">Real-time analytics and optimization</div>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg border-l-4 border-foreground">
                      <div className="text-sm text-foreground font-medium">Complete inventory transparency</div>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg border-l-4 border-foreground">
                      <div className="text-sm text-foreground font-medium">60% reduction in operational costs</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Revenue Model */}
        <section className="mb-16">
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <DollarSign className="h-6 w-6" />
                Revenue Model
              </CardTitle>
              <CardDescription>
                Diversified revenue streams ensuring sustainable growth and profitability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Platform Commission</h4>
                  <p className="text-sm text-muted-foreground mb-2">5-15% commission on all transactions</p>
                  <div className="text-lg font-bold text-foreground">₹200Cr/year</div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">SaaS Subscriptions</h4>
                  <p className="text-sm text-muted-foreground mb-2">Monthly/annual platform access fees</p>
                  <div className="text-lg font-bold text-foreground">₹150Cr/year</div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Data Analytics</h4>
                  <p className="text-sm text-muted-foreground mb-2">Premium insights and reporting</p>
                  <div className="text-lg font-bold text-foreground">₹100Cr/year</div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">AI Optimization</h4>
                  <p className="text-sm text-muted-foreground mb-2">Advanced AI-powered campaign optimization</p>
                  <div className="text-lg font-bold text-foreground">₹120Cr/year</div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Hardware Solutions</h4>
                  <p className="text-sm text-muted-foreground mb-2">IoT devices and digital infrastructure</p>
                  <div className="text-lg font-bold text-foreground">₹80Cr/year</div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Consulting Services</h4>
                  <p className="text-sm text-muted-foreground mb-2">Strategic advisory and implementation</p>
                  <div className="text-lg font-bold text-foreground">₹60Cr/year</div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">₹800+ Crore</div>
                <div className="text-muted-foreground">Total Annual Revenue Potential by Year 5</div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Business Canvas */}
        <section className="mb-16">
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <PieChart className="h-6 w-6" />
                Business Model Canvas
              </CardTitle>
              <CardDescription>
                Complete business model framework following the proven canvas methodology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-muted/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Key Partners</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Media owners & agencies</li>
                      <li>• Technology providers</li>
                      <li>• Government bodies</li>
                      <li>• Financial institutions</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Key Activities</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Platform development</li>
                      <li>• AI algorithm optimization</li>
                      <li>• Customer acquisition</li>
                      <li>• Data analytics</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Key Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• AI technology stack</li>
                      <li>• Engineering team</li>
                      <li>• Data infrastructure</li>
                      <li>• Brand & IP</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Value Propositions</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• AI-powered optimization</li>
                      <li>• Real-time analytics</li>
                      <li>• Cost reduction</li>
                      <li>• Transparency</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Customer Relationships</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Dedicated support</li>
                      <li>• Self-service platform</li>
                      <li>• Community building</li>
                      <li>• Co-creation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Channels</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Direct sales</li>
                      <li>• Digital marketing</li>
                      <li>• Partner networks</li>
                      <li>• Industry events</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Customer Segments</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Large enterprises</li>
                      <li>• Advertising agencies</li>
                      <li>• SME businesses</li>
                      <li>• Media owners</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Cost Structure</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Technology development</li>
                      <li>• Personnel costs</li>
                      <li>• Infrastructure</li>
                      <li>• Marketing & sales</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Revenue Streams</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Platform commissions</li>
                      <li>• SaaS subscriptions</li>
                      <li>• Data analytics</li>
                      <li>• Consulting services</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Competitive Advantage */}
        <section className="mb-16">
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Shield className="h-6 w-6" />
                Competitive Advantage
              </CardTitle>
              <CardDescription>Sustainable competitive moats that protect and enhance market position</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">First-Mover Advantage</h4>
                    <p className="text-sm text-muted-foreground">
                      India's first comprehensive AI-powered outdoor AdTech platform with 2+ years head start
                    </p>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Proprietary AI Technology</h4>
                    <p className="text-sm text-muted-foreground">
                      Advanced machine learning algorithms optimized for Indian outdoor advertising market
                    </p>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Network Effects</h4>
                    <p className="text-sm text-muted-foreground">
                      Platform becomes more valuable as more advertisers and media owners join
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Data Advantage</h4>
                    <p className="text-sm text-muted-foreground">
                      Exclusive access to comprehensive outdoor advertising performance data
                    </p>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Strategic Partnerships</h4>
                    <p className="text-sm text-muted-foreground">
                      Exclusive partnerships with major media owners and technology providers
                    </p>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Regulatory Compliance</h4>
                    <p className="text-sm text-muted-foreground">
                      Deep understanding of Indian advertising regulations and government requirements
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Financial Projections */}
        <section className="mb-16">
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <BarChart3 className="h-6 w-6" />
                Financial Projections
              </CardTitle>
              <CardDescription>
                Conservative 5-year financial outlook with detailed assumptions and scenarios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-2 text-foreground">Metric</th>
                      <th className="text-right py-3 px-2 text-foreground">Year 1</th>
                      <th className="text-right py-3 px-2 text-foreground">Year 2</th>
                      <th className="text-right py-3 px-2 text-foreground">Year 3</th>
                      <th className="text-right py-3 px-2 text-foreground">Year 4</th>
                      <th className="text-right py-3 px-2 text-foreground">Year 5</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-2">Revenue (₹Cr)</td>
                      <td className="text-right py-3 px-2">25</td>
                      <td className="text-right py-3 px-2">80</td>
                      <td className="text-right py-3 px-2">200</td>
                      <td className="text-right py-3 px-2">450</td>
                      <td className="text-right py-3 px-2">800</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-2">Gross Margin (%)</td>
                      <td className="text-right py-3 px-2">60%</td>
                      <td className="text-right py-3 px-2">65%</td>
                      <td className="text-right py-3 px-2">70%</td>
                      <td className="text-right py-3 px-2">72%</td>
                      <td className="text-right py-3 px-2">75%</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-2">EBITDA (₹Cr)</td>
                      <td className="text-right py-3 px-2">-10</td>
                      <td className="text-right py-3 px-2">15</td>
                      <td className="text-right py-3 px-2">60</td>
                      <td className="text-right py-3 px-2">180</td>
                      <td className="text-right py-3 px-2">400</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-2">EBITDA Margin (%)</td>
                      <td className="text-right py-3 px-2">-40%</td>
                      <td className="text-right py-3 px-2">19%</td>
                      <td className="text-right py-3 px-2">30%</td>
                      <td className="text-right py-3 px-2">40%</td>
                      <td className="text-right py-3 px-2">50%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2">Active Customers</td>
                      <td className="text-right py-3 px-2">500</td>
                      <td className="text-right py-3 px-2">2,000</td>
                      <td className="text-right py-3 px-2">8,000</td>
                      <td className="text-right py-3 px-2">20,000</td>
                      <td className="text-right py-3 px-2">40,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Key Assumptions</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Conservative market penetration of 3% by Year 5</li>
                  <li>• Average revenue per customer growing from ₹50K to ₹200K annually</li>
                  <li>• Customer acquisition cost decreasing from ₹25K to ₹10K</li>
                  <li>• Annual churn rate improving from 15% to 5%</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Growth Strategy */}
        <section className="mb-16">
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <LineChart className="h-6 w-6" />
                Growth Strategy
              </CardTitle>
              <CardDescription>
                Systematic 4-phase expansion plan with clear milestones and success metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-foreground mb-2">Phase 1</div>
                    <div className="text-sm text-muted-foreground">Foundation</div>
                    <div className="text-xs text-muted-foreground mt-1">Months 1-12</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-foreground mb-2">Phase 2</div>
                    <div className="text-sm text-muted-foreground">Expansion</div>
                    <div className="text-xs text-muted-foreground mt-1">Months 13-24</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-foreground mb-2">Phase 3</div>
                    <div className="text-sm text-muted-foreground">Scale</div>
                    <div className="text-xs text-muted-foreground mt-1">Months 25-36</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-foreground mb-2">Phase 4</div>
                    <div className="text-sm text-muted-foreground">Dominance</div>
                    <div className="text-xs text-muted-foreground mt-1">Months 37-60</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Phase 1: Foundation (Year 1)</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Launch MVP with core features</li>
                      <li>• Onboard 500+ initial customers</li>
                      <li>• Establish partnerships with 50+ media owners</li>
                      <li>• Achieve ₹25Cr revenue</li>
                      <li>• Build team of 100+ professionals</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Phase 2: Expansion (Year 2)</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Expand to 10 major Indian cities</li>
                      <li>• Launch advanced AI optimization features</li>
                      <li>• Scale to 2,000+ active customers</li>
                      <li>• Achieve ₹80Cr revenue</li>
                      <li>• Raise Series A funding</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Phase 3: Scale (Years 3-4)</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• National coverage across 50+ cities</li>
                      <li>• Launch international expansion</li>
                      <li>• Scale to 20,000+ customers</li>
                      <li>• Achieve ₹450Cr revenue by Year 4</li>
                      <li>• Raise Series B funding</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Phase 4: Dominance (Year 5)</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Market leadership position</li>
                      <li>• 40,000+ active customers</li>
                      <li>• ₹800Cr+ annual revenue</li>
                      <li>• IPO readiness</li>
                      <li>• Global expansion to 5+ countries</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Risk Analysis */}
        <section className="mb-16">
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Activity className="h-6 w-6" />
                Risk Analysis & Mitigation
              </CardTitle>
              <CardDescription>Comprehensive risk assessment with proactive mitigation strategies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Market Risks</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <div className="text-sm font-medium text-foreground">Economic Downturn</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Mitigation: Diversified customer base, flexible pricing models
                        </div>
                      </div>
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <div className="text-sm font-medium text-foreground">Regulatory Changes</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Mitigation: Active government engagement, compliance-first approach
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Competitive Risks</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <div className="text-sm font-medium text-foreground">New Entrants</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Mitigation: Strong IP protection, network effects, first-mover advantage
                        </div>
                      </div>
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <div className="text-sm font-medium text-foreground">Big Tech Entry</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Mitigation: Deep market specialization, strategic partnerships
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Operational Risks</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <div className="text-sm font-medium text-foreground">Technology Failures</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Mitigation: Robust infrastructure, 99.9% uptime SLA, disaster recovery
                        </div>
                      </div>
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <div className="text-sm font-medium text-foreground">Key Personnel Risk</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Mitigation: Strong retention programs, succession planning
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Financial Risks</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <div className="text-sm font-medium text-foreground">Funding Challenges</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Mitigation: Multiple funding sources, revenue-based growth
                        </div>
                      </div>
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <div className="text-sm font-medium text-foreground">Cash Flow Issues</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Mitigation: Conservative cash management, diversified revenue streams
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
