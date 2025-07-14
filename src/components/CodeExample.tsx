import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';
import styles from './CodeExample.module.css';

interface CodeExampleProps {
  html: string;
  css?: string;
  title?: string;
}

export default function CodeExample({ html, css, title }: CodeExampleProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className={styles.codeExample}>
      {title && <h4 className={styles.title}>{title}</h4>}
      
      <div className={styles.preview}>
        <div className={styles.previewLabel}>実際の表示：</div>
        <div 
          className={styles.previewContent}
          dangerouslySetInnerHTML={{ 
            __html: css ? `<style>${css}</style>${html}` : html 
          }}
        />
      </div>

      <button 
        className={styles.toggleButton}
        onClick={() => setShowCode(!showCode)}
      >
        {showCode ? '▼ コードを隠す' : '▶ コードを見る'}
      </button>

      {showCode && (
        <div className={styles.codeContainer}>
          {css && (
            <>
              <div className={styles.codeLabel}>CSS:</div>
              <CodeBlock language="css">{css}</CodeBlock>
            </>
          )}
          <div className={styles.codeLabel}>HTML:</div>
          <CodeBlock language="html">{html}</CodeBlock>
        </div>
      )}
    </div>
  );
}