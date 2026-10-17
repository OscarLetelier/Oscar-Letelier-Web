import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { navigationItems, padNumber } from "@/data/navigationData";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useSectionProgress } from "@/hooks/useSectionProgress";
import { springIndicator } from "@/lib/motion";
import { cx } from "@/lib/cx";
import styles from "./Header.module.css";

const sectionIds = navigationItems.map((item) => item.id);

// Header fijo: marca, enlaces con indicador activo y progreso segmentado por sección
const Header: React.FC = () => {
  const activeId = useActiveSection(sectionIds);
  const progress = useSectionProgress(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  const activeIndex = Math.max(0, sectionIds.indexOf(activeId));
  const activeItem = navigationItems[activeIndex];

  // Cerrar el menú móvil con Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className={cx("glass", styles.header)}>
      <div className={cx("container", styles.inner)}>
        <a href="#hero" className={styles.brand} aria-label="Oscar Letelier — ir al inicio">
          <span className={styles.brandMark} aria-hidden="true">&lt;/&gt;</span>
          <span className={styles.brandName}>Oscar Letelier</span>
        </a>

        {/* Desktop — enlaces con indicador deslizante */}
        <nav aria-label="Navegación principal" className={styles.desktopNav}>
          <ul className={styles.links}>
            {navigationItems.map((item) => {
              const isActive = item.id === activeId;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={cx(styles.link, isActive && styles.linkActive)}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="header-active-link"
                        className={styles.linkIndicator}
                        transition={springIndicator}
                      />
                    )}
                    <span className={styles.linkLabel}>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile — sección actual + menú */}
        <div className={styles.mobileBar}>
          <p className={styles.current}>
            <span className={styles.currentIndex}>
              {padNumber(activeIndex + 1)}/{padNumber(navigationItems.length)}
            </span>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={activeItem.id}
                className={styles.currentLabel}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                {activeItem.label}
              </motion.span>
            </AnimatePresence>
          </p>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Progreso segmentado — un tramo por sección */}
      <div
        className={styles.progress}
        style={{ "--segments": navigationItems.length } as React.CSSProperties}
        aria-hidden="true"
      >
        {navigationItems.map((item, i) => (
          <span key={item.id} className={cx(styles.segment, i === activeIndex && styles.segmentActive)}>
            <span className={styles.segmentFill} style={{ transform: `scaleX(${progress[i] ?? 0})` }} />
          </span>
        ))}
      </div>

      {/* Menú móvil desplegable */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Navegación principal"
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className={cx("container", styles.mobileLinks)}>
              {navigationItems.map((item, i) => {
                const isActive = item.id === activeId;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "location" : undefined}
                      className={cx(styles.mobileLink, isActive && styles.mobileLinkActive)}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className={styles.mobileIndex}>{padNumber(i + 1)}</span>
                      <item.icon aria-hidden="true" />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
