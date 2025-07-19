import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export interface TimelineEntry {
  title: string;
  subtitle: string;
  period: string;
  description: string[];
  icon: React.ReactNode;
}

export const experience: TimelineEntry[] = [
  {
    title: "Desarrollador Full-Stack",
    subtitle: "Freelance / Proyectos Propios",
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
    title:
      "Jefe de Departamento de Prevención de Riesgos, Calidad y Medio Ambiente",
    subtitle: "Rising Sun Chile Spa",
    period: "2021 - 2023",
    description: [
      "Liderazgo del equipo de SSMA, gestionando el programa de seguridad y salud ocupacional.",
      "Implementación y mantenimiento del Sistema de Gestión Integrado.",
      "Responsable de la comunicación con stakeholders y autoridades regulatorias en materia ambiental y de seguridad.",
      "Verificación y acreditación de empresas contratistas y subcontratistas",
    ],
    icon: <FaBriefcase />,
  },
];

export const education: TimelineEntry[] = [
  {
    title: "Ingeniería en Informática",
    subtitle: "Universidad Autónoma de Chile (Sede Talca)",
    period: "2023 - Presente",
    description: [
      "Base sólida en fundamentos de ciencias de la computación, incluyendo algoritmos, estructuras de datos y paradigmas de programación.",
      "Desarrollo de proyectos académicos utilizando lenguajes como Java, Python y JavaScript.",
      "Estudio de diseño de bases de datos relacionales (SQL) y metodologías de ingeniería de software.",
    ],
    icon: <FaGraduationCap />,
  },
  {
    title: "Auditor Interno en Sistemas Integrados de Gestión",
    subtitle: "Bureau Veritas (Online)",
    period: "2022",
    description: [
      "Certificación en la interpretación y aplicación de las normas ISO 9001, 14001 y 45001.",
      "Capacitación para la planificación, ejecución y seguimiento de auditorías internas de SGI.",
      "Metodologias de gestión de riesgos ISO 31000",
    ],
    icon: <FaGraduationCap />,
  },
  {
    title: "Ingeniero en Prevención de Riesgos, Calidad y Medio Ambiente",
    subtitle: "INACAP (Sede Talca)",
    period: "Titulado 2018",
    description: [
      "Titulado con distinción máxima por proyecto de optimización de procesos.",
      "Desarrollo de pensamiento analítico y sistémico para la identificación y mitigación de fallos.",
      "Aplicación de metodologías de gestión de calidad (TQM) y mejora continua (PDCA).",
    ],
    icon: <FaGraduationCap />,
  },
];
