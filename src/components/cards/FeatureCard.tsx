import { Icon } from "@/components/ui/icon";
import type { FeatureItem } from "@/constants/types";

type FeatureCardProps = {
  item: FeatureItem;
};

export function FeatureCard({ item }: FeatureCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-6 inline-flex size-11 items-center justify-center rounded-2xl bg-orange-50 text-mki-orange dark:bg-orange-950/40 dark:text-orange-400">
        <Icon name={item.icon} className="size-5" />
      </div>
      <h3 className="text-lg font-extrabold text-foreground">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
    </article>
  );
}
