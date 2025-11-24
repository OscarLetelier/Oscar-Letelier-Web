import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { navigationItems } from "./navigation";
import type { NavItemConfig } from "./navigation";

// --- PROPS & TYPES ---
interface NavItemProps {
  item: NavItemConfig;
  isActive: boolean;
  shouldReduceMotion: boolean | null;
  onClick: (e: React.MouseEvent, href: string) => void;
}

const DesktopNavItem: React.FC<NavItemProps> = ({
  item,
  isActive,
  shouldReduceMotion,
  onClick,
}) => {
  return (
    <a
      href={item.href}
      onClick={(e) => onClick(e, item.href)}
      className={`group relative flex items-center justify-center p-3 rounded-xl transition-all duration-300 ${
        isActive
          ? "text-white"
          : "text-gray-400 hover:text-white hover:bg-white/5"
      }`}
      aria-label={item.label}
      aria-current={isActive ? "page" : undefined}
    >
      {isActive && !shouldReduceMotion && (
        <motion.div
          layoutId="desktop-active-pill"
          className="absolute inset-0 bg-emerald-500/20 rounded-xl border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      {isActive && shouldReduceMotion && (
        <div className="absolute inset-0 bg-emerald-500/20 rounded-xl border border-emerald-500/30" />
      )}

      <span className="relative z-10">
        <item.icon
          size={20}
          className={
            isActive ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : ""
          }
        />
      </span>

      <span className="pointer-events-none absolute right-full mr-4 px-3 py-1.5 text-xs font-semibold tracking-wide bg-neutral-900/80 backdrop-blur-md text-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all border border-white/10 whitespace-nowrap">
        {item.label}
        <span className="absolute top-1/2 -right-1 -mt-1 border-4 border-transparent border-l-neutral-900/80" />
      </span>
    </a>
  );
};

const MobileNavItem: React.FC<NavItemProps> = ({
  item,
  isActive,
  shouldReduceMotion,
  onClick,
}) => {
  return (
    <a
      href={item.href}
      onClick={(e) => onClick(e, item.href)}
      className={`relative flex flex-col items-center justify-center p-2 rounded-full transition-colors duration-300 ${
        isActive ? "text-white" : "text-gray-400"
      }`}
      aria-label={item.label}
    >
      {isActive && (
        <motion.span
          layoutId="mobile-indicator"
          className="absolute -top-1 w-1 h-1 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]"
        />
      )}

      {isActive && !shouldReduceMotion && (
        <motion.div
          layoutId="mobile-active-bg"
          className="absolute inset-0 bg-emerald-500/10 rounded-2xl"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      <span className="relative z-10">
        <item.icon size={22} />
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

      window.scrollTo({
        top: element.offsetTop,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navigationItems.forEach((item) => {
      const element = document.getElementById(item.href.substring(1));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="hidden md:flex flex-col items-center justify-center fixed right-0 top-0 h-screen w-20 lg:w-24 bg-neutral-950/50 backdrop-blur-xl z-50 border-l border-white/5 py-8">
        <div className="absolute top-8">
          <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 to-emerald-700 opacity-80 select-none">
            &lt;/&gt;
          </div>
        </div>

        <div className="flex flex-col gap-6">
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

      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] h-16 bg-neutral-900/80 backdrop-blur-xl z-50 rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
        <div className="flex justify-between items-center h-full px-6">
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
