---
title: HTMLタグリファレンス
description: よく使うHTMLタグの一覧と使い方
sidebar_position: 1
---

# 📚 HTMLタグリファレンス

HTMLでよく使うタグをカテゴリ別にまとめました。

## 📄 文書構造

### `<!DOCTYPE html>`
HTMLドキュメントの宣言
```html
<!DOCTYPE html>
```

### `<html>`
HTML文書のルート要素
```html
<html lang="ja">
  <!-- 内容 -->
</html>
```

### `<head>`
文書のメタ情報を含む
```html
<head>
  <title>ページタイトル</title>
  <meta charset="UTF-8">
</head>
```

### `<body>`
文書の本文
```html
<body>
  <!-- 表示される内容 -->
</body>
```

## 📝 テキスト関連

### `<h1>` ~ `<h6>`
見出し（h1が最大、h6が最小）
```html
<h1>大見出し</h1>
<h2>中見出し</h2>
<h3>小見出し</h3>
```

### `<p>`
段落
```html
<p>これは段落です。文章をまとめて書きます。</p>
```

### `<br>`
改行
```html
<p>1行目<br>2行目</p>
```

### `<hr>`
水平線
```html
<p>上の内容</p>
<hr>
<p>下の内容</p>
```

### `<strong>`
重要なテキスト（太字）
```html
<p>これは<strong>とても重要</strong>です。</p>
```

### `<em>`
強調（斜体）
```html
<p>これを<em>強調</em>したいです。</p>
```

### `<mark>`
ハイライト
```html
<p>重要な部分を<mark>マーカー</mark>で強調</p>
```

### `<small>`
小さい文字
```html
<p>普通の文字<small>小さい文字</small></p>
```

### `<del>`
削除されたテキスト
```html
<p>価格: <del>1000円</del> 800円</p>
```

### `<ins>`
追加されたテキスト
```html
<p>新機能: <ins>自動保存機能</ins></p>
```

## 📋 リスト

### `<ul>`
順序なしリスト
```html
<ul>
  <li>りんご</li>
  <li>みかん</li>
  <li>ぶどう</li>
</ul>
```

### `<ol>`
順序付きリスト
```html
<ol>
  <li>朝起きる</li>
  <li>朝ごはんを食べる</li>
  <li>学校に行く</li>
</ol>
```

### `<li>`
リストアイテム
```html
<li>リストの項目</li>
```

### `<dl>`, `<dt>`, `<dd>`
説明リスト
```html
<dl>
  <dt>HTML</dt>
  <dd>ウェブページの構造を定義する言語</dd>
  <dt>CSS</dt>
  <dd>ウェブページのスタイルを定義する言語</dd>
</dl>
```

## 🔗 リンクとナビゲーション

### `<a>`
ハイパーリンク
```html
<a href="https://example.com">リンクテキスト</a>
<a href="page2.html">次のページ</a>
<a href="#section1">ページ内リンク</a>
<a href="mailto:email@example.com">メールを送る</a>
```

### `<nav>`
ナビゲーションセクション
```html
<nav>
  <a href="/">ホーム</a>
  <a href="/about">概要</a>
  <a href="/contact">連絡先</a>
</nav>
```

## 🖼️ メディア

### `<img>`
画像
```html
<img src="cat.jpg" alt="猫の写真" width="300" height="200">
```

### `<figure>` と `<figcaption>`
図とキャプション
```html
<figure>
  <img src="graph.png" alt="売上グラフ">
  <figcaption>2024年の売上推移</figcaption>
</figure>
```

### `<video>`
動画
```html
<video controls width="320" height="240">
  <source src="movie.mp4" type="video/mp4">
  お使いのブラウザは動画タグに対応していません。
</video>
```

### `<audio>`
音声
```html
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  お使いのブラウザは音声タグに対応していません。
</audio>
```

### `<iframe>`
埋め込みコンテンツ
```html
<iframe src="https://example.com" width="600" height="400"></iframe>
```

## 📊 表

### `<table>`
表の作成
```html
<table>
  <thead>
    <tr>
      <th>名前</th>
      <th>年齢</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>太郎</td>
      <td>10</td>
    </tr>
    <tr>
      <td>花子</td>
      <td>11</td>
    </tr>
  </tbody>
</table>
```

### 表の要素
- `<thead>` - 表のヘッダー
- `<tbody>` - 表の本体
- `<tfoot>` - 表のフッター
- `<tr>` - 表の行
- `<th>` - 表の見出しセル
- `<td>` - 表のデータセル

## 📝 フォーム

### `<form>`
フォームの作成
```html
<form action="/submit" method="post">
  <!-- フォーム要素 -->
</form>
```

### `<input>`
入力フィールド
```html
<!-- テキスト -->
<input type="text" name="username" placeholder="名前">

<!-- パスワード -->
<input type="password" name="password">

<!-- メール -->
<input type="email" name="email">

<!-- 数値 -->
<input type="number" name="age" min="0" max="100">

<!-- チェックボックス -->
<input type="checkbox" name="agree" value="yes"> 同意する

<!-- ラジオボタン -->
<input type="radio" name="gender" value="male"> 男性
<input type="radio" name="gender" value="female"> 女性

<!-- ボタン -->
<input type="submit" value="送信">
```

### `<textarea>`
複数行テキスト入力
```html
<textarea name="message" rows="4" cols="50">
ここにメッセージを入力
</textarea>
```

### `<select>` と `<option>`
ドロップダウンリスト
```html
<select name="fruit">
  <option value="apple">りんご</option>
  <option value="orange">みかん</option>
  <option value="grape">ぶどう</option>
</select>
```

### `<label>`
フォーム要素のラベル
```html
<label for="username">名前:</label>
<input type="text" id="username" name="username">
```

### `<button>`
ボタン
```html
<button type="button">クリック</button>
<button type="submit">送信</button>
<button type="reset">リセット</button>
```

## 🏗️ セクション要素

### `<div>`
汎用コンテナ（ブロックレベル）
```html
<div class="container">
  <p>コンテンツ</p>
</div>
```

### `<span>`
汎用コンテナ（インライン）
```html
<p>この<span class="highlight">部分</span>を強調</p>
```

### `<header>`
ヘッダーセクション
```html
<header>
  <h1>サイトタイトル</h1>
  <nav><!-- ナビゲーション --></nav>
</header>
```

### `<main>`
メインコンテンツ
```html
<main>
  <h1>メインコンテンツ</h1>
  <p>主要な内容</p>
</main>
```

### `<footer>`
フッターセクション
```html
<footer>
  <p>&copy; 2024 私のウェブサイト</p>
</footer>
```

### `<section>`
セクション
```html
<section>
  <h2>セクションタイトル</h2>
  <p>セクションの内容</p>
</section>
```

### `<article>`
独立したコンテンツ
```html
<article>
  <h2>記事タイトル</h2>
  <p>記事の内容</p>
</article>
```

### `<aside>`
補足情報
```html
<aside>
  <h3>関連情報</h3>
  <p>補足的な内容</p>
</aside>
```

## 🎯 その他の便利なタグ

### `<details>` と `<summary>`
折りたたみ可能なコンテンツ
```html
<details>
  <summary>クリックして詳細を見る</summary>
  <p>隠れていた詳細情報</p>
</details>
```

### `<progress>`
進捗バー
```html
<progress value="70" max="100">70%</progress>
```

### `<meter>`
メーター（ゲージ）
```html
<meter value="8" min="0" max="10">8/10</meter>
```

### `<time>`
時間を表す
```html
<time datetime="2024-01-01">2024年1月1日</time>
```

### `<code>`
コード表示
```html
<p>HTMLタグは<code>&lt;p&gt;</code>のように書きます。</p>
```

### `<pre>`
整形済みテキスト
```html
<pre>
  そのままの形で
    表示される
      テキスト
</pre>
```

## 📋 使用頻度別おすすめタグ

### 初級者向け（よく使う）
- `<h1>`〜`<h6>` - 見出し
- `<p>` - 段落
- `<img>` - 画像
- `<a>` - リンク
- `<ul>`, `<ol>`, `<li>` - リスト
- `<div>` - コンテナ

### 中級者向け（時々使う）
- `<table>` - 表
- `<form>`, `<input>` - フォーム
- `<header>`, `<footer>` - セクション
- `<nav>` - ナビゲーション
- `<video>`, `<audio>` - メディア

### 上級者向け（特殊な用途）
- `<canvas>` - グラフィック描画
- `<svg>` - ベクターグラフィック
- `<template>` - テンプレート
- `<slot>` - スロット

## 💡 タグ選びのコツ

### 意味に合ったタグを使う
- 見出しには`<h1>`〜`<h6>`
- 段落には`<p>`
- リストには`<ul>`または`<ol>`
- ナビゲーションには`<nav>`

### SEOとアクセシビリティ
- 適切な`alt`属性を画像に付ける
- 見出しの階層を正しく使う
- セマンティックなタグを使う

:::tip 覚え方のコツ
最初は基本的なタグから覚えて、必要に応じて新しいタグを学んでいきましょう！
:::