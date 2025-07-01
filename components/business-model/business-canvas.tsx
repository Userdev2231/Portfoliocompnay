import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const blocks = [
  {
    title: "Key Partners",
    body: "Ad exchanges, data providers, cloud vendors, and strategic publishers that extend distribution and targeting capabilities.",
  },
  {
    title: "Key Activities",
    body: "AI-driven ad bidding, data-pipeline optimisation, campaign management, and continuous model training.",
  },
  {
    title: "Key Resources",
    body: "First-party intent data, proprietary bidding algorithms, high-throughput edge infrastructure, and senior talent.",
  },
  {
    title: "Value Proposition",
    body: "Deliver measurable ROAS within hours, not weeks. Zero-click setup, privacy-first targeting, and transparent reporting.",
  },
  {
    title: "Customer Relationships",
    body: "Dedicated success managers, self-serve dashboard, and usage-based SLAs with 99.9 % uptime guarantee.",
  },
  {
    title: "Channels",
    body: "Direct sales, partner integrations, and marketplace listings on major ad exchanges.",
  },
  {
    title: "Customer Segments",
    body: "Mid-market e-commerce brands, performance agencies, and enterprise advertisers in regulated industries.",
  },
  {
    title: "Cost Structure",
    body: "Compute & storage, data acquisition, R&D for ML models, and customer success.",
  },
  {
    title: "Revenue Streams",
    body: "Usage-based bid fees, SaaS subscriptions for advanced analytics, and white-label licensing.",
  },
]

export function BusinessCanvas() {
  return (
    <section aria-labelledby="business-canvas-heading" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <h2 id="business-canvas-heading" className="mb-8 text-center text-3xl font-semibold tracking-tight">
        {"Business-Model Canvas"}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blocks.map((block) => (
          <Card
            key={block.title}
            className={cn("border-muted/50 bg-card text-foreground transition-colors", "hover:border-muted-foreground")}
          >
            <CardHeader>
              <CardTitle className="text-base">{block.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed">{block.body}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
