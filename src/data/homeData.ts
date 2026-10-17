import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaUser,
  FaJava,
  FaTheaterMasks,
  FaRobot,
} from "react-icons/fa";
import { SiTypescript, SiJira } from "react-icons/si";
import type { IconType } from "react-icons";

export interface TechIcon {
  Icon: IconType;
  title: string;
}

export interface CtaButton {
  text: string;
  href: string;
  icon: IconType;
  primary: boolean;
}

export interface HomeData {
  title: {
    pre: string;
    name: string;
  };
  role: string;
  roleComplement: string;
  // Línea de estado estilo CI sobre el nombre
  status: {
    label: string;
    items: string[];
  };
  description: string;
  techIcons: TechIcon[];
  ctaButtons: CtaButton[];
}

export const homeData: HomeData = {
  title: {
    pre: "Hola, soy",
    name: "Oscar Letelier Molina",
  },
  role: "QA Engineer",
  roleComplement: "con base Full-Stack",
  status: {
    label: "build passing",
    items: ["staging", "Sep 2026 — QA Engineer @ Tazki"],
  },
  description:
    "QA Engineer en Tazki, con base en desarrollo Full-Stack. Automatizo pruebas end-to-end con Playwright y Playwright MCP, detecto bugs en etapas tempranas y gestiono su ciclo de vida en tableros Kanban, validando cada cambio en ambientes local y staging antes de llegar a producción. Busco comprender el propósito de cada desafío para sumar valor estratégico y humano al equipo.",
  techIcons: [
    { Icon: FaTheaterMasks, title: "Playwright" },
    { Icon: FaRobot, title: "Playwright MCP" },
    { Icon: SiJira, title: "Jira / Kanban" },
    { Icon: FaJava, title: "Java 21" },
    { Icon: FaReact, title: "React" },
    { Icon: SiTypescript, title: "TypeScript" },
    { Icon: FaGitAlt, title: "Git" },
  ],
  ctaButtons: [
    {
      text: "Ver trayectoria",
      href: "#experience",
      icon: FaUser,
      primary: true,
    },
    {
      text: "Ver en GitHub",
      href: "https://github.com/OscarLetelier",
      icon: FaGithub,
      primary: false,
    },
  ],
};
