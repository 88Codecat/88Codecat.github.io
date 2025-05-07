import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/js/2.html.vue"
const data = JSON.parse("{\"path\":\"/js/2.html\",\"title\":\"2.JS2\",\"lang\":\"zh-CN\",\"frontmatter\":{\"footer\":\"This site is served by GitHub Pages\",\"copyright\":false},\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"js/2.md\"}")
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
