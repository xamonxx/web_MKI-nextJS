import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ctaLabels, heroContent } from "@/constants/content";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { Reveal } from "@/components/sections/Reveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 md:pt-16">
      <div className="absolute inset-x-0 top-0 h-64 bg-mki-soft" />
      <div className="container relative grid items-center gap-10 pb-12 pt-4 md:pb-16 md:pt-6 lg:grid-cols-[1fr_0.92fr] lg:gap-12 xl:min-h-[calc(100vh-5rem)] xl:pb-20 xl:pt-8">
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
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 min-[420px]:grid-cols-3">
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
            <div className="animate-float-slow absolute -left-5 -top-5 hidden size-24 rounded-[2rem] bg-mki-gradient opacity-90 lg:block" />
            <div className="animate-float absolute -bottom-7 -right-7 hidden h-40 w-32 rounded-[2rem] border-8 border-orange-100 lg:block" />
            <div className="group relative overflow-hidden rounded-3xl bg-mki-soft shadow-soft">
              <Image
                src={heroContent.image}
                alt={heroContent.imageAlt}
                width={1400}
                height={933}
                priority
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105 sm:aspect-[5/4] lg:aspect-[4/5]"
              />
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-1000 group-hover:translate-x-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-mki-navy/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-5 backdrop-blur">
                <p className="text-sm font-extrabold text-mki-charcoal">{heroContent.badge}</p>
                <p className="mt-1 text-sm leading-6 text-mki-gray">{heroContent.imageAlt}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
