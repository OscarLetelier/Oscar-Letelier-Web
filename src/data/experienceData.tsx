import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export interface TimelineEntry {
  title: string;
  subtitle: string;
  period: string;
  description: string[];
  icon: React.ReactNode;
  current?: boolean;
}

export const experience: TimelineEntry[] = [
  {
    title: "Operations Specialist",
    subtitle: "Empresa de Software SaaS",
    period: "2024 - Presente",
    current: true,
    description: [
      "Soporte al cliente mediante gestión de canales de atención, garantizando tiempos de respuesta eficientes y resolución de incidencias.",
      "Ejecución de pruebas manuales de usabilidad sobre la plataforma, documentando hallazgos y levantando tickets de mejora con seguimiento completo hasta resolución.",
      "Coordinación de procesos de re-instrucción y capacitación a clientes en el manejo de workflows, asegurando la correcta adopción del producto.",
      "Gestión de tickets y seguimiento de issues en plataformas especializadas, manteniendo trazabilidad y SLA del proceso de soporte.",
      "Uso de herramientas: Intercom (soporte y comunicación), HubSpot (CRM y seguimiento de clientes).",
    ],
    icon: <FaBriefcase />,
  },
  {
    title: "Desarrollador Full-Stack (Java/React)",
    subtitle: "Freelance / KuraGym (SaaS Multi-tenant)",
    period: "2023 - Presente",
    current: true,
    description: [
      "Arquitectura de plataforma SaaS Multi-tenant con enfoque API-First y Arquitectura Hexagonal para garantizar escalabilidad.",
      "Backend: API RESTful con Java 21, Spring Boot 3, Spring Security, JPA, MapStruct y principios SOLID.",
      "Frontend: SPA con React, TypeScript y Tailwind CSS, implementando Clean Architecture y gestión optimizada de estado.",
      "Calidad y DevOps: pruebas unitarias (JUnit/Vitest), análisis con SonarQube y despliegue contenerizado con Docker.",
    ],
    icon: <FaBriefcase />,
  },
  {
    title: "Jefe de Prevención de Riesgos, Calidad y Medio Ambiente",
    subtitle: "Rising Sun Chile Spa",
    period: "2021 - 2023",
    description: [
      "Liderazgo del equipo de SSMA, gestionando el programa de seguridad y salud ocupacional.",
      "Implementación y mantenimiento del Sistema de Gestión Integrado (SGI).",
      "Comunicación con stakeholders y autoridades regulatorias en materia ambiental y de seguridad.",
      "Verificación y acreditación de empresas contratistas y subcontratistas.",
    ],
    icon: <FaBriefcase />,
  },
];

export const education: TimelineEntry[] = [
  {
    title: "Ingeniería en Informática",
    subtitle: "Universidad Autónoma de Chile (Sede Talca)",
    period: "2023 - Presente",
    current: true,
    description: [
      "Fundamentos de ciencias de la computación: algoritmos, estructuras de datos y paradigmas de programación.",
      "Proyectos académicos en Java, Python y JavaScript.",
      "Diseño de bases de datos relacionales (SQL) y metodologías de ingeniería de software.",
    ],
    icon: <FaGraduationCap />,
  },
  {
    title: "Auditor Interno en Sistemas Integrados de Gestión",
    subtitle: "Bureau Veritas (Online)",
    period: "2022",
    description: [
      "Certificación en interpretación y aplicación de normas ISO 9001, 14001 y 45001.",
      "Planificación, ejecución y seguimiento de auditorías internas de SGI.",
      "Metodologías de gestión de riesgos ISO 31000.",
    ],
    icon: <FaGraduationCap />,
  },
  {
    title: "Ingeniería en Prevención de Riesgos, Calidad y Medio Ambiente",
    subtitle: "INACAP (Sede Talca)",
    period: "Titulado 2018",
    description: [
      "Titulado con distinción máxima por proyecto de optimización de procesos.",
      "Pensamiento analítico y sistémico para identificación y mitigación de fallos.",
      "Metodologías TQM y mejora continua (PDCA).",
    ],
    icon: <FaGraduationCap />,
  },
];
