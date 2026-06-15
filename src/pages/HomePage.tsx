import CtaBannerSection from "../components/HomeComponents/CTABannerSection";
import HeroSection from "../components/HomeComponents/HeroSection";
import LogosMarqueeSection from "../components/HomeComponents/LogosMarqueeSection";
import ProcessSection from "../components/HomeComponents/ProcessSection";
import ServicesSection from "../components/HomeComponents/ServicesSection";
import StatsSection from "../components/HomeComponents/StatsSection";
import TestimonialsSection from "../components/HomeComponents/TestimonialsSection";
import ValuesSection from "../components/HomeComponents/ValuesSection";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <LogosMarqueeSection />
      <StatsSection />
      <ServicesSection />
      <ValuesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaBannerSection />
    </div>
  )
}