"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

type AnimatedValueProps = {
  value: string;
};

function parseValue(value: string) {
  const match = value.match(/^([\d.]+)(.*)$/);

  if (!match) {
    return null;
  }

  return {
    target: Number(match[1].replace(/\./g, "")),
    suffix: match[2],
  };
}

export function AnimatedValue({ value }: AnimatedValueProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const shouldReduceMotion = useReducedMotion();
  const parsedValue = useMemo(() => parseValue(value), [value]);
  const [currentValue, setCurrentValue] = useState(parsedValue ? 0 : Number.NaN);

  useEffect(() => {
    if (!parsedValue || !isInView) {
      return;
    }

    const target = parsedValue.target;

    if (shouldReduceMotion) {
      const animationFrame = requestAnimationFrame(() => setCurrentValue(target));
      return () => cancelAnimationFrame(animationFrame);
    }

    let animationFrame = 0;
    const duration = 950;
    const start = performance.now();

    function animate(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrentValue(Math.round(target * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    }

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, parsedValue, shouldReduceMotion]);

  if (!parsedValue) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref} aria-label={value}>
      {currentValue.toLocaleString("id-ID")}
      {parsedValue.suffix}
    </span>
  );
}
