import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { navigationItems } from "./navigation";
import type { NavItemConfig } from "./navigation";

const SideNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("#hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    navigationItems.forEach((item) => {
      const element = document.getElementById(item.href.substring(1));
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
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

  const renderNavItem = (item: NavItemConfig, isDesktop: boolean = false) => {
    const isActive = activeSection === item.href;
    return (
      <a
        key={item.href}
        href={item.href}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(item.href);
        }}
        className={`group relative flex items-center justify-center p-3 rounded-full transition-colors duration-300 ${
          isActive ? "text-white" : "text-gray-400 hover:text-white"
        }`}
        aria-label={item.label}
      >
        {isActive && (
          <motion.div
            layoutId={isDesktop ? "desktop-active-pill" : "mobile-active-pill"}
            className="absolute inset-0 bg-emerald-500/20 rounded-full"
            style={{ borderRadius: 9999 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">
          <item.icon size={isDesktop ? 22 : 26} />
        </span>
        {isDesktop && (
          <span className="absolute left-full ml-4 px-3 py-1.5 text-sm font-medium bg-gray-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {item.label}
          </span>
        )}
      </a>
    );
  };

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden md:flex flex-col items-center fixed right-0 top-0 h-full w-24 bg-gray-950/70 backdrop-blur-md z-40 border-l border-emerald-600/10">
        <div className="text-3xl font-bold text-emerald-400 mt-8 mb-16">
          &lt;/&gt;
        </div>
        <div className="flex flex-col gap-6">
          {navigationItems.map((item) => renderNavItem(item, true))}
        </div>
        <div className="mt-auto mb-8 flex flex-col items-center gap-6">
          {/* Social Links */}
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

      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full h-20 bg-gray-950/80 backdrop-blur-md z-40 border-t border-emerald-600/10">
        <div className="flex justify-around items-center h-full">
          {navigationItems.map((item) => renderNavItem(item, false))}
        </div>
      </nav>
    </>
  );
};

export default SideNav;
