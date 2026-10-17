import React from "react";
import { FaLaptopCode, FaFlask, FaRocket, FaChevronRight } from "react-icons/fa";
import styles from "./QaFlow.module.css";

// Ambientes por los que pasa cada cambio antes de llegar al usuario
const environments = [
  { label: "Local", icon: FaLaptopCode },
  { label: "Staging", icon: FaFlask },
  { label: "Producción", icon: FaRocket },
];

// Ciclo de vida del ticket: el color va de "bug" (accent-2) a "pass" (accent)
const ticketStages = ["Reportado", "Triage", "En progreso", "Verificado", "Cerrado"];

const QaFlow: React.FC = () => (
  <div className={styles.flow}>
    <p className={styles.label}>Flujo QA</p>

    <ol className={styles.row} aria-label="Ambientes de prueba">
      {environments.map((env, i) => (
        <li key={env.label} className={styles.step}>
          <span className={styles.env}>
            <env.icon className={styles.envIcon} aria-hidden="true" />
            {env.label}
          </span>
          {i < environments.length - 1 && <FaChevronRight className={styles.arrow} aria-hidden="true" />}
        </li>
      ))}
    </ol>

    <ol className={styles.row} aria-label="Ciclo de vida del ticket">
      {ticketStages.map((stage, i) => (
        <li key={stage} className={styles.step}>
          <span
            className={styles.stage}
            style={{ "--stage-mix": `${(i / (ticketStages.length - 1)) * 100}%` } as React.CSSProperties}
          >
            <span className={styles.stageIndex}>{i + 1}</span>
            {stage}
          </span>
          {i < ticketStages.length - 1 && <span className={styles.connector} aria-hidden="true" />}
        </li>
      ))}
    </ol>
  </div>
);

export default QaFlow;
