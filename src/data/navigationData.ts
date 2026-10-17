import { FaHome, FaUser, FaBriefcase, FaCode } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface NavItem {
  id: string;
  label: string;
  icon: IconType;
}

// Orden igual al de las secciones en la página; define también su numeración
export const navigationItems: NavItem[] = [
  { id: "hero",       label: "Inicio",      icon: FaHome },
  { id: "about",      label: "Sobre mí",    icon: FaUser },
  { id: "experience", label: "Trayectoria", icon: FaBriefcase },
  { id: "skills",     label: "Habilidades", icon: FaCode },
];

export const padNumber = (n: number): string => String(n).padStart(2, "0");

// Número de sección ("03") derivado de su posición en la navegación
export const sectionNumber = (id: string): string =>
  padNumber(navigationItems.findIndex((item) => item.id === id) + 1);

export const sectionLabel = (id: string): string =>
  navigationItems.find((item) => item.id === id)?.label ?? id;
