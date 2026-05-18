import { StatCard } from "@/components/cards/StatCard";
import { stats } from "@/constants/content";
import { Reveal } from "@/components/sections/Reveal";

export function StatsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.04}>
            <StatCard item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
