import { FaHome, FaUser, FaBriefcase, FaCode } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface NavItemConfig {
  label: string;
  mobileLabel: string;
  href: string;
  icon: IconType;
}

export const navigationItems: NavItemConfig[] = [
  { label: "Inicio",       mobileLabel: "Inicio",  href: "#hero",       icon: FaHome },
  { label: "Sobre Mí",    mobileLabel: "Sobre",   href: "#about",      icon: FaUser },
  { label: "Trayectoria", mobileLabel: "Exp.",    href: "#experience", icon: FaBriefcase },
  { label: "Habilidades", mobileLabel: "Skills",  href: "#skills",     icon: FaCode },
];
