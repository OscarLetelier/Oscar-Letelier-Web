import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Definimos el tipo para cada item de navegación para asegurar consistencia
type NavItem = {
  label: string;
  href: string;
};

// Definimos los props que recibirá el componente Navbar
interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-sm text-white px-9 py-6 flex items-center justify-between shadow-md bg-black/30">
      {/* Logo */}
      <div className="text-3xl font-bold tracking-tight text-emerald-400">
        &lt; Oscar Letelier /&gt;
      </div>

      {/* Menú Desktop: ahora consume los items desde los props */}
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

      {/* Botón hamburguesa (móvil) con accesibilidad mejorada */}
      <div className="md:hidden">
        <button
          className="text-3xl text-white hover:text-emerald-400 transition"
          onClick={handleToggle}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"} // Etiqueta dinámica
          aria-expanded={isOpen} // Comunica el estado (abierto/cerrado)
          aria-controls="mobile-menu" // Vincula este botón al menú desplegable
        >
          ☰
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            id="mobile-menu" // ID para que aria-controls funcione
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
                  onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
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
