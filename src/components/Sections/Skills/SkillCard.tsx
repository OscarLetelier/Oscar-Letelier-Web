import React from "react";
import { motion, type Variants } from "framer-motion";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  level: "Avanzado" | "Intermedio" | "Familiar";
  description: string;
}

// Cuántos de los 3 segmentos se llenan según nivel
const levelSegments: Record<string, number> = {
  Avanzado: 3,
  Intermedio: 2,
  Familiar: 1,
};

const levelColor: Record<string, string> = {
  Avanzado:   "text-emerald-400",
  Intermedio: "text-sky-400",
  Familiar:   "text-zinc-500",
};

const segmentFill: Record<string, string> = {
  Avanzado:   "bg-emerald-400",
  Intermedio: "bg-sky-400",
  Familiar:   "bg-zinc-600",
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, level, description }) => {
  const filled = levelSegments[level] ?? 1;

  return (
    <motion.div
      variants={itemVariants}
      className="group relative flex flex-col p-4 rounded-xl bg-[#161b22] border border-[#30363d] hover:border-emerald-500/60 transition-colors duration-300 cursor-default overflow-hidden"
    >
      {/* Línea de acento izquierda */}
      <div className={`absolute left-0 top-3 bottom-3 w-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${segmentFill[level]}`} />

      {/* Icono + nombre */}
      <div className="flex items-center gap-3 mb-3">
        <div className="text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="font-semibold text-white text-sm leading-tight">{name}</h3>
      </div>

      {/* Descripción siempre visible */}
      <p className="text-[11px] text-zinc-500 leading-relaxed flex-1 mb-3 group-hover:text-zinc-400 transition-colors duration-300">
        {description}
      </p>

      {/* Nivel: label + segmentos */}
      <div className="flex items-center justify-between mt-auto">
        <span className={`text-[10px] font-semibold uppercase tracking-wider ${levelColor[level]}`}>
          {level}
        </span>
        <div className="flex gap-1">
          {[1, 2, 3].map((seg) => (
            <div
              key={seg}
              className={`h-1 w-4 rounded-full transition-colors duration-300 ${
                seg <= filled ? segmentFill[level] : "bg-[#30363d]"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
