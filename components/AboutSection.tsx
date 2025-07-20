'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Building2,
  Users,
  Lightbulb,
  Globe,
  Award,
  ArrowRight,
} from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">UAF</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            大学アプリ連盟について
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  大学生活の
                  <span className="gradient-text">デジタル変革</span>
                  を推進
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  UAF（大学アプリ連盟）は、一般社団法人として、大学生活におけるデジタル活用を推進するために設立されました。
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  私たちは、各大学が持つ知見やリソースを結集し、学生の持つ熱量や想像力を、社会に形あるものとして普及させることを目指します。
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  なぜ大学アプリなのか？
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  学生にとって本当に価値のある情報を学生目線で提供し、大学生活をより豊かにします。また、学生にとって最も身近な、大学アプリを通じて、アプリ制作の第1歩を踏み出す手助けをします。
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-600 rounded-3xl p-8 text-white shadow-2xl">
                <Award className="w-16 h-16 mb-6" />
                <h4 className="text-2xl font-bold mb-4">一般社団法人として</h4>
                <p className="text-primary-100 leading-relaxed">
                  2025年に一般社団法人として設立され、学生団体を超えた組織運営により、持続可能で信頼性の高い活動を展開しています。
                </p>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-secondary-200 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary-200 rounded-full opacity-30 blur-lg" />
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 overflow-hidden">
        <div className="relative w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-500 rounded-full"
              style={{
                left: `${(i % 5) * 25}%`,
                top: `${Math.floor(i / 5) * 25}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
