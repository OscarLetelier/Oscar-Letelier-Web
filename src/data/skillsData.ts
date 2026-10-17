import {
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaProjectDiagram,
  FaHeadset,
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaBug,
  FaTheaterMasks,
  FaRobot,
  FaRoute,
  FaLayerGroup,
  FaRedoAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiSpringboot,
  SiSonarqubeserver,
  SiIntercom,
  SiHubspot,
  SiJira,
  SiPostman,
} from "react-icons/si";
import { BsKanban } from "react-icons/bs";
import { MdOutlineManageSearch } from "react-icons/md";
import type { IconType } from "react-icons";

export type SkillLevel = "Avanzado" | "Intermedio" | "Familiar";

export interface Skill {
  name: string;
  icon: IconType;
  level: SkillLevel;
  description: string;
}

// Tamaño del tile en el bento: hero (2 col × 3 filas), wide (2×1) o regular (1×1)
export type TileSize = "hero" | "wide" | "regular";

export interface SkillCategory {
  name: string;
  icon: IconType;
  size: TileSize;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "QA & Testing",
    icon: FaBug,
    size: "hero",
    skills: [
      {
        name: "Playwright",
        icon: FaTheaterMasks,
        level: "Intermedio",
        description:
          "Automatización de pruebas E2E multi-navegador con selectores robustos y evidencia (trazas, capturas, videos).",
      },
      {
        name: "Playwright MCP",
        icon: FaRobot,
        level: "Intermedio",
        description:
          "Integración vía Model Context Protocol para pruebas de navegador asistidas por IA y exploración guiada.",
      },
      {
        name: "Testing E2E",
        icon: FaRoute,
        level: "Intermedio",
        description:
          "Validación de flujos completos de usuario, desde la interfaz hasta la integración con servicios.",
      },
      {
        name: "Testing Manual / Exploratorio",
        icon: MdOutlineManageSearch,
        level: "Avanzado",
        description:
          "Diseño de casos de prueba y sesiones exploratorias para descubrir bugs que la automatización no cubre.",
      },
      {
        name: "Gestión de Bugs (Jira / Kanban)",
        icon: SiJira,
        level: "Avanzado",
        description:
          "Tarjetas y tickets con ciclo de vida definido: reporte, triage, priorización, verificación y cierre.",
      },
      {
        name: "Ambientes Local / Staging",
        icon: FaLayerGroup,
        level: "Intermedio",
        description:
          "Ejecución de pruebas en local y staging para detectar fallos antes de su paso a producción (shift-left).",
      },
      {
        name: "Pruebas de Regresión",
        icon: FaRedoAlt,
        level: "Intermedio",
        description:
          "Verificación de fixes y protección de funcionalidades existentes en cada nueva entrega.",
      },
      {
        name: "API Testing (Postman)",
        icon: SiPostman,
        level: "Familiar",
        description:
          "Pruebas de endpoints REST: validación de respuestas, códigos de estado y contratos.",
      },
    ],
  },
  {
    name: "Frontend",
    icon: FaCode,
    size: "wide",
    skills: [
      {
        name: "React",
        icon: FaReact,
        level: "Intermedio",
        description: "SPAs con Hooks, Context API y optimización de rendimiento.",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        level: "Intermedio",
        description:
          "Tipado estático estricto para código más robusto y escalable.",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        level: "Intermedio",
        description:
          "ES6+ para lógica de cliente, asincronía y manipulación del DOM.",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        level: "Intermedio",
        description:
          "Interfaces modernas y responsivas con enfoque utility-first.",
      },
      {
        name: "HTML5",
        icon: FaHtml5,
        level: "Intermedio",
        description: "Estructura semántica para accesibilidad (A11Y) y SEO.",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        level: "Intermedio",
        description:
          "Flexbox, Grid, animaciones y diseño responsivo sin frameworks.",
      },
    ],
  },
  {
    name: "Backend",
    icon: FaServer,
    size: "regular",
    skills: [
      {
        name: "Java",
        icon: FaJava,
        level: "Intermedio",
        description:
          "Aplicaciones robustas del lado servidor con POO y diseño SOLID.",
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        level: "Intermedio",
        description:
          "APIs RESTful seguras, microservicios y ecosistema Spring completo.",
      },
    ],
  },
  {
    name: "Bases de Datos",
    icon: FaDatabase,
    size: "wide",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        level: "Intermedio",
        description: "Esquemas relacionales, consultas complejas y optimización.",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        level: "Intermedio",
        description:
          "Administración y desarrollo sobre bases de datos relacionales.",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        level: "Familiar",
        description:
          "Modelado de datos flexible con BSON para alta velocidad y escala.",
      },
    ],
  },
  {
    name: "Herramientas y DevOps",
    icon: FaTools,
    size: "regular",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        level: "Intermedio",
        description:
          "Control de versiones, Git Flow, fusiones y resolución de conflictos.",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        level: "Intermedio",
        description: "Pull Requests, Actions para CI/CD y gestión de proyectos.",
      },
      {
        name: "Docker",
        icon: FaDocker,
        level: "Familiar",
        description:
          "Contenerización para paridad entre entornos de desarrollo y producción.",
      },
      {
        name: "SonarQube",
        icon: SiSonarqubeserver,
        level: "Intermedio",
        description:
          "Análisis estático para detectar bugs, vulnerabilidades y code smells.",
      },
    ],
  },
  {
    name: "Operaciones & Soporte",
    icon: FaHeadset,
    size: "wide",
    skills: [
      {
        name: "Intercom",
        icon: SiIntercom,
        level: "Intermedio",
        description:
          "Gestión de soporte al cliente, atención multicanal y seguimiento de conversaciones.",
      },
      {
        name: "HubSpot",
        icon: SiHubspot,
        level: "Intermedio",
        description:
          "CRM para seguimiento de clientes, gestión de tickets y automatización de flujos.",
      },
      {
        name: "QA Manual",
        icon: MdOutlineManageSearch,
        level: "Avanzado",
        description:
          "Pruebas manuales de usabilidad, levantamiento y seguimiento de tickets hasta resolución.",
      },
      {
        name: "Soporte al Cliente",
        icon: FaHeadset,
        level: "Avanzado",
        description:
          "Atención y resolución de incidencias, re-instrucción y capacitación en manejo de workflows.",
      },
    ],
  },
  {
    name: "Metodologías",
    icon: FaProjectDiagram,
    size: "wide",
    skills: [
      {
        name: "Scrum",
        icon: FaProjectDiagram,
        level: "Avanzado",
        description:
          "Sprints, retrospectivas, dailies y mejora continua en equipos colaborativos.",
      },
      {
        name: "Kanban",
        icon: BsKanban,
        level: "Intermedio",
        description:
          "Visualización del flujo de trabajo y mejora de productividad con tableros Kanban.",
      },
    ],
  },
];
