import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/sections/Reveal";
import { growthPillars, growthSection } from "@/constants/content";

export function GrowthPlanSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#f8fafc]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
        }}
      />
      <div className="container relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-mki-orange">{growthSection.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-mki-charcoal md:text-5xl">{growthSection.title}</h2>
          <p className="mt-5 text-base leading-8 text-mki-gray">{growthSection.description}</p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {growthPillars.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
            <article className="premium-card h-full p-6 hover:-translate-y-1 hover:shadow-soft">
              <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-orange-50 text-mki-orange">
                <Icon name={item.icon} className="size-5" />
              </div>
              <h3 className="mt-6 text-lg font-black text-mki-charcoal">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-mki-gray">{item.description}</p>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
