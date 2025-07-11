import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/js/js-browser/document/index.html.vue"
const data = JSON.parse("{\"path\":\"/js/js-browser/document/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"js/js-browser/document/README.md\"}")
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
