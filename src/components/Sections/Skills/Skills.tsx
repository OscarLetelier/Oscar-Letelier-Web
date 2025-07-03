// src/components/Sections/Skills/Skills.tsx

import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skillsData";
import SkillCategory from "./SkillCategory";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative bg-gray-950 text-white px-6 py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(4,120,87,0.1),_transparent_50%)] -z-0" />

      <div className="relative z-10 max-w-5xl w-full mx-auto space-y-8">
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

        {/* El contenedor principal ahora solo mapea las categorías al nuevo componente */}
        <div className="space-y-16 pt-10">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <SkillCategory key={category} category={category} skills={skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
