import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UAF - University App Federation | 大学アプリ連盟',
  description:
    '大学アプリ連盟は、大学生活におけるデジタル活用を推進する一般社団法人です。学生の力で大学生活の体験を進化させ、全大学に学生主体のアプリが存在する世界を目指します。',
  keywords: [
    '大学アプリ連盟',
    'UAF',
    'University App Federation',
    '大学アプリ',
    '学生開発',
    'キャンパスアプリ',
  ],
  authors: [{ name: 'UAF - University App Federation' }],
  openGraph: {
    title: 'UAF - University App Federation | 大学アプリ連盟',
    description:
      '学生の力で、大学生活の体験を進化させる。全大学に学生主体のアプリが存在し、大学・世代を越えた共創のハブとなる。',
    url: 'https://university-app-federation.org',
    siteName: 'UAF - University App Federation',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UAF - University App Federation | 大学アプリ連盟',
    description:
      '学生の力で、大学生活の体験を進化させる。全大学に学生主体のアプリが存在し、大学・世代を越えた共創のハブとなる。',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
