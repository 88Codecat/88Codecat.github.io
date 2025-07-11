import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/js/js-browser/event/READE.html.vue"
const data = JSON.parse("{\"path\":\"/js/js-browser/event/READE.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"js/js-browser/event/READE.md\"}")
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
