import { Button } from "@/components/ui/button"
import heroImage from "@/assets/hero-bg.jpg"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80"></div>
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Global business connection between China and Australia" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent font-medium mb-4 tracking-wider uppercase text-sm">Full-Stack Brand Growth Platform</p>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            We create{" "}
            <span className="hero-text">
              Market Success
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-light">
            Dedicated to guiding China's emerging consumer brands into the Australian market
          </p>
          
          <p className="text-lg text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Unlike traditional overseas marketing providers, we deliver an <strong>integrated solution</strong>—covering 
            market strategy, marketing execution, channel expansion, and supply chain operations—to support both 
            market entry and scalable, sustainable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="glow-effect px-8 py-4 text-lg">
              Explore Our Solutions
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              View Success Stories
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero