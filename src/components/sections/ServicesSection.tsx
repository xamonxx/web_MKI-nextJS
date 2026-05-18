import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { serviceSection, services } from "@/constants/content";
import { Reveal } from "@/components/sections/Reveal";

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        <SectionHeader eyebrow={serviceSection.eyebrow} title={serviceSection.title} description={serviceSection.description} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <ServiceCard item={item} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
