import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { aboutData } from "@/data/aboutData";
import { fadeUp, revealOnScroll, stagger } from "@/lib/motion";
import { cx } from "@/lib/cx";
import { Card, SectionHeader, TerminalCard } from "@/components/ui";
import styles from "./About.module.css";

// Resalta solo el fragmento indicado dentro del párrafo
const renderHighlighted = (text: string, highlight?: string) => {
  if (!highlight) return text;
  return text.split(highlight).map((part, i) =>
    i === 0 ? (
      part
    ) : (
      <React.Fragment key={i}>
        <strong className={styles.strong}>{highlight}</strong>
        {part}
      </React.Fragment>
    )
  );
};

const About: React.FC = () => {
  const { title, paragraphs, quote, stats, terminal } = aboutData;
  const [firstWord, ...rest] = title.split(" ");

  return (
    <section id="about" aria-labelledby="about-title" className={styles.section}>
      <div className={cx("container", styles.stack)}>
        <SectionHeader section="about" titleId="about-title" title={firstWord} highlight={rest.join(" ")} />

        <div className={styles.grid}>
          {/* ── Texto ── */}
          <motion.div className={styles.text} variants={stagger(0.12)} {...revealOnScroll}>
            {paragraphs.map((p, index) => (
              <motion.p key={index} className={styles.paragraph} variants={fadeUp}>
                {renderHighlighted(p.text, p.highlight)}
              </motion.p>
            ))}

            <motion.div variants={fadeUp}>
              <Card as="blockquote" className={styles.quote}>
                <FaQuoteLeft aria-hidden="true" className={styles.quoteIcon} />
                <p>"{quote.text}"</p>
              </Card>
            </motion.div>
          </motion.div>

          {/* ── Reporte de pruebas + stats ── */}
          <motion.div className={styles.aside} variants={stagger(0.08)} {...revealOnScroll}>
            <motion.div variants={fadeUp}>
              <TerminalCard report={terminal} />
            </motion.div>

            <ul className={styles.stats}>
              {stats.map((stat) => (
                <motion.li key={stat.label} variants={fadeUp}>
                  <Card interactive className={styles.stat}>
                    <span className={styles.statIcon}>
                      <stat.icon aria-hidden="true" />
                    </span>
                    <div>
                      <p className={styles.statValue}>{stat.value}</p>
                      <p className={styles.statLabel}>{stat.label}</p>
                    </div>
                  </Card>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
