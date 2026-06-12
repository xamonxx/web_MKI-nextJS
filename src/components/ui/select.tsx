import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Select({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select
        className={cn(
          "h-12 w-full appearance-none rounded-2xl border border-border bg-card px-4 pr-10 text-sm text-foreground shadow-sm outline-none transition focus:border-mki-orange focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-900/30",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown aria-hidden className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-mki-gray" />
    </div>
  );
}
