import { viteBundler } from '@vuepress/bundler-vite'
import theme from './theme.js';
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  base: '/',
  lang: 'zh-CN',
  title: '88codecat',
  description: '这是我的第一个 VuePress 站点',



  theme,
})