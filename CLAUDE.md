# キッズWebコーディング講座 - プロジェクト概要

## プロジェクトについて

小学3年生から6年生（8歳～12歳）向けのWebコーディング教育サイトです。3時間のワークショップ形式で、HTML/CSSの基礎を学び、自分のウェブサイトを作成してGitHub Pagesで公開することを目標としています。

## 技術スタック

- **フレームワーク**: Docusaurus 3.8.1 (React 19.0.0)
- **言語**: TypeScript
- **スタイリング**: CSS (Infima framework)
- **デプロイ**: GitHub Pages
- **URL**: https://kids-web-coding-tutorial.github.io/kids-web-coding-tutorial/

## プロジェクト構造

```
kids-web-tutorial/
├── docs/               # チュートリアルコンテンツ
│   ├── support/       # サポートドキュメント
│   └── next-steps.md  # 次のステップ
├── src/               # ソースコード
│   ├── components/    # Reactコンポーネント
│   ├── css/          # グローバルスタイル
│   └── pages/        # 追加ページ
├── static/           # 静的アセット
├── docusaurus.config.ts
└── sidebars.ts
```

## 開発コマンド

```bash
npm start      # 開発サーバー起動 (http://localhost:3000)
npm run build  # プロダクションビルド
npm run serve  # ビルドされたサイトの確認
npm run deploy # GitHub Pagesへのデプロイ
npm run typecheck # TypeScript型チェック
```

## コンテンツ構成

1. **事前準備**: 環境設定、アカウント作成
2. **チュートリアル**: HTML基礎、CSS、カスタマイズ、公開
3. **リファレンス**: HTMLタグ、CSSプロパティ、色
4. **サポート**: FAQ、トラブルシューティング、保護者向けガイド

## 開発ガイドライン

### コーディング規約

- TypeScriptを使用
- Reactコンポーネントは関数コンポーネントで記述
- スタイルはcustom.cssでInfima変数をカスタマイズ
- 子供向けのシンプルで分かりやすい言語を使用
- 絵文字を効果的に使用して視覚的に楽しく

### セキュリティとプライバシー

- 保護者向けガイドでアカウント管理について詳しく説明
- プライバシー設定のガイダンスを提供
- インターネット安全教育を含む
- パスワードセキュリティの推奨事項を記載

### 新しいコンテンツの追加

1. `docs/`ディレクトリに新しいMarkdownファイルを作成
2. `sidebars.ts`でナビゲーション構造を更新
3. 画像は`static/img/`に配置
4. コンポーネントは`src/components/`に追加

### テーマカラー

- プライマリ: #2e8555 (ライト), #25c2a0 (ダーク)
- 子供向けの明るく親しみやすい配色

### 注意事項

- **対象年齢**: 小学3-6年生（8-12歳）
- **言語**: 日本語
- **ワークショップ時間**: 3時間（休憩含む）
- **ブログ機能**: 現在無効化されている

## よく使うパス

- ホームページコンポーネント: `src/pages/index.tsx`
- カスタムCSS: `src/css/custom.css`
- 設定ファイル: `docusaurus.config.ts`
- サイドバー設定: `sidebars.ts`

## デプロイ

GitHub Pagesへのデプロイは以下のコマンドで実行:

```bash
npm run deploy
```

デプロイ前に必ず`npm run build`でビルドエラーがないことを確認してください。

## トラブルシューティング

- **ビルドエラー**: `npm run typecheck`で型エラーを確認
- **404エラー**: `baseUrl`と`url`の設定を確認
- **スタイルが反映されない**: ブラウザキャッシュをクリア

## 今後の開発予定

- チュートリアルコンテンツの充実
- インタラクティブなコード例の追加
- 進捗管理機能の実装
- 修了証の自動生成機能