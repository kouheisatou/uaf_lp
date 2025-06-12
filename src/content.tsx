import React from "react";

export interface SectionContent {
  subtitle?: string;
  body: React.ReactNode;
}

export const missionContent: SectionContent = {
  body: (
    <>
      大学間の連携を促進し、革新的な
      <span className="highlight">アプリケーション</span>
      の開発と普及を通じて、学生の学習体験と大学運営の効率性を向上させる。
    </>
  ),
};

export const visionContent: SectionContent = {
  body: (
    <>
      全ての大学が、<span className="highlight">最先端</span>のデジタル技術を活用し、世界レベルの教育と研究環境を実現する未来を創造する。
    </>
  ),
};

export const valueContent: SectionContent = {
  body: (
    <>
      <span className="highlight">協創</span>、<span className="highlight">革新</span>、公開性、持続可能性を重んじ、すべてのステークホルダーと共に成長を目指す。
    </>
  ),
};

export const aboutContent: SectionContent = {
  body: (
    <>
      大学アプリ連盟は、一般社団法人として、大学教育におけるデジタルの活用を推進するために設立されました。私たちは、各大学が持つ知見やリソースを結集し、学生、教職員、そして社会全体に貢献する
      <span className="highlight">アプリケーション</span>の開発と普及を目指すプラットフォームです。
    </>
  ),
};

export interface Activity {
  title: string;
  description: React.ReactNode;
  image: string;
}

export const activitiesData: Activity[] = [
  {
    title: "ハッカソン",
    description: (
      <>
        学生・教職員が協力し合い、革新的な大学<span className="highlight">アプリ</span>を開発する 48 時間の開発イベント。
      </>
    ),
    image: "https://picsum.photos/seed/hackathon/400/300",
  },
  {
    title: "ワークショップ",
    description: (
      <>
        UI/UX やモバイル開発、<span className="highlight">生成 AI</span> など最新技術を学ぶ実践的なハンズオンを開催。
      </>
    ),
    image: "https://picsum.photos/seed/workshop/400/300",
  },
  {
    title: "共同研究",
    description: (
      <>
        産学連携で教育・研究プラットフォームを共創し、<span className="highlight">成果</span>を共有。
      </>
    ),
    image: "https://picsum.photos/seed/research/400/300",
  },
];

export const universitiesList = [
  "東京大学",
  "京都大学",
  "早稲田大学",
  "慶應義塾大学",
  "大阪大学",
  "北海道大学",
];

export const sponsorsList = [
  "Microsoft",
  "Google",
  "Amazon Web Services",
  "LINEヤフー",
  "Sansan",
];

export const contactContent: SectionContent = {
  body: "ご質問・ご相談は info@daigaku-app.jp までお気軽にお問い合わせください。",
}; 