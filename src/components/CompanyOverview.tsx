import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"

const CompanyOverview = () => {
  const { t } = useLanguage();
  
  return (
    <section id="overview" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {t('companyOverview')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="section-card p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-accent">{t('ourMission')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-foreground/90">
                  <strong>{t('missionStatement')}</strong>
                </p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 section-card rounded-xl">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <p className="text-sm text-muted-foreground">{t('yearsRetail')}</p>
              </div>
              <div className="text-center p-6 section-card rounded-xl">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <p className="text-sm text-muted-foreground">{t('endToEndSolutions')}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-semibold mb-4">{t('fullStackPlatform')}</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t('platformDescription')}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-foreground/90"><strong>{t('marketStrategy')}:</strong> {t('marketStrategyDesc')}</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-foreground/90"><strong>{t('marketingExecution')}:</strong> {t('marketingExecutionDesc')}</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-foreground/90"><strong>{t('channelExpansion')}:</strong> {t('channelExpansionDesc')}</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-foreground/90"><strong>{t('supplyChainOps')}:</strong> {t('supplyChainOpsDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyOverview