import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Store, Users, TrendingUp, Target } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const KeyAdvantages = () => {
  const { t } = useLanguage();
  
  const advantages = [
    {
      icon: Store,
      title: t('retailExpertise'),
      description: t('retailExpertiseDesc')
    },
    {
      icon: Users,
      title: t('integratedAccess'), 
      description: t('integratedAccessDesc')
    },
    {
      icon: TrendingUp,
      title: t('marketingExcellence'),
      description: t('marketingExcellenceDesc')
    },
    {
      icon: Target,
      title: t('scalableGrowth'),
      description: t('scalableGrowthDesc')
    }
  ]

  return (
    <section id="advantages" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {t('keyAdvantages')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('advantagesSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <Card key={index} className="section-card group hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-accent/25 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-serif">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default KeyAdvantages