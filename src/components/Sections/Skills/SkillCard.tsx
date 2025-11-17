import React from "react";
import { motion, type Variants } from "framer-motion";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  level: string;
  description: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 15 },
  },
};

const SkillCard: React.FC<SkillCardProps> = ({
  name,
  icon,
  level,
  description,
}) => {
  return (
    <motion.div
      className="relative group p-6 flex flex-col items-center justify-center rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10"
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Fondo de gradiente en hover */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-400"
        aria-hidden="true"
      />

      {/* Contenido principal de la tarjeta */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="text-5xl text-white">{icon}</div>
        <span className="text-sm font-medium tracking-wide text-gray-300">
          {name}
        </span>
      </div>

      {/* Tooltip que aparece en hover */}
      <div className="absolute inset-0 top-full p-4 rounded-b-2xl bg-gray-900/90 backdrop-blur-lg text-center opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all duration-300 ease-in-out flex flex-col justify-center">
        <h4 className="font-bold text-emerald-400">{level}</h4>
        <p className="text-xs text-gray-300 mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
