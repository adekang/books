import { defineConfig } from 'vitepress'
import routes from '../routes.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'src',
  title: "TypeScript 入门教程",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'TypeScript 入门教程', link: '/docs/1.开篇：用正确的方式学习 TypeScript' },
    ],
    sidebar: {
      '/docs/': [
        {
          text: 'TypeScript 入门教程',
          collapsed: false,
          items: routes
        }
      ],
    }
  }
})
