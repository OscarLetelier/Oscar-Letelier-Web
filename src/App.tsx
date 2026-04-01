import React, { lazy, Suspense } from "react";

import MainLayout from "@/components/Layout/MainLayout/MainLayout";
import FullPageLoader from "@/components/Commons/FullPageLoader/FullPageLoader";
import ScrollToTop from "@/components/Commons/ScrollToTop/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Home from "@/components/Sections/Home/Home";
const About = lazy(() => import("@/components/Sections/About/About"));
const Experience = lazy(() => import("@/components/Sections/Experience/Experience"));
const Skills = lazy(() => import("@/components/Sections/Skills/Skills"));

const App: React.FC = () => {
  return (
    <MainLayout>
      <ScrollToTop />
      <Home />
      <Suspense fallback={<FullPageLoader />}>
        <About />
        <Skills />
        <Experience />
      </Suspense>
      <SpeedInsights />
    </MainLayout>
  );
};

export default App;
