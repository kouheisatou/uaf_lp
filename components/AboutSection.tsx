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

  const highlights = [
    {
      icon: Building2,
      title: '一般社団法人',
      description: '正式な法人格を持つ組織として、持続可能な活動を展開',
    },
    {
      icon: Users,
      title: '学生主導',
      description: '学生の、学生による、学生のための活動を貫く',
    },
    {
      icon: Globe,
      title: '全国規模',
      description: '日本全国の大学と連携し、知見を共有',
    },
    {
      icon: Lightbulb,
      title: 'イノベーション',
      description: '新しいアイデアと技術で大学生活を革新',
    },
  ];

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
                  現代の大学生にとって、デジタル体験は日常の一部です。しかし、多くの大学では古いシステムや複雑な手続きが残っています。学生開発者によるアプリは、これらの課題を学生目線で解決し、より良いキャンパスライフを実現します。
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
                  2024年に一般社団法人として設立され、学生団体を超えた組織運営により、持続可能で信頼性の高い活動を展開しています。
                </p>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-secondary-200 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary-200 rounded-full opacity-30 blur-lg" />
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="group text-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {highlight.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <span>活動内容を詳しく見る</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </motion.div>
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
