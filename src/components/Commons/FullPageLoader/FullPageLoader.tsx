import React from "react";
import { ClipLoader } from "react-spinners";

const FullPageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-metallic-blu z-[999]">
      <ClipLoader
        color="#50C878"
        loading={true}
        size={60}
        aria-label="Cargando..."
      />
      <p className="mt-5 text-white text-lg font-semibold">Cargando...</p>
    </div>
  );
};

export default FullPageLoader;
