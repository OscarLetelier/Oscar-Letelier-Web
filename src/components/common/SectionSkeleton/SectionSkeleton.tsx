import React from "react";
import { cx } from "@/lib/cx";
import styles from "./SectionSkeleton.module.css";

// Placeholder mientras carga una sección lazy
const SectionSkeleton: React.FC = () => (
  <div className={styles.section} aria-hidden="true">
    <div className={cx("container", styles.stack)}>
      <div className={styles.header}>
        <div className={cx(styles.block, styles.eyebrow)} />
        <div className={cx(styles.block, styles.title)} />
      </div>
      <div className={cx(styles.block, styles.tabs)} />
      <div className={styles.grid}>
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className={cx(styles.block, styles.card)} />
        ))}
      </div>
    </div>
  </div>
);

export default SectionSkeleton;
