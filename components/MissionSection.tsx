'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, BookOpen, Users, Code, Lightbulb, ArrowRight } from 'lucide-react';

export default function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const missionPoints = [
    {
      icon: BookOpen,
      title: '学習体験の向上',
      description: 'より効率的で楽しい学習環境をアプリで実現',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'コミュニティ形成',
      description: '学生同士の繋がりを深め、協働を促進',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Code,
      title: '技術力向上',
      description: '実際の開発を通じて学生の技術スキルを向上',
      color: 'from-purple-500 to-indigo-600',
    },
  ];

  return (
    <section
      id="mission"
      ref={ref}
      className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
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
            Our <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            私たちの使命と、それを実現するための取り組み
          </p>
        </motion.div>

        {/* Main Mission Card */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-12 text-white text-center shadow-2xl">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              学生の力で、大学生活の体験を進化させる
            </h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              全国の大学生が主体となってキャンパスアプリを開発し、
              より良い大学生活を創造するプラットフォームを構築します
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 