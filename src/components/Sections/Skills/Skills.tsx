// src/components/Sections/Skills/Skills.tsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/skillsData";
import SkillCategory from "./SkillCategory";

const CATEGORY_NAMES = Object.keys(skillCategories);

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(
    CATEGORY_NAMES[0]
  );

  return (
    <section
      id="skills"
      className="relative text-white px-6 py-24 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl w-full mx-auto space-y-12">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-400">
            Habilidades Técnicas
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Herramientas y tecnologías que utilizo para construir soluciones
            digitales.
          </p>
        </motion.div>

        <div
          className="flex flex-wrap justify-center gap-2 md:gap-4"
          role="tablist"
          aria-label="Categorías de habilidades"
        >
          {CATEGORY_NAMES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${category}`}
                className={`relative px-6 py-2.5 text-sm font-semibold rounded-full transition-colors duration-300 z-10 ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-emerald-600 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {category}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {" "}
          <AnimatePresence mode="wait">
            <SkillCategory
              key={activeCategory}
              category={activeCategory}
              skills={skillCategories[activeCategory]}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
