import React from "react";
import { motion } from "framer-motion";

interface Props {
  id: string;
  title: string;
  items: string[];
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
};

const ListSection: React.FC<Props> = ({ id, title, items }) => {
  return (
    <section id={id} className="w-full px-6 py-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        {title}
      </h2>
      <ul className="max-w-3xl mx-auto grid gap-4 sm:grid-cols-2 text-center">
        {items.map((item, idx) => (
          <motion.li
            key={item}
            custom={idx}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            variants={itemVariants}
            className="bg-gray-800/60 py-4 px-6 rounded-lg shadow backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-gray-700/60"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ListSection; 