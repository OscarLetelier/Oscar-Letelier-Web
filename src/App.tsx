import React, { lazy, Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import MainLayout from "@/components/layout/MainLayout/MainLayout";
import SectionSkeleton from "@/components/common/SectionSkeleton/SectionSkeleton";

import Home from "@/sections/Home/Home";
const About = lazy(() => import("@/sections/About/About"));
const Experience = lazy(() => import("@/sections/Experience/Experience"));
const Skills = lazy(() => import("@/sections/Skills/Skills"));

const App: React.FC = () => {
  return (
    <MainLayout>
      <Home />
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Skills />
      </Suspense>
      <SpeedInsights />
    </MainLayout>
  );
};

export default App;
