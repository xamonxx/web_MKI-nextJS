import { ArrowRight, CheckCircle2, Factory, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ctaLabels, heroContent } from "@/constants/content";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { Reveal } from "@/components/sections/Reveal";

export function HeroSection() {
  const executionPoints = [
    "Workshop aktif lintas area",
    "Alur produksi dan instalasi terstruktur",
    "Quality control sampai final checking",
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-16 md:pt-16">
      <div className="absolute inset-x-0 top-0 h-72 bg-mki-soft" />
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />
      <div className="container relative grid items-center gap-10 pb-12 pt-6 md:pb-16 md:pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:min-h-[calc(100vh-5rem)] xl:pb-20 xl:pt-10">
        <Reveal>
          <div>
            <Badge>{heroContent.badge}</Badge>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-tight text-mki-charcoal sm:text-5xl lg:text-6xl 2xl:text-7xl">
              {heroContent.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-mki-gray md:text-lg">{heroContent.description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href={createWhatsAppLink()} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-5" />
                  {ctaLabels.consult}
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                <a href="#portfolio">
                  {ctaLabels.portfolio}
                  <ArrowRight className="size-5" />
                </a>
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 min-[420px]:grid-cols-3">
              {heroContent.miniStats.map((item, index) => (
                <div
                  key={item.label}
                  className="animate-float rounded-2xl border border-border bg-white p-4 shadow-sm"
                  style={{ animationDelay: `${index * 0.18}s` }}
                >
                  <div className="text-2xl font-black text-mki-charcoal">{item.value}</div>
                  <div className="mt-1 text-xs font-bold text-mki-gray">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden size-24 rounded-[2rem] bg-mki-gradient lg:block" />
            <div className="absolute -bottom-5 -right-5 hidden h-36 w-28 rounded-[2rem] border-8 border-orange-100 lg:block" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-5 shadow-soft sm:p-7">
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-orange-50 to-transparent" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-mki-orange">Eksekusi Terukur</p>
                    <h2 className="mt-3 text-2xl font-black leading-tight text-mki-charcoal sm:text-3xl">
                      Sistem produksi untuk project interior skala besar
                    </h2>
                  </div>
                  <div className="hidden size-14 shrink-0 items-center justify-center rounded-2xl bg-mki-gradient text-white sm:flex">
                    <Factory className="size-7" />
                  </div>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-border bg-mki-soft p-4">
                    <div className="text-2xl font-black text-mki-charcoal">2.690m</div>
                    <p className="mt-1 text-xs font-bold leading-5 text-mki-gray">Kapasitas / bulan</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-mki-soft p-4">
                    <div className="text-2xl font-black text-mki-charcoal">23</div>
                    <p className="mt-1 text-xs font-bold leading-5 text-mki-gray">Workshop aktif</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-mki-soft p-4">
                    <div className="text-2xl font-black text-mki-charcoal">156</div>
                    <p className="mt-1 text-xs font-bold leading-5 text-mki-gray">Personel WS</p>
                  </div>
                </div>

                <div className="mt-7 grid gap-3">
                  {executionPoints.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm">
                      <CheckCircle2 className="size-5 shrink-0 text-mki-orange" />
                      <span className="text-sm font-bold text-mki-charcoal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
