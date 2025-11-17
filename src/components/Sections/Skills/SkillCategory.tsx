// src/components/Sections/Skills/SkillCategory.tsx

import React from "react";
import { motion, type Variants } from "framer-motion";
import SkillCard from "./SkillCard";
import type { Skill } from "@/data/skillsData";

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
}

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills }) => {
  return (
    <motion.div
      key={category} // La clave también es importante aquí para forzar el re-renderizado
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-3xl font-semibold text-white mb-8 text-left">
        {category}
      </h3>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible" // Cambiado de whileInView a animate para que se active con el padre
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
            description={skill.description}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillCategory;
