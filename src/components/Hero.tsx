import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.pixabay.com/vimeo/503635149/Clouds%20Timelapse%20-%2039869.mp4?width=640&hash=e7d7efe26c255ff1f37FC7&dl=1"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6"
      >
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-4">
          大学の未来を、アプリで拓く。
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          大学アプリ連盟は、日本の高等教育におけるデジタルトランスフォーメーションを牽引します。
        </p>
        <a
          href="#mission"
          className="inline-block mt-10 px-8 py-3 bg-brand rounded-full text-white font-semibold shadow-lg hover:bg-brand-light transition-colors"
        >
          私たちの使命を見る
        </a>
      </motion.div>
    </section>
  );
};

export default Hero; 