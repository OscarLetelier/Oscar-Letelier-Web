import projectOne from "@/assets/images/portfoliopersonal.webp";
// Aquí podrías importar otras imágenes para los nuevos proyectos
// import projectTwo from "@/assets/images/project-two.webp";
// import projectThree from "@/assets/images/project-three.webp";

export interface Project {
  id: number;
  title: string;
  description: string;
  description_long?: string;
  image: string;
  link?: string;
  github?: string;
  tags: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Portafolio Personal v2",
    description:
      "Versión actual de mi portafolio, diseñado con un enfoque moderno y construido con React, Vite y Tailwind CSS para una experiencia de usuario fluida y animada.",
    description_long:
      "Este portafolio es un proyecto personal en constante evolución. La versión actual está construida con las últimas tecnologías de frontend para garantizar un rendimiento óptimo y una experiencia de usuario atractiva. Algunas de las características clave incluyen un diseño totalmente responsivo, animaciones suaves con Framer Motion, y carga diferida de componentes para una carga inicial más rápida.",
    image: projectOne,
    github: "https://github.com/OscarLetelier/oscarta",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
  },
  {
    id: 2,
    title: "API REST para Gestión de Tareas",
    description:
      "Un backend robusto construido con Java y Spring Boot que expone una API RESTful para un sistema de gestión de tareas, incluyendo autenticación y autorización.",
    description_long:
      "Esta API RESTful, construida con Java y Spring Boot, proporciona una base sólida para una aplicación de gestión de tareas. Incluye funcionalidades como la creación, lectura, actualización y eliminación (CRUD) de tareas, así como la gestión de usuarios con autenticación basada en JWT y autorización por roles. La base de datos utilizada es PostgreSQL, y el proyecto está dockerizado para facilitar su despliegue.",
    image: projectOne, // Reemplazar con una imagen relevante
    github: "https://github.com/OscarLetelier/", // Enlace al repo del proyecto
    tags: ["Java", "Spring Boot", "JPA", "PostgreSQL", "Docker"],
  },
  {
    id: 3,
    title: "Frontend para E-commerce",
    description:
      "Interfaz de usuario para una tienda online, enfocada en la experiencia de usuario, con catálogo de productos, carrito de compras y un diseño totalmente responsivo.",
    description_long:
      "Este proyecto de frontend para una tienda online se centra en proporcionar una experiencia de compra fluida e intuitiva. Desarrollado con React y Redux para la gestión del estado, cuenta con un catálogo de productos con filtros y búsqueda, un carrito de compras funcional y un proceso de pago simulado. El diseño es totalmente responsivo y se adapta a cualquier dispositivo.",
    image: projectOne, // Reemplazar con una imagen relevante
    github: "https://github.com/OscarLetelier/", // Enlace al repo del proyecto
    tags: ["React", "Redux", "Styled-Components", "API REST"],
  },
];
