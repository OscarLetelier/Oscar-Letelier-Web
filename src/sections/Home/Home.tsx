import React from "react";
import { motion } from "framer-motion";
import { homeData } from "@/data/homeData";
import { socialLinks } from "@/data/socialsData";
import { fadeUp, stagger } from "@/lib/motion";
import { cx } from "@/lib/cx";
import { ButtonLink, Chip, StatusDot } from "@/components/ui";
import oscarImage from "@/assets/images/oscar.webp";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  const { title, role, roleComplement, status, description, techIcons, ctaButtons } = homeData;
  const [firstName, lastName, ...rest] = title.name.split(" ");

  return (
    <section id="hero" aria-labelledby="hero-title" className={styles.hero}>
      <div className={cx("container", styles.grid)}>
        {/* ── Columna editorial ── */}
        <motion.div className={styles.content} variants={stagger(0.08)} initial="hidden" animate="visible">
          {/* Línea de estado estilo CI */}
          <motion.p className={styles.status} variants={fadeUp}>
            <StatusDot pulse />
            <span className={styles.statusLabel}>{status.label}</span>
            {status.items.map((item) => (
              <React.Fragment key={item}>
                <span className={styles.statusSep} aria-hidden="true">·</span>
                <span>{item}</span>
              </React.Fragment>
            ))}
          </motion.p>

          <motion.h1 id="hero-title" className={styles.title} variants={fadeUp}>
            <span className={styles.greeting}>{title.pre}</span>
            <span className={styles.nameLine}>{firstName}</span>
            <span className={styles.nameLine}>
              {lastName}
              <span className={styles.dot}>.</span>
            </span>
            <span className={styles.nameRest}>{rest.join(" ")}</span>
          </motion.h1>

          <motion.p className={styles.role} variants={fadeUp}>
            <span className={styles.roleMain}>{role}</span>
            <span className={styles.roleComplement}>{roleComplement}</span>
          </motion.p>

          <motion.p className={styles.description} variants={fadeUp}>
            {description}
          </motion.p>

          <motion.ul className={styles.techList} variants={fadeUp} aria-label="Tecnologías principales">
            {techIcons.map(({ Icon, title: techTitle }) => (
              <Chip as="li" key={techTitle} icon={Icon}>
                {techTitle}
              </Chip>
            ))}
          </motion.ul>

          <motion.div className={styles.actions} variants={fadeUp}>
            {ctaButtons.map((button) => (
              <ButtonLink
                key={button.text}
                href={button.href}
                icon={button.icon}
                variant={button.primary ? "primary" : "ghost"}
              >
                {button.text}
              </ButtonLink>
            ))}
            <ul className={styles.socials}>
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target={link.isEmail ? undefined : "_blank"}
                    rel={link.isEmail ? undefined : "noopener noreferrer"}
                    aria-label={link.name}
                    title={link.name}
                    className={styles.social}
                  >
                    <link.icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* ── Retrato: estático, duotono con la paleta ── */}
        <figure className={styles.media}>
          <div className={styles.portrait}>
            <div className={styles.duotone}>
              <img
                src={oscarImage}
                alt="Retrato de Oscar Letelier Molina"
                className={styles.photo}
                width={384}
                height={384}
                fetchPriority="high"
              />
            </div>
          </div>
          <figcaption className={styles.caption}>
            <span className={styles.captionIndex}>fig. 01</span> Oscar Letelier — {role}
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Home;
