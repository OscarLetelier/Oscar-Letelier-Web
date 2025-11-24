// src/components/Sections/Skills/SkillCategory.tsx

import React from "react";
import { motion, type Variants } from "framer-motion";
import SkillCard from "./SkillCard";
import type { Skill } from "@/data/skillsData";

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1, // Efecto cascada en las tarjetas
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills }) => {
  return (
    <motion.div
      key={category}
      role="tabpanel"
      id={`panel-${category}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
            description={skill.description}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;
