'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, Sparkles, Globe, Users, Lightbulb, Telescope } from 'lucide-react';

export default function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const visionElements = [
    {
      icon: Globe,
      title: '全国展開',
      description: '全大学にキャンパスアプリが存在する世界',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: '世代を超えた連携',
      description: '学年・大学を越えた学生同士の協働',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Sparkles,
      title: 'イノベーション創出',
      description: '学生発の革新的なアイデアとソリューション',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const futureGoals = [
    {
      icon: Telescope,
      title: '2030年までの目標',
      points: [
        '100大学でのアプリ展開',
        '10万人の学生利用者',
        '大学間連携プロジェクト100件',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Lightbulb,
      title: 'イノベーション創出',
      points: [
        '学生発スタートアップ支援',
        '産学連携プロジェクト促進',
        '次世代教育システム構築',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section
      id="vision"
      ref={ref}
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
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
            Our <span className="gradient-text">Vision</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            私たちが目指す未来と、その実現に向けたビジョン
          </p>
        </motion.div>

        {/* Main Vision Card */}
        <motion.div
          className="max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-secondary-500 via-purple-500 to-indigo-500 rounded-3xl p-12 text-white text-center shadow-2xl">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              全大学に学生主体のアプリが存在し、
              <br className="hidden md:block" />
              大学・世代を越えた共創のハブとなる
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              学生が主導する革新的なキャンパスアプリが全国の大学に普及し、
              教育とテクノロジーの融合によって新たな学びの形を創造します
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
