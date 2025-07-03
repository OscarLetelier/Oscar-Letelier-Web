import React, { lazy, Suspense } from "react";

//Componente MainLayout y Componentes Principales
import MainLayout from "@/components/Layout/MainLayout/MainLayout";
import FullPageLoader from "@/components/Commons/FullPageLoader/FullPageLoader";
import ScrollToTop from "@/components/Commons/ScrollToTop/ScrollToTop";

// --- Secciones de la Pagina
import Home from "@/components/Sections/Home/Home";

//Lazy Load Seccion por Seccion
const About = lazy(() => import("@/components/Sections/About/About"));
const Experience = lazy(
  () => import("@/components/Sections/Experience/Experience")
);
const Skills = lazy(() => import("@/components/Sections/Skills/Skills"));
const Projects = lazy(() => import("@/components/Sections/Projects/Projects"));

const App: React.FC = () => {
  return (
    <MainLayout>
      <ScrollToTop />
      <Home />
      <Suspense fallback={<FullPageLoader />}>
        <About />
        <Experience />
        <Skills />
        <Projects />
      </Suspense>
    </MainLayout>
  );
};

export default App;
