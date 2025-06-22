import React from "react";
import {
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker, // Añadido
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiSpringboot, // Añadido
} from "react-icons/si";

// Nueva estructura de datos por categorías
const skillCategories = {
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

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="bg-gray-950 text-white px-6 py-20 md:py-32 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-5xl w-full text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-400">
          Habilidades Técnicas
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Estas son las herramientas y tecnologías que utilizo para construir
          soluciones de software robustas, eficientes y escalables.
        </p>

        {/* Contenedor principal para las categorías */}
        <div className="space-y-12 pt-10">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-white mb-6 text-left">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 group hover:-translate-y-2"
                  >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-gray-300 text-sm font-medium tracking-wide group-hover:text-emerald-400 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
