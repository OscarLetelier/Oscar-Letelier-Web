import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Ahora FaEnvelope se utiliza
import { navigationItems } from "./navigation";

import type { NavItemConfig } from "./navigation";

const SideNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("#hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = "";

      navigationItems.forEach((item) => {
        const element = document.getElementById(item.href.substring(1));
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = item.href;
        }
      });
      setActiveSection(
        currentSection ||
          (navigationItems.length > 0 ? navigationItems[0].href : "")
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const renderNavItem = (item: NavItemConfig, isDesktop: boolean = false) => (
    <a
      key={item.href}
      href={item.href}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(item.href);
      }}
      className={`group relative flex items-center justify-center p-3 rounded-full transition-colors duration-300
        ${
          activeSection === item.href
            ? "bg-emerald-500/20 text-emerald-400"
            : "text-gray-400 hover:bg-gray-700 hover:text-white"
        }`}
      aria-label={item.label}
    >
      <item.icon size={isDesktop ? 22 : 26} />
      {isDesktop && (
        <span className="absolute left-full ml-4 px-3 py-1.5 text-sm font-medium bg-gray-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {item.label}
        </span>
      )}
    </a>
  );

  return (
    <>
      <nav className="hidden md:flex flex-col items-center fixed right-0 top-0 h-full w-24 bg-gray-950/70 backdrop-blur-md z-40 border-l border-emerald-600/10">
        <div className="text-3xl font-bold text-emerald-400 mt-8 mb-16">
          &lt;/&gt;
        </div>
        <div className="flex flex-col gap-6">
          {navigationItems.map((item) => renderNavItem(item, true))}
        </div>
        <div className="mt-auto mb-8 flex flex-col items-center gap-6">
          <a
            href="https://github.com/OscarLetelier"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/oscar-letelier-molina-6a9216140/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={26} />
          </a>
          <a
            href="mailto:oscar.letelier@outlook.com"
            className="text-gray-400 hover:text-emerald-400 transition-colors"
            aria-label="Enviar correo"
          >
            <FaEnvelope size={26} />
          </a>
        </div>
      </nav>

      <nav className="md:hidden fixed bottom-0 left-0 w-full h-20 bg-gray-950/80 backdrop-blur-md z-40 border-t border-emerald-600/10">
        <div className="flex justify-around items-center h-full">
          {navigationItems.map((item) => renderNavItem(item))}
        </div>
      </nav>
    </>
  );
};

export default SideNav;
