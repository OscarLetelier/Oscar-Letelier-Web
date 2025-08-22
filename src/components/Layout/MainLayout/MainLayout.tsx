import React from "react";

// Componentes Layout
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="relative bg-gray-950 text-white overflow-hidden min-h-screen">
        {/* Fondo radial general */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(4,120,87,0.2),_transparent_30%),radial-gradient(circle_at_80%_70%,_rgba(232,121,255,0.15),_transparent_40%)] -z-0" />

        {/* Contenido de la página */}
        <div className="relative z-10">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
