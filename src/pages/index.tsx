import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/preparation/environment">
            講座をはじめる ⭐
          </Link>
        </div>
      </div>
    </header>
  );
}

function CourseOverview() {
  return (
    <section className={styles.overviewSection}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className={styles.overviewCard}>
              <h3>👦 対象年齢</h3>
              <p>小学3年生〜6年生</p>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.overviewCard}>
              <h3>⏰ 講座時間</h3>
              <p>3時間（休憩含む）</p>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.overviewCard}>
              <h3>💻 必要環境</h3>
              <p>インターネット接続されたPC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section className={styles.demoSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>完成作品デモ</Heading>
        <p className={styles.sectionDescription}>講座で作成するホームページのサンプルです</p>
        <iframe
          height="500"
          style={{width: '100%'}}
          scrolling="no"
          title="introduce"
          src="https://codepen.io/sxvwefjj/embed/ogXKMdm?default-tab=html%2Cresult"
          frameBorder="no"
          loading="lazy"
          allowTransparency={true}
          allowFullScreen={true}
        >
          See the Pen <a href="https://codepen.io/sxvwefjj/pen/ogXKMdm">
          introduce</a> by 松下貴紀 (<a href="https://codepen.io/sxvwefjj">@sxvwefjj</a>)
          on <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </div>
    </section>
  );
}

function WhyLearnCoding() {
  return (
    <section className={styles.whySection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>なぜWebコーディングを学ぶの？</Heading>
        <div className="row">
          <div className="col col--6">
            <div className={styles.reasonCard}>
              <h3>🎨 創造力を発揮</h3>
              <p>自分だけのオリジナルホームページを作成し、アイデアを形にする力を養います。</p>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.reasonCard}>
              <h3>🧩 論理的思考力</h3>
              <p>HTMLとCSSの構造を理解することで、順序立てて考える力が身につきます。</p>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.reasonCard}>
              <h3>🌍 世界への発信</h3>
              <p>作成したホームページを実際に公開し、世界中の人に見てもらう体験ができます。</p>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.reasonCard}>
              <h3>💡 未来のスキル</h3>
              <p>プログラミングの基礎を学び、将来役立つスキルの第一歩を踏み出します。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ParentsSection() {
  return (
    <section className={styles.parentsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>保護者の皆様へ</Heading>
        <div className={styles.parentsContent}>
          <p>本講座は、お子様がWebコーディングの基礎を楽しく学べるよう設計されています。</p>
          <ul>
            <li>実際に動くホームページを作成し、達成感を味わえます</li>
            <li>創造力と論理的思考力を同時に養えます</li>
            <li>講師がお子様一人ひとりをサポートします</li>
            <li>アカウント作成時は保護者同伴をお願いしています</li>
          </ul>
          <Link className="button button--primary" to="/docs/support/parents">
            保護者向けガイドを見る
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>講座への参加をご検討の方へ</Heading>
        <div className={styles.ctaButtons}>
          <Link className="button button--primary button--lg" to="/docs/preparation/environment">
            事前準備をはじめる
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - 小学生向けWebコーディング入門`}
      description="小学3-6年生向けのWebコーディング講座。HTMLとCSSを使って、自分だけのホームページを作成し、GitHub Pagesで世界に公開しよう！">
      <HomepageHeader />
      <main>
        <CourseOverview />
        <DemoSection />
        <WhyLearnCoding />
        <ParentsSection />
        <CTASection />
      </main>
    </Layout>
  );
}