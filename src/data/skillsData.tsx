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
  SiSonarqube,
} from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { BsKanban } from "react-icons/bs";

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level: "Avanzado" | "Intermedio" | "Familiar";
  description: string;
}

export const skillCategories: Record<string, Skill[]> = {
  Frontend: [
    {
      name: "React",
      icon: <FaReact className="text-sky-400" />,
      level: "Avanzado",
      description:
        "Desarrollo de interfaces interactivas y SPAs con Hooks, Context API y optimización de rendimiento.",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500" />,
      level: "Avanzado",
      description:
        "Aumento la robustez y escalabilidad del código JavaScript mediante un tipado estático estricto.",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      level: "Avanzado",
      description:
        "Dominio de ES6+ para lógica de cliente compleja, asincronía y manipulación del DOM.",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400" />,
      level: "Avanzado",
      description:
        "Diseño de interfaces modernas y responsivas de forma rápida y mantenible con un enfoque utility-first.",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-500" />,
      level: "Avanzado",
      description:
        "Estructura semántica para mejorar la accesibilidad (A11Y) y el SEO de las aplicaciones web.",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-400" />,
      level: "Intermedio",
      description:
        "Maquetación con Flexbox y Grid, animaciones y diseño responsivo sin frameworks.",
    },
  ],
  Backend: [
    {
      name: "Java",
      icon: <FaJava className="text-orange-500" />,
      level: "Avanzado",
      description:
        "Desarrollo de aplicaciones robustas del lado del servidor, con un enfoque en la programación orientada a objetos.",
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="text-green-500" />,
      level: "Avanzado",
      description:
        "Creación de APIs RESTful seguras y eficientes, microservicios y gestión de dependencias con el ecosistema Spring.",
    },
  ],
  "Bases de Datos": [
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-300" />,
      level: "Intermedio",
      description:
        "Diseño de esquemas de bases de datos relacionales, consultas complejas y optimización de rendimiento.",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-sky-600" />,
      level: "Intermedio",
      description:
        "Administración y desarrollo sobre una de las bases de datos relacionales más populares del mundo.",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600" />,
      level: "Familiar",
      description:
        "Modelado de datos flexible con documentos BSON para aplicaciones que requieren alta velocidad y escalabilidad.",
    },
  ],
  "Herramientas y DevOps": [
    {
      name: "Git",
      icon: <FaGitAlt className="text-red-500" />,
      level: "Avanzado",
      description:
        "Control de versiones distribuido, gestión de ramas (Git Flow), fusiones y resolución de conflictos.",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-white" />,
      level: "Avanzado",
      description:
        "Colaboración en equipo mediante Pull Requests, Actions para CI/CD y gestión de proyectos.",
    },
    {
      name: "Docker",
      icon: <FaDocker className="text-blue-600" />,
      level: "Intermedio",
      description:
        "Contenerización de aplicaciones para garantizar la paridad entre entornos de desarrollo, testing y producción.",
    },
  ],
  "Metodologías y Calidad": [
    {
      name: "Scrum",
      icon: <FaProjectDiagram className="text-rose-400" />,
      level: "Avanzado",
      description:
        "Gestión ágil de proyectos con sprints, retrospectivas, dailies y mejora continua en equipos colaborativos.",
    },
    {
      name: "Kanban",
      icon: <BsKanban className="text-indigo-400" />,
      level: "Intermedio",
      description:
        "Visualización de flujo de trabajo, control de tareas y mejora de productividad a través de tableros Kanban.",
    },
    {
      name: "SonarQube",
      icon: <SiSonarqube className="text-pink-500" />,
      level: "Intermedio",
      description:
        "Análisis estático de código para mejorar la calidad, detectar bugs, vulnerabilidades y code smells.",
    },
  ],
};
