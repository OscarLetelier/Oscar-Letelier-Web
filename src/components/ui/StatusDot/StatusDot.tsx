import React from "react";
import { cx } from "@/lib/cx";
import styles from "./StatusDot.module.css";

interface StatusDotProps {
  tone?: "pass" | "fail";
  // Pulso sutil (única animación infinita permitida; off con reduced motion)
  pulse?: boolean;
}

const StatusDot: React.FC<StatusDotProps> = ({ tone = "pass", pulse }) => (
  <span className={cx(styles.dot, styles[tone])} aria-hidden="true">
    {pulse && <span className={styles.ping} />}
  </span>
);

export default StatusDot;
