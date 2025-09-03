import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const DifferentiationTable = () => {
  const { t } = useLanguage();
  
  const comparisons = [
    {
      dimension: t('scopeOfService'),
      typical: t('scopeTypical'),
      ours: t('scopeOurs')
    },
    {
      dimension: t('valueFocus'),
      typical: t('valueFocusTypical'),
      ours: t('valueFocusOurs')
    },
    {
      dimension: t('channelAccess'),
      typical: t('channelAccessTypical'),
      ours: t('channelAccessOurs')
    },
    {
      dimension: t('supplyChainSupport'),
      typical: t('supplyChainSupportTypical'),
      ours: t('supplyChainSupportOurs')
    },
    {
      dimension: t('partnershipModel'),
      typical: t('partnershipModelTypical'),
      ours: t('partnershipModelOurs')
    },
    {
      dimension: t('revenueModel'),
      typical: t('revenueModelTypical'),
      ours: t('revenueModelOurs')
    }
  ]

  return (
    <section className="py-24 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {t('ourDifferentiation')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('differentiationSubtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-6 text-center">
                <h3 className="font-serif font-semibold text-xl">{t('dimension')}</h3>
              </div>
              <div className="p-6 text-center bg-muted/20 rounded-xl">
                <h3 className="font-serif font-semibold text-xl flex items-center justify-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" />
                  {t('typicalAgency')}
                </h3>
              </div>
              <div className="p-6 text-center bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl border border-accent/20">
                <h3 className="font-serif font-semibold text-xl flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  {t('ourApproach')}
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
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">{t('typicalAgencyMobile')}</h4>
                    <p className="text-sm">{item.typical}</p>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <h4 className="font-medium text-sm text-accent mb-2">{t('ourApproachMobile')}</h4>
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