import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/js/js-base/data-type/array.html.vue"
const data = JSON.parse("{\"path\":\"/js/js-base/data-type/array.html\",\"title\":\"数组\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":6.03,\"words\":1810},\"filePathRelative\":\"js/js-base/data-type/array.md\"}")
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
