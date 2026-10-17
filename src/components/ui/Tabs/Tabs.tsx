import React, { useRef } from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { cx } from "@/lib/cx";
import { springIndicator } from "@/lib/motion";
import { panelId, tabId } from "@/lib/slug";
import styles from "./Tabs.module.css";

export interface TabItem {
  id: string;
  label: string;
  icon?: IconType;
  count?: number;
}

interface TabsProps {
  // Prefijo único: enlaza ids de tabs/paneles y el indicador animado
  group: string;
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  label: string;
}

// Tablist accesible (flechas, Home/End) con indicador deslizante compartido
const Tabs: React.FC<TabsProps> = ({ group, items, activeId, onChange, label }) => {
  const listRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    const last = items.length - 1;
    const keyMap: Record<string, number> = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    const next = keyMap[e.key];
    if (next === undefined) return;
    e.preventDefault();
    onChange(items[next].id);
    listRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  };

  return (
    <div ref={listRef} role="tablist" aria-label={label} className={cx("glass", styles.list)}>
      {items.map((item, index) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={tabId(group, item.id)}
            aria-selected={isActive}
            aria-controls={panelId(group, item.id)}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(item.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={cx(styles.tab, isActive && styles.active)}
          >
            {isActive && (
              <motion.span
                layoutId={`${group}-tab-indicator`}
                className={styles.indicator}
                transition={springIndicator}
              />
            )}
            {item.icon && <item.icon className={styles.icon} aria-hidden="true" />}
            <span className={styles.label}>{item.label}</span>
            {item.count !== undefined && <span className={styles.count}>{item.count}</span>}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
