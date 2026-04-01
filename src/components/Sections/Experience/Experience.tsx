import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import TimelineItem from "./TimeLineItem";
import { experience, education } from "@/data/experienceData";

type Tab = "laboral" | "educacion";

const tabs: { id: Tab; label: string; icon: typeof FaBriefcase; data: typeof experience }[] = [
  { id: "laboral",   label: "Experiencia Laboral", icon: FaBriefcase,    data: experience },
  { id: "educacion", label: "Educación",           icon: FaGraduationCap, data: education  },
];

const listVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, staggerChildren: 0.12 } },
  exit:   { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("laboral");
  const activeData = tabs.find((t) => t.id === activeTab)!.data;

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative px-6 py-24 md:py-32"
    >
      <div className="relative z-10 max-w-3xl mx-auto w-full">

        {/* ── Encabezado ── */}
        <motion.div
          className="space-y-3 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="block font-mono text-xs text-zinc-600 tracking-widest uppercase">
            03 — Trayectoria
          </span>
          <h2
            id="experience-title"
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Mi <span className="text-emerald-400">Trayectoria</span>
          </h2>
          <div className="w-12 h-[2px] bg-emerald-500" />
        </motion.div>

        {/* ── Tabs ── */}
        <motion.div
          className="flex gap-2 mb-10"
          role="tablist"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-500 border-emerald-500 text-black"
                    : "bg-transparent border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white hover:bg-[#161b22]"
                }`}
              >
                <tab.icon size={13} className={isActive ? "text-black" : "text-zinc-500"} />
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    isActive ? "bg-black/20 text-black" : "bg-zinc-800 text-zinc-500"
                  }`}
                >
                  {tab.data.length}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* ── Timeline animada ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {activeData.map((item, index) => (
              <TimelineItem
                key={`${activeTab}-${index}`}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                period={item.period}
                description={item.description}
                current={item.current}
                isLast={index === activeData.length - 1}
              />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Experience;
