'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ParallaxBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50" />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: mousePosition.x * 0.1 + scrollY * 0.1,
          y: mousePosition.y * 0.1 + scrollY * 0.05,
          scale: [1, 1.1, 1],
        }}
        transition={{
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 0.5 },
          y: { duration: 0.5 },
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary-200 to-secondary-400 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: -mousePosition.x * 0.1 - scrollY * 0.08,
          y: -mousePosition.y * 0.1 + scrollY * 0.03,
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 0.5 },
          y: { duration: 0.5 },
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-purple-200 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"
        animate={{
          x: mousePosition.x * 0.05 + scrollY * 0.02,
          y: mousePosition.y * 0.05 - scrollY * 0.04,
          scale: [1, 1.2, 1],
        }}
        transition={{
          scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 0.7 },
          y: { duration: 0.7 },
        }}
      />

      {/* Floating Geometric Shapes */}
      {isClient &&
        [...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-4 h-4 ${
              i % 3 === 0
                ? 'bg-primary-300'
                : i % 3 === 1
                  ? 'bg-secondary-300'
                  : 'bg-purple-300'
            } rounded-full opacity-60`}
            initial={{
              x:
                Math.random() *
                (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [0, -20, 0],
              x:
                mousePosition.x * (0.01 + i * 0.001) +
                scrollY * (0.02 + i * 0.005),
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

      {/* Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          x: scrollY * 0.01,
          y: scrollY * 0.02,
        }}
        transition={{
          duration: 0.1,
          ease: 'linear',
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #3b82f6 1px, transparent 1px),
              linear-gradient(180deg, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </motion.div>
    </div>
  );
}
