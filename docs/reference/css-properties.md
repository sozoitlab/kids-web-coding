---
title: CSSプロパティリファレンス
description: よく使うCSSプロパティの一覧と使い方
sidebar_position: 2
---

# 🎨 CSSプロパティリファレンス

CSSでよく使うプロパティをカテゴリ別にまとめました。

## 🎨 色とテキスト

### `color`
文字の色
```css
p {
  color: red;                    /* 色名 */
  color: #FF0000;               /* 16進数 */
  color: rgb(255, 0, 0);        /* RGB */
  color: rgba(255, 0, 0, 0.5);  /* RGBA（透明度付き） */
}
```

### `background-color`
背景色
```css
div {
  background-color: lightblue;
  background-color: #ADD8E6;
  background-color: rgb(173, 216, 230);
  background-color: transparent;  /* 透明 */
}
```

### `font-size`
文字の大きさ
```css
h1 {
  font-size: 32px;     /* ピクセル */
  font-size: 2em;      /* 相対単位 */
  font-size: 1.5rem;   /* ルート相対単位 */
  font-size: 120%;     /* パーセント */
}
```

### `font-family`
フォント（書体）
```css
body {
  font-family: "メイリオ", "Meiryo", sans-serif;
  font-family: "游ゴシック", "Yu Gothic", sans-serif;
  font-family: Arial, Helvetica, sans-serif;
}
```

### `font-weight`
文字の太さ
```css
strong {
  font-weight: normal;   /* 通常 */
  font-weight: bold;     /* 太字 */
  font-weight: 100;      /* 細い */
  font-weight: 900;      /* 極太 */
}
```

### `font-style`
文字のスタイル
```css
em {
  font-style: normal;    /* 通常 */
  font-style: italic;    /* 斜体 */
  font-style: oblique;   /* 傾斜 */
}
```

### `text-align`
文字の配置
```css
p {
  text-align: left;      /* 左寄せ */
  text-align: center;    /* 中央寄せ */
  text-align: right;     /* 右寄せ */
  text-align: justify;   /* 両端揃え */
}
```

### `text-decoration`
文字の装飾
```css
a {
  text-decoration: none;          /* なし */
  text-decoration: underline;     /* 下線 */
  text-decoration: overline;      /* 上線 */
  text-decoration: line-through;  /* 取り消し線 */
}
```

### `line-height`
行の高さ
```css
p {
  line-height: 1.5;      /* 数値（フォントサイズの倍数） */
  line-height: 24px;     /* 固定値 */
  line-height: 150%;     /* パーセント */
}
```

### `letter-spacing`
文字間隔
```css
h1 {
  letter-spacing: 0.1em;   /* 文字間を広げる */
  letter-spacing: -0.05em; /* 文字間を狭める */
  letter-spacing: 2px;     /* 固定値 */
}
```

## 📦 ボックスモデル

### `width` / `height`
幅と高さ
```css
div {
  width: 300px;          /* 固定幅 */
  width: 50%;           /* 親要素の50% */
  width: auto;          /* 自動 */
  height: 200px;        /* 固定高さ */
  height: 100vh;        /* ビューポートの高さ */
}
```

### `padding`
内側の余白
```css
div {
  padding: 20px;                    /* 全方向 */
  padding: 10px 20px;              /* 上下 左右 */
  padding: 10px 15px 20px 25px;    /* 上 右 下 左 */
  padding-top: 10px;               /* 上だけ */
  padding-right: 15px;             /* 右だけ */
  padding-bottom: 20px;            /* 下だけ */
  padding-left: 25px;              /* 左だけ */
}
```

### `margin`
外側の余白
```css
div {
  margin: 20px;                     /* 全方向 */
  margin: 10px auto;               /* 上下10px 左右中央 */
  margin: 10px 15px 20px 25px;     /* 上 右 下 左 */
  margin-top: 10px;                /* 上だけ */
  margin-right: 15px;              /* 右だけ */
  margin-bottom: 20px;             /* 下だけ */
  margin-left: 25px;               /* 左だけ */
}
```

### `border`
枠線
```css
div {
  border: 2px solid black;          /* 太さ 種類 色 */
  border: 3px dotted red;          /* 点線 */
  border: 4px dashed blue;         /* 破線 */
  border: 5px double green;        /* 二重線 */
  border-top: 1px solid gray;      /* 上だけ */
  border-radius: 10px;             /* 角を丸く */
}
```

### `box-sizing`
ボックスサイズの計算方法
```css
div {
  box-sizing: content-box;  /* デフォルト（パディング・ボーダーを含まない） */
  box-sizing: border-box;   /* パディング・ボーダーを含む */
}
```

## 🎯 配置とレイアウト

### `display`
表示方法
```css
div {
  display: block;         /* ブロック要素 */
  display: inline;        /* インライン要素 */
  display: inline-block;  /* インラインブロック */
  display: none;          /* 非表示 */
  display: flex;          /* フレックスボックス */
  display: grid;          /* グリッド */
}
```

### `position`
配置方法
```css
div {
  position: static;       /* 通常（デフォルト） */
  position: relative;     /* 相対配置 */
  position: absolute;     /* 絶対配置 */
  position: fixed;        /* 固定配置 */
  position: sticky;       /* スティッキー */
}
```

### `top` / `right` / `bottom` / `left`
位置指定
```css
div {
  position: absolute;
  top: 10px;
  right: 20px;
  bottom: 30px;
  left: 40px;
}
```

### `float`
回り込み
```css
img {
  float: left;           /* 左に配置 */
  float: right;          /* 右に配置 */
  float: none;           /* なし */
}
```

### `clear`
回り込み解除
```css
div {
  clear: left;           /* 左の回り込み解除 */
  clear: right;          /* 右の回り込み解除 */
  clear: both;           /* 両方解除 */
}
```

### `z-index`
重なり順
```css
div {
  position: relative;
  z-index: 1;            /* 小さい値が下 */
  z-index: 999;          /* 大きい値が上 */
}
```

## 🎨 背景

### `background-image`
背景画像
```css
div {
  background-image: url("image.jpg");
  background-image: linear-gradient(to right, red, blue);
  background-image: radial-gradient(circle, yellow, orange);
}
```

### `background-size`
背景画像のサイズ
```css
div {
  background-size: cover;      /* 要素全体を覆う */
  background-size: contain;    /* 要素内に収める */
  background-size: 100px 50px; /* 幅 高さ */
  background-size: 50%;        /* パーセント指定 */
}
```

### `background-position`
背景画像の位置
```css
div {
  background-position: center;      /* 中央 */
  background-position: top left;    /* 左上 */
  background-position: 50% 50%;     /* パーセント */
  background-position: 10px 20px;   /* ピクセル */
}
```

### `background-repeat`
背景画像の繰り返し
```css
div {
  background-repeat: repeat;     /* 繰り返し（デフォルト） */
  background-repeat: no-repeat;  /* 繰り返さない */
  background-repeat: repeat-x;   /* 横方向のみ */
  background-repeat: repeat-y;   /* 縦方向のみ */
}
```

## 🎪 フレックスボックス

### `display: flex`
フレックスコンテナ
```css
.container {
  display: flex;
}
```

### `flex-direction`
主軸の方向
```css
.container {
  flex-direction: row;            /* 横並び（デフォルト） */
  flex-direction: row-reverse;    /* 横並び（逆順） */
  flex-direction: column;         /* 縦並び */
  flex-direction: column-reverse; /* 縦並び（逆順） */
}
```

### `justify-content`
主軸方向の配置
```css
.container {
  justify-content: flex-start;    /* 始端寄せ */
  justify-content: flex-end;      /* 終端寄せ */
  justify-content: center;        /* 中央寄せ */
  justify-content: space-between; /* 均等配置（両端） */
  justify-content: space-around;  /* 均等配置（周囲） */
  justify-content: space-evenly;  /* 完全均等配置 */
}
```

### `align-items`
交差軸方向の配置
```css
.container {
  align-items: stretch;     /* 伸縮（デフォルト） */
  align-items: flex-start;  /* 始端寄せ */
  align-items: flex-end;    /* 終端寄せ */
  align-items: center;      /* 中央寄せ */
  align-items: baseline;    /* ベースライン */
}
```

### `gap`
アイテム間の隙間
```css
.container {
  gap: 10px;           /* 全方向の隙間 */
  gap: 10px 20px;      /* 行間 列間 */
}
```

## 🎭 トランジションとアニメーション

### `transition`
なめらかな変化
```css
button {
  background-color: blue;
  transition: background-color 0.3s ease;
  transition: all 0.3s;  /* すべてのプロパティ */
}

button:hover {
  background-color: darkblue;
}
```

### `transform`
変形
```css
div {
  transform: rotate(45deg);           /* 回転 */
  transform: scale(1.5);              /* 拡大縮小 */
  transform: translate(10px, 20px);   /* 移動 */
  transform: skew(10deg, 5deg);       /* 傾斜 */
}
```

### `animation`
アニメーション
```css
@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

div {
  animation: bounce 1s infinite;
  animation: bounce 1s ease-in-out infinite alternate;
}
```

## 🎯 その他の便利なプロパティ

### `opacity`
不透明度
```css
div {
  opacity: 1;      /* 完全に不透明 */
  opacity: 0.5;    /* 半透明 */
  opacity: 0;      /* 完全に透明 */
}
```

### `cursor`
マウスカーソル
```css
button {
  cursor: pointer;     /* 手のアイコン */
  cursor: text;        /* テキスト選択 */
  cursor: move;        /* 移動 */
  cursor: not-allowed; /* 禁止 */
}
```

### `overflow`
はみ出し制御
```css
div {
  overflow: visible;   /* 表示（デフォルト） */
  overflow: hidden;    /* 隠す */
  overflow: scroll;    /* スクロールバー表示 */
  overflow: auto;      /* 必要時のみスクロール */
}
```

### `box-shadow`
影
```css
div {
  box-shadow: 5px 5px 10px gray;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
  box-shadow: inset 0 0 10px black;  /* 内側の影 */
}
```

### `text-shadow`
文字の影
```css
h1 {
  text-shadow: 2px 2px 4px gray;
  text-shadow: 0 0 10px red;  /* ぼかし効果 */
}
```

## 📱 レスポンシブデザイン

### メディアクエリ
```css
/* スマートフォン */
@media (max-width: 480px) {
  body { font-size: 14px; }
}

/* タブレット */
@media (min-width: 481px) and (max-width: 768px) {
  body { font-size: 16px; }
}

/* デスクトップ */
@media (min-width: 769px) {
  body { font-size: 18px; }
}
```

## 💡 プロパティ選びのコツ

### よく使う組み合わせ

#### カード風デザイン
```css
.card {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
}
```

#### ボタンデザイン
```css
.button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #45a049;
}
```

#### センタリング
```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

:::tip 覚え方のコツ
最初は基本的なプロパティ（color、font-size、margin、padding）から覚えて、徐々に高度なプロパティを学んでいきましょう！
:::