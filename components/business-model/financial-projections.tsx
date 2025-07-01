import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ProjectionRow = {
  year: string
  revenue: string
  grossMargin: string
  ebitda: string
}

const data: ProjectionRow[] = [
  { year: "FY 24", revenue: "₹12 Cr", grossMargin: "55 %", ebitda: "₹-3 Cr" },
  { year: "FY 25", revenue: "₹38 Cr", grossMargin: "58 %", ebitda: "₹5 Cr" },
  { year: "FY 26", revenue: "₹110 Cr", grossMargin: "60 %", ebitda: "₹28 Cr" },
  { year: "FY 27", revenue: "₹270 Cr", grossMargin: "62 %", ebitda: "₹90 Cr" },
  { year: "FY 28", revenue: "₹520 Cr", grossMargin: "64 %", ebitda: "₹210 Cr" },
]

export function FinancialProjections() {
  return (
    <section aria-labelledby="financial-projections-heading" className="mx-auto mt-14 max-w-5xl px-4 sm:px-6 lg:px-8">
      <h2 id="financial-projections-heading" className="mb-8 text-center text-3xl font-semibold tracking-tight">
        {"Five-Year Financial Outlook"}
      </h2>

      <Card className="overflow-x-auto">
        <CardHeader>
          <CardTitle className="sr-only">{"Projection table"}</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="min-w-full text-sm">
            <thead className="bg-muted/50 text-muted-foreground">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Year</th>
                <th className="px-4 py-3 text-left font-medium">Revenue</th>
                <th className="px-4 py-3 text-left font-medium">Gross&nbsp;Margin</th>
                <th className="px-4 py-3 text-left font-medium">EBITDA</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={row.year} className={idx % 2 ? "bg-muted/20" : undefined}>
                  <td className="whitespace-nowrap px-4 py-3">{row.year}</td>
                  <td className="whitespace-nowrap px-4 py-3">{row.revenue}</td>
                  <td className="whitespace-nowrap px-4 py-3">{row.grossMargin}</td>
                  <td className="whitespace-nowrap px-4 py-3">{row.ebitda}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </section>
  )
}
