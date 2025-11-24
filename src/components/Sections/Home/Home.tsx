import React from "react";
import { motion } from "framer-motion";
import { homeData } from "@/data/homeData";
import oscarImage from "@/assets/images/oscar.webp";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home: React.FC = () => {
  const { title, subtitle, description, techIcons, ctaButtons } = homeData;

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative px-6 min-h-screen flex items-center justify-center overflow-hidden pt-4"
    >
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        <motion.div
          className="space-y-6 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            id="hero-title"
            className="text-4xl md:text-5xl pt-5 font-bold tracking-tight leading-tight"
            variants={itemVariants}
          >
            {title.pre} <span className="text-emerald-400">{title.name}</span>
            {title.post}
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl text-gray-300 font-light"
            variants={itemVariants}
          >
            {subtitle}
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 leading-relaxed"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex gap-4 items-center justify-center md:justify-start pt-2 text-3xl"
            variants={itemVariants}
          >
            {techIcons.map(({ Icon, title, color }, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, y: -5, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon title={title} className={color} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            {ctaButtons.map((button) => (
              <a
                key={button.text}
                href={button.href}
                target={button.primary ? "_self" : "_blank"}
                rel={button.primary ? "" : "noopener noreferrer"}
                className={`inline-flex items-center justify-center font-medium px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ${
                  button.primary
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                    : "bg-transparent text-emerald-400 border border-emerald-500 hover:bg-emerald-500/10"
                }`}
              >
                <button.icon className="mr-2" />
                {button.text}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src={oscarImage}
            alt="Oscar Letelier"
            className="w-80 h-80 object-cover rounded-full border-4 border-emerald-500/50 shadow-2xl shadow-emerald-900/40"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
