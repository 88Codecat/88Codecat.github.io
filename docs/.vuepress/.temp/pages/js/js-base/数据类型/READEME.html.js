import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/js/js-base/数据类型/READEME.html.vue"
const data = JSON.parse("{\"path\":\"/js/js-base/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/READEME.html\",\"title\":\"数据类型首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"数据类型首页\"},\"readingTime\":{\"minutes\":0.02,\"words\":7},\"filePathRelative\":\"js/js-base/数据类型/READEME.md\"}")
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
