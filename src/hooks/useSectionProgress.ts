import { useEffect, useState } from "react";

const clamp = (v: number) => Math.min(1, Math.max(0, v));

// Progreso 0–1 de lectura de cada sección. Una "línea de lectura" recorre el
// documento de arriba a abajo junto al scroll, así cada segmento se llena en orden
// y todos quedan completos al final de la página.
export function useSectionProgress(ids: string[]): number[] {
  const [progress, setProgress] = useState<number[]>(() => ids.map(() => 0));
  const key = ids.join("|");

  useEffect(() => {
    const sectionIds = key.split("|");
    let frame = 0;

    const measure = () => {
      frame = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 1;
      const line = window.scrollY + window.innerHeight * ratio;

      const next = sectionIds.map((id) => {
        const el = document.getElementById(id);
        if (!el) return 0;
        const top = el.getBoundingClientRect().top + window.scrollY;
        return clamp((line - top) / el.offsetHeight);
      });
      setProgress((prev) =>
        prev.length === next.length && prev.every((v, i) => Math.abs(v - next[i]) < 0.002)
          ? prev
          : next
      );
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resize.disconnect();
    };
  }, [key]);

  return progress;
}
