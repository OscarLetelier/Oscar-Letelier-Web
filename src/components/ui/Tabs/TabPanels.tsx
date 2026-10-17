import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useIsPresent, useReducedMotion, type Variants } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { panelId, tabId } from "@/lib/slug";
import styles from "./Tabs.module.css";

interface TabPanelsProps {
  group: string;
  activeId: string;
  children: React.ReactNode;
}

const panelVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: easeOut, delay: 0.08, staggerChildren: 0.04, delayChildren: 0.08 },
  },
  exit: { opacity: 0, transition: { duration: 0.18, ease: easeOut } },
};

interface PanelProps {
  group: string;
  id: string;
  onHeight: (height: number) => void;
  children: React.ReactNode;
}

// Panel apilado en la misma celda de grid; solo el panel presente reporta su alto
const Panel: React.FC<PanelProps> = ({ group, id, onHeight, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isPresent = useIsPresent();

  useEffect(() => {
    const el = ref.current;
    if (!el || !isPresent) return;
    const observer = new ResizeObserver(() => onHeight(el.offsetHeight));
    observer.observe(el);
    return () => observer.disconnect();
  }, [isPresent, onHeight]);

  return (
    <motion.div
      ref={ref}
      className={styles.panel}
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      // El panel saliente deja de ser interactivo y no duplica ids
      role={isPresent ? "tabpanel" : undefined}
      id={isPresent ? panelId(group, id) : undefined}
      aria-labelledby={isPresent ? tabId(group, id) : undefined}
      aria-hidden={isPresent ? undefined : true}
      data-exiting={isPresent ? undefined : ""}
      tabIndex={isPresent ? 0 : -1}
    >
      {children}
    </motion.div>
  );
};

// Crossfade entre paneles sin salto de layout: ambos paneles comparten celda
// mientras el contenedor anima su alto hacia el del panel entrante.
const TabPanels: React.FC<TabPanelsProps> = ({ group, activeId, children }) => {
  const shouldReduceMotion = useReducedMotion();
  const [height, setHeight] = useState<number | "auto">("auto");

  return (
    <motion.div
      className={styles.viewport}
      initial={false}
      animate={{ height }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: easeOut }}
    >
      <AnimatePresence initial={false}>
        <Panel key={activeId} group={group} id={activeId} onHeight={setHeight}>
          {children}
        </Panel>
      </AnimatePresence>
    </motion.div>
  );
};

export default TabPanels;
