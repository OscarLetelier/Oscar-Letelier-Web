import React from "react";
import Header from "../Header/Header";

import { SpeedInsights } from "@vercel/speed-insights/next";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="relative min-h-screen w-full bg-neutral-950 text-white overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
        <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
          <div className="absolute inset-0 z-20 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
          <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-500/25 blur-[120px] mix-blend-screen" />
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[500px] rounded-full bg-indigo-500/20 blur-[120px] mix-blend-screen" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <div className="flex-grow">{children}</div>
          <SpeedInsights />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
