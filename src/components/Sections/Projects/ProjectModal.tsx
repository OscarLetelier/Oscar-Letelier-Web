import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import type { Project } from "@/data/projectsData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-gray-900/80 backdrop-blur-md rounded-2xl border border-emerald-500/20 shadow-lg max-w-3xl w-full mx-auto overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white hover:bg-black/80"
                aria-label="Cerrar modal"
              >
                <FaTimes />
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-emerald-300 mb-4">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-6">{project.description_long || project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-emerald-500/10 text-emerald-300 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-400 font-medium hover:text-white bg-emerald-500/10 hover:bg-emerald-500 px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    Ver Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 font-medium hover:text-white"
                  >
                    <FaGithub />
                    Código Fuente
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
