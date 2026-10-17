import React from "react";
import { motion } from "framer-motion";
import type { SkillCategory } from "@/data/skillsData";
import { padNumber } from "@/data/navigationData";
import { slugify } from "@/lib/slug";
import { fadeUp } from "@/lib/motion";
import { cx } from "@/lib/cx";
import { Card, LevelMeter } from "@/components/ui";
import styles from "./SkillTile.module.css";

interface SkillTileProps {
  category: SkillCategory;
}

// Tile del bento: título de categoría + filas de skill con icono y nivel.
// El tile "hero" muestra además la descripción de cada skill.
const SkillTile: React.FC<SkillTileProps> = ({ category }) => {
  const { name, icon: Icon, size, skills } = category;
  const titleId = `skills-${slugify(name)}`;
  const isHero = size === "hero";

  return (
    <motion.li className={cx(styles.tile, styles[size])} variants={fadeUp}>
      <Card as="article" className={styles.card} highlighted={isHero} aria-labelledby={titleId}>
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
              <skill.icon className={styles.skillIcon} aria-hidden="true" />
              <div className={styles.skillText}>
                <span className={styles.skillName}>{skill.name}</span>
                {isHero && <span className={styles.skillDescription}>{skill.description}</span>}
              </div>
              <LevelMeter level={skill.level} />
            </li>
          ))}
        </ul>
      </Card>
    </motion.li>
  );
};

export default SkillTile;
