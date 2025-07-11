import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/js/js-base/READEME.html.vue"
const data = JSON.parse("{\"path\":\"/js/js-base/READEME.html\",\"title\":\"JavaScript基础\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"JavaScript基础\",\"next\":false,\"footer\":\"This site is served by GitHub Pages\",\"copyright\":false,\"breadcrumb\":false},\"readingTime\":{\"minutes\":0.08,\"words\":24},\"filePathRelative\":\"js/js-base/READEME.md\"}")
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
