import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/js/index.html.vue"
const data = JSON.parse("{\"path\":\"/js/\",\"title\":\"JS首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"JS首页\",\"next\":false,\"footer\":\"This site is served by GitHub Pages\",\"copyright\":false,\"breadcrumb\":false},\"readingTime\":{\"minutes\":0.08,\"words\":23},\"filePathRelative\":\"js/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
