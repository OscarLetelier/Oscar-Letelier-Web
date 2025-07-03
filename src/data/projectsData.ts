import projectOne from "@/assets/images/portfoliopersonal.webp";
// Asegúrate de que las rutas a tus otras imágenes de proyecto sean correctas
// import projectTwo from '@/assets/images/project-two.webp';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Portafolio Personal",
    description: "Mi portafolio desarrollado con React, Tailwind y Vite.",
    image: projectOne,
    link: "https://github.com/OscarLetelier/oscarta",
  },
  {
    id: 2,
    title: "Portafolio Personal",
    description: "Mi portafolio desarrollado con React, Tailwind y Vite.",
    image: projectOne,
    link: "https://github.com/OscarLetelier/oscarta",
  },
  {
    id: 3,
    title: "Portafolio Personal",
    description: "Mi portafolio desarrollado con React, Tailwind y Vite.",
    image: projectOne,
    link: "https://github.com/OscarLetelier/oscarta",
  },
];
