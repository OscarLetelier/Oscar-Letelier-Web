import React from "react";
import { motion, type Variants } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { aboutData } from "@/data/aboutData";
import ilustra from "@/assets/images/ilustracion.webp";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const About: React.FC = () => {
  const { title, paragraphs, quote } = aboutData;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative text-white px-6 py-24 md:py-32 min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full">
        <motion.div
          className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/20 shadow-lg"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            id="about-title"
            className="text-4xl md:text-5xl font-bold tracking-tight text-emerald-400 mb-6"
            variants={itemVariants}
          >
            {title}
          </motion.h2>

          {paragraphs.map((p, index) => (
            <motion.p
              key={index}
              className={p.className}
              variants={itemVariants}
            >
              {p.text.split(p.highlight || "").map((part, i) =>
                i < 1 ? (
                  part
                ) : (
                  <span key={i} className=" text-white">
                    {p.highlight}
                    {part}
                  </span>
                )
              )}
            </motion.p>
          ))}

          <motion.blockquote
            className="relative bg-gray-800/60 border-l-4 border-emerald-500 p-6 rounded-r-lg mt-6"
            variants={itemVariants}
          >
            <FaQuoteLeft className="absolute top-4 left-4 text-emerald-500/30 text-3xl" />
            <p className="pl-8 text-base text-gray-400 italic">
              "{quote.text}"
            </p>
          </motion.blockquote>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.img
            src={ilustra}
            alt="Ilustración de un desarrollador creando una idea"
            className="w-80 md:w-[450px] rounded-2xl shadow-2xl shadow-emerald-900/30"
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
