import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const CompanyOverview = () => {
  return (
    <section id="overview" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Company <span className="hero-text">Overview</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="section-card p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-accent">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-foreground/90">
                  <strong>To enable outstanding Chinese brands to successfully penetrate and thrive in the Australian market.</strong>
                </p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 section-card rounded-xl">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <p className="text-sm text-muted-foreground">Years in Australian Retail</p>
              </div>
              <div className="text-center p-6 section-card rounded-xl">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <p className="text-sm text-muted-foreground">End-to-End Solutions</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-semibold mb-4">Full-Stack Brand Growth Platform</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We are a <strong className="text-foreground">full-stack brand growth platform</strong>, dedicated to guiding China's emerging consumer brands into the Australian market.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-foreground/90"><strong>Market Strategy:</strong> Research-driven positioning and localization</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-foreground/90"><strong>Marketing Execution:</strong> KOL campaigns and viral content strategy</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-foreground/90"><strong>Channel Expansion:</strong> Access to established retail networks</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-foreground/90"><strong>Supply Chain Operations:</strong> Integrated 3PL and logistics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyOverview