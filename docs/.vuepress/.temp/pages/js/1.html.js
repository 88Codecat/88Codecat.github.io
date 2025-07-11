import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/js/1.html.vue"
const data = JSON.parse("{\"path\":\"/js/1.html\",\"title\":\"JavaScript数组对象常见的数组内置方法：\",\"lang\":\"zh-CN\",\"frontmatter\":{\"prev\":\"./\",\"breadcrumb\":false},\"readingTime\":{\"minutes\":2.03,\"words\":609},\"filePathRelative\":\"js/1.md\"}")
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
