// src/components/Sections/Skills/Skills.tsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skillsData";
import SkillCategory from "./SkillCategory";

const Skills: React.FC = () => {
  const categoryNames = Object.keys(skillCategories);
  const [activeCategory, setActiveCategory] = useState<string>(
    categoryNames[0]
  );

  return (
    <section
      id="skills"
      className="relative bg-gray-950 text-white px-6 py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(4,120,87,0.1),_transparent_50%)] -z-0" />

      <div className="relative z-10 max-w-5xl w-full mx-auto space-y-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-400">
            Habilidades Técnicas
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-4">
            Estas son las herramientas y tecnologías que utilizo para construir
            soluciones de software robustas, eficientes y escalables.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {categoryNames.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-emerald-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="pt-6">
          <SkillCategory
            category={activeCategory}
            skills={skillCategories[activeCategory]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
