/* import React, { useEffect, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  sectionIds: string[]; // Lista de IDs de las secciones
  offset?: number; // Compensación por navbar fija
}

const SectionNavigator: React.FC<Props> = ({ sectionIds, offset = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Detectar la sección visible
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset + 1;

      const visibleIndex = sectionIds.findIndex((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        return scrollPos >= top && scrollPos < bottom;
      });

      setCurrentIndex(visibleIndex);
    };

    handleScroll(); // Inicial
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  const scrollTo = (index: number) => {
    const target = document.getElementById(sectionIds[index]);
    if (target) {
      const scrollTop = target.offsetTop - offset;
      window.scrollTo({ top: scrollTop, behavior: "smooth" });
    }
  };

  if (currentIndex === null) return null;

  return (
    <div className="fixed right-4 bottom-20 z-50 flex flex-col gap-4">
      <AnimatePresence>
        {currentIndex > 0 && (
          <motion.button
            key="up"
            onClick={() => scrollTo(currentIndex - 1)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg"
            aria-label="Ir a la sección anterior"
          >
            <FaChevronUp />
          </motion.button>
        )}

        {currentIndex < sectionIds.length - 1 && (
          <motion.button
            key="down"
            onClick={() => scrollTo(currentIndex + 1)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg"
            aria-label="Ir a la siguiente sección"
          >
            <FaChevronDown />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionNavigator;
*/
