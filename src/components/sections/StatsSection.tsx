import { StatCard } from "@/components/cards/StatCard";
import { stats } from "@/constants/content";
import { Reveal } from "@/components/sections/Reveal";

export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-secondary/50 py-20 md:py-24">
      <div className="absolute inset-0 z-0 pointer-events-none bg-pattern-grid opacity-60" />
      <div className="container relative z-10">
        <Reveal className="mb-12 max-w-2xl">
          <p className="eyebrow">Rekam Jejak</p>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tightest text-foreground md:text-4xl">
            Angka yang berbicara soal kapasitas
          </h2>
        </Reveal>
        <div className="grid gap-5 [perspective:1200px] sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05}>
              <StatCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
