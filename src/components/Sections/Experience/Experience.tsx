import React from "react";
import { motion } from "framer-motion";
import TimelineItem from "./TimeLineItem";
import { experience, education } from "@/data/experienceData";

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="bg-gray-950 text-white px-6 py-20 min-h-screen flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-6xl w-full flex flex-col items-center"
      >
        <h3 className="text-4xl font-bold text-center mb-12 text-emerald-400">
          Experiencia y Estudios
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 w-full">
          {/* Columna de Experiencia */}
          <div className="space-y-8">
            <h4 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Experiencia Laboral
            </h4>
            {experience.map((item, index) => (
              <TimelineItem
                key={index}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                period={item.period}
                description={item.description}
              />
            ))}
          </div>

          {/* Columna de Educación */}
          <div className="space-y-8">
            <h4 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Educación
            </h4>
            {education.map((item, index) => (
              <TimelineItem
                key={index}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                period={item.period}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
