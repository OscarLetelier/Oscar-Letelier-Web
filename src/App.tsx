import React, { lazy, Suspense } from "react";

import MainLayout from "@/components/Layout/MainLayout/MainLayout";
import SectionSkeleton from "@/components/Commons/SectionSkeleton/SectionSkeleton";
import ScrollToTop from "@/components/Commons/ScrollToTop/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Home from "@/components/Sections/Home/Home";
const About = lazy(() => import("@/components/Sections/About/About"));
const Skills = lazy(() => import("@/components/Sections/Skills/Skills"));
const Experience = lazy(() => import("@/components/Sections/Experience/Experience"));

const App: React.FC = () => {
  return (
    <MainLayout>
      <ScrollToTop />
      <Home />
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Experience />
      </Suspense>
      <SpeedInsights />
    </MainLayout>
  );
};

export default App;
