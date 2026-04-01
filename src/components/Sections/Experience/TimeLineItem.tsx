import React from "react";
import { motion, type Variants } from "framer-motion";

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  period: string;
  description: string[];
  current?: boolean;
  isLast?: boolean;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  icon,
  title,
  subtitle,
  period,
  description,
  current,
  isLast,
}) => {
  return (
    <motion.div className="relative flex gap-5" variants={itemVariants}>

      {/* ── Columna del eje: icono + línea ── */}
      <div className="flex flex-col items-center shrink-0">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-xl border-2 shrink-0 transition-colors duration-300 ${
            current
              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500"
              : "bg-[#161b22] text-zinc-500 border-[#30363d]"
          }`}
        >
          {icon}
        </span>
        {/* Línea solo si no es el último item */}
        {!isLast && (
          <div className="mt-2 flex-1 w-px bg-gradient-to-b from-[#30363d] to-transparent min-h-[2rem]" />
        )}
      </div>

      {/* ── Card ── */}
      <div
        className={`flex-1 mb-6 p-5 rounded-xl border transition-colors duration-300 ${
          current
            ? "bg-[#161b22] border-emerald-500/40 hover:border-emerald-500/70"
            : "bg-[#161b22] border-[#30363d] hover:border-zinc-600"
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
          <div>
            <h5 className="font-bold text-white text-sm leading-snug">{title}</h5>
            <p className="text-emerald-400/80 text-xs font-medium mt-0.5">{subtitle}</p>
          </div>

          <div className="flex flex-col items-end gap-1.5 shrink-0">
            {current && (
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                Actual
              </span>
            )}
            <span className="font-mono text-[11px] text-zinc-600 tracking-wide">
              {period}
            </span>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 mt-3">
          {description.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-zinc-400 text-xs leading-relaxed">
              <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-emerald-500/50 shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>

    </motion.div>
  );
};

export default TimelineItem;
