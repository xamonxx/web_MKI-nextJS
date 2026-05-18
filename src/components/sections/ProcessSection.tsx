import {
  BadgeCheck,
  Factory,
  FileCheck2,
  FileText,
  Handshake,
  MapPin,
  MessageCircle,
  PencilRuler,
  Ruler,
  SearchCheck,
} from "lucide-react";
import { processSection, processSteps } from "@/constants/content";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { cn } from "@/lib/utils";

const processIcons = [
  MessageCircle,
  MapPin,
  Ruler,
  PencilRuler,
  FileText,
  Factory,
  BadgeCheck,
  FileCheck2,
  SearchCheck,
  Handshake,
];

export function ProcessSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-mki-soft/50">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-mki-orange/5 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-mki-red/5 blur-[100px]" />

      <div className="container relative z-10">
        <SectionHeader eyebrow={processSection.eyebrow} title={processSection.title} description={processSection.description} />
        
        <div className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:gap-6 lg:grid-cols-5">
          {processSteps.map((item, index) => {
            const StepIcon = processIcons[index] ?? BadgeCheck;

            return (
            <div 
              key={item.step} 
              className={cn(
                "group relative flex min-h-[140px] md:min-h-[180px] flex-col justify-between overflow-hidden rounded-3xl bg-white p-5 md:p-6 shadow-sm border border-border/50",
                "transition-all duration-500 hover:-translate-y-1 hover:shadow-soft hover:border-mki-orange/30"
              )}
            >
              {/* Step icon watermark */}
              <StepIcon className="pointer-events-none absolute right-5 top-5 size-16 text-mki-orange/[0.06] transition-all duration-700 group-hover:rotate-3 group-hover:scale-110 group-hover:text-mki-orange/10 md:size-20" />

              {/* Giant background number */}
              <div className="pointer-events-none absolute -bottom-4 -right-1 select-none text-[80px] font-black leading-none text-slate-50 transition-all duration-700 group-hover:scale-110 group-hover:text-mki-orange/5 md:text-[100px]">
                {item.step}
              </div>

              <div className="relative z-10 flex h-full flex-col">
                {/* Step Header */}
                <div className="mb-4 flex items-center justify-between md:mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-mki-soft text-sm font-black text-mki-charcoal transition-all duration-500 group-hover:-rotate-3 group-hover:bg-mki-gradient group-hover:text-white group-hover:shadow-glow md:h-12 md:w-12 md:text-base">
                    {item.step}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="mt-auto text-sm font-extrabold leading-snug text-mki-charcoal transition-colors duration-300 group-hover:text-mki-orange md:text-base md:leading-relaxed">
                  {item.title}
                </h3>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
