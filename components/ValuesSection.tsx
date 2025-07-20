'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Users, TrendingUp, Star, Compass, Rocket } from 'lucide-react';

export default function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    {
      icon: Users,
      title: 'User First',
      subtitle: '学生視点を貫く',
      description:
        '全ての活動は、アプリの先にいる学生ユーザーのために。真に価値ある体験を追求する。',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
    },
    {
      icon: Heart,
      title: 'Co-creation',
      subtitle: '共に創る',
      description:
        '一人よりチームで、一大学より多大学で。多様な才能を掛け合わせ、より大きな価値を創造する。',
      color: 'from-red-500 to-pink-600',
      bgColor: 'from-red-50 to-pink-100',
    },
    {
      icon: TrendingUp,
      title: 'Challenge & Grow',
      subtitle: '挑戦し、成長する',
      description:
        '現状維持を良しとせず、新たな開発や連携に挑戦する。そのプロセスを通じて、個人も組織も成長する。',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-100',
    },
  ];

  const principles = [
    {
      icon: Star,
      title: '質の追求',
      description: '妥協のない品質で、最高のアプリ体験を提供',
    },
    {
      icon: Compass,
      title: '方向性の統一',
      description: '明確なビジョンのもと、チーム一丸となって前進',
    },
    {
      icon: Rocket,
      title: 'スピード感',
      description: '迅速な意思決定と実行で、変化に対応',
    },
  ];

  return (
    <section
      id="values"
      ref={ref}
      className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden"
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
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            私たちの行動を導く価値観と原則
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${value.bgColor} rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300 h-full group-hover:scale-105">
                <div className="text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <value.icon className="w-10 h-10 text-white" />
                  </div>

                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-primary-600 font-semibold text-lg mb-4">
                    {value.subtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${value.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 right-40 w-64 h-64 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-40 left-40 w-56 h-56 bg-gradient-to-tr from-blue-200/20 to-teal-200/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-pink-200/10 to-yellow-200/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1.1, 1.5, 1.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </section>
  );
} 