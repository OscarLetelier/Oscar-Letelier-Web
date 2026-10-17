import React from "react";
import { cx } from "@/lib/cx";
import styles from "./Badge.module.css";

interface BadgeProps {
  tone?: "accent" | "accent2";
  children: React.ReactNode;
}

// Pill compacta en mayúsculas para estados ("Actual", "Promoción")
const Badge: React.FC<BadgeProps> = ({ tone = "accent", children }) => (
  <span className={cx(styles.badge, styles[tone])}>{children}</span>
);

export default Badge;
