import React from "react";
import { motion, type Variants } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "@/data/projectsData"; // Asegúrate de exportar la interfaz Project

interface ProjectCardProps {
  project: Project;
}

// Variantes para la animación de entrada de cada tarjeta.
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="relative group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10"
      variants={cardVariants}
    >
      {/* Imagen con efecto de zoom en hover */}
      <div className="overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-6 flex flex-col h-[180px]">
        {" "}
        {/* Altura fija para alinear botones */}
        <h3 className="text-xl font-bold mb-2 text-emerald-300">
          {project.title}
        </h3>
        <p className="text-sm text-gray-300 flex-grow">{project.description}</p>
        {/* Botón de acción mejorado */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-4 inline-flex items-center gap-2 self-start
            text-emerald-400 font-medium group-hover:text-white 
            bg-emerald-500/10 group-hover:bg-emerald-500 
            px-4 py-2 rounded-lg transition-all duration-300
          "
        >
          Ver proyecto
          <FaExternalLinkAlt size={12} />
        </a>
      </div>

      {/* Efecto de borde con brillo en hover */}
      <div
        className="
          absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 border border-emerald-400
        "
        aria-hidden="true"
      />
    </motion.div>
  );
};

export default ProjectCard;
