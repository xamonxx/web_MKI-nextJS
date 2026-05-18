import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CoverageSection } from "@/components/sections/CoverageSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { GrowthPlanSection } from "@/components/sections/GrowthPlanSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnershipSection } from "@/components/sections/PartnershipSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProductionCapacitySection } from "@/components/sections/ProductionCapacitySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";

export default function Home() {
  return (
    <main id="home">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProductionCapacitySection />
      <ServicesSection />
      <PortfolioSection />
      <PartnershipSection />
      <GrowthPlanSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <CoverageSection />
      <SocialProofSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
