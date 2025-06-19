import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const Home: React.FC = () => {
  return (
    <section
      id="hero"
      className="bg-gray-950 text-white px-6 py-24 md:py-32 min-h-screen flex items-center justify-center"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Texto */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Hola, soy{" "}
            <span className="text-emerald-400">Oscar Letelier Molina</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
            Desarrollador FullStack orientado a la innovación
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Este sitio ha sido construido con tecnologías modernas como React,
            Tailwind CSS, Framer Motion y TypeScript, optimizando experiencia y
            rendimiento.
          </p>
          {/* Tecnologías */}
          <div className="flex gap-4 items-center pt-2 text-3xl text-emerald-400">
            <FaReact title="React" className="text-sky-400" />
            <SiTailwindcss title="Tailwind CSS" className="text-blue-500" />
            <SiTypescript title="TypeScript" className="text-blue-500" />
            <FaNodeJs title="Node.js" className="text-green-500" />
            <FaGitAlt title="Git" className="text-red-500" />
          </div>
          {/* CTA */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            {/* Botón Principal */}
            <a
              href="#about"
              className="inline-flex items-center justify-center bg-transparent hover:bg-emerald-500 text-emerald-400 font-medium hover:text-white border border-emerald-500 px-6 py-3 rounded-xl shadow-md transition-all duration-300"
            >
              Conóceme más
            </a>

            {/* Nuevo Botón Secundario para GitHub */}
            <a
              href="https://github.com/tuusuario/tu-repositorio" // ¡IMPORTANTE: Cambia esta URL por la de tu repositorio!
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent hover:bg-emerald-500 text-emerald-400 font-medium hover:text-white border border-emerald-500 px-6 py-3 rounded-xl shadow-md transition-all duration-300"
            >
              <FaGithub className="mr-2" /> {/* Ícono de GitHub */}
              Repositorio GitHub
            </a>
          </div>
        </motion.div>
        {/* Imagen */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <img
            src="./src/assets/images/oscar.jpg"
            alt="Oscar Letelier"
            className="w-80 h-80 object-cover rounded-full border-4 border-emerald-500 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
