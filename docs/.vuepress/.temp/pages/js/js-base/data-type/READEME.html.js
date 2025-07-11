import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/js/js-base/data-type/READEME.html.vue"
const data = JSON.parse("{\"path\":\"/js/js-base/data-type/READEME.html\",\"title\":\"数据类型READEME\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"数据类型READEME\"},\"readingTime\":{\"minutes\":0.02,\"words\":6},\"filePathRelative\":\"js/js-base/data-type/READEME.md\"}")
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
