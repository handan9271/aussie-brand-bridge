import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Megaphone, ShoppingCart, Settings } from "lucide-react"

const ServicePortfolio = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Brand Incubation & Localization",
      items: [
        "Market research & consumer insights",
        "Product positioning & localized packaging",
        "Regulatory compliance & import facilitation"
      ]
    },
    {
      icon: Megaphone,
      title: "Integrated Marketing & Promotion",
      items: [
        "KOL/KOC engagement & paid social media campaigns",
        "Pop-up events & trade show execution", 
        "IP collaborations & viral content strategy"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Channel Expansion",
      items: [
        "Chinese supermarkets, IGA, Foodworks",
        "Convenience stores, F&B, and independent retailers"
      ]
    },
    {
      icon: Settings,
      title: "Operational Support", 
      items: [
        "3PL warehousing, logistics assessment & coordination",
        "Local company formation & tax advisory",
        "HR guidance and team setup support"
      ]
    }
  ]

  return (
    <section id="services" className="py-24 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Service <span className="hero-text">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed to take your brand from concept to market leadership in Australia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="section-card group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent/25 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicePortfolio