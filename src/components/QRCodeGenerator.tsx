import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import styles from './QRCodeGenerator.module.css';

export default function QRCodeGenerator() {
  const [url, setUrl] = useState('');
  const [qrCodeDataURL, setQrCodeDataURL] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [colorScheme, setColorScheme] = useState('classic');

  const colorSchemes = {
    classic: { dark: '#000000', light: '#FFFFFF', name: 'クラシック' },
    blue: { dark: '#1976D2', light: '#E3F2FD', name: 'ブルー' },
    green: { dark: '#388E3C', light: '#E8F5E9', name: 'グリーン' },
    purple: { dark: '#7B1FA2', light: '#F3E5F5', name: 'パープル' },
    orange: { dark: '#F57C00', light: '#FFF3E0', name: 'オレンジ' }
  };

  const validateUrl = (inputUrl: string) => {
    try {
      const urlObj = new URL(inputUrl);
      return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const generateQRCode = async (inputUrl: string) => {
    if (!validateUrl(inputUrl)) {
      setQrCodeDataURL('');
      setIsValidUrl(false);
      return;
    }

    setIsValidUrl(true);
    setIsGenerating(true);

    try {
      const colors = colorSchemes[colorScheme as keyof typeof colorSchemes];
      const dataURL = await QRCode.toDataURL(inputUrl, {
        width: 300,
        margin: 2,
        color: {
          dark: colors.dark,
          light: colors.light
        },
        errorCorrectionLevel: 'M'
      });
      setQrCodeDataURL(dataURL);
    } catch (error) {
      console.error('QRコード生成エラー:', error);
      setQrCodeDataURL('');
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (url.trim()) {
        generateQRCode(url.trim());
      } else {
        setQrCodeDataURL('');
        setIsValidUrl(false);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [url, colorScheme]);

  const handleDownload = () => {
    if (!qrCodeDataURL) return;

    const link = document.createElement('a');
    link.download = `qrcode-${colorScheme}.png`;
    link.href = qrCodeDataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    if (!qrCodeDataURL) return;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>QRコード - ${url}</title>
            <style>
              body { 
                font-family: 'Segoe UI', Arial, sans-serif; 
                text-align: center; 
                padding: 40px 20px; 
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                margin: 0;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
              .container {
                background: white;
                padding: 40px;
                border-radius: 20px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                max-width: 500px;
              }
              h1 { 
                color: #333; 
                margin: 0 0 30px 0;
                font-size: 28px;
              }
              img { 
                max-width: 100%; 
                height: auto; 
                border-radius: 15px;
                box-shadow: 0 10px 20px rgba(0,0,0,0.1);
              }
              .url { 
                word-break: break-all; 
                margin: 30px 0; 
                font-size: 14px;
                background: #f8f9fa;
                padding: 15px;
                border-radius: 10px;
                font-family: monospace;
              }
              .instructions {
                color: #666;
                font-size: 16px;
                line-height: 1.6;
              }
              .qr-frame {
                background: white;
                padding: 20px;
                border-radius: 15px;
                display: inline-block;
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>🌟 私のウェブサイト 🌟</h1>
              <div class="qr-frame">
                <img src="${qrCodeDataURL}" alt="QRコード" />
              </div>
              <div class="url">${url}</div>
              <div class="instructions">
                📱 QRコードをスマホで読み取ってアクセスしてね！<br>
                カメラを向けるだけで簡単に開けるよ ✨
              </div>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const handleShare = async () => {
    if (!navigator.share || !qrCodeDataURL) return;

    try {
      // QRコードを blob に変換
      const response = await fetch(qrCodeDataURL);
      const blob = await response.blob();
      const file = new File([blob], 'qrcode.png', { type: 'image/png' });

      await navigator.share({
        title: '私のウェブサイトのQRコード',
        text: `私のウェブサイトをチェックしてね！ ${url}`,
        files: [file]
      });
    } catch (error) {
      console.log('共有がキャンセルされました');
    }
  };

  return (
    <div className={styles.qrGenerator}>
      <div className={styles.header}>
        <div className={styles.iconContainer}>
          <span className={styles.mainIcon}>📱</span>
          <span className={styles.sparkle}>✨</span>
        </div>
        <h3 className={styles.title}>QRコードマジック</h3>
        <p className={styles.subtitle}>
          あなたのウェブサイトを魔法のコードに変身させよう！
        </p>
      </div>

      <div className={styles.inputSection}>
        <div className={styles.inputWrapper}>
          <label htmlFor="url-input" className={styles.label}>
            🌐 ウェブサイトのURL
          </label>
          <div className={styles.inputContainer}>
            <span className={styles.inputIcon}>🔗</span>
            <input
              id="url-input"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://yourname.github.io/your-website/"
              className={styles.input}
            />
          </div>
          {url && !isValidUrl && !isGenerating && (
            <div className={styles.error}>
              <span className={styles.errorIcon}>⚠️</span>
              正しいURLを入力してください (https:// で始まる)
            </div>
          )}
        </div>

        {isValidUrl && (
          <div className={styles.colorSection}>
            <label className={styles.colorLabel}>🎨 カラーテーマを選ぼう</label>
            <div className={styles.colorPicker}>
              {Object.entries(colorSchemes).map(([key, scheme]) => (
                <button
                  key={key}
                  onClick={() => setColorScheme(key)}
                  className={`${styles.colorButton} ${colorScheme === key ? styles.active : ''}`}
                  style={{
                    background: `linear-gradient(135deg, ${scheme.dark}, ${scheme.light})`,
                  }}
                  title={scheme.name}
                >
                  <span className={styles.colorCheck}>
                    {colorScheme === key && '✓'}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {isGenerating && (
        <div className={styles.loading}>
          <div className={styles.loadingAnimation}>
            <div className={styles.spinner}></div>
            <div className={styles.particles}>
              <span>✨</span>
              <span>⭐</span>
              <span>💫</span>
            </div>
          </div>
          <p>魔法をかけています...</p>
        </div>
      )}

      {qrCodeDataURL && (
        <div className={styles.qrSection}>
          <div className={styles.qrContainer}>
            <div className={styles.qrFrame}>
              <img 
                src={qrCodeDataURL} 
                alt="生成されたQRコード" 
                className={styles.qrImage}
              />
              <div className={styles.qrGlow}></div>
            </div>
            <div className={styles.successBadge}>
              <span>🎉</span>
              完成！
            </div>
          </div>
          
          <div className={styles.urlDisplay}>
            <div className={styles.urlHeader}>📝 あなたのサイト</div>
            <div className={styles.urlText}>{url}</div>
          </div>

          <div className={styles.actions}>
            <button 
              onClick={handleDownload}
              className={`${styles.actionBtn} ${styles.downloadBtn}`}
            >
              <span className={styles.btnIcon}>📥</span>
              <span className={styles.btnText}>ダウンロード</span>
            </button>
            <button 
              onClick={handlePrint}
              className={`${styles.actionBtn} ${styles.printBtn}`}
            >
              <span className={styles.btnIcon}>🖨️</span>
              <span className={styles.btnText}>印刷</span>
            </button>
            {navigator.share && (
              <button 
                onClick={handleShare}
                className={`${styles.actionBtn} ${styles.shareBtn}`}
              >
                <span className={styles.btnIcon}>📤</span>
                <span className={styles.btnText}>共有</span>
              </button>
            )}
          </div>

          <div className={styles.instructions}>
            <h4>📱 使い方ガイド</h4>
            <div className={styles.stepGrid}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <strong>カメラを開く</strong>
                  <p>スマホのカメラアプリを起動</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <strong>QRコードを映す</strong>
                  <p>カメラをQRコードに向ける</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <strong>リンクをタップ</strong>
                  <p>表示されたリンクを押す</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <strong>サイトが開く！</strong>
                  <p>あなたのサイトが表示される</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.tips}>
            <h4>💡 活用アイデア</h4>
            <div className={styles.tipGrid}>
              <div className={styles.tip}>
                <span className={styles.tipIcon}>💳</span>
                <span>名刺に印刷</span>
              </div>
              <div className={styles.tip}>
                <span className={styles.tipIcon}>📋</span>
                <span>掲示板に貼る</span>
              </div>
              <div className={styles.tip}>
                <span className={styles.tipIcon}>👨‍👩‍👧‍👦</span>
                <span>家族に見せる</span>
              </div>
              <div className={styles.tip}>
                <span className={styles.tipIcon}>👫</span>
                <span>友達と共有</span>
              </div>
              <div className={styles.tip}>
                <span className={styles.tipIcon}>🎒</span>
                <span>ランドセルに貼る</span>
              </div>
              <div className={styles.tip}>
                <span className={styles.tipIcon}>📖</span>
                <span>ノートに貼る</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}