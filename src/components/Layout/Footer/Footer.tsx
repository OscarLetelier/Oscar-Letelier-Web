import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

//Boton Volver Arriba
//import ScrollToTop from "../../Commons/ScrollToTop/ScrollToTop";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-200 py-10 px-6 border-t border-emerald-600/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Nombre y año */}
        <div className="text-center md:text-left text-sm">
          © {new Date().getFullYear()} Oscar Letelier Molina | Desarrollador
          FullStatk.
        </div>

        {/* Redes sociales */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/OscarLetelier"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/oscar-letelier-molina-6a9216140/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:oscar.letelier@outlook.com"
            className="hover:text-emerald-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
