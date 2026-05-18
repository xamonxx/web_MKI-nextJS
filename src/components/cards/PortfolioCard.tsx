"use client";

import Image from "next/image";
import { Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { PortfolioItem } from "@/constants/types";

type PortfolioCardProps = {
  item: PortfolioItem;
};

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <Dialog>
      <DialogTrigger className="group w-full text-left">
        <article className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mki-navy/65 via-mki-navy/5 to-transparent" />
            <Badge className="absolute left-4 top-4 border-white/15 bg-white/90 text-mki-orange">{item.category}</Badge>
            <div className="absolute bottom-4 right-4 inline-flex size-11 items-center justify-center rounded-full bg-white text-mki-charcoal shadow-sm">
              <Eye className="size-5" />
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-lg font-extrabold text-mki-charcoal">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-mki-gray">{item.description}</p>
          </div>
        </article>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="sr-only">{item.title}</DialogTitle>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <Image src={item.image} alt={item.title} fill sizes="92vw" className="object-cover" />
        </div>
        <div className="px-2 pb-2 pt-4">
          <Badge>{item.category}</Badge>
          <h3 className="mt-4 text-2xl font-extrabold text-mki-charcoal">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-mki-gray">{item.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
