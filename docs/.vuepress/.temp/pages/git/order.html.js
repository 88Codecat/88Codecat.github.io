import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/git/order.html.vue"
const data = JSON.parse("{\"path\":\"/git/order.html\",\"title\":\"常见命令\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":6.48,\"words\":1945},\"filePathRelative\":\"git/order.md\"}")
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
