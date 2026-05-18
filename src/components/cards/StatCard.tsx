import { Icon } from "@/components/ui/icon";
import { AnimatedValue } from "@/components/ui/animated-value";
import type { StatItem } from "@/constants/types";

type StatCardProps = {
  item: StatItem;
};

export function StatCard({ item }: StatCardProps) {
  return (
    <div className="premium-card group p-6 hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-orange-50 text-mki-orange transition group-hover:bg-mki-gradient group-hover:text-white">
        <Icon name={item.icon} className="size-6" />
      </div>
      <div className="text-4xl font-extrabold text-mki-charcoal">
        <AnimatedValue value={item.value} />
      </div>
      <div className="mt-2 text-base font-bold text-mki-charcoal">{item.label}</div>
      <p className="mt-3 text-sm leading-6 text-mki-gray">{item.description}</p>
    </div>
  );
}
