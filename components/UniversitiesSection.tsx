'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { loadCSV } from '../lib/csvLoader';
import { GraduationCap, MapPin, Users, ExternalLink, Plus } from 'lucide-react';
import UniversityMap from './UniversityMap';

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
  latitude?: number;
  longitude?: number;
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
          // CSVデータの緯度経度を数値に変換
          const processedData = csvData.map((uni) => ({
            ...uni,
            latitude: uni.latitude ? Number(uni.latitude) : undefined,
            longitude: uni.longitude ? Number(uni.longitude) : undefined,
            studentCount: uni.studentCount
              ? Number(uni.studentCount)
              : undefined,
            featured: String(uni.featured) === 'true',
          }));
          setUniversities(processedData);
        } else {
          // フォールバック用サンプルデータ
          const fallbackUniversities: University[] = [
            {
              id: '1',
              name: '東京大学',
              location: '東京',
              appName: 'UTokyo Life',
              appDescription: '学生生活を総合的にサポートする大学アプリ',
              studentCount: 28000,
              featured: true,
              latitude: 35.7139,
              longitude: 139.7599,
            },
            {
              id: '2',
              name: '京都大学',
              location: '京都',
              appName: 'KyotoU Connect',
              appDescription: '研究室マッチングと学習支援機能を提供',
              studentCount: 22000,
              featured: true,
              latitude: 35.0265,
              longitude: 135.7824,
            },
            {
              id: '3',
              name: '大阪大学',
              location: '大阪',
              appName: 'Handai Hub',
              appDescription: '多キャンパス間の交流促進アプリ',
              studentCount: 23000,
              featured: true,
              latitude: 34.8211,
              longitude: 135.5221,
            },
            {
              id: '4',
              name: '慶應義塾大学',
              location: '東京',
              appName: 'Keio Campus',
              appDescription: '伝統と革新を融合したデジタル体験',
              studentCount: 33000,
              featured: true,
              latitude: 35.6526,
              longitude: 139.7456,
            },
            {
              id: '5',
              name: '早稲田大学',
              location: '東京',
              featured: false,
              latitude: 35.7058,
              longitude: 139.722,
            },
            {
              id: '6',
              name: '北海道大学',
              location: '北海道',
              featured: false,
              latitude: 43.0731,
              longitude: 141.3469,
            },
            {
              id: '7',
              name: '九州大学',
              location: '福岡',
              featured: false,
              latitude: 33.5946,
              longitude: 130.2186,
            },
            {
              id: '8',
              name: '名古屋大学',
              location: '愛知',
              featured: false,
              latitude: 35.1545,
              longitude: 136.966,
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

  // 地図表示用の大学データ（緯度経度がある大学のみ）
  const mappableUniversities = universities.filter(
    (u) => u.latitude !== undefined && u.longitude !== undefined
  ) as (University & { latitude: number; longitude: number })[];

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
            全国の主要大学が参加し、それぞれ独自の大学アプリを開発・運営しています
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
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {universities.length}+
            </h3>
            <p className="text-gray-600">参加大学数</p>
          </div>

          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {Math.round(
                universities.reduce(
                  (sum, u) => sum + (u.studentCount || 0),
                  0
                ) / 1000
              )}
              k+
            </h3>
            <p className="text-gray-600">総学生数</p>
          </div>

          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {new Set(universities.map((u) => u.location)).size}+
            </h3>
            <p className="text-gray-600">都道府県</p>
          </div>
        </motion.div>

        {/* University Map */}
        {mappableUniversities.length > 0 && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <UniversityMap universities={mappableUniversities} />
          </motion.div>
        )}

        {/* Join CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl font-semibold cursor-pointer group">
            <Plus className="w-5 h-5" />
            <span>あなたの大学も参加しませんか？</span>
          </div>
          <p className="text-gray-600 text-sm mt-4 max-w-2xl mx-auto">
            UAFでは新しい参加大学を随時募集しています。
            学生主体のアプリ開発に興味がある大学はお気軽にお問い合わせください。
          </p>
        </div>
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
