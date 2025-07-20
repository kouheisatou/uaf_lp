'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { loadCSV } from '../lib/csvLoader';
import {
  User,
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Star,
} from 'lucide-react';

interface Member {
  id: string;
  name: string;
  role: string;
  university: string;
  bio: string;
  avatar?: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
  email?: string;
  skills: string[];
  achievements: string[];
  memberType: string;
}

export default function MembersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [members, setMembers] = useState<Member[]>([]);
  const [selectedMemberType, setSelectedMemberType] = useState('all');

  // CSVからデータを読み込み
  useEffect(() => {
    const loadMembersData = async () => {
      try {
        const csvData = await loadCSV<Member>('members.csv');

        if (csvData.length > 0) {
          // CSVデータを正しい形式に変換
          const processedMembers = csvData.map((member) => ({
            ...member,
            skills: member.skills ? member.skills.toString().split(';') : [],
            achievements: member.achievements
              ? member.achievements.toString().split(';')
              : [],
            memberType: member.memberType || '運営メンバー',
          }));
          setMembers(processedMembers);
        }
      } catch (error) {
        console.error('Error loading members data:', error);
        // エラー時は空配列
        setMembers([]);
      }
    };

    loadMembersData();
  }, []);

  // メンバータイプタブの定義
  const memberTypes = [
    { id: 'all', label: '全て', icon: User },
    { id: '運営メンバー', label: '運営メンバー', icon: Star },
    { id: '参加大学メンバー', label: '参加大学メンバー', icon: GraduationCap },
  ];

  // フィルタリングされたメンバー
  const filteredMembers =
    selectedMemberType === 'all'
      ? members
      : members.filter((member) => member.memberType === selectedMemberType);

  return (
    <section
      id="members"
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
            Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            多様なバックグラウンドを持つ学生が、それぞれの専門性を活かして活動しています
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { number: '20+', label: '運営メンバー', icon: User },
            { number: '15+', label: '参加大学', icon: GraduationCap },
            { number: '50+', label: '協力学生', icon: Star },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl border border-primary-100"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Member Type Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-2 border border-white/30 shadow-lg">
            <div className="flex space-x-2">
              {memberTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedMemberType(type.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedMemberType === type.id
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                      : 'bg-transparent text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <type.icon className="w-4 h-4" />
                  <span>{type.label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Members */}
        {filteredMembers.length === 0 ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-gray-500">
              <User className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-xl">該当するメンバーが見つかりませんでした</p>
              <p className="text-sm mt-2">別のカテゴリーをお試しください</p>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="group"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="flex items-start space-x-6 mb-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg overflow-hidden">
                        {member.avatar ? (
                          <Image
                            src={member.avatar}
                            alt={member.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        ) : (
                          member.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')
                        )}
                      </div>
                    </div>

                    {/* Basic Info */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xl font-bold text-gray-900">
                          {member.name}
                        </h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            member.memberType === '運営メンバー'
                              ? 'bg-primary-100 text-primary-700'
                              : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {member.memberType}
                        </span>
                      </div>
                      <p className="text-primary-600 font-semibold mb-2">
                        {member.role}
                      </p>
                      <div className="flex items-center text-gray-600 text-sm mb-3">
                        <GraduationCap className="w-4 h-4 mr-1" />
                        {member.university}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      スキル
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      主な実績
                    </h4>
                    <ul className="space-y-1">
                      {member.achievements.slice(0, 2).map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <Star className="w-3 h-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    {member.github && (
                      <a
                        href={`https://github.com/${member.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-100 hover:bg-gray-900 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={`https://twitter.com/${member.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-100 hover:bg-blue-500 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${member.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-gray-100 hover:bg-red-500 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Join CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              一緒に運営メンバーとして活動しませんか？
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              UAFでは、大学アプリの普及に貢献したい学生を随時募集しています。
              プログラミング、デザイン、企画、運営など、様々な分野で活躍できます。
            </p>
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              参加する！
            </button>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/4 h-full opacity-5 overflow-hidden">
        <div className="relative w-full h-full">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-primary-500 rounded-full"
              style={{
                left: `${(i % 3) * 40 + 10}%`,
                top: `${Math.floor(i / 3) * 20 + 10}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + (i % 2),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
