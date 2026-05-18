import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeader({ eyebrow, title, description, align = "center", dark = false }: SectionHeaderProps) {
  return (
    <div className={cn("mx-auto max-w-3xl", align === "center" ? "text-center" : "text-left")}>
      <Badge className={dark ? "border-white/15 bg-white/10 text-white" : undefined}>{eyebrow}</Badge>
      <h2
        className={cn(
          "mt-5 text-balance text-3xl font-extrabold tracking-normal md:text-5xl",
          dark ? "text-white" : "text-mki-charcoal",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-5 text-base leading-8 md:text-lg", dark ? "text-white/70" : "text-mki-gray")}>{description}</p>
      ) : null}
    </div>
  );
}
