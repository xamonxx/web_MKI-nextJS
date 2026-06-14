"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "motion/react";
import { cn } from "@/lib/utils";
import { useSafeReducedMotion } from "@/lib/motion";

/** wrap a value into the [min, max) range (for seamless looping) */
function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

type VelocityMarqueeProps = {
  children: ReactNode;
  /** base auto-scroll speed in %/sec (sign sets direction) */
  baseVelocity?: number;
  className?: string;
};

/**
 * Scroll-velocity parallax marquee. The row auto-scrolls continuously, and the
 * page's scroll velocity adds momentum and flips direction — marquee + parallax
 * in one. Children are repeated so the loop is seamless. Static under
 * prefers-reduced-motion.
 */
export function VelocityMarquee({ children, baseVelocity = 3, className }: VelocityMarqueeProps) {
  const reduce = useSafeReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });

  // 4 copies → one copy is 25% of the track; wrap over that span for a seamless loop
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  const directionFactor = useRef(1);
  const isHoveredRef = useRef(false);

  useAnimationFrame((_, delta) => {
    // Pause animation if hovered/touched
    if (isHoveredRef.current) return;

    // Base auto-scroll always runs (gentle, decorative left/right drift).
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // The scroll-velocity boost (the parallax part) is gated behind reduced motion.
    if (!reduce) {
      if (velocityFactor.get() < 0) directionFactor.current = -1;
      else if (velocityFactor.get() > 0) directionFactor.current = 1;
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
    }

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className={cn("flex w-full overflow-hidden mask-fade-x", className)}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
      onTouchStart={() => {
        isHoveredRef.current = true;
      }}
      onTouchEnd={() => {
        isHoveredRef.current = false;
      }}
    >
      <motion.div className="flex shrink-0 flex-nowrap gap-5 pr-5" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}
