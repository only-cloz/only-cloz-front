// import CtaBannerSection from "../components/HomeComponents/CTABannerSection";
import HeroSection from "../components/HomeComponents/HeroSection";
import HeroProjectSection from "../components/HomeComponents/HeroProjectSection";
// import ProcessSection from "../components/HomeComponents/ProcessSection";
// import ServicesSection from "../components/HomeComponents/ServicesSection";
import ServicesSections from "../components/HomeComponents/ServicesSections";
import TestimonialsSection from "../components/HomeComponents/TestimonialSection";
import CtaSection from "../components/HomeComponents/CtaSection";

export default function HomePage() {
    return (
        <div className="overflow-hidden">
            <HeroSection/>
            <HeroProjectSection/>
            <ServicesSections/>
            <TestimonialsSection/>
            {/*<ProcessSection />*/}
            {/*<TestimonialsSection />*/}
            {/*<CtaBannerSection/>*/}
            <CtaSection/>
        </div>
    )
}