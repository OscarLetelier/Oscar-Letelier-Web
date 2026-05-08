import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Footer from "../Footer/Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

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
        {/* Track */}
        <div className="fixed top-0 left-0 right-0 z-50 h-0.75 bg-zinc-800/60" />
        {/* Progress fill */}
        <motion.div
          className="fixed top-0 left-0 right-0 z-51 h-0.75 bg-emerald-500 origin-left"
          style={{ scaleX }}
        />

        <div className="relative z-10 flex flex-col min-h-screen">
          <div className="grow">{children}</div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
