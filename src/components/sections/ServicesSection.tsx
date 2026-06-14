import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { serviceSection, services } from "@/constants/content";
import { Reveal } from "@/components/sections/Reveal";
import { Aurora } from "@/components/motion/Aurora";

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      <Aurora variant="soft" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-pattern-dots opacity-70" />
      <div className="container relative z-10">
        <SectionHeader
          eyebrow={serviceSection.eyebrow}
          title={serviceSection.title}
          description={serviceSection.description}
          highlight={[3]}
        />
        <div className="mt-14 grid gap-5 [perspective:1200px] md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <ServiceCard item={item} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
