import Image from "next/image";
import { MapPin } from "lucide-react";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Reveal } from "@/components/sections/Reveal";
import { coverageCities, coverageSection } from "@/constants/content";

export function CoverageSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
        <Reveal>
          <SectionHeader
            eyebrow={coverageSection.eyebrow}
            title={coverageSection.title}
            description={coverageSection.description}
            align="left"
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {coverageSection.highlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border bg-mki-soft p-5">
                <div className="text-3xl font-black text-mki-charcoal">{item.value}</div>
                <div className="mt-2 text-sm font-bold text-mki-gray">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-orange-100 bg-orange-50 p-5">
            <h3 className="text-base font-black text-mki-charcoal">{coverageSection.projectRecord.title}</h3>
            <p className="mt-2 text-sm leading-7 text-mki-gray">{coverageSection.projectRecord.description}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-soft">
            <Image
              src={coverageSection.image}
              alt={coverageSection.imageAlt}
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mki-navy/50 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-mki-gradient text-white">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-mki-charcoal">{coverageSection.highlights[0].value}</p>
                  <p className="text-sm text-mki-gray">{coverageSection.highlights[1].value}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 -top-4 hidden size-20 rounded-[1.75rem] bg-mki-gradient lg:block" />
        </Reveal>
      </div>
      <div className="container mt-10">
        <Reveal className="rounded-3xl border border-border bg-mki-soft p-5 md:p-7">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-xl font-black text-mki-charcoal">Daftar Kota dan Kabupaten Coverage</h3>
              <p className="mt-2 text-sm leading-7 text-mki-gray">Area project yang tercatat pada portfolio 2021-2026.</p>
            </div>
            <p className="text-sm font-extrabold text-mki-orange">{coverageCities.length} area</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {coverageCities.map((city) => (
              <span
                key={`${city.type}-${city.name}`}
                className="rounded-full border border-border bg-white px-3 py-2 text-xs font-bold text-mki-gray transition hover:-translate-y-0.5 hover:border-orange-200 hover:text-mki-orange"
              >
                {city.type} {city.name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
