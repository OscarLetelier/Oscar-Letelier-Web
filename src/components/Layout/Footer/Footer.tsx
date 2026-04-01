import React from "react";
import { socialLinks } from "@/data/socialsData";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-zinc-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-zinc-600">
          © {currentYear}{" "}
          <span className="text-emerald-500">Oscar Letelier</span>
          {" "}— Desarrollado con React + Vite
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.isEmail ? "_self" : "_blank"}
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-zinc-600 hover:text-emerald-400 transition-colors duration-200"
            >
              <link.icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
