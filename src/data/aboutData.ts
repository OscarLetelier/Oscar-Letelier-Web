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
      text: "Soy Oscar Letelier Molina, un desarrollador de software con una perspectiva única. Mi experiencia previa en optimización de procesos y sistemas de gestión (HSEQ) me ha dotado de una habilidad excepcional para el análisis, la atención al detalle y la gestión de riesgos, cualidades que aplico en cada línea de código.",
      highlight: "Oscar Letelier Molina",
    },
    {
      text: "Mi transición al desarrollo Full-Stack fue impulsada por una pasión por la lógica y la eficiencia. Hoy me especializo en crear aplicaciones que no solo funcionan a la perfección, sino que también ofrecen una experiencia de usuario intuitiva y atractiva, asegurando que el producto final aporte valor real y medible.",
    },
  ],
  quote: {
    text: "Construyo soluciones sólidas en su interior y simples en su exterior. La verdadera calidad técnica se reconoce tanto en la robustez como en la elegancia.",
  },
  stats: [
    { icon: FaCode,         value: "Full-Stack",      label: "Perfil de desarrollo"  },
    { icon: FaRocket,       value: "SaaS",            label: "Entorno de trabajo"    },
    { icon: FaServer,       value: "Java + React",    label: "Stack principal"       },
    { icon: FaGraduationCap, value: "En formación",  label: "Ing. en Informática"   },
  ],
};
