import { defineConfig } from 'vitepress'
import tsPlayground from '../ts-playground.json'
import tsLearn from '../ts-learn.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'src',
  title: "TypeScript 入门教程",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'TypeScript 入门教程', link: '/docs/ts-learn/1 如何阅读本小册' },
      { text: 'TypeScript 类型体操', link: '/docs/ts-playground/1.开篇：用正确的方式学习 TypeScript' },
    ],
    sidebar: {
      '/docs/ts-learn': [
        {
          text: 'TypeScript 入门教程',
          collapsed: false,
          items: tsLearn
        },
      ],
      '/docs/ts-playground': [
        {
          text: 'TypeScript 类型体操',
          collapsed: false,
          items: tsPlayground
        }
      ],
    }
  }
})
