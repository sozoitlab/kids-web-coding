import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  preparationSidebar: [
    {
      type: 'category',
      label: '事前準備',
      items: [
        'preparation/environment',
        'preparation/accounts',
        'preparation/items',
      ],
    },
  ],
  tutorialSidebar: [
    {
      type: 'category',
      label: 'チュートリアル',
      items: [
        'tutorial/introduction',
        'tutorial/html-basics',
        'tutorial/css-styling',
        'tutorial/advanced-css',
        'tutorial/publishing',
        'tutorial/sample-page',
      ],
    },
  ],
  referenceSidebar: [
    {
      type: 'category',
      label: 'リファレンス',
      items: [
        'reference/html-tags',
        'reference/css-properties',
        'reference/colors',
      ],
    },
  ],
  supportSidebar: [
    {
      type: 'category',
      label: 'サポート',
      items: [
        'support/faq',
        'support/troubleshooting',
        'support/parents',
        'support/instructors',
      ],
    },
  ],
};

export default sidebars;
