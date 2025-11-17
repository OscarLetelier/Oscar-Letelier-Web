import projectOne from "@/assets/images/portfoliopersonal.webp";
// Aquí podrías importar otras imágenes para los nuevos proyectos
// import projectTwo from "@/assets/images/project-two.webp";
// import projectThree from "@/assets/images/project-three.webp";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Portafolio Personal v2",
    description:
      "Versión actual de mi portafolio, diseñado con un enfoque moderno y construido con React, Vite y Tailwind CSS para una experiencia de usuario fluida y animada.",
    image: projectOne,
    link: "https://github.com/OscarLetelier/oscarta",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
  },
  {
    id: 2,
    title: "API REST para Gestión de Tareas",
    description:
      "Un backend robusto construido con Java y Spring Boot que expone una API RESTful para un sistema de gestión de tareas, incluyendo autenticación y autorización.",
    image: projectOne, // Reemplazar con una imagen relevante
    link: "https://github.com/OscarLetelier/", // Enlace al repo del proyecto
    tags: ["Java", "Spring Boot", "JPA", "PostgreSQL", "Docker"],
  },
  {
    id: 3,
    title: "Frontend para E-commerce",
    description:
      "Interfaz de usuario para una tienda online, enfocada en la experiencia de usuario, con catálogo de productos, carrito de compras y un diseño totalmente responsivo.",
    image: projectOne, // Reemplazar con una imagen relevante
    link: "https://github.com/OscarLetelier/", // Enlace al repo del proyecto
    tags: ["React", "Redux", "Styled-Components", "API REST"],
  },
];
