import CtaBannerSection from "../components/HomeComponents/CTABannerSection";
import HeroSection from "../components/HomeComponents/HeroSection";
import ProcessSection from "../components/HomeComponents/ProcessSection";
import ServicesSection from "../components/HomeComponents/ServicesSection";
import TestimonialsSection from "../components/HomeComponents/TestimonialsSection";
import ValuesSection from "../components/HomeComponents/ValuesSection";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaBannerSection />
    </div>
  )
}