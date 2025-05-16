import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/linux/order.html.vue"
const data = JSON.parse("{\"path\":\"/linux/order.html\",\"title\":\"Ubuntu常用命令\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":3.57,\"words\":1070},\"filePathRelative\":\"linux/order.md\"}")
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
