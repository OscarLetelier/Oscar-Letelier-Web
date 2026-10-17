import React from "react";
import type { IconType } from "react-icons";
import { cx } from "@/lib/cx";
import styles from "./Chip.module.css";

interface ChipProps {
  as?: "span" | "li";
  icon?: IconType;
  tone?: "default" | "accent";
  size?: "sm" | "md";
  children: React.ReactNode;
}

// Etiqueta compacta para tecnologías, tags y estados
const Chip: React.FC<ChipProps> = ({
  as: Tag = "span",
  icon: Icon,
  tone = "default",
  size = "md",
  children,
}) => (
  <Tag className={cx(styles.chip, styles[tone], styles[size])}>
    {Icon && <Icon className={styles.icon} aria-hidden="true" />}
    {children}
  </Tag>
);

export default Chip;
