import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/sections/Reveal";
import { growthPillars, growthSection } from "@/constants/content";

export function GrowthPlanSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none bg-pattern-grid-sm opacity-50" />
      <div className="container relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{growthSection.eyebrow}</span>
          <h2 className="mt-6 font-display text-[2rem] font-semibold leading-[1.1] tracking-tightest text-foreground md:text-5xl">
            {growthSection.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground">{growthSection.description}</p>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {growthPillars.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-[1.4rem] border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-mki-orange/40">
                <span className="absolute right-5 top-5 font-display text-4xl font-semibold italic text-border transition-colors duration-500 group-hover:text-mki-orange/25">
                  0{index + 1}
                </span>
                <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-mki-orange/10 text-mki-orange transition-all duration-500 group-hover:bg-mki-gradient group-hover:text-white group-hover:shadow-glow">
                  <Icon name={item.icon} className="size-5" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
