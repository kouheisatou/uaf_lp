'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Heart, Users, Lightbulb, TrendingUp } from 'lucide-react';

export default function VisionSection() {
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
    },
    {
      icon: Heart,
      title: 'Co-creation',
      subtitle: '共に創る',
      description:
        '一人よりチームで、一大学より多大学で。多様な才能を掛け合わせ、より大きな価値を創造する。',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: TrendingUp,
      title: 'Challenge & Grow',
      subtitle: '挑戦し、成長する',
      description:
        '現状維持を良しとせず、新たな開発や連携に挑戦する。そのプロセスを通じて、個人も組織も成長する。',
      color: 'from-green-500 to-emerald-600',
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
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Vision</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            私たちが目指す未来と、それを実現するための価値観
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <motion.div
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">MISSION</h3>
                <p className="text-gray-600">私たちの使命</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              学生の力で、大学生活の体験を進化させる
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mr-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">VISION</h3>
                <p className="text-gray-600">私たちが目指す未来</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              全大学に学生主体のアプリが存在し、大学・世代を越えた共創のハブとなる。
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Values</span>
          </h3>
          <p className="text-lg text-gray-600">私たちの行動を導く3つの価値観</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="group relative"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="w-10 h-10 text-white" />
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-primary-600 font-semibold mb-4">
                    {value.subtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary-200/30 to-purple-200/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </section>
  );
}
