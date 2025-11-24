import React from "react";
import { servicesData } from "../../../data/servicesData";
import ServiceCard from "./ServiceCard";

const Services: React.FC = () => {
  return (
    <section id="services" aria-labelledby="services-title" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
          {servicesData.title}
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto mb-12"></div>
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
