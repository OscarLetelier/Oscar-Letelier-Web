import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { experience, education, type TimelineEntry } from "@/data/experienceData";
import { fadeIn, revealOnScroll } from "@/lib/motion";
import { cx } from "@/lib/cx";
import { SectionHeader, TabPanels, Tabs, type TabItem } from "@/components/ui";
import TimelineItem from "./TimelineItem";
import QaFlow from "./QaFlow";
import styles from "./Experience.module.css";

const TAB_GROUP = "experience";

const timelines: Record<string, TimelineEntry[]> = {
  laboral: experience,
  educacion: education,
};

const tabItems: TabItem[] = [
  { id: "laboral", label: "Experiencia Laboral", icon: FaBriefcase, count: experience.length },
  { id: "educacion", label: "Educación", icon: FaGraduationCap, count: education.length },
];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabItems[0].id);
  const entries = timelines[activeTab];

  return (
    <section id="experience" aria-labelledby="experience-title" className={styles.section}>
      <div className={cx("container", "containerNarrow", styles.stack)}>
        <SectionHeader section="experience" titleId="experience-title" title="Mi" highlight="Trayectoria" />

        <motion.div variants={fadeIn} {...revealOnScroll}>
          <Tabs
            group={TAB_GROUP}
            items={tabItems}
            activeId={activeTab}
            onChange={setActiveTab}
            label="Tipo de trayectoria"
          />
        </motion.div>

        <TabPanels group={TAB_GROUP} activeId={activeTab}>
          <ol className={styles.timeline}>
            {entries.map((item, index) => (
              <TimelineItem key={item.title} entry={item} stage={index + 1}>
                {item.showQaFlow && <QaFlow />}
              </TimelineItem>
            ))}
          </ol>
        </TabPanels>
      </div>
    </section>
  );
};

export default Experience;
