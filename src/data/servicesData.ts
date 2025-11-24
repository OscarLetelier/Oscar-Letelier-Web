import { FaCode, FaPaintBrush, FaServer } from "react-icons/fa";
import { type IconType } from "react-icons";

export interface Service {
  icon: IconType;
  title: string;
  description: string;
}

export const servicesData: { title: string; services: Service[] } = {
  title: "Mis Servicios",
  services: [
    {
      icon: FaCode,
      title: "Desarrollo Frontend",
      description:
        "Creación de interfaces de usuario modernas, interactivas y totalmente responsivas utilizando las últimas tecnologías como React y Tailwind CSS.",
    },
    {
      icon: FaServer,
      title: "Desarrollo Backend",
      description:
        "Diseño e implementación de la lógica del servidor, APIs RESTful y gestión de bases de datos para construir la columna vertebral de tu aplicación.",
    },
    {
      icon: FaPaintBrush,
      title: "Diseño UI/UX",
      description:
        "Enfoque en la experiencia de usuario para crear diseños intuitivos y atractivos que no solo se vean bien, sino que también sean fáciles de usar.",
    },
  ],
};
