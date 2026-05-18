import { FeatureCard } from "@/components/cards/FeatureCard";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { features, whyChooseSection } from "@/constants/content";
import { Reveal } from "@/components/sections/Reveal";

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container">
        <SectionHeader
          eyebrow={whyChooseSection.eyebrow}
          title={whyChooseSection.title}
          description={whyChooseSection.description}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <FeatureCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
