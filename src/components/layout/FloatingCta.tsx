"use client";

import { BriefcaseBusiness, MessageCircle } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { ctaLabels } from "@/constants/content";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function FloatingCta() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 520);
  });

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-[1.75rem] border border-white/40 bg-white/90 p-2 shadow-soft backdrop-blur-xl md:hidden"
        >
          <motion.a
            whileTap={{ scale: 0.97 }}
            href={createWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 min-w-0 items-center justify-center gap-2 rounded-full bg-mki-gradient px-3 text-xs font-extrabold text-white shadow-glow min-[420px]:text-sm"
          >
            <MessageCircle className="size-4 shrink-0" />
            <span className="truncate">{ctaLabels.consult}</span>
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.97 }}
            href={createWhatsAppLink({ category: ctaLabels.partnership }, { recipient: "partnership" })}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 min-w-0 items-center justify-center gap-2 rounded-full border border-orange-200 bg-white px-3 text-xs font-extrabold text-mki-orange shadow-sm min-[420px]:text-sm"
          >
            <BriefcaseBusiness className="size-4 shrink-0" />
            <span className="truncate">{ctaLabels.partnership}</span>
          </motion.a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
