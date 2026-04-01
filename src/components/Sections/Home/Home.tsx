import React from "react";
import { motion, type Variants } from "framer-motion";
import { homeData } from "@/data/homeData";
import { socialLinks } from "@/data/socialsData";
import oscarImage from "@/assets/images/oscar.webp";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home: React.FC = () => {
  const { title, subtitle, techIcons, ctaButtons } = homeData;

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative px-6 min-h-screen flex items-center justify-center pt-4"
    >
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto w-full items-center">

        {/* ── Columna de texto ── */}
        <motion.div
          className="space-y-8 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge disponible */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-mono tracking-widest uppercase"
            variants={itemVariants}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponible para proyectos
          </motion.div>

          {/* Nombre principal */}
          <motion.h1
            id="hero-title"
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
            variants={itemVariants}
          >
            {title.pre}{" "}
            <span className="text-emerald-400">{title.name}</span>
            {title.post}
          </motion.h1>

          {/* Rol en estilo monospace */}
          <motion.p
            className="font-mono text-zinc-400 text-base md:text-lg"
            variants={itemVariants}
          >
            <span className="text-emerald-500">&lt;</span>
            {subtitle}
            <span className="text-emerald-500"> /&gt;</span>
          </motion.p>

          {/* Divisor */}
          <motion.div
            className="w-16 h-[2px] bg-emerald-500 mx-auto md:mx-0"
            variants={itemVariants}
          />

          {/* Iconos de tecnologías */}
          <motion.div
            className="flex gap-5 items-center justify-center md:justify-start text-3xl"
            variants={itemVariants}
          >
            {techIcons.map(({ Icon, title: iconTitle, color }, index) => (
              <motion.div
                key={index}
                title={iconTitle}
                whileHover={{ y: -6, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 350 }}
              >
                <Icon className={color} />
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            {ctaButtons.map((button) => (
              <a
                key={button.text}
                href={button.href}
                target={button.primary ? "_self" : "_blank"}
                rel={button.primary ? "" : "noopener noreferrer"}
                className={`inline-flex items-center justify-center gap-2 font-semibold px-7 py-3 rounded-lg transition-all duration-200 ${
                  button.primary
                    ? "bg-emerald-500 hover:bg-emerald-400 text-black"
                    : "border border-zinc-700 hover:border-emerald-500 text-zinc-300 hover:text-emerald-400"
                }`}
              >
                <button.icon size={16} />
                {button.text}
              </a>
            ))}
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            className="flex items-center gap-1 justify-center md:justify-start"
            variants={itemVariants}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.isEmail ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.name}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-zinc-500 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-200 text-sm"
              >
                <link.icon size={17} />
                <span className="hidden sm:inline">{link.name}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Columna de imagen ── */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Marco con borde sólido y desplazamiento */}
          <div className="relative">
            {/* Sombra / marco decorativo desplazado */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-emerald-500/40" />
            <motion.img
              src={oscarImage}
              alt="Oscar Letelier"
              className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl border-2 border-zinc-700 grayscale hover:grayscale-0 transition-all duration-500"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
