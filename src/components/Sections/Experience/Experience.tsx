import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experience = [
  {
    role: "Desarrollador FullStack",
    company: "Tech Solutions Inc.",
    period: "2021 - Presente",
    description:
      "Desarrollo y mantenimiento de aplicaciones web completas utilizando React, Node.js y bases de datos SQL. Lideré la migración del frontend a TypeScript.",
    icon: <FaBriefcase />,
  },
  {
    role: "Desarrollador Frontend Jr.",
    company: "Innovate Web Co.",
    period: "2019 - 2021",
    description:
      "Creación de interfaces de usuario interactivas y responsivas. Colaboración en equipos ágiles para el lanzamiento de nuevas funcionalidades.",
    icon: <FaBriefcase />,
  },
];

const education = [
  {
    degree: "Ingeniería en Informática",
    institution: "Universidad Nacional de Tecnología",
    period: "2015 - 2019",
    description:
      "Especialización en desarrollo de software y sistemas de información.",
    icon: <FaGraduationCap />,
  },
  {
    degree: "Bootcamp de Desarrollo Web FullStack",
    institution: "CoderHouse",
    period: "2018",
    description:
      "Curso intensivo cubriendo el stack MERN (MongoDB, Express, React, Node.js).",
    icon: <FaGraduationCap />,
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="bg-gray-950 text-white px-6 py-20 min-h-screen flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-6xl w-full flex flex-col items-center"
      >
        <h3 className="text-4xl font-bold text-center mb-12 text-emerald-400">
          Experiencia y Estudios
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
          {/* Columna de Experiencia */}
          <div className="space-y-8">
            <h4 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Experiencia Laboral
            </h4>
            {experience.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-emerald-500 text-2xl mt-1">
                  {item.icon}
                </div>
                <div>
                  <h5 className="font-semibold text-white">{item.role}</h5>
                  <p className="text-emerald-300 text-sm font-medium">
                    {item.company}
                  </p>
                  <p className="text-gray-500 text-xs mt-1 mb-2">
                    {item.period}
                  </p>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Columna de Educación */}
          <div className="space-y-8">
            <h4 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Educación
            </h4>
            {education.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-emerald-500 text-2xl mt-1">
                  {item.icon}
                </div>
                <div>
                  <h5 className="font-semibold text-white">{item.degree}</h5>
                  <p className="text-emerald-300 text-sm font-medium">
                    {item.institution}
                  </p>
                  <p className="text-gray-500 text-xs mt-1 mb-2">
                    {item.period}
                  </p>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
