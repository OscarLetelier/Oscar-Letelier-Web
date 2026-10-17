import React from "react";
import type { TerminalReport } from "@/data/aboutData";
import { cx } from "@/lib/cx";
import Card from "../Card/Card";
import styles from "./TerminalCard.module.css";

const statusSymbol = { pass: "✓", fail: "✗", info: "›" } as const;
const statusLabel = { pass: "aprobado", fail: "falla", info: "info" } as const;

interface TerminalCardProps {
  report: TerminalReport;
}

// Ventana de terminal estática con el resultado de una corrida de pruebas
const TerminalCard: React.FC<TerminalCardProps> = ({ report }) => (
  <Card as="figure" className={styles.terminal} aria-label={`Reporte de pruebas: ${report.command}`}>
    <div className={styles.chrome} aria-hidden="true">
      <span className={styles.dots}>
        <span />
        <span />
        <span />
      </span>
      <span className={styles.title}>{report.title}</span>
    </div>

    <div className={styles.body}>
      <p className={styles.command}>
        <span className={styles.prompt} aria-hidden="true">$</span> {report.command}
      </p>
      <ul className={styles.lines}>
        {report.lines.map((line) => (
          <li key={line.text} className={cx(styles.line, styles[line.status])}>
            <span className={styles.symbol} aria-hidden="true">{statusSymbol[line.status]}</span>
            <span className="visuallyHidden">{statusLabel[line.status]}:</span>
            <span className={styles.text}>{line.text}</span>
            {line.meta && <span className={styles.meta}>{line.meta}</span>}
          </li>
        ))}
      </ul>
      <p className={styles.summary}>
        <span className={styles.passed}>{report.summary.passed}</span>
        <span aria-hidden="true">·</span>
        <span className={styles.failed}>{report.summary.failed}</span>
      </p>
    </div>
  </Card>
);

export default TerminalCard;
