"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

type AnimatedValueProps = {
  value: string;
};

function parseValue(value: string) {
  const match = value.match(/^([\d.,]+)(.*)$/);

  if (!match) return null;

  const rawNumber = match[1];
  const suffix = match[2];

  // Deteksi separator ribuan Indo: titik diikuti tepat 3 digit (e.g. "4.048", "2.690")
  const isThousandSeparator = /^\d{1,3}(\.\d{3})*$/.test(rawNumber);

  const target = isThousandSeparator
    ? Number(rawNumber.replace(/\./g, ""))  // "4.048" → 4048
    : Number(rawNumber.replace(/,/g, ".")); // "2,5"  → 2.5 (desimal)

  if (Number.isNaN(target)) return null;

  return { target, suffix, isDecimal: !isThousandSeparator && rawNumber.includes(",") };
}

export function AnimatedValue({ value }: AnimatedValueProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const shouldReduceMotion = useReducedMotion();
  const parsedValue = useMemo(() => parseValue(value), [value]);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!parsedValue || !isInView) return;

    const { target, isDecimal } = parsedValue;

    if (shouldReduceMotion) {
      const raf = requestAnimationFrame(() => setCurrentValue(target));
      return () => cancelAnimationFrame(raf);
    }

    let raf = 0;
    const duration = 950;
    const start = performance.now();

    function animate(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const raw = target * eased;
      setCurrentValue(isDecimal ? Math.round(raw * 10) / 10 : Math.round(raw));

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    }

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isInView, parsedValue, shouldReduceMotion]);

  if (!parsedValue) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref} aria-label={value}>
      {parsedValue.isDecimal
        ? currentValue.toLocaleString("id-ID", { minimumFractionDigits: 1, maximumFractionDigits: 1 })
        : currentValue.toLocaleString("id-ID")}
      {parsedValue.suffix}
    </span>
  );
}
