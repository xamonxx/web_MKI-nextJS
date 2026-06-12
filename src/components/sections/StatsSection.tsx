import { StatCard } from "@/components/cards/StatCard";
import { stats } from "@/constants/content";
import { Reveal } from "@/components/sections/Reveal";

export function StatsSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none bg-pattern-grid opacity-70" />
      <div className="container relative z-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.04}>
            <StatCard item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
