import React from "react";
import { skillCategories } from "@/data/skillsData";

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
