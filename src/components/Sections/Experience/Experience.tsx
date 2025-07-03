// src/components/Sections/Experience/Experience.tsx

import React from "react";
import { motion, type Variants } from "framer-motion";
import TimelineItem from "./TimeLineItem";
import { experience, education } from "@/data/experienceData";

// Variantes para el contenedor principal de las dos columnas
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Cada columna (Experiencia, Educación) aparecerá con este retraso
    },
  },
};

// Variantes para cada columna individual
const columnVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2, // Cada TimelineItem dentro de la columna aparecerá con este retraso
    },
  },
};

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative bg-gray-950 text-white px-6 py-24 md:py-32 min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(4,120,87,0.1),_transparent_50%)] -z-0" />

      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        <motion.h3
          className="text-4xl font-bold text-center mb-16 text-emerald-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Mi Trayectoria
        </motion.h3>

        {/* Contenedor principal que orquesta la animación de las dos columnas */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* --- Columna de Experiencia --- */}
          <motion.div className="space-y-10" variants={columnVariants}>
            <h4 className="text-3xl font-semibold mb-6 text-center md:text-left">
              Experiencia Laboral
            </h4>
            {experience.map((item, index) => (
              <TimelineItem
                key={`exp-${index}`}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                period={item.period}
                description={item.description}
              />
            ))}
          </motion.div>

          {/* --- Columna de Educación --- */}
          <motion.div className="space-y-10" variants={columnVariants}>
            <h4 className="text-3xl font-semibold mb-6 text-center md:text-left">
              Educación
            </h4>
            {education.map((item, index) => (
              <TimelineItem
                key={`edu-${index}`}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                period={item.period}
                description={item.description}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
