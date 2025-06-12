import React from "react";
import { motion } from "framer-motion";
import { SectionContent } from "../content";

interface Props {
  id: string;
  mission: SectionContent;
  vision: SectionContent;
  value: SectionContent;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const CredoSection: React.FC<Props> = ({ id, mission, vision, value }) => {
  const items = [
    { title: "MISSION", body: mission.body },
    { title: "VISION", body: vision.body },
    { title: "VALUE", body: value.body },
  ];

  return (
    <section id={id} className="w-full px-6 py-24 bg-gray-900/50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
        MISSION · VISION · VALUE
      </h2>
      <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            custom={idx}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
            className="rounded-lg bg-gray-800/60 p-8 shadow-lg backdrop-blur-sm flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-gray-700/60"
          >
            <h3 className="text-xl font-semibold mb-4 text-brand-light text-center">
              {item.title}
            </h3>
            <p className="text-center leading-relaxed flex-1">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CredoSection; 