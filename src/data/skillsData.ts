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

export interface Skill {
  name: string;
  icon: IconType;
  // Color de marca del icono; las prácticas sin marca usan el color neutro
  color?: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  icon: IconType;
  // La categoría destacada ocupa todo el ancho sobre el resto
  featured?: boolean;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "QA & Testing",
    icon: FaBug,
    featured: true,
    skills: [
      {
        name: "Playwright",
        icon: FaTheaterMasks,
        color: "#2EAD33",
        description:
          "Automatización de pruebas E2E multi-navegador con selectores robustos y evidencia (trazas, capturas, videos).",
      },
      {
        name: "Playwright MCP",
        icon: FaRobot,
        color: "#2EAD33",
        description:
          "Integración vía Model Context Protocol para pruebas de navegador asistidas por IA y exploración guiada.",
      },
      {
        name: "Testing E2E",
        icon: FaRoute,
        description:
          "Validación de flujos completos de usuario, desde la interfaz hasta la integración con servicios.",
      },
      {
        name: "Testing Manual / Exploratorio",
        icon: MdOutlineManageSearch,
        description:
          "Diseño de casos de prueba y sesiones exploratorias para descubrir bugs que la automatización no cubre.",
      },
      {
        name: "Gestión de Bugs (Jira / Kanban)",
        icon: SiJira,
        color: "#2684FF",
        description:
          "Tarjetas y tickets con ciclo de vida definido: reporte, triage, priorización, verificación y cierre.",
      },
      {
        name: "Ambientes Local / Staging",
        icon: FaLayerGroup,
        description:
          "Ejecución de pruebas en local y staging para detectar fallos antes de su paso a producción (shift-left).",
      },
      {
        name: "Pruebas de Regresión",
        icon: FaRedoAlt,
        description:
          "Verificación de fixes y protección de funcionalidades existentes en cada nueva entrega.",
      },
      {
        name: "API Testing (Postman)",
        icon: SiPostman,
        color: "#FF6C37",
        description:
          "Pruebas de endpoints REST: validación de respuestas, códigos de estado y contratos.",
      },
    ],
  },
  {
    name: "Frontend",
    icon: FaCode,
    skills: [
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
        description: "SPAs con Hooks, Context API y optimización de rendimiento.",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        description:
          "Tipado estático estricto para código más robusto y escalable.",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
        description:
          "ES6+ para lógica de cliente, asincronía y manipulación del DOM.",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
        description:
          "Interfaces modernas y responsivas con enfoque utility-first.",
      },
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "#E34F26",
        description: "Estructura semántica para accesibilidad (A11Y) y SEO.",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "#2965F1",
        description:
          "Flexbox, Grid, animaciones y diseño responsivo sin frameworks.",
      },
    ],
  },
  {
    name: "Backend",
    icon: FaServer,
    skills: [
      {
        name: "Java",
        icon: FaJava,
        color: "#F89820",
        description:
          "Aplicaciones robustas del lado servidor con POO y diseño SOLID.",
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        color: "#6DB33F",
        description:
          "APIs RESTful seguras, microservicios y ecosistema Spring completo.",
      },
    ],
  },
  {
    name: "Bases de Datos",
    icon: FaDatabase,
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
        description: "Esquemas relacionales, consultas complejas y optimización.",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
        description:
          "Administración y desarrollo sobre bases de datos relacionales.",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
        description:
          "Modelado de datos flexible con BSON para alta velocidad y escala.",
      },
    ],
  },
  {
    name: "Herramientas y DevOps",
    icon: FaTools,
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
        description:
          "Control de versiones, Git Flow, fusiones y resolución de conflictos.",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#F0F6FC",
        description: "Pull Requests, Actions para CI/CD y gestión de proyectos.",
      },
      {
        name: "Docker",
        icon: FaDocker,
        color: "#2496ED",
        description:
          "Contenerización para paridad entre entornos de desarrollo y producción.",
      },
      {
        name: "SonarQube",
        icon: SiSonarqubeserver,
        color: "#4E9BCD",
        description:
          "Análisis estático para detectar bugs, vulnerabilidades y code smells.",
      },
    ],
  },
  {
    name: "Operaciones & Soporte",
    icon: FaHeadset,
    skills: [
      {
        name: "Intercom",
        icon: SiIntercom,
        color: "#1F8DED",
        description:
          "Gestión de soporte al cliente, atención multicanal y seguimiento de conversaciones.",
      },
      {
        name: "HubSpot",
        icon: SiHubspot,
        color: "#FF7A59",
        description:
          "CRM para seguimiento de clientes, gestión de tickets y automatización de flujos.",
      },
      {
        name: "QA Manual",
        icon: MdOutlineManageSearch,
        description:
          "Pruebas manuales de usabilidad, levantamiento y seguimiento de tickets hasta resolución.",
      },
      {
        name: "Soporte al Cliente",
        icon: FaHeadset,
        description:
          "Atención y resolución de incidencias, re-instrucción y capacitación en manejo de workflows.",
      },
    ],
  },
  {
    name: "Metodologías",
    icon: FaProjectDiagram,
    skills: [
      {
        name: "Scrum",
        icon: FaProjectDiagram,
        description:
          "Sprints, retrospectivas, dailies y mejora continua en equipos colaborativos.",
      },
      {
        name: "Kanban",
        icon: BsKanban,
        description:
          "Visualización del flujo de trabajo y mejora de productividad con tableros Kanban.",
      },
    ],
  },
];
