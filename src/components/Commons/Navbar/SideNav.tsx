import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { navigationItems } from "./navigation";
import type { NavItemConfig } from "./navigation";

interface NavItemProps {
  item: NavItemConfig;
  isActive: boolean;
  shouldReduceMotion: boolean | null;
  onClick: (e: React.MouseEvent, href: string) => void;
}

const DesktopNavItem: React.FC<NavItemProps> = ({ item, isActive, shouldReduceMotion, onClick }) => {
  return (
    <a
      href={item.href}
      onClick={(e) => onClick(e, item.href)}
      className={`group relative flex items-center justify-center p-3 rounded-lg transition-all duration-200 ${
        isActive ? "text-black" : "text-zinc-500 hover:text-white"
      }`}
      aria-label={item.label}
      aria-current={isActive ? "page" : undefined}
    >
      {/* Fondo activo — sólido, sin blur */}
      {isActive && !shouldReduceMotion && (
        <motion.div
          layoutId="desktop-active-pill"
          className="absolute inset-0 bg-emerald-500 rounded-lg"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
      {isActive && shouldReduceMotion && (
        <div className="absolute inset-0 bg-emerald-500 rounded-lg" />
      )}

      <span className="relative z-10">
        <item.icon size={18} />
      </span>

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-full mr-3 px-2.5 py-1 text-xs font-semibold bg-zinc-900 border border-zinc-700 text-white rounded-md opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all whitespace-nowrap">
        {item.label}
      </span>
    </a>
  );
};

const MobileNavItem: React.FC<NavItemProps> = ({ item, isActive, shouldReduceMotion, onClick }) => {
  return (
    <a
      href={item.href}
      onClick={(e) => onClick(e, item.href)}
      className={`relative flex flex-col items-center justify-center p-2.5 rounded-lg transition-colors duration-200 ${
        isActive ? "text-black" : "text-zinc-500"
      }`}
      aria-label={item.label}
    >
      {isActive && !shouldReduceMotion && (
        <motion.div
          layoutId="mobile-active-bg"
          className="absolute inset-0 bg-emerald-500 rounded-lg"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
      {isActive && shouldReduceMotion && (
        <div className="absolute inset-0 bg-emerald-500 rounded-lg" />
      )}
      <span className="relative z-10">
        <item.icon size={20} />
      </span>
    </a>
  );
};

const SideNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("#hero");
  const shouldReduceMotion = useReducedMotion();

  const handleScrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      setActiveSection(href);
      window.scrollTo({ top: element.offsetTop, behavior: shouldReduceMotion ? "auto" : "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    navigationItems.forEach((item) => {
      const el = document.getElementById(item.href.substring(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop — barra lateral derecha, sólida */}
      <nav className="hidden md:flex flex-col items-center justify-center fixed right-0 top-0 h-screen w-16 lg:w-20 bg-[#0d0d0d] z-50 border-l border-zinc-800 py-8 gap-2">
        {/* Logo */}
        <div className="absolute top-7 font-mono text-sm font-bold text-emerald-500 select-none">
          &lt;/&gt;
        </div>
        <div className="flex flex-col gap-2">
          {navigationItems.map((item) => (
            <DesktopNavItem
              key={item.href}
              item={item}
              isActive={activeSection === item.href}
              shouldReduceMotion={shouldReduceMotion}
              onClick={handleScrollTo}
            />
          ))}
        </div>
      </nav>

      {/* Mobile — barra inferior, sólida */}
      <nav className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-[#0d0d0d] border border-zinc-800 rounded-2xl shadow-2xl shadow-black/60 px-4 py-2.5">
        <div className="flex items-center gap-1">
          {navigationItems.map((item) => (
            <MobileNavItem
              key={item.href}
              item={item}
              isActive={activeSection === item.href}
              shouldReduceMotion={shouldReduceMotion}
              onClick={handleScrollTo}
            />
          ))}
        </div>
      </nav>
    </>
  );
};

export default SideNav;
