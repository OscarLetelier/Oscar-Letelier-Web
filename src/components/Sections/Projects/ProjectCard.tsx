import React from "react";
import { motion, type Variants } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "@/data/projectsData";

interface ProjectCardProps {
  project: Project;
}

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
      className="relative group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 flex flex-col"
      variants={cardVariants}
    >
      <div className="overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-emerald-300">
          {project.title}
        </h3>
        <p className="text-sm text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-emerald-500/10 text-emerald-300 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 self-start
              text-emerald-400 font-medium group-hover:text-white 
              bg-emerald-500/10 group-hover:bg-emerald-500 
              px-4 py-2 rounded-lg transition-all duration-300
            "
          >
            Ver proyecto
            <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </div>

      <div
        className="
          absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 border border-emerald-400 pointer-events-none
        "
        aria-hidden="true"
      />
    </motion.div>
  );
};

export default ProjectCard;
