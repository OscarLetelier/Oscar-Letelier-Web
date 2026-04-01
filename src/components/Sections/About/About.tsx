import React from "react";
import { motion, type Variants } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { aboutData } from "@/data/aboutData";
import ilustra from "@/assets/images/ilustracion.webp";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const About: React.FC = () => {
  const { title, paragraphs, quote, stats } = aboutData;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative px-6 py-24 md:py-32 min-h-screen flex items-center justify-center"
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full">

        {/* ── Grid principal ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* ── Columna izquierda: texto ── */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
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
              <span className="text-emerald-400">
                {title.split(" ").slice(1).join(" ")}
              </span>
            </motion.h2>

            <motion.div
              className="w-12 h-[2px] bg-emerald-500"
              variants={itemVariants}
            />

            {/* Párrafos */}
            {paragraphs.map((p, index) => (
              <motion.p
                key={index}
                className="text-zinc-400 leading-relaxed text-base text-justify"
                variants={itemVariants}
              >
                {p.highlight
                  ? p.text.split(p.highlight).map((part, i) =>
                      i === 0 ? (
                        part
                      ) : (
                        <span key={i} className="text-white font-semibold">
                          {p.highlight}
                          {part}
                        </span>
                      )
                    )
                  : p.text}
              </motion.p>
            ))}

            {/* Cita */}
            <motion.blockquote
              className="relative pl-5 border-l-2 border-emerald-500 py-1"
              variants={itemVariants}
            >
              <FaQuoteLeft className="absolute -top-1 -left-1 text-emerald-500/20 text-2xl" />
              <p className="text-zinc-500 italic text-sm leading-relaxed pl-3">
                "{quote.text}"
              </p>
            </motion.blockquote>
          </motion.div>

          {/* ── Columna derecha: ilustración + stats ── */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Ilustración */}
            <motion.img
              src={ilustra}
              alt="Ilustración de un desarrollador"
              className="w-full max-w-sm mx-auto md:max-w-none rounded-2xl"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Grid de stats */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#161b22] border border-[#30363d] hover:border-emerald-500/50 transition-colors duration-300 group"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <stat.icon
                    size={16}
                    className="text-emerald-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm leading-tight">
                      {stat.value}
                    </p>
                    <p className="text-zinc-600 text-[11px] mt-0.5">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
