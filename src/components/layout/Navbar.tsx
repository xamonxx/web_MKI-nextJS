import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/button";
import { ctaLabels } from "@/constants/content";
import { navigationItems } from "@/constants/navigation";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-border bg-white/85 backdrop-blur-xl">
      <div className="container grid h-[76px] grid-cols-[auto_auto] items-center justify-between gap-4 xl:grid-cols-[minmax(120px,auto)_1fr_auto]">
        <Logo compact />
        <nav className="hidden min-w-0 items-center justify-center gap-1 xl:flex">
          {navigationItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-bold text-mki-gray transition hover:bg-mki-soft hover:text-mki-charcoal 2xl:px-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden justify-self-end xl:block">
          <Button asChild>
            <a href={createWhatsAppLink()} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" />
              {ctaLabels.consult}
            </a>
          </Button>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
