import React from "react";
import { motion } from "framer-motion";

//Ilustracción
import ilustra from "../../../assets/images/ilustracion.webp";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-gray-950 text-white px-6 py-24 md:py-32 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto w-full space-y-20">
        {/* --- SECCIÓN BIOGRÁFICA INICIAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Sobre mí
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Me llamo{" "}
              <span className="text-emerald-400 font-semibold">
                Oscar Letelier Molina
              </span>
              , un apasionado del desarrollo FullStack con más de 5 años de
              experiencia creando soluciones modernas y eficientes.
            </p>
            <p className="text-base text-gray-400">
              A lo largo de mi carrera, he trabajado en entornos ágiles,
              automatizando procesos y mejorando infraestructuras.
            </p>
            <blockquote className="border-l-4 border-emerald-500 pl-4 text-gray-500 italic text-sm">
              “El código bien pensado no solo resuelve problemas, también crea
              experiencias.”
            </blockquote>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={ilustra}
              alt="Ilustración desarrollador"
              className="w-80 md:w-96 rounded-2xl shadow-lg border border-gray-800"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
