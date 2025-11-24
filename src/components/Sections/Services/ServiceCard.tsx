import React from "react";
import { motion } from "framer-motion";
import type { Service } from "../../../data/servicesData";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="bg-gray-900/50 p-6 rounded-lg border border-emerald-600/20 shadow-lg flex flex-col items-center text-center"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="text-emerald-400 mb-4">
        <service.icon size={40} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
      <p className="text-gray-400 text-sm">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;
