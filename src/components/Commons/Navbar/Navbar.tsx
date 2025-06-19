import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre Mí", href: "#about" },
    { label: "Estudios", href: "#experience" },
    { label: "Habilidades", href: "#skills" },
    { label: "Proyectos", href: "#projects" },
  ];

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-sm text-white px-9 py-6 flex items-center justify-between shadow-md bg-black/30">
      {/* Logo */}
      <div className="text-3xl font-bold tracking-tight text-emerald-400">
        &lt; Oscar Letelier /&gt;
      </div>

      {/* Menú Desktop */}
      <ul className="hidden md:flex gap-8 text-base font-medium">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Botón hamburguesa (móvil) */}
      <div className="md:hidden">
        <button
          className="text-3xl text-white hover:text-emerald-400 transition"
          onClick={handleToggle}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-gray-900 text-center py-6 flex flex-col gap-4 text-lg font-medium shadow-md md:hidden"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-white hover:text-emerald-400 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
