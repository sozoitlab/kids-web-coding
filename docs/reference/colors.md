---
title: 色の使い方ガイド
description: ウェブサイトで使える色の指定方法と配色のコツ
sidebar_position: 3
---

# 🌈 色の使い方ガイド

ウェブサイトをカラフルにする色の指定方法と、きれいな配色のコツを学びましょう！

## 🎨 色の指定方法

### 1. 色名で指定
一番簡単な方法です。英語の色名をそのまま使います。

```css
p {
  color: red;              /* 赤 */
  color: blue;             /* 青 */
  color: green;            /* 緑 */
  color: yellow;           /* 黄色 */
  color: orange;           /* オレンジ */
  color: purple;           /* 紫 */
  color: pink;             /* ピンク */
  color: brown;            /* 茶色 */
  color: gray;             /* 灰色 */
  color: black;            /* 黒 */
  color: white;            /* 白 */
}
```

### 2. 16進数カラーコード
より細かい色を指定できます。

```css
p {
  color: #FF0000;          /* 赤 */
  color: #00FF00;          /* 緑 */
  color: #0000FF;          /* 青 */
  color: #FFFF00;          /* 黄色 */
  color: #FF00FF;          /* マゼンタ */
  color: #00FFFF;          /* シアン */
  color: #000000;          /* 黒 */
  color: #FFFFFF;          /* 白 */
}
```

#### 16進数の仕組み
```
#RRGGBB
 │││││└─ 青の強さ (00-FF)
 │││└┴── 緑の強さ (00-FF)
 │└┴──── 赤の強さ (00-FF)
 └────── # で始まる
```

### 3. RGB値
赤・緑・青の値を0〜255で指定します。

```css
p {
  color: rgb(255, 0, 0);     /* 赤 */
  color: rgb(0, 255, 0);     /* 緑 */
  color: rgb(0, 0, 255);     /* 青 */
  color: rgb(255, 255, 0);   /* 黄色 */
  color: rgb(128, 128, 128); /* 灰色 */
}
```

### 4. RGBA値（透明度付き）
RGB値に透明度（0〜1）を追加できます。

```css
p {
  color: rgba(255, 0, 0, 1);    /* 完全に不透明な赤 */
  color: rgba(255, 0, 0, 0.5);  /* 半透明の赤 */
  color: rgba(255, 0, 0, 0.1);  /* ほぼ透明な赤 */
}
```

## 🎨 基本の色パレット

### 原色
```css
.primary-red { color: #FF0000; }      /* 赤 */
.primary-green { color: #00FF00; }    /* 緑 */
.primary-blue { color: #0000FF; }     /* 青 */
```

### パステルカラー
やさしい印象の色です。

```css
.pastel-pink { background-color: #FFE4E1; }      /* ピンク */
.pastel-blue { background-color: #E0F2FF; }      /* 青 */
.pastel-green { background-color: #E8F5E9; }     /* 緑 */
.pastel-yellow { background-color: #FFF9C4; }    /* 黄色 */
.pastel-purple { background-color: #F3E5F5; }    /* 紫 */
.pastel-orange { background-color: #FFE0B2; }    /* オレンジ */
```

### ビビッドカラー
元気で明るい印象の色です。

```css
.vivid-red { color: #FF1744; }        /* 赤 */
.vivid-pink { color: #F50057; }       /* ピンク */
.vivid-purple { color: #D500F9; }     /* 紫 */
.vivid-blue { color: #2979FF; }       /* 青 */
.vivid-cyan { color: #00E5FF; }       /* シアン */
.vivid-green { color: #00E676; }      /* 緑 */
.vivid-yellow { color: #FFEA00; }     /* 黄色 */
.vivid-orange { color: #FF6D00; }     /* オレンジ */
```

### ダークカラー
落ち着いた印象の色です。

```css
.dark-red { color: #B71C1C; }         /* 濃い赤 */
.dark-blue { color: #0D47A1; }        /* 濃い青 */
.dark-green { color: #1B5E20; }       /* 濃い緑 */
.dark-purple { color: #4A148C; }      /* 濃い紫 */
.dark-brown { color: #3E2723; }       /* 濃い茶色 */
.dark-gray { color: #212121; }        /* 濃い灰色 */
```

## 🎨 配色のパターン

### 1. モノクロ配色
白・黒・グレーだけを使う配色です。

```css
.monochrome {
  background-color: #FFFFFF;  /* 白 */
  color: #333333;            /* 濃いグレー */
  border-color: #CCCCCC;     /* 薄いグレー */
}
```

### 2. 同系色配色
同じ色の濃淡を使う配色です。

```css
/* 青系 */
.blue-theme {
  background-color: #E3F2FD;  /* 薄い青 */
  color: #1976D2;            /* 中間の青 */
  border-color: #0D47A1;     /* 濃い青 */
}

/* ピンク系 */
.pink-theme {
  background-color: #FCE4EC;  /* 薄いピンク */
  color: #E91E63;            /* 中間のピンク */
  border-color: #880E4F;     /* 濃いピンク */
}
```

### 3. 補色配色
色相環で反対側にある色を組み合わせます。

```css
/* 赤と緑 */
.christmas {
  background-color: #FF5252;  /* 赤 */
  color: #FFFFFF;
  border: 3px solid #4CAF50; /* 緑 */
}

/* 青とオレンジ */
.ocean-sunset {
  background-color: #2196F3;  /* 青 */
  color: #FFFFFF;
  accent-color: #FF6F00;     /* オレンジ */
}
```

### 4. トライアド配色
色相環で正三角形を作る3色を使います。

```css
.triadic {
  background-color: #FF5252;  /* 赤 */
  border-color: #FFEB3B;     /* 黄色 */
  box-shadow: 0 0 10px #2196F3; /* 青 */
}
```

## 🌈 テーマ別配色例

### 春のテーマ 🌸
```css
.spring {
  background-color: #FFF0F5;  /* 薄いピンク */
  color: #FF69B4;            /* ホットピンク */
  border-color: #90EE90;     /* ライトグリーン */
}
```

### 夏のテーマ 🌊
```css
.summer {
  background-color: #E0F7FA;  /* 薄い水色 */
  color: #00ACC1;            /* シアン */
  border-color: #FFB300;     /* アンバー */
}
```

### 秋のテーマ 🍁
```css
.autumn {
  background-color: #FFF3E0;  /* 薄いオレンジ */
  color: #D84315;            /* 濃いオレンジ */
  border-color: #6D4C41;     /* ブラウン */
}
```

### 冬のテーマ ❄️
```css
.winter {
  background-color: #F5F5F5;  /* 薄いグレー */
  color: #37474F;            /* ブルーグレー */
  border-color: #B0BEC5;     /* ライトブルーグレー */
}
```

## 🎮 ゲーム風配色

### レトロゲーム
```css
.retro-game {
  background-color: #000000;
  color: #00FF00;           /* ライムグリーン */
  text-shadow: 0 0 10px #00FF00;
}
```

### ファンタジー
```css
.fantasy {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #FFFFFF;
  text-shadow: 0 0 20px rgba(255,255,255,0.5);
}
```

### サイバーパンク
```css
.cyberpunk {
  background-color: #0A0E27;
  color: #00D9FF;           /* ネオンブルー */
  border: 2px solid #FF006E; /* ネオンピンク */
}
```

## 🎨 グラデーション

### 線形グラデーション
```css
/* 虹色 */
.rainbow {
  background: linear-gradient(to right, 
    red, orange, yellow, green, blue, indigo, violet);
}

/* 夕焼け */
.sunset {
  background: linear-gradient(to bottom, 
    #FF6B6B, #FFE66D, #4ECDC4);
}

/* 海 */
.ocean {
  background: linear-gradient(to bottom, 
    #2196F3, #1976D2, #0D47A1);
}
```

### 円形グラデーション
```css
/* 太陽 */
.sun {
  background: radial-gradient(circle, 
    #FFEB3B, #FFC107, #FF9800);
}

/* スポットライト */
.spotlight {
  background: radial-gradient(circle at center, 
    rgba(255,255,255,0.8), rgba(0,0,0,0.8));
}
```

## 💡 色選びのコツ

### Do（やるべきこと）
- ✅ **コントラストを確保**: 文字と背景の色は十分に違う色に
- ✅ **色数を制限**: 3〜4色までに抑える
- ✅ **統一感を持たせる**: 同系色でまとめる
- ✅ **目的に合った色**: 楽しい→明るい色、落ち着き→暗い色

### Don't（避けるべきこと）
- ❌ **読みにくい組み合わせ**: 黄色い背景に白い文字など
- ❌ **色の使いすぎ**: 虹のようにカラフルすぎる
- ❌ **目がチカチカする色**: 蛍光色の使いすぎ
- ❌ **感情と合わない色**: 悲しい内容に明るすぎる色

## 🔧 色の調整ツール

### CSSフィルター
```css
/* 明るさ調整 */
.brighter { filter: brightness(1.5); }
.darker { filter: brightness(0.5); }

/* 彩度調整 */
.saturated { filter: saturate(2); }
.desaturated { filter: saturate(0.5); }

/* 色相回転 */
.hue-rotate { filter: hue-rotate(90deg); }

/* グレースケール */
.grayscale { filter: grayscale(100%); }
```

## 📚 色の心理効果

### 色が与える印象
- **赤**: 情熱、興奮、注意
- **青**: 冷静、信頼、安心
- **緑**: 自然、成長、安らぎ
- **黄色**: 明るさ、注意、幸福
- **オレンジ**: 活力、友好、温かさ
- **紫**: 高貴、神秘、創造性
- **ピンク**: かわいさ、優しさ、愛情
- **茶色**: 安定、自然、温もり
- **黒**: 高級感、力強さ、神秘
- **白**: 清潔、純粋、シンプル

## 🎯 練習問題

1. **季節のカード**: 春夏秋冬それぞれのカードを作ろう
2. **感情の表現**: 喜怒哀楽を色で表現してみよう
3. **お店のサイト**: カフェ、本屋、おもちゃ屋のテーマカラーを決めよう

:::tip 配色に迷ったら
まず好きな色を1つ選んで、その色を中心に配色を考えてみましょう！
:::