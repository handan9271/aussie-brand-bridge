import { useLanguage } from "@/contexts/LanguageContext";
const Footer = () => {
  const {
    t
  } = useLanguage();
  return <footer id="contact" className="bg-gradient-to-t from-background via-muted/10 to-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-accent to-secondary"></div>
              <span className="text-xl font-serif font-semibold">{t('brandName')}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t('footerDescription')}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">{t('servicesTitle')}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">{t('brandIncubationLink')}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{t('marketingPromotionLink')}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{t('channelExpansionLink')}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{t('operationalSupportLink')}</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">{t('companyTitle')}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#overview" className="hover:text-accent transition-colors">{t('aboutUs')}</a></li>
              <li><a href="#advantages" className="hover:text-accent transition-colors">{t('ourAdvantages')}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{t('successStories')}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{t('careers')}</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">{t('contactTitle')}</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>{t('sydneyAustralia')}</p>
              
              <p className="text-accent">hello@brandbridge.com.au</p>
              
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              {t('copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                {t('privacyPolicy')}
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                {t('termsOfService')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;