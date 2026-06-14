"use client";

import Image from "next/image";
import { useState } from "react";
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tilt } from "@/components/motion/Tilt";
import { cn } from "@/lib/utils";
import type { RichPortfolioItem } from "@/constants/portfolio";

type PortfolioCardProps = {
  item: RichPortfolioItem;
};

export function PortfolioCard({ item }: PortfolioCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
  };

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setCurrentIndex(0); // Reset to first image when opened
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger className="group w-full text-left [transform-style:preserve-3d]" asChild>
        <div>
          <Tilt max={7} glare={false} className="[transform-style:preserve-3d]">
            <article className="overflow-hidden rounded-[1.4rem] border border-border bg-card shadow-soft transition-colors duration-500 group-hover:border-mki-orange/40">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mki-navy/75 via-mki-navy/10 to-transparent" />
                
                {/* Category Badge */}
                <Badge className="absolute left-4 top-4 border-white/20 bg-white/90 text-mki-orange backdrop-blur">
                  {item.category}
                </Badge>

                {/* Photo Count Badge */}
                {item.images.length > 1 ? (
                  <Badge className="absolute right-4 top-4 border-white/10 bg-black/65 text-white/90 backdrop-blur text-xs">
                    📷 {item.images.length} Foto
                  </Badge>
                ) : null}

                <div className="absolute bottom-4 right-4 inline-flex size-11 translate-y-2 items-center justify-center rounded-full bg-mki-gradient text-white opacity-0 shadow-glow transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <Eye className="size-5" />
                </div>
                <div className="absolute bottom-4 left-4 right-16 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="font-display text-lg font-semibold text-white drop-shadow">{item.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            </article>
          </Tilt>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-xl">
        <DialogTitle className="sr-only">{item.title}</DialogTitle>
        
        {/* Carousel Image container */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl group/carousel bg-black/5">
          <Image 
            src={item.images[currentIndex]} 
            alt={`${item.title} - ${currentIndex + 1}`} 
            fill 
            sizes="92vw" 
            className="object-cover transition-opacity duration-300"
            priority
          />
          
          {item.images.length > 1 ? (
            <>
              {/* Left Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex size-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-mki-gradient hover:scale-105 active:scale-95 opacity-0 group-hover/carousel:opacity-100"
                aria-label="Foto Sebelumnya"
              >
                <ChevronLeft className="size-5" />
              </button>
              
              {/* Right Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex size-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-mki-gradient hover:scale-105 active:scale-95 opacity-0 group-hover/carousel:opacity-100"
                aria-label="Foto Selanjutnya"
              >
                <ChevronRight className="size-5" />
              </button>
              
              {/* Indicator fraction */}
              <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-0.5 text-xs font-bold text-white/90 backdrop-blur-sm select-none">
                {currentIndex + 1} / {item.images.length}
              </div>
              
              {/* Indicator dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {item.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                    className={cn(
                      "size-1.5 rounded-full transition-all duration-300",
                      i === currentIndex ? "w-4 bg-mki-orange" : "bg-white/50 hover:bg-white"
                    )}
                    aria-label={`Buka foto ke-${i + 1}`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>

        {/* Modal Info */}
        <div className="px-2 pb-2 pt-4">
          <Badge className="border-border bg-secondary text-secondary-foreground hover:bg-secondary">
            {item.category}
          </Badge>
          <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
