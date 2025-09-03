import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle } from "lucide-react"

const DifferentiationTable = () => {
  const comparisons = [
    {
      dimension: "Scope of Service",
      typical: "Ads & influencer campaigns only",
      ours: "End-to-end: market research → strategy → marketing → channels → logistics & sales"
    },
    {
      dimension: "Value Focus",
      typical: "Exposure-driven",
      ours: "Performance-driven growth with measurable business outcomes"
    },
    {
      dimension: "Channel Access",
      typical: "Limited retail network",
      ours: "Over 10 years in Australian retail: Chinese supermarkets, convenience stores, IGA, Coles Local"
    },
    {
      dimension: "Supply Chain Support",
      typical: "None",
      ours: "Integrated 3PL cold storage, order fulfillment, and last-mile delivery"
    },
    {
      dimension: "Partnership Model",
      typical: "External vendor, easily replaced",
      ours: "Embedded partner: your local Marketing & Channel team, aligned for shared growth"
    },
    {
      dimension: "Revenue Model",
      typical: "Advertising fees",
      ours: "Service fee + sales commission + channel rebates + value-added services"
    }
  ]

  return (
    <section className="py-24 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Our <span className="hero-text">Differentiation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We move beyond "visibility" — we deliver <strong className="text-accent">tangible commercial results</strong>.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-6 text-center">
                <h3 className="font-serif font-semibold text-xl">Dimension</h3>
              </div>
              <div className="p-6 text-center bg-muted/20 rounded-xl">
                <h3 className="font-serif font-semibold text-xl flex items-center justify-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" />
                  Typical Overseas Agency
                </h3>
              </div>
              <div className="p-6 text-center bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl border border-accent/20">
                <h3 className="font-serif font-semibold text-xl flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  Our Approach – Brand Growth Platform
                </h3>
              </div>
            </div>

            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 mb-4">
                <div className="p-6 section-card rounded-xl">
                  <h4 className="font-semibold text-accent">{item.dimension}</h4>
                </div>
                <div className="p-6 bg-muted/10 rounded-xl border border-border/50">
                  <p className="text-muted-foreground">{item.typical}</p>
                </div>
                <div className="p-6 section-card rounded-xl glow-effect">
                  <p className="text-foreground/90 font-medium">{item.ours}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-6">
            {comparisons.map((item, index) => (
              <Card key={index} className="section-card">
                <CardHeader>
                  <CardTitle className="text-accent">{item.dimension}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted/20 rounded-lg">
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Typical Agency:</h4>
                    <p className="text-sm">{item.typical}</p>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <h4 className="font-medium text-sm text-accent mb-2">Our Approach:</h4>
                    <p className="text-sm font-medium">{item.ours}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DifferentiationTable