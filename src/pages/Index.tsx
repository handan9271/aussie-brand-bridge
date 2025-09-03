import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import CompanyOverview from "@/components/CompanyOverview"
import DifferentiationTable from "@/components/DifferentiationTable"
import KeyAdvantages from "@/components/KeyAdvantages"
import ServicePortfolio from "@/components/ServicePortfolio"
import WhyWorkWithUs from "@/components/WhyWorkWithUs"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CompanyOverview />
      <DifferentiationTable />
      <KeyAdvantages />
      <ServicePortfolio />
      <WhyWorkWithUs />
      <Footer />
    </div>
  );
};

export default Index;
