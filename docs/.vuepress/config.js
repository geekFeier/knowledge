import { defaultTheme } from '@vuepress/theme-default'
import sidebar from "./sidebar"
import navbar from "./navbar"

module.exports = {
  base: '/knowledge/',
  title: '中国古代文化常识',
  description: '中国古代文化常识', 
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }],
    ['link', { rel: 'stylesheet', href: '/theme/style.css' }],
  ],

  theme: defaultTheme({
    // colorMode: 'dark',
    collapsable: false,//是否可折叠
    navbar,
    sidebar
  }),
port: 80,
}
