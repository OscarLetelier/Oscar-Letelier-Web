import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skillsData";
import { revealOnScroll, stagger } from "@/lib/motion";
import { cx } from "@/lib/cx";
import { LevelMeter, SectionHeader } from "@/components/ui";
import SkillTile from "./SkillTile";
import styles from "./Skills.module.css";

const totalSkills = skillCategories.reduce((sum, category) => sum + category.skills.length, 0);

// Todas las categorías a la vista en un bento (sin tabs ni transiciones)
const Skills: React.FC = () => (
  <section id="skills" aria-labelledby="skills-title" className={styles.section}>
    <div className={cx("container", styles.stack)}>
      <SectionHeader
        section="skills"
        titleId="skills-title"
        title="Habilidades"
        highlight="Técnicas"
        aside={`${totalSkills} tecnologías · ${skillCategories.length} categorías`}
      />

      {/* Leyenda de niveles */}
      <ul className={styles.legend} aria-label="Leyenda de niveles">
        {(["Avanzado", "Intermedio", "Familiar"] as const).map((level) => (
          <li key={level}>
            <LevelMeter level={level} showLabel />
          </li>
        ))}
      </ul>

      <motion.ul className={styles.bento} variants={stagger(0.06)} {...revealOnScroll}>
        {skillCategories.map((category) => (
          <SkillTile key={category.name} category={category} />
        ))}
      </motion.ul>
    </div>
  </section>
);

export default Skills;
