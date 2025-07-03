import React from "react";
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
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export const skillCategories: Record<string, Skill[]> = {
  Frontend: [
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  ],
  Backend: [
    { name: "Java", icon: <FaJava className="text-orange-500" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  ],
  "Bases de Datos": [
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
    { name: "MySQL", icon: <SiMysql className="text-sky-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  ],
  "Herramientas y DevOps": [
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-600" /> },
  ],
};
