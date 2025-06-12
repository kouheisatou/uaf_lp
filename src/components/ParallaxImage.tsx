import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  src: string;
  speed?: number; // 0.1 = slower movement
  className?: string;
}

const ParallaxImage: React.FC<Props> = ({ src, speed = 0.2, className = "" }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `-${speed * 100}%`]);
  const extendedHeight = `${100 + speed * 100}%`; // ensures coverage when translated

  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden
      className={`pointer-events-none select-none ${className}`}
      style={{ y, height: extendedHeight }}
    />
  );
};

export default ParallaxImage; 