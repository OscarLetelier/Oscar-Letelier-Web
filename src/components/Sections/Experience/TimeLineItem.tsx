import React from "react";
import { motion, type Variants } from "framer-motion";

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  period: string;
  description: string[];
  current?: boolean;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  icon,
  title,
  subtitle,
  period,
  description,
  current,
}) => {
  return (
    <motion.div className="relative pl-14" variants={itemVariants}>
      {/* Icono + línea vertical */}
      <div className="absolute left-0 top-0 flex flex-col items-center h-full">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-lg border shrink-0 ${
            current
              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/50"
              : "bg-[#161b22] text-zinc-500 border-[#30363d]"
          }`}
        >
          {icon}
        </span>
        <div className="mt-2 flex-1 w-px bg-[#30363d]" />
      </div>

      {/* Card */}
      <div className="bg-[#161b22] p-5 rounded-xl border border-[#30363d] hover:border-zinc-600 transition-colors duration-300">
        {/* Header de la card */}
        <div className="flex items-start justify-between gap-3 mb-1 flex-wrap">
          <h5 className="font-bold text-white text-sm leading-snug">{title}</h5>
          {current && (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 rounded-full shrink-0">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
              Actual
            </span>
          )}
        </div>

        <p className="text-emerald-400/80 text-xs font-medium mb-0.5">{subtitle}</p>
        <p className="font-mono text-[11px] text-zinc-600 mb-3 tracking-wider">{period}</p>

        <ul className="space-y-1.5">
          {description.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-zinc-500 text-xs leading-relaxed">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-500/60 shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
