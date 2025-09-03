import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, MapPin, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const WhyWorkWithUs = () => {
  const { t } = useLanguage();
  
  const reasons = [
    {
      icon: Target,
      title: t('strategicApproach'),
      description: t('strategicApproachDesc')
    },
    {
      icon: MapPin,
      title: t('localExpertise'), 
      description: t('localExpertiseDesc')
    },
    {
      icon: Award,
      title: t('endToEndExecution'),
      description: t('endToEndExecutionDesc')
    },
    {
      icon: TrendingUp,
      title: t('alignedIncentives'),
      description: t('alignedIncentivesDesc')
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {t('whyWorkWithUs')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <Card key={index} className="section-card group text-center p-6 hover:scale-105 transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-xl flex items-center justify-center mx-auto group-hover:shadow-lg group-hover:shadow-accent/25 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="section-card p-12 rounded-2xl glow-effect">
            <h3 className="text-3xl font-serif font-bold mb-6">
              {t('readyToScale')}
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="glow-effect px-8 py-4 text-lg">
                {t('scheduleConsultation')}
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                {t('downloadPortfolio')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyWorkWithUs