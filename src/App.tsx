import React, { lazy, Suspense } from "react";

//Componente MainLayout
import MainLayout from "./components/Layout/MainLayout/MainLayout";

//Componentes
{
  /* import SectionNavigator from "./components/Commons/SectionNavigator/SectionNavigator"; */
}
import SideNav from "./components/Commons/Navbar/SideNav";
import ScrollToTop from "./components/Commons/ScrollToTop/ScrollToTop";

//Lazy Load Seccion por Seccion
const Home = lazy(() => import("./components/Sections/Home/Home"));
const About = lazy(() => import("./components/Sections/About/About"));
const Experience = lazy(
  () => import("./components/Sections/Experience/Experience")
);
const Skills = lazy(() => import("./components/Sections/Skills/Skills"));
const Projects = lazy(() => import("./components/Sections/Projects/Projects"));

const App: React.FC = () => {
  {
    /* const sectionIds = ["hero", "about", "experience", "skills", "projects"]; */
  }

  return (
    <>
      <ScrollToTop />
      <SideNav />
      <MainLayout>
        <Suspense fallback={<div>Cargando...</div>}>
          <Home />
          <About />
          <Experience />
          <Skills />
          <Projects />
        </Suspense>
      </MainLayout>
      {/*<SectionNavigator sectionIds={sectionIds} offset={80} />*/}
    </>
  );
};

export default App;
