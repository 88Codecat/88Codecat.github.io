import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/js/js-browser/READEME.html.vue"
const data = JSON.parse("{\"path\":\"/js/js-browser/READEME.html\",\"title\":\"浏览器\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"浏览器\"},\"readingTime\":{\"minutes\":0.01,\"words\":4},\"filePathRelative\":\"js/js-browser/READEME.md\"}")
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
