// Paso 1: Importar los VALORES (los componentes de íconos) desde su librería específica.
import {
  FaHome,
  FaUser,
  FaBook,
  FaCog,
  FaProjectDiagram,
} from "react-icons/fa";

// Paso 2: Importar los TIPOS usando la sintaxis "import type".
import type { IconType } from "react-icons";

// Definimos nuestra interfaz usando el tipo importado.
// TypeScript ahora sabe que IconType es solo para verificación y no para el código final.
export interface NavItemConfig {
  label: string;
  href: string;
  icon: IconType;
}

// Nuestro array de configuración no cambia, sigue siendo correcto.
export const navigationItems: NavItemConfig[] = [
  { label: "Inicio", href: "#hero", icon: FaHome },
  { label: "Sobre Mí", href: "#about", icon: FaUser },
  { label: "Estudios", href: "#experience", icon: FaBook },
  { label: "Proyectos", href: "#projects", icon: FaProjectDiagram },
  { label: "Habilidades", href: "#skills", icon: FaCog },
];
