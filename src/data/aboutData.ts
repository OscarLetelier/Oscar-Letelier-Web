import type { IconType } from "react-icons";
import { FaCode, FaBug, FaTheaterMasks, FaGraduationCap } from "react-icons/fa";

export interface AboutStat {
  icon: IconType;
  value: string;
  label: string;
}

export type TerminalLineStatus = "pass" | "fail" | "info";

export interface TerminalLine {
  status: TerminalLineStatus;
  text: string;
  // Dato secundario en tono atenuado (duración, ticket, etc.)
  meta?: string;
}

export interface TerminalReport {
  title: string;
  command: string;
  lines: TerminalLine[];
  summary: { passed: string; failed: string };
}

export interface AboutData {
  title: string;
  paragraphs: {
    text: string;
    highlight?: string;
  }[];
  quote: {
    text: string;
  };
  stats: AboutStat[];
  terminal: TerminalReport;
}

export const aboutData: AboutData = {
  title: "Sobre mí",
  paragraphs: [
    {
      text: "Soy Oscar Letelier Molina, y mi camino en el desarrollo de software viene acompañado de mi experiencia previa en optimización de procesos (HSEQ). Este trasfondo me enseñó el valor del análisis, la prevención y la mejora continua, aprendizajes que hoy guían mi forma de trabajar y aportar a un equipo.",
      highlight: "Oscar Letelier Molina",
    },
    {
      text: "Mi transición al desarrollo Full-Stack nació de mis ganas de aprender y de crear herramientas útiles. En septiembre de 2026 fui promovido de Operations Specialist a QA Engineer en Tazki, donde uno ambos mundos: automatizo pruebas con Playwright y Playwright MCP, detecto bugs de forma temprana y gestiono su ciclo de vida con tableros Kanban, validando cada cambio en ambientes local y staging.",
      highlight: "QA Engineer",
    },
    {
      text: "Entender cómo se construye el software me permite reportar hallazgos claros y reproducibles, y colaborar de cerca con el equipo de desarrollo para que cada entrega llegue a producción con la calidad que los usuarios merecen.",
    },
  ],
  quote: {
    text: "Creo que la tecnología cumple su verdadero propósito cuando logra resolver problemas complejos de manera clara, manteniéndose accesible y abierta a la colaboración.",
  },
  stats: [
    { icon: FaBug, value: "QA Engineer", label: "Rol actual · Tazki" },
    { icon: FaTheaterMasks, value: "Playwright + MCP", label: "Automatización E2E" },
    { icon: FaCode, value: "Full-Stack", label: "Java + React" },
    {
      icon: FaGraduationCap,
      value: "En formación",
      label: "Ing. en Informática",
    },
  ],
  // Reporte ilustrativo de una corrida de pruebas (reemplaza la ilustración)
  terminal: {
    title: "staging · e2e",
    command: "npx playwright test --project=staging",
    lines: [
      { status: "pass", text: "login.spec.ts", meta: "1.2s" },
      { status: "pass", text: "onboarding.spec.ts", meta: "2.1s" },
      { status: "pass", text: "checkout.spec.ts", meta: "3.4s" },
      { status: "pass", text: "workflows.spec.ts", meta: "2.8s" },
      { status: "fail", text: "ticket QA-142", meta: "→ reportado" },
    ],
    summary: { passed: "4 passed", failed: "1 bug detectado" },
  },
};
