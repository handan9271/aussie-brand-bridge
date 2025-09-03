import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import LanguageSwitcher from "./LanguageSwitcher"

const Navigation = () => {
  const { t } = useLanguage();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-accent to-secondary"></div>
            <span className="text-xl font-serif font-semibold">{t('brandName')}</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="text-muted-foreground hover:text-accent transition-colors">{t('overview')}</a>
            <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">{t('services')}</a>
            <a href="#advantages" className="text-muted-foreground hover:text-accent transition-colors">{t('advantages')}</a>
            <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">{t('contact')}</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="secondary" className="glow-effect">
              {t('getStarted')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation