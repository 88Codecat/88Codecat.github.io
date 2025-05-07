import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/js/3.html.vue"
const data = JSON.parse("{\"path\":\"/js/3.html\",\"title\":\"3.JS3\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0.03,\"words\":8},\"filePathRelative\":\"js/3.md\"}")
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
