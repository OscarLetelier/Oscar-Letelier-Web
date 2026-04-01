import type { IconType } from "react-icons";
import { FaCode, FaServer, FaRocket, FaGraduationCap } from "react-icons/fa";

export interface AboutStat {
  icon: IconType;
  value: string;
  label: string;
}

export interface AboutData {
  title: string;
  paragraphs: {
    text: string;
    highlight?: string;
  }[];
  quote: {
    text: string;
  };
  stats: AboutStat[];
}

export const aboutData: AboutData = {
  title: "Sobre mí",
  paragraphs: [
    {
      text: "Soy Oscar Letelier Molina, y mi camino en el desarrollo de software viene acompañado de mi experiencia previa en optimización de procesos (HSEQ). Este trasfondo me enseñó el valor del análisis, la prevención y la mejora continua, aprendizajes que hoy guían mi forma de trabajar y aportar a un equipo.",
      highlight: "Oscar Letelier Molina",
    },
    {
      text: "Mi transición al desarrollo Full-Stack nació de mis ganas de aprender y de crear herramientas útiles. Hoy disfruto desarrollando aplicaciones funcionales y amigables, buscando siempre que mi trabajo se traduzca en soluciones prácticas que aporten valor real tanto a los usuarios como al proyecto.",
    },
  ],
  quote: {
    text: "Creo que la tecnología cumple su verdadero propósito cuando logra resolver problemas complejos de manera clara, manteniéndose accesible y abierta a la colaboración.",
  },
  stats: [
    { icon: FaCode,         value: "Full-Stack",      label: "Perfil de desarrollo"  },
    { icon: FaRocket,       value: "SaaS",            label: "Entorno de trabajo"    },
    { icon: FaServer,       value: "Java + React",    label: "Stack principal"       },
    { icon: FaGraduationCap, value: "En formación",  label: "Ing. en Informática"   },
  ],
};
