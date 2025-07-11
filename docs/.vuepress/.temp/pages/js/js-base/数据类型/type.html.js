import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/js/js-base/数据类型/type.html.vue"
const data = JSON.parse("{\"path\":\"/js/js-base/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/type.html\",\"title\":\"基本类型\",\"lang\":\"zh-CN\",\"frontmatter\":{\"footer\":\"This site is served by GitHub Pages\",\"copyright\":false},\"readingTime\":{\"minutes\":0.05,\"words\":14},\"filePathRelative\":\"js/js-base/数据类型/type.md\"}")
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
