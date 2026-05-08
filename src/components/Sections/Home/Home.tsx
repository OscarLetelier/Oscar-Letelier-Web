import React, { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { homeData } from "@/data/homeData";
import { socialLinks } from "@/data/socialsData";
import oscarImage from "@/assets/images/oscar.webp";

const ROLES = ["Desarrollador Full-Stack", "Java Backend Dev", "React Frontend Dev"];

type TypewriterPhase = "typing" | "deleting";

function useTypewriter(words: string[], typingMs = 70, deletingMs = 40, pauseMs = 2200) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<TypewriterPhase>("typing");

  useEffect(() => {
    const word = words[index];
    if (phase === "typing") {
      if (text.length < word.length) {
        const t = setTimeout(() => setText(word.slice(0, text.length + 1)), typingMs);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("deleting"), pauseMs);
      return () => clearTimeout(t);
    }
    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(() => setText((s) => s.slice(0, -1)), deletingMs);
        return () => clearTimeout(t);
      }
      setIndex((i) => (i + 1) % words.length);
      setPhase("typing");
    }
  }, [text, phase, index, words, typingMs, deletingMs, pauseMs]);

  return text;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home: React.FC = () => {
  const { title, description, techIcons, ctaButtons } = homeData;
  const typedRole = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative px-6 min-h-screen flex items-center justify-center"
    >
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto w-full items-center">
        {/* ── Columna de texto ── */}
        <motion.div
          className="space-y-7 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Saludo + nombre — jerarquía en dos niveles */}
          <motion.div variants={itemVariants} className="space-y-1">
            <p className="text-zinc-500 text-base font-light tracking-wide">
              {title.pre}
            </p>
            <h1
              id="hero-title"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none"
            >
              {title.name.split(" ").slice(0, 2).join(" ")}
              <span className="text-emerald-400">.</span>
            </h1>
            {/* Apellido en línea separada, más delgado */}
            <p className="text-3xl md:text-4xl font-light text-zinc-400 tracking-tight">
              {title.name.split(" ").slice(2).join(" ")}
            </p>
          </motion.div>

          {/* Rol monospace — typewriter */}
          <motion.p
            className="font-mono text-zinc-500 text-sm md:text-base"
            variants={itemVariants}
          >
            <span className="text-emerald-500">&lt;</span>
            <span className="text-zinc-300">{typedRole}</span>
            <span className="inline-block w-px h-[1em] bg-emerald-400 animate-pulse align-middle mx-0.5" />
            <span className="text-emerald-500">/&gt;</span>
          </motion.p>

          {/* Descripción — antes estaba en homeData pero sin usar */}
          <motion.p
            className="text-zinc-400 text-justify text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          {/* Tech pills con etiqueta */}
          <motion.div
            className="flex flex-wrap gap-2 justify-center md:justify-start"
            variants={itemVariants}
          >
            {techIcons.map(({ Icon, title: iconTitle, color }, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161b22] border border-[#30363d] text-xs font-medium text-zinc-300 hover:border-zinc-600 transition-colors duration-200"
              >
                <Icon size={13} className={color} />
                {iconTitle}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
            variants={itemVariants}
          >
            {ctaButtons.map((button) => (
              <a
                key={button.text}
                href={button.href}
                target={button.primary ? "_self" : "_blank"}
                rel={button.primary ? "" : "noopener noreferrer"}
                className={`inline-flex items-center justify-center gap-2 font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 text-sm ${
                  button.primary
                    ? "bg-emerald-500 hover:bg-emerald-400 text-black"
                    : "border border-zinc-700 hover:border-emerald-500 text-zinc-300 hover:text-emerald-400"
                }`}
              >
                <button.icon size={15} />
                {button.text}
              </a>
            ))}
          </motion.div>

          {/* Redes — separador + iconos */}
          <motion.div
            className="flex items-center gap-1 justify-center md:justify-start pt-1 border-t border-zinc-800"
            variants={itemVariants}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.isEmail ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.name}
                title={link.name}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-zinc-600 hover:text-emerald-400 transition-colors duration-200 text-sm group"
              >
                <link.icon size={17} />
                <span className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  {link.name}
                </span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Columna de imagen ── */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            {/* Tarjeta de fondo — da profundidad */}
            <div className="absolute inset-4 bg-[#161b22] rounded-2xl border border-[#30363d]" />

            {/* Imagen principal */}
            <motion.img
              src={oscarImage}
              alt="Oscar Letelier"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl border border-zinc-700 grayscale hover:grayscale-0 transition-all duration-700"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Detalle decorativo esquina */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-xl border border-emerald-500/25" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-lg border border-emerald-500/15" />
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.a
        href="#about"
        aria-label="Scroll hacia abajo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-zinc-600 hover:text-emerald-400 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChevronDown size={12} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Home;
