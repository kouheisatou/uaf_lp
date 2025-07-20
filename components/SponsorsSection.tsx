'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { loadCSV } from '../lib/csvLoader';
import {
  Building,
  Heart,
  Handshake,
  Star,
  ExternalLink,
  Users,
} from 'lucide-react';

interface Sponsor {
  id: string;
  name: string;
  category: 'platinum' | 'gold' | 'silver' | 'partner' | 'advertising';
  description?: string;
  logo?: string;
  website?: string;
  contribution?: string;
}

export default function SponsorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  const sponsorCategories = [
    {
      id: 'platinum',
      title: 'プラチナスポンサー',
      color: 'from-gray-400 to-gray-600',
      description: '主要な技術支援とリソース提供',
    },
    {
      id: 'gold',
      title: 'ゴールドスポンサー',
      color: 'from-yellow-400 to-yellow-600',
      description: '開発環境とツールの提供',
    },
    {
      id: 'silver',
      title: 'シルバースポンサー',
      color: 'from-gray-300 to-gray-500',
      description: 'イベント支援と場所提供',
    },
    {
      id: 'partner',
      title: 'パートナー企業',
      color: 'from-blue-400 to-blue-600',
      description: '技術的アドバイスと連携',
    },
    {
      id: 'advertising',
      title: '広告パートナー',
      color: 'from-purple-400 to-purple-600',
      description:
        'インターン、アルバイト情報や大学生活を豊かにするアプリなど、学生に有益な情報を提供',
    },
  ];

  // Sample data
  useEffect(() => {
    const loadSponsorsData = async () => {
      try {
        const csvData = await loadCSV<Sponsor>('sponsors.csv');

        if (csvData.length > 0) {
          setSponsors(csvData);
        } else {
          // フォールバック用サンプルデータ
          const fallbackSponsors: Sponsor[] = [
            {
              id: '1',
              name: 'TechCorp Japan',
              category: 'platinum',
              description: 'クラウドインフラストラクチャとAI技術の提供',
              contribution: 'AWS環境とGitHub Enterpriseライセンス',
            },
            {
              id: '2',
              name: 'DevTools Inc',
              category: 'gold',
              description: '開発ツールとCI/CDパイプラインの支援',
              contribution: 'JetBrains製品ライセンスとDocker環境',
            },
            {
              id: '3',
              name: 'StartupHub',
              category: 'gold',
              description: 'スタートアップエコシステムとの連携',
              contribution: 'メンタリングプログラムとピッチ機会',
            },
            {
              id: '4',
              name: 'Design Studio',
              category: 'silver',
              description: 'UI/UXデザインコンサルティング',
              contribution: 'Figmaライセンスとデザインレビュー',
            },
            {
              id: '5',
              name: 'Code Academy',
              category: 'silver',
              description: '技術教育とトレーニング支援',
              contribution: '勉強会講師派遣と教材提供',
            },
            {
              id: '6',
              name: 'Innovation Lab',
              category: 'partner',
              description: '研究開発における技術協力',
              contribution: '共同研究プロジェクトと技術アドバイス',
            },
            {
              id: '7',
              name: 'CareerSupport',
              category: 'advertising',
              description: '就職活動を支援する人材サービス',
              contribution: '就活セミナーと企業説明会の開催',
            },
            {
              id: '8',
              name: 'StudentCard',
              category: 'advertising',
              description: '学生専用クレジットカードとキャッシュレス決済',
              contribution: '学生向け特典とポイントサービス',
            },
            {
              id: '9',
              name: 'OnlineLearning Pro',
              category: 'advertising',
              description: 'プログラミング・デザイン学習プラットフォーム',
              contribution: '無料コースとスキルアップ支援',
            },
          ];
          setSponsors(fallbackSponsors);
        }
      } catch (error) {
        console.error('Error loading sponsors data:', error);
        setSponsors([]);
      }
    };

    loadSponsorsData();
  }, []);

  const getSponsorsByCategory = (category: string) => {
    return sponsors.filter((sponsor) => sponsor.category === category);
  };

  return (
    <section
      id="sponsors"
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
            Our <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            学生開発者の成長を支える企業パートナーの皆様
          </p>
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            {
              icon: Heart,
              title: '技術支援',
              description:
                'インフラ、ツール、ライセンスの提供により学生開発を支援',
              color: 'from-red-500 to-pink-600',
            },
            {
              icon: Handshake,
              title: 'メンタリング',
              description:
                '業界のプロフェッショナルによる技術指導とキャリアサポート',
              color: 'from-blue-500 to-indigo-600',
            },
            {
              icon: Building,
              title: 'イベント支援',
              description: 'ハッカソンや勉強会の会場・資金・講師を提供',
              color: 'from-green-500 to-teal-600',
            },
            {
              icon: Users,
              title: '学生支援',
              description:
                'インターン、アルバイト情報や大学生活を豊かにするアプリなど、学生に有益な情報を提供',
              color: 'from-purple-500 to-purple-600',
            },
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Sponsors by Category */}
        <div className="space-y-12">
          {sponsorCategories.map((category, categoryIndex) => {
            const categorySponsors = getSponsorsByCategory(category.id);
            if (categorySponsors.length === 0) return null;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + categoryIndex * 0.2 }}
              >
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <div
                      className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}
                    >
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{category.description}</p>
                </div>

                <div
                  className={`grid gap-6 ${
                    category.id === 'platinum'
                      ? 'grid-cols-1 md:grid-cols-2'
                      : category.id === 'gold'
                        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2'
                        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  }`}
                >
                  {categorySponsors.map((sponsor, index) => (
                    <motion.div
                      key={sponsor.id}
                      className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + categoryIndex * 0.2 + index * 0.1,
                      }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                          >
                            <Building className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                              {sponsor.name}
                            </h4>
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                      </div>

                      {sponsor.description && (
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {sponsor.description}
                        </p>
                      )}

                      {sponsor.contribution && (
                        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-3 border border-primary-100">
                          <p className="text-xs font-semibold text-primary-700 mb-1">
                            主な支援内容
                          </p>
                          <p className="text-sm text-gray-700">
                            {sponsor.contribution}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Partnership CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              パートナーシップのご提案
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              学生開発者の成長を支援し、共に未来の技術者を育てませんか？
              様々な形でのパートナーシップを募集しています。
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
                className="px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                パートナーシップについて
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='1'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </section>
  );
}
