import React from "react";
import {
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Java", icon: <FaJava className="text-orange-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "MySQL", icon: <SiMysql className="text-sky-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Postgre", icon: <SiPostgresql className="text-blue-300" /> },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="bg-gray-950 text-white px-6 py-20 md:py-32 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-5xl w-full text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Habilidades Técnicas
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Estas son las herramientas y tecnologías que utilizo día a día para
          construir productos robustos, rápidos y de alto nivel.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-emerald-500/20 transition-all duration-300 group"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-gray-200 text-sm font-medium tracking-wide group-hover:text-emerald-400">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
