import { ShieldCheck, Cpu, Network, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const advantages = [
  {
    icon: <Cpu className="h-5 w-5" aria-hidden="true" />,
    title: "AI-First Platform",
    desc: "Real-time deep-learning bidder that self-optimises every 30 minutes, out-performing manual rule-based DSPs.",
  },
  {
    icon: <Network className="h-5 w-5" aria-hidden="true" />,
    title: "Data Network Effects",
    desc: "Cross-campaign learnings compound over time, raising baseline performance for every new client.",
  },
  {
    icon: <TrendingUp className="h-5 w-5" aria-hidden="true" />,
    title: "Usage-Based Pricing",
    desc: "Aligns cost with ROI, removing adoption friction and accelerating expansion inside customer accounts.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" aria-hidden="true" />,
    title: "Privacy-First Architecture",
    desc: "Edge computation & on-device inference minimise data movement, keeping brands compliant world-wide.",
  },
]

export function CompetitiveAdvantage() {
  return (
    <section aria-labelledby="competitive-advantage-heading" className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
      <h2 id="competitive-advantage-heading" className="mb-8 text-center text-3xl font-semibold tracking-tight">
        {"Our Competitive Edge"}
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {advantages.map((adv) => (
          <Card
            key={adv.title}
            className="flex h-full flex-col border-muted/50 bg-card text-foreground transition-colors hover:border-muted-foreground"
          >
            <CardHeader className="flex flex-row items-start gap-3">
              {adv.icon}
              <CardTitle className="text-base">{adv.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-6 text-sm leading-relaxed">{adv.desc}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
