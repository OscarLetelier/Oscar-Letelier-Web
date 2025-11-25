import React, { lazy, Suspense } from "react";

//Componente MainLayout y Componentes Principales
import MainLayout from "@/components/Layout/MainLayout/MainLayout";
import FullPageLoader from "@/components/Commons/FullPageLoader/FullPageLoader";
import ScrollToTop from "@/components/Commons/ScrollToTop/ScrollToTop";

// --- Secciones de la Pagina
import Home from "@/components/Sections/Home/Home";
const About = lazy(() => import("@/components/Sections/About/About"));
/* const Services = lazy(() => import("@/components/Sections/Services/Services")); */
const Experience = lazy(
  () => import("@/components/Sections/Experience/Experience")
);
const Skills = lazy(() => import("@/components/Sections/Skills/Skills"));
{
  /*const Projects = lazy(() => import("@/components/Sections/Projects/Projects"));*/
}

const App: React.FC = () => {
  return (
    <MainLayout>
      <ScrollToTop />
      <Home />
      <Suspense fallback={<FullPageLoader />}>
        <About />
        {/*<Services />  */}
        <Experience />
        {/*<Projects /> */}
        <Skills />
      </Suspense>
    </MainLayout>
  );
};

export default App;
