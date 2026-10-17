import React from "react";
import { socialLinks } from "@/data/socialsData";
import { cx } from "@/lib/cx";
import { StatusDot } from "@/components/ui";
import styles from "./Footer.module.css";

// Fecha del último build, inyectada por Vite (define __BUILD_DATE__)
const buildDate = new Date(__BUILD_DATE__);
const lastUpdated = new Intl.DateTimeFormat("es-CL", { day: "2-digit", month: "short", year: "numeric" }).format(buildDate);

// Footer editorial: firma grande + redes + línea de build
const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={cx("container", styles.inner)}>
      <div className={styles.top}>
        <p className={styles.signature}>
          Oscar Letelier<span className={styles.dot}>.</span>
        </p>
        <ul className={styles.socials}>
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target={link.isEmail ? undefined : "_blank"}
                rel={link.isEmail ? undefined : "noopener noreferrer"}
                className={styles.social}
              >
                <link.icon aria-hidden="true" />
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className={styles.meta}>
        <span className={styles.build}>
          <StatusDot />
          build passing
        </span>
        <span>
          última actualización: <time dateTime={__BUILD_DATE__}>{lastUpdated}</time>
        </span>
        <span>© {buildDate.getFullYear()} · QA Engineer · Talca, Chile</span>
      </p>
    </div>
  </footer>
);

export default Footer;
