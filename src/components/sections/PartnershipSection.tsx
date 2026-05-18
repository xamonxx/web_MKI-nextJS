"use client";

import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ctaLabels, partnerships, partnershipSection } from "@/constants/content";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function PartnershipSection() {
  return (
    <section id="partnership" className="section-padding relative min-h-screen overflow-hidden bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#0B1220",
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249, 115, 22, 0.25), transparent 70%),
            radial-gradient(circle, rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "100% 100%, 30px 30px",
          backgroundPosition: "center, 0 0",
        }}
      />
      <div className="container relative z-10">
        <SectionHeader
          eyebrow={partnershipSection.eyebrow}
          title={partnershipSection.title}
          description={partnershipSection.description}
          dark
        />
        <Tabs defaultValue={partnerships[0].id} className="mt-10">
          <div className="pb-2 sm:flex sm:justify-center">
            <TabsList className="grid w-full min-w-0 grid-cols-3 gap-1 border-white/10 bg-white/10 sm:inline-grid sm:w-auto sm:min-w-[24rem] sm:gap-2">
              {partnerships.map((item) => (
                <TabsTrigger
                  key={item.id}
                  value={item.id}
                  className="min-w-0 px-3 text-xs text-white/70 hover:text-white data-[state=active]:text-white min-[420px]:text-sm sm:px-4"
                >
                  {item.segment}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {partnerships.map((item) => (
            <TabsContent key={item.id} value={item.id}>
              <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-[#111827]/95 p-6 shadow-[0_24px_90px_rgba(232,93,4,0.16),0_0_0_1px_rgba(249,115,22,0.06)] backdrop-blur-xl md:p-10 lg:grid-cols-[0.85fr_1fr]">
                <div>
                  <div className="inline-flex rounded-full bg-mki-gradient px-4 py-2 text-xs font-extrabold uppercase text-white">
                    {item.label}
                  </div>
                  <h3 className="mt-6 text-3xl font-black leading-tight text-white md:text-5xl">{item.title}</h3>
                  <p className="mt-5 text-base leading-8 text-white/70">{item.description}</p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {item.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                        <div className="text-2xl font-black text-white">{metric.value}</div>
                        <div className="mt-1 text-xs font-bold uppercase leading-5 tracking-wide text-white/60">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="mt-8" size="lg">
                    <a href={createWhatsAppLink({ category: item.label }, { recipient: "partnership" })} target="_blank" rel="noreferrer">
                      <MessageCircle className="size-5" />
                      {ctaLabels.partnership}
                    </a>
                  </Button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {item.points.map((point) => (
                    <div key={point} className="rounded-2xl border border-white/10 bg-white p-5 shadow-soft">
                      <CheckCircle2 className="mb-5 size-6 text-mki-orange" />
                      <p className="text-sm font-bold leading-6 text-mki-charcoal">{point}</p>
                    </div>
                  ))}
                  <div className="rounded-2xl border border-white/10 bg-white p-5 shadow-soft sm:col-span-2">
                    <p className="text-sm font-black uppercase tracking-[0.14em] text-mki-orange">Output Kemitraan</p>
                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                      {item.outcomes.map((outcome) => (
                        <p key={outcome} className="text-sm font-semibold leading-6 text-mki-gray">
                          {outcome}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
