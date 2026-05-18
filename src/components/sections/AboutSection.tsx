import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { aboutContent } from "@/constants/content";
import { Reveal } from "@/components/sections/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative min-h-screen w-full overflow-hidden bg-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "white",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
            radial-gradient(circle at 50% 60%, rgba(232,93,4,0.1) 0%, rgba(248,250,252,0.72) 42%, transparent 72%)
          `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      />
      <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-[0.92fr_1fr]">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl shadow-soft">
            <Image
              src={aboutContent.image}
              alt={aboutContent.imageAlt}
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
              loading="lazy"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeader
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
            description={aboutContent.description}
            align="left"
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {aboutContent.highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm">
                <CheckCircle2 className="size-5 shrink-0 text-mki-orange" />
                <span className="text-sm font-bold text-mki-charcoal">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
