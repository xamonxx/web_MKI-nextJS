import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import type { ServiceItem } from "@/constants/types";

type ServiceCardProps = {
  item: ServiceItem;
  index: number;
};

export function ServiceCard({ item, index }: ServiceCardProps) {
  return (
    <article className="premium-card group h-full p-7 hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-start justify-between gap-6">
        <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-orange-50 text-mki-orange transition group-hover:bg-mki-gradient group-hover:text-white">
          <Icon name={item.icon} className="size-6" />
        </div>
        <span className="text-sm font-extrabold text-orange-200">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-8 text-xl font-extrabold text-mki-charcoal">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-mki-gray">{item.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.details.map((detail) => (
          <span key={detail} className="rounded-full bg-mki-soft px-3 py-1 text-xs font-bold text-mki-gray">
            {detail}
          </span>
        ))}
      </div>
      <div className="mt-8 inline-flex size-10 items-center justify-center rounded-full border border-border text-mki-orange transition group-hover:border-mki-orange group-hover:bg-orange-50">
        <ArrowUpRight className="size-4" />
      </div>
    </article>
  );
}
