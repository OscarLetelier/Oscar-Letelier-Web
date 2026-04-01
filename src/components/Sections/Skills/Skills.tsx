import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories, categoryMeta } from "@/data/skillsData";
import SkillCategory from "./SkillCategory";

const CATEGORY_NAMES = Object.keys(skillCategories);

const totalSkills = Object.values(skillCategories).reduce(
  (sum, skills) => sum + skills.length,
  0
);

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORY_NAMES[0]);

  return (
    <section id="skills" className="relative px-6 py-24 md:py-32">
      <div className="relative z-10 max-w-6xl w-full mx-auto space-y-10">

        {/* ── Encabezado ── */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="block font-mono text-xs text-zinc-600 tracking-widest uppercase">
            02 — Skills
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end gap-3">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Habilidades <span className="text-emerald-400">Técnicas</span>
            </h2>
            {/* Contador total */}
            <span className="font-mono text-sm text-zinc-600 pb-1">
              {totalSkills} tecnologías · {CATEGORY_NAMES.length} categorías
            </span>
          </div>
          <div className="w-12 h-[2px] bg-emerald-500" />
        </motion.div>

        {/* ── Tabs con icono + label + conteo ── */}
        <motion.div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Categorías de habilidades"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {CATEGORY_NAMES.map((category) => {
            const isActive = activeCategory === category;
            const meta = categoryMeta[category];
            const count = skillCategories[category].length;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${category}`}
                className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-500 border-emerald-500 text-black"
                    : "bg-transparent border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white hover:bg-[#161b22]"
                }`}
              >
                {meta && (
                  <meta.icon
                    size={13}
                    className={isActive ? "text-black" : meta.color}
                  />
                )}
                <span>{category}</span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    isActive
                      ? "bg-black/20 text-black"
                      : "bg-zinc-800 text-zinc-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* ── Panel de skills ── */}
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
