import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import type { TimelineEntry } from "@/data/experienceData";
import { padNumber } from "@/data/navigationData";
import { fadeUp } from "@/lib/motion";
import { cx } from "@/lib/cx";
import { Badge, Card, Chip } from "@/components/ui";
import styles from "./TimelineItem.module.css";

interface TimelineItemProps {
  entry: TimelineEntry;
  stage: number;
  children?: React.ReactNode;
}

// Cada rol se presenta como una etapa de un pipeline: en curso o completada
const TimelineItem: React.FC<TimelineItemProps> = ({ entry, stage, children }) => {
  const { title, subtitle, period, description, tags, current, badge } = entry;
  const status = current ? "en curso" : "completado";

  return (
    <motion.li className={cx(styles.stage, current && styles.current)} variants={fadeUp}>
      {/* Marcador de estado: anillo lime (en curso) o check (completado) */}
      <span className={styles.marker} aria-hidden="true">
        {current ? <span className={styles.ring} /> : <FaCheck className={styles.check} />}
      </span>

      <Card as="article" interactive highlighted={current} className={styles.card}>
        <p className={styles.log}>
          <span>
            etapa {padNumber(stage)} · <span className={styles.status}>{status}</span>
          </span>
          <span className={styles.period}>{period}</span>
        </p>

        <header className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {(badge || current) && (
            <span className={styles.badges}>
              {badge && <Badge tone="accent2">{badge}</Badge>}
              {current && <Badge>Actual</Badge>}
            </span>
          )}
        </header>
        <p className={styles.subtitle}>{subtitle}</p>

        <ul className={styles.points}>
          {description.map((point) => (
            <li key={point} className={styles.point}>
              {point}
            </li>
          ))}
        </ul>

        {children}

        {tags && tags.length > 0 && (
          <ul className={styles.tags} aria-label="Tecnologías y prácticas">
            {tags.map((tag) => (
              <Chip as="li" key={tag} size="sm" tone={current ? "accent" : "default"}>
                {tag}
              </Chip>
            ))}
          </ul>
        )}
      </Card>
    </motion.li>
  );
};

export default TimelineItem;
