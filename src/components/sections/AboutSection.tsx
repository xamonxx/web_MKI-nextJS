import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { aboutContent } from "@/constants/content";
import { Reveal } from "@/components/sections/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative min-h-screen w-full overflow-hidden bg-background">
      {/* Dot pattern background — adapts to light/dark mode */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-pattern-dots opacity-80" />
      {/* Orange radial glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(232,93,4,0.08)_0%,transparent_65%)]" />
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
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
                <CheckCircle2 className="size-5 shrink-0 text-mki-orange" />
                <span className="text-sm font-bold text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
