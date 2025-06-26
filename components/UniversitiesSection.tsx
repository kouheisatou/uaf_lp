'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { loadCSV } from '../lib/csvLoader';
import { GraduationCap, MapPin, Users, ExternalLink, Plus } from 'lucide-react';

interface University {
  id: string;
  name: string;
  location: string;
  appName?: string;
  appDescription?: string;
  studentCount?: number;
  logo?: string;
  website?: string;
  featured: boolean;
}

export default function UniversitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [universities, setUniversities] = useState<University[]>([]);

  // Sample data
  useEffect(() => {
    const loadUniversitiesData = async () => {
      try {
        const csvData = await loadCSV<University>('universities.csv');

        if (csvData.length > 0) {
          setUniversities(csvData);
        } else {
          // フォールバック用サンプルデータ
          const fallbackUniversities: University[] = [
            {
              id: '1',
              name: '東京大学',
              location: '東京',
              appName: 'UTokyo Life',
              appDescription: '学生生活を総合的にサポートするキャンパスアプリ',
              studentCount: 28000,
              featured: true,
            },
            {
              id: '2',
              name: '京都大学',
              location: '京都',
              appName: 'KyotoU Connect',
              appDescription: '研究室マッチングと学習支援機能を提供',
              studentCount: 22000,
              featured: true,
            },
            {
              id: '3',
              name: '大阪大学',
              location: '大阪',
              appName: 'Handai Hub',
              appDescription: '多キャンパス間の交流促進アプリ',
              studentCount: 23000,
              featured: true,
            },
            {
              id: '4',
              name: '慶應義塾大学',
              location: '東京',
              appName: 'Keio Campus',
              appDescription: '伝統と革新を融合したデジタル体験',
              studentCount: 33000,
              featured: true,
            },
            {
              id: '5',
              name: '早稲田大学',
              location: '東京',
              featured: false,
            },
            {
              id: '6',
              name: '北海道大学',
              location: '北海道',
              featured: false,
            },
            {
              id: '7',
              name: '九州大学',
              location: '福岡',
              featured: false,
            },
            {
              id: '8',
              name: '名古屋大学',
              location: '愛知',
              featured: false,
            },
          ];
          setUniversities(fallbackUniversities);
        }
      } catch (error) {
        console.error('Error loading universities data:', error);
        setUniversities([]);
      }
    };

    loadUniversitiesData();
  }, []);

  const featuredUniversities = universities.filter((u) => u.featured);
  const otherUniversities = universities.filter((u) => !u.featured);

  return (
    <section
      id="universities"
      ref={ref}
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden"
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
            Participating <span className="gradient-text">Universities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            全国の主要大学が参加し、それぞれ独自のキャンパスアプリを開発・運営しています
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">20+</h3>
            <p className="text-gray-600">参加大学数</p>
          </div>

          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">500k+</h3>
            <p className="text-gray-600">総学生数</p>
          </div>

          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
            <p className="text-gray-600">都道府県</p>
          </div>
        </motion.div>

        {/* Featured Universities */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            主要参加大学とアプリ
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredUniversities.map((university, index) => (
              <motion.div
                key={university.id}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {university.name}
                      </h4>
                      <p className="text-gray-600 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {university.location}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                </div>

                {university.appName && (
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-4 mb-4 border border-primary-100">
                    <h5 className="font-bold text-primary-700 mb-2">
                      {university.appName}
                    </h5>
                    <p className="text-gray-700 text-sm">
                      {university.appDescription}
                    </p>
                  </div>
                )}

                {university.studentCount && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-1" />約
                    {university.studentCount.toLocaleString()}名の学生
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Universities */}
        <motion.div
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            その他の参加大学
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {otherUniversities.map((university, index) => (
              <motion.div
                key={university.id}
                className="text-center p-4 bg-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-6 h-6 text-gray-600" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {university.name}
                </h4>
                <p className="text-xs text-gray-600">{university.location}</p>
              </motion.div>
            ))}
          </div>

          {/* Join CTA */}
          <div className="text-center">
            <motion.div
              className="inline-flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-5 h-5" />
              <span>あなたの大学も参加しませんか？</span>
            </motion.div>
            <p className="text-gray-600 text-sm mt-4 max-w-2xl mx-auto">
              UAFでは新しい参加大学を随時募集しています。
              学生主体のアプリ開発に興味がある大学はお気軽にお問い合わせください。
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-32 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full filter blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 -right-32 w-64 h-64 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full filter blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
}
