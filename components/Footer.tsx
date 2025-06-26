'use client';

import { motion } from 'framer-motion';
import {
  Smartphone,
  Mail,
  Github,
  Twitter,
  MessageCircle,
  ExternalLink,
  Heart,
  ArrowUp,
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">UAF</h3>
                <p className="text-gray-300 text-sm">
                  University App Federation
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              大学アプリ連盟は、学生の力で大学生活の体験を進化させ、
              全大学に学生主体のアプリが存在する世界を目指しています。
            </p>

            <div className="flex space-x-4">
              {[
                {
                  icon: Github,
                  href: 'https://github.com/uaf',
                  label: 'GitHub',
                },
                {
                  icon: Twitter,
                  href: 'https://twitter.com/uaf_org',
                  label: 'Twitter',
                },
                {
                  icon: MessageCircle,
                  href: 'https://discord.gg/uaf',
                  label: 'Discord',
                },
                { icon: Mail, href: 'mailto:contact@uaf.org', label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">クイックリンク</h4>
            <ul className="space-y-3">
              {[
                '概要',
                'ビジョン',
                '活動内容',
                'メンバー',
                '参加大学',
                'お問い合わせ',
              ].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(
                        `#${link.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}`
                      );
                      if (element)
                        element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span>{link}</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">お問い合わせ</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 text-sm">一般的なお問い合わせ</p>
                <a
                  href="mailto:contact@uaf.org"
                  className="text-white hover:text-primary-400 transition-colors duration-300"
                >
                  contact@uaf.org
                </a>
              </div>

              <div>
                <p className="text-gray-300 text-sm">法人情報</p>
                <p className="text-white text-sm">
                  一般社団法人 大学アプリ連盟
                  <br />
                  東京都千代田区
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="flex items-center space-x-2 mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-400 text-sm">
                © 2024 University App Federation. All rights reserved.
              </span>
            </motion.div>

            <div className="flex items-center space-x-6">
              <motion.div
                className="flex items-center space-x-2 text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>by students</span>
              </motion.div>

              <motion.button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-lg flex items-center justify-center transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-secondary-500/10 to-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </footer>
  );
}
