import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { projectsData, type Project } from "@/data/projectsData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section
        id="projects"
        aria-labelledby="projects-title"
        className="relative px-6 py-24 md:py-32 min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(4,120,87,0.1),_transparent_50%)] -z-0" />

        <div className="relative z-10 max-w-6xl w-full mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 id="projects-title" className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-400">
              Proyectos Destacados
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
              Estos son algunos de los proyectos en los que he trabajado,
              aplicando mi pasión por el desarrollo y el diseño.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} onOpenModal={openModal} />
            ))}
          </motion.div>
        </div>
      </section>
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
};

export default Projects;
