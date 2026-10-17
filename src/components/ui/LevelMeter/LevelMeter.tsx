import React from "react";
import type { SkillLevel } from "@/data/skillsData";
import { cx } from "@/lib/cx";
import styles from "./LevelMeter.module.css";

const levelSegments: Record<SkillLevel, number> = {
  Avanzado: 3,
  Intermedio: 2,
  Familiar: 1,
};

interface LevelMeterProps {
  level: SkillLevel;
  // Muestra el nombre del nivel junto al medidor
  showLabel?: boolean;
}

// Medidor segmentado de nivel; el texto queda disponible para lectores de pantalla
const LevelMeter: React.FC<LevelMeterProps> = ({ level, showLabel }) => {
  const filled = levelSegments[level];

  return (
    <span className={styles.meter} title={level}>
      <span className={showLabel ? styles.label : "visuallyHidden"}>{level}</span>
      <span className={styles.segments} aria-hidden="true">
        {[1, 2, 3].map((seg) => (
          <span key={seg} className={cx(styles.segment, seg <= filled && styles.on)} />
        ))}
      </span>
    </span>
  );
};

export default LevelMeter;
