import React from "react";

//Componentes Layout
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main> {children} </main>
      <Footer />
    </>
  );
};

export default MainLayout;
