import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaUser } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

// Imagen
import oscarImage from "@/assets/images/oscar.webp";

// 1. Datos de los iconos de tecnología para un código más limpio.
const techIcons = [
  { Icon: FaReact, title: "React", color: "text-sky-400" },
  { Icon: SiTailwindcss, title: "Tailwind CSS", color: "text-cyan-400" },
  { Icon: SiTypescript, title: "TypeScript", color: "text-blue-500" },
  { Icon: FaNodeJs, title: "Node.js", color: "text-green-500" },
  { Icon: FaGitAlt, title: "Git", color: "text-red-500" },
];

// 2. Variantes de animación para Framer Motion.
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Anima los hijos de forma escalonada.
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home: React.FC = () => {
  return (
    // 3. Fondo mejorado con un gradiente radial sutil para dar profundidad.
    <section
      id="hero"
      className="relative bg-gray-950 text-white px-6 min-h-screen flex items-center justify-center overflow-hidden pt-4"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(4,120,87,0.15),_transparent_40%)] -z-0" />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        {/* Contenido de Texto */}
        <motion.div
          className="space-y-6 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 4. Título principal con animación por palabra. */}
          <motion.h1
            className="text-4xl md:text-5xl pt-5 font-bold tracking-tight leading-tight"
            variants={itemVariants}
          >
            Hola, soy{" "}
            <span className="text-emerald-400">Oscar Letelier Molina</span>
          </motion.h1>

          {/* 5. Subtítulo con el nuevo texto (copy) mejorado. */}
          <motion.h2
            className="text-2xl md:text-3xl text-gray-300 font-light"
            variants={itemVariants}
          >
            Convierto ideas en aplicaciones web elegantes y eficientes.
          </motion.h2>

          {/* 6. Párrafo con el nuevo texto (copy) mejorado. */}
          <motion.p
            className="text-lg text-gray-400 leading-relaxed"
            variants={itemVariants}
          >
            Soy un desarrollador que disfruta construyendo soluciones completas,
            desde la lógica del servidor hasta interfaces de usuario
            interactivas. Mi objetivo es crear software intuitivo y de alto
            rendimiento.
          </motion.p>

          {/* Iconos de Tecnología con animación escalonada */}
          <motion.div
            className="flex gap-4 items-center justify-center md:justify-start pt-2 text-3xl"
            variants={itemVariants}
          >
            {techIcons.map(({ Icon, title, color }, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, y: -5, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon title={title} className={color} />
              </motion.div>
            ))}
          </motion.div>

          {/* Botones de Llamada a la Acción (CTA) */}
          <motion.div
            className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            {/* 7. Botón Principal con estilo destacado. */}
            <a
              href="#about"
              className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <FaUser className="mr-2" />
              Conóceme más
            </a>

            {/* 8. Botón Secundario con estilo de contorno. */}
            <a
              href="https://github.com/OscarLetelier"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent text-emerald-400 font-medium border border-emerald-500 hover:bg-emerald-500/10 px-6 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
            >
              <FaGithub className="mr-2" />
              Ver en GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* Imagen */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        >
          {/* 9. Imagen con animación de levitación sutil. */}
          <motion.img
            src={oscarImage}
            alt="Oscar Letelier"
            className="w-80 h-80 object-cover rounded-full border-4 border-emerald-500/50 shadow-2xl shadow-emerald-900/40"
            animate={{
              y: [0, -10, 0], // Mueve la imagen arriba y abajo
            }}
            transition={{
              duration: 5,
              repeat: Infinity, // Repite la animación infinitamente
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
