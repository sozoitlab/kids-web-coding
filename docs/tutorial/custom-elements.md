---
title: カスタム要素を作ろう
description: オリジナルのHTML要素を作って使ってみよう
sidebar_position: 4
---

# 🎭 カスタム要素を作ろう

自分だけのオリジナルHTMLタグを作って、もっと楽しいウェブサイトにしましょう！

## 🤔 カスタム要素って何？

### 普通のHTMLタグ
```html
<h1>見出し</h1>
<p>段落</p>
<img src="画像">
```

### カスタム要素の例
```html
<my-card>カードの内容</my-card>
<cool-button>クリック！</cool-button>
<rainbow-text>虹色の文字</rainbow-text>
```

自分で名前を決めて、自分で動きを決められる特別なタグです！

## 🏗️ 基本的な作り方

### ステップ1: HTMLで使う
```html
<my-hello>こんにちは！</my-hello>
```

### ステップ2: CSSでデザインする
```css
my-hello {
  display: block;
  background-color: yellow;
  padding: 20px;
  border-radius: 10px;
  font-size: 24px;
  text-align: center;
}
```

## 🎨 実践！オリジナルカードを作ろう

### 1. プロフィールカード
```html
<profile-card>
  <h3>たろうくん</h3>
  <p>プログラミング大好き！</p>
  <img src="avatar.png" alt="アバター">
</profile-card>
```

```css
profile-card {
  display: block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  max-width: 300px;
  margin: 20px auto;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

profile-card h3 {
  font-size: 28px;
  margin-bottom: 10px;
}

profile-card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid white;
}
```

### 2. アニメーションボタン
```html
<magic-button>魔法のボタン</magic-button>
```

```css
magic-button {
  display: inline-block;
  background-color: #FF6B6B;
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

magic-button:hover {
  transform: scale(1.1);
  background-color: #FF5252;
}

magic-button::before {
  content: "✨";
  position: absolute;
  top: 50%;
  left: -30px;
  transform: translateY(-50%);
  transition: left 0.3s;
}

magic-button:hover::before {
  left: 10px;
}
```

### 3. メッセージボックス
```html
<info-box type="tip">
  これは大切な情報です！
</info-box>
```

```css
info-box {
  display: block;
  padding: 20px;
  margin: 20px 0;
  border-left: 5px solid #4CAF50;
  background-color: #E8F5E9;
  border-radius: 5px;
  position: relative;
}

info-box::before {
  content: "💡";
  position: absolute;
  left: -15px;
  top: 20px;
  background: white;
  padding: 5px;
  border-radius: 50%;
  font-size: 20px;
}

info-box[type="warning"] {
  border-color: #FF9800;
  background-color: #FFF3E0;
}

info-box[type="warning"]::before {
  content: "⚠️";
}

info-box[type="error"] {
  border-color: #F44336;
  background-color: #FFEBEE;
}

info-box[type="error"]::before {
  content: "❌";
}
```

## 🎮 インタラクティブな要素

### クリックで変化する要素
```html
<click-counter>クリック数: 0</click-counter>
```

```css
click-counter {
  display: inline-block;
  background-color: #2196F3;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;
}

click-counter:hover {
  background-color: #1976D2;
}

click-counter:active {
  transform: scale(0.95);
}
```

JavaScriptを使えば、実際にカウントもできます！
```javascript
// 上級者向け
document.querySelector('click-counter').addEventListener('click', function() {
  let count = parseInt(this.textContent.split(': ')[1]);
  count++;
  this.textContent = `クリック数: ${count}`;
});
```

## 🌈 楽しい装飾要素

### 1. 虹色テキスト
```html
<rainbow-text>きらきらレインボー！</rainbow-text>
```

```css
rainbow-text {
  display: inline-block;
  font-size: 32px;
  font-weight: bold;
  background: linear-gradient(
    to right,
    #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow-shift 3s ease-in-out infinite;
}

@keyframes rainbow-shift {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(180deg); }
}
```

### 2. 吹き出し
```html
<speech-bubble direction="left">
  こんにちは！元気？
</speech-bubble>
```

```css
speech-bubble {
  display: inline-block;
  background-color: #E3F2FD;
  padding: 15px 20px;
  border-radius: 20px;
  position: relative;
  margin: 20px;
}

speech-bubble::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 30px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #E3F2FD;
}

speech-bubble[direction="right"]::after {
  left: auto;
  right: 30px;
}
```

### 3. ローディングアニメーション
```html
<loading-spinner></loading-spinner>
```

```css
loading-spinner {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## 📏 命名規則

### 良い名前の例
- ✅ `my-button`
- ✅ `cool-card`
- ✅ `info-box`
- ✅ `user-profile`

### 避けるべき名前
- ❌ `button` （既存のタグと同じ）
- ❌ `mybutton` （ハイフンがない）
- ❌ `my_button` （アンダースコアは使わない）
- ❌ `MyButton` （大文字は使わない）

:::tip 💡 ルール
カスタム要素の名前には必ずハイフン（-）を含める必要があります！
:::

## 🎯 練習問題

### 問題1: ゲームカード
ポケモンカードのようなゲームカードを作ってみよう！
- 名前
- HP
- 技
- 画像

### 問題2: 通知バッジ
新着メッセージの数を表示するバッジを作ろう！

### 問題3: プログレスバー
進行状況を表示するバーを作ろう！

## 🏗️ 上級テクニック

### 属性を使った条件分岐
```html
<alert-box type="success">成功しました！</alert-box>
<alert-box type="error">エラーが発生しました</alert-box>
```

```css
alert-box {
  display: block;
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
}

alert-box[type="success"] {
  background-color: #4CAF50;
  color: white;
}

alert-box[type="error"] {
  background-color: #f44336;
  color: white;
}
```

### 入れ子にできる要素
```html
<game-container>
  <game-header>スコア: 100</game-header>
  <game-board>
    <game-piece>👾</game-piece>
    <game-piece>👾</game-piece>
  </game-board>
</game-container>
```

## 💡 アイデア集

### 作ってみたい要素
1. **SNS風プロフィール**
2. **音楽プレーヤー風UI**
3. **チャット風吹き出し**
4. **ゲームのステータス表示**
5. **天気予報カード**
6. **ToDoリストアイテム**
7. **商品カード**
8. **タイムライン表示**

## 📚 まとめ

今日学んだこと：
- ✅ カスタム要素の基本
- ✅ 命名規則
- ✅ CSSでの装飾方法
- ✅ 属性の使い方
- ✅ アニメーション効果

## 🚀 次のステップ

カスタム要素ができたら、いよいよ[サイトを公開](/docs/tutorial/publishing)してみましょう！

:::note 🎨 クリエイティブチャレンジ
学んだ技術を使って、自分だけのオリジナル要素を5つ作ってみよう！
:::