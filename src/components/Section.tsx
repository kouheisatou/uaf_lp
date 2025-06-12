import React from "react";
import { motion } from "framer-motion";

interface Props {
  id: string;
  title: string;
  body: React.ReactNode;
}

const Section: React.FC<Props> = ({ id, title, body }) => {
  return (
    <section
      id={id}
      className="relative w-full max-w-5xl mx-auto px-6 py-24 flex flex-col gap-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold mb-6 text-center"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg leading-relaxed text-center"
      >
        {body}
      </motion.p>
    </section>
  );
};

export default Section; 