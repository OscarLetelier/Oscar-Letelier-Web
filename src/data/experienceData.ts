export interface TimelineEntry {
  title: string;
  subtitle: string;
  period: string;
  description: string[];
  tags?: string[];
  current?: boolean;
  // Pill destacada junto al título (p. ej. "Promoción")
  badge?: string;
  // Muestra el diagrama "Flujo QA" (ambientes + ciclo de vida del ticket)
  showQaFlow?: boolean;
}

export const experience: TimelineEntry[] = [
  {
    title: "QA Engineer",
    subtitle: "Empresa de Software SaaS - Tazki",
    period: "Sep 2026 - Presente",
    current: true,
    badge: "Promoción",
    showQaFlow: true,
    description: [
      "Promovido a QA Engineer tras mi etapa como Operations Specialist, llevando la experiencia en pruebas manuales y gestión de tickets a la automatización y la calidad del producto.",
      "Automatización de pruebas end-to-end y exploratorias con Playwright, integrando Playwright MCP para ejecutar pruebas de navegador asistidas por IA.",
      "Detección temprana de bugs con enfoque shift-left: validación de funcionalidades desde el ambiente local y en staging antes de su paso a producción.",
      "Gestión de bugs y tareas en tableros Kanban con tarjetas y tickets (Jira/Trello), con un ciclo de vida definido: reporte, triage, priorización, verificación y regresión.",
      "Diseño y ejecución de casos de prueba, y redacción de reportes de bugs reproducibles con evidencia (pasos, capturas, videos y logs).",
      "Colaboración continua con el equipo de desarrollo para priorizar correcciones, verificar fixes y sostener la calidad en cada entrega.",
    ],
    tags: [
      "Playwright",
      "Playwright MCP",
      "E2E",
      "Testing Exploratorio",
      "Kanban",
      "Jira/Trello",
      "Local / Staging",
      "Regresión",
    ],
  },
  {
    title: "Operations Specialist",
    subtitle: "Empresa de Software SaaS - Tazki",
    period: "2025 - Ago 2026",
    description: [
      "Soporte al cliente mediante gestión de canales de atención, garantizando tiempos de respuesta eficientes y resolución de incidencias.",
      "Ejecución de pruebas manuales de usabilidad sobre la plataforma, documentando hallazgos y levantando tickets de mejora con seguimiento completo hasta resolución.",
      "Coordinación de procesos de re-instrucción y capacitación a clientes en el manejo de workflows, asegurando la correcta adopción del producto.",
      "Gestión de tickets y seguimiento de issues en plataformas especializadas, manteniendo trazabilidad y SLA del proceso de soporte.",
      "Uso de herramientas: Intercom (soporte y comunicación), HubSpot (CRM y seguimiento de clientes).",
    ],
    tags: ["Intercom", "HubSpot", "QA Manual"],
  },
  {
    title: "Desarrollador Full-Stack (Java/React)",
    subtitle: "Freelance / KuraGym (SaaS Multi-tenant)",
    period: "2023 - Presente",
    current: true,
    description: [
      "Arquitectura de plataforma SaaS Multi-tenant con enfoque API-First y Domain-Driven Design (DDD), estructurando el dominio en agregados y bounded contexts para garantizar escalabilidad y mantenibilidad.",
      "Backend: API RESTful con Java 21, Spring Boot 3, Spring Security, JPA, MapStruct y principios SOLID.",
      "Frontend: SPA con React, TypeScript y Tailwind CSS, implementando Clean Architecture y gestión optimizada de estado.",
      "Calidad y DevOps: pruebas unitarias (JUnit/Vitest), análisis con SonarQube y despliegue contenerizado con Docker.",
    ],
    tags: ["Java 21", "Spring Boot", "DDD", "React", "TypeScript", "Docker", "SonarQube"],
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
    tags: ["ISO 9001", "ISO 14001", "ISO 45001", "SGI"],
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
  },
];
