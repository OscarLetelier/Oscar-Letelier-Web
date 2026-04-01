import { FaHome, FaUser, FaBriefcase, FaCode } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface NavItemConfig {
  label: string;
  href: string;
  icon: IconType;
}

export const navigationItems: NavItemConfig[] = [
  { label: "Inicio",      href: "#hero",       icon: FaHome },
  { label: "Sobre Mí",   href: "#about",      icon: FaUser },
  { label: "Trayectoria", href: "#experience", icon: FaBriefcase },
  { label: "Habilidades", href: "#skills",     icon: FaCode },
];
