import React, { lazy, Suspense } from "react";

//Componente MainLayout
import SectionNavigator from "./components/Commons/SectionNavigator/SectionNavigator";
import MainLayout from "./components/Layout/MainLayout/MainLayout";

//Lazy Load Seccion por Seccion
const Home = lazy(() => import("./components/Sections/Home/Home"));
const About = lazy(() => import("./components/Sections/About/About"));
const Experience = lazy(
  () => import("./components/Sections/Experience/Experience")
);
const Skills = lazy(() => import("./components/Sections/Skills/Skills"));
const Projects = lazy(() => import("./components/Sections/Projects/Projects"));

const App: React.FC = () => {
  const sectionIds = ["hero", "about", "experience", "skills", "projects"];

  return (
    <>
      <MainLayout>
        <Suspense fallback={<div>Cargando Secciones...</div>} />
        <main>
          <Home />
          <About />
          <Experience />
          <Skills />
          <Projects />
        </main>
      </MainLayout>
      <SectionNavigator sectionIds={sectionIds} offset={80} />
    </>
  );
};

export default App;
