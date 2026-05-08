import React from "react";

const SectionSkeleton: React.FC = () => (
  <section className="relative px-6 py-24 md:py-32 animate-pulse">
    <div className="max-w-6xl mx-auto w-full space-y-8">
      {/* Encabezado */}
      <div className="space-y-3">
        <div className="h-3 w-24 rounded bg-zinc-800" />
        <div className="h-10 w-64 rounded-lg bg-zinc-800" />
        <div className="h-0.5 w-12 rounded bg-zinc-800" />
      </div>

      {/* Tabs placeholder */}
      <div className="flex gap-2">
        <div className="h-9 w-36 rounded-lg bg-zinc-800" />
        <div className="h-9 w-28 rounded-lg bg-zinc-800" />
      </div>

      {/* Content cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-28 rounded-xl bg-zinc-800/70" />
        ))}
      </div>
    </div>
  </section>
);

export default SectionSkeleton;
