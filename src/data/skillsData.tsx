import {
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiSpringboot,
  SiSonarqubeserver as SiSonarqube,
  SiIntercom,
  SiHubspot,
} from "react-icons/si";
import { FaProjectDiagram, FaHeadset, FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";
import { BsKanban } from "react-icons/bs";
import { MdOutlineManageSearch } from "react-icons/md";
import type { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level: "Avanzado" | "Intermedio" | "Familiar";
  description: string;
}

export interface CategoryMeta {
  icon: IconType;
  color: string;
}

export const categoryMeta: Record<string, CategoryMeta> = {
  "Frontend":              { icon: FaCode,           color: "text-sky-400"     },
  "Backend":               { icon: FaServer,         color: "text-orange-400"  },
  "Bases de Datos":        { icon: FaDatabase,       color: "text-blue-400"    },
  "Herramientas y DevOps": { icon: FaTools,          color: "text-violet-400"  },
  "Operaciones & Soporte": { icon: FaHeadset,        color: "text-emerald-400" },
  "Metodologías":          { icon: FaProjectDiagram, color: "text-rose-400"    },
};

export const skillCategories: Record<string, Skill[]> = {
  Frontend: [
    {
      name: "React",
      icon: <FaReact className="text-sky-400" />,
      level: "Intermedio",
      description: "SPAs con Hooks, Context API y optimización de rendimiento.",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500" />,
      level: "Intermedio",
      description: "Tipado estático estricto para código más robusto y escalable.",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      level: "Intermedio",
      description: "ES6+ para lógica de cliente, asincronía y manipulación del DOM.",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400" />,
      level: "Intermedio",
      description: "Interfaces modernas y responsivas con enfoque utility-first.",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-500" />,
      level: "Intermedio",
      description: "Estructura semántica para accesibilidad (A11Y) y SEO.",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-400" />,
      level: "Intermedio",
      description: "Flexbox, Grid, animaciones y diseño responsivo sin frameworks.",
    },
  ],
  Backend: [
    {
      name: "Java",
      icon: <FaJava className="text-orange-500" />,
      level: "Intermedio",
      description: "Aplicaciones robustas del lado servidor con POO y diseño SOLID.",
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="text-green-500" />,
      level: "Intermedio",
      description: "APIs RESTful seguras, microservicios y ecosistema Spring completo.",
    },
  ],
  "Bases de Datos": [
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-300" />,
      level: "Intermedio",
      description: "Esquemas relacionales, consultas complejas y optimización.",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-sky-600" />,
      level: "Intermedio",
      description: "Administración y desarrollo sobre bases de datos relacionales.",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600" />,
      level: "Familiar",
      description: "Modelado de datos flexible con BSON para alta velocidad y escala.",
    },
  ],
  "Herramientas y DevOps": [
    {
      name: "Git",
      icon: <FaGitAlt className="text-red-500" />,
      level: "Intermedio",
      description: "Control de versiones, Git Flow, fusiones y resolución de conflictos.",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-white" />,
      level: "Intermedio",
      description: "Pull Requests, Actions para CI/CD y gestión de proyectos.",
    },
    {
      name: "Docker",
      icon: <FaDocker className="text-blue-500" />,
      level: "Familiar",
      description: "Contenerización para paridad entre entornos de desarrollo y producción.",
    },
    {
      name: "SonarQube",
      icon: <SiSonarqube className="text-pink-500" />,
      level: "Intermedio",
      description: "Análisis estático para detectar bugs, vulnerabilidades y code smells.",
    },
  ],
  "Operaciones & Soporte": [
    {
      name: "Intercom",
      icon: <SiIntercom className="text-blue-400" />,
      level: "Intermedio",
      description: "Gestión de soporte al cliente, atención multicanal y seguimiento de conversaciones.",
    },
    {
      name: "HubSpot",
      icon: <SiHubspot className="text-orange-400" />,
      level: "Intermedio",
      description: "CRM para seguimiento de clientes, gestión de tickets y automatización de flujos.",
    },
    {
      name: "QA Manual",
      icon: <MdOutlineManageSearch className="text-emerald-400" />,
      level: "Avanzado",
      description: "Pruebas manuales de usabilidad, levantamiento y seguimiento de tickets hasta resolución.",
    },
    {
      name: "Soporte al Cliente",
      icon: <FaHeadset className="text-violet-400" />,
      level: "Avanzado",
      description: "Atención y resolución de incidencias, re-instrucción y capacitación en manejo de workflows.",
    },
  ],
  "Metodologías": [
    {
      name: "Scrum",
      icon: <FaProjectDiagram className="text-rose-400" />,
      level: "Avanzado",
      description: "Sprints, retrospectivas, dailies y mejora continua en equipos colaborativos.",
    },
    {
      name: "Kanban",
      icon: <BsKanban className="text-indigo-400" />,
      level: "Intermedio",
      description: "Visualización del flujo de trabajo y mejora de productividad con tableros Kanban.",
    },
  ],
};
