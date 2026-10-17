import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skillsData";
import { revealOnScroll, stagger } from "@/lib/motion";
import { cx } from "@/lib/cx";
import { SectionHeader } from "@/components/ui";
import SkillTile from "./SkillTile";
import styles from "./Skills.module.css";

const totalSkills = skillCategories.reduce((sum, category) => sum + category.skills.length, 0);

// Categoría destacada a todo el ancho y el resto en masonry (sin tabs ni transiciones)
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

      <motion.ul className={styles.grid} variants={stagger(0.06)} {...revealOnScroll}>
        {skillCategories.map((category) => (
          <SkillTile key={category.name} category={category} />
        ))}
      </motion.ul>
    </div>
  </section>
);

export default Skills;
