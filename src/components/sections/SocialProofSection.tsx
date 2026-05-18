import Image from "next/image";
import { clientLogos, socialProofSection } from "@/constants/content";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { cn } from "@/lib/utils";

export function SocialProofSection() {
  return (
    <section className="section-padding bg-mki-soft">
      <div className="container">
        <SectionHeader
          eyebrow={socialProofSection.eyebrow}
          title={socialProofSection.title}
          description={socialProofSection.description}
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {clientLogos.map((item) => {
            const CardWrapper = item.href ? "a" : "div";
            return (
              <CardWrapper
                href={item.href}
                target={item.href ? "_blank" : undefined}
                rel={item.href ? "noopener noreferrer" : undefined}
                className="group flex min-h-[216px] min-w-0 flex-col justify-between rounded-2xl border border-border bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-soft"
                key={item.name}
              >
                <div className="mx-auto flex size-24 items-center justify-center overflow-hidden rounded-full border border-border bg-white shadow-[inset_0_0_0_1px_rgba(17,24,39,0.02)]">
                  {item.logo ? (
                    <Image
                      src={item.logo}
                      alt={`Logo ${item.name}`}
                      width={96}
                      height={96}
                      className={cn(
                        "h-full w-full rounded-full object-center grayscale transition duration-300 group-hover:scale-105 group-hover:grayscale-0",
                        item.logoFit === "cover" ? "object-cover" : "object-contain",
                        item.logoFit !== "cover" && item.logoPadding !== "none" && "p-3",
                      )}
                    />
                  ) : (
                    <span className="flex size-full items-center justify-center rounded-full bg-mki-soft text-lg font-black text-mki-charcoal">
                      {item.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="pt-5">
                  <h3 className="text-base font-extrabold leading-snug text-mki-charcoal">{item.name}</h3>
                  <p className="mt-2 text-sm font-medium text-mki-gray">{item.descriptor}</p>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
