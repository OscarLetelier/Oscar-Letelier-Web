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
      text: "Mi nombre es Oscar Letelier Molina. Mi trayectoria comenzó en la optimización de procesos dentro del mundo HSEQ, donde desarrollé un profundo pensamiento analítico. Esa pasión por la lógica y la eficiencia me llevó de forma natural al mundo del desarrollo de software.",
      highlight: "Oscar Letelier Molina",
      className: "text-lg text-gray-300 leading-relaxed",
    },
    {
      text: "Hoy, aplico esa misma mentalidad para construir aplicaciones Full-Stack, creando soluciones robustas que no solo son técnicamente sólidas, sino también intuitivas y satisfactorias para el usuario final.",
      className: "text-lg text-gray-400 leading-relaxed",
    },
  ],
  quote: {
    text: "Creo en construir soluciones sólidas en su interior y simples en su exterior. La verdadera calidad técnica se reconoce tanto en la robustez como en la elegancia.",
    author: "",
  },
};
