import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/js/6.html.vue"
const data = JSON.parse("{\"path\":\"/js/6.html\",\"title\":\"6.js6\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0.01,\"words\":2},\"filePathRelative\":\"js/6.md\"}")
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
