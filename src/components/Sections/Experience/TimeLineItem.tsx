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

// Variantes para la animación de cada tarjeta individual
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
    // Cada item es ahora un elemento de 'motion' para animaciones individuales
    <motion.div className="relative pl-12" variants={itemVariants}>
      {/* Círculo y línea de la línea de tiempo */}
      <div className="absolute left-0 top-1 flex flex-col items-center">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-emerald-400 border border-gray-700">
          {icon}
        </span>
        <div className="h-full w-px bg-gray-700 mt-2"></div>
      </div>

      {/* Tarjeta de contenido */}
      <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-emerald-500/50 transition-colors duration-300">
        <p className="text-xs font-semibold text-gray-500 mb-1">{period}</p>
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
