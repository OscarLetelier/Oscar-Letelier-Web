import React from "react";
import { motion, type Variants } from "framer-motion";
import { aboutData } from "@/data/aboutData";
import ilustra from "@/assets/images/ilustracion.webp";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const About: React.FC = () => {
  const { title, paragraphs, quote } = aboutData;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative px-6 py-24 md:py-32 min-h-screen flex items-center justify-center"
    >
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto w-full">

        {/* ── Columna de texto ── */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Número de sección */}
          <motion.span
            className="block font-mono text-xs text-zinc-600 tracking-widest uppercase"
            variants={itemVariants}
          >
            01 — Sobre mí
          </motion.span>

          <motion.h2
            id="about-title"
            className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
            variants={itemVariants}
          >
            {title.split(" ")[0]}{" "}
            <span className="text-emerald-400">{title.split(" ").slice(1).join(" ")}</span>
          </motion.h2>

          {/* Divisor */}
          <motion.div
            className="w-12 h-[2px] bg-emerald-500"
            variants={itemVariants}
          />

          {paragraphs.map((p, index) => (
            <motion.p
              key={index}
              className="text-zinc-400 leading-relaxed text-base md:text-lg"
              variants={itemVariants}
            >
              {p.text.split(p.highlight || "").map((part, i) =>
                i < 1 ? part : (
                  <span key={i} className="text-white font-medium">
                    {p.highlight}{part}
                  </span>
                )
              )}
            </motion.p>
          ))}

          {/* Cita — borde izquierdo sólido, sin blur */}
          <motion.blockquote
            className="border-l-2 border-emerald-500 pl-5 py-1"
            variants={itemVariants}
          >
            <p className="text-zinc-500 italic text-sm leading-relaxed">
              "{quote.text}"
            </p>
          </motion.blockquote>
        </motion.div>

        {/* ── Columna de ilustración ── */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.img
            src={ilustra}
            alt="Ilustración de un desarrollador creando una idea"
            className="w-72 md:w-[420px] rounded-2xl"
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default About;
