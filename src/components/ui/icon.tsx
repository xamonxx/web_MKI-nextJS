import {
  BadgeCheck,
  Archive,
  BedDouble,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Factory,
  Hammer,
  Home,
  MapPin,
  MessageCircle,
  Ruler,
  ShieldCheck,
  Sparkles,
  PanelTop,
  Users,
  UtensilsCrossed,
  Workflow,
} from "lucide-react";
import type { IconName } from "@/constants/types";

const icons = {
  badgeCheck: BadgeCheck,
  bed: BedDouble,
  briefcase: BriefcaseBusiness,
  building: Building2,
  checkCircle: CheckCircle2,
  factory: Factory,
  hammer: Hammer,
  home: Home,
  mapPin: MapPin,
  message: MessageCircle,
  ruler: Ruler,
  shield: ShieldCheck,
  sparkles: Sparkles,
  stairs: PanelTop,
  users: Users,
  utensils: UtensilsCrossed,
  wardrobe: Archive,
  workflow: Workflow,
};

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  const LucideIcon = icons[name];

  return <LucideIcon aria-hidden className={className} />;
}
