// src/components/Sections/Experience/TimelineItem.tsx

import React from "react";
import { motion, type Variants } from "framer-motion";

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  period: string;
  description: string[];
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, mass: 0.5 },
  },
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  icon,
  title,
  subtitle,
  period,
  description,
}) => {
  return (
    <motion.div className="relative pl-12" variants={itemVariants}>
      {/* Icono y línea de tiempo mejorados */}
      <div className="absolute left-0 top-1 flex flex-col items-center h-full">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/80 text-emerald-400 border-2 border-emerald-500/30 shadow-lg">
          {icon}
        </span>
        {/* Línea con gradiente */}
        <div className="mt-2 h-full w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent"></div>
      </div>

      {/* Tarjeta de contenido con efecto glassmorphism */}
      <div className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-emerald-500/50 transition-colors duration-300 shadow-md">
        <p className="text-xs font-semibold text-gray-400 mb-1">{period}</p>
        <h5 className="font-bold text-white text-lg">{title}</h5>
        <p className="text-emerald-300 text-sm font-medium mb-3">{subtitle}</p>

        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 marker:text-emerald-500">
          {description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
