const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-t from-background via-muted/10 to-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-accent to-secondary"></div>
              <span className="text-xl font-serif font-semibold">BrandBridge</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your trusted partner for entering and scaling in the Australian market.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Brand Incubation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Marketing & Promotion</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Channel Expansion</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Operational Support</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#overview" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#advantages" className="hover:text-accent transition-colors">Our Advantages</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>Sydney, Australia</p>
              <p>Melbourne, Australia</p>
              <p className="text-accent">hello@brandbridge.com</p>
              <p className="text-accent">+61 (0) 2 1234 5678</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 BrandBridge. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer