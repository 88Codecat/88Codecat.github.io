import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/js/js-base/data-type/number.html.vue"
const data = JSON.parse("{\"path\":\"/js/js-base/data-type/number.html\",\"title\":\"字符串类型\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0.02,\"words\":5},\"filePathRelative\":\"js/js-base/data-type/number.md\"}")
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
