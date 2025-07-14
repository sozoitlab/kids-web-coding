import React from 'react';
import CodeExample from '@site/src/components/CodeExample';
import styles from './SamplePage.module.css';

export default function SamplePage() {
  const htmlContent = `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>たけしの自己紹介</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <!-- ヘッダー部分 -->
        <header class="header">
            <div class="profile-photo">
                <div class="avatar">😊</div>
            </div>
            <h1 class="main-title">こんにちは！たけしです</h1>
            <p class="subtitle">小学5年生のプログラマー見習い</p>
        </header>

        <!-- 自己紹介カード -->
        <section class="intro-card">
            <h2 class="section-title">🙋‍♂️ 自己紹介</h2>
            <p>はじめまして！ぼくの名前はたけしです。</p>
            <p>プログラミングが大好きで、毎日コードを書いて遊んでいます。</p>
            <p>将来はゲームを作るプログラマーになりたいです！</p>
        </section>

        <!-- 好きなものセクション -->
        <section class="favorites-section">
            <h2 class="section-title">❤️ 好きなもの</h2>
            <div class="favorites-grid">
                <div class="favorite-item">
                    <span class="favorite-icon">🎮</span>
                    <h3>ゲーム</h3>
                    <p>マインクラフトとポケモンが大好き！</p>
                </div>
                <div class="favorite-item">
                    <span class="favorite-icon">💻</span>
                    <h3>プログラミング</h3>
                    <p>ScratchとHTMLを勉強中</p>
                </div>
                <div class="favorite-item">
                    <span class="favorite-icon">🍕</span>
                    <h3>ピザ</h3>
                    <p>マルゲリータが一番好き！</p>
                </div>
                <div class="favorite-item">
                    <span class="favorite-icon">🐕</span>
                    <h3>犬</h3>
                    <p>柴犬のポチを飼ってます</p>
                </div>
            </div>
        </section>

        <!-- スキルセクション -->
        <section class="skills-section">
            <h2 class="section-title">🌟 できること</h2>
            <ul class="skills-list">
                <li class="skill-item html">HTML</li>
                <li class="skill-item css">CSS</li>
                <li class="skill-item scratch">Scratch</li>
                <li class="skill-item python">Python（勉強中）</li>
            </ul>
        </section>

        <!-- 作品セクション -->
        <section class="portfolio-section">
            <h2 class="section-title">🎨 作った作品</h2>
            <div class="portfolio-grid">
                <div class="portfolio-item">
                    <div class="portfolio-image">🌐</div>
                    <h3>初めてのウェブサイト</h3>
                    <p>HTMLとCSSで作った最初の作品</p>
                </div>
                <div class="portfolio-item">
                    <div class="portfolio-image">🎯</div>
                    <h3>シューティングゲーム</h3>
                    <p>Scratchで作ったゲーム</p>
                </div>
                <div class="portfolio-item">
                    <div class="portfolio-image">🧮</div>
                    <h3>計算アプリ</h3>
                    <p>足し算引き算ができるアプリ</p>
                </div>
            </div>
        </section>

        <!-- 連絡先セクション -->
        <section class="contact-section">
            <h2 class="section-title">📞 連絡先</h2>
            <div class="contact-info">
                <p>📧 メール: takeshi@example.com</p>
                <p>🐦 Twitter: @takeshi_coder</p>
                <p>📍 住所: 東京都</p>
            </div>
        </section>

        <!-- フッター -->
        <footer class="footer">
            <p>&copy; 2024 たけしのウェブサイト. みんなでプログラミングを楽しもう！</p>
            <div class="social-links">
                <a href="#" class="social-link">GitHub</a>
                <a href="#" class="social-link">Scratch</a>
            </div>
        </footer>
    </div>
</body>
</html>`;

  const cssContent = `/* リセットとベース設定 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

/* ヘッダー */
.header {
    text-align: center;
    background: white;
    border-radius: 20px;
    padding: 40px;
    margin-bottom: 30px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.profile-photo {
    margin-bottom: 20px;
}

.avatar {
    width: 120px;
    height: 120px;
    background: linear-gradient(135deg, #FFE66D, #FF6B6B);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    margin: 0 auto;
    border: 5px solid white;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.main-title {
    font-size: 36px;
    color: #2c3e50;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.subtitle {
    font-size: 18px;
    color: #7f8c8d;
    font-style: italic;
}

/* セクション共通 */
.section-title {
    font-size: 28px;
    color: #2c3e50;
    margin-bottom: 20px;
    text-align: center;
}

/* 自己紹介カード */
.intro-card {
    background: white;
    border-radius: 15px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    text-align: center;
}

.intro-card p {
    font-size: 16px;
    margin-bottom: 15px;
    line-height: 1.8;
}

/* 好きなものセクション */
.favorites-section {
    background: white;
    border-radius: 15px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.favorites-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.favorite-item {
    background: linear-gradient(135deg, #E3F2FD, #BBDEFB);
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease;
}

.favorite-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.favorite-icon {
    font-size: 48px;
    display: block;
    margin-bottom: 10px;
}

.favorite-item h3 {
    font-size: 18px;
    color: #1976D2;
    margin-bottom: 8px;
}

.favorite-item p {
    font-size: 14px;
    color: #555;
}

/* スキルセクション */
.skills-section {
    background: white;
    border-radius: 15px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.skills-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    margin-top: 20px;
}

.skill-item {
    padding: 12px 24px;
    border-radius: 25px;
    font-weight: bold;
    font-size: 16px;
    transition: transform 0.3s ease;
}

.skill-item:hover {
    transform: scale(1.1);
}

.skill-item.html {
    background: linear-gradient(135deg, #FF6B6B, #FF5252);
    color: white;
}

.skill-item.css {
    background: linear-gradient(135deg, #4ECDC4, #26C6DA);
    color: white;
}

.skill-item.scratch {
    background: linear-gradient(135deg, #FFE66D, #FFCC02);
    color: #333;
}

.skill-item.python {
    background: linear-gradient(135deg, #4CAF50, #66BB6A);
    color: white;
}

/* 作品セクション */
.portfolio-section {
    background: white;
    border-radius: 15px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.portfolio-item {
    background: linear-gradient(135deg, #F3E5F5, #E1BEE7);
    border-radius: 12px;
    padding: 25px;
    text-align: center;
    transition: all 0.3s ease;
}

.portfolio-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
}

.portfolio-image {
    font-size: 60px;
    margin-bottom: 15px;
}

.portfolio-item h3 {
    font-size: 18px;
    color: #7B1FA2;
    margin-bottom: 10px;
}

.portfolio-item p {
    font-size: 14px;
    color: #555;
}

/* 連絡先セクション */
.contact-section {
    background: white;
    border-radius: 15px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    text-align: center;
}

.contact-info p {
    font-size: 16px;
    margin-bottom: 10px;
    color: #555;
}

/* フッター */
.footer {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    padding: 25px;
    text-align: center;
    backdrop-filter: blur(10px);
}

.footer p {
    margin-bottom: 15px;
    color: #555;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.social-link {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-weight: bold;
    transition: all 0.3s ease;
}

.social-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(102, 126, 234, 0.4);
}

/* レスポンシブデザイン */
@media (max-width: 768px) {
    .container {
        padding: 15px;
    }
    
    .main-title {
        font-size: 28px;
    }
    
    .section-title {
        font-size: 24px;
    }
    
    .favorites-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .portfolio-grid {
        grid-template-columns: 1fr;
    }
    
    .skills-list {
        flex-direction: column;
        align-items: center;
    }
    
    .social-links {
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 480px) {
    .favorites-grid {
        grid-template-columns: 1fr;
    }
    
    .avatar {
        width: 100px;
        height: 100px;
        font-size: 50px;
    }
    
    .main-title {
        font-size: 24px;
    }
}

/* アニメーション */
@keyframes fadeIn {
    from { 
        opacity: 0; 
        transform: translateY(20px); 
    }
    to { 
        opacity: 1; 
        transform: translateY(0); 
    }
}

.header,
.intro-card,
.favorites-section,
.skills-section,
.portfolio-section,
.contact-section,
.footer {
    animation: fadeIn 0.6s ease-out;
}

/* ちょっとした遊び心 */
.avatar:hover {
    animation: bounce 0.6s ease;
}

@keyframes bounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.favorite-icon:hover {
    animation: wiggle 0.5s ease;
}

@keyframes wiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-10deg); }
    75% { transform: rotate(10deg); }
}`;

  return (
    <div className={styles.samplePage}>
      <div className={styles.header}>
        <h2 className={styles.title}>🎯 チュートリアル実践例</h2>
        <p className={styles.subtitle}>
          学んだHTML・CSSを使って作った自己紹介ページのサンプルです
        </p>
      </div>

      <div className={styles.description}>
        <h3>💡 このサンプルで使っている技術</h3>
        <div className={styles.techGrid}>
          <div className={styles.techItem}>
            <span className={styles.techIcon}>🏗️</span>
            <strong>HTML構造</strong>
            <p>見出し、段落、リスト、セクション</p>
          </div>
          <div className={styles.techItem}>
            <span className={styles.techIcon}>🎨</span>
            <strong>CSS装飾</strong>
            <p>グラデーション、影、アニメーション</p>
          </div>
          <div className={styles.techItem}>
            <span className={styles.techIcon}>📱</span>
            <strong>レスポンシブ</strong>
            <p>スマホでも見やすいデザイン</p>
          </div>
          <div className={styles.techItem}>
            <span className={styles.techIcon}>✨</span>
            <strong>インタラクション</strong>
            <p>ホバー効果とアニメーション</p>
          </div>
        </div>
      </div>

      <CodeExample
        title="完成した自己紹介ページ"
        html={htmlContent}
        css={cssContent}
      />

      <div className={styles.tips}>
        <h3>🚀 カスタマイズのアイデア</h3>
        <div className={styles.tipsList}>
          <div className={styles.tipItem}>
            <span className={styles.tipIcon}>🎨</span>
            <div>
              <strong>色を変えてみよう</strong>
              <p>グラデーションの色を自分の好きな色に変更</p>
            </div>
          </div>
          <div className={styles.tipItem}>
            <span className={styles.tipIcon}>📝</span>
            <div>
              <strong>内容を自分のものに</strong>
              <p>名前、好きなもの、スキルを自分の情報に変更</p>
            </div>
          </div>
          <div className={styles.tipItem}>
            <span className={styles.tipIcon}>🖼️</span>
            <div>
              <strong>画像を追加</strong>
              <p>プロフィール写真や作品の画像を追加</p>
            </div>
          </div>
          <div className={styles.tipItem}>
            <span className={styles.tipIcon}>🌟</span>
            <div>
              <strong>新しいセクション追加</strong>
              <p>趣味、将来の夢、友達紹介などのセクションを追加</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.challenge}>
        <h3>🎯 チャレンジ課題</h3>
        <ol className={styles.challengeList}>
          <li>このコードをコピーして、自分の情報に書き換えてみよう</li>
          <li>新しいセクション（例：将来の夢）を追加してみよう</li>
          <li>異なる色のテーマ（例：緑系、オレンジ系）で作ってみよう</li>
          <li>新しいアニメーション効果を追加してみよう</li>
          <li>お友達の自己紹介ページも作ってもらおう</li>
        </ol>
      </div>
    </div>
  );
}