'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { loadCSV } from '../lib/csvLoader';
import {
  Code2,
  Users,
  BookOpen,
  Rocket,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

interface Activity {
  id: string;
  title: string;
  description: string;
  category: string;
  date?: string;
  location?: string;
  thumbnail?: string;
}

export default function ActivitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: '全て', icon: Users },
    { id: 'development', label: '開発支援', icon: Code2 },
    { id: 'education', label: '勉強会', icon: BookOpen },
    { id: 'event', label: 'イベント', icon: Rocket },
  ];

  const featuredActivities = [
    {
      icon: Code2,
      title: 'アプリ開発支援',
      description: '各大学のアプリ開発チームに対する技術的支援と知見の共有',
      color: 'from-blue-500 to-blue-600',
      details: ['技術コンサルティング', 'コードレビュー', '開発リソース提供'],
    },
    {
      icon: Users,
      title: '大学間交流',
      description: '異なる大学の開発者同士が交流し、ネットワークを構築',
      color: 'from-green-500 to-emerald-600',
      details: [
        '交流イベント開催',
        'オンラインコミュニティ',
        'メンタリング制度',
      ],
    },
    {
      icon: BookOpen,
      title: '勉強会・ワークショップ',
      description: '最新技術や開発手法に関する学習機会の提供',
      color: 'from-purple-500 to-pink-600',
      details: ['技術勉強会', 'ハッカソン', 'デザインワークショップ'],
    },
    {
      icon: Rocket,
      title: 'プロダクト共同開発',
      description: '複数大学が連携した新しいサービスの企画・開発',
      color: 'from-orange-500 to-red-600',
      details: ['共同プロジェクト', '新サービス企画', 'MVP開発'],
    },
  ];

  // CSVからデータを読み込み
  useEffect(() => {
    const loadActivitiesData = async () => {
      try {
        const csvData = await loadCSV<Activity>('activities.csv');

        if (csvData.length > 0) {
          setActivities(csvData);
        } else {
          // フォールバック用サンプルデータ
          const fallbackActivities: Activity[] = [
            {
              id: '1',
              title: '第1回 UAF ハッカソン',
              description: '全国の大学生が集まる3日間のハッカソンイベント',
              category: 'event',
              date: '2024-03-15',
              location: '東京',
            },
            {
              id: '2',
              title: 'React Native 勉強会',
              description: 'モバイルアプリ開発の基礎から応用まで',
              category: 'education',
              date: '2024-02-20',
              location: 'オンライン',
            },
            {
              id: '3',
              title: '大学アプリUI/UX改善プロジェクト',
              description: '複数大学のアプリのユーザビリティ向上',
              category: 'development',
              date: '2024-01-10',
              location: '大阪',
            },
            {
              id: '4',
              title: '新入生向けアプリ開発講座',
              description: 'プログラミング初心者のためのワークショップ',
              category: 'education',
              date: '2024-04-05',
              location: '福岡',
            },
          ];
          setActivities(fallbackActivities);
        }
      } catch (error) {
        console.error('Error loading activities data:', error);
        setActivities([]);
      }
    };

    loadActivitiesData();
  }, []);

  const filteredActivities =
    selectedCategory === 'all'
      ? activities
      : activities.filter((activity) => activity.category === selectedCategory);

  return (
    <section
      id="activities"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
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
            Our <span className="gradient-text">Activities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            大学の垣根を超えた様々な活動を通じて、学生開発者の成長を支援します
          </p>
        </motion.div>

        {/* Featured Activities */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {featuredActivities.map((activity, index) => (
            <motion.div
              key={activity.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <activity.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {activity.description}
                </p>

                <ul className="space-y-2">
                  {activity.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <ChevronRight className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Activities List */}
        <motion.div
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 lg:mb-0">
              最近の活動
            </h3>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {activity.title}
                  </h4>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {activity.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    {activity.date && (
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{activity.date}</span>
                      </div>
                    )}
                    {activity.location && (
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{activity.location}</span>
                      </div>
                    )}
                  </div>
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                    {categories.find((c) => c.id === activity.category)?.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-primary-200/20 to-secondary-200/20 rounded-full filter blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gradient-to-tr from-secondary-200/20 to-purple-200/20 rounded-full filter blur-3xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </section>
  );
}
