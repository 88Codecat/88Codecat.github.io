import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/linux/index.html.vue"
const data = JSON.parse("{\"path\":\"/linux/\",\"title\":\"Linux学习\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0.01,\"words\":3},\"filePathRelative\":\"linux/README.md\"}")
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
