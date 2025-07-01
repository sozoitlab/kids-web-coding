---
title: CSSでスタイリング
description: ウェブサイトをきれいにデザインしよう
sidebar_position: 3
---

# 🎨 CSSでスタイリング

CSSは「Cascading Style Sheets」の略で、HTMLで作った骨組みに色やデザインを付ける言語です。

## 🌈 CSSって何？

### 身近な例で考えよう
CSSは、お絵かきの色鉛筆のようなもの：
- 🎨 **色** = 文字や背景の色
- 📏 **大きさ** = 文字やボックスのサイズ
- 🖼️ **配置** = どこに置くか
- ✨ **効果** = 影や丸みなど

### CSSの書き方
```css
セレクタ {
  プロパティ: 値;
}
```

## 🎯 CSSの基本

### HTMLにCSSを追加する方法

#### 1. styleタグを使う
```html
<head>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
```

#### 2. style属性を使う（インライン）
```html
<h1 style="color: red;">赤い見出し</h1>
```

#### 3. 外部ファイルを読み込む
```html
<link rel="stylesheet" href="style.css">
```

## 🖌️ 文字のスタイル

### 色を変える
```css
h1 {
  color: red;           /* 英語の色名 */
  color: #FF0000;       /* 16進数 */
  color: rgb(255,0,0);  /* RGB値 */
}
```

### 文字の大きさ
```css
p {
  font-size: 16px;      /* ピクセル */
  font-size: 1.5em;     /* 相対的な大きさ */
  font-size: 24pt;      /* ポイント */
}
```

### 文字の種類（フォント）
```css
body {
  font-family: "メイリオ", "Meiryo", sans-serif;
}
```

### 文字の装飾
```css
/* 太字 */
strong {
  font-weight: bold;
}

/* 斜体 */
em {
  font-style: italic;
}

/* 下線 */
.underline {
  text-decoration: underline;
}

/* 取り消し線 */
.strike {
  text-decoration: line-through;
}
```

## 🎨 背景のデザイン

### 背景色
```css
body {
  background-color: lightblue;
}

.box {
  background-color: #FFE4E1;  /* ピンク */
}
```

### 背景画像
```css
body {
  background-image: url("pattern.png");
  background-repeat: repeat;    /* 繰り返し */
  background-size: cover;       /* 画面全体に */
}
```

### グラデーション
```css
.gradient-box {
  background: linear-gradient(to right, pink, purple);
}

.rainbow {
  background: linear-gradient(to right, 
    red, orange, yellow, green, blue, indigo, violet);
}
```

## 📦 ボックスモデル

### パディング（内側の余白）
```css
.box {
  padding: 10px;              /* 全方向 */
  padding-top: 20px;          /* 上だけ */
  padding: 10px 20px;         /* 上下 左右 */
  padding: 10px 20px 30px 40px; /* 上 右 下 左 */
}
```

### マージン（外側の余白）
```css
.box {
  margin: 20px;               /* 全方向 */
  margin-bottom: 30px;        /* 下だけ */
  margin: 0 auto;             /* 左右中央 */
}
```

### ボーダー（枠線）
```css
.box {
  border: 2px solid black;    /* 太さ 種類 色 */
  border-radius: 10px;        /* 角を丸く */
}

/* いろいろな枠線 */
.dotted { border: 3px dotted red; }      /* 点線 */
.dashed { border: 3px dashed blue; }     /* 破線 */
.double { border: 5px double green; }    /* 二重線 */
```

## 🎯 実践！きれいなカードを作ろう

### HTML
```html
<div class="card">
  <h2 class="card-title">私のカード</h2>
  <p class="card-text">これは素敵なカードです。</p>
  <button class="card-button">クリック！</button>
</div>
```

### CSS
```css
.card {
  background-color: white;
  border: 2px solid #ddd;
  border-radius: 15px;
  padding: 20px;
  margin: 20px;
  width: 300px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
}

.card-title {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}

.card-text {
  color: #666;
  font-size: 16px;
  line-height: 1.5;
}

.card-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.card-button:hover {
  background-color: #45a049;
}
```

## ✨ 特殊効果

### 影をつける
```css
/* テキストの影 */
h1 {
  text-shadow: 2px 2px 4px gray;
}

/* ボックスの影 */
.shadow-box {
  box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
}
```

### ホバー効果
```css
.button {
  background-color: blue;
  transition: all 0.3s;  /* なめらかな変化 */
}

.button:hover {
  background-color: darkblue;
  transform: scale(1.1);  /* 少し大きく */
}
```

### アニメーション
```css
@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

.bouncing {
  animation: bounce 1s infinite;
}
```

## 📱 レスポンシブデザイン

### 画面サイズに合わせる
```css
/* スマホサイズ */
@media (max-width: 600px) {
  .container {
    width: 100%;
    padding: 10px;
  }
}

/* タブレットサイズ */
@media (min-width: 601px) and (max-width: 1024px) {
  .container {
    width: 80%;
    margin: 0 auto;
  }
}
```

## 🎨 カラーパレット例

### パステルカラー
```css
.pastel-pink { background-color: #FFE5E5; }
.pastel-blue { background-color: #E5F3FF; }
.pastel-green { background-color: #E5FFE5; }
.pastel-yellow { background-color: #FFFFE5; }
.pastel-purple { background-color: #F3E5FF; }
```

### ネオンカラー
```css
.neon-pink { color: #FF10F0; }
.neon-green { color: #39FF14; }
.neon-blue { color: #00FFFF; }
.neon-yellow { color: #FFFF00; }
```

## 🏃 練習問題

### 問題1: カラフルな見出し
h1タグを虹色のグラデーションにしてみよう！

### 問題2: ボタンデザイン
押したくなるようなボタンを3種類作ってみよう！

### 問題3: カードレイアウト
自己紹介カードを作って、影や丸みをつけてみよう！

## 🔍 よくある間違い

### 1. セミコロンの忘れ
```css
/* ❌ 間違い */
h1 {
  color: red
  font-size: 24px;
}

/* ✅ 正しい */
h1 {
  color: red;
  font-size: 24px;
}
```

### 2. 単位の忘れ
```css
/* ❌ 間違い */
p {
  font-size: 16;
}

/* ✅ 正しい */
p {
  font-size: 16px;
}
```

### 3. スペルミス
```css
/* ❌ 間違い */
h1 {
  colour: red;      /* color が正しい */
  font-weight: bolt; /* bold が正しい */
}
```

## 💡 デザインのコツ

### Do（やるべきこと）
- ✅ 色は3〜4色まで
- ✅ 余白を十分にとる
- ✅ 読みやすいフォントサイズ
- ✅ コントラストをつける

### Don't（避けるべきこと）
- ❌ 色を使いすぎる
- ❌ 文字を小さくしすぎる
- ❌ 派手すぎるアニメーション
- ❌ 読みにくい色の組み合わせ

## 📚 まとめ

今日学んだこと：
- ✅ CSSの基本的な書き方
- ✅ 文字と背景のスタイル
- ✅ ボックスモデル
- ✅ 特殊効果
- ✅ レスポンシブデザイン

## 🚀 次のステップ

CSSの基礎ができたら、次は[カスタム要素](/docs/tutorial/custom-elements)を作ってみましょう！

:::tip 💡 チャレンジ
学んだCSSを使って、自分だけのオリジナルデザインを作ってみよう！
:::