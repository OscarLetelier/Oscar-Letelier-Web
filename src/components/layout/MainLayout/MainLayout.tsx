import React from "react";
import { MotionConfig } from "framer-motion";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTop from "@/components/common/ScrollToTop/ScrollToTop";
import styles from "./MainLayout.module.css";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  // reducedMotion="user": framer-motion omite transformaciones si el usuario lo pide
  <MotionConfig reducedMotion="user">
    <a href="#main-content" className={styles.skipLink}>
      Saltar al contenido
    </a>

    {/* Fondo estático: halos de acento (la textura de grilla vive solo en el hero) */}
    <div className={styles.backdrop} aria-hidden="true">
      <div className={styles.glowTop} />
      <div className={styles.glowBottom} />
    </div>

    <Header />
    <main id="main-content" tabIndex={-1} className={styles.main}>
      {children}
    </main>
    <Footer />
    <ScrollToTop />
  </MotionConfig>
);

export default MainLayout;
