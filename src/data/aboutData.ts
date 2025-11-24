export interface AboutData {
  title: string;
  paragraphs: {
    text: string;
    highlight?: string;
    className: string;
  }[];
  quote: {
    text: string;
    author: string;
  };
}

export const aboutData: AboutData = {
  title: "Sobre mí",
  paragraphs: [
    {
      text: "Soy Oscar Letelier Molina, un desarrollador de software con una perspectiva única. Mi experiencia previa en optimización de procesos y sistemas de gestión (HSEQ) me ha dotado de una habilidad excepcional para el análisis, la atención al detalle y la gestión de riesgos, cualidades que aplico en cada línea de código.",
      highlight: "Oscar Letelier Molina",
      className: "text-lg text-gray-300 leading-relaxed",
    },
    {
      text: "Mi transición al desarrollo Full-Stack fue impulsada por una pasión por la lógica y la eficiencia. Hoy, traduzco esa pasión en soluciones de software robustas y escalables. Me especializo en crear aplicaciones que no solo funcionan a la perfección, sino que también ofrecen una experiencia de usuario intuitiva y atractiva, asegurando que el producto final aporte un valor real y medible a tu negocio.",
      className: "text-lg text-gray-400 leading-relaxed",
    },
  ],
  quote: {
    text: "Creo en construir soluciones sólidas en su interior y simples en su exterior. La verdadera calidad técnica se reconoce tanto en la robustez como en la elegancia.",
    author: "",
  },
};
