import React from "react";
import Footer from "../Footer/Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <main className="relative min-h-screen w-full bg-[#0e1117] text-white selection:bg-emerald-500/30 selection:text-emerald-200">
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff10 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-emerald-500" />

        <div className="relative z-10 flex flex-col min-h-screen">
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
