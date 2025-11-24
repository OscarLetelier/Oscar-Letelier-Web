import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaUser } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import type { IconType } from "react-icons";

export interface TechIcon {
  Icon: IconType;
  title: string;
  color: string;
}

export interface CtaButton {
  text: string;
  href: string;
  icon: IconType;
  primary: boolean;
}

export interface HomeData {
  title: {
    pre: string;
    name: string;
    post: string;
  };
  subtitle: string;
  description: string;
  techIcons: TechIcon[];
  ctaButtons: CtaButton[];
}

export const homeData: HomeData = {
  title: {
    pre: "Hola, soy",
    name: "Oscar Letelier Molina",
    post: "",
  },
  subtitle: "Desarrollador Full-Stack | Transformo tus ideas en realidad digital.",
  description:
    "Construyo soluciones web completas y a medida, desde la base de datos hasta el último detalle de la interfaz. Mi enfoque se centra en crear software robusto, escalable y de alto rendimiento que impulse el éxito de tu proyecto.",
  techIcons: [
    { Icon: FaReact, title: "React", color: "text-sky-400" },
    { Icon: SiTailwindcss, title: "Tailwind CSS", color: "text-cyan-400" },
    { Icon: SiTypescript, title: "TypeScript", color: "text-blue-500" },
    { Icon: FaNodeJs, title: "Node.js", color: "text-green-500" },
    { Icon: FaGitAlt, title: "Git", color: "text-red-500" },
  ],
  ctaButtons: [
    {
      text: "Sobre mí",
      href: "#about",
      icon: FaUser,
      primary: true,
    },
    {
      text: "Ver en GitHub",
      href: "https://github.com/OscarLetelier",
      icon: FaGithub,
      primary: false,
    },
  ],
};
