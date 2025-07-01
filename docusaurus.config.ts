import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'キッズWebコーディング講座',
  tagline: '君だけのホームページを世界に公開しよう！',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://kids-web-coding.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kids-web-coding', // Usually your GitHub org/user name.
  projectName: 'kids-web-coding', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/takanori-matsushita/kids-web-coding/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'キッズWebコーディング講座',
      logo: {
        alt: 'キッズWebコーディング講座ロゴ',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'preparationSidebar',
          position: 'left',
          label: '事前準備',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'チュートリアル',
        },
        {
          type: 'docSidebar',
          sidebarId: 'referenceSidebar',
          position: 'left',
          label: 'リファレンス',
        },
        {
          type: 'docSidebar',
          sidebarId: 'supportSidebar',
          position: 'left',
          label: 'サポート',
        },
        {
          to: '/docs/next-steps',
          label: '次のステップ',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '講座内容',
          items: [
            {
              label: '事前準備',
              to: '/docs/preparation/environment',
            },
            {
              label: 'チュートリアル',
              to: '/docs/tutorial/introduction',
            },
            {
              label: 'リファレンス',
              to: '/docs/reference/html-tags',
            },
          ],
        },
        {
          title: 'サポート',
          items: [
            {
              label: 'よくある質問',
              to: '/docs/support/faq',
            },
            {
              label: '保護者向けガイド',
              to: '/docs/support/parents',
            },
            {
              label: '講師向けガイド',
              to: '/docs/support/instructors',
            },
          ],
        },
        {
          title: 'お問い合わせ',
          items: [
            {
              label: 'お問い合わせフォーム',
              href: '#contact',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} キッズWebコーディング講座. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
