import React from "react";
import { motion, type Variants } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  level: string;
  description: string;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
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
      variants={itemVariants}
      className="group relative h-48 w-full rounded-2xl bg-gray-900/40 border border-white/5 overflow-hidden flex flex-col justify-between"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute top-3 right-3 text-white/20 group-hover:text-emerald-400 transition-colors duration-300">
        <FaInfoCircle size={14} />
      </div>

      <div className="relative z-10 p-5 flex flex-col items-center gap-3 transition-all duration-300 group-hover:-translate-y-2">
        <div className="text-4xl text-gray-300 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300 drop-shadow-lg">
          {icon}
        </div>

        <div className="text-center space-y-2">
          <h3 className="font-bold text-white tracking-wide">{name}</h3>

          <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-300 bg-emerald-500/10 rounded-full border border-emerald-500/20">
            {level}
          </span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 bg-gray-900/95 backdrop-blur-md border-t border-emerald-500/20 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
        <p className="text-xs text-gray-300 text-center leading-relaxed">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500/20 group-hover:bg-emerald-500 transition-colors duration-300" />
    </motion.div>
  );
};

export default SkillCard;
