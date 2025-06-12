import React from "react";
import { motion } from "framer-motion";
import { Activity } from "../content";

interface Props {
  id: string;
  title: string;
  activities: Activity[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const ActivitiesSection: React.FC<Props> = ({ id, title, activities }) => {
  return (
    <section id={id} className="w-full px-6 py-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
        {title}
      </h2>
      <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
        {activities.map((act, idx) => (
          <motion.div
            key={act.title}
            custom={idx}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
            className="bg-gray-800/60 rounded-lg shadow-lg overflow-hidden backdrop-blur-sm flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-gray-700/60"
          >
            <img
              src={act.image}
              alt={act.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-3 text-brand-light text-center">
                {act.title}
              </h3>
              <p className="text-center leading-relaxed flex-1">
                {act.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ActivitiesSection; 