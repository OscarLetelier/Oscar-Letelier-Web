import { FaHome, FaUser, FaBook, FaCog } from "react-icons/fa";

import type { IconType } from "react-icons";

export interface NavItemConfig {
  label: string;
  href: string;
  icon: IconType;
}

export const navigationItems: NavItemConfig[] = [
  { label: "Inicio", href: "#hero", icon: FaHome },
  { label: "Sobre Mí", href: "#about", icon: FaUser },
  /*{ label: "Servicios", href: "#services", icon: FaConciergeBell },*/
  { label: "Estudios", href: "#experience", icon: FaBook },
  /* { label: "Proyectos", href: "#projects", icon: FaProjectDiagram }, */
  { label: "Habilidades", href: "#skills", icon: FaCog },
];
