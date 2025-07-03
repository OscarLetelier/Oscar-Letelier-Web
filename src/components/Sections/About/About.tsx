import React from "react";
// 1. Importa el tipo 'Variants' desde framer-motion.
import { motion, type Variants } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

import ilustra from "../../../assets/images/ilustracion.webp";

// 2. Declara el objeto usando el tipo 'Variants'.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

// 3. Haz lo mismo para itemVariants y VUELVE a colocar la transición aquí.
const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    // La transición ahora es validada correctamente por TypeScript gracias al tipo 'Variants'.
    transition: { type: "spring", stiffness: 100 },
  },
};

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-gray-950 text-white px-6 py-24 md:py-32 min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(4,120,87,0.1),_transparent_50%)] -z-0" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full">
        {/* --- Columna de Texto Animada --- */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-400"
            variants={itemVariants}
          >
            Sobre mí
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            Mi nombre es{" "}
            <span className="font-semibold text-white">
              Oscar Letelier Molina
            </span>
            Mi trayectoria comenzó en la optimización de procesos dentro del
            mundo HSEQ, donde desarrollé un profundo pensamiento analítico. Esa
            pasión por la lógica y la eficiencia me llevó de forma natural al
            mundo del desarrollo de software.
          </motion.p>

          <motion.p
            className="text-lg text-gray-400 leading-relaxed"
            variants={itemVariants}
          >
            Hoy, aplico esa misma mentalidad para construir aplicaciones
            Full-Stack, creando soluciones robustas que no solo son técnicamente
            sólidas, sino también intuitivas y satisfactorias para el usuario
            final.
          </motion.p>

          <motion.blockquote
            className="relative bg-gray-900/50 border-l-4 border-emerald-500 p-6 rounded-r-lg"
            variants={itemVariants}
          >
            <FaQuoteLeft className="absolute top-4 left-4 text-emerald-500/30 text-3xl" />
            <p className="pl-8 text-base text-gray-400 italic">
              "Creo en construir soluciones sólidas en su interior y simples en
              su exterior. La verdadera calidad técnica se reconoce tanto en la
              robustez como en la elegancia."
            </p>
          </motion.blockquote>
        </motion.div>

        {/* --- Columna de la Ilustración Animada --- */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.img
            src={ilustra}
            alt="Ilustración de un desarrollador creando una idea"
            className="w-80 md:w-[450px] rounded-2xl"
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
