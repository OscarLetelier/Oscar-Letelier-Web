import React from "react";
import { motion, type Variants } from "framer-motion";
import TimelineItem from "./TimeLineItem";
import { experience, education } from "@/data/experienceData";

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.18, duration: 0.5 },
  },
};

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative px-6 py-24 md:py-32 min-h-screen flex items-center justify-center"
    >
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">

        {/* Encabezado */}
        <motion.div
          className="text-center mb-16 space-y-3"
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
          <div className="w-12 h-[2px] bg-emerald-500 mx-auto" />
          <p className="text-zinc-500 text-base max-w-xl mx-auto">
            Experiencia profesional y formación académica.
          </p>
        </motion.div>

        {/* Dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 w-full">

          <motion.div
            className="space-y-8"
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="text-xl font-bold text-zinc-300 border-b border-zinc-800 pb-3">
              Experiencia Laboral
            </h3>
            {experience.map((item, index) => (
              <TimelineItem
                key={`exp-${index}`}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                period={item.period}
                description={item.description}
                current={item.current}
              />
            ))}
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="text-xl font-bold text-zinc-300 border-b border-zinc-800 pb-3">
              Educación
            </h3>
            {education.map((item, index) => (
              <TimelineItem
                key={`edu-${index}`}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                period={item.period}
                description={item.description}
                current={item.current}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
