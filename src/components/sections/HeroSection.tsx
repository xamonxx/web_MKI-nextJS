"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { ArrowRight, CheckCircle2, Factory, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/Magnetic";
import { TextReveal } from "@/components/motion/TextReveal";
import { ParallaxScene } from "@/components/motion/ParallaxScene";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { ctaLabels, heroContent } from "@/constants/content";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { useSafeReducedMotion } from "@/lib/motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

/** floating glassmorphism orb — idle float is Framer-driven so it runs even
 *  under OS reduce-motion (the gentle-ambient tier), unlike CSS keyframes. */
function GlassOrb({
  className,
  depth,
  delay = 0,
  duration = 6,
  drift = 12,
  children,
}: {
  className?: string;
  depth: number;
  delay?: number;
  duration?: number;
  drift?: number;
  children?: React.ReactNode;
}) {
  return (
    <ParallaxLayer depth={depth} rotate={depth / 6} decorative className={className}>
      <motion.div
        animate={{ y: [0, -drift, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <div className="flex items-center justify-center rounded-[1.75rem] border border-white/25 bg-gradient-to-br from-white/25 to-white/[0.04] shadow-glow backdrop-blur-md dark:border-white/15 dark:from-white/12 dark:to-white/[0.02]">
          {children}
        </div>
      </motion.div>
    </ParallaxLayer>
  );
}

export function HeroSection() {
  const reduce = useSafeReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // ── Cinematic scroll: the scene recedes, scales and fades as you scroll past ──
  // Cinematic scroll — subtle so the hero recedes as it leaves rather than
  // leaving an empty band; gentler still when reduce-motion is requested.
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const stageY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 24 : 60]);
  const stageScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 0.99 : 0.96]);
  const stageOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, reduce ? 0.7 : 0.45]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 50 : 120]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1.05 : 1.12]);

  const stageStyle = { y: stageY, scale: stageScale, opacity: stageOpacity };
  const bgStyle = { y: bgY, scale: bgScale };

  const executionPoints = [
    "Workshop aktif lintas area",
    "Alur produksi & instalasi terstruktur",
    "Quality control sampai final checking",
  ];

  // `animate` always resolves to the visible state, so flipping `reduce` after
  // mount can never freeze an element mid-fade. Only the entry is gated.
  const anim = (i: number) =>
    reduce
      ? { initial: false as const, animate: { opacity: 1, y: 0 } }
      : { variants: fadeUp, custom: i, initial: "hidden" as const, animate: "show" as const };

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-background"
    >
      <ParallaxScene strength={1} spotlight className="pt-24 md:pt-28">
        {/* ── Background depth field ─────────────────────────── */}
        <motion.div style={bgStyle} className="absolute inset-0 z-0">
          {/* animated gradient mesh */}
          <ParallaxLayer depth={-26} decorative className="absolute inset-0">
            <div className="absolute -left-[12%] top-[-16%] h-[62vh] w-[62vh] rounded-full bg-mki-ember/30 blur-[130px] animate-aurora-drift" />
            <div className="absolute right-[-14%] top-[4%] h-[55vh] w-[55vh] rounded-full bg-amber-400/20 blur-[140px] animate-aurora-drift [animation-delay:-8s]" />
            <div className="absolute bottom-[-22%] left-[28%] h-[55vh] w-[55vh] rounded-full bg-mki-clay/25 blur-[140px] animate-aurora-drift [animation-delay:-15s]" />
          </ParallaxLayer>

          {/* grid + top wash */}
          <div className="absolute inset-0 bg-pattern-grid opacity-40" />
          <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-secondary/70 to-transparent" />

          {/* floating glass objects at varied depths */}
          <GlassOrb depth={90} duration={7} className="absolute left-[6%] top-[24%] hidden lg:block">
            <span className="size-20" />
          </GlassOrb>
          <GlassOrb depth={64} duration={5.5} delay={0.6} drift={10} className="absolute right-[8%] top-[16%] hidden md:block">
            <Sparkles className="m-5 size-7 text-mki-orange" />
          </GlassOrb>
          <GlassOrb depth={120} duration={8} delay={1.2} drift={16} className="absolute bottom-[14%] left-[16%] hidden lg:block">
            <Factory className="m-4 size-6 text-mki-orange" />
          </GlassOrb>
          <GlassOrb depth={48} duration={6.5} delay={0.3} className="absolute bottom-[20%] right-[20%] hidden md:block">
            <span className="size-12" />
          </GlassOrb>
        </motion.div>

        {/* ── Foreground content stage ───────────────────────── */}
        <motion.div style={stageStyle} className="relative z-10">
          <div className="container grid items-center gap-12 pb-16 pt-6 md:pb-20 lg:min-h-[calc(100svh-11rem)] lg:grid-cols-[1.04fr_0.96fr] lg:gap-10">
            {/* Left — text (subtle depth so it stays readable) */}
            <ParallaxLayer depth={8} className="[transform-style:preserve-3d]">
              <motion.span {...anim(0)} className="eyebrow">
                {heroContent.badge} · Interior Manufacturing
              </motion.span>

              <h1 className="mt-7 max-w-3xl font-display text-[2.7rem] font-semibold leading-[1.02] tracking-tightest text-foreground sm:text-6xl lg:text-[4.1rem] xl:text-[4.6rem]">
                <TextReveal text="Wujudkan Interior" delay={0.2} />
                <br />
                <TextReveal text="Premium Terukur" delay={0.42} highlight={[0]} />
              </h1>

              <motion.p
                {...anim(4)}
                className="mt-7 max-w-xl text-base leading-8 text-muted-foreground md:text-lg"
              >
                {heroContent.description}
              </motion.p>

              <motion.div {...anim(5)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Magnetic>
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <a href={createWhatsAppLink()} target="_blank" rel="noreferrer">
                      <MessageCircle className="size-5" />
                      {ctaLabels.consult}
                    </a>
                  </Button>
                </Magnetic>
                <Button asChild variant="secondary" size="lg" className="group w-full sm:w-auto">
                  <a href="#portfolio">
                    {ctaLabels.portfolio}
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                {...anim(6)}
                className="mt-11 grid max-w-2xl grid-cols-1 gap-3 min-[420px]:grid-cols-3"
              >
                {heroContent.miniStats.map((item) => (
                  <div
                    key={item.label}
                    className="group rounded-2xl border border-border bg-card/70 p-4 backdrop-blur-sm transition-colors hover:border-mki-orange/40"
                  >
                    <div className="font-display text-3xl font-semibold text-foreground">{item.value}</div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      {item.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </ParallaxLayer>

            {/* Right — image card with stronger depth + 3D tilt */}
            <ParallaxLayer
              depth={30}
              rotate={7}
              z={40}
              className="relative mx-auto w-full max-w-xl lg:max-w-none"
            >
              <motion.div
                initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative [transform-style:preserve-3d]"
              >
                {/* decorative frame blocks */}
                <div className="absolute -left-5 -top-5 hidden size-28 rounded-[2rem] bg-mki-gradient opacity-90 shadow-glow lg:block" />
                <div className="absolute -bottom-6 -right-6 hidden h-40 w-32 rounded-[2rem] border-[6px] border-mki-orange/25 lg:block" />

                {/* main image frame */}
                <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft">
                  <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/5]">
                    <Image
                      src={heroContent.image}
                      alt={heroContent.imageAlt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 46vw, 92vw"
                      className="scale-105 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mki-navy/70 via-transparent to-transparent" />
                  </div>

                  {/* glass caption */}
                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3 rounded-2xl glass px-4 py-3 text-foreground dark:text-white">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-mki-orange">
                      <Sparkles className="size-4" /> Eksekusi Terukur
                    </div>
                    <div className="flex size-9 items-center justify-center rounded-xl bg-mki-gradient text-white">
                      <Factory className="size-4" />
                    </div>
                  </div>
                </div>

                {/* floating stat strip — closer layer */}
                <ParallaxLayer
                  depth={52}
                  z={60}
                  className="relative z-20 mx-3 -mt-10 grid grid-cols-3 gap-2 rounded-2xl border border-border bg-card p-3 shadow-soft sm:mx-6"
                >
                  {[
                    { value: "2.690m", label: "Kapasitas / bln" },
                    { value: "23", label: "Workshop" },
                    { value: "156", label: "Personel WS" },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl bg-secondary px-2 py-3 text-center">
                      <div className="font-display text-lg font-semibold text-foreground sm:text-xl">{m.value}</div>
                      <div className="mt-0.5 text-[0.62rem] font-bold uppercase tracking-wide text-muted-foreground">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </ParallaxLayer>

                {/* floating execution chips */}
                <ParallaxLayer depth={38} z={50} className="mt-3 grid gap-2 sm:mx-6">
                  {executionPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 rounded-xl border border-border bg-card/80 px-4 py-2.5 text-sm font-bold text-foreground backdrop-blur-sm"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-mki-orange" />
                      {point}
                    </div>
                  ))}
                </ParallaxLayer>
              </motion.div>
            </ParallaxLayer>
          </div>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          style={{ opacity: stageOpacity }}
          className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center"
        >
            <div className="flex h-9 w-6 items-start justify-center rounded-full border border-border p-1.5">
              <motion.span
                className="size-1.5 rounded-full bg-mki-orange"
                animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
        </motion.div>
      </ParallaxScene>
    </section>
  );
}
