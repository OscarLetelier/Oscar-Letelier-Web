import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/skillsData";
import SkillCategory from "./SkillCategory";

const CATEGORY_NAMES = Object.keys(skillCategories);

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORY_NAMES[0]);

  return (
    <section
      id="skills"
      className="relative px-6 py-24 md:py-32"
    >
      <div className="relative z-10 max-w-6xl w-full mx-auto space-y-12">

        {/* Encabezado */}
        <motion.div
          className="text-center space-y-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="block font-mono text-xs text-zinc-600 tracking-widest uppercase">
            02 — Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Habilidades <span className="text-emerald-400">Técnicas</span>
          </h2>
          <div className="w-12 h-[2px] bg-emerald-500 mx-auto" />
          <p className="text-zinc-500 text-base max-w-xl mx-auto">
            Herramientas y tecnologías que uso para construir soluciones digitales.
          </p>
        </motion.div>

        {/* Tabs — estilo botones sólidos */}
        <div
          className="flex flex-wrap justify-center gap-2"
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
                className={`px-5 py-2 text-sm font-semibold rounded-lg border transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-500 border-emerald-500 text-black"
                    : "bg-transparent border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Panel de skills */}
        <div className="min-h-[320px]">
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
