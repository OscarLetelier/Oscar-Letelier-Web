import { useEffect, useState } from "react";

// Sección activa: la que cruza la línea media del viewport (IntersectionObserver)
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join("|");

  useEffect(() => {
    const sectionIds = key.split("|");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    // Las secciones lazy aparecen después: se observan a medida que existen
    const observed = new Set<string>();
    const observeAvailable = () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && !observed.has(id)) {
          observer.observe(el);
          observed.add(id);
        }
      });
    };
    observeAvailable();
    const mutation = new MutationObserver(observeAvailable);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, [key]);

  return active;
}
