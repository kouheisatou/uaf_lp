'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap } from 'lucide-react';

// Leafletコンポーネントを動的にインポート（SSRエラーを避けるため）
const Map = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">地図を読み込み中...</p>
      </div>
    </div>
  ),
});

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
  latitude: number;
  longitude: number;
}

interface UniversityMapProps {
  universities: University[];
}

export default function UniversityMap({ universities }: UniversityMapProps) {
  const [selectedUniversity, setSelectedUniversity] =
    useState<University | null>(null);

  // 日本の中心あたりの座標
  const japanCenter: [number, number] = [36.5, 137.5];

  return (
    <motion.div
      className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg relative"
      style={{ zIndex: 1 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
          <MapPin className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">参加大学マップ</h3>
          <p className="text-gray-600">全国の参加大学の場所を確認できます</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 地図エリア */}
        <div className="lg:col-span-2">
          <div className="h-96 rounded-2xl overflow-hidden border border-gray-200 relative z-0">
            <Map
              center={japanCenter}
              zoom={5}
              universities={universities}
              selectedUniversity={selectedUniversity}
              onUniversitySelect={setSelectedUniversity}
            />
          </div>
        </div>

        {/* 大学リスト */}
        <div className="lg:col-span-1">
          <div className="h-96 overflow-y-auto pr-2">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <GraduationCap className="w-5 h-5 mr-2" />
              参加大学一覧
            </h4>

            <div className="space-y-3">
              {universities.map((university) => (
                <div
                  key={university.id}
                  className={`p-4 rounded-xl border cursor-pointer transition-colors duration-200 flex items-start justify-between
                    ${
                      selectedUniversity?.id === university.id
                        ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-300'
                        : 'border-gray-200 bg-gray-50 hover:bg-blue-100/40'
                    }
                  `}
                  onClick={() => setSelectedUniversity(university)}
                  tabIndex={0}
                  aria-selected={selectedUniversity?.id === university.id}
                >
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 text-sm mb-1">
                      {university.name}
                    </h5>
                    <p className="text-xs text-gray-600 mb-2 flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {university.location}
                    </p>
                    {university.featured && university.appName && (
                      <div className="bg-white rounded-lg p-2 border border-blue-200">
                        <p className="text-xs font-medium text-blue-700">
                          {university.appName}
                        </p>
                      </div>
                    )}
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full mt-1 ${
                      university.featured ? 'bg-blue-500' : 'bg-gray-400'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 選択された大学の詳細情報 */}
      {selectedUniversity && (
        <motion.div
          className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {selectedUniversity.name}
              </h4>
              <p className="text-gray-600 flex items-center mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                {selectedUniversity.location}
              </p>

              {selectedUniversity.appName && (
                <div className="mb-3">
                  <p className="font-semibold text-blue-700 mb-1">
                    {selectedUniversity.appName}
                  </p>
                  <p className="text-gray-700 text-sm">
                    {selectedUniversity.appDescription}
                  </p>
                </div>
              )}

              {selectedUniversity.studentCount && (
                <p className="text-sm text-gray-600">
                  学生数: 約{selectedUniversity.studentCount.toLocaleString()}名
                </p>
              )}

              {selectedUniversity.website && (
                <a
                  href={selectedUniversity.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors duration-200"
                >
                  公式サイトへ
                </a>
              )}
            </div>
            <button
              onClick={() => setSelectedUniversity(null)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
