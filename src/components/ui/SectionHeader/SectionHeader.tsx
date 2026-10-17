import React from "react";
import { motion } from "framer-motion";
import { sectionLabel, sectionNumber } from "@/data/navigationData";
import { fadeUp, revealOnScroll } from "@/lib/motion";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  // Id de la sección en navigationData: de ahí salen número y etiqueta
  section: string;
  titleId: string;
  title: string;
  highlight: string;
  aside?: React.ReactNode;
}

// Encabezado común con firma de "suite de pruebas": 03 ─ describe("Trayectoria")
const SectionHeader: React.FC<SectionHeaderProps> = ({ section, titleId, title, highlight, aside }) => (
  <motion.header className={styles.header} variants={fadeUp} {...revealOnScroll}>
    <p className={styles.eyebrow}>
      <span className={styles.index}>{sectionNumber(section)}</span>
      <span className={styles.code}>
        describe(<span className={styles.string}>"{sectionLabel(section)}"</span>)
      </span>
      <span className={styles.rule} aria-hidden="true" />
    </p>
    <div className={styles.row}>
      <h2 id={titleId} className={styles.title}>
        {title} <span className={styles.highlight}>{highlight}</span>
      </h2>
      {aside && <div className={styles.aside}>{aside}</div>}
    </div>
  </motion.header>
);

export default SectionHeader;
