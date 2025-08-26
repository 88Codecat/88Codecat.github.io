import comp from "D:/MyBlog/docs/.vuepress/.temp/pages/nodejs/1.html.vue"
const data = JSON.parse("{\"path\":\"/nodejs/1.html\",\"title\":\"npm\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":2.79,\"words\":836},\"filePathRelative\":\"nodejs/1.md\"}")
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
