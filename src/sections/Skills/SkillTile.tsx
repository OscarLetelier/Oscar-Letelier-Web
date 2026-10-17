import React from "react";
import { motion } from "framer-motion";
import type { SkillCategory } from "@/data/skillsData";
import { padNumber } from "@/data/navigationData";
import { slugify } from "@/lib/slug";
import { fadeUp } from "@/lib/motion";
import { cx } from "@/lib/cx";
import { Card } from "@/components/ui";
import styles from "./SkillTile.module.css";

interface SkillTileProps {
  category: SkillCategory;
}

// Tarjeta de categoría: título + filas de skill con icono de marca y descripción de uso
const SkillTile: React.FC<SkillTileProps> = ({ category }) => {
  const { name, icon: Icon, featured, skills } = category;
  const titleId = `skills-${slugify(name)}`;

  return (
    <motion.li className={cx(styles.tile, featured && styles.featured)} variants={fadeUp}>
      <Card as="article" className={styles.card} highlighted={featured} aria-labelledby={titleId}>
        <header className={styles.header}>
          <span className={styles.icon} aria-hidden="true">
            <Icon />
          </span>
          <h3 id={titleId} className={styles.title}>
            {name}
          </h3>
          <span className={styles.count}>{padNumber(skills.length)}</span>
        </header>

        <ul className={styles.list}>
          {skills.map((skill) => (
            <li key={skill.name} className={styles.row}>
              <skill.icon className={styles.skillIcon} style={{ color: skill.color }} aria-hidden="true" />
              <div className={styles.skillText}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillDescription}>{skill.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </motion.li>
  );
};

export default SkillTile;
