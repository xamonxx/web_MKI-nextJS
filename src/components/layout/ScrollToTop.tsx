"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export function ScrollToTop() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 520);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 z-40 flex size-12 items-center justify-center rounded-full bg-white border border-border shadow-soft text-mki-charcoal md:bottom-8 md:right-8 transition-colors hover:text-white hover:bg-mki-gradient hover:border-transparent hover:shadow-glow"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="size-5 stroke-[2.5]" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
