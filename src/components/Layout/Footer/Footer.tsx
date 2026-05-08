import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { socialLinks } from "@/data/socialsData";
import { navigationItems } from "@/components/Commons/Navbar/navigation";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-zinc-800">
      {/* ── Cuerpo principal ── */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 gap-10">

        {/* Columna izquierda — brand + CTA */}
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="font-mono text-emerald-500 font-bold text-sm">&lt;/&gt;</p>
            <h3 className="text-white font-bold text-base">Oscar Letelier</h3>
            <p className="text-zinc-500 text-xs leading-relaxed max-w-xs">
              Desarrollador Full-Stack con foco en Java y React. Siempre abierto a nuevos proyectos y colaboraciones.
            </p>
          </div>

          <a
            href="mailto:oscar.letelier.m@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-emerald-500/40 text-emerald-400 text-xs font-medium hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-200"
          >
            <FaEnvelope size={12} />
            ¿Hablamos?
          </a>
        </div>

        {/* Columna derecha — navegación */}
        <div className="space-y-3">
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-mono">
            Navegación
          </p>
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex items-center gap-2 text-zinc-500 text-sm hover:text-emerald-400 transition-colors duration-200 group"
                >
                  <item.icon size={12} className="shrink-0 group-hover:text-emerald-400" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Barra inferior ── */}
      <div className="border-t border-zinc-800/60 px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-zinc-600">
            © {currentYear}{" "}
            <span className="text-emerald-500">Oscar Letelier</span>
            {" "}— React + Vite + Tailwind CSS
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.isEmail ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.name}
                title={link.name}
                className="text-zinc-600 hover:text-emerald-400 transition-colors duration-200"
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
