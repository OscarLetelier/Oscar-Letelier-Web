import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projectsData";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-gray-950 text-white px-6 py-20 md:py-32 min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-6xl mx-2">
        <h2 className="text-4xl font-bold text-emerald-400 mb-10 text-center">
          Proyectos Destacados
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-emerald-500/20 transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-emerald-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
                >
                  Ver proyecto →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
