import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
// El import de MdDescription ha sido eliminado.

// Tus datos de 'experience' y 'education' permanecen iguales. Son perfectos.
const experience = [
  {
    role: "Desarrollador Full-Stack",
    company: "Freelance / Proyectos Propios",
    period: "2024 - Presente",
    description: [
      "Desarrollo de soluciones web end-to-end, desde el backend (Java, SpringBoot) hasta el frontend (React, Vite).",
      "Creación de APIs RESTful seguras y eficientes para la comunicación cliente-servidor.",
      "Administración y diseño de bases de datos relacionales (PostgreSQL) y no relacionales (MongoDB).",
      "Despliegue de aplicaciones en plataformas como Vercel y AWS, utilizando contenedores Docker.",
    ],
    icon: <FaBriefcase />,
  },
  {
    role: "Jefe de Departamento de Prevención de Riesgos, Calidad y Medio Ambiente",
    company: "Rising Sun Chile Spa",
    period: "2021 - 2023",
    description: [
      "Liderazgo del equipo de SSMA, gestionando el programa de seguridad y salud ocupacional.",
      "Implementación y mantenimiento del Sistema de Gestión Integrado.",
      "Responsable de la comunicación con stakeholders y autoridades regulatorias en materia ambiental y de seguridad.",
    ],
    icon: <FaBriefcase />,
  },
];

const education = [
  {
    degree: "Ingeniería en Informática",
    institution: "Universidad Autónoma de Chile (Sede Talca)",
    period: "2023 - Presente",
    description: [
      "Base sólida en fundamentos de ciencias de la computación, incluyendo algoritmos, estructuras de datos y paradigmas de programación.",
      "Desarrollo de proyectos académicos utilizando lenguajes como Java, Python y JavaScript.",
      "Estudio de diseño de bases de datos relacionales (SQL) y metodologías de ingeniería de software.",
    ],
    icon: <FaGraduationCap />,
  },
  {
    degree: "Auditor Interno en Sistemas Integrados de Gestión",
    institution: "Bureau Veritas (Online)",
    period: "2022",
    description: [
      "Certificación en la interpretación y aplicación de las normas ISO 9001, 14001 y 45001.",
      "Capacitación para la planificación, ejecución y seguimiento de auditorías internas de SGI.",
    ],
    icon: <FaGraduationCap />,
  },
  {
    degree: "Ingeniero en Prevención de Riesgos, Calidad y Medio Ambiente",
    institution: "INACAP (Sede Talca)",
    period: "Titulado 2018",
    description: [
      "Titulado con distinción máxima por proyecto de optimización de procesos.",
      "Desarrollo de pensamiento analítico y sistémico para la identificación y mitigación de fallos.",
      "Aplicación de metodologías de gestión de calidad (TQM) y mejora continua (PDCA).",
    ],
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 w-full">
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
                  {/* AQUÍ ESTÁ LA CORRECCIÓN */}
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
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
                  {/* AQUÍ ESTÁ LA CORRECCIÓN */}
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
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
