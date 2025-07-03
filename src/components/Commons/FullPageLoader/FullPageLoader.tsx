import React from "react";
import { ClipLoader } from "react-spinners"; // 1. Importa el spinner de la biblioteca

const FullPageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-metallic-blu z-[999]">
      {/* 2. Usa el componente ClipLoader */}
      <ClipLoader
        color="#F97316" // El color naranja de tu marca
        loading={true} // Siempre visible cuando el loader se renderiza
        size={60} // Un tamaño un poco más grande para que se vea bien
        aria-label="Cargando..."
      />
      <p className="mt-5 text-white text-lg font-semibold">Cargando...</p>
    </div>
  );
};

export default FullPageLoader;
