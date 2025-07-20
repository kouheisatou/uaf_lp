# UAF Landing Page - University App Federation

[![Deploy to GitHub Pages](https://github.com/university-app-federation/uaf_lp_1/actions/workflows/deploy.yml/badge.svg)](https://github.com/university-app-federation/uaf_lp_1/actions/workflows/deploy.yml)

大学アプリ連盟（UAF: University App Federation）の公式ランディングページです。学生主体の大学アプリ開発を推進し、大学の垣根を越えた共創を実現する組織として活動しています。

## 🌟 プロジェクト概要

このランディングページは、以下の特徴を持つ modern でリッチなウェブサイトです：

- **フルアニメーション**: Framer Motion による滑らかなアニメーション効果
- **レスポンシブデザイン**: モバイルファーストのデザイン
- **静的サイト生成**: GitHub Pages での高速配信
- **コンテンツ管理**: CSV/MD ベースの柔軟なコンテンツ管理
- **アクセシビリティ**: WCAG ガイドラインに準拠

## 🛠 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **デプロイ**: GitHub Pages + GitHub Actions
- **コンテンツ**: CSV + Markdown

## 📁 プロジェクト構造

```
uaf_lp_1/
├── app/                    # Next.js App Router
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # メインページ
├── components/            # React コンポーネント
│   ├── Header.tsx         # ナビゲーションヘッダー
│   ├── HeroSection.tsx    # ヒーローセクション
│   ├── VisionSection.tsx  # ビジョン・ミッション・バリューセクション
│   ├── AboutSection.tsx   # 組織概要セクション
│   ├── ActivitiesSection.tsx # 活動内容セクション
│   ├── MembersSection.tsx # メンバーセクション
│   ├── UniversitiesSection.tsx # 参加大学セクション
│   ├── SponsorsSection.tsx # 協賛企業セクション
│   ├── ContactSection.tsx # お問い合わせセクション
│   ├── Footer.tsx         # フッター
│   └── ParallaxBackground.tsx # パララックス背景
├── public/
│   └── contents/          # コンテンツファイル
│       ├── activities.csv # 活動データ
│       ├── members.csv    # メンバーデータ
│       ├── universities.csv # 大学データ
│       └── sponsors.csv   # スポンサーデータ
├── .github/workflows/     # GitHub Actions
└── README.md
```

## 🚀 セットアップ

### 前提条件

- Node.js 18.0.0 以上
- npm または yarn

### インストール

1. リポジトリのクローン

```bash
git clone https://github.com/university-app-federation/uaf_lp_1.git
cd uaf_lp_1
```

2. 環境変数の設定

```bash
cp env.example .env.local
```

`.env.local`ファイルを編集して、必要に応じてbasePathを設定：

```bash
# GitHub Pagesにデプロイする場合
NEXT_PUBLIC_BASE_PATH=/your-repository-name
NEXT_PUBLIC_ASSET_PREFIX=/your-repository-name/

# カスタムドメインや開発環境の場合
NEXT_PUBLIC_BASE_PATH=
NEXT_PUBLIC_ASSET_PREFIX=
```

3. 依存関係のインストール

```bash
npm install
```

4. 開発サーバーの起動

```bash
npm run dev
```

5. ブラウザで確認

```
http://localhost:3000
```

## 🔧 スクリプト

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# 静的ファイル出力（GitHub Pages用）
npm run export

# リンター実行
npm run lint

# フォーマッター実行
npm run format

# フォーマットチェック
npm run format:check
```

## 📝 コンテンツ管理

### CSV ファイル形式

コンテンツは `/public/contents/` ディレクトリの CSV ファイルで管理されています。

#### activities.csv (活動データ)

```csv
id,title,description,category,date,location,thumbnail
1,第1回 UAF ハッカソン,全国の大学生が集まる3日間のハッカソンイベント,event,2024-03-15,東京,hackathon-1.jpg
```

#### members.csv (メンバーデータ)

```csv
id,name,role,university,bio,skills,github,twitter,linkedin,email,thumbnail
1,田中 太郎,代表理事,東京大学,フルスタック開発者として...,React Node.js,tanaka-taro,tanaka_dev,,tanaka@uaf.org,tanaka.jpg
```

### 画像管理

- **サムネイル画像**: `/public/contents/` と同じディレクトリに配置
- **詳細記事**: `/public/contents/{id}/` ディレクトリに Markdown ファイルと関連画像を配置

## 🚀 デプロイ

このプロジェクトは GitHub Actions を使用して自動的に GitHub Pages にデプロイされます。

### デプロイフロー

1. `main` ブランチへのプッシュ時に自動実行
2. ESLint による静的解析
3. Prettier によるフォーマットチェック
4. Next.js アプリケーションのビルド
5. GitHub Pages への静的ファイルデプロイ

### 手動デプロイ

```bash
# 静的ファイル生成
npm run build

# GitHub Pages 用の export
npm run export
```

## 🎨 デザインシステム

### カラーパレット

- **Primary**: Blue (#3b82f6)
- **Secondary**: Teal (#14b8a6)
- **Accent**: Purple (#8b5cf6)
- **Neutral**: Gray scale

### アニメーション

- **Entrance**: Fade in + Slide up
- **Hover**: Scale + Shadow
- **Background**: Parallax + Floating elements
- **Transition**: Smooth 300ms duration

## 📞 お問い合わせ

- **Email**: contact@univ-app.org
- **GitHub**: [@university-app-federation](https://github.com/university-app-federation)
- **Twitter**: [@uaf_org](https://twitter.com/uaf_org)
- **Discord**: [UAF Community](https://discord.gg/uaf)

---

**UAF - University App Federation**  
学生の力で、大学生活の体験を進化させる
