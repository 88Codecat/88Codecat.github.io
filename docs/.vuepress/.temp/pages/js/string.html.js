import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/js/string.html.vue"
const data = JSON.parse("{\"path\":\"/js/string.html\",\"title\":\"数字类型\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0.01,\"words\":4},\"filePathRelative\":\"js/string.md\"}")
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
